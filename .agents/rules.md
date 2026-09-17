# Project rules — modelcomp

Structural decisions for the site + findings workflow. Follow these so scores,
reports, and the website stay consistent.

## Repo layout

- `model/<slug>/` — per-model folders (slugs listed in `model/README.md`).
- `src/` — Qwik City app (`routes/`, `components/`, `data/models.ts`).
- `PRD/prd.md` — product requirements (tooltips, layout).
- `model-comparison.md` — overview table + methodology (per-model details live in `model/`).
- `model-findings.md` — signed cross-model log.
- `model-report-TEMPLATE.md` — blank template for new reporting agents.
- `dist/` + `server/` — build output, never hand-edit.

## Website data flow (single source of truth)

1. `model/<slug>/` holds one findings file per agent (`Big_Pickle.md`, `Muse_Spark_1.3.md`) plus `average.md` with the averaged 1–100 scores.
2. `src/data/models.ts` imports every findings file via `?raw` and parses scores with `parseAverageScores()` into `AiModel.sources` (`average` / `big-pickle` / `Muse Spark 1.3`); `scores` mirrors the average (default view). Names/blurbs/context/pricing meta stays curated in `MODELS`.
3. Components (`CompareSection`, `ModelCards`, `HexRadar`, `Methodology`) read `MODELS` only — never import findings files directly. The results-source selector is the shared `ModelSelect` component (`allowEmpty={false}`, options driven by the `SOURCES` array); it swaps `scores` for the chosen `sources` entry, so hexagon, table, legend, and cards all follow it. Selection is kept in the `?source=` URL param. Its caption states the mix size (derived from `SOURCES`, hover lists the contributing reports).

## average.md format contract (parser depends on it)

- Score lines must match `- **<Label>: <N>/100`, labels exactly: `Tool use`, `Reasoning`, `Context window`, `Multimodal`, `Coding`, `Cost efficiency`, `Overall Score`.
- Floats allowed (`66.5`); keep ≤ 1 decimal.
- Overall = mean of the source Overall scores (NOT re-derived from dims, so it may differ from the dim mean by ≤ 0.5 — `checkOverallScores()` enforces tolerance 0.51 in dev).
- `parseAverageScores()` throws on any missing label → broken files fail the build loudly. Keep the "Agreement notes" section free of `- **X: N/100` patterns.

## Findings workflow

- One file per agent per model: `model/<slug>/<Source_Name>.md` (e.g. `Big_Pickle.md`), self-contained: model card → raw benchmarks → normalized scores → signature block.
- New agents start from `model-report-TEMPLATE.md` and research independently (no reading other agents' files first).
- Never invent benchmark numbers — write `no verified public score found` when missing; attach a source to every number.
- `average.md` = arithmetic mean per dimension + mean of Overalls + agreement note. Recompute from sources, don't copy site values backwards.
- Add `pricingTiers` (one string per tier) alongside `pricingNote` when pricing has multiple tiers; the compare table stacks them.
- Adding a results source = new `SourceKey` + `?raw` imports per model + entry in `SOURCES` (drives the selector); a third agent's file slots in the same way.

## Frontend conventions

- `DIMENSIONS` order in `models.ts` is the fixed radar axis order — don't reorder.
- `MODEL_COLORS` maps to Model A/B/C slots.
- `meta.noFreeId` marks models with no Zen Free ID (cost scored on paid pricing); legend shows a "Paid" badge.
- Tooltips: cost/context/multimodal dots show raw values; tool/reasoning/coding show scores; axis labels show `description` (see PRD §7).
- Tailwind v3 utilities only; keep table cells narrow (stacked lists, short strings).

## Verification & collaboration

- After data or code changes: `pnpm build.types && pnpm build`, then spot-check `dist/index.html` for the changed values.
- Dev server quirk: `pnpm dev` needs `Accept: text/html` for curl.
- Do not commit, push, or open PRs unless explicitly asked. Prefer editing files over creating new ones.
