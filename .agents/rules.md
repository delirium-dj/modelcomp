# Project rules — modelcomp

> Precedence: `../RULES.md` is the ultimate authority. This file elaborates —
> on any conflict, `RULES.md` wins.

Structural decisions for the site + findings workflow. Follow these so scores,
reports, and the website stay consistent.

## Repo layout

- `model/<slug>/` — per-model folders (slugs listed in `model/README.md`;
  slug identity is absolute in `RULES.md`: version numbers use dots, never
  hyphens: `gpt-5.5`, `gemma-4.12b-unified` — hyphen variants are forbidden
  duplicates (normalize before creating, check the dotted folder first);
  the pre-commit hook blocks hyphen variants and `pnpm sync` FAILs them
  with zero writes).
- `models_voice/<slug>/` — voice/speech models only (`RULES.md` routing rule:
  realtime voice, TTS/STT-first, voice-assistant I/O). Same file conventions
  as `model/`; sync/site wiring pending — `pnpm sync` scans `model/` only.
  The pre-2026-09-28 name `voicemodels/` is a forbidden duplicate — never
  create it; `pnpm sync` FAILs while it exists.
- `models_finance/<slug>/` — finance models only (user-directed relocation,
  e.g. Ling 3.0 Flash Fin). Same conventions; sync/site wiring pending like
  `models_voice/`.
- `src/` — Qwik City app (`routes/`, `components/`, `data/models.ts`).
- `PRD/prd.md` — product requirements (tooltips, layout).
- `model-comparison.md` — overview table + methodology (per-model details live in `model/`).
- `model-findings.md` — signed cross-model log.
- `model-report-TEMPLATE.md` — blank template for new reporting agents.
- `dist/` + `server/` — build output, never hand-edit.

## OpenCode plugin suite (`.opencode/plugins/`)

- Runtime retry suite for OpenCode, auto-loaded at startup; NOT part of the
  Qwik build or `pnpm` typecheck (each file carries `// @ts-nocheck`).
  Each plugin catches transient `session.error` shapes (quota, pool-empty,
  endpoint-down, bang/lock drops, DNS/network breaks, model-turn rejects),
  waits, then sends a tiny nudge (`please continue` in newer plugins,
  `continue` in older ones) on the same model; per-session
  consecutive-failure brake; any `session.idle` success resets everything.
  Current members: `budget-retry`, `deepseek-continue-retry`,
  `fledge-endpoint-retry`, `gpt-sol-budget-retry`, `bang-drop-retry`,
  `api-connect-retry` (2026-10-05, DNS/connection breaks, any model),
  `model-turn-retry` (2026-10-05, "requests ending with a model turn"
  rejects, any model).
- Hardening conventions (established by the 2026-10-05 `bang-drop-retry`
  pass; apply to every plugin in the suite):
  - **Mark before await.** Check `pending`/`stopped`, then mark
    (`pending.add` + `consecutive.set`) synchronously — NO `await` between
    check and mark. The plugin is single-threaded: another event can only
    interleave at an `await`, so a check→mark window containing an `await`
    lets two back-to-back errors both pass the guard (duplicate timers,
    undercounted streak, delayed brake).
  - **Unlock at timer fire, not after the prompt.** The sync
    `client.session.prompt` awaits the WHOLE agent turn (minutes). Delete
    the `pending` entry the moment the `setTimeout` fires — BEFORE the
    prompt await. Holding it longer makes a failing nudge get ignored
    (lock still up) and its late `catch` unlock kills the retry chain
    silently. Accepted cost: a rare harmless duplicate nudge.
  - **One shared `readSessionID(event)`** (tries `properties.sessionID` →
    `properties.session.id` → `properties.sessionId`) on BOTH the
    `session.idle` reset path and the error path, so they never drift apart
    on the ID shape; an idle with no recognizable ID logs a
    once-per-restart warning (trace exit).
  - **Trace every silent exit**: when the trigger matched but the plugin
    stops anyway (missing sessionID, unrecognized event type), log it
    (once-bounded) so future event-shape changes surface in logs instead of
    hiding as dead sessions.

## Website data flow (single source of truth)

1. `model/<slug>/` holds one findings file per agent (`Big_Pickle.md`, `Muse_Spark_1.3.md`) plus `average.md` (recomputed by `pnpm sync`, never by hand) and `meta.json` (curated display metadata — schema in `model/README.md`).
2. `src/data/models.ts` imports numbers-only scores from `src/data/scores.generated.ts` and reporting agent source definitions from `src/data/sources.generated.ts` (both emitted by `pnpm sync`, which pre-parses findings files and registers sources) and discovers every `meta.json` via `import.meta.glob` into `AiModel.sources`; `scores` mirrors the average (default view). Adding a findings file or a whole model folder needs NO code edits — just run `pnpm sync && pnpm build`. Even a brand-new reporting agent is registered automatically in `src/data/sources.generated.ts` by `pnpm sync`.
3. Components (`CompareSection`, `ModelCards`, `HexRadar`, `Methodology`) read `MODELS` only — never import findings files directly. The results-source selector is the shared `ModelSelect` component (`allowEmpty={false}`, options driven by the `SOURCES` array); it swaps `scores` for the chosen `sources` entry, so hexagon, table, legend, and cards all follow it. Selection is kept in the `?source=` URL param. Its caption states the mix size (derived from `SOURCES`, hover lists the contributing reports). Dropdown order is derived (Average first, virtual views in DIMENSIONS order, rest by rater own average Overall desc — see `sourceRankOverall` in `src/data/models.ts`) — never hand-sort it.

