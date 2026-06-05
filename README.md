# Machine Learning 101

A dark-first Next.js notes site for daily study of *Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow, 2nd Edition*.

The first version is a curated, read-only learning system:

- Chapter-wise index and routes for the full book.
- Curated Chapter 1 notes with theory, examples, use cases, traps, recall cards, and session prompts.
- Mobile-first reading layout with a bottom dock on chapter pages.
- Server-rendered pages with restrained motion and a lightweight Three.js landing visual.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run lint
npm run build
```

## Add or curate chapter notes

Read `AGENTS.md` first, then edit:

- `src/content/chapters/types.ts` for the schema.
- `src/content/chapters/index.ts` for chapter data and notes.

When a chapter is finished, change its status from `template` to `curated` and replace the placeholder section with real notes.

## Deploy

This is a standard App Router Next.js project and is Vercel-ready. Use the default build command:

```bash
npm run build
```
