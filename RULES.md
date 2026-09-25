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

## Scoring rules

- Source-file `Overall` = half-up mean of the five quality dims (Tool use,
  Reasoning, Context window, Multimodal, Coding). `Cost efficiency` is scored
  but never counted toward any Overall.
- `model/<slug>/average.md` = mean of source Overalls over the top-10
  qualifying cohort (highest Overall first); only raters whose own model
  averages above 84.9 qualify. Recomputed by `pnpm sync` only — never by hand.
- Example 1: a model with `Overall` = 92 counts toward other models' averages
  (while in their top-10 qualifiers). Example 2: a model with `Overall` = 92
  that does NOT count toward some average (below that folder's top-10 cut) is
  still displayed for that model and must never be deleted for any reason.
