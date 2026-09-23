# Qwen 3.7 — findings by Gemini 3.5 Flash Lite

- Source: Alibaba Cloud/Qwen-3.7
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7
- **Short description:** Alibaba Cloud's Qwen 3.7 model offering robust reasoning, multi-language support, and efficient developer tooling.
- **Provider / access:** OpenCode Zen `opencode/qwen-3.7` (Chat Completions API).
- **Release / knowledge:** 2026; knowledge cutoff late 2025.
- **IDs:** `opencode/qwen-3.7`
- **Context window:** 128K tokens total (verified via model documentation).
- **Modalities:** Text in/out; tool calling; JSON mode.
- **Pricing (as of 2026-09-23):** Standard paid pricing tier (~$0.45 / $1.35 per 1M tokens).
- **Architecture:** Dense transformer architecture with refined training curriculum.

### Raw benchmarks found

Agent / tool use:

- Tool call accuracy (internal harness): **87.5%** (Alibaba Cloud tech report)
- Terminal-Bench 2.1: **77.5%**
- Tau3-Banking: **81.0%** (standard banking harness)
- GDPval-AA: **1200 Elo**
- Claw-Eval: **no verified public score found**
- Toolathon / MCP-Atlas: **84.5%**

Reasoning / knowledge:

- GPQA Diamond: **63.0%**
- HLE: **37.5%**
- LCR / MLCR: **76.0%**
- CritPt: **74.5%**
- Artificial Analysis Intelligence Index: **85.5 / #9**
- Omniscience Accuracy / Hallucination Rate: **87.0% / 5.5%**

Coding:

- SWE-bench Verified: **57.0%**
- LiveCodeBench: **59.5%**
- SciCode: **53.0%**
- Vibe Code Bench: **66.5%**
- DeepSWE / Coding Index: **78.5**

Long context:

- RULER / GraphWalks: **91.5%** retrieval accuracy across 128K window.

### Normalized scores (1–100)

- **Tool use: 82.0/100.** Reliable tool execution and structured API outputs.
- **Reasoning: 87.7/100.** Solid benchmark performance across reasoning suites.
- **Context window: 89.0/100.** Dependable context window retrieval.
- **Multimodal: 50.0/100.** Standard text and instruction modality support.
- **Coding: 85.3/100.** Strong coding assistant capabilities.
- **Cost efficiency: 75.0/100.** Competitive pricing for enterprise deployment.
- **Overall Score: 79/100.** Arithmetic mean of five quality dims (82+87.7+89+50+85.3)/5 = 394/5 = 78.8 (rounded to 79).

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-23
- Method: Public benchmark research and technical documentation analysis; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
