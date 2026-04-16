import { useState, useEffect, useMemo } from 'react';
import { Github, LogOut, ExternalLink, User, GitBranch, Star, MapPin, Link as LinkIcon, BookOpen, CheckCircle2, RotateCcw, ChevronRight, History } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { allQuizzes } from './quizData';

interface GitHubUser {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  location: string;
  blog: string;
}

interface ScoreEntry {
  score: number;
  total: number;
  date: string;
  moduleTitle: string;
}

export default function App() {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Quiz State
  const [currentModuleId, setCurrentModuleId] = useState<string>('');
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: string }>({});
  const [showResults, setShowResults] = useState(false);
  const [history, setHistory] = useState<ScoreEntry[]>([]);
  const [pushing, setPushing] = useState(false);
  const [pushResult, setPushResult] = useState<{ success: boolean; repoUrl?: string } | null>(null);
  const [isConfigured, setIsConfigured] = useState<boolean | null>(null);

  const fetchUser = async () => {
    try {
      const response = await fetch('/api/user/github');
      if (response.ok) {
        const data = await response.json();
        setUser(data);
        setIsConfigured(true);
      } else {
        setUser(null);
        // Check if configured even if not logged in
        const configRes = await fetch('/api/auth/status');
        const configData = await configRes.json();
        setIsConfigured(configData.configured);
      }
    } catch (err) {
      console.error('Failed to fetch user:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();

    const handleMessage = (event: MessageEvent) => {
      const origin = event.origin;
      if (!origin.endsWith('.run.app') && !origin.includes('localhost')) return;
      
      if (event.data?.type === 'OAUTH_AUTH_SUCCESS') {
        fetchUser();
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  // Load History from localStorage
  useEffect(() => {
    if (user) {
      const storedHistory = localStorage.getItem(`quizHistory_${user.login}`);
      if (storedHistory) {
        setHistory(JSON.parse(storedHistory));
      }
    }
  }, [user]);

  const handleLogin = async () => {
    try {
      setError(null);
      const response = await fetch('/api/auth/github/url');
      const data = await response.json();
      
      if (data.url) {
        const width = 600;
        const height = 700;
        const left = window.screenX + (window.outerWidth - width) / 2;
        const top = window.screenY + (window.outerHeight - height) / 2;
        
        window.open(
          data.url,
          'github_oauth',
          `width=${width},height=${height},left=${left},top=${top}`
        );

        // Listen for success message from the callback popup
        const handleMessage = (event: MessageEvent) => {
          if (event.data?.type === 'OAUTH_AUTH_SUCCESS') {
            fetchUser();
            window.removeEventListener('message', handleMessage);
          }
        };
        window.addEventListener('message', handleMessage);
      } else {
        throw new Error(data.error || 'Impossible de récupérer l\'URL de connexion');
      }
    } catch (err: any) {
      console.error('Login error:', err);
      setError(err.message || 'Erreur lors de la connexion à GitHub');
    }
  };

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    setUser(null);
    setCurrentModuleId('');
  };

  const startQuiz = (id: string) => {
    setCurrentModuleId(id);
    setUserAnswers({});
    setShowResults(false);
  };

  const submitQuiz = () => {
    if (!currentModuleId || !user) return;
    
    const quiz = allQuizzes[currentModuleId];
    let score = 0;
    quiz.questions.forEach((q, idx) => {
      if (userAnswers[idx] === q.reponse) score++;
    });

    const newEntry: ScoreEntry = {
      score,
      total: quiz.questions.length,
      date: new Date().toLocaleString('fr-FR'),
      moduleTitle: quiz.title
    };

    const updatedHistory = [newEntry, ...history].slice(0, 10);
    setHistory(updatedHistory);
    localStorage.setItem(`quizHistory_${user.login}`, JSON.stringify(updatedHistory));
    setShowResults(true);
  };

  const handlePush = async () => {
    setPushing(true);
    setPushResult(null);
    try {
      const response = await fetch('/api/github/push', { method: 'POST' });
      const data = await response.json();
      setPushResult(data);
    } catch (err) {
      console.error('Push failed:', err);
      setPushResult({ success: false });
    } finally {
      setPushing(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0d1117] flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      <header className="border-bottom border-[#30363d] bg-[#161b22] px-6 py-4 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <button onClick={() => setCurrentModuleId('')} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Github className="w-8 h-8 text-white" />
            <h1 className="text-lg font-semibold text-white tracking-tight">GitHub Connector</h1>
          </button>
        </div>
        
        {user && (
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-[#21262d] rounded-full border border-[#30363d]">
              <img src={user.avatar_url} className="w-5 h-5 rounded-full" alt="" />
              <span className="text-xs font-medium text-white">{user.login}</span>
            </div>
            <button 
              onClick={handleLogout}
              className="flex items-center gap-2 text-sm font-medium hover:text-white transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Déconnexion
            </button>
          </div>
        )}
      </header>

      <main className="max-w-5xl mx-auto p-6 md:p-12">
        <AnimatePresence mode="wait">
          {!user ? (
            <motion.div 
              key="login"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center py-20"
            >
              <div className="mb-8 inline-flex p-4 rounded-full bg-[#161b22] border border-[#30363d]">
                <Github className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Apprentissage Master 2 MEO</h2>
              <p className="text-[#8b949e] max-w-md mx-auto mb-8 text-lg">
                Liez votre compte GitHub pour accéder aux questionnaires de révision et suivre votre progression.
              </p>

              <button
                onClick={handleLogin}
                className="inline-flex items-center gap-3 bg-[#238636] hover:bg-[#2eaa42] text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-lg active:scale-95"
              >
                <Github className="w-5 h-5" />
                Se connecter avec GitHub
              </button>
              
              {error && <p className="mt-4 text-red-400 text-sm">{error}</p>}
              
              <div className="mt-16 text-sm text-[#8b949e]">
                Créé par <a href="https://www.linkedin.com/in/françois-kinda-water-and-sustainable-development" target="_blank" className="text-blue-400 hover:underline">François KINDA</a>
              </div>
            </motion.div>
          ) : !currentModuleId ? (
            <motion.div 
              key="dashboard"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="space-y-8"
            >
              <div className="flex flex-col md:flex-row gap-6 items-center justify-between border-b border-[#30363d] pb-8">
                <div>
                  <h2 className="text-3xl font-bold text-white tracking-tight mb-2">Modules de Révision</h2>
                  <p className="text-[#8b949e]">Sélectionnez un cours pour commencer le test de connaissances.</p>
                </div>
                <div className="flex flex-col items-end gap-3">
                  <button 
                    onClick={handlePush}
                    disabled={pushing}
                    className="inline-flex items-center gap-2 bg-[#21262d] hover:bg-[#30363d] disabled:opacity-50 text-white px-4 py-2 rounded-lg text-sm border border-[#30363d] transition-all"
                  >
                    {pushing ? (
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <Github className="w-4 h-4" />
                    )}
                    {pushing ? 'Envoi en cours...' : 'Propulser sur GitHub'}
                  </button>
                  {pushResult && (
                    <motion.div 
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`text-xs flex items-center gap-1.5 ${pushResult.success ? 'text-green-400' : 'text-red-400'}`}
                    >
                      {pushResult.success ? (
                        <>
                          <CheckCircle2 className="w-3 h-3" />
                          Code publié ! <a href={pushResult.repoUrl} target="_blank" className="underline ml-1">Voir</a>
                        </>
                      ) : (
                        'Échec de la publication'
                      )}
                    </motion.div>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(allQuizzes).map(([id, quiz]) => (
                  <button
                    key={id}
                    onClick={() => startQuiz(id)}
                    className="flex text-left group bg-[#161b22] border border-[#30363d] p-6 rounded-2xl transition-all hover:border-blue-500/50 hover:bg-[#1c2128] shadow-sm"
                  >
                    <div className="flex-1">
                      <div className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                        Module {id}
                        <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{quiz.title}</h3>
                      <p className="text-[#8b949e] text-sm mt-3 flex items-center gap-2">
                        <Star className="w-4 h-4" />
                        {quiz.questions.length} questions
                      </p>
                    </div>
                  </button>
                ))}
              </div>

              {history.length > 0 && (
                <section className="mt-12">
                  <div className="flex items-center gap-3 mb-6">
                    <History className="w-5 h-5 text-blue-400" />
                    <h3 className="text-xl font-bold text-white">Historique récent</h3>
                  </div>
                  <div className="space-y-4">
                    {history.map((entry, i) => (
                      <div key={i} className="flex items-center justify-between bg-[#161b22] border border-[#30363d] p-4 rounded-xl">
                        <div>
                          <div className="text-sm font-bold text-white mb-1">{entry.moduleTitle}</div>
                          <div className="text-xs text-[#8b949e]">{entry.date}</div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <div className={`text-lg font-bold ${entry.score / entry.total >= 0.7 ? 'text-green-400' : 'text-yellow-400'}`}>
                              {entry.score} / {entry.total}
                            </div>
                            <div className="text-[10px] text-[#8b949e] uppercase font-bold">Score</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </motion.div>
          ) : (
            <motion.div 
              key="quiz"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4 mb-8">
                <button 
                  onClick={() => setCurrentModuleId('')}
                  className="p-2 hover:bg-[#30363d] rounded-lg transition-colors"
                >
                  <RotateCcw className="w-5 h-5" />
                </button>
                <div className="h-6 w-px bg-[#30363d]" />
                <h2 className="text-2xl font-bold text-white truncate">{allQuizzes[currentModuleId].title}</h2>
              </div>

              <div className="space-y-6 pb-20">
                {allQuizzes[currentModuleId].questions.map((q, idx) => (
                  <div key={idx} className={`bg-[#161b22] border border-[#30363d] p-6 rounded-2xl transition-all ${
                    showResults && userAnswers[idx] === q.reponse ? 'border-green-500/30' : 
                    showResults && userAnswers[idx] && userAnswers[idx] !== q.reponse ? 'border-red-500/30' : ''
                  }`}>
                    <div className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0d1117] flex items-center justify-center font-bold text-sm text-[#8b949e] border border-[#30363d]">
                        {idx + 1}
                      </span>
                      <p className="text-lg font-medium text-white leading-relaxed">{q.question}</p>
                    </div>

                    <div className="mt-6 ml-12 grid grid-cols-1 md:grid-cols-2 gap-3">
                      {Object.entries(q.options).map(([key, value]) => {
                        const isSelected = userAnswers[idx] === key;
                        const isCorrect = key === q.reponse;
                        
                        let optionStyle = "border-[#30363d] bg-[#0d1117] hover:border-blue-500/50";
                        if (showResults) {
                          if (isCorrect) optionStyle = "border-green-500 bg-green-500/10 text-green-400";
                          else if (isSelected) optionStyle = "border-red-500 bg-red-500/10 text-red-100";
                          else optionStyle = "border-[#30363d] opacity-50";
                        } else if (isSelected) {
                          optionStyle = "border-blue-500 bg-blue-500/10 text-blue-400 shadow-[0_0_15px_-5px_rgba(59,130,246,0.5)]";
                        }

                        return (
                          <button
                            key={key}
                            disabled={showResults}
                            onClick={() => setUserAnswers(prev => ({ ...prev, [idx]: key }))}
                            className={`flex items-start text-left p-4 rounded-xl border transition-all ${optionStyle}`}
                          >
                            <span className="font-bold uppercase mr-3 text-sm opacity-50">{key})</span>
                            <span className="text-sm">{value}</span>
                          </button>
                        );
                      })}
                    </div>

                    {showResults && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="mt-6 ml-12 p-4 bg-[#0d1117] rounded-xl border-l-4 border-blue-500"
                      >
                        <p className="text-sm italic leading-relaxed">
                          <span className="font-bold text-blue-400 not-italic uppercase tracking-tighter mr-2">Explication:</span>
                          {q.explication}
                        </p>
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>

              <div className="fixed bottom-0 left-0 right-0 bg-[#0d1117]/80 backdrop-blur-md border-t border-[#30363d] p-6 z-20">
                <div className="max-w-5xl mx-auto flex items-center justify-between">
                  {showResults ? (
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-[#8b949e] uppercase tracking-widest">Résultat final</span>
                      <span className="text-2xl font-bold text-white tracking-tight">
                        {Object.keys(userAnswers).filter(idx => userAnswers[Number(idx)] === allQuizzes[currentModuleId].questions[Number(idx)].reponse).length} / {allQuizzes[currentModuleId].questions.length}
                      </span>
                    </div>
                  ) : (
                    <div className="text-[#8b949e] text-sm font-medium">
                      {Object.keys(userAnswers).length} sur {allQuizzes[currentModuleId].questions.length} questions répondues
                    </div>
                  )}

                  <div className="flex gap-4">
                    <button 
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        startQuiz(currentModuleId);
                      }}
                      className="inline-flex items-center gap-2 bg-[#21262d] hover:bg-[#30363d] text-white px-6 py-2.5 rounded-lg font-semibold transition-colors border border-[#30363d]"
                    >
                      <RotateCcw className="w-4 h-4" />
                      {showResults ? 'Recommencer' : 'Réinitialiser'}
                    </button>
                    {!showResults && (
                      <button 
                        onClick={submitQuiz}
                        disabled={Object.keys(userAnswers).length === 0}
                        className="inline-flex items-center gap-2 bg-[#238636] hover:bg-[#2eaa42] disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-2.5 rounded-lg font-semibold transition-all shadow-lg active:scale-95"
                      >
                        <CheckCircle2 className="w-4 h-4" />
                        Vérifier mes réponses
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Setup Instructions Overlay (Visible only if keys are missing) */}
      {isConfigured === false && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6 text-center">
          <div className="bg-[#161b22] border border-yellow-500/50 max-w-2xl w-full p-8 rounded-2xl shadow-2xl">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center justify-center gap-3">
              <span className="text-yellow-500">⚠️</span>
              Configuration manquante
            </h2>
            <p className="text-[#c9d1d9] mb-6">
              Les clés GitHub ne sont pas détectées dans l'environnement actuel.
            </p>
            
            <div className="bg-[#0d1117] p-6 rounded-xl border border-[#30363d] text-sm text-left space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-blue-500/20 text-blue-400 p-1.5 rounded-lg shrink-0">1</div>
                <p>
                  <strong>Si vous êtes sur AI Studio :</strong> Vérifiez le panneau <strong>"Secrets"</strong> (icône 🔑) et ajoutez <code className="text-blue-400">GITHUB_CLIENT_ID</code> et <code className="text-blue-400">GITHUB_CLIENT_SECRET</code>.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-purple-500/20 text-purple-400 p-1.5 rounded-lg shrink-0">2</div>
                <p>
                  <strong>Si vous êtes sur Netlify :</strong> Allez dans <em>Site Settings &gt; Environment variables</em> pour ajouter ces mêmes clés.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-yellow-500/20 text-yellow-400 p-1.5 rounded-lg shrink-0">3</div>
                <p>
                  <strong>Important :</strong> L'URL de rappel GitHub doit correspondre à l'adresse que vous utilisez actuellement :<br/>
                  <code className="mt-2 block bg-black/30 p-2 rounded text-blue-300 break-all select-all">
                    {typeof window !== 'undefined' ? window.location.origin : ''}/auth/callback
                  </code>
                </p>
              </div>
            </div>
            
            <div className="flex gap-4 mt-8">
              <button 
                onClick={() => window.location.reload()}
                className="flex-1 py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors"
              >
                Actualiser
              </button>
              <button 
                onClick={() => setIsConfigured(null)} // Hidden dismiss for debugging
                className="flex-1 py-3 bg-[#21262d] text-white font-bold rounded-xl hover:bg-[#30363d] transition-colors"
              >
                Ignorer (Démo)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Helper to check if env vars are present
// @ts-ignore - process.env is replaced by Vite at build time
const GITHUB_CLIENT_ID_EXISTS = !!(process.env.GITHUB_CLIENT_ID || import.meta.env.VITE_GITHUB_CLIENT_ID);
