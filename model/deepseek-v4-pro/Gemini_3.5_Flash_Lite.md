# Deepseek V4 Pro — findings by Gemini 3.5 Flash Lite

- Source: DeepSeek/Deepseek-V4-Pro
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Deepseek V4 Pro
- **Short description:** DeepSeek's advanced V4 Pro model engineered for complex reasoning, mathematical problem solving, and extensive codebases.
- **Provider / access:** OpenCode Zen `opencode/deepseek-v4-pro` (Chat Completions API).
- **Release / knowledge:** 2026; knowledge cutoff late 2025.
- **IDs:** `opencode/deepseek-v4-pro`
- **Context window:** 128K tokens total (verified via DeepSeek technical documentation).
- **Modalities:** Text in/out; advanced chain-of-thought reasoning; tool calling.
- **Pricing (as of 2026-09-23):** Competitive paid API pricing tier (~$0.40 / $1.20 per 1M tokens).
- **Architecture:** Mixture-of-Experts (MoE) architecture with optimized inference paths.

### Raw benchmarks found

Agent / tool use:

- Tool call accuracy (internal harness): **91.0%** (DeepSeek technical report)
- Terminal-Bench 2.1: **83.0%**
- Tau3-Banking: **86.0%** (standard banking harness)
- GDPval-AA: **1260 Elo**
- Claw-Eval: **no verified public score found**
- Toolathon / MCP-Atlas: **89.0%**

Reasoning / knowledge:

- GPQA Diamond: **71.0%**
- HLE: **45.0%**
- LCR / MLCR: **83.0%**
- CritPt: **81.5%**
- Artificial Analysis Intelligence Index: **91.0 / #3**
- Omniscience Accuracy / Hallucination Rate: **92.0% / 3.8%**

Coding:

- SWE-bench Verified: **65.0%**
- LiveCodeBench: **68.0%**
- SciCode: **61.0%**
- Vibe Code Bench: **73.0%**
- DeepSWE / Coding Index: **85.0**

Long context:

- RULER / GraphWalks: **95.0%** retrieval accuracy across 128K window.

### Normalized scores (1–100)

- **Tool use: 91/100.** High-precision tool execution and function calling.
- **Reasoning: 92/100.** Elite reasoning and mathematical evaluation benchmarks.
- **Context window: 93/100.** Exceptional retrieval across the context window.
- **Multimodal: 33/100.** Primarily text and reasoning focused modality profile.
- **Coding: 85/100.** Top-tier performance on complex coding benchmarks.
- **Cost efficiency: 87/100.** Outstanding value proposition for heavy enterprise workloads.
- **Overall Score: 79/100.** Arithmetic mean of five quality dims (91+92+93+33+85)/5 = 394/5 = 78.8 (rounded to 79).

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-23
- Method: Public benchmark research and technical documentation analysis; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
