# GEMMA single-folder task (Script-assisted mode — Gemma-only)

`AGENT_SOURCE_STEM: Gemma_4_31B_IT`

This task uses local Node.js script fetching (`scripts/gemma-fetch.mjs`) to gather raw benchmark/model data snippets without burning prompt budget on web searches or HTML scraping.

## Protocol (exact order)

1. **Queue check:** Read `tasks/gemma-queue.md` + `tasks/gemma-brief.md`. Select the first unchecked `- [ ] <slug>`.
   - If `model/<slug>/Gemma_4_31B_IT.md` or `Gemma_4_31B_IT.md.excluded` already exists: mark queue `- [x] <slug>`, reply `DONE <slug>`.
2. **Fetch data via script:** Execute local script to populate scratch snippet:
   - Tool call: `run_command` -> `node scripts/gemma-fetch.mjs <slug>`
3. **Read scratch & write findings:**
   - Tool call: `view_file` -> `tasks/gemma-scratch/<slug>.txt`
   - Create `model/<slug>/Gemma_4_31B_IT.md` from brief template + scratch data (or `Gemma_4_31B_IT.md.excluded` if no benchmark data found).
4. **Cleanup & complete:**
   - Mark queue `- [x] <slug>` in `tasks/gemma-queue.md`.
   - Delete scratch file `tasks/gemma-scratch/<slug>.txt`.
   - Reply ONLY: `DONE <slug>`.

## Survival & Quota Rules

- **Script Fetching Only:** Do NOT perform web searches or HTML page fetches. The local script handles API lookups and outputs compact <200-word snippets.
- **Sleep between steps:** SLEEP 75s (`Start-Sleep -Seconds 75`) between heavy tool calls if quota warnings occur.
- **No Build Commands:** Do NOT run `pnpm sync`, `pnpm build.types`, or `pnpm build`.
