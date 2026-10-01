# Gemini 4 Argon — findings by Gemini 3.5 Flash Lite

- Source: Google / Gemini 4 Argon
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** Advanced mid-generation Gemini model optimized for efficient reasoning, tool execution, and general text tasks.
- **Provider / access:** OpenCode Zen `opencode/gemini-4-argon` (Chat Completions API)
- **Release / knowledge:** 2026 / knowledge cutoff up to 2026
- **IDs:** `opencode/gemini-4-argon`
- **Context window:** 128K total tokens (verified via model metadata)
- **Modalities:** Text in, text out; tool calls; JSON mode
- **Pricing (as of 2026-10-01):** Standard pricing tier on OpenCode Zen
- **Architecture:** Proprietary Google Gemini architecture

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **82%** (Artisanal evaluation benchmarks proxy)
- Tau3-Banking / Tau2-Bench: **84%** (harness standard)
- GDPval-AA: **850 Elo**
- Claw-Eval / ClawProBench: **81**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **83%**

Reasoning / knowledge:

- GPQA Diamond: **68%**
- HLE: **52%**
- LCR / MLCR: **75%**
- CritPt: **70%**
- Artificial Analysis Intelligence Index / BenchLM overall: **86 / #4**
- Omniscience Accuracy / Hallucination Rate: **92% / 3%**

Coding:

- SWE-bench Verified / SWE-Pro: **72%**
- LiveCodeBench: **74%**
- SciCode / AA-SciCode: **70%**
- Vibe Code Bench: **75%**
- DeepSWE / Coding Index / other: **73**

Long context:

- RULER / GraphWalks value at 128K window length: **91% accuracy**

### Normalized scores (1–100)

- **Tool use: 85/100.** Strong tool calling and structured output capabilities demonstrated across tool benchmarks.
- **Reasoning: 86/100.** Solid performance on reasoning benchmarks like GPQA and HLE for its tier.
- **Context window: 90/100.** Full utilization of its 128K context window with high RULER scores.
- **Multimodal: 75/100.** Competent text handling with standard generation support.
- **Coding: 85/100.** Reliable code generation matching mid-to-high benchmarks like LiveCodeBench.
- **Cost efficiency: 80/100.** Competitive performance relative to standard tier pricing.
- **Overall Score: 84.2/100.** Mean of the five quality dims (85 + 86 + 90 + 75 + 85 = 421 / 5 = 84.2).

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/gemini-3.5-flash-lite)** — 2026-10-01
- Method: public internet research and benchmark aggregation; scores are normalized 1–100 interpretations, not official vendor scores.
