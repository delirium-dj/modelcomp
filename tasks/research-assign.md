# Research assignment — single-edit delegator (canonical)

`AGENT_SOURCE_STEM: <STEM>` — placeholder. The Identity resolution chain below decides your STEM; manually setting this line pins it and beats self-derivation.

Assigned agent (derived: STEM with `_` -> space). Task: follow `tasks/research.md` with the resolved STEM. One active STEM at a time: finish (or revoke) the current assignment before reassigning; a recovery re-delegation resolves the same STEM again (see `.agents/gemini-rate-limits.md` Rule 5).

## Identity resolution (no file edit required — first match wins)

1. **Kickoff line:** if the delegation message that delivered this file contains `AGENT_SOURCE_STEM: <value>` (anything other than the literal `<STEM>`), use that value.
2. **This file's STEM line:** if a human manually set it to a real value, use it — an explicit pin beats everything below.
3. **Self-identification:** derive from your own model identity: official display name with spaces -> `_` (e.g. `Gemini 3.8 Flash` -> `Gemini_3.8_Flash`). Proceed ONLY if BOTH checks pass:
   - the STEM matches `/^[A-Za-z0-9_.]+\.md$/`, and
   - its display form (STEM with `_` -> space) is an exact registered source key in `src/data/sources.generated.ts`.
4. **Otherwise STOP** — ask the orchestrator for the STEM. Never guess, never invent a filename. (A brand-new agent fails check 3 by design: the orchestrator supplies its STEM once and `pnpm sync` registers it, making all later runs fully automatic.)

## Runtime notes (apply only when they match this run)

- **Gemini run:** before any other step, read `.agents/gemini-rate-limits.md` in full and obey it for the entire task (tool call in EVERY turn; never stop until the queue is empty or the user revokes it; resume-safe — skip folders already containing your file).
- **Qwen 3.8 27B-class runtime (131,072 max context, 40,960 max output, 450 req/min, 750,000 tokens/min):** keep input per turn well under ~90,000 tokens (reserved output headroom included); read each file at most once per turn (targeted ranges, single Overall line of `average.md` for ordering); draft each report fully before writing — one write call = one done file, never write-then-overwrite; combine shell commands into one call with `;` or `&&`; web searches strictly sequential, one at a time; if approaching 750,000 TPM in a minute, pause new reads until the next minute window. Never load all findings files at once — strictly one folder at a time per `tasks/research.md` Step 3.

Effective orders (already resolved, do not re-derive — combined single pass: audit → queue → one-by-one):

1. Your file is exactly `model/<slug>/<STEM>.md` (exact, case-sensitive resolved STEM). Never write any other filename.
2. Production scope: `model/` only (`models_voice/` deferred; park voice discoveries, never place them under `model/` per `RULES.md`).
3. Process missing folders highest-`Overall Score`-first (source: `model-queue.md` at repo root — `<Overall> <slug>` lines, already sorted highest-first by the last `pnpm sync`; slugs absent there (= no `average.md` yet) go last, A-Z; newly discovered slugs append at end). If `model-queue.md` is missing or older than the latest findings, fall back to the `- **Overall Score:` line of each `model/<slug>/average.md`. A "first five" cap is the same queue with limit N=5.
4. Skip any folder already containing your file (idempotent re-run safe). Never overwrite, edit, or delete in-pass.
5. Enrichment (own file only, approval-gated): if your own `<STEM>.md` Signature date (`Provided by: **...** — YYYY-MM-DD`) is older than 7 days and fresh search found genuinely new verified evidence that would change scores, do NOT overwrite — emit `ENRICH-PROPOSAL: <slug> | old <date>/<Overall> | new evidence <URLs> | delta` in your final summary and advance. Second-pass overwrites only explicitly user-approved slugs.
6. Scope: only create your files (+ proposals). Do NOT run `pnpm sync`, `pnpm build.types`, or `pnpm build` (orchestrator handles that per `tasks/sync-data.md`).

### Quarantine backlog (only when your STEM has placeholder twins)

If `model/<slug>/<STEM>.md.excluded` files still carry `- **Overall Score: 15/100` (the 2026-09-19 placeholder purge — live today for `GPT_5.6_Terra`), they lead the queue (highest-`average.md`-Overall-first inside the group); folders already holding a real `<STEM>.md` are skipped, never overwritten. For each: fresh public web research per `tasks/research.md` (you MAY read your own `.md.excluded` only to identify the model — never copy its 15/100 scores) and produce real normalized scores passing the `tasks/sync-data.md` gate (Overall = half-up mean of the five quality dims, tolerance 0.51; Cost excluded); write the corrected `<STEM>.md`, then delete the `.excluded` twin. A file still carrying `- **Overall Score: 15/100` is never reactivated — leave it `.excluded`; only a corrected file (Overall != 15) is picked up by the next `pnpm sync`.

Reuse for a new agent: paste this file as-is (the agent resolves its own STEM, or pin one with `AGENT_SOURCE_STEM: <value>` in the kickoff message) — never copy it to `tasks/<stem>.md`.
