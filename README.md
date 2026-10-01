# paul-leclercq.com

Site vitrine de Paul Leclercq, développeur freelance à Valencia (Espagne). Application web trilingue (FR / ES / EN).

## Stack

- **React 19** + **TypeScript** (strict)
- **Vite 6** (build & dev server)
- **Tailwind CSS 4**
- **motion** (animations)
- **i18next** / react-i18next (internationalisation FR / ES / EN)
- **Docker** (build Node → Nginx alpine)

## Prérequis

- Node.js 22+
- npm

## Développement

```bash
npm install       # installe les dépendances
npm run dev       # démarre le serveur de développement (Vite, HMR)
npm run lint      # analyse ESLint
npm run build     # build de production (tsc + vite) dans dist/
npm run preview   # prévisualise le build de production
```

## Déploiement (Cloudflare Pages)

Connecter le dépôt GitHub dans le dashboard Cloudflare Pages, puis utiliser les réglages suivants :

- **Framework preset** : Vite (ou None)
- **Build command** : `npm run build`
- **Build output directory** : `dist`
- **Root directory** : laisser vide
- **Version de Node.js** : 22, lue depuis `.node-version`

La branche de production est `main`. Chaque pull request génère une URL de preview.

Ajouter `paul-leclercq.com` et `www.paul-leclercq.com` comme domaines personnalisés, puis créer une Redirect Rule Cloudflare pour rediriger `www` vers le domaine apex `paul-leclercq.com`.

Les en-têtes HTTP et règles de cache de Pages sont définis dans `public/_headers` (copié dans `dist/`). `nginx.conf` est utilisé uniquement pour le déploiement Docker.

### Plan B : Docker

Le Dockerfile et `docker-compose.yml` sont conservés pour un hébergement alternatif. La CI publie l'image sur GHCR lors du push d'un tag `v*` ; le workflow Docker peut aussi être lancé manuellement (`workflow_dispatch`).

```bash
docker compose up --build
```

Le site est alors servi sur http://localhost:8080.

## Structure des dossiers

```
├── docker-compose.yml      # orchestration du conteneur
├── dockerfile              # build multi-étapes (Node → Nginx)
├── nginx.conf              # config Nginx (gzip, cache, en-têtes sécurité)
├── index.html              # point d'entrée HTML
├── docs/
│   └── AUDIT.md            # audit de référence du projet
├── public/                 # assets statiques (favicons, polices)
│   └── fonts/              # police Aldrich auto-hébergée
└── src/
    ├── main.tsx            # point d'entrée React
    ├── App.tsx             # routeur et sélection de langue
    ├── i18n.js             # configuration i18next
    ├── index.css           # styles globaux Tailwind + thème
    ├── assets/             # images importées par le bundle
    ├── components/         # composants UI (navbar, cartes, sections…)
    │   ├── 3dcards/        # cartes projets 3D
    │   ├── cardsSkills/    # cartes compétences
    │   ├── hooks/          # hooks personnalisés (useDarkMode…)
    │   └── ui/             # primitives d'interface animées
    ├── lib/                # utilitaires (helpers, cn…)
    ├── locales/            # traductions fr / en / es
    └── pages/              # pages (homePage…)
```
