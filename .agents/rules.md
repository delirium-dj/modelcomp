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

1. `model/<slug>/` holds one findings file per agent (`Big_Pickle.md`, `Muse_Spark_1.3.md`) plus `average.md` (recomputed by `pnpm sync`, never by hand) and `meta.json` (curated display metadata — schema in `model/README.md`).
2. `src/data/models.ts` auto-discovers every findings file and every `meta.json` via `import.meta.glob` and parses scores with `parseAverageScores()` into `AiModel.sources`; `scores` mirrors the average (default view). Adding a findings file or a whole model folder needs NO code edits — just run `pnpm sync && pnpm build`. Only a brand-new reporting agent needs one line in `SourceKey` + one entry in `SOURCES` (appended last; `pnpm sync` does even that automatically).
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
- `average.md` = arithmetic mean per dimension + mean of Overalls + agreement note. Recomputed by `pnpm sync` (half-up to 1 decimal), never by hand; don't copy site values backwards.
- Add `pricingTiers` (one string per tier) alongside `pricingNote` when pricing has multiple tiers; the compare table stacks them.
- Adding a results source = drop its `<Source_Name>.md` files into the model folders, run `pnpm sync` (registers the `SourceKey`/`SOURCES` entries automatically); every model containing the file is wired up with no further edits.
- Adding a model = create `model/<slug>/` with findings file(s) + `meta.json`, run `pnpm sync`; it appears in Model A/B/C selectors automatically.
- Data syncs are governed by `tasks/sync-data.md` (mandatory, incl. its Definition of Done): run `pnpm sync`, handle what it flags, verify the build.

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
