# Research task — convert `.md.excluded` twins into scored `.md` (generic)

> Companion to `tasks/research.md` and `tasks/research-assign.md`. Use this when your
> STEM still has `model/<slug>/<STEM>.md.excluded` twins and you want to re-attempt
> conversion into scored `model/<slug>/<STEM>.md` files using fresh web research.
> Generic — no agent name hardcoded. Identity comes from the delegator file
> (`tasks/research-assign.md`) via its Identity resolution chain.

## 0. Resolve identity

Same as `tasks/research.md` §0: resolve `STEM` via `tasks/research-assign.md`
(kickoff `AGENT_SOURCE_STEM` -> pinned STEM line -> validated self-id -> ask).
Derive `Your_Filename = <STEM>.md`, `Your_Display = STEM` with `_` -> space.
Output path is always `model/<subject-slug>/<Your_Filename>` (folder = subject,
filename = YOUR stem). Never write a file named after the subject.

## 1. Discover your twins

List every `.excluded` twin you authored (never another agent's):

- PowerShell: `Get-ChildItem -Path . -Recurse -Filter "<STEM>.md.excluded" | Select-Object FullName`
- POSIX: `find . -path '*/<STEM>.md.excluded' -type f`

Also check `models_voice/<slug>/` and `models_finance/<slug>/` (voice / finance routing
per `RULES.md`). A folder already holding a real `<STEM>.md` is skipped — never
overwritten.

## 2. Per-twin procedure (process ONE at a time)

For each `model/<slug>/<STEM>.md.excluded`:

1. **Identify (read-only):** read the twin, that folder's `meta.json`, and
   `average.md` to identify the model. Never copy the twin's scores or its
   (possibly placeholder) numbers.
2. **Research — minimum bar:** perform AT LEAST 5 independent web searches, of
   which AT LEAST 3 must be *successful* (a page with concrete model specs or
   benchmark numbers for THIS exact model/ID). Prioritize, in order:
   (a) official model card / docs / API reference from the vendor;
   (b) independent benchmarks — Artificial Analysis, BenchLM, Epoch AI, Vals AI,
       SWE-bench, Terminal-Bench, LiveCodeBench, GPQA Diamond, MMLU-Pro, HLE.
   Compare conflicting results across sources; never trust a single page. A sibling
   tier (e.g. `-Max`, `-Plus`, `-Flash`) is NOT evidence for the unsuffixed slug.
3. **Decision gate:**
   - **New verified evidence found** (>=3 successful searches yielding verified
     public benchmark numbers for this exact model/ID):
     * Draft `model/<slug>/<STEM>.md` following `model-report-TEMPLATE.md`.
     * Normalized scores (1-100): Tool use, Reasoning, Context window, Multimodal,
       Coding, Cost efficiency, and **Overall = half-up mean of the five quality dims
       `(Tool + Reasoning + Context + Multimodal + Coding) / 5`**. NEVER include
       Cost efficiency in Overall (scored independently).
     * Every number cites `(source, rank/harness)`. No invented values.
     * Signature: `Provided by: **<Your_Display> (<your vendor/model-id>)** — <UTC date>`.
     * Deletion gate: name the exact twin path + why, get per-file user confirmation,
       THEN delete `model/<slug>/<STEM>.md.excluded`. Never delete without confirmation.
   - **Same verdict (zero verified benchmarks, or <3 successful searches, or the
     model does not exist):** write nothing. Leave the `.excluded` untouched. Do not
     edit it. Record the searches + outcome in your final summary only.
4. **Self-exclusion rule:** if every benchmark row would read "no verified public
   score found", you MUST NOT create a scored `.md`. Keep it `.excluded`. Never
   fabricate placeholder numbers (0, 10, ...).

## 3. Constraints (absolute)

- Do NOT run `pnpm sync`, `pnpm build.types`, or `pnpm build` (orchestrator handles).
- Do NOT edit task files, `RULES.md`, anything under `.agents/`, or the template.
- Do NOT overwrite an existing `<STEM>.md` (skip that folder).
- Do NOT touch another agent's files or any `model/<slug>/` folder beyond your own
  twin retirement.
- Do NOT scaffold new folders without verified facts; normalize version dots
  (`gpt-5.6`, never `gpt-5-6`); strip leading vendor prefixes and check the
  unprefixed folder too. Never queue/research/write any slug or stem listed in
  `model-aliases.generated.md`.
- Every deletion needs a per-file confirmation popup first.

## 4. Reporting

After every 5 models attempted (converted or not), report a summary table:
`slug | searches attempted/successful | verdict (converted | still excluded | no such model) | files written/deleted`.
Continue until the twin queue is empty or the user revokes. A completed prefix is
never "the whole task" — finish the entire missing-set.

## 5. Voice / finance routing

Voice models go under `models_voice/<slug>/`, finance models (e.g.
`ling-3.0-flash-fin`) under `models_finance/<slug>/`. Apply the same procedure
and the same `.excluded` -> `.md` conversion rules there.
