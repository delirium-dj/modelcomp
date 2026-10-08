# RULES.md — ultimate project rules (precedence #1)

If any other doc, task file, script message, or commit message conflicts with
this file, **this file wins**. `.agents/rules.md`, `tasks/research.md`, and
`tasks/sync-data.md` hold the detailed procedures — they elaborate, never
override.

## Research rules (absolute — no exceptions without explicit user sign-off)

- `model/<slug>/<STEM>.md` must never be deleted, overwritten, renamed, or
  moved — by any agent, orchestrator, script, or "cleanup" / "align the
  dataset" pass. The only sanctioned rename is `pnpm sync`'s `QUAR` quarantine
  (`.md` → `.md.excluded`, content preserved).
- A file may only live as `<STEM>.md.excluded` when there is not enough
  verified data to compute the `Overall` score (self-exclusion). `pnpm sync`
  enforces this automatically (QUAR); no human or agent "cleans up" beyond it.
- A research agent skips `model/<slug>/<STEM>.md` when that file already
  exists. When it finds its own `model/<slug>/<STEM>.md.excluded` twin, it
  researches deeper; only with genuinely new verified evidence does it write
  the fresh `<STEM>.md` — and only that own twin may then go. Nothing else,
  ever.
- Below-gate and out-of-top-10 reports stay on disk, in git, and on the site;
  the rater gate only filters `average.md` means. Enforcement is automatic:
  `pnpm sync` FAILs on any git-tracked `model/**/*.md(.excluded)` missing
  from disk — except sanctioned survivals (own-twin retirement with a fresh
  sibling present; user-directed relocation with the same path alive under
  `models_voice/` or `models_finance/`, logged as INFO pending commit).
  The committed pre-commit hook (`.githooks/pre-commit`,
  activate with `git config core.hooksPath .githooks`) rejects commits that
  delete them.
- `model/<slug>/` folders are permanent too: never moved out of the tree or
  deleted, even with zero qualifying raters (a `FALLBACK` notice is an accepted
  standing signal — never a failure). Reporting-agent folders are dataset
  infrastructure — the gate reads the agent's own `average.md` from its
  folder, so a below-gate rater becomes eligible once its model is peer-rated
  above the gate.
- **Voice/speech routing (absolute):** a model whose core capability is voice
  or speech (realtime voice API, TTS/STT-first, voice-assistant I/O — name or
  modalities say so) lives under `models_voice/<slug>/`, never under
  `model/<slug>/`. This applies to newly discovered models at scaffold time
   and justifies relocating voice models already in `model/` (e.g.
   `gemini-3.8-live`, `gpt-realtime-2`, `grok-voice-think-fast-2.0`). Same
   permanence, same file conventions — only the parent differs. (`models_voice/`
   sync/site wiring is pending; until then `pnpm sync` scans `model/` only.)
   The retired `voicemodels/` name (pre-2026-09-28) must never be recreated:
   any `voicemodels/` directory on disk is a forbidden duplicate of
   `models_voice/` — merge its contents into the matching `models_voice/<slug>/`
   and remove it; `pnpm sync` FAILs loudly while `voicemodels/` exists.

- **Finance domain routing (absolute):** a model designed specifically for
  finance or financial tasks (e.g. `ling-3.0-flash-fin`, ending in `-fin` or
  finance domain models) lives under `models_finance/<slug>/`, never under
  `model/<slug>/`. This applies to newly discovered models at scaffold time
  and justifies relocating finance models already in `model/` (e.g.
  `ling-3.0-flash-fin`) to `models_finance/<slug>/`. Research agents auditing
  `model/` must skip finance models or route/park them under `models_finance/`.
  Same permanence and file conventions apply (`models_finance/` sync/site
  wiring is pending like `models_voice/`).


