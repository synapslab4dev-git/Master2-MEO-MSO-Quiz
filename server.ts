import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import axios from 'axios';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());
  app.use(cookieParser());

  // OAuth Setup
  const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
  const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

  // 1. Get OAuth URL
  app.get('/api/auth/github/url', (req, res) => {
    if (!GITHUB_CLIENT_ID) {
      return res.status(500).json({ error: 'GITHUB_CLIENT_ID is not configured' });
    }

    // Determine the origin, strictly forcing https for production run.app domains
    const host = req.headers['host'];
    let origin = process.env.APP_URL;
    
    if (!origin && host) {
      const isLocal = host.includes('localhost') || host.includes('127.0.0.1');
      origin = `${isLocal ? 'http' : 'https'}://${host}`;
    }
    
    const redirectUri = `${origin}/auth/callback`;
    const params = new URLSearchParams({
      client_id: GITHUB_CLIENT_ID,
      redirect_uri: redirectUri,
      scope: 'read:user repo',
      state: Math.random().toString(36).substring(7),
    });

    const authUrl = `https://github.com/login/oauth/authorize?${params.toString()}`;
    res.json({ url: authUrl });
  });

  // 1b. Check if Configured
  app.get('/api/auth/status', (req, res) => {
    res.json({ 
      configured: !!GITHUB_CLIENT_ID && !!GITHUB_CLIENT_SECRET,
      clientId: GITHUB_CLIENT_ID ? `${GITHUB_CLIENT_ID.substring(0, 4)}...` : null
    });
  });

  // 2. Callback handler
  app.get(['/auth/callback', '/auth/callback/'], async (req, res) => {
    const { code } = req.query;

    if (!code) {
      return res.status(400).send('Missing code');
    }

    try {
      const tokenResponse = await axios.post(
        'https://github.com/login/oauth/access_token',
        {
          client_id: GITHUB_CLIENT_ID,
          client_secret: GITHUB_CLIENT_SECRET,
          code,
        },
        {
          headers: {
            Accept: 'application/json',
          },
        }
      );

      const accessToken = tokenResponse.data.access_token;

      if (!accessToken) {
        throw new Error('No access token received from GitHub');
      }

      // Set cookie with the token
      res.cookie('github_token', accessToken, {
        httpOnly: true,
        secure: true,
        sameSite: 'none',
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
      });

      // Send success message and close popup
      res.send(`
        <html>
          <body style="font-family: sans-serif; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; background: #0d1117; color: white;">
            <div style="text-align: center;">
              <h2>Authentification réussie !</h2>
              <p>Cette fenêtre va se fermer automatiquement...</p>
              <script>
                if (window.opener) {
                  window.opener.postMessage({ type: 'OAUTH_AUTH_SUCCESS' }, '*');
                  window.close();
                } else {
                  window.location.href = '/';
                }
              </script>
            </div>
          </body>
        </html>
      `);
    } catch (error) {
      console.error('Exchange error:', error);
      res.status(500).send('Authentication failed');
    }
  });

  // 3. Get user info
  app.get('/api/user/github', async (req, res) => {
    const token = req.cookies.github_token;
    if (!token) {
      return res.status(401).json({ error: 'Not authenticated' });
    }

    try {
      const userResponse = await axios.get('https://api.github.com/user', {
        headers: {
          Authorization: `token ${token}`,
        },
      });
      res.json(userResponse.data);
    } catch (error) {
      res.status(401).json({ error: 'Invalid token' });
    }
  });

  // 4. Logout
  app.post('/api/auth/logout', (req, res) => {
    res.clearCookie('github_token', {
      secure: true,
      sameSite: 'none',
    });
    res.json({ success: true });
  });

  // 5. Push code to GitHub
  app.post('/api/github/push', async (req, res) => {
    const token = req.cookies.github_token;
    if (!token) return res.status(401).json({ error: 'Not authenticated' });

    try {
      // Get user info
      const userRes = await axios.get('https://api.github.com/user', {
        headers: { Authorization: `token ${token}` }
      });
      const username = userRes.data.login;
      const repoName = 'Master2-MEO-MSO-Quiz';

      // Check if repo exists
      let repoExists = false;
      try {
        await axios.get(`https://api.github.com/repos/${username}/${repoName}`, {
          headers: { Authorization: `token ${token}` }
        });
        repoExists = true;
      } catch (e) {
        // Repo doesn't exist
      }

      if (!repoExists) {
        await axios.post('https://api.github.com/user/repos', {
          name: repoName,
          description: 'Quiz application for Master 2 MEO MSO, integrated with GitHub OAuth.',
          private: false,
          auto_init: true
        }, {
          headers: { Authorization: `token ${token}` }
        });
        // Wait a bit for repo creation
        await new Promise(resolve => setTimeout(resolve, 2000));
      }

      // Files to push
      const filesToPush = [
        'src/App.tsx',
        'src/quizData.ts',
        'server.ts',
        'package.json',
        'README.md',
        'public/manifest.json' // Optional, but let's stick to main ones
      ];

      const results = [];
      const fs = await import('fs/promises');

      for (const filePath of filesToPush) {
        try {
          const fullPath = path.join(process.cwd(), filePath);
          const content = await fs.readFile(fullPath, 'utf8');
          const encodedContent = Buffer.from(content).toString('base64');

          // Get file SHA if it exists
          let sha;
          try {
            const fileRes = await axios.get(`https://api.github.com/repos/${username}/${repoName}/contents/${filePath}`, {
              headers: { Authorization: `token ${token}` }
            });
            sha = fileRes.data.sha;
          } catch (e) {}

          await axios.put(`https://api.github.com/repos/${username}/${repoName}/contents/${filePath}`, {
            message: `Update ${filePath} from App`,
            content: encodedContent,
            sha
          }, {
            headers: { Authorization: `token ${token}` }
          });
          results.push({ file: filePath, status: 'success' });
        } catch (err) {
          results.push({ file: filePath, status: 'error', error: (err as Error).message });
        }
      }

      res.json({ success: true, repoUrl: `https://github.com/${username}/${repoName}`, results });
    } catch (error) {
      console.error('Push error:', error);
      res.status(500).json({ error: 'Failed to push to GitHub' });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
