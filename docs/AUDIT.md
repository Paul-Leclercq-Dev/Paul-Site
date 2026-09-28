# Audit technique — paul-leclercq.com (repo `paul-leclercq-website`)

> Audit réalisé le 28/09/2026 sur le code du dernier commit (`fec281a`, avril 2025).
> Méthode : lecture du code, `npm run build`, `eslint .`, `npm audit`, `npm outdated`, analyse du bundle.

## 0. Chiffres clés

| Mesure | Valeur | Verdict |
|---|---|---|
| Bundle JS | **1 427 kB** (396 kB gzip), 1 seul chunk | 🔴 3 à 4× trop lourd pour un site vitrine |
| Favicon (`paul-leclercq.png`) | **1,8 Mo**, 1024×1024 | 🔴 plus lourd que tout le JS |
| Images `src/assets` | ~3,2 Mo | 🟠 non redimensionnées (logos à 80–150 kB) |
| Vulnérabilités `npm audit` (prod) | **9 high** (vite ≤6.4.2, react-router/turbo-stream) | 🔴 |
| ESLint | **18 erreurs, 10 warnings** | 🟠 |
| Nœuds DOM section « Qui suis-je » | `Boxes` = 150×100 = **15 000 `motion.div`** | 🔴 tue le mobile |
| Particules section Projets | `particleDensity={1200}` | 🔴 CPU mobile |
| Dépendances inutilisées | 8 (`@dnd-kit/*`, `@atlaskit/…`, `@headlessui`, `@heroicons`, `react-confetti`, `react-simple-typewriter`, `react-use`) | 🟠 |
| Composants morts | `moving-border.tsx`, `sticky-scroll-reveal.tsx` | 🟢 |
| Parité des clés i18n FR/EN/ES | 100 % | ✅ |

---

## 1. Forces

1. **Stack moderne et cohérente** : React 19, Vite 6, TypeScript `strict`, Tailwind 4, `motion`. Rien d'exotique, facile à maintenir.
2. **TS strict + `noUnusedLocals`/`noUnusedParameters`** activés dans `tsconfig.app.json`.
3. **Dockerfile multi-stage** (build Node → Nginx alpine) : bonne base, image finale légère.
4. **Nginx avec fallback SPA** (`try_files $uri /index.html`).
5. **Images majoritairement en WebP** et importées via Vite (hash de cache-busting automatique).
6. **i18n en place** (i18next) avec 3 langues et **parité parfaite des clés**.
7. **Anti-flash du dark mode** : script inline dans `<head>` avant le rendu React.
8. **Métadonnées de base présentes** : title, description, Open Graph, Twitter Card, canonical.
9. **Contenu projets réel** (La Casa Altea, Earthway, Tuftissimo, Société Générale, Shaple) : c'est la vraie valeur du site.

---

## 2. Faiblesses — par priorité

### 🔴 P0 — Bloquant avant remise en ligne

| # | Problème | Où | Pourquoi c'est grave |
|---|---|---|---|
| P0-1 | 9 vulnérabilités high (vite, react-router) | `package.json` | Site d'un prestataire tech = vitrine de ton sérieux |
| P0-2 | **Pas de `.dockerignore`** → `COPY . .` copie `node_modules` **macOS** par-dessus celui installé dans l'image | `dockerfile` | Binaires natifs (esbuild/rollup/tailwind-oxide) incompatibles Linux → build cassé ou aléatoire. Copie aussi `.git` |
| P0-3 | `node:18` (EOL avril 2025) + `npm install` au lieu de `npm ci` | `dockerfile` | Builds non reproductibles, image non maintenue |
| P0-4 | Lien mail cassé : `href='paul.lercq@gmail.com'` (sans `mailto:`) | `footer.tsx:103` | Le CTA contact du footer ne marche pas |
| P0-5 | Bouton GitLab du footer pointe vers LinkedIn | `footer.tsx:86` | Bug visible |
| P0-6 | Carte Tuftissimo : `href=""` | `thirdcard.tsx:86` | Bouton « Visiter » qui recharge la page |
| P0-7 | `target='blank'` (au lieu de `_blank`) et aucun `rel="noopener noreferrer"` | partout | Ouvre toujours le même onglet nommé « blank » ; tabnabbing |
| P0-8 | `og:image` → `/images/preview.png` **n'existe pas** (`public/` ne contient que `vite.svg`) | `index.html` | Partage LinkedIn/WhatsApp sans aperçu = CTR divisé |
| P0-9 | **Aucune mention légale / politique de confidentialité** | — | En Espagne, la **LSSI-CE (art. 10)** impose nom, NIF, contact, etc. pour toute activité économique en ligne ; RGPD pour le formulaire/mail. Obligatoire pour un autónomo |
| P0-10 | Google Fonts chargée via `@import` CSS depuis `fonts.googleapis.com` | `index.css:1` | Transfert d'IP vers Google sans consentement (jurisprudence RGPD LG München 2022) + CSS bloquant. Auto-héberger la police |

