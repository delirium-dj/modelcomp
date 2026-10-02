# Model Research Task Instructions (generic — no agent name hardcoded here)

> Precedence: `../RULES.md` is the ultimate authority — on any conflict it wins.
> The hard rule below restates it; the rest is procedure.

This file defines the workflow only. Agent identity comes from the assigned
delegator file (`tasks/research-assign.md`) via its Identity resolution chain
(kickoff line -> pinned STEM line -> validated self-identification -> ask).
Do not hardcode any model name in this file.

> **GEMINI AGENTS — read first (crash guard):** before any other step, read
> `.agents/gemini-rate-limits.md` in full and apply it for the whole task
> (tool call in EVERY turn; never stop until the queue is empty or the user
> explicitly revokes it; re-delegation resumes where a crashed session left
> off).

---

## 0. Resolve identity (from your delegator task file)

1. Resolve `STEM` via the **Identity resolution** chain in `tasks/research-assign.md`
   (first match wins): kickoff line `AGENT_SOURCE_STEM: <value>` -> the file's
   pinned STEM line -> self-identification from your own official model name
   (spaces -> `_`), but only if it passes the filename regex AND matches a
   registered source key in `src/data/sources.generated.ts` -> otherwise stop
   and ask the orchestrator. Never guess.
2. Derive:
   - `Your_Filename = <STEM>.md` (exact, case-sensitive; must match `/^[A-Za-z0-9_.]+\.md$/` per `tasks/sync-data.md`).
   - `Your_Display = STEM` with `_` -> space (e.g. `Grok_4.6` -> `Grok 4.6`).
3. Your output path is always `model/<slug>/<Your_Filename>` — except for
   voice/speech models (`RULES.md` routing rule), which go under
   `models_voice/<slug>/<Your_Filename>`. Never write any other filename.
4. Template: `model-report-TEMPLATE.md`. Signature first line: `Provided by: **<Your_Display> (<your vendor/model-id>)** — <YYYY-MM-DD UTC>`. Use your own canonical ID as you know it; do not invent a publisher.

---

## 1. Copy-paste prompt template for agents

> **Usage:** the orchestrator pastes or points at `tasks/research-assign.md`.
> STEM is resolved by that file's Identity resolution chain — pin it with an
> `AGENT_SOURCE_STEM: <STEM>` line in the kickoff message only when you must
> override self-identification. Do NOT ask the agent to guess its filename.

```text
Your STEM is resolved by tasks/research-assign.md (Identity resolution chain),
or pinned explicitly below: AGENT_SOURCE_STEM = <STEM> (e.g. Grok_4.6).
Your file is model/<slug>/<STEM>.md, display name is <STEM with _ -> space>.

Follow tasks/research.md exactly (combined single pass: audit → queue → one-by-one):
1. Audit EVERY directory under model/ only — production scope, models_voice/ deferred
   (including empty folders or folders without average.md / meta.json / src/data/models.ts references).
2. Your queue = folders missing model/<slug>/<STEM>.md, sorted by the
   "- **Overall Score:" line of each model/<slug>/average.md descending
   (missing average.md = last, A-Z). Newly discovered slugs append at end
   (voice/speech discoveries are parked, never placed under model/ per RULES.md).
3. Process ONE folder at a time: research from fresh web search, draft per
   model-report-TEMPLATE.md, write model/<slug>/<STEM>.md immediately,
   then advance. Skip existing <STEM>.md files; never overwrite/edit/delete in-pass.
   Own file >7d old (Signature date) with new verified evidence → ENRICH-PROPOSAL, advance.
```

---

## 2. Task execution steps

### Step 1: Directory audit + ordering

> Production scope (user-directed, 2026-09-30): scan `model/` only; defer `models_voice/` scan. `RULES.md` voice routing stays absolute — never place voice/speech findings under `model/`; park voice discoveries for later instead of researching them now. Full mode (when re-enabled) scans `model/` and `models_voice/`.

- Scan all subdirectories in scope (e.g. `model/big-pickle/`; full mode also `models_voice/gpt-realtime-2/`).
- Do NOT skip empty directories or folders lacking reports, `average.md`, `meta.json`, or `src/data/models.ts` references.
- For each `model/<slug>/`, check (case-sensitive) whether `<Your_Filename>` exists (full mode: check `<parent>/<slug>/` and write new voice findings under `models_voice/` per `RULES.md`; never re-route an existing folder).
- Missing list = queue base. Order it:
  1. Parse ONLY the `- **Overall Score: <N>/100` line from each `model/<slug>/average.md`.
  2. Sort descending by that number. Folders with missing/unparseable `average.md` go last, sorted A-Z by slug.
