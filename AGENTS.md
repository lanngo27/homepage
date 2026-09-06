# AGENTS.md

Small Create React App personal homepage (single static page, no router, no TypeScript, no tests).

## Commands

- `npm start` — dev server
- `npm run build` — production build to `build/` (also runs CRA's built-in ESLint; separate from Biome)
- `npm test -- --passWithNoTests` — CRA Jest (`CI=true` for single run; no test files currently exist)
- `npm run deploy` — publishes `build/` via `gh-pages` to `http://lanngo27.github.io/homepage` (`predeploy` rebuilds automatically)
- `npm run check` — `biome check .` (lint + format + import organization; must exit 0)
- `npm run lint` / `npm run format` — lint-only / formatter-write subsets
- Toolchain: React 19 + `react-scripts` 5, Biome 2.x for lint/format (see `biome.json`). No ESLint/Prettier configs — do not reintroduce them.

## Structure

- Entry: `src/index.js` (uses `createRoot` from `react-dom/client`) → `src/App.jsx`, which renders sections in order: Header, Nav, About, Experience, Portfolio, Contact, Footer.
- One folder per section in `src/components/<section>/` with `<Name>.jsx` + co-located `<name>.css`. No shared component library or CSS modules — plain per-component CSS imports.
- `biome.json` scopes checks to `src/**/*` + `public/**/*` and excludes the committed artifacts below. `useValidAnchor` is off for `Nav.jsx`/`Footer.jsx` only — hash navigation with active-state `onClick` is intentional there.

## Gotchas

- Contact form (`src/components/contact/Contact.jsx`) needs `REACT_APP_EMAILJS_SERVICE`, `REACT_APP_EMAILJS_TEMPLATE`, `REACT_APP_EMAILJS_KEY` at build time. `.env` is gitignored and there is no `.env.example`; without these vars the form silently sends with `undefined` values. Do not commit keys.
- EmailJS is v4: `sendForm` takes an options object (`{ publicKey }`), not a bare key string. Do not pass `require('dotenv')` in browser code — CRA inlines `REACT_APP_*` at build and webpack 5 has no Node polyfills, so that `require` breaks the build.
- Do not edit `src/assets/React App.html` or `src/assets/React App_files/bundle.js` — committed build artifacts, not source. Images in `src/assets/*.png` are the real portfolio assets (imported by About/Portfolio).
- Line endings are LF (enforced by `.gitattributes`); Biome also emits LF, so do not commit CRLF.
- `homepage` field in `package.json` must stay in sync with the gh-pages URL or asset paths break on deploy.
