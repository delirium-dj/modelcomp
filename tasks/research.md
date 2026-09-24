# Model Research Task Instructions (generic — no agent name hardcoded here)

This file defines the workflow only. Agent identity comes from the assigned
delegator file (e.g. `tasks/grok_4.6.md`) via its single `AGENT_SOURCE_STEM`
line. Do not hardcode any model name in this file.

> **GEMINI AGENTS — read first (crash guard):** before any other step, read
> `.agents/gemini-rate-limits.md` in full and apply Rules 12–15 for the whole
> task: every turn MUST carry at least one tool call (a text-only turn kills
> the session with `400 Bad Request: Requests ending with a model turn are not
> supported`); never emit `Should I continue?` / mid-task summaries / filler
> while rate-limited; never stop until the queue is empty or the user
> explicitly revokes the task; every invocation re-audits `model/` and skips
> folders already containing your file, so a re-delegated session after a
> crash automatically resumes where the dead one left off.

---

## 0. Resolve identity (from your delegator task file)

1. Read `AGENT_SOURCE_STEM` from the task file you were assigned (e.g. `Grok_4.6`).
2. Derive:
   - `Your_Filename = <STEM>.md` (exact, case-sensitive; must match `/^[A-Za-z0-9_.]+\.md$/` per `tasks/sync-data.md`).
   - `Your_Display = STEM` with `_` -> space (e.g. `Grok_4.6` -> `Grok 4.6`).
3. Your output path is always `model/<slug>/<Your_Filename>`. Never write any other filename.
4. Template: `model-report-TEMPLATE.md`. Signature first line: `Provided by: **<Your_Display> (<your vendor/model-id>)** — <YYYY-MM-DD UTC>`. Use your own canonical ID as you know it; do not invent a publisher.

---

## 1. Copy-paste prompt template for agents

> **Usage:** the orchestrator assigns a delegator file (e.g. `tasks/grok_4.6.md`)
> that already sets `STEM`. Do NOT ask the agent to guess its filename.

```text
Your delegator file sets AGENT_SOURCE_STEM = <STEM> (e.g. Grok_4.6).
Your file is model/<slug>/<STEM>.md, display name is <STEM with _ -> space>.

Follow tasks/research.md exactly:
1. Audit EVERY directory under model/ (including empty folders or folders
   without average.md / meta.json / src/data/models.ts references).
2. Your queue = folders missing model/<slug>/<STEM>.md, sorted by the
   "- **Overall Score:" line of each model/<slug>/average.md descending
   (missing average.md = last, A-Z). Newly discovered slugs append at end.
3. Process ONE folder at a time: research from fresh web search, draft per
   model-report-TEMPLATE.md, write model/<slug>/<STEM>.md immediately,
   then advance. Skip existing <STEM>.md files; never overwrite/edit/delete.
```

---

## 2. Task execution steps

### Step 1: Directory audit + ordering

- Scan all subdirectories in `model/` (e.g. `model/big-pickle/`, `model/ox_alpha/`).
- Do NOT skip empty directories or folders lacking reports, `average.md`, `meta.json`, or `src/data/models.ts` references.
- For each `model/<slug>/`, check (case-sensitive) whether `<Your_Filename>` exists.
- Missing list = queue base. Order it:
  1. Parse ONLY the `- **Overall Score: <N>/100` line from each `model/<slug>/average.md`.
  2. Sort descending by that number. Folders with missing/unparseable `average.md` go last, sorted A-Z by slug.
- Allowed carve-out: reading that single Overall line for ordering does NOT violate
  Zero Influence below. Do NOT read any other line of `average.md` and do NOT
  read any peer `*.md` findings file before/during research.

### Step 2: Dynamic model discovery during web search

- While fetching benchmarks (official cards, Artificial Analysis, LiveCodeBench,
  SWE-bench, Eden AI comparison posts, etc.), if you find a relevant model with
  no folder under `model/`:
  1. Derive a filesystem-safe slug (lowercase, digits, `.`/`-`/`_` only; version
     numbers use `.` not `-`, e.g. `gpt-5.6-terra` — never `gpt-5-6-terra`).
     First check whether a dotted folder for the model already exists
     (e.g. `gpt-5.5/`); a hyphen-versioned folder is a duplicate, not a new
     model (see `model/README.md` slug convention; `pnpm sync` fails loudly
     on hyphen versions).
  2. Create `model/<slug>/` (empty folder only — do NOT create `meta.json` or `average.md`; the orchestrator generates those via `tasks/sync-data.md`).
  3. Append `<slug>` to the END of your queue (after all ranked folders), in discovery order.

