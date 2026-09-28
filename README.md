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

## Déploiement Docker

L'image se construit en deux étapes (build Node puis service via Nginx alpine).

```bash
docker compose up --build   # build l'image et démarre le conteneur
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
