# Research assignment — single-edit delegator

`AGENT_SOURCE_STEM: Qwen_3.8_27B` <- EDIT ONLY THIS LINE TO REUSE (e.g. `Gemini_3.8_Flash`, `Claude_Sonnet_4.6`).

Assigned agent (derived: STEM with `_` -> space). Task: follow `tasks/research.md` with STEM from the line above.

> QWEN-ONLY: this STEM runs on Qwen 3.8 27B. Obey these hard quotas for the entire task:
> > - Max context: 131,072 tokens (input + output combined)
> > - Max output: 40,960 tokens per request
> > - Requests: 450/min, 27,000/hour, 648,000/day
> > - Total tokens: 750,000/min, 45,000,000/hour, 1,080,000,000/day
>
> Operating rules (stay inside the caps):
> 1. Context budget: keep input per turn well under ~90,000 tokens (131,072 minus reserved output headroom). Never load all findings files at once; work strictly one-folder-at-a-time per `tasks/research.md` Step 3.
> 2. Read each file at most once per turn; prefer targeted reads (single Overall line of `average.md` for ordering, relevant ranges only) over whole-file reads.
> 3. Batch writes: draft each report fully before writing. One write call = one done file. Never write then immediately overwrite.
> 4. Combine shell commands into a single call with `;` or `&&`; skip directory listings you already know from this turn.
> 5. Request/token pacing: 450 RPM is generous — no 12-second throttle needed — but do not burst parallel requests; sequential one-folder-at-a-time execution already paces you. If approaching 750,000 TPM in a minute (e.g. many large reads back-to-back), pause new reads until the next minute window.
> 6. Incremental save = interrupt-safe: write `model/<slug>/<STEM>.md` immediately before advancing; skip folders already containing your file; never overwrite/edit/delete.
> 7. Do NOT run `pnpm sync`, `pnpm build.types`, or `pnpm build` (orchestrator handles that per `tasks/sync-data.md`).
> 8. One search at a time: web searches are strictly sequential, one request per turn — never batch or parallelize search calls; retrieve and evaluate each result before starting the next search.

Effective orders (already resolved, do not re-derive):

1. Your file is exactly `model/<slug>/<STEM>.md` (exact case-sensitive value from STEM line). Never write any other filename.
2. Process missing folders highest-`Overall Score`-first (source: `- **Overall Score:` line of each `model/<slug>/average.md`; folders without `average.md` go last, A-Z; newly discovered slugs append at end).
3. Skip any folder already containing your file (idempotent re-run safe). Never overwrite, edit, or delete existing files.
4. Scope: only create your files. Do NOT run `pnpm sync`, `pnpm build.types`, or `pnpm build` (orchestrator handles that per `tasks/sync-data.md`).

Reuse for a new agent: copy this file to `tasks/<stem_lower>.md`, change the STEM line once, save, delegate to the matching model.
