# Model Data Synchronization

> Precedence: `../RULES.md` is the ultimate authority — on any conflict it wins.

> **For AI agents:** the sync itself is deterministic code, not hand-editing.
> Run the script, handle what it flags, verify the build. Details below.

## The one command

```text
pnpm sync && pnpm build.types && pnpm build
```

Large-repo tip: `pnpm sync:quiet` (same as `pnpm sync -- --quiet` / `-q`)
runs the identical checks and writes but prints only `FAIL` lines plus the
final summary — no per-folder `SKIP` / `GATE` / `WRITE` / `INFO` noise. The
exit code contract is unchanged (non-zero = read the `FAIL` lines).

`pnpm sync` (`scripts/sync-data.mjs`) does, for every `model/<slug>/` folder:

1. Collects findings files (`*.md`, excluding `average.md`/`README.md`).
   Any filename containing `.excluded` is a self-excluded no-data report —
   skipped loudly (`SKIP` line), never parsed, averaged, or registered.
   Before that, sync auto-quarantines (`QUAR` line, renamed on the spot):
   any findings file with 8+ "no verified public score found" rows and zero
   measured numbers in its Raw-benchmarks section — or a 0 in any quality
   dimension ("no data" filed as 0; floors are 10+) — or flat-identical
   quality dims with zero cited numbers. Varied dims with cited numbers are
   never touched, however low the scores.
   Filenames must match `/^[A-Za-z0-9_.]+\.md$/`; anything else fails loudly.
2. Parses the seven `1–100` scores from each file (fails loudly on any
   missing/invalid score line — never invent numbers). Each file's Overall
   must equal the half-up mean of its five non-cost dims (Cost efficiency
   never counts toward Overall since v4): drift `> 0.51` is auto-corrected
   (only the Overall number is rewritten, logged as an `AUTO` line) and the
   folder proceeds on the corrected value. Dims, benchmarks, and prose are
   never touched.
3. Recomputes `model/<slug>/average.md` as arithmetic means with standard
   half-up rounding to 1 decimal (`72.25` → `72.3`; only differences `> 0.051`
   count as drift). Overall = mean of source Overall scores, NOT re-derived
   from averaged dimensions. Only reports from models with own Overall > 84.9
   count (rater gate: below-gate files are logged as `GATE` lines and ignored;
    the top-10 cap applies within the eligible set). A folder with zero eligible
    raters averages all its reports instead (top-10 cap applies; logged as
    `FALLBACK` and labeled in Agreement notes) — crown rule in `RULES.md`:
    every folder gets an average. Rewrites stale files,
    reports which ones.
4. Registers any new reporting-agent filename in `src/data/models.ts`
   (`SourceKey` + `SOURCES`, appended last). Per-model wiring needs no edits:
   scores are pre-parsed into `src/data/scores.generated.ts` (numbers only,
   so report prose never ships in the client bundle), and `meta.json` files
   are auto-discovered via `import.meta.glob` at build time.
5. Validates every `meta.json` exists, parses, and has all required fields
   (`id`, `name`, `short`, `contextWindow`, `modalities`, `pricingNote`).
   A new model folder without `meta.json` fails loudly — add it (schema in
   `model/README.md`), then re-run.
6. Emits `src/data/scores.generated.ts` (deterministic, sorted keys): every
   parseable findings file plus each folder's recomputed average means, as
   numbers only — but only when this run has zero failures, so invalid data
   is never cemented. After adding or editing any findings file, re-running
   sync refreshes it; the file is committed (it is a build input, not build
   output).

Exit code `0` = in sync. Non-zero = human action required (read the `FAIL` lines).

## Human checklist (after a green sync)

- [ ] New model folders each have `meta.json` + findings + generated `average.md`;
      they appear in the Model A/B/C selectors (sorted A–Z automatically).
- [ ] New reporting-agent files appear in the Results-source dropdown and the
      hexagon shows their scores (no unexpected N/A).
- [ ] `pnpm build` is green and `REPORT.md` notes what changed
      (or "no changes — all verified in sync").
- [ ] No findings files or model folders were deleted, moved, or left
      uncommitted in this pass (`RULES.md` — permanence; sync's tripwire
      FAILs otherwise).

## Invariants (do not break these)

- Score-line format is a parser contract: `- **<Label>: <N>/100` with labels
  exactly `Tool use`, `Reasoning`, `Context window`, `Multimodal`, `Coding`,
  `Cost efficiency`, `Overall Score`. Keep Agreement notes free of
  `- **X: N/100` patterns.
- Model A/B/C dropdowns stay A–Z by display name (`CompareSection.tsx`);
  the Results-source dropdown keeps curated `SOURCES` order (new sources append
  last — never reorder existing entries).
- Homepage defaults stay dynamic (`top3ByOverall()` in `src/routes/index.tsx`);
  never hardcode model ids as defaults.
- Results-source dropdown order is derived, not curated: Average stays first and
  default, the virtual sort views follow in canonical DIMENSIONS order, and
  every reporting agent ranks by its own average Overall — the same number the
  All-models cards show (`sourceRankOverall` in `src/data/models.ts`, stable
  ties; agents with no tracked model fall back to the highest overall they
  award any model). Never hand-sort the dropdown — a newly registered source
  slots itself in automatically on the next build. When registering a source
  whose agent is also a tracked model, add its slug to `AGENT_MODEL_SLUG` so
  it ranks (and cross-links) correctly.
- Components read `MODELS` only — never import findings files directly.
- Scoring permanence: `RULES.md` (Cost excluded from every Overall; the gate
  filters averages only, never a reason to remove a file). Sync's only file
  mutation is the `QUAR` rename (content preserved); correcting a file is
  always edit-then-resync, never removal. Reporting-agent folders are dataset
  infrastructure (rule 11 in `tasks/research.md`) — never deleted or left
  uncommitted.
- `pnpm build` must stay green; `checkOverallScores()` dev tolerance is 0.51.
- Slug versions use `.` not `-` (full convention in `model/README.md`);
  `pnpm sync` fails hyphen variants loudly so they are never cemented.

## Definition of Done

All checklist boxes hold, both builds pass, `REPORT.md` is updated.
An agent that finishes without this has NOT completed the task.
