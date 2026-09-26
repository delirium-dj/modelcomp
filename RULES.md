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
  from disk, and the committed pre-commit hook (`.githooks/pre-commit`,
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
  modalities say so) lives under `voicemodels/<slug>/`, never under
  `model/<slug>/`. This applies to newly discovered models at scaffold time
  and justifies relocating voice models already in `model/` (e.g.
  `gemini-3.8-live`, `gpt-realtime-2`, `grok-voice-think-fast-2.0`). Same
  permanence, same file conventions — only the parent differs. (`voicemodels/`
  sync/site wiring is pending; until then `pnpm sync` scans `model/` only.)

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
