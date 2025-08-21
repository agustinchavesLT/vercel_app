# Vercel Redirects & Rewrites with Astro + React

This project demonstrates Vercel's redirects and rewrites using an Astro site with small React UI.

## Stack
- Astro 5
- React 19 via `@astrojs/react`
- Vercel adapter `@astrojs/vercel`

## Pages
- `/` → Home
- `/blog` → Blog
- `/profile` → Profile
- `/archive` → Archive

Each page renders `src/components/PageIndicator.tsx` (hydrated with React) to indicate the current page.

## Vercel routing config
`vercel.json` contains:
- Rewrites
  - `/old-blog/:slug` → `/blog`
  - `/u/:user` → `/profile`
- Redirects
  - `/home` → `/` (permanent)
  - `/legacy-archive` → `/archive` (temporary)

Rewrites serve content from a different path without changing the browser URL. Redirects instruct the browser to navigate to a different URL (301/302).

## Run locally
```bash
npm install
npm run dev            # Astro dev (does not apply vercel.json)
npm run dev:vercel     # Vercel dev (applies vercel.json routing)
```

## Build
```bash
npm run build
```

The build uses the Vercel adapter and outputs `.vercel/output` for deployment.
