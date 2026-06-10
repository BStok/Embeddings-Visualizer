# Word2Vec Embeddings Visualiser
<img width="1887" height="889" alt="image" src="https://github.com/user-attachments/assets/2c5a05e1-ccd0-410f-8c89-e29795ed3e6b" />

An interactive 3D map of word embeddings. Words used in similar contexts appear near each other. You can search, hover, and navigate through language like a visible landscape.

## Technical Notes

> Javascript . React . WebGL . Vite

- The graph contains 60k+ word nodes.
- React handles the UI; a separate WebGL renderer handles the point cloud, keeping navigation smooth at that scale.
- Loads local graph assets: labels, positions, links, and manifest data.
- Supports search, hover details, connected-word inspection, and camera navigation.

## Features 
- 3D point cloud rendered with WebGL
- Search words by label; results highlight in the scene
- Hover/click a node to see connected words and degree
- Camera state encoded in the URL hash — views are shareable
- Deploys as a fully static site (no backend required)

## How data is loaded
The graph is stored as static binary files under public/data/. On load, the app fetches a manifest.json to select a graph version, then loads positions.bin, links.bin, and labels.json. All three are keyed by the same node ID index, so they must stay in sync.

## Running Locally

```powershell
npm install
npm run dev
```

Then open:

```txt
http://localhost:8081
```
