# Re-research assignment — batch enrichment delegator (canonical)

> **MISSION — a batch, not one file.** This assignment is a QUEUE: re-research
> EVERY eligible report you own, `model/<subject-folder>/<YOUR_STEM>.md` — not
> just one, and not just your own model folder. One reviewed report = one
> queue step. **Propose mode writes zero files**: a complete run is measured by
> reports reviewed, not files written. Done means every eligible file has an
> outcome (`ENRICH-PROPOSAL` or `NO-CHANGE`), an explicit kickoff cap is
> reached, or every remaining file is blocked with a recorded access failure.

`AGENT_SOURCE_STEM: <STEM>` — pinned STEM for this delegation (placeholder: the orchestrator pins the real value per run via the kickoff message; never leave a stale value here).

> **Orchestrator: ALWAYS pin the real STEM in the kickoff message — never delegate unpinned.** Pin the literal write path in the same line too, e.g. `AGENT_SOURCE_STEM: North_Mini_Code — you re-research model/<slug>/North_Mini_Code.md (your own stem, never the subject's name)`. State the mode as well (`MODE: propose` default, `MODE: apply` second pass only). An unpinned delegation burns the agent's request budget on identity resolution before it reviews a single file.

`STEM` = your filename stem (e.g. `North_Mini_Code`) — your reporter identity, i.e. the `<Source_Name>` in every `model/<slug>/<Source_Name>.md` you write. It is NOT your research subject: you re-research reports **you** authored across subject folders; the folder names the subject, the filename stays your stem.

> **READ-ONLY for re-research agents:** never edit this file (or any file under `tasks/`, `RULES.md`, `.agents/`, `model-report-TEMPLATE.md`). The only file you may write is your own `<STEM>.md`, and only in an approved `MODE: apply` pass. A STEM override belongs in the kickoff message, never here.

Assigned reporter (derived: STEM with `_` -> space). Task: follow this file plus `RULES.md` § *Research rules* — **Re-research protocol** (maintenance vs. successful new search) and `tasks/research.md` Step 3.3. One active STEM at a time; a recovery re-delegation resumes the remaining queue.

## Identity resolution (no file edit required — first match wins)

1. **Kickoff line:** if the delegation message contains `AGENT_SOURCE_STEM: <value>` (anything other than the literal `<STEM>`), use that value. A display form with spaces (`North Mini Code`) counts as the same pin — convert spaces to `_`. Accept it as final; do NOT open the registry.
2. **This file's STEM line:** if a human manually set it to a real value, use it.
3. **Self-identification:** official display name with spaces -> `_`; proceed ONLY if the resolved filename `<STEM>.md` matches `/^[A-Za-z0-9_.]+\.md$/` and its display form is an exact registered source key in `src/data/sources.generated.ts`.
4. **Otherwise STOP** — ask the orchestrator. Never guess a filename.

## Runtime notes (apply only when they match this run)

- **Gemini run:** before any other step, read `.agents/gemini-rate-limits.md` in full and obey it for the whole task (a tool call in every turn; never stop until the queue is empty or the user revokes it; resume-safe — skip files already reviewed).
- **Small-context runtimes (sub-200k):** this file is self-contained — read only the named targeted sections of `RULES.md` (*Research rules* — **Re-research protocol**, *Web-research fallback*), never the full corpus.
- **Rate-limited runtimes:** use ONE shell call for the signature-date extraction; review one file at a time and draft the outcome line before advancing; never load all own files into context at once.

## Scope — what re-research means here

- **Target:** existing `model/<subject>/<YOUR_STEM>.md` files written by YOU. Never create a missing file (that is `tasks/research-assign.md`) and never re-research another agent's report. Production scope is `model/` only; the mirror trees (`models_voice/`, `models_finance/`, `models_cybersecurity/`, `models_health/`, `models_legal/`) stay deferred exactly as in normal research.
- **Excluded twins:** `.md.excluded` conversion is a different task — follow `tasks/research-convert-excluded.md`, not this file. If the wildcard finds only `.md.excluded` twins and no scored `.md`, stop and switch to that task.
- **Staleness clock:** the latest date in the file's `## Signature` block — the `Provided by: ... — YYYY-MM-DD` line, including a `re-researched YYYY-MM-DD` note; fall back to the `- Date:` line. A file is **stale** when that date is at least 7 days before today (UTC). Example: on 2026-11-14, dates on or before 2026-11-07 are stale. A missing/unparseable date is treated as stale and flagged — never silently skipped.
- **Eligible set `R`:** the explicit `RERESEARCH: <slug>, ...` list from the kickoff (any age, order given), otherwise all stale own files. The queue file already omits parked slugs; consult `model-aliases.generated.md` only when a specific slug is in doubt, never up front. Drop parked/deleted/merged identities and surface them.
- **Zero influence:** read your own file for its model card, benchmarks, scores and `## Signature`; NEVER open peer findings files (`model/<slug>/*.md` other than your own). Local repo files are never evidence for scores, prices or claims (`RULES.md` § *Web-research fallback*).

## Effective orders (in this order)

