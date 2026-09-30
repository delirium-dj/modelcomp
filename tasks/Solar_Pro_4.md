# Research assignment — single-edit delegator

`AGENT_SOURCE_STEM: Solar_Pro_4` <- EDIT ONLY THIS LINE TO REUSE (e.g. `Gemini_3.8_Flash`, `Claude_Sonnet_4.6`).

Assigned agent (derived: STEM with `_` -> space). Task: follow `tasks/research.md` with STEM from the line above.

Effective orders (already resolved, do not re-derive — combined single pass: audit → queue → one-by-one):

1. Your file is exactly `model/<slug>/<STEM>.md` (exact case-sensitive value from STEM line). Never write any other filename.
2. Production scope: `model/` only (`models_voice/` deferred; park voice discoveries, never place them under `model/` per `RULES.md`).
3. Process missing folders highest-`Overall Score`-first (source: `- **Overall Score:` line of each `model/<slug>/average.md`; folders without `average.md` go last, A-Z; newly discovered slugs append at end). A "first five" cap is the same queue with limit N=5.
4. Skip any folder already containing your file (idempotent re-run safe). Never overwrite, edit, or delete in-pass.
5. Enrichment (own file only, approval-gated): if your own `<STEM>.md` Signature date (`Provided by: **...** — YYYY-MM-DD`) is older than 7 days and fresh search found genuinely new verified evidence that would change scores, do NOT overwrite — emit `ENRICH-PROPOSAL: <slug> | old <date>/<Overall> | new evidence <URLs> | delta` in your final summary and advance. Second-pass overwrites only explicitly user-approved slugs.
6. Scope: only create your files (+ proposals). Do NOT run `pnpm sync`, `pnpm build.types`, or `pnpm build` (orchestrator handles that per `tasks/sync-data.md`).

Reuse for a new agent: copy this file to `tasks/<stem_lower>.md`, change the STEM line once, save, delegate to the matching model.
