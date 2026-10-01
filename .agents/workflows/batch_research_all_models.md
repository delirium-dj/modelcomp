---
description: Research all models under model directory
---
# Batch Research Workflow

1. **Load model list** – list all subdirectories in `model/`.
2. **Determine queue** – for each subdirectory, check if a report file `<STEM>.md` (STEM per `tasks/research-assign.md` Identity resolution) already exists. Skip those that exist.
3. **Order queue** – read the `- **Overall Score:**` line from each `average.md` (if present) and sort descending. Folders without `average.md` go last, sorted alphabetically.
4. **Process each folder** – for each folder in the ordered queue:
   - Derive the report filename from the resolved STEM (e.g., `Grok_4.6` -> `Grok_4.6.md`).
   - Perform independent web research for the model (benchmarks, pricing, specs).
   - Draft a full report using `model-report-TEMPLATE.md`.
   - Write the report to `model/<slug>/<ReportFile>.md` (or `.md.excluded` if no verified benchmarks).
   - Advance to the next folder.
5. **Completion** – when the queue is empty, the workflow ends. The orchestrator will later run `pnpm sync && pnpm build.types && pnpm build`.

**Note:** This workflow follows `tasks/research.md` rules: one‑folder‑at‑a‑time, no reading of peer reports, no overwriting, and respects Gemini rate limits.
