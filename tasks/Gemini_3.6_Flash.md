# Research assignment — single-edit delegator

`AGENT_SOURCE_STEM: Gemini_3.6_Flash` <- EDIT ONLY THIS LINE TO REUSE (e.g. `Gemini_3.8_Flash`, `Claude_Sonnet_4.6`).

Assigned agent (derived: STEM with `_` -> space). Task: follow `tasks/research.md` with STEM from the line above.

> GEMINI-ONLY: this STEM belongs to a Gemini model. Before any other step, read `.agents/gemini-rate-limits.md` in full and obey it for the entire task (tool call in EVERY turn; never stop until the queue is empty or the user revokes it; resume-safe — skip folders already containing your file).

Effective orders (already resolved, do not re-derive):
1. Your file is exactly `model/<slug>/<STEM>.md` (exact case-sensitive value from STEM line). Never write any other filename.
2. Process missing folders highest-`Overall Score`-first (source: `- **Overall Score:` line of each `model/<slug>/average.md`; folders without `average.md` go last, A-Z; newly discovered slugs append at end).
3. Skip any folder already containing your file (idempotent re-run safe). Never overwrite, edit, or delete existing files.
4. Scope: only create your files. Do NOT run `pnpm sync`, `pnpm build.types`, or `pnpm build` (orchestrator handles that per `tasks/sync-data.md`).

Reuse for a new agent: copy this file to `tasks/<stem_lower>.md`, change the STEM line once, save, delegate to the matching model.