### 🟠 P1 — Performance

| # | Problème | Où | Correctif |
|---|---|---|---|
| P1-1 | Bundle unique 1,4 Mo | build | Supprimer deps mortes, `@material-tailwind/react` (utilisé seulement pour `Typography` + `Accordion`, remplaçable en 20 lignes), lazy-load des sections sous la ligne de flottaison, `manualChunks` |
| P1-2 | `Boxes` : 15 000 `motion.div` | `ui/background-boxes.tsx:7-8` | Réduire à ~20×15 ou remplacer par un fond CSS/SVG statique ; désactiver sur mobile |
| P1-3 | Sparkles `particleDensity={1200}` + tsParticles (~100 kB) | `mesProjets.tsx:39` | Densité 80–120 ou suppression ; désactiver si `prefers-reduced-motion` |
| P1-4 | **Splash screen artificiel de 1 s** (`setTimeout 1000`) | `App.tsx:63` | Pénalise directement le LCP. Supprimer |
| P1-5 | **Écran de choix de langue bloquant** avant tout contenu | `App.tsx:83` | Le visiteur (et Google) voit 3 boutons au lieu de ton offre. Détecter via `navigator.language`, choix dans le header |
| P1-6 | Favicon PNG 1,8 Mo | `index.html` | `favicon.ico` 32×32 + `apple-touch-icon.png` 180×180 + SVG, dans `public/` |
| P1-7 | Images non dimensionnées (`width=1000` affiché en `h-60`), pas de `loading="lazy"` | cartes projets, logos | Redimensionner (logos ≤ 128 px), `loading="lazy"`, `decoding="async"`, `width/height` réels |
| P1-8 | Nginx : pas de gzip/brotli, pas de `Cache-Control` | `nginx.conf` | `gzip on` + `expires 1y; immutable` sur `/assets/` + `no-cache` sur `index.html` |
| P1-9 | Animations infinies (roue crantée qui tourne, `animate-bounce` sur les CTA) sans `prefers-reduced-motion` | `homePage.tsx:55`, CTA | Accessibilité + CPU + distrayant |

### 🟠 P1 — SEO & i18n (structurel)

| # | Problème | Pourquoi |
|---|---|---|
| S-1 | **SPA 100 % CSR** : le HTML servi contient `<div id="root"></div>` et rien d'autre | Bing, LinkedIn, IA (ChatGPT/Perplexity) et la plupart des crawlers ne voient **aucun contenu**. Google rend le JS mais avec délai et moins bien |
| S-2 | **Une seule URL pour 3 langues** (langue stockée en `localStorage`) | Impossible d'indexer la version ES/EN. Pour un freelance à Valencia, la version **ES** est pourtant la plus rentable. Il faut `/fr/`, `/es/`, `/en/` + `hreflang` |
| S-3 | `<html lang="fr">` figé, title/description figés en FR | Incohérent en ES/EN |
| S-4 | Code langue `esp` (non standard) | Doit être `es` (ISO 639-1) — requis pour `hreflang`, `navigator.language`, i18next |
| S-5 | Pas de `robots.txt`, `sitemap.xml`, données structurées (`Person`/`ProfessionalService` JSON-LD) | SEO local de base |
| S-6 | Plusieurs `<h1>` (Projets, Qui suis-je…) ; le vrai titre du hero est un `<p>` | Hiérarchie de titres cassée |
| S-7 | Nav en `<a>` sans `href` (JS `onClick` only) | Liens non crawlables, non focusables au clavier |
| S-8 | `meta keywords` | Ignoré par Google depuis 2009, à retirer |
| S-9 | Alt génériques `alt="thumbnail"`, `alt="Logo"` | SEO images + accessibilité |

### 🟡 P2 — Qualité de code / bugs logiques

