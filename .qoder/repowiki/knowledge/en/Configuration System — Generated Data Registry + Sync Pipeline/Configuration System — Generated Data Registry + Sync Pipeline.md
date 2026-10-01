---
kind: configuration_system
name: Configuration System — Generated Data Registry + Sync Pipeline
category: configuration_system
scope:
    - '**'
source_files:
    - scripts/sync-data.mjs
    - src/data/models.ts
    - src/data/scores.generated.ts
    - src/data/sources.generated.ts
    - src/data/catalog.generated.ts
    - adapters/static/vite.config.ts
    - vite.config.ts
    - vercel.json
---

## Overview

ModelComp has no runtime configuration framework (no `.env`, no `config.yaml`, no feature-flag library). Instead, it uses a **build-time data pipeline** that turns Markdown benchmark reports into TypeScript modules consumed by the QwikCity frontend. The only true runtime configuration is Vite's `import.meta.env` (`DEV`, `BASE_URL`) and one Node-only environment variable used by the sync script.

## Key Files

- `scripts/sync-data.mjs` — deterministic orchestrator that scans `model/`, `models_voice/`, `models_finance/`, validates findings, recomputes averages, and emits three generated TS files under `src/data/`.
- `src/data/models.ts` — hydrates models from generated scores + globed `meta.json` files; defines UI constants (`DIMENSIONS`, `VIRTUAL_VIEWS`, `MODEL_COLORS`).
- `src/data/scores.generated.ts` — emitted: `{ slug: { file: { tool, reasoning, context, multimodal, coding, cost, overall } } }`.
- `src/data/sources.generated.ts` — emitted: `SourceKey` union + `SOURCE_DEFS` array with key/label/file/slug.
- `src/data/catalog.generated.ts` — emitted: model metadata catalog built during sync.
- `adapters/static/vite.config.ts` — extends root `vite.config.ts` for static adapter builds.
- `vercel.json` — deployment headers (cache policy).

## Architecture

### Two-layer data model

1. **Curated source data** lives on disk as Markdown reports plus per-model `meta.json` manifests:
   - `model/<slug>/<report>.md` — per-agent findings with seven normalized 1–100 scores.
   - `model/<slug>/average.md` — recomputed top-10 cohort average.
   - `model/<slug>/meta.json` — curated display name, context window, modalities, pricing note.
   - Mirror trees `models_voice/` and `models_finance/` are scanned alongside `model/`.

2. **Generated client bundle data** is produced by `pnpm sync`:
   - Scores are pre-parsed out of markdown prose so the client never inlines ~1.7 MB of report text.
   - Adding a new findings `.md` requires no code changes — re-run sync and it appears automatically.

### Validation & quarantine gates

The sync script enforces several rules before emitting generated files:

- **Permanence tripwire**: any git-tracked findings file missing from disk is a FAIL unless its twin `.md.excluded` exists or the content was relocated to a sanctioned mirror (`models_voice/`, `models_finance/`). This can be bypassed via `ALLOW_MODEL_DELETE=1|true`.
- **Filename hygiene**: unknown/hygiene-violating filenames fail loudly.
- **Slug version convention**: version numbers use `.` not `-`; `gpt-5-5` is rejected in favor of `gpt-5.5` (exceptions for param sizes like `gemma-4-31b`).
- **Auto-quarantine**: findings with 8+ "no verified public score found" rows and zero measured values are renamed to `*.md.excluded`.
- **Overall drift auto-fix**: if a source's Overall doesn't equal the half-up mean of its five quality dims, sync rewrites just that number.
- **Rater gate**: only raters whose own committed average Overall exceeds `RATER_GATE` count toward another model's average; otherwise fallback to all sources.
- **Top-10 cohort**: averages are computed over the ten highest-Overall sources (or all when ≤ 10).

### Generated registry reconciliation

On each run, sync:
1. Scans `src/data/sources.generated.ts` for registered stems.
2. Compares against present stems across all model trees.
3. Appends missing entries to `SourceKey` union + `SOURCE_DEFS`.
4. Reconciles labels/slugs idempotently.
5. Deletes stale `agent-slugs.generated.ts` (legacy).
6. Only writes `scores.generated.ts` when there are zero failures.

### Runtime configuration

Only two `import.meta.env` usages exist in the app:
- `src/root.tsx:L43`: `import.meta.env.BASE_URL` for the PWA manifest link.
- `src/data/models.ts:L352`: `import.meta.env.DEV` guards `checkOverallScores()` which warns when an overall score deviates > 0.51 from its quality-dim mean.

One Node-only env var:
- `ALLOW_MODEL_DELETE` (`"1"` or `"true"`) disables the permanence tripwire in `scripts/sync-data.mjs`.

Build modes are driven by Vite flags (`--mode ssr` in `dev`/`start` scripts) rather than env-based config.

## Conventions

- Model folders live under `model/<slug>/` (and mirrored trees); each must contain a `meta.json` with required fields `id`, `name`, `short`, `contextWindow`, `modalities`, `pricingNote`.
- Findings filenames derive SourceKeys via `scripts/lib/naming.mjs`; new agents need no manual registry edits after sync.
- Self-excluded findings use the `.md.excluded` suffix and are skipped by both sync and the client.
- A folder without a usable `average.md` is skipped at runtime with a warning but does not break the build; `pnpm sync` remains the strict gate.
- All generated files under `src/data/*.generated.ts` are committed artifacts — they are regenerated by `pnpm sync`, not edited by hand.
- Deployment cache policy is centralized in `vercel.json`: root paths get `public, max-age=0, must-revalidate`; `/build/*` assets get `public, max-age=31536000, immutable`.