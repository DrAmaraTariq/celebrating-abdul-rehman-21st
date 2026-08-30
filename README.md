# Celebrating Dr. Abdul Rehman — 21st Birthday

A single-page React + TypeScript site with six sections, built with Vite and Tailwind CSS.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
```

Output goes to `dist/`, which you can open directly or deploy anywhere static (Netlify, Vercel, GitHub Pages, etc.).

## Adding your own photos and voice note

Every image and the audio player point at files in `public/assets/`. Drop your real files in with these exact names and they'll appear automatically — no code changes needed:

**`public/assets/images/`**
- `hero-celebration.jpg`
- `timeline-nursery.jpg`
- `timeline-sps.jpg`
- `timeline-21st.jpg`
- `memory-sun.jpg`
- `memory-street.jpg`
- `memory-surgeon.jpg`

**`public/assets/audio/`**
- `special-voicenote.mp3`

Until a file is in place, that spot shows a soft placeholder card (images) or a small notice (audio) instead of a broken element — so you can preview and deploy the site at any stage.

## Structure

- `src/App.tsx` — layout shell: sidebar + cross-fading content pane
- `src/components/Sidebar.tsx` — navigation, countdown, mobile drawer
- `src/components/*Section.tsx` — the six sections, one file each
- `src/index.css` — design tokens, fonts, base styles
- `tailwind.config.js` — color palette and type scale
