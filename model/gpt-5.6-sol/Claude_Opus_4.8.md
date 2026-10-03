# GPT-5.6 Sol — findings by Claude Opus 4.8

- Source: OpenAI (`openai/gpt-5.6-sol`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Sol
- **Short description:** OpenAI's reasoning + coding specialist tier in the GPT-5.6 family. Top use case: frontier math/reasoning and agentic coding at a mid-premium price.
- **Provider / access:** OpenAI API `openai/gpt-5.6-sol` (Responses API). No Zen Free ID.
- **Release / knowledge:** GPT-5.6 generation (2026); knowledge cutoff not published.
- **IDs:** `openai/gpt-5.6-sol` (no Free ID).
- **Context window:** 1M total / 128K max output (per curated `meta.json`; BenchLM 1.05M).
- **Modalities:** text, image in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-03):** $1.25 in / $10 out per 1M; no free tier.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **91.9%** (Vals 85.8%); BrowseComp **92.2%**; OSWorld 2.0 **62.6%**
- GDPval-AA: **1735 Elo** (AA-normalized 54.4%); τ²-bench **85.1%**; Toolathlon **58%**; CyberGym **84.5%**
- AA Agentic Index **50.5%**; terminalBenchHard **65.9%**; ApprenticeBench 26%; Terminal-Bench 3.0 **34.6%**

Reasoning / knowledge:

- GPQA Diamond: **94.6%** (Vals 95.2%); AA Intelligence Index **58.9**; AA-HLE **49.5%** (HLE-Verified 54.5%)
- FrontierMath legacy **89%** / v2 Tier 4 **83%** (class-leading math); ARC-AGI-2 **92.5%**; AA-LCR **84.0%**; CritPt **32.3%**; MMLU-Pro **89.1%** (Vals)
- AA-Omniscience Hallucination Rate **92.2%** (very high — hallucination-prone)

Coding:

- SWE-bench **96.2%** (Vals); Terminal-Bench 2.1 **91.9%**; SWE-bench Pro **64.6%**; DeepSWE **72.7%**
- LiveCodeBench **82.6%** (Vals); AA Coding Index **77.4%**; CursorBench 3.2 **67.2%** (4.0 41.7%); VulcanBench v3 **87.0%**; FrontierSWE v2 **32.2%**

Multimodal:

- MMMU-Pro **83%** (84.6% w/ Python); AA-MMMU-Pro **83.4%**

### Normalized scores (1–100)

- **Tool use: 89/100.** BrowseComp 92.2%, TB2.1 91.9%, GDPval 1735, τ²-bench 85.1%, CyberGym 84.5%; TB3.0 34.6% and ApprenticeBench 26% cap the top.
- **Reasoning: 91/100.** AA Index 58.9, FrontierMath 89% (T4 83%), ARC-AGI-2 92.5%, GPQA-D 94.6%; the 92.2% hallucination rate is a real reliability drag.
- **Context window: 96/100.** 1M total / 128K out with AA-LCR 84%.
- **Multimodal: 66/100.** Image-in (MMMU-Pro 83%), text-only out, no audio/video — image-input tier.
- **Coding: 90/100.** SWE-bench 96.2%, Terminal-Bench 2.1 91.9%, Coding Index 77.4%, VulcanBench 87%; FrontierSWE v2 32.2% is the floor.
- **Cost efficiency: 72/100.** $1.25 in / $10 out per 1M, no free tier — cheap input, pricey output.
- **Overall Score: 86.4/100.** Half-up mean of the five quality dims (89/91/96/66/90). A top math/reasoning + coding specialist; image-only multimodal and a high hallucination rate are the limits.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (OpenAI GPT-5.6 launch + system card, Artificial Analysis, BenchLM, Vals AI, ARC Prize); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