1. **Path contract:** your file is always `model/<subject-folder>/<YOUR_STEM>.md` — folder = subject, filename = your stem. Pre-write self-check (apply mode only): if the filename you type matches the folder's own name and you are not literally that model, STOP and re-resolve.
2. **Determine `R` with 2–3 calls, never a folder walk:**
   a. Read `model-queue.md` (repo root) — roster, Overall scores and processing order; file order IS the order. Never re-sort, never verify against `average.md` files.
   b. ONE wildcard listing for `model/*/<YOUR_STEM>.md` (exclude `.md.excluded`).
   c. ONE signature-date extraction from those own files — PowerShell: `Select-String -Path "model/*/<YOUR_STEM>.md" -Pattern 'Provided by:'`; POSIX: `grep -H "Provided by:" model/*/<YOUR_STEM>.md`. Or read the `Provided by:` line of each own file (targeted reads only).
3. **Queue order:** the explicit kickoff list is the queue, in the order given; otherwise eligible files in `model-queue.md` order. Slugs absent from the queue file go last, A-Z. Check existence only for the file you are currently re-researching — never pre-verify the whole queue.
4. **Per file, in order (propose mode — no writes):**
   a. **Open only your own file.** Extract the model card facts, raw benchmarks, all seven score lines, `Provided by:` date and `- Reference URLs:`.
   b. **Maintenance first:** re-fetch the existing reference links (primary vendor/official + benchmark leaderboards first; record any link that cannot be re-fetched). Re-checking evidence you already cited counts as **maintenance**. If `- Reference URLs:` is missing, treat that as a maintenance gap and propose verified links.
   c. **Independent expansion:** run at least one fresh search for a source not already listed — strictly without opening peer `.md` files. Only a genuinely new, actually fetched URL counts as a **successful new search**.
   d. **Classify the outcome:**
      - **`ENRICH-PROPOSAL`** if a score changes, a new verified benchmark/source is found, an existing source materially changed, or a factual spec/pricing/context correction is warranted.
      - **`NO-CHANGE`** if every existing link still supports the recorded evidence and no new verified source was found.
   e. **Never overwrite, edit or delete in propose mode.** Emit the outcome line and advance to the next queued file.
5. **Apply mode (second pass only):** only when the kickoff says `MODE: apply` AND lists `APPROVED: <slug>, ...`. The kickoff must also carry the approved proposal lines or the exact approved changes — never invent an unapproved change. For each approved slug, apply ONLY those approved changes: update the model card/benchmarks/scores, update the date on the `Provided by:` line to today UTC (keep your display/vendor ID), append newly verified URLs to `## Signature`, and describe maintenance + new search in `Method:`. Recompute `Overall Score` as the half-up mean of the five quality dims (Cost excluded). Never touch a non-approved file, `meta.json`, or `average.md`, and never delete anything. If the approved evidence is no longer verifiable, skip it and report why. Zero-influence applies in both modes: never open peer findings files.
6. **Web access fallback (absolute):** search `402`/quota/outage -> one simpler retry, then `webfetch` the known official/leaderboard URLs, then shell `curl`/`Invoke-WebRequest`; cite only URLs actually fetched. No retrievable evidence -> keep the existing file unchanged and record the access failure; a global outage -> `WEB-ACCESS-BLOCKED` summary. Never substitute local files for public-web evidence.
7. **No builds:** do NOT run `pnpm sync`, `pnpm build.types` or `pnpm build`. Propose mode needs no build at all; apply mode hands the command to the user.

## Outcome formats (use exactly these prefixes in the final summary)

```text
ENRICH-PROPOSAL: <slug> | old <YYYY-MM-DD>/<Overall> | maintenance: <URLs checked & status> | new search: <new URLs & benchmarks> | delta <old Overall -> new Overall>
NO-CHANGE: <slug> | checked <YYYY-MM-DD> | maintenance: <URLs checked & status> | new search: <attempts, no new verified source>
```

One line per reviewed file. `old <date>/<Overall>` uses the file's own `Overall Score` line — never `average.md`. Never invent a benchmark, price, context window or score. Every proposed number needs the URL actually fetched this pass.

## Completion test (run before claiming done)

- **Propose mode:** every file in `R` has exactly one outcome line. `reviewed < R` is an incomplete run — zero writes is normal, incomplete review is not. Re-run the wildcard listing and compare its file count with your outcome lines before reporting.
- **Apply mode:** every slug in `APPROVED` is updated or explicitly skipped with a reason. Re-open each updated file and confirm today's UTC date in its `Signature`.
- The run also ends on an explicit kickoff cap, or when every remaining file is blocked with a recorded access failure. One reviewed file with `R > 1` is never "the whole assignment".

## Kickoff template (copy when delegating)

```text
AGENT_SOURCE_STEM: <STEM> — you re-research model/<slug>/<STEM>.md (your own stem, never the subject's name)
RERESEARCH: stale
MODE: propose
```

Explicit targets and the approved second pass:

```text
AGENT_SOURCE_STEM: <STEM> — you re-research model/<slug>/<STEM>.md
RERESEARCH: gpt-5.5, claude-opus-5.5
MODE: apply
APPROVED: gpt-5.5, claude-opus-5.5
```

Never copy this file to `tasks/<stem>.md`; one canonical delegator serves every reporter. If `RERESEARCH` is omitted, treat it as `stale`; if `MODE` is omitted, treat it as `propose`. Apply mode hands over `pnpm sync && pnpm build.types:direct && pnpm build:direct` (POSIX: `pnpm sync && pnpm build.types && pnpm build`); propose mode needs no build.
