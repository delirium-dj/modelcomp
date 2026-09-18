# Model Data Synchronization & Aggregation Task Instructions

This document provides standardized prompt instructions and step-by-step guidelines for any AI agent to synchronize model benchmark scores, calculate `average.md` files, discover new results sources, and register newly created models into `src/data/models.ts` for selection in "Compare models" (Model A, Model B, Model C).

---

## 📋 Copy-Paste Prompt Template for AI Agents

```text
Can you perform a full data sync task based on "tasks/sync-data.md"?

Specifically:
1. Go through all directories in model/<slug>/ and calculate/update model/<slug>/average.md by taking the arithmetic mean of all source findings files (*.md, excluding average.md).
2. Scan for any new results sources (e.g. Gemini_3.6_Flash.md, GLM_5.3_Flash.md) across model/<slug>/ and register new SourceKeys and entries in the SOURCES array in src/data/models.ts.
3. Check for any untracked model folders under model/ that are not yet in the MODELS array in src/data/models.ts. Register them with raw imports and AiModel metadata so they appear in the "Compare models" dropdowns (Model A, Model B, Model C).
4. Run typecheck (pnpm build.types) to ensure zero errors.

Follow the instructions in "tasks/sync-data.md" strictly without hallucination or manual score fabrication.
```

---

## 🎯 Step-by-Step Execution Protocol for the AI Agent

When an AI agent receives this task, it must execute the following 4 steps sequentially:

---

### Step 1: Calculate and Update `model/<slug>/average.md` for All Folders

Scan every folder under `model/<slug>/`:

1. **Collect Source Files:** Find all source findings files (`*.md` files in `model/<slug>/` excluding `average.md` and `README.md`).
2. **Extract Dimension Scores:** For each source file, read the normalized 1–100 scores:
   - `Tool use: <N>/100`
   - `Reasoning: <N>/100`
   - `Context window: <N>/100`
   - `Multimodal: <N>/100`
   - `Coding: <N>/100`
   - `Cost efficiency: <N>/100`
   - `Overall Score: <N>/100`
3. **Calculate Averages:**
   - For each dimension (Tool use, Reasoning, Context window, Multimodal, Coding, Cost efficiency), compute the arithmetic mean across all available source files.
   - For `Overall Score`, compute the arithmetic mean of the source `Overall Score` values (do NOT re-derive from averaged dimensions).
   - Format floats to at most 1 decimal place (e.g., `66.5` or `74`).
   - **Rounding rule (mandatory):** standard half-up to 1 decimal (e.g. exact `72.25` → `72.3`).
     Do NOT use banker's/even rounding — it produces false 0.1 "drifts" against correctly
     computed files. When comparing recomputed vs committed values, only treat
     differences **> 0.051** as real drift.
4. **Write `model/<slug>/average.md`:** Format strictly according to the parser contract:

```markdown
# <Model Name> — Averaged findings

- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Averaged scores

- **Tool use: <N>/100.** Mean of <X> reporting sources.
- **Reasoning: <N>/100.** Mean of <X> reporting sources.
- **Context window: <N>/100.** Mean of <X> reporting sources.
- **Multimodal: <N>/100.** Mean of <X> reporting sources.
- **Coding: <N>/100.** Mean of <X> reporting sources.
- **Cost efficiency: <N>/100.** Mean of <X> reporting sources.
- **Overall Score: <N>/100.** Mean of source Overall scores.

---

## Agreement notes

- Based on <X> reporting source(s): <List of sources, e.g., Big Pickle, Gemini 3.6 Flash>.
```

> ⚠️ **CRITICAL PARSER RULE:** Score lines MUST strictly match `- **<Label>: <N>/100` with exact labels. Keep the "Agreement notes" section free of `- **X: N/100` patterns to avoid breaking `parseAverageScores()`.

---

### Step 2: Detect & Register New Results Sources in `src/data/models.ts`

1. **Scan Source Filenames:** List all unique source filenames found across all `model/<slug>/` subdirectories (e.g., `Big_Pickle.md`, `Muse_Spark_1.3.md`, `Gemini_3.6_Flash.md`, `GLM_5.3_Flash.md`, etc.).
2. **Check `SourceKey` Type in `src/data/models.ts`:**
   - Ensure every source has a corresponding string key in the `SourceKey` union type.
3. **Check `SOURCES` Array in `src/data/models.ts`:**
   - Ensure every source is listed in the `SOURCES` constant array:
     ```typescript
     { key: "Gemini 3.6 Flash", label: "Gemini 3.6 Flash", file: "Gemini_3.6_Flash.md" }
     ```

---

### Step 2b: Audit Per-Model `sources` Wiring in `src/data/models.ts` (DO NOT SKIP)

Registering a source globally (Step 2) is NOT enough. Every findings file on disk must
also be wired into its own model's `sources` record — otherwise the file exists in
`model/<slug>/` and counts toward `average.md`, but is invisible in the
"Results source" dropdown and hexagon for that model.

1. **For every folder `model/<slug>/`:** list its findings files (`*.md` excluding
   `average.md` / `README.md`).
