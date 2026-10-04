# Tech stack — modelcomp (locked)

Do not steer from this stack without explicit user approval. Versions are
pinned in `package.json` / `pnpm-lock.yaml`.

## Runtime & package manager

- Node.js >= 18.17 (see `engines`).
- **pnpm 9.15.4 only** (`packageManager` field). Never npm/yarn — the lockfile is `pnpm-lock.yaml`.

## Framework & build

- Qwik 1.20.0 + Qwik City 1.20.0 (resumable components, file-based routing in `src/routes/`).
- Vite 7.3.6. Static output via `adapters/static/vite.config.ts` → `dist/` (plus `server/` SSR bundle used for prerender).
- TypeScript 5.6, `strict: true`, `noEmit`, `moduleResolution: Bundler`, `jsx: react-jsx` with `jsxImportSource: @builder.io/qwik`.
- Ambient types: `vite/client` + `node`.
- `ignore@^5.3.2` devDependency is required by the Qwik CLI — do not remove.

## Styling

- Tailwind CSS v3.4 + autoprefixer + postcss (`tailwind.config.js`, `postcss.config.js`).
- **v3 syntax only** — no Tailwind v4 `@import "tailwindcss"` / `@theme`. Utilities used in components must exist in v3.4.

## Scripts (`package.json`)

- `dev` — `vite --mode ssr`. Quirk: plain curl needs `Accept: text/html`; browsers are fine.
- `build.types` — `tsc --incremental --noEmit` (typecheck).
- `build` — `qwik build` = types + client + server + SSG.
- `build.client` / `build.server` / `build.preview` / `preview` / `start` — granular variants.
- `:direct` twins (`build.types:direct`, `build:direct`, `dev:direct`) — same steps invoked as `node <bin>`, bypassing the pnpm shims. Windows: bare `tsc`/`vite` shims embed a giant `NODE_PATH` that can exceed cmd.exe's ~8k line limit (`The input line is too long`, exit 255, tool never runs) — use the `:direct` forms there. Same output.
- `test` — zero-dep tests (`node --test` built-in runner over `scripts/lib/*.test.mjs`, no framework).
- `sync` / `sync:quiet` — deterministic data sync (`node scripts/sync-data.mjs`; `:quiet` prints only FAIL lines plus the summary).

## Data layer (code)

- Markdown findings are pre-parsed by `pnpm sync` into `src/data/scores.generated.ts` (numbers only — never `?raw`-import report prose into the client bundle); only small `meta.json` files use `import.meta.glob`.
- Zero-dep tests: `pnpm test` (Node's built-in runner over `scripts/lib/*.test.mjs`); verification is `pnpm test` + `pnpm build.types` + `pnpm build` (+ spot-check `dist/index.html`).
