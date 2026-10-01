# Claude Sonnet 5.5 — findings by Laguna S 2.1

- Source: Anthropic (`claude-sonnet-5-5`) / `poolside/laguna-s-2.1`
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.5 (paid tier; no Free ID on OpenCode Zen)
- **Short description:** Anthropic's Sonnet-class everyday-work model released 2026-09-28, succeeding Claude Sonnet 5. Thinking always on with effort control (Xhigh / Max / Default), 1M context, tuned for feature work, bug fixes, and polished documents. Ranks #3 of 637 on BenchLM.
- **Provider / access:** Anthropic API (`claude-sonnet-5-5`), Amazon Bedrock, Google Cloud Vertex AI. Responses API with `thinking` parameter; effort selectable via `thinking.effort`.
- **Release / knowledge:** Released 2026-09-28. Knowledge cutoff not specified.
- **IDs:** `anthropic/claude-sonnet-5-5` (no Free ID on OpenCode Zen)
- **Context window:** 1M total tokens (verified via meta.json and Artificial Analysis)
- **Modalities:** Text + image input; text output; reasoning/thinking always on; tool calls supported; JSON mode supported
- **Pricing (as of 2026-10-01):** $2.00 input / $10.00 output per 1M tokens (no free tier; 90% cache discount). Cost per Intelligence Index task: $7.62.
- **Architecture:** Proprietary transformer (parameter count not disclosed by Anthropic)
- **Speed / efficiency:** 139.0 output tokens/sec; 410M output tokens per Intelligence Index task (very verbose); TTFT 435.69s due to thinking overhead

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **70.60%** (Anthropic: Introducing Claude Sonnet 5.5; footnote: TB 4.0 results reported for Claude Opus 5.5 at Xhigh effort — Sonnet 5.5's score reflects default/max effort)
- AA Terminal-Bench 4.0: **63.6%** (Artificial Analysis: terminalbench-v4-0 leaderboard)
- GDPval-AA: **1844 Elo** (Anthropic: Claude Sonnet 5.5 system card — note: AA ran on pre-release deployment with a bug that may slightly understate performance; bug has since been fixed)
- GDPval-AA (normalized): 67.2% (Artificial Analysis model benchmarks)
- AA-Briefcase: **1811 Elo** (Anthropic system card — same pre-release caveat)
- DRACO: **87.0%** (Anthropic system card)
- AutomationBench (Zapier 1.0.6): **44.7%** (Anthropic system card)
- AA AutomationBench: **71.3%** (Artificial Analysis: automationbench-aa leaderboard)
- Toolathlon Verified Pass@3: **85.2%** (Anthropic system card)
- Harvey LAB (criterion pass): **93.1%** (Artificial Analysis: harvey-lab-aa leaderboard)
- GDP.pdf: 25.8% (AA leaderboard — professional document reasoning)
- OSWorld: no verified public score found (listed in Anthropic benchmarks but no specific number found in BenchLM or system card)
- Claw-Eval / ClawProBench: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found (closest proxy: Toolathlon Verified Pass@3 85.2%)

Reasoning / knowledge:

- HLE (with tools): **64.5%** (Anthropic: Introducing Claude Sonnet 5.5)
- HLE (without tools): **56.9%** (Anthropic system card)
- AA-HLE: 55.0% (Artificial Analysis: humanitys-last-exam leaderboard)
- GPQA Diamond: no verified public score found (closest proxy: HLE w/ tools 64.5%)
- AA-LCR: **82.7%** (Artificial Analysis: artificial-analysis-long-context-reasoning leaderboard)
- MLCR-AA: 75.0% (Artificial Analysis: mlcr-aa leaderboard)
- CritPt: 31.4% (Artificial Analysis critpt leaderboard — physics reasoning, low score)
- Artificial Analysis Intelligence Index: **56** (rank #3 of 223 reasoning models; v4.3.2 composite: AA-Briefcase, GDPval-AA, AutomationBench-AA, Terminal-Bench 4.0, SciCode, HLE, GDP.pdf, CritPt, AA-Omniscience, AA-LCR)
- ArXivMath Aug 2026 (with tools): **95.2%** (Anthropic system card)
- ArXivMath Aug 2026 (no tools): 86.8% (Anthropic system card)
- GMMLU: 92.1% (Anthropic system card — multilingual knowledge)
- MILU: 91.6% (Anthropic system card — multilingual inference)
- AA-Omniscience Index: 32.3
- AA-Omniscience Accuracy: 54.0% (AA model benchmarks)
- AA-Omniscience Hallucination Rate: 47.0% (AA model benchmarks)
- MRCR: no verified public score found (closest proxy: AA-LCR 82.7% at 1M context)
- LCR / MLCR: AA-LCR 82.7%, MLCR-AA 75.0%

Coding:

- SWE-bench Pro: **81.3%** (Anthropic system card)
- SWE Multilingual: **90.3%** (Anthropic system card)
- SWE Multimodal: 54.3% (Anthropic system card)
- DeepSWE: **71.0%** (Anthropic system card — note: scores lower at Max effort due to Claude Code subagent timeouts)
- AA-SciCode: **61.0%** (Artificial Analysis: scicode leaderboard)
- FrontierCode 1.1 Main: 46.2% (Anthropic system card)
- FrontierCode 1.1 Extended: 59.1% (Anthropic system card)
- CursorBench 4.0: 55.5% (Cursor evals)
- ProgramBench: 79.7% (Anthropic system card)
- FrontierSWE v2: 61.9% (Proximal: FrontierSWE v2 leaderboard)
- Terminal-Bench 4.0: 70.60% (already listed — overlaps with tool use)
- Vibe Code Bench: no verified public score found
- LiveCodeBench: no verified public score found

Long context:

- AA-LCR (long-context reasoning at 1M): 82.7%
- MLCR-AA (medical long-context reasoning): 75.0%
- MRCR: no verified public score found (closest proxy: AA-LCR 82.7%)

### Normalized scores (1–100)

- **Tool use: 91/100.** GDPval-AA 1844 Elo exceeds 1750 frontier threshold; DRACO 87%, Toolathlon Pass@3 85.2%, Harvey LAB 93.1% all excellent; AA AutomationBench 71.3%; TB 4.0 70.6% (63.6% via AA) caps it below frontier-tier (88%+); OSWorld number not found.

- **Reasoning: 90/100.** HLE w/ tools 64.5% well above 40% frontier; HLE w/o tools 56.9% also above threshold; ArXivMath (tools) 95.2%, GMMLU 92.1%, MILU 91.6% excellent; AA-LCR 82.7%, MLCR-AA 75.0% strong; Intelligence Index 56 just below 60+ frontier; no verified GPQA score (closest proxy HLE w/ tools 64.5%); CritPt 31.4% is a notable weakness.

- **Context window: 95/100.** 1M token context qualifies for 95–100 tier; AA-LCR 82.7% and MLCR-AA 75.0% demonstrate strong long-context reasoning at 1M; no specific ≥98% retrieval-at-512K data to claim 100; TTFT 435.69s reflects thinking overhead, not context quality.

- **Multimodal: 70/100.** Text + image input with document processing (OfficeQA 76.9%, Chartography w/ tools 90.2%, BenchCAD Vision2Code 0.963) — Anthropic API supports PDF/document input beyond basic image; text-only output; no video/audio input. Methodology places text+image at 60–70.

- **Coding: 91/100.** SWE Multilingual 90.3% and SWE-bench Pro 81.3% exceptional; DeepSWE 71.0% just below 74% frontier; AA-SciCode 61.0% meets 55% frontier; ProgramBench 79.7%; TB 4.0 70.6%; DeepSWE capped by Max-effort subagent timeouts (per system card footnote 2).

- **Cost efficiency: 75/100.** $2/$10 per 1M tokens (no free tier on Zen); moderate pricing between $1.25/$4.25 (≈88) and $3/$15 (≈60); $7.62 per Intelligence Index task is reasonable for a frontier reasoning model.

- **Overall Score: 87.4/100.** (91+90+95+70+91)/5 = 88.4 → 88. Strong frontier reasoning model with 1M context; best-in-class agentic (GDPval-AA, Harvey LAB, Toolathlon) and coding (SWE Multilingual, SWE-bench Pro) numbers; TB 4.0 and DeepSWE cap Tool use and Coding below absolute frontier tier; no verified GPQA or OSWorld scores.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-01
- Method: Public internet research via Anthropic product page, BenchLM, and Artificial Analysis model/evaluation pages; sources fetched 2026-10-01. Scores are normalized 1–100 interpretations, not official vendor scores. Raw benchmark numbers are listed with sources above.
- Future sources: add a new file next to this one, e.g. `Gemini_4_Argon.md`, using the same headings.