| # | Problème | Où |
|---|---|---|
| Q-1 | **Bug dark mode** : si aucun thème stocké, `useLayoutEffect` écrit `"light"` avant que le `useEffect` lise `prefers-color-scheme` → la préférence système n'est jamais respectée après le 1er rendu | `hooks/useDarkMode.tsx` |
| Q-2 | **Bug i18n** : `NavBar`, `MesServices`, `Presentation` lisent `localStorage` au lieu de `i18n.language` et contiennent des traductions en dur. `NavBar` et `MesServices` ne se mettent **pas à jour** quand on change de langue (pas de `useTranslation`) ; dans `homePage.changeLanguage`, `i18n.changeLanguage()` est appelé **avant** `localStorage.setItem` | `NavBar.tsx`, `mesServices.tsx`, `presentation.tsx`, `homePage.tsx:30` |
| Q-3 | Tableaux de traductions dupliqués en dur dans les composants → à migrer dans `locales/*/translation.json` | idem |
| Q-4 | `<a><button>` imbriqués (HTML invalide, double focus) — ×12 | footer, presentation, homePage, CTA |
| Q-5 | Blocs SVG LinkedIn/GitLab/Mail copiés-collés **4 fois** | → composant `<SocialLinks />` |
| Q-6 | 5 composants `FirstCard…FifthCard` quasi identiques + props `children/scndchildren/thrdchildren…` | → un `<ProjectCard project={…} />` + tableau de données |
| Q-7 | `console.log(isDark)` en prod | `homePage.tsx:26` |
| Q-8 | 18 erreurs ESLint (`any`, `prefer-const`) | ui/*, helpers |
| Q-9 | Faute de nommage `ThourthCard`, `MesTecnos`, `tecnos` | cosmétique |
| Q-10 | `props` passés via `children={...}` au lieu de JSX enfants | `homePage.tsx:40-42` |
| Q-11 | `README.md` = template Vite par défaut | doc |
| Q-12 | `"use client"` (directive Next.js) inutile | `mesProjets.tsx:1` |
| Q-13 | Bouton paramètres en `cursor-progress` (curseur « chargement ») | `homePage.tsx:51-54` |
| Q-14 | `material-tailwind` force `placeholder={undefined} onPointerEnterCapture={undefined}…` partout (incompat. types React 19) | 6 fichiers |

### 🟡 P2 — Accessibilité

- Boutons icône (LinkedIn/GitLab/Mail/Paramètres) **sans `aria-label`**.
- Nav non utilisable au clavier (cf. S-7).
- `focus:outline-none focus:ring-0` supprime le focus visible.
- Contrastes à vérifier en dark (`text-neutral-500` sur fonds sombres).
- Pas de `prefers-reduced-motion`.

### 🟡 P2 — Déploiement / DevOps

- `docker-compose` : `container_name: front` (générique, collision probable sur ton serveur), pas de `restart: unless-stopped`, pas de healthcheck, réseau bridge inutile pour un seul service.
- Nginx : pas de headers sécurité (`X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, CSP), `server_tokens` actif, logs dans des fichiers (mieux : stdout pour `docker logs`).
- Pas de CI (GitLab CI) : lint + build + audit à chaque push.
- Pas de TLS dans le conteneur → OK **si** reverse proxy devant (Nginx Proxy Manager / Traefik / Caddy) : à confirmer.

---

## 3. Point business (à challenger avant de coder)

Le site est un **portfolio de développeur** (« Je suis Paul Leclercq, développeur Full Stack / Créatif / Passionné », liste de technos, liens MDN), pas un **site de prestataire qui vend des solutions digitales**. Un client (restaurant, PME, asesoría) ne cherche pas « NestJS + Prisma », il cherche « un site qui me ramène des clients » / « automatiser ma facturation ».

Manquent : proposition de valeur orientée client, offres/forfaits, process, preuves (témoignages réels, chiffres), formulaire de contact, prise de RDV, email pro sur ton domaine (actuellement Gmail perso), zone géographique (Valencia / Alicante).

Point de vigilance : le projet **Société Générale** affiché avec nom et visuel → vérifier que ton contrat/NDA l'autorise.

### Conséquence sur l'ordre des travaux

Les points S-1/S-2 (SPA sans pré-rendu, une seule URL) sont **architecturaux**. Si la refonte orientée business est prévue, il est plus rentable de trancher l'architecture **avant** de corriger S-*, P1-2/P1-3, Q-2/Q-3/Q-6 :

- **Option A — Rester sur Vite SPA** + pré-rendu (`vite-react-ssg` ou prerender) + routes `/:lang/`. Moins de travail, SEO correct.
- **Option B — Migrer vers Astro** (réutilise les composants React en « islands », HTML statique, i18n par routes natif, 0 JS par défaut). Plus de travail initial, résultat nettement supérieur pour un site vitrine multilingue.

**Corrections indépendantes de ce choix (à faire tout de suite)** : P0-1 → P0-8, P0-10, P1-4, P1-6, P1-8, Q-1, Q-7, Q-8, deps mortes, Docker/Nginx.
