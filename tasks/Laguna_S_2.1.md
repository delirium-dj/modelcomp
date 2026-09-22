# Research assignment — single-edit delegator

`AGENT_SOURCE_STEM: Laguna_S_2.1` <- EDIT ONLY THIS LINE TO REUSE (e.g. `Gemini_3.8_Flash`, `Claude_Sonnet_4.6`).

Assigned agent (derived: STEM with `_` -> space). Task: follow `tasks/research.md` with STEM from the line above.

Effective orders (already resolved, do not re-derive):

1. Your file is exactly `model/<slug>/<STEM>.md` (exact case-sensitive value from STEM line). Never write any other filename.
2. MANDATORY DRAFT PROTOCOL: Keep temporary research notes in `/tmp/draft.md` during research. You are FORBIDDEN from saving or writing to `model/<slug>/Laguna_S_2.1.md` until the report is 100% finished and strictly formatted per `model-report-TEMPLATE.md` with all 7 normalized score lines (`- **Tool use: <N>/100`, etc.).
3. Process missing folders highest-`Overall Score`-first (source: `- **Overall Score:` line of each `model/<slug>/average.md`; folders without `average.md` go last, A-Z; newly discovered slugs append at end).
4. Skip any folder already containing your file (idempotent re-run safe). Never overwrite, edit, or delete existing files.
5. Scope: only create your files. Do NOT run `pnpm sync`, `pnpm build.types`, or `pnpm build` (orchestrator handles that per `tasks/sync-data.md`).

Reuse for a new agent: copy this file to `tasks/<stem_lower>.md`, change the STEM line once, save, delegate to the matching model.