- **Tier identity (Muse Spark only):** for Muse Spark 1.3 / 1.2, a pricing,
  subscription, or reasoning-effort tier suffix (`Contributor`, `Free`,
  `Standard`, `Max`, …) is never a separate model. Every Muse Spark 1.3 tier
  name resolves to `model/muse-spark-1.3/`; every Muse Spark 1.2 tier name
  resolves to `model/muse-spark-1.2/` — same weights, same context window,
  same modalities; only price and Meta's training-data use differ (see
  `model/muse-spark-1.3/meta.json`). For other vendors (Qwen, GLM, GPT, …)
  this rule claims nothing: whether a tier-suffixed name is a separate model
  is decided per vendor evidence (weights, specs), never by analogy to Muse.
  Forbidden duplicate folders (`model/muse-spark-1.3-max/`,
  `model/muse-spark-1.3-free/`, `model/muse-spark-1.3-contributor/`, and the
  `muse-spark-1.2-*` equivalents) must not be scaffolded, researched, or
  written to: a research agent that encounters one during audit skips it
  entirely (never queued, never written) and surfaces it for user-directed
   deletion. Removing a forbidden tier-duplicate folder is a sanctioned
   `model/<slug>/` removal, and only with explicit per-instance user sign-off
   (pre-commit bypass `ALLOW_MODEL_DELETE=1`; the    sync tripwire clears on the
   deletion commit itself). These exceptions never extend to real model folders.

- **Vendor-prefix identity (absolute):** a leading vendor name is never part
  of the slug. A folder named `<vendor>-<rest>` (e.g. `google-gemini-2.5-flash-lite`,
  `openai-gpt-5.5`, `anthropic-claude-opus-4.8`) whose `<rest>` already exists
  as a folder (`gemini-2.5-flash-lite`, …) is a forbidden duplicate, never a
  new model: it must not be scaffolded, researched, or written to — always
  strip the vendor prefix and check the unprefixed folder first (both trees
  in full mode), then write into it. A research agent that encounters a
  vendor-prefixed variant during audit skips it entirely (never queued, never
  written) and surfaces it for user-directed deletion. Removing a forbidden
  vendor-duplicate folder (merge contents into the canonical folder, then
  remove it) is a sanctioned `model/<slug>/` removal alongside tier and hyphen
  duplicates, and only with explicit per-instance user sign-off (pre-commit
  bypass `ALLOW_MODEL_DELETE=1`; the sync tripwire clears on the deletion
  commit itself). A vendor-prefixed *API route* (e.g.
  `opencode/google-gemini-2.5-flash-lite`) is still fine to cite as a provider
  ID inside a report — it just never becomes a folder. Enforcement is
  automatic: `pnpm sync` FAILs vendor-prefixed duplicates and writes nothing
  for them (no `meta.json` scaffold, no `average.md`, no registry/score
  input); the pre-commit hook blocks staging them.

- **Slug identity (absolute):** version numbers use `.` not `-` (`gpt-5.5`,
  never `gpt-5-5`; `gemma-4.12b-unified`, never `gemma-4-12b-unified`).
  Normalize every freshly derived slug before creating or comparing anything:
  replace each digit-hyphen-digit join with a dot (`4-12` → `4.12`) — the only
  exceptions are param sizes, never versions (`gemma-4-31b`, `qwen-3.8-27b`,
  `qwen-3.5-9b`); single majors with codename/experimental suffixes
  (`gpt-6-astra`) never match. A hyphen-versioned folder is a forbidden
  duplicate, never a new model: it must not be scaffolded, researched, or
  written to — always check for the existing dotted folder first (both trees
  in full mode) and write into it. A research agent that encounters a hyphen
  variant during audit skips it entirely (never queued, never written) and
  surfaces it for user-directed deletion. Removing a forbidden hyphen-duplicate
  folder (merge contents into the dotted folder, then remove it) is a
  sanctioned `model/<slug>/` removal alongside tier duplicates, and only with
  explicit per-instance user sign-off. Enforcement is automatic: `pnpm sync`
  FAILs hyphen variants and writes nothing for them (no `meta.json` scaffold,
  no `average.md`, no registry/score input); the pre-commit hook blocks
  staging them.

