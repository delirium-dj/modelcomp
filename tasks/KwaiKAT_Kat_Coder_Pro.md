# Research assignment — single-edit delegator

`AGENT_SOURCE_STEM: KwaiKAT_Kat_Coder_Pro` <- EDIT ONLY THIS LINE TO REUSE (e.g. `Gemini_3.8_Flash`, `Claude_Sonnet_4.6`).

Assigned agent (derived: STEM with `_` -> space). Task: follow `tasks/research.md` with STEM from the line above.

Effective orders (already resolved, do not re-derive):

1. Your file is exactly `model/<slug>/<STEM>.md` (exact case-sensitive value from STEM line). Never write any other filename.
2. Process missing folders highest-`Overall Score`-first (source: `- **Overall Score:` line of each `model/<slug>/average.md`; folders without `average.md` go last, A-Z; newly discovered slugs append at end).
3. Skip any folder already containing your file (idempotent re-run safe). Never overwrite, edit, or delete existing files.
4. Scope: only create your files. Do NOT run `pnpm sync`, `pnpm build.types`, or `pnpm build` (orchestrator handles that per `tasks/sync-data.md`).
5. Quarantine (2026-09-19): 36 placeholder reports with `- **Overall Score: 15/100` were parked as `model/<slug>/KwaiKAT_Kat_Coder_Pro.md.excluded`. The `.excluded` suffix is intentional: `scripts/sync-data.mjs` collects only `*.md` and `src/data/models.ts` globs `model/*/*.md`, so excluded files are invisible to `average.md` and the site but stay alive on disk. 11 folders kept a real `KwaiKAT_Kat_Coder_Pro.md` (Overall != 15) — never touch those.

## Reactivation protocol (next KwaiKAT_Kat_Coder_Pro run)

1. Queue = folders containing `model/<slug>/KwaiKAT_Kat_Coder_Pro.md.excluded` first (highest-`average.md`-Overall-first, same ordering as §2 above). Folders already containing a real `KwaiKAT_Kat_Coder_Pro.md` are skipped — never overwrite them.
2. For each quarantined slug: fresh public web research per `tasks/research.md` (you MAY read your own `.md.excluded` only to identify the model — do NOT copy its 15/100 scores). Produce real normalized scores passing the `tasks/sync-data.md` gate (Overall = half-up mean of the five quality dims, tolerance 0.51; Cost excluded).
3. Write the corrected file as `model/<slug>/KwaiKAT_Kat_Coder_Pro.md`, then delete its `model/<slug>/KwaiKAT_Kat_Coder_Pro.md.excluded` twin. Do NOT just rename the `.excluded` back without fixing scores.
4. A file still carrying `- **Overall Score: 15/100` must NEVER be reactivated — leave it as `.excluded`. Only a corrected file with Overall != 15 is picked up by the next `pnpm sync` into `average.md`.
5. Fully-quarantined models (2026-09-19): `gpt-5.5` and `gpt-5.6-luna` had no valid source left after quarantine, so their stale `average.md` (Overall 15/100) was also parked as `average.md.excluded`. The site skips them (`models.ts` warn-and-skip, no build break) and `pnpm sync` FAILs `no parseable findings files` for them until real research lands — that FAIL is expected, not a regression. Once any agent writes a real findings `.md` there, `pnpm sync` recreates a fresh `average.md` automatically.

Reuse for a new agent: copy this file to `tasks/<stem_lower>.md`, change the STEM line once, save, delegate to the matching model.
