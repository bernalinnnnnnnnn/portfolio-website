# Base44 Dev Environment

## Project Overview
React + Vite portfolio website (frontend-only). No backend, no database, no external credentials required.

## Running the App
```bash
docker compose -f docker-compose.base44.yml up -d --build
```
- Web entry point: host port 3000 → container port 5173 (Vite dev server)
- Source is bind-mounted at `/app`; edits hot-reload via Vite HMR
- Dependencies installed via `npm ci` on container startup (lockfile-preserving)

## Architecture Notes
- `src/App.jsx` is the main portfolio — fully self-contained, no API calls
- `src/pages/todo.jsx` references `import.meta.env.VITE_ENDPOINT_URL` for a todo-list API, but this page is **not imported** by the main app and can be ignored for the portfolio to work
- Static assets live in `public/` (images, achievements, activities)

## Verification
- `curl -s localhost:3000/` should return the Vite-served HTML with `<title>Bernalyn's Portfolio Website</title>`
- Vite dev server logs live compilation (confirms live source, not a prebuilt bundle)

## Tech Stack
- React 19, Vite 6, Tailwind CSS 4, framer-motion, lucide-react
- Package manager: npm (package-lock.json)
