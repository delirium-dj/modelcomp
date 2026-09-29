# Proposed Improvements & Architecture Roadmap — modelcomp

This document tracks identified architectural, structural, and hygiene improvements for the project.

---

## 1. Split Model Metadata into "Summary Menu" vs. "Deep-Dive"
* **Concept:** Eager glob imports vs. lean bundle
* **Current Behavior:** `src/data/models.ts` uses `import.meta.glob("../../model/*/meta.json", { eager: true })`, which bundles all model notes, descriptions, and pricing tiers into the main JavaScript bundle immediately on homepage load.
* **Proposed Solution:**
  - Have `scripts/sync-data.mjs` compile a lightweight catalog (`catalog.generated.ts`) containing only the summary fields needed for selectors, comparison hexagons, and cards (`id`, `name`, `short`, `overall`, `badges`).
  - Statically or dynamically load full per-model deep-dive details on demand for `/model/[slug]` pages without bloating the initial landing page bundle.

---

## 2. Pre-bake Calculations & Top-3 Rankings at Build Time — DONE (2026-09-29)
* **Concept:** Avoid redundant client-side sorting
* **Executed Solution:**
  - `scripts/sync-data.mjs` now precomputes top-3 rankings lookup table (`src/data/rankings.generated.ts`) during `pnpm sync`.
  - `src/data/models.ts` exports `top3ForSource`, which performs an instant $O(1)$ dictionary lookup (`TOP_MODELS_BY_SOURCE[source]`) instead of sorting arrays dynamically in the browser.
  - `src/routes/index.tsx` refactored to remove redundant client-side sorting functions (`top3ByOverall`, `top3ByDim`).

---

## 3. Formalize the Voice Models Pipeline (`models_voice/` vs. `model/`)
* **Concept:** Update build guards to recognize both model trees
* **Current Behavior:** `models_voice/` was created for speech-first models (e.g., `gemini-3.8-live`, `gpt-realtime-2`), but `scripts/sync-data.mjs` only crawls `model/`. When models were moved between folders, the sync script's Git tripwire raised deletion alarms.
* **Proposed Solution:**
  - Teach `scripts/sync-data.mjs` to recognize `models_voice/` as a first-class directory alongside `model/`.
  - Align automated deletion tripwires and score generation with the voice model routing rule in `RULES.md`.

---

## 4. Robust Schema Validation for `meta.json` Files
* **Concept:** Validate data schema at sync time before rendering
* **Current Behavior:** `scripts/sync-data.mjs` checks only whether required key names exist (`META_REQUIRED`). It does not validate data types, array items, or URL formats. Malformed tier descriptions or non-array fields can pass sync but cause runtime issues in the UI.
* **Proposed Solution:**
  - Add lightweight schema validation (such as a typed validator or Zod/Valibot schema) in `sync-data.mjs`.
  - Validate that metadata fields like `pricingTiers` (array of strings) or `freeTierNote` are structurally valid before they ever reach the website.

---

## 5. Repository Purification & Scratch File Elimination — DONE (2026-09-27)
* **Executed:** Deleted `scan.py`, `temp_sort.py`, `tmp_queue.cjs`, `tmp_queue.json`,
  `tmp_new_queue.json`, `temp_missing.txt`, `queue.log`, `RULES copy.md`, the empty
  `tmp/` dir, and the unreferenced PNG icons (`favicon.png`, `apple-touch-icon.png`,
  `icon-192.png`, `icon-512.png` — router-head/manifest use `favicon.svg` only).
* `tasks/audit_laguna.ps1` had already been removed earlier.
* `.gitignore` already covers future scratch (`tmp_*`, `temp_*`, `*.log`), so no
  ignore refinement was needed; the deleted tracked files simply predate those patterns.
* Still open (judgment calls, not auto-deleted): `scripts/debug-sync.mjs` +
  `scripts/find-fails.mjs` (one-off debug helpers), the self-destructing SW pair
  (`public/sw.js` + cleanup blocks in `root.tsx`/`router-head.tsx`), and the
  gitignored `instructions/` guides.
