# ModelComp — Dependency Graph

Overview of tech stack, dependencies, scripts, and build targets.

## Core Stack

- **Framework:** Qwik `1.20.0` + Qwik City `1.20.0` (Resumable, file-based routing, static SSG)
- **Build Tool / Bundler:** Vite `7.3.6`
- **Type Checker:** TypeScript `5.6.0` (`strict: true`, `noEmit`, `moduleResolution: Bundler`)
- **Styling:** Tailwind CSS `v3.4.0` + Autoprefixer + PostCSS (v3 utilities only)
- **Package Manager:** `pnpm 9.15.4` (`pnpm-lock.yaml`)
- **Runtime:** Node.js `>= 18.17.0`
- **Operating System & Shell:** Windows 10 with PowerShell 7 (`pwsh`) / Windows PowerShell. NO Linux commands (`ls`, `rm -rf`, `export`). Use Windows/PowerShell commands (`dir`, `Remove-Item`, `$env:VAR`).

## Production & Dev Dependencies

- `@builder.io/qwik`: `1.20.0`
- `@builder.io/qwik-city`: `1.20.0`
- `tailwindcss`: `^3.4.0`
- `postcss`: `^8.4.0`
- `autoprefixer`: `^10.4.0`
- `typescript`: `^5.6.0`
- `vite`: `^7.0.0`
- `ignore`: `^5.3.2` (required by Qwik CLI)

## Key Scripts

- `pnpm dev`: Dev server (SSR mode, `vite --mode ssr`)
- `pnpm sync`: Executes `node scripts/sync-data.mjs` to validate findings & update `scores.generated.ts`
- `pnpm build.types`: Typecheck (`tsc --incremental --noEmit`)
- `pnpm build`: Full production build (`qwik build` -> static SSG into `dist/`)
- `pnpm preview`: Serves production build locally
