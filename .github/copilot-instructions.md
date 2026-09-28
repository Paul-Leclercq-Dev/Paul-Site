# Instructions projet — paul-leclercq.com

Contexte : site vitrine de Paul Leclercq, développeur freelance (autónomo) à Valencia (Espagne). Trilingue FR / ES / EN.
Stack : React 19, Vite 6, TypeScript strict, Tailwind CSS 4, motion, i18next, Docker (Node build → Nginx alpine).
L'audit de référence est dans `docs/AUDIT.md` : chaque tâche cite ses identifiants (P0-4, Q-2…).

Règles :
- Réponds en français.
- Ne change PAS le design visuel (couleurs, typographie, mise en page) sauf demande explicite.
- Ne renomme pas et ne supprime pas de clés existantes dans `src/locales/*/translation.json` sauf demande explicite ; toute nouvelle clé doit être ajoutée dans les 3 langues (fr, en, es).
- Aucun texte visible en dur dans les composants : tout passe par `t()`.
- Pas de `any` ; typer proprement.
- Pas de nouvelle dépendance sans justifier (poids gzip + alternative sans dépendance).
- Liens externes : `target="_blank" rel="noopener noreferrer"`. Jamais `<a>` contenant `<button>`.
- Boutons icône : `aria-label` obligatoire.
- Respecter `prefers-reduced-motion` pour toute animation.
- Après chaque modification : `npm run lint` et `npm run build` doivent passer. Indique le diff de taille du bundle quand c'est pertinent.
- Travailler par petits lots, un lot = un commit, message au format Conventional Commits.
