# Claude Opus 5.5 — findings by Claude Opus 4.8

- Source: Anthropic (`anthropic/claude-opus-5-5`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** First model of Anthropic's Claude 5.5 family; frontier agentic-coding and knowledge-work model with adaptive thinking at max effort. Top use case: long, sprawling codebase migrations and enterprise agentic work at materially lower cost than Opus 5.
- **Provider / access:** Anthropic Claude Platform `claude-opus-5-5` (Chat Completions + Messages API), also on AWS, Google Cloud, Microsoft Azure. No Zen Free ID — paid only.
- **Release / knowledge:** 2026-09-22; knowledge cutoff not published.
- **IDs:** `anthropic/claude-opus-5-5` (no Free ID).
- **Context window:** 1M total / 128K max output (per curated `meta.json`).
- **Modalities:** text, image in; text out; reasoning (adaptive thinking, thinking cannot be disabled); tool calls yes.
- **Pricing (as of 2026-10-03):** $4 in / $20 out per 1M; cache reads $0.20, cache writes $5 per 1M. Fast mode $8/$40 with up to 2.5x speed. 40% cheaper than Opus 5 on typical workloads.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **66.4%** (Anthropic card; ±2.6 SE)
- Terminal-Bench-Science 0.1: **58.7%**; AutomationBench: **40.0%** (Zapier)
- GDPval-AA v2.1: **1846 Elo** (AA-normalized 67.3%); AA Briefcase **1822 Elo**
- OSWorld 2.1: **81.8%** (partial); AA-AutomationBench **69.5%**; AA-Harvey-LAB **91.2%**
- Toolathlon-Verified **77.8%** (Pass@3 82.4%); AA ITBench **38.2%**; AA-AnalystAgent **56.3%**; AA Terminal-Bench 4.0 **59.6%**; HLE w/ tools **67.7%**

Reasoning / knowledge:

- AA Intelligence Index: **57.6** (AA-HLE 61.4%); HLE w/o tools **64.4%**
- ARC-AGI-1 **97.5%** / ARC-AGI-2 **91.7%** (ARC Prize verified)
- AA-LCR **84.7%**; MLCR-AA **66.7%**; CritPt **31.7%**
- AA-Omniscience Accuracy **66.2%** / Hallucination Rate **58.6%**; GMMLU **94.3%**; ArXivMath Aug 2026 **96.9%** (tools)

Coding:

- SWE-bench Pro **89.9%**; SWE Multilingual **93.9%**; DeepSWE **74.2%**; ProgramBench **91.2%**
- FrontierCode 1.1 Main **54.4%** / Extended **63.6%**; CursorBench 4.0 **57.8%**; AA-SciCode **66.9%**; FrontierSWE v2 **62.3%**

Long context:

- MRCR not published; GraphWalks BFS 256K–1M **66.8%** (Google chart) — retrieval degrades at the top of the window.

### Normalized scores (1–100)

- **Tool use: 94/100.** Best-in-class agentics: GDPval 1846 Elo, AutomationBench 40%, AA-AutomationBench 69.5%, OSWorld 81.8%, Harvey-LAB 91.2%. Capped by modest AA ITBench 38.2%.
- **Reasoning: 91/100.** AA Index 57.6, ARC-AGI-2 91.7%, HLE 64.4% (67.7% tools), GMMLU 94.3%, CritPt 31.7%. Hallucination rate 58.6% is the main drag.
- **Context window: 96/100.** 1M total / 128K output; GraphWalks 66.8% shows 1M retrieval is strong but not lossless.
- **Multimodal: 88/100.** Image in, text out, with best-in-class chart/doc understanding (Chartography 89%, MMMU-Pro 87.7%, OfficeQA 78.9%, BenchCAD 96.2% tools).
- **Coding: 95/100.** SWE-bench Pro 89.9%, Multilingual 93.9%, DeepSWE 74.2%, CursorBench 57.8%, SciCode 66.9% — the new coding leader.
- **Cost efficiency: 41/100.** $4/$20 per 1M (cache $0.20/$5) — mid-premium, but 40% cheaper than Opus 5 and Pareto-efficient per task.
- **Overall Score: 92.8/100.** Half-up mean of the five quality dims (94/91/96/88/95). The default frontier agentic-coding and enterprise knowledge-work pick when paid.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Anthropic launch post + system card, Artificial Analysis, BenchLM, ARC Prize); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
