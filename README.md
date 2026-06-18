# ❤️ Site de déclaration d'amour

Un micro-site web romantique, une seule page avec plusieurs sections, construit avec **React + Vite**. Pas de back-end, 100 % front.

## Lancer le site

```bash
npm install      # installe les dépendances (à faire une seule fois)
npm run dev      # lance le site en local → ouvre l'adresse affichée (http://localhost:5173)
```

## Personnaliser

Tout se modifie dans un seul fichier : [`src/config.js`](src/config.js).

- `prenom` — le prénom de la personne aimée
- `deTaPart` — ta signature
- `accueil` — le titre et le sous-titre de la première section
- `raisons` — la liste de ce que tu aimes chez elle/lui (ajoute autant de blocs que tu veux)
- `souvenirs` — votre histoire / vos moments marquants
- `declaration` — le grand texte final et la question

Les couleurs se règlent en haut de [`src/styles.css`](src/styles.css) (variables `--rose`, `--prune`, etc.).

## Les sections

1. **Hero** — l'accueil plein écran avec le prénom
2. **Raisons** — des cartes "ce que j'aime chez toi"
3. **Souvenirs** — une frise chronologique de votre histoire
4. **Déclaration** — le message final avec un bouton interactif

## Publier en ligne (gratuit)

```bash
npm run build    # génère le dossier dist/
```

Ensuite, dépose le dossier `dist/` sur [Netlify](https://app.netlify.com/drop) ou [Vercel](https://vercel.com) par simple glisser-déposer.