- Allowed carve-out: reading that single Overall line for ordering is fine
  (see rate-limit Rule 2). Do NOT read any other line of `average.md` and do
  NOT read any peer `*.md` findings file before/during research.

### Step 2: Dynamic model discovery during web search

- While fetching benchmarks (official cards, Artificial Analysis, LiveCodeBench,
  SWE-bench, Eden AI comparison posts, etc.), if you find a relevant model with
  no folder under `model/` (full mode: under `model/` or `models_voice/`):
  1. Derive a filesystem-safe slug per `model/README.md` (dots for versions:
      `gpt-5.6-terra`, never `gpt-5-6-terra`; check for an existing dotted
      folder first — `pnpm sync` fails hyphen variants loudly).
      **Tier-name check:** a name whose suffix is only a pricing or effort tier
      (Contributor, Contributor Free, Free, Standard, Max, …) is not a new
      model — resolve it to the existing base folder via the "Tier aliases"
      list in `model/README.md` (e.g. Muse Spark 1.3 Contributor / Free / Max
      → `model/muse-spark-1.3/`, Muse Spark 1.2 Free / Max →
      `model/muse-spark-1.2/`, never a `-free`/`-max`/`-contributor`
      variant folder) and write your findings into that base folder.
  2. Voice check (`RULES.md`, absolute): if the model qualifies as voice /
      speech (realtime voice API, TTS/STT-first, voice-assistant I/O), do NOT
      place it under `model/`. Production scope: park it (note it in your final
      summary, do not create or research it now). Full mode only: the parent is
      `models_voice/<slug>/` — check both trees for an existing folder first.
  3. Create `model/<slug>/` (full mode: `<parent>/<slug>/`; empty folder only — do NOT create `meta.json` or `average.md`; the orchestrator generates those via `tasks/sync-data.md`).
  4. Append `model/<slug>` (full mode: `<parent>/<slug>`) to the END of your queue (after all ranked folders), in discovery order.

### Step 3: Sequential one-folder-at-a-time execution

For each queued slug, in order:

1. **Target identification:** model name + publisher from `<slug>` and web search.
2. **Independent research (ground up):**
   - Do NOT read peer report files (`model/<slug>/*.md` except `model-report-TEMPLATE.md`).
   - Fresh public web search only. Forget/clear memory of previous results per folder.