2. **For every file found:** confirm the corresponding `AiModel` entry in `MODELS` has
   BOTH of the following, and add whichever is missing:
   - a `?raw` import at the top of `src/data/models.ts`
     (e.g. `import ds41Gemini38Flash from "../../model/gemini-3.8-flash/DeepSeek_4.1_Flash.md?raw";`)
   - an entry in that model's `sources` object
     (e.g. `"DeepSeek 4.1 Flash": parseAverageScores(ds41Gemini38Flash, "google/gemini-3.8-flash"),`)
3. **Verify with a script, not by eye:** for each model id, assert that every on-disk
   findings filename maps to a `"SourceKey": parseAverageScores(var, "<id>")` line
   inside that model's own `sources: { ... }` block. Zero gaps allowed.
4. **Typical symptom of skipping this step:** selecting a source in "Results source"
   shows "N/A" (or an empty hexagon) for a model even though
   `model/<slug>/<Source>.md` exists on disk.

---

### Step 3: Register New Models in `MODELS` (`src/data/models.ts`)

To enable any model directory `model/<slug>/` in the "Compare models" UI selectors (Model A, Model B, Model C):

1. **Check `MODELS` Array:** Compare all subdirectories in `model/` against the `id` / `slug` entries in `MODELS`.
2. **For Any Untracked Model Folder `model/<slug>/`:**
   - **Add Raw Imports:**
     ```typescript
     import avgMyModel from "../../model/my-model-slug/average.md?raw";
     import g36MyModel from "../../model/my-model-slug/Gemini_3.6_Flash.md?raw";
     ```
   - **Create `AiModel` Entry in `MODELS`:**
     ```typescript
     {
       id: "provider/my-model-slug",
       name: "My Model Name",
       short: "1-2 sentence description of the model.",
       scores: parseAverageScores(avgMyModel, "provider/my-model-slug"),
       sources: {
         average: parseAverageScores(avgMyModel, "provider/my-model-slug"),
         "Gemini 3.6 Flash": parseAverageScores(g36MyModel, "provider/my-model-slug"),
       },
       meta: {
         contextWindow: "200K",
         modalities: "Text in/out",
         pricingNote: "Free tier available",
       },
     }
     ```
3. **Verify Dropdown Visibility:** Confirm the model entry is present in `MODELS` so components (`CompareSection`, `ModelCards`, `HexRadar`) automatically render it in Model A / Model B / Model C selection lists.

---

### Step 4: Verification & Typechecking

1. **Run Typecheck:**
   - Execute `pnpm build.types` to verify zero TypeScript errors.
2. **Dev Score Check:**
   - Confirm `checkOverallScores()` tolerance passes (each source overall differs from dimension mean by ≤ 0.51).
3. **Build Check (if requested):**
   - Execute `pnpm build` to confirm SSG pages compile cleanly into `dist/`.

---

## ⚠️ Strict Rules & Constraints

1. **No Manual Score Invention:** Always compute averages directly from existing source `*.md` files.
2. **Parser Compliance:** Never change the exact label string in `average.md` (`Tool use`, `Reasoning`, `Context window`, `Multimodal`, `Coding`, `Cost efficiency`, `Overall Score`).
3. **Single Source of Truth:** `MODELS` in `src/data/models.ts` controls all website dropdowns (Model A, Model B, Model C) and radar charts.
4. **Clean Code Edits:** Retain existing comments and structure when modifying `src/data/models.ts`.
5. **Selector order invariant:** Model A/B/C dropdown options are sorted A–Z by display name
   in `CompareSection.tsx` — do not remove that sort, and do not reorder `MODELS` to
   achieve ordering (card sorting and default computation depend on `MODELS` order
   being stable). The "Results source" dropdown keeps its curated `SOURCES` order and
   must never be alphabetized.
6. **Homepage defaults invariant:** `src/routes/index.tsx` computes defaults dynamically
   (`top3ByOverall()` — top 3 by average Overall Score). Never hardcode model ids as
   defaults; sync runs must leave that logic intact so new top scorers surface automatically.

---

## ✅ Definition of Done (binding on every run — all boxes must hold before finishing)

- [ ] Every `model/<slug>/average.md` recomputed from its current source files; committed
      values match recomputation within 0.051 on all 7 labels (script-verified, not eyeballed).
- [ ] Every on-disk findings file (`*.md` excl. `average.md`/`README.md`, in every folder)
      has BOTH a `?raw` import AND an entry in its own model's `sources` record in
      `src/data/models.ts` (script-verified zero gaps) — this is what powers the hexagon
      per source.
- [ ] Every `model/<slug>/` folder has a matching entry in `MODELS` (script-verified) —
      this is what powers the Model A/B/C selectors.
- [ ] Every `SourceKey`/`SOURCES` entry corresponds to at least one on-disk file, and every
      on-disk findings filename has a `SourceKey`/`SOURCES` entry.
- [ ] `pnpm build.types` passes with zero errors AND `pnpm build` (client + server + SSG)
      completes green.
- [ ] `REPORT.md` updated with what changed in this run (or "no changes — all verified in sync").

An agent that finishes without ticking every box has NOT completed this task.