- **Findings-stem identity (absolute):** version numbers inside a
  findings-file STEM use `.` between the digits, never `_` —
  `Laguna_XS_2.1.md`, never `Laguna_XS_2_1.md` (2026-10-08 duplicate: one
  rater filed under both spellings across 33 model folders and both
  registered as separate sources, silently double-counting the rater in
  averages). Normalize every freshly derived STEM before writing a findings
  file: replace each digit-underscore-digit join with a dot (`2_1` → `2.1`) —
  the only exceptions are param sizes, never versions (`Gemma_4_31B_IT`,
  `Qwen_3.8_27B`). An underscore-versioned findings file is a forbidden
  duplicate of its dotted twin, never a second source: merge the newer
  content into the dotted file, then remove the variant (user sign-off;
  pre-commit bypass `ALLOW_MODEL_DELETE=1`). It must never come back:
  `pnpm sync` FAILs while the variant exists on disk and writes nothing for
  it (never quarantined, parsed, averaged, or registered); the pre-commit
  hook blocks staging it; `MERGED_SOURCE_STEMS` in
  `scripts/lib/validate.mjs` is the permanent never-resurrect list
  (`Laguna_XS_2_1` → `Laguna_XS_2.1`, merged 2026-10-08). A merged-stem
  variant deleted from disk is a sanctioned permanence survival while its
  canonical dotted sibling exists.

## Scoring rules

- Source-file `Overall` = half-up mean of the five quality dims (Tool use,
  Reasoning, Context window, Multimodal, Coding). `Cost efficiency` is scored
  but never counted toward any Overall. `pnpm sync` auto-corrects a drifted
  Overall number (logged as `AUTO`); only unparsable score lines fail.
- `model/<slug>/average.md` = mean of source Overalls over the top-10
  qualifying cohort (highest Overall first); only raters whose own model
  averages above 84.9 qualify. Recomputed by `pnpm sync` only — never by hand.
- **Crown rule: every model folder gets an average, gate or not.** When no
  rater clears 84.9, the average is computed from all available reports
  (top-10 cap still applies) and labeled as a below-gate fallback — in the
  sync log and in the file's Agreement notes. The gate filters *which reports
  count whenever a choice exists*; it never removes a model from the site.
- Example 1: a model with `Overall` = 92 counts toward other models' averages
  (while in their top-10 qualifiers). Example 2: a model with `Overall` = 92
  that does NOT count toward some average (below that folder's top-10 cut) is
  still displayed for that model and must never be deleted for any reason.

## Model roster & Overall scores (single point of reference — no self-investigation)

- `model-queue.md` (repo root) is THE single point of reference for "which
  models exist and what is their Overall score": one `<Overall> <slug>` line
  per model, highest first (ties A-Z), regenerated and committed by
  `pnpm sync` (`buildQueueFile` in `scripts/lib/average.mjs`). Any question
  of the form "list the models" / "what did X score overall" is answered by
  reading that ONE file — never by listing `model/`, walking folders, parsing
  every `average.md`, or opening any findings/research `*.md` file.
- **No self-investigation:** a delegated agent never derives its own identity,
  STEM, or score from the repo — the kickoff message supplies the STEM
  (identity resolution: `tasks/research-assign.md`) — and never reads peer
  findings files to learn scores (zero-influence: `tasks/research.md`). The
  queue file is the only permitted roster/score source; in fallback (queue
  missing/stale) read only the single `- **Overall Score:` line of each
  `average.md`.
- Full per-rater dimensions live only in `src/data/scores.generated.ts`
  (numbers only, ~500 KB — grep targeted keys, never read whole); the
  human-facing overview table is `model-comparison.md`.

## Agent git-restore rule (absolute — no exceptions without explicit user sign-off)

- An agent restores a file from git only one file at a time, and only the
  single file it demonstrably needs. Restoring the whole tree or session
  (`git checkout HEAD -- .`, `git restore .`, `git reset --hard`,
  `git checkout <commit> -- .`, or any equivalent) is strictly forbidden
  without explicit user interaction — this is what wiped the working tree on
  2026-10-05.
- Every single-file restore requires prior user permission via a confirmation
  popup: name the exact file, state why it is needed, and proceed only after
  the user confirms. No confirmation → no restore.
