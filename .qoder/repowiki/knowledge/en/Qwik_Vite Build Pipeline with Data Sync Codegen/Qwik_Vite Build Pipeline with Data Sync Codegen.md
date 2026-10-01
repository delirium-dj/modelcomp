---
kind: build_system
name: Qwik/Vite Build Pipeline with Data Sync Codegen
category: build_system
scope:
    - '**'
source_files:
    - package.json
    - vite.config.ts
    - adapters/static/vite.config.ts
    - vercel.json
    - scripts/sync-data.mjs
    - scripts/lib/codegen.mjs
    - scripts/lib/parse.mjs
    - scripts/lib/quarantine.mjs
    - scripts/lib/validate.mjs
    - scripts/lib/average.mjs
    - scripts/lib/naming.mjs
---

## Build System Overview

ModelComp is a QwikCity (Vite-based) static-site frontend. The build pipeline has two distinct phases: (1) a Node.js data-sync/codegen step that scans Markdown benchmark findings and emits TypeScript registry + scores files, and (2) the Vite/Qwik build that compiles the client and SSR bundle.

## Toolchain & Entry Points

- **Package manager**: pnpm 9.15.4 (enforced via `packageManager` field in `package.json`).
- **Node engine**: `>=18.17.0` declared in `engines.node`.
- **Bundler**: Vite 7.x with `@builder.io/qwik/optimizer` and `@builder.io/qwik-city/vite` plugins (`vite.config.ts`).
- **SSR adapter**: Qwik's built-in static adapter under `adapters/static/vite.config.ts`, which extends the base config and sets `build.ssr: true` with `@qwik-city-plan` as the Rollup input.
- **Deployment target**: Vercel, configured via `vercel.json` — root HTML gets `Cache-Control: public, max-age=0, must-revalidate`; `/build/*` assets get `public, max-age=31536000, immutable`.
- **CSS pipeline**: Tailwind v3 + PostCSS + Autoprefixer (`tailwind.config.js`, `postcss.config.js`).
- **Type checking**: `tsc --incremental --noEmit` via `pnpm build.types`.

## NPM Scripts (`package.json` scripts)

| Script | Command | Purpose |
|---|---|---|
| `build` | `qwik build` | Default Qwik build entry point |
| `build.client` | `vite build` | Client-only build |
| `build.preview` | `vite build --ssr src/entry.preview.tsx` | Preview SSR build |
| `build.server` | `vite build -c adapters/static/vite.config.ts` | Static-adapter server build |
| `build.types` | `tsc --incremental --noEmit` | Type-check only |
| `sync` / `sync:quiet` | `node scripts/sync-data.mjs [--quiet]` | Scan model registries, validate, recompute averages, emit generated TS |
| `test` | `node --test scripts/lib/*.test.mjs` | Run all sync-tool unit tests |
| `dev` | `vite --mode ssr` | Local dev server |
| `preview` | `vite preview` | Preview built site |
| `start` | `vite --open --mode ssr` | Dev + open browser |
| `deploy` | echo | Placeholder (Qwik docs say to run `qwik add`) |

## Data Sync & Codegen Pipeline

The heart of the build is `scripts/sync-data.mjs`, invoked via `pnpm sync`. It runs before the Vite build and performs these steps:

1. **Per-folder scan** of `model/<slug>/` directories for findings Markdown files (excluding `average.md`, `README.md`, and any file whose name contains `.excluded`).
2. **Parse** each findings file for seven normalized 1–100 scores; auto-correct drift in the `Overall Score` line (half-up mean of five quality dimensions, Cost excluded since v4).
3. **Auto-quarantine** evidence-free reports (8+ "no verified public score found" rows, zero measured values) by renaming them to `*.md.excluded`.
4. **Recompute** each folder's `average.md` from the top-10 cohort (or all sources when ≤10), using a rater gate (`RATER_GATE`): only reports authored by models whose own committed average Overall exceeds the gate count toward another model's average. Falls back to averaging all available reports if no raters qualify.
5. **Validate** every `meta.json` against required fields; scaffold missing ones with slug-derived placeholder names (marked with a warning).
6. **Enforce git tripwire**: any git-tracked findings file missing from disk is a FAIL unless it survived a sanctioned twin retirement or relocation to `models_voice/` or `models_finance/`. Bypassable via `ALLOW_MODEL_DELETE=1`.
7. **Update registry**: append new reporting-agent filenames to `src/data/sources.generated.ts` (SourceKey union + SOURCE_DEFS array); reconcile labels/slugs idempotently.
8. **Emit `src/data/scores.generated.ts`**: numbers-only compact score index keyed by slug → filename → `{tool, reasoning, context, multimodal, coding, cost, overall}`. This keeps ~1.7 MB of report prose out of the Vite client bundle.

All pure logic lives in `scripts/lib/` (`parse.mjs`, `quarantine.mjs`, `validate.mjs`, `average.mjs`, `codegen.mjs`, `naming.mjs`) and is covered by `*.test.mjs` unit tests.

## Generated Artifacts

- `src/data/scores.generated.ts` — deterministic, sorted-by-slug-and-filename mapping of short-keyed scores consumed at runtime.
- `src/data/sources.generated.ts` — SourceKey union type + SOURCE_DEFS array describing every tracked findings file.
- Per-model `average.md` — recomputed cohort summary.

Generated files are marked `AUTO-GENERATED` and should not be hand-edited.

## Conventions & Constraints

- **Slug versioning**: model folders use dots for versions (`gpt-5.5`), not hyphens. A hyphen between two digits is treated as a duplicate of the dotted variant and fails loudly with the correct path suggestion. Exceptions exist for parameter-size suffixes like `gemma-4-31b`, `qwen-3.8-27b`, `qwen-3.5-9b` (defined in `scripts/lib/naming.mjs`).
- **Self-exclusion convention**: findings files with no verified benchmarks are renamed `*.md.excluded` and skipped by the parser.
- **Determinism**: both `scores.generated.ts` and the registry text are produced deterministically (sorted keys, stable ordering). The test suite locks the format contract.
- **Exit codes**: `pnpm sync` exits 0 when in sync (averages rewritten as needed), non-zero when human action is required. A failing run does NOT rewrite `scores.generated.ts`, preventing invalid data from being cemented.
- **No CI configuration found**: there is no GitHub Actions, GitLab CI, or other CI YAML in the repository root or subdirectories. Deployment appears to be manual or external to this repo.
- **No Dockerfile or Makefile**: containerization and Make-based builds are absent.