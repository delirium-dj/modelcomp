# Model Research Task Instructions (generic — no agent name hardcoded here)

> Precedence: `../RULES.md` is the ultimate authority — on any conflict it wins.
> The hard rule below restates it; the rest is procedure.
> **Small-context runtimes (sub-200k, kickoff `BRIEF: small-context`):** run on
> `tasks/research-brief.md` instead of this file plus the full must-read corpus
> — same rules, ~5k tokens. This file remains the full procedure.

> **MISSION — batch, not one report.** One delegation covers the whole
> missing-set: one `<YOUR_STEM>.md` in EVERY queued `model/<subject>/` folder
> that does not yet hold it. Your own model folder is one queue item, never
> the assignment. Writing one file advances the queue by one step; a
> single-report run is an incomplete run (strict rule 14). The queue ends only
> when it is empty, an explicit kickoff cap is reached, or remaining folders
> are blocked with a recorded access failure.

> **Re-research delegation?** If the kickoff contains `RERESEARCH:` or
> `MODE: apply`, you are on `tasks/research-assign-reresearch.md`, not this
> file — stop here and follow that delegator.

This file defines the workflow only. Agent identity comes from the assigned
delegator file (`tasks/research-assign.md`) via its Identity resolution chain
(kickoff line -> pinned STEM line -> validated self-identification -> ask).
Do not hardcode any model name in this file.

> **Startup budget: 2 tool calls before your first report.** The kickoff pins your STEM (zero calls), `model-queue.md` gives you roster + scores + order in one read (1 call), and one wildcard listing for `model/*/<STEM>.md*` tells you which folders already hold your file (1 call). That listing also gives the batch size `N` — expect to write `N` files, not one. Anything beyond that before writing — directory walks, per-folder checks, opening `average.md` files, re-sorting — is wasted budget. Full recipe: Step 1.

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
   and ask the orchestrator. Never guess. A pinned kickoff STEM skips all
   remaining checks — accept it as final, do NOT open the registry.
2. Derive:
   - `Your_Filename = <STEM>.md` (exact, case-sensitive; must match `/^[A-Za-z0-9_.]+\.md$/` per `tasks/sync-data.md`).
   - `Your_Display = STEM` with `_` -> space (e.g. `Grok_4.6` -> `Grok 4.6`).
3. **Path contract (STEM/slug conflation guard, 2026-10 incident):** your output
   path is always `model/<subject-folder>/<Your_Filename>` — the FOLDER names
   the model you research (the subject), the FILENAME is always YOUR OWN stem.
   Example: STEM `North_Mini_Code` researching `gpt-5.5` writes
   `model/gpt-5.5/North_Mini_Code.md` — NEVER `model/gpt-5.5/gpt_5_5.md` or
   `model/gpt-5.5/GPT_5.5.md` (a file named after the subject; `pnpm sync`
   FAILs it via the signature-vs-stem tripwire). **Pre-write self-check, every
   file:** the filename you are about to type must equal YOUR stem; if it
   matches the folder's own name and you are not literally that model, stop
   and re-resolve your identity. Voice/speech models
   (`RULES.md` routing rule) go under `models_voice/<slug>/`, finance models
   (e.g. `ling-3.0-flash-fin`) under `models_finance/<slug>/`, cybersecurity
   models (`-cyber` suffix, e.g. `gemini-3.8-flash-cyber`) under
   `models_cybersecurity/<slug>/`, health models (e.g. `ling-3.0-flash-sante`)
   under `models_health/<slug>/`. Never write
   any other filename.
