# Research assignment — GEMMA single-folder delegator (low-budget mode)

`AGENT_SOURCE_STEM: Gemma_4_31B_IT` <- EDIT ONLY THIS LINE TO REUSE.
Queue: `tasks/gemma-queue.md` (alphabetical checkboxes — your ONLY directory knowledge;
`model/**` stays banned). Each fresh session takes the first unchecked slug itself.
No assignment needed.

## Why this file differs from other agents' delegators
Gemma runs on a 16K input-token/minute free-tier quota. The normal workflow
(audit all folders + full reference reads + pasted web pages) overflows it within
minutes because the harness re-sends full history every request. This delegator
keeps one session small enough to survive: one folder, tiny references, snippets only.
Gemini and all other agents keep using `tasks/research.md` — this file is Gemma-only.

## Orders
1. Read `tasks/gemma-queue.md`, take the FIRST `- [ ]` slug. Do EXACTLY that one
   folder: `model/<slug>/`. Then mark it `- [x]` (edit that one line) and stop.
   If your file already exists there, just mark checked and stop. No audit, no
   ordering, no discovery, no other folders.
2. References: read ONLY this file + `tasks/gemma-queue.md` + `tasks/gemma-brief.md`.
   BANNED (quota): `model-comparison.md`, `src/**`, any `model/**` file (peer
   findings AND `average.md`), `model-report-TEMPLATE.md`, `tasks/research.md`.
3. Research via web search, snippets first. Open MAX 3 result pages. Never paste
   full pages into context — note numbers + source names, then close.
4. Write `model/<slug>/<STEM>.md` per the brief — or `<STEM>.md.excluded`
   per its no-data rule. The ONLY other edit allowed is the one queue checkbox
   from step 1. Never create, overwrite, or delete any other file.
5. Do NOT run `pnpm sync`, `pnpm build.types`, or `pnpm build` (orchestrator
   handles that per `tasks/sync-data.md`).
6. Quota/429 errors: wait 65s ONCE, retry the failed step ONCE. If it fails again,
   STOP and report which step failed and what was already saved. Never rapid-retry
   (retries resend the same oversized payload into the same minute-window).

## Verification (no builds)
- Exactly one new file, correct name and location, headings per the brief.
- Overall = half-up mean of the five quality dims; every number sourced.
- Queue checkbox for the slug marked `- [x]` (or, if your file already existed,
  marked checked with no other changes).

Reuse for a new Gemma agent: copy this file to `tasks/<stem_lower>.md`, change the
STEM line once. The queue drives itself (`tasks/gemma-queue.md`) — just delegate
one fresh session per slug, alphabetically, no assignment needed.
