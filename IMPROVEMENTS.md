# Improvement plan — modelcomp (single open item)

Completed items (#1 catalog split, #2 pre-baked rankings, #3 voice pipeline,
#5 purification) were merged into `REPORT.md` on 2026-09-29; this file keeps
only the open work.

## 4. Robust Schema Validation for `meta.json` Files

* **Concept:** Validate data schema at sync time before rendering.
* **Current Behavior:** `scripts/sync-data.mjs` checks required-key presence,
  non-empty strings, and the no-underscore display-name gate. It does not
  validate data types, array items, or URL formats. Malformed tier
  descriptions or non-array fields can pass sync but cause runtime issues
  in the UI.

## Implementation plan (2026-09-29)

1. **Location:** `scripts/sync-data.mjs` meta loop — after the
   `META_REQUIRED` check and the underscore gate, before the catalog insert.
2. **Checks** (fail loudly with path, same style as existing gates; no new
   dependencies):
   - `pricingTiers`, if present: must be an Array with length > 0 and every
     item a non-empty string.
   - `freeTierNote`, if present: must be a non-empty string.
   - `noFreeId`, if present: must be a boolean.
   - `id`: at least one `/` with no empty segments (hierarchical provider
     ids like `deepinfra/ByteDance/Seed-2.0-pro` are legitimate).
     Implemented 2026-09-29 in the sync meta loop; pre-checked all 108
     metas — zero violations, so no existing file trips the new gates.
3. **Deliberately untouched:** unknown extra keys (forward-compat for future
   stamps), the `name` rule (already gated), sync flow and scoring otherwise.
4. **Verify:** `node --check`, then the next green `pnpm sync` validates all
   ~100 metas; any violation FAILs with path (fail-closed, consistent with
   existing meta gates).
5. **Log** completion to `REPORT.md`.
