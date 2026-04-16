# Master 2 MEO MSO - Quiz Application

Cette application est un moteur de quiz interactif conçu pour les étudiants du Master 2 MEO MSO. 
Elle intègre une authentification GitHub OAuth pour permettre le suivi de la progression et la publication du code.

## Fonctionnalités
- Connexion via GitHub
- Modules de révision interactifs (M01, M02, ...)
- Système de score et historique local
- Publication automatique sur GitHub via API

## Configuration des Clés (Secrets)
L'application nécessite deux clés GitHub OAuth (`GITHUB_CLIENT_ID` et `GITHUB_CLIENT_SECRET`).

### 1. Sur AI Studio (Développement)
Ajoutez les clés dans le panneau **Secrets** (icône 🔑).
- **Callback URL :** `https://ais-dev-...run.app/auth/callback`

### 2. Sur Netlify (Production)
Ajoutez les clés dans **Site Settings > Environment variables**.
- **Callback URL :** `https://votre-site.netlify.app/auth/callback`

**Attention :** GitHub n'autorise qu'une seule URL de rappel par application OAuth. Si vous voulez que les deux environnements fonctionnent, vous devez créer deux "OAuth Apps" sur GitHub.