4. Template: `model-report-TEMPLATE.md`. Signature first line: `Provided by: **<Your_Display> (<your vendor/model-id>)** — <YYYY-MM-DD UTC>`. Date = run day in UTC, never a future date. Use your own canonical ID as you know it (your publisher — the subject model's vendor never belongs here); do not invent a publisher. Signature must also include mandatory `- Reference URLs:` listing markdown links to primary official docs, benchmark leaderboards, and evaluation sources.

---

## 1. Copy-paste prompt template for agents

> **Usage:** the orchestrator pastes or points at `tasks/research-assign.md`.
> STEM is resolved by that file's Identity resolution chain — pin it with an
> `AGENT_SOURCE_STEM: <STEM>` line in the kickoff message only when you must
> override self-identification. Do NOT ask the agent to guess its filename.

```text
Your STEM is resolved by tasks/research-assign.md (Identity resolution chain),
or pinned explicitly below: AGENT_SOURCE_STEM = <STEM> (e.g. Grok_4.6).
Your assignment is the WHOLE missing-set — a BATCH, not one report: write your
file in every queued model/<slug>/ folder that lacks it. Your own model folder
is one queue item, never the assignment.
Your file is model/<subject-folder>/<YOUR_STEM>.md, display name is <STEM with _ -> space>.
The FOLDER names the model you research; the FILENAME is always YOUR OWN stem —
you NEVER write a file named after the model being researched
(model/gpt-5.5/GPT_5.5.md is the 2026-10 conflation incident; sync FAILs it).

Follow tasks/research.md exactly (combined single pass: audit → queue → one-by-one):
1. Audit with TWO calls, not a directory walk — production scope, models_voice/ deferred.
   (a) Read `model-queue.md` (repo root: roster + Overall scores + processing order, already highest-first — never re-sort, never verify against `average.md` files).
   (b) ONE wildcard listing for `model/*/<YOUR_STEM>.md*` (every folder already holding your file, `.md.excluded` twins included).
2. Your queue = `model-queue.md` slugs minus folders holding model/<subject>/<YOUR_STEM>.md, in file order (missing average.md = unlisted = last, A-Z; twin-only folders stay queued for the Step 3.3 twin procedure at write time; retired/deleted slugs are covered by `model-aliases.generated.md` and already absent from the queue). If `model-queue.md` is missing or older
   than the latest findings, fall back to the "- **Overall Score:" line of each
   model/<slug>/average.md descending. Newly discovered slugs append at end
   (voice/speech, finance, cybersecurity `-cyber` suffix, and health
   discoveries are parked or placed under models_voice/ / models_finance/ /
   models_cybersecurity/ / models_health/, never placed under model/ per RULES.md). When you reach a folder, check that one folder only — never pre-verify the whole queue.
3. Process ONE folder at a time: research from fresh web search, draft per
   model-report-TEMPLATE.md, write model/<subject>/<YOUR_STEM>.md immediately,
   then advance to the next queued folder — REPEAT until the queue is empty.
   One written report is one queue step, never a finished assignment. If web search fails (402/quota/outage): one simpler retry, then
   webfetch/curl the known official URLs directly (RULES.md § Web-research
   fallback) — never substitute local repo files for public-web evidence.
   Skip existing <YOUR_STEM>.md files; never overwrite/edit/delete in-pass.
   Re-research / Enrichment flow (own file only): when tasked with re-research, (1) re-check existing links from your file's ## Signature (- Reference URLs:) first for score changes (maintenance); (2) search online for additional sources independently without reading peer .md files; only adding new source links counts as a successful new search; (3) emit ENRICH-PROPOSAL (old <date>/<Overall> | maintenance: <status> | new search: <URLs> | delta) and advance. Overwrites happen second-pass on user approval only.
4. Retired/parked/deleted/merged/alias identities are NEVER queued, researched, or
   written — their one roster is `model-aliases.generated.md` (repo root, auto-generated):
   drop any listed slug or stem even when the audit finds the folder on disk missing your file,
   and surface it in your final summary.
5. Completion test: done only when the missing-set is empty — or the kickoff
   cap is reached, or every remaining folder is blocked with a recorded access
   failure. Files written < initial N means the batch is incomplete: keep going.
```

---

## 2. Task execution steps

### Step 1: Directory audit + ordering (2 calls — never a directory walk)

> Production scope (user-directed, 2026-09-30): `model/` only; defer `models_voice/` scan. `RULES.md` domain routing stays absolute — never place voice/speech, finance, cybersecurity, health, or legal findings under `model/`; park domain discoveries for later instead of researching them now. The same absolute carve-out and park-instead-of-research behaviour applies to `models_legal/` (`glm-5.3-flashx-legal`), `models_finance/`, `models_cybersecurity/` (`-cyber` suffix), and `models_health/` trees — none of them is scanned by `pnpm sync` or queued for research under `model/`. Slugs in `MIRROR_ROUTED_SLUGS` (`model-aliases.generated.md`) must NEVER be scaffolded under `model/`. Full mode (when re-enabled) covers `model/` and the mirror trees.

With 160+ folders on disk, auditing folder-by-folder costs more requests than most runtimes allow per minute. Do this instead — exactly two calls, then start writing:

1. Read `model-queue.md` (repo root, one read) — roster, Overall scores, and processing order in one file. File order IS the order: never re-sort, never verify it against `average.md` files.
2. ONE wildcard listing for `model/*/<Your_Filename>*` (glob, or shell: `Get-ChildItem -Path "model/*/<Your_Filename>*"` on Windows PowerShell) — every folder already holding your file, `.md.excluded` twins included. No per-folder listings, no per-folder existence checks up front.
3. Missing-set = queue-file slugs minus folders holding `<Your_Filename>`, in file order. Slugs absent from the queue file (no `average.md` yet) go last, A-Z. Twin-only folders stay queued (Step 3.3 twin procedure runs at write time). Retired/parked/deleted/merged/alias identities (`model-aliases.generated.md`, repo root) are dropped entirely.
4. Fallback only (queue file missing/stale): parse ONLY the `- **Overall Score: <N>/100` line from each `model/<slug>/average.md`, sort descending.

After that, check existence only for the folder you are currently writing (one cheap check at write time) — never pre-verify the whole queue.
- Retired/parked/deleted/merged/alias identities are dropped from the missing-set entirely — never queued, researched, written into, or scaffolded, even when the audit finds the folder on disk missing your file (one roster: `model-aliases.generated.md`; the queue file already omits parked slugs, this rule covers the audit path).
- Allowed carve-out: reading `model-queue.md` (or, in fallback, that single Overall line) for ordering is fine
  (see rate-limit Rule 2) — it is also the single point of reference for the
  roster and overall scores ("which models exist / what did X score" → that
  one file, never a folder walk or findings read). Do NOT read any other line of `average.md` and do
  NOT read any peer `*.md` findings file before/during research.

### Step 2: Dynamic model discovery during web search

- While fetching benchmarks (official cards, Artificial Analysis, LiveCodeBench,
  SWE-bench, Eden AI comparison posts, etc.), if you find a relevant model with
  no folder under `model/` (full mode: under `model/` or `models_voice/`):
  1. Derive a filesystem-safe slug per `model/README.md`, then NORMALIZE it
     per `RULES.md` slug identity (absolute; canonical logic is
     `normalizeSlug()` in `scripts/lib/naming.mjs`) before creating anything:
      a. Dots for versions: `gpt-5.6-terra`, never `gpt-5-6-terra`;
         `gemma-4.12b-unified`, never `gemma-4-12b-unified`. Self-check: if
         the slug has a digit on BOTH sides of a hyphen and the digits after
         the hyphen are NOT immediately followed by `b`/`B` (a parameter
         size, never a version: `gemma-4-31b`, `qwen-3.5-0.8b`,
         `qwen-3.5-122b-a10b` stay hyphenated), replace every other such
         join with a dot — the example lists in prose are illustrative, never
         complete: run the general rule.
      b. Check for an existing dotted folder first (both trees in full mode)
         — a hyphen-versioned folder is a duplicate, not a new model.
         `pnpm sync` FAILs hyphen variants loudly and the pre-commit hook
         blocks staging them, so an unnormalized slug wastes the whole pass.
      c. **Forbidden-identity lookup (one read):** check
         `model-aliases.generated.md` (repo root, auto-generated) — every
         parked slug, deleted phantom folder, merged/renamed duplicate slug,
         retired vendor alias, merged duplicate findings stem, and alias-family record lives in
         that ONE roster with its canonical target. Anything listed there is
         never scaffolded, queued, or written: write into the canonical
         folder the entry names instead. The general rules behind the roster:
         a tier suffix (pricing/subscription/effort tier, serving profile)
         is never a model without distinct weights (general rule:
         `RULES.md` tier identity; e.g. Muse Spark tiers, Kimi Highspeed,
         Nemotron `Free` access tiers); a leading vendor prefix is never
         part of the slug (`RULES.md` vendor-prefix identity; a
         vendor-prefixed *API route* is fine to cite inside a report, it
         never becomes a folder); a bare family/base name with no distinct
         vendor ID is never a new folder (`RULES.md` family-shorthand
         identity); a `Coding` label reflecting positioning or a
         subscription plan is not a model (`RULES.md` coding-suffix
         identity); a revealed stealth name resolves to the revealed model
         (`RULES.md` serving-profile / revealed-stealth identity).
      d. **Display-name check (GPT):** when the discovered model is an OpenAI
         GPT model, its `meta.json` `name` and your report's Model-card
         `Name:` use the hyphenated vendor style (`GPT-5.6 Terra`,
         `GPT-OSS 120B` — never `GPT 5.6 Terra`). The filename stem still
         uses underscores (`GPT_5.6_Terra.md`) and the folder slug keeps
         version dots (`gpt-5.6-terra`) — only the human-facing display name
         hyphenates. (`pnpm sync` FAILs the space form, so a wrong name
         wastes the whole pass like a hyphen-versioned slug.)
  2. Voice check (`RULES.md`, absolute): if the model qualifies as voice /
     speech (realtime voice API, TTS/STT-first, voice-assistant I/O), do NOT
     place it under `model/`. Production scope: park it (note it in your final
     summary, do not create or research it now). Full mode only: the parent is
     `models_voice/<slug>/` — check both trees for an existing folder first.
     Never create `voicemodels/` (retired pre-2026-09-28 name, forbidden
     duplicate of `models_voice/`); if you find one on disk, report it and
     leave it for the orchestrator's merge pass (checklist: `model/README.md` § Merging a duplicate or alias folder).
  2b. Domain-specialist check (`RULES.md`, absolute): if the slug ends in the
     `-cyber` suffix (cybersecurity specialist), it belongs under
     `models_cybersecurity/<slug>/`; a health / life-sciences SKU (e.g.
     ending `-sante`) belongs under `models_health/<slug>/`; a finance SKU
     (e.g. ending `-fin`) under `models_finance/<slug>/`. Never place any of
     these under `model/`. Production scope: park the discovery (note it in
     your final summary, do not create or research it now); check the mirror
     tree for an existing folder first.
  3. Create `model/<slug>/` (full mode: `<parent>/<slug>/`; empty folder only — do NOT create `meta.json` or `average.md`; the orchestrator generates those via `tasks/sync-data.md`).
  4. Append `model/<slug>` (full mode: `<parent>/<slug>`) to the END of your queue (after all ranked folders), in discovery order.

### Step 3: Sequential one-folder-at-a-time execution (repeat until the queue is empty)

For each queued slug, in order:

1. **Target identification:** model name + publisher from `<slug>` and web search.
2. **Independent research (ground up):**
   - Do NOT read peer report files (`model/<slug>/*.md` except `model-report-TEMPLATE.md`).
   - Fresh public web research only — web search, or direct `webfetch` / shell
     `curl` of official URLs when search fails (`RULES.md` § Web-research
     fallback). Local repo files are NEVER a substitute for public-web
     evidence. Forget/clear memory of previous results per folder.
3. **Report generation & save:**
    - Format strictly per `model-report-TEMPLATE.md`; replace every `<...>` placeholder.
    - Strip all template notice blocks (`> TEMPLATE...`) and submission checklist blocks before saving.
    - Score contract & syntax: include all 7 score lines (`Tool use`, `Reasoning`, `Context window`, `Multimodal`, `Coding`, `Cost efficiency`, `Overall Score`). Score lines MUST strictly match `- **<Label>: <N>/100.**` (no colons inside bold tags, no spaces around `/`). `Overall Score` = half-up mean of the 5 non-cost quality dims (`RULES.md`).
    - Signature contract: include `Provided by: **<Your_Display> (<your vendor/model-id>)** — <YYYY-MM-DD UTC>`, `Method:`, and mandatory `- Reference URLs:` listing markdown links to primary sources.
    - **Pre-write self-check (STEM/slug conflation guard, every file):** the
      filename you are about to type must equal YOUR resolved stem; the folder
      is the subject. If the filename matches the folder's own name and you
      are not literally that model, STOP and re-resolve your identity
      (`model/<subject>/<YOUR_STEM>.md`, never `model/<slug>/<slug>.md`).
    - Write immediately to `model/<slug>/<Your_Filename>` before advancing.
    - Twin check (only if YOUR OWN `model/<slug>/<Your_Stem>.md.excluded` exists —
      never another agent's file): do NOT open it before or during research; draft
      your report fully first (zero influence preserved). Only then open the twin
      and compare evidence + scores: same verdict (same numbers within tolerance,
      or same no-data conclusion) → leave the twin untouched, write nothing;
      genuinely new verified evidence (real benchmarks the twin lacked, or its
      scores were placeholders) → write the fresh `<Your_Filename>`, then delete
      the twin. Never rename a twin back without new evidence backing the change.
    - Re-research & Enrichment of an existing `<Your_Filename>` (approval-gated, own file only):
      never overwrite during the pass. When requested to re-research an existing model file, or when evaluating an own file older than 7 days for enrichment, follow the strict two-phase protocol:
      1. **Maintenance (re-check existing source links first):** Open your OWN file (`model/<slug>/<Your_Filename>`), extract the links listed under `- Reference URLs:` in the `## Signature` section, and re-fetch/inspect those links first for possible changes in scoring, updated benchmark figures, or revisions on existing sources. Re-checking information from links you already provided counts as **"maintenance"** (maintaining verified integrity).
      2. **Independent online expansion (find more sources online):** Next, search online for *more* sources on your own — strictly without looking into other agents' `.md` files (`model/<slug>/*.md`) in the folder or repo (zero influence preserved) — to expand the knowledge data in your own file. Only discovering and adding **new sources of information (new external links)** not previously present in your Reference URLs list counts as a **"successful new search"**.
      3. **Knowledge expansion & Signature contract:** Incorporate maintenance updates and newly found benchmarks into the file's model card, raw benchmarks, and normalized scores. In `## Signature`: update the Signature date (`Provided by: ... — YYYY-MM-DD UTC`), update `Method:` (describing maintenance of existing links + independent search for new sources), retain valid existing URLs, and append newly discovered external URLs under `- Reference URLs:`.
      4. **Proposal format & Overwrite gating:** Do NOT overwrite in an unapproved pass. Emit an `ENRICH-PROPOSAL` line:
         `ENRICH-PROPOSAL: <slug> | old <date>/<Overall> | maintenance: <existing URLs checked & status> | new search: <new URLs & benchmarks> | expected delta`
         in your final summary and advance. Overwrite happens only in a second pass over explicitly user-approved slugs, updating the Signature date and Reference URLs. For a standalone re-research/enrichment batch, delegate `tasks/research-assign-reresearch.md`.
4. **Advance** only after the file is written — or after an explicit leave-it-excluded
   decision — or after logging an `ENRICH-PROPOSAL` (incremental save = interrupt-safe).
5. **Combined single pass:** audit → queue → one-by-one in one delegation. A "first five"
   request is the same queue with limit N=5, not a different mode. The pass ends
   only when the queue is empty, the explicit cap is reached, or remaining
   folders are blocked with a recorded access failure — never after one report.

### Step 4: Verification (no builds)

- Batch completion: the run is done only when the Step 1 queue is empty, an
  explicit kickoff cap is reached, or every remaining folder is blocked with a
  recorded access failure. Re-run the wildcard listing and compare; one written
  file with initial `N > 1` is an incomplete run.
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

1. **Audit the whole in-scope tree** (production: `model/` only; full mode: `model/` + `models_voice/`; incl. empty/new folders) using the Step 1 two-call method — `model-queue.md` plus ONE wildcard listing. Never a folder-by-folder walk, never a prefix of the tree.
2. **Highest-Overall-first** per Step 1; discoveries append at end. A "first five" cap is the same queue with limit N=5.
3. **Incremental save (one-by-one)** — write each file before moving on.
4. **Zero influence:** never read peer findings before/during research (only `model-queue.md` — or, in fallback, the single Overall line of `average.md` — for ordering, plus the template). Own existing `<Your_Filename>` may be read only to extract its Signature date for the 7-day age check and its existing Reference URLs under `## Signature` for the Step 1 re-research maintenance check — never copy peer numbers, and NEVER open peer agents' files.
5. **No hallucination:** missing raw benchmark = `no verified public score found`, with source on every number.
6. **No silent overwrites:** create `<Your_Filename>` only where missing/newly discovered. Existing files are never overwritten in-pass; re-research and enrichment follow the two-phase protocol (Maintenance of existing `## Signature` links first, then independent online expansion; only adding new links counts as "successful new search"). Enrichment is proposal-only (`ENRICH-PROPOSAL`), second pass only on explicitly user-approved slugs (own file, new verified evidence or maintenance changes, Signature date and Reference URLs updated).
7. **Template compliance:** follow `model-report-TEMPLATE.md` structure strictly.
8. **Forward slashes only** in paths (`tasks/research.md`, `model/<slug>/`).
9. **Self-exclusion (no verified data):** if a folder's model yielded zero
   verified public benchmarks, write `<STEM>.md.excluded` (notes only) —
   never a scored `.md` with placeholder numbers (see template's
   SELF-EXCLUSION; `RULES.md` for permanence).
10. **Twin re-research:** procedure in Step 3.3 — draft first, compare after;
    same verdict → write nothing; new evidence → write fresh, delete the
    twin. Never rename back without new evidence; never open another agent's
    twin at any point. **Re-research & Enrichment protocol:** existing `<Your_Filename>`
    older than 7 days (Signature date) or explicitly queued for re-research: (1) re-check
    existing `## Signature` `- Reference URLs:` first for score changes (counts as
    **maintenance**); (2) search online for additional sources independently without
    reading peer `.md` files (only adding new source links counts as **successful new
    search**); (3) expand knowledge data in own file; emit `ENRICH-PROPOSAL`, never in-pass
    overwrite; approved slugs only, second pass.
11. **Agent-implies-model backfill:** if a reporting agent — any `SourceKey` in
    `src/data/models.ts`, or any signed `Provided by:` identity you meet — has no
    `model/<slug>/` folder, scaffold it on the spot: normalize the slug per
    Step 2.1 first (dots for versions — never create a hyphen-versioned
    folder), then create the folder plus a
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
    (ENRICH-PROPOSAL → explicit per-slug user approval). **Every deletion
    needs a per-file confirmation popup first** (`RULES.md` file-deletion
    approval rule — name the exact path, state why, proceed only after the
    user confirms; no confirmation → no delete).
13. **Task and rule files are read-only:** never edit, pin, or otherwise
    modify `tasks/research-assign.md`, `tasks/research.md`,
    `tasks/sync-data.md`, `RULES.md`, anything under `.agents/`, or
    `model-report-TEMPLATE.md`. A STEM override belongs in the delegation
    kickoff message (`AGENT_SOURCE_STEM: <value>`), never in the delegator
    file. The only files a research run may create or touch are its own
    `model/<slug>/<STEM>.md` (or `.md.excluded`) findings, its own
    `.md.excluded` twin retirement (Step 3.3), and approved second-pass
    overwrites of its own file.
14. **Finish the whole queue:** the queue is the entire missing-set — no
    partial assignment exists unless the kickoff message states an explicit
    cap (`first five`, `N=5`, …). Writing `<YOUR_STEM>.md` into your own model
    folder (or any single folder) completes ONE queue item, never the batch:
    one file is a prefix of one. The task ends only when the missing-set is
    empty, the explicit cap is reached, or the user revokes it; a completed
    prefix (16 of 129, …) is never "the assigned queue". If asked why you
    stopped with work remaining, resume — never argue that a prefix was the
    whole task.
15. **Search outage ≠ local shortcut:** if web search returns `402`/quota/
    outage, follow the fallback ladder in `RULES.md` § *Web-research fallback*
    — one retry with a simpler query, then direct `webfetch`, then shell
    `curl`/`Invoke-WebRequest` of official/leaderboard URLs — and cite only
    URLs actually fetched. Never source scores, prices, benchmarks, or claims
    from local files (peer findings, `model-comparison.md`, generated data,
    `meta.json`/`average.md`). No retrievable verified evidence for a folder →
    `no verified public score found` or `.md.excluded` with the access failure
    noted; a global outage → `WEB-ACCESS-BLOCKED` summary, never invented
    output.
