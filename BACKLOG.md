# BACKLOG.md — living improvement backlog

> Open items only: fix one, delete its line. Dated history lives in `REPORT.md`;
> full rationale for retired proposals lives in git history
> (`GLM53F_IMP.md` + `IMPROVEMENTS.md`, retired 2026-10-04 — see audit
> `tasks/task_Muse_Spark_1.3_2026-10-04.md` item A6).
> Precedence: `RULES.md` wins on any conflict.

## Performance

- **Lean client meta bundle** (from `IMPROVEMENTS.md` #1): `src/data/models.ts`
  still eager-globs every `model/*/meta.json` into the main bundle. Have
  `pnpm sync` emit a summary-only catalog for selectors/hexagon/cards and load
  full per-model details on demand for `/model/[slug]/` pages.
- **Pre-bake top-3 rankings at sync time** (from `IMPROVEMENTS.md` #2): cheap
  half first — collapse the three "sort, take 3 ids" helpers in
  `src/routes/index.tsx` into one comparator-driven helper (audit item D1);
  the full pre-baked lookup table is the larger follow-up.

## Data pipeline

- **Wire `models_voice/` + `models_finance/` into sync + site** (from
  `IMPROVEMENTS.md` #3, `GLM53F_IMP.md` #10; `RULES.md` + `.agents/rules.md`
  both describe the wiring as "pending"): teach `scripts/sync-data.mjs` the
  mirror trees (tripwire, scores, registry) and add the frontend filter/route.
  8 folders of validated research are currently invisible to sync and site.
- **Schema-validate `meta.json` at sync time** (from `IMPROVEMENTS.md` #4):
  sync checks key presence only (`META_REQUIRED`). Validate types/shapes
  (`pricingTiers` string array, `freeTierNote`, `noFreeId`, `category`) before
  malformed metadata reaches the UI.

## Standing decisions (not TODOs — do not "fix")

- **`vercel.json` stays** (prior standing verdict, re-affirmed): cache headers
  for the deployed SSG site; revisit only if the deployment target changes.
- **Dropped without action:** `GLM53F_IMP.md` #5 (no voice/finance entries
  reach the client — sync scans `model/` only, so there is nothing to filter);
  #6 (`.rerun/` already deleted 2026-09-30); `IMPROVEMENTS.md` #5 (2026-09-27
  purification, verified holding).

---

*One living backlog. Retiree files were deleted from the tree, never from history (`git log -- <file>`).*
