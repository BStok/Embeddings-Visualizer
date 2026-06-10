# Vectorspace Explorer

Vectorspace Explorer turns word embeddings into an interactive 3D map.
Words that are used in similar ways appear near each other, so you can search,
hover, and move through language like a visible landscape.

## Technical Notes

- Renders a large word2vec graph in the browser with WebGL.
- Loads local graph assets: labels, positions, links, and manifest data.
- Supports search, hover details, connected-word inspection, and camera navigation.
- Modernized from an older React/Webpack codebase to Vite and React 18.

## Running Locally

```powershell
npm install
npm run dev
```

Then open:

```txt
http://localhost:8081
```
