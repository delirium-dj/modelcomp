# GLM53F_IMP — architectural & structural review (GLM 5.3 Flash agent)

Date: 2026-09-29. Scope: full-repo architectural/structural examination (data
layer, sync pipeline, frontend bundle, workflow infrastructure, docs).
Precedence: `RULES.md` wins on any conflict; nothing in this file is
auto-applied — every item needs explicit user sign-off before implementation.

Examined and found healthy (no action needed): no duplicate `AGENT_MODEL_SLUG`
keys (52 entries, `src/data/models.ts`); no dead code in `src/` (every
component imported, `import.meta.glob` fully removed); `manifest.json` refs
valid (favicon.svg only); 101 unique model dirs, no same-root duplicates;
`core.hooksPath` set to `.githooks`; generated files stamped with `root`.

## High priority

### 2. De-duplicate build-time warnings (DONE 2026-10-01)

- **Current:** `console.warn` calls in `src/data/models.ts` (missing meta,
  missing average, duplicate id) fire on **every module evaluation** — the
  module is re-evaluated per build environment (SSR bundle, client, SSG
  prerender), so one stale entry spams the same warning 3–4× per build (as
  seen in the 2026-09-29 build log). Build-time warnings are also redundant
  enforcement: `pnpm sync` already fails loudly on the same problems.
- **Proposal:** gate all data-layer warnings behind `import.meta.env.DEV`
  (or a module-level `warned: Set<string>` so each message prints once per
  process). Keeps production builds clean; `pnpm sync` remains the strict
  gate that flags in-progress research for completion.

### 3. Add parser regression tests with `node:test` (zero new deps)

- **Current:** no test framework; verification = `build.types` + `build` +
  manual spot-check of `dist/index.html`. The sync parser is regression-prone
  by nature — its own comments record historical escaping bugs (e.g. the
  `[^\n*]` bold-span note at `scripts/sync-data.mjs:269`) and the
  `average.md` format contract (`../.agents/rules.md` §average.md) is strict.
- **Proposal:** Node's built-in test runner needs no devDependency (respects
  the locked zero-dep stance): extract the pure functions (`parseScores`,
  `parseAverageScores`, QUAR criteria, filename regex, display-name gate)
  into `scripts/lib/` (sync-data.mjs imports them) and add
  `scripts/lib/*.test.mjs` + `"test": "node --test scripts/"` to
  `package.json`. Locks the format contract, quarantine rules, Overall
  auto-correct tolerance, and slug gates against future edits.

## Medium priority

### 4. Split `sync-data.mjs` (728 lines) into focused modules (DONE 2026-10-01)

- **Current:** one file mixes gate logic (rater qualification), quarantine
  (QUAR), validation, averaging, and codegen (four generated files) — hard to
  review and to test in isolation.
- **Proposal:** zero-dep file split alongside item #3:
  `scripts/lib/parse.mjs`, `scripts/lib/validate.mjs`,
  `scripts/lib/codegen.mjs`; `sync-data.mjs` becomes orchestration only.
  Behavior must stay byte-identical (verify with `pnpm sync` diff of
  generated files before/after).

### 5. Slim the client bundle: emit only `model/`-root entries

- **Current:** `scores.generated.ts` (247 KB source) and
  `catalog.generated.ts` (41 KB) include `models_voice/` entries that the
  frontend filters out at runtime (`root !== "model"` check,
  `src/data/models.ts:166`) — they ship to the client unused (~6–7% of the
  scores data plus part of the catalog).
- **Proposal:** have sync filter `scoreIndex`/catalog to `root === "model"`
  for the _client_ emitted files (voice/finance trees stay fully validated —
  the validation lives in sync, not in the generated artifacts). Keep the
  `models.ts` `root` filter as a safety net: it already defaults a missing
  `root` to visible, which protects against stale pre-regen bundles.

### 6. Untrack `.rerun/**` (pending since the last purification)

- **Current:** 17 files tracked in git although `.gitignore` lists
  `.rerun/` — gitignore does not apply to already-tracked files. The disk
  files are the live research queue (the re-file loop actively reads/writes
  `.rerun/_queue.txt`).
- **Proposal:** once the re-file loop finishes:
  `git rm --cached -r .rerun/` (untrack only, keep disk files) + commit.
  Do **not** delete the working files.

### 7. Doc accuracy refresh

- **Current:** `.agents/tech-stack.md` line 33 still claims "only small
  `meta.json` files use `import.meta.glob`" — the glob was removed entirely
  (replaced by the pre-built `catalog.generated.ts`).
- **Proposal:** one-line fix in tech-stack.md; while there, confirm
  `project-map.md` and `.agents/rules.md` still describe the data flow
  accurately (they do as of this review).

## Low priority / judgment calls

### 8. Consolidate `tasks/*.md` research delegators

- **Current:** ~40 files in `tasks/` are copies of the same one-line-reuse
  delegator template (`AGENT_SOURCE_STEM: X ← EDIT ONLY THIS LINE`); only one
  is needed per run, and recovery re-delegation (`.agents/gemini-rate-limits.md`
  Rule 5) references `tasks/<STEM>.md` — a single canonical delegator matches
  the single-edit design.
- **Proposal:** keep one delegator file (e.g. `tasks/research-assign.md`),
  retire the rest. Needs user sign-off — workflow infrastructure.

### 9. Mark auto-scaffolded `meta.json` until curated

- **Current:** sync auto-scaffolds missing meta.json with a slug-guessed
  `name` (`scripts/sync-data.mjs:325`) — e.g. "Gpt Realtime 2.1" — which
  passes the display-name gate (no underscores) and silently ships as the
  model's display name until a human curates it.
- **Proposal:** stamp a `scaffolded: true` bit in the catalog entry (and/or
  meta.json) so the build log keeps reminding until replaced; optionally let
  `models.ts` warn in DEV when rendering a scaffolded entry.

### 10. Voice UI wiring (roadmap note, not architecture debt)

- **Current:** the dataset already carries `models_voice/` entries stamped
  `root: "models_voice"` and hides them from the site; schema, validation,
  and averaging are active. A future voice section needs no data-layer
  changes — only a frontend filter toggle or route reading the same
  generated files.
- **Proposal:** note only; no action now.

### 11. `vercel.json` relevance

- **Current:** Vercel cache-header config; inert unless the site is deployed
  on Vercel (build is Qwik SSG via `adapters/static/`). A prior standing
  verdict marked it must-keep.
- **Proposal:** revisit only if the deployment target changes; otherwise
  leave untouched.
