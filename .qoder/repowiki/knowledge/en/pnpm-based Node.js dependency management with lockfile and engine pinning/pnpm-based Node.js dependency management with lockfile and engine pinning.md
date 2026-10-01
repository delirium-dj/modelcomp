---
kind: dependency_management
name: pnpm-based Node.js dependency management with lockfile and engine pinning
category: dependency_management
scope:
    - '**'
source_files:
    - package.json
    - pnpm-lock.yaml
    - server/package.json
---

## Approach

The repository is a QwikCity frontend (Node/TypeScript) that uses **pnpm** as its sole package manager. There are no Go, Python, Ruby, or other language manifests — all third-party dependencies are declared in the root `package.json`.

## Key files

- `package.json` — single source of truth for project metadata, scripts, and `devDependencies`.
- `pnpm-lock.yaml` — pnpm lockfile committed to the repo (present at the root).
- `server/package.json` — minimal manifest for the SSR adapter output directory; only declares `"type": "module"`, no runtime dependencies.
- `.gitignore` — excludes `node_modules/` from version control.

## Versioning strategy

- The root `package.json` pins the exact pnpm version via `"packageManager": "pnpm@9.15.4"`, which enforces the toolchain through pnpm's built-in integrity check on install.
- Node version is constrained via `"engines": { "node": ">=18.17.0" }`.
- Dependencies are declared under `devDependencies` only (the site is a client-side SPA + Vite build; there is no server-side JS runtime dependency). Versions use caret ranges (`^`) for most packages: `@builder.io/qwik` `1.20.0`, `@builder.io/qwik-city` `1.20.0`, `tailwindcss` `^3.4.0`, `vite` `^7.0.0`, `typescript` `^5.6.0`, `postcss` `^8.4.0`, `autoprefixer` `^10.4.0`, `ignore` `^5.3.2`, `@types/node` `^20.0.0`.
- No `dependencies` section exists — production bundle is produced by Vite/Qwik at build time, so runtime deps are not declared separately.

## Vendoring / private registries

- No vendored third-party libraries are present in the tree (no `vendor/`, no checked-in `node_modules`).
- No `.npmrc`, `.pnpmrc`, `pnpm-workspace.yaml`, or `registry` configuration is visible at the root, indicating usage of the default npm registry.
- The `server/` subdirectory contains an auto-generated SSR adapter bundle plus a trivial `package.json`; it is not a separate workspace and has no additional dependencies.

## Scripts surface

Build/dev/test commands in `package.json` scripts drive the dependency graph:
- `build` → `qwik build`
- `build.client` / `build.server` / `build.preview` → `vite build` with different configs
- `build.types` → `tsc --incremental --noEmit`
- `test` → runs Mocha-style test files under `scripts/lib/*.test.mjs` via `node --test`
- `sync` / `sync:quiet` → run `scripts/sync-data.mjs` against the model registries

## Conventions observed

- Single-package layout: all dependencies live in the root `package.json`; there is no pnpm workspace or monorepo setup despite the presence of a `server/` subdirectory.
- Lockfile-first: `pnpm-lock.yaml` is committed, so reproducible installs rely on the pinned lock rather than loose semver resolution.
- Toolchain pinning: both pnpm (`packageManager` field) and Node (`engines.node`) versions are explicitly constrained.
- All dev/build/runtime tooling is declared as `devDependencies`; no runtime dependencies are split out.