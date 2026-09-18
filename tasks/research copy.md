# Model Research Task Instructions

This document provides standardized prompt instructions and guidelines for running research scans using any AI model (e.g., `Gemini 3.6 Flash`, `GLM 5.3 Flash`, `Claude Sonnet 4.6`, `GPT-5`, etc.) to fill missing benchmark reports across all model folders in `model/`.

---

## 📋 Copy-Paste Prompt Template for AI Agents

> **Usage:** Replace `<Laguna S 2.1>` (e.g., `GLM_5.3_Flash.md`, `Gemini_3.6_Flash.md`) with the designated target filename for your model before sending this prompt to the AI agent.

```text
Can you go over model/<slug>/ and find which folder does not have your inputs (<Agent_Model_Filename>) and perform the search for that model so we can have your (model/<slug>/<Agent_Model_Filename>) results too?

The template that will show you how you should fill any new file is located at "model-report-TEMPLATE.md".

It is of utmost importance to:
1. Audit EVERY directory under model/ without exception—including newly created or completely empty folders (even if they have no existing peer report files or src/data/models.ts imports).
2. DYNAMIC MODEL DISCOVERY: If during your web searches or benchmark fetches (e.g., benchmark articles like Eden AI comparison posts) you discover relevant models not yet tracked in model/ (e.g., GLM-5.2, DeepSeek-V4-Vision-Exp, Claude Opus 4.8, GPT-5.6 Terra, Gemini 3.7 Flash, etc.), automatically create a new filesystem-safe slug folder (model/<slug>/) for each newly discovered model and add your report (model/<slug>/<Agent_Model_Filename>) for them too!
3. Process missing and newly discovered folders ONE AT A TIME sequentially: research the model, draft the report, and write the file (model/<slug>/<Agent_Model_Filename>) immediately before proceeding to the next folder. This ensures incremental progress is saved instantly and avoids repetitive work if interrupted.
4. Forget / clear from your memory any previous results.
5. DO NOT read the content of any existing report files in model/<slug>/ so that your findings are completely unbiased and uninfluenced.
6. Conduct this research entirely from the ground up / from zero using fresh web/public search.
7. Do not delete or modify any existing files; strictly add your designated file (model/<slug>/<Agent_Model_Filename>) where it is currently missing or newly created.
```

---

## 🎯 Task Execution Steps for the AI Model

When an AI agent receives this prompt, it must execute the following workflow:

### Step 1: Directory Audit (Include Empty Folders)

- Scan all subdirectories in `model/` (e.g., `model/big-pickle/`, `model/ox_alpha/`, `model/glm-5.3-free/`, etc.).
- **CRITICAL:** Do NOT skip empty directories or folders lacking existing report files or `src/data/models.ts` references. Every subdirectory under `model/` is a target model folder.
- For each directory `model/<slug>/`, check if your designated model report file (`<Agent_Model_Filename>`) exists.
- List all folders where your report file is missing.

### Step 2: Dynamic Model Discovery during Web Search

- While fetching public benchmarks or reading comparison articles (e.g., benchmark posts like `edenai.co/post/...` found during research):
- **Identify Untracked Models:** If the article or benchmark dataset references AI models not currently present under `model/` (such as `GLM-5.2`, `DeepSeek-V4-Vision-Exp`, `Claude Opus 4.8`, `GPT-5.6 Terra`, `Gemini 3.7 Flash`, etc.):
  1. Derive a filesystem-safe slug (e.g., `deepseek-v4-vision-exp`, `gpt-5-6-terra`, `claude-opus-4.8`).
  2. Automatically create the new folder `model/<slug>/`.
  3. Append `<slug>` to your execution queue for report generation.

### Step 3: Sequential One-Folder-at-a-Time Execution

Iterate through the list of missing and newly discovered folders **one folder at a time**:

1. **Target Identification:** Identify the target model name and publisher from `<slug>` and folder context.
2. **Independent Research (Ground Up):**
   - **CRITICAL:** Do NOT read existing report files (`*.md`) inside `model/<slug>/` (except `model-report-TEMPLATE.md`).
   - Search public benchmarks, official model cards, technical reports, and benchmark aggregators (e.g., Artificial Analysis, LiveCodeBench, SWE-bench) for the target model's specs and scores.
3. **Report Generation & Save:**
   - Format the report strictly according to `model-report-TEMPLATE.md`.
   - Write the completed file immediately to `model/<slug>/<Agent_Model_Filename>`.
4. **Advance:** Proceed to the next folder only after the current file is successfully created.

> **Why One-Folder-at-a-Time:** Processing and saving incrementally ensures that if execution is paused or interrupted mid-task, progress is retained and no previously completed folder needs to be re-researched.

### Step 4: Verification

- Verify relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve correctly from `model/<slug>/`.
- Confirm no existing files were overwritten or deleted.
- Ensure all placeholders (`<...>`) from the template have been replaced.

---

## ⚠️ Strict Rules & Constraints

1. **Audit All Subdirectories:** Include empty directories and newly added model folders without exception.
2. **Auto-Create Discovered Models:** Automatically create new `model/<slug>/` folders when untracked models are found during benchmark search.
3. **Incremental Save (One-by-One):** Complete and write report files one folder at a time before moving to the next.
4. **Zero Influence:** Never read existing peer model reports in `model/<slug>/` before or during research.
5. **No Hallucination:** If a raw benchmark is missing, state `"no verified public score found"`.
6. **No Overwrites:** Only create new `<Agent_Model_Filename>` files where missing or newly discovered. Never edit or delete existing files.
7. **Template Compliance:** Follow `model-report-TEMPLATE.md` structure strictly.