## average.md format contract (parser depends on it)

- Score lines must match `- **<Label>: <N>/100`, labels exactly: `Tool use`, `Reasoning`, `Context window`, `Multimodal`, `Coding`, `Cost efficiency`, `Overall Score`.
- Floats allowed (`66.5`); keep ≤ 1 decimal.
- Overall = mean of the source Overall scores (NOT re-derived from dims). Note the average still carries all six dims *including* Cost, so its Overall (built from cost-excluded source Overalls) can differ substantially from its own six-dim mean — that gap is by design, not drift. `checkOverallScores()` enforces tolerance 0.51 of each *source* Overall against its five-dim quality mean in dev.
- `parseAverageScores()` throws on any missing label → broken files fail the build loudly. Keep the "Agreement notes" section free of `- **X: N/100` patterns.

## Findings workflow

- Delegation: one canonical delegator `tasks/research-assign.md` — its Identity resolution chain sets the STEM (kickoff line -> pinned line -> validated self-identification against `sources.generated.ts` -> ask). Never create per-stem `tasks/<stem>.md` copies.
- One file per agent per model: `model/<slug>/<Source_Name>.md` (e.g. `Big_Pickle.md`), self-contained: model card → raw benchmarks → normalized scores → signature block.
- New agents start from `model-report-TEMPLATE.md` and research independently (no reading other agents' files first).
- Never invent benchmark numbers — write `no verified public score found` when missing; attach a source to every number. Zero verified benchmarks = self-exclude as `<Source_Name>.md.excluded` (notes only, never counted); sync's `QUAR` auto-quarantines evidence-free files (criteria in `tasks/sync-data.md`).
- Twin handling: procedure in `tasks/research.md` Step 3.3 (draft fresh first; only your own twin may then go). Never rename a twin back; never touch another agent's twin.
- Permanence: `RULES.md` (ultimate) — never delete, rename, or move any findings file or `model/<slug>/` folder; the rater gate only filters `average.md` means. Grandfathered fossils (`Ling_3.0.md.replaced-by-Flash[_Fin]`) stay untouched; no new `*.replaced-by-*` names.
- `average.md` is recomputed by `pnpm sync` (half-up, never by hand); only raters with own Overall > 84.9 count (top-10 cap). Zero eligible raters → below-gate fallback average from all reports, labeled as such (crown rule: every folder gets an average, `RULES.md`). Source-file Overall rule: `RULES.md` (five quality dims; Cost excluded; drift > 0.51 fails).
- Add `pricingTiers` (one string per tier) alongside `pricingNote` when pricing has multiple tiers; the compare table stacks them.
- Adding a results source = drop its `<Source_Name>.md` files into the model folders, run `pnpm sync` (registers the `SourceKey`/`SOURCES` entries automatically); every model containing the file is wired up with no further edits.
- Adding a model = create `model/<slug>/` with findings file(s) + `meta.json`, run `pnpm sync`; it appears in Model A/B/C selectors automatically (slug convention: `model/README.md`).
- Data syncs are governed by `tasks/sync-data.md` (mandatory, incl. its Definition of Done): run `pnpm sync`, handle what it flags, verify the build.

## Frontend conventions

- `DIMENSIONS` order in `models.ts` is the fixed radar axis order — don't reorder without user approval. Canonical order: Tool use, Reasoning, Context window, Cost efficiency, Coding, Multimodal.
- `MODEL_COLORS` maps to Model A/B/C slots.
- Per-model pages live at `src/routes/model/[slug]/` (pre-rendered for every slug via `onStaticGenerate`); link model names (cards, legend) to `/model/<slug>/`. Each page shows meta, average hexagon, auto verdict, and a best-first table of every reporting agent's overall for that model.
- Per-model page layout: all sections share the full `max-w-6xl` container width (same as the ratings table — no narrow `max-w-3xl` inners). The hexagon keeps its 560px size but is horizontally centered (`flex justify-center`); the verdict callout sits full-width between hexagon and ratings table. Verdict is a grouped auto sentence (strength cluster ≥ 90, weakness cluster < 75, cost included; empty clusters fall back to single best/worst).
- `meta.noFreeId` marks models with no Zen Free ID (cost scored on paid pricing); legend shows a "Paid" badge.
- `meta.category` marks the model paradigm (`"generative"` default, `"decision"` for typed-decision System-One models like Jev — schema in `model/README.md`). Decision models stay in `model/<slug>/` (permanence) and are separated at render time: own shelf in `ModelCards` with native specs, excluded from A/B/C compare slots and Overall ranking. Never rename folders or exile models to express paradigm — add a category value instead.
- Tooltips: cost/context/multimodal dots show raw values; tool/reasoning/coding show scores; axis labels show `description` (see PRD §7).
- Tailwind v3 utilities only; keep table cells narrow (stacked lists, short strings).

## Verification & collaboration

- After data or code changes: `pnpm build.types && pnpm build` (Windows cmd line-length failure → `pnpm build.types:direct && pnpm build:direct`), then spot-check `dist/index.html` for the changed values.
- Dev server quirk: `pnpm dev` needs `Accept: text/html` for curl (Windows: `pnpm dev:direct`).
- Do not commit, push, or open PRs unless explicitly asked. Prefer editing files over creating new ones.
