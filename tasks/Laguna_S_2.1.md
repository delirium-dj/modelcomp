# Research assignment — single-edit delegator

`AGENT_SOURCE_STEM: Laguna_S_2.1` <- EDIT ONLY THIS LINE TO REUSE (e.g. `Gemini_3.8_Flash`, `Claude_Sonnet_4.6`).

Assigned agent (derived: STEM with `_` -> space). Task: follow `tasks/research.md` with STEM from the line above.

Effective orders (already resolved, do not re-derive):

1. **Exact Filename:** Your file is strictly `model/<slug>/<STEM>.md` (exact case-sensitive value from STEM line). Never write any other filename or append extensions like `.md.excluded` unless the model has zero public information anywhere on the web.
2. **Mandatory Draft Protocol:** Keep temporary research notes in `/tmp/draft.md` during research. You are FORBIDDEN from writing to `model/<slug>/Laguna_S_2.1.md` until the report is 100% finished and fully formatted.
3. **Strict Score Line Contract:** Every saved file MUST include the exact 7 normalized score lines in bullet format:
   - `- **Tool use: <N>/100`
   - `- **Reasoning: <N>/100`
   - `- **Context window: <N>/100`
   - `- **Multimodal: <N>/100`
   - `- **Coding: <N>/100`
   - `- **Cost efficiency: <N>/100`
   - `- **Overall Score: <N>/100`
   The `Overall Score` MUST equal `(Tool use + Reasoning + Context window + Multimodal + Coding) / 5`. `Cost efficiency` MUST be excluded from the Overall Score calculation.
4. **Normalized Scores Mandatory:** Even if specific raw benchmarks (e.g. Terminal-Bench) are not published, derive normalized 1–100 scores based on available intelligence indices, context window, pricing, and class medians. Never leave score lines missing or save unformatted raw text.
5. **Queue Order:** Process missing folders highest-`Overall Score`-first (source: `- **Overall Score:` line of each `model/<slug>/average.md`; folders without `average.md` go last, A-Z; newly discovered slugs append at end).
6. **Idempotence:** Skip any folder already containing your file. Never overwrite, edit, or delete existing files.
7. **Scope & Execution:** Only create your files. Do NOT run `pnpm sync`, `pnpm build.types`, or `pnpm build` (orchestrator handles that per `tasks/sync-data.md`).

Reuse for a new agent: copy this file to `tasks/<stem_lower>.md`, change the STEM line once, save, delegate to the matching model.
