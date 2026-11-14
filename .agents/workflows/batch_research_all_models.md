---
description: Research all models under model directory
---
# Batch Research Workflow

> **≤8 K-ITPM runtimes (e.g. Qwen 3.8 27B on Groq, 7,000 ITPM): do not use this
> workflow.** Use `tasks/research-assign-tiny.md` — one pinned subject per
> conversation, no full-corpus or queue reads.

> **This is a BATCH, not a single report.** One run writes `<STEM>.md` into
> every queued `model/<slug>/` folder that lacks it. Your own model folder is
> one queue item, never the assignment (`tasks/research-assign.md` § Completion
> test).

1. **Load the queue (1 read)** – read `model-queue.md` (repo root, `<Overall> <slug>` lines, already highest-first). Do NOT list `model/` folder-by-folder.
2. **Determine the missing-set (1 wildcard listing)** – list `model/*/<STEM>.md*` (every folder already holding your file, `.md.excluded` twins included). Queue = queue-file slugs minus those folders, in file order. Slugs absent from the queue file (no `average.md` yet) go last, A-Z. Fallback only (queue missing/stale): the `- **Overall Score:**` line from each `average.md`.
3. **Process each folder in the queue** – for each folder, in order:
   - Derive the report filename from the resolved STEM (e.g., `Grok_4.6` -> `Grok_4.6.md`).
   - Perform independent web research for the model (benchmarks, pricing, specs).
   - Draft a full report using `model-report-TEMPLATE.md` (including mandatory `- Reference URLs:` in the `## Signature` block).
   - Write the report to `model/<slug>/<ReportFile>.md` (or `.md.excluded` if no verified benchmarks).
   - Advance to the next folder — repeat until the queue is empty. One report is one step, never completion.
4. **Completion test** – done only when the missing-set is empty (or an explicit kickoff cap is reached, or every remaining folder is blocked with a recorded access failure). Files written < initial N means the batch is incomplete — keep going. The orchestrator later runs `pnpm sync && pnpm build.types && pnpm build` (Windows: `pnpm sync && pnpm build.types:direct && pnpm build:direct` — bare shims can exceed cmd.exe's line limit).

**Note:** This workflow follows `tasks/research.md` rules: one‑folder‑at‑a‑time, no reading of peer reports, no overwriting, and respects Gemini rate limits.
