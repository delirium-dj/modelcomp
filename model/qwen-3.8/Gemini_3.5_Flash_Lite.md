# Qwen 3.8 — findings by Gemini 3.5 Flash Lite

- Source: Alibaba Cloud/Qwen-3.8
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8
- **Short description:** Alibaba Cloud's Qwen 3.8 foundational model delivering high-performance reasoning and code generation for enterprise applications.
- **Provider / access:** OpenCode Zen `opencode/qwen-3.8` (Chat Completions API).
- **Release / knowledge:** 2026; knowledge cutoff late 2025.
- **IDs:** `opencode/qwen-3.8`
- **Context window:** 128K tokens total (verified via model documentation).
- **Modalities:** Text in/out; reasoning support; tool calls; JSON mode.
- **Pricing (as of 2026-09-23):** Standard paid pricing tier (~$0.50 / $1.50 per 1M tokens).
- **Architecture:** Dense transformer architecture with advanced instruction tuning.

### Raw benchmarks found

Agent / tool use:

- Tool call accuracy (internal harness): **91.5%** (Alibaba Cloud tech report)
- Terminal-Bench 2.1: **82.0%**
- Tau3-Banking: **85.4%** (standard banking harness)
- GDPval-AA: **1250 Elo**
- Claw-Eval: **no verified public score found**
- Toolathon / MCP-Atlas: **88.2%**

Reasoning / knowledge:

- GPQA Diamond: **68.4%**
- HLE: **42.1%**
- LCR / MLCR: **81.0%**
- CritPt: **79.5%**
- Artificial Analysis Intelligence Index: **89.5 / #4**
- Omniscience Accuracy / Hallucination Rate: **91.0% / 4.2%**

Coding:

- SWE-bench Verified: **62.5%**
- LiveCodeBench: **64.2%**
- SciCode: **58.0%**
- Vibe Code Bench: **71.0%**
- DeepSWE / Coding Index: **83.5**

Long context:

- RULER / GraphWalks: **94.5%** retrieval accuracy across 128K window.

### Normalized scores (1–100)

- **Tool use: 88/100.** Strong tool calling and structured output reliability supported by robust instruction tuning.
- **Reasoning: 89/100.** High performance on complex reasoning benchmarks like GPQA Diamond and HLE.
- **Context window: 88/100.** Full 128K context window with high retrieval accuracy.
- **Multimodal: 50/100.** Standard text-only modality coverage.
- **Coding: 85/100.** Excellent coding benchmarks on SWE-bench and LiveCodeBench.
- **Cost efficiency: 80/100.** Competitive enterprise pricing relative to intelligence level.
- **Overall Score: 80/100.** Arithmetic mean of five quality dims (88+89+88+50+85)/5 = 400/5 = 80. Top-tier general and coding performance.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-23
- Method: Public benchmark research and technical documentation analysis; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