3. **Report generation & save:**
    - Format strictly per `model-report-TEMPLATE.md`; replace every `<...>` placeholder.
    - Strip all template notice blocks (`> TEMPLATE...`) and submission checklist blocks before saving.
    - Score contract & syntax: include all 7 score lines (`Tool use`, `Reasoning`, `Context window`, `Multimodal`, `Coding`, `Cost efficiency`, `Overall Score`). Score lines MUST strictly match `- **<Label>: <N>/100.**` (no colons inside bold tags, no spaces around `/`). `Overall Score` = half-up mean of the 5 non-cost quality dims (`RULES.md`).
    - Write immediately to `model/<slug>/<Your_Filename>` before advancing.
    - Twin check (only if YOUR OWN `model/<slug>/<Your_Stem>.md.excluded` exists —
      never another agent's file): do NOT open it before or during research; draft
      your report fully first (zero influence preserved). Only then open the twin
      and compare evidence + scores: same verdict (same numbers within tolerance,
      or same no-data conclusion) → leave the twin untouched, write nothing;
      genuinely new verified evidence (real benchmarks the twin lacked, or its
      scores were placeholders) → write the fresh `<Your_Filename>`, then delete
      the twin. Never rename a twin back without new evidence backing the change.
    - Enrichment of an existing `<Your_Filename>` (approval-gated, own file only):
      never overwrite during the pass. If the folder already contains your own
      `<Your_Filename>` AND its Signature date (`Provided by: **...** — YYYY-MM-DD`)
      is older than 7 days AND fresh search surfaced genuinely new verified
      evidence that would change scores (new benchmark numbers with sources,
      corrected error with source, new pricing/context with source — rewording
      alone never qualifies): do NOT write; emit an `ENRICH-PROPOSAL` line
      (`<slug> | old <date>/<Overall> | new evidence <URLs> | expected delta`)
      in your final summary and advance. Overwrite happens only in a second pass
      over explicitly user-approved slugs, updating the Signature date.
4. **Advance** only after the file is written — or after an explicit leave-it-excluded
   decision — or after logging an `ENRICH-PROPOSAL` (incremental save = interrupt-safe).
5. **Combined single pass:** audit → queue → one-by-one in one delegation. A "first five"
   request is the same queue with limit N=5, not a different mode.

### Step 4: Verification (no builds)

- Relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
- All `<...>` placeholders replaced; no values copied from peer files.
- Permanence holds (`RULES.md`): only new `<Your_Filename>` files added; the
  sole allowed deletion is your own `.md.excluded` twin after a re-research
  that produced a fresh file with new evidence (Step 3.3). Approved second-pass
  overwrites of your own `<Your_Filename>` (ENRICH-PROPOSAL → explicit user
  approval per slug, Signature date updated) are the only sanctioned overwrites.
- Do NOT run `pnpm sync`, `pnpm build.types`, or `pnpm build`. The orchestrator
  runs those per `tasks/sync-data.md` (it recomputes `average.md`, registers the
  new source in `src/data/models.ts`, and validates `meta.json`/`average.md`).

---

## 3. Strict rules & constraints

1. **Audit all subdirectories in scope** without exception (production: `model/` only; full mode: `model/` + `models_voice/`; incl. empty/new folders).
2. **Highest-Overall-first** per Step 1; discoveries append at end. A "first five" cap is the same queue with limit N=5.
3. **Incremental save (one-by-one)** — write each file before moving on.
4. **Zero influence:** never read peer findings before/during research (only the
   single Overall line of `average.md` for ordering, plus the template). Own existing `<Your_Filename>` may be read only to extract its Signature date for the 7-day age check — never copy its numbers.
5. **No hallucination:** missing raw benchmark = `no verified public score found`, with source on every number.
6. **No silent overwrites:** create `<Your_Filename>` only where missing/newly discovered. Existing files are never overwritten in-pass; enrichment is proposal-only (`ENRICH-PROPOSAL`), second pass only on explicitly user-approved slugs (own file, >7d old, new verified evidence, Signature date updated).
7. **Template compliance:** follow `model-report-TEMPLATE.md` structure strictly.
8. **Forward slashes only** in paths (`tasks/research.md`, `model/<slug>/`).
9. **Self-exclusion (no verified data):** if a folder's model yielded zero
   verified public benchmarks, write `<STEM>.md.excluded` (notes only) —
   never a scored `.md` with placeholder numbers (see template's
   SELF-EXCLUSION; `RULES.md` for permanence).
10. **Twin re-research:** procedure in Step 3.3 — draft first, compare after;
    same verdict → write nothing; new evidence → write fresh, delete the
    twin. Never rename back without new evidence; never open another agent's
    twin at any point. **Enrichment twin:** existing `<Your_Filename>` older than
    7 days (Signature date) with new verified evidence → `ENRICH-PROPOSAL`, never
    in-pass overwrite; approved slugs only, second pass.
11. **Agent-implies-model backfill:** if a reporting agent — any `SourceKey` in
    `src/data/models.ts`, or any signed `Provided by:` identity you meet — has no
    `model/<slug>/` folder, scaffold it on the spot: create the folder plus a
    `meta.json` with verified facts only (schema in `model/README.md`; use the
    agent's vendor ID, documented context window, modalities, and pricing — never
    invent specs), then queue it for research like any other folder. This keeps
    the comparison table, the results-source dropdown, and the per-model
    cross-links connected: a reporting agent must never stay folderless. Do NOT
    scaffold folders for names with zero evidence of a real model behind them.
12. **Never delete research:** `RULES.md` (ultimate) — no agent or
    orchestrator ever deletes, overwrites, or moves another agent's files or
    any `model/<slug>/` folder. The sole deletable file is your own
    `.md.excluded` twin after re-research with new evidence (Step 3.3). The sole
    sanctioned overwrite is your own `<Your_Filename>` in an approved second pass
    (ENRICH-PROPOSAL → explicit per-slug user approval).
