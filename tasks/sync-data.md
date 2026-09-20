# Model Data Synchronization

> **For AI agents:** the sync itself is deterministic code, not hand-editing.
> Run the script, handle what it flags, verify the build. Details below.

## The one command

```text
pnpm sync && pnpm build.types && pnpm build
```

`pnpm sync` (`scripts/sync-data.mjs`) does, for every `model/<slug>/` folder:

1. Collects findings files (`*.md`, excluding `average.md`/`README.md`).
   Any filename containing `.excluded` is a self-excluded no-data report —
   skipped loudly (`SKIP` line), never parsed, averaged, or registered.
   Before that, sync auto-quarantines (`QUAR` line, renamed on the spot):
   any findings file with 8+ "no verified public score found" rows and zero
   measured numbers in its Raw-benchmarks section. One real number keeps the file.
   Filenames must match `/^[A-Za-z0-9_.]+\.md$/`; anything else fails loudly.
2. Parses the seven `1–100` scores from each file (fails loudly on any
   missing/invalid score line — never invent numbers) and validates each
   file's Overall equals the half-up mean of its five non-cost dims
   (Cost efficiency never counts toward Overall since v4; drift `> 0.51`
   fails and blocks that folder's average rewrite).
3. Recomputes `model/<slug>/average.md` as arithmetic means with standard
   half-up rounding to 1 decimal (`72.25` → `72.3`; only differences `> 0.051`
   count as drift). Overall = mean of source Overall scores, NOT re-derived
   from averaged dimensions. Rewrites stale files, reports which ones.
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
  default; every other source ranks by the highest overall score it awards any
  model (`sourceMaxOverall` in `src/data/models.ts`, stable ties). Never
  hand-sort the dropdown — a newly registered source slots itself in
  automatically on the next build.
- Components read `MODELS` only — never import findings files directly.
- Cost efficiency is an independent stat (scored, shown, sortable) and never
  counts toward any Overall — source Overall = mean of the five quality dims,
  average Overall = mean of source Overalls.
- `pnpm build` must stay green; `checkOverallScores()` dev tolerance is 0.51.

## Definition of Done

All checklist boxes hold, both builds pass, `REPORT.md` is updated.
An agent that finishes without this has NOT completed the task.