### Step 3: Sequential one-folder-at-a-time execution

For each queued slug, in order:

1. **Target identification:** model name + publisher from `<slug>` and web search.
2. **Independent research (ground up):**
   - Do NOT read peer report files (`model/<slug>/*.md` except `model-report-TEMPLATE.md`).
   - Fresh public web search only. Forget/clear memory of previous results per folder.
3. **Report generation & save:**
   - Format strictly per `model-report-TEMPLATE.md`; replace every `<...>` placeholder.
    - Score contract: `Overall Score` = half-up arithmetic mean of the five quality dimensions only 
      `(Tool use + Reasoning + Context window + Multimodal + Coding) / 5`. 
      **CRITICAL:** `Cost efficiency` is scored independently and must be strictly EXCLUDED from the Overall Score calculation (see `tasks/sync-data.md`, tolerance 0.51).
    - Write immediately to `model/<slug>/<Your_Filename>` before advancing.
    - Twin check (only if YOUR OWN `model/<slug>/<Your_Stem>.md.excluded` exists —
      never another agent's file): do NOT open it before or during research; draft
      your report fully first (zero influence preserved). Only then open the twin
      and compare evidence + scores: same verdict (same numbers within tolerance,
      or same no-data conclusion) → leave the twin untouched, write nothing;
      genuinely new verified evidence (real benchmarks the twin lacked, or its
      scores were placeholders) → write the fresh `<Your_Filename>`, then delete
      the twin. Never rename a twin back without new evidence backing the change.
4. **Advance** only after the file is written — or after an explicit leave-it-excluded
   decision (incremental save = interrupt-safe).

### Step 4: Verification (no builds)

- Relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
- All `<...>` placeholders replaced; no values copied from peer files.
- No existing files overwritten (only new `<Your_Filename>` files added); the sole
  allowed deletion is your own `.md.excluded` twin after a re-research that produced
  a fresh file with new evidence.
- Do NOT run `pnpm sync`, `pnpm build.types`, or `pnpm build`. The orchestrator
  runs those per `tasks/sync-data.md` (it recomputes `average.md`, registers the
  new source in `src/data/models.ts`, and validates `meta.json`/`average.md`).

---

## 3. Strict rules & constraints

1. **Audit all subdirectories** without exception (incl. empty/new folders).
2. **Highest-Overall-first** per Step 1; discoveries append at end.
3. **Incremental save (one-by-one)** — write each file before moving on.
4. **Zero influence:** never read peer findings before/during research (only the
   single Overall line of `average.md` for ordering, plus the template).
5. **No hallucination:** missing raw benchmark = `no verified public score found`, with source on every number.
6. **No overwrites:** create `<Your_Filename>` only where missing/newly discovered.
7. **Template compliance:** follow `model-report-TEMPLATE.md` structure strictly.
8. **Forward slashes only** in paths (`tasks/research.md`, `model/<slug>/`).
9. **Self-exclusion (no verified data):** if a folder's model yielded zero
   verified public benchmarks, write `<STEM>.md.excluded` (notes only, per the
   template's SELF-EXCLUSION rule) — never a scored `.md` with placeholder
   numbers. Excluded files are skipped by sync and never touch the average.
10. **Twin re-research:** your own `.md.excluded` twin is read ONLY after your fresh
    draft is complete (never before/during — zero influence first). Same verdict →
    leave it, write nothing. New verified evidence → write the fresh file, delete
    the twin. Never rename back without new evidence; never open another agent's
    twin at any point.
11. **Agent-implies-model backfill:** if a reporting agent — any `SourceKey` in
    `src/data/models.ts`, or any signed `Provided by:` identity you meet — has no
    `model/<slug>/` folder, scaffold it on the spot: create the folder plus a
    `meta.json` with verified facts only (schema in `model/README.md`; use the
    agent's vendor ID, documented context window, modalities, and pricing — never
    invent specs), then queue it for research like any other folder. This keeps
    the comparison table, the results-source dropdown, and the per-model
    cross-links connected: a reporting agent must never stay folderless. Do NOT
    scaffold folders for names with zero evidence of a real model behind them.
