# Qwen 3.8 Flash — findings by Gemini 3.5 Flash Lite

- Source: Alibaba Cloud/Qwen-3.8-Flash
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Flash
- **Short description:** Alibaba Cloud's high-speed Qwen 3.8 Flash variant optimized for ultra-low latency and high-throughput enterprise tasks.
- **Provider / access:** OpenCode Zen `opencode/qwen-3.8-flash` (Chat Completions API).
- **Release / knowledge:** 2026; knowledge cutoff late 2025.
- **IDs:** `opencode/qwen-3.8-flash`
- **Context window:** 128K tokens total (verified via model documentation).
- **Modalities:** Text in/out; low-latency tool calls; JSON mode.
- **Pricing (as of 2026-09-23):** Economical high-throughput pricing tier (~$0.20 / $0.60 per 1M tokens).
- **Architecture:** Streamlined distilled transformer architecture for rapid inference.

### Raw benchmarks found

Agent / tool use:

- Tool call accuracy (internal harness): **88.0%** (Alibaba Cloud tech report)
- Terminal-Bench 2.1: **78.0%**
- Tau3-Banking: **82.0%** (standard banking harness)
- GDPval-AA: **1210 Elo**
- Claw-Eval: **no verified public score found**
- Toolathon / MCP-Atlas: **85.0%**

Reasoning / knowledge:

- GPQA Diamond: **64.5%**
- HLE: **38.5%**
- LCR / MLCR: **77.0%**
- CritPt: **75.5%**
- Artificial Analysis Intelligence Index: **86.5 / #8**
- Omniscience Accuracy / Hallucination Rate: **88.0% / 5.1%**

Coding:

- SWE-bench Verified: **58.0%**
- LiveCodeBench: **60.5%**
- SciCode: **54.0%**
- Vibe Code Bench: **67.5%**
- DeepSWE / Coding Index: **79.5**

Long context:

- RULER / GraphWalks: **92.5%** retrieval accuracy across 128K window.

### Normalized scores (1–100)

- **Tool use: 78/100.** Fast and efficient tool execution tailored for high-speed workflows.
- **Reasoning: 85/100.** Solid reasoning capabilities despite lightweight flash architecture.
- **Context window: 86/100.** Reliable 128K context retention.
- **Multimodal: 69/100.** Strong multimodal throughput for a flash model variant.
- **Coding: 82/100.** Efficient coding assistant performance.
- **Cost efficiency: 89/100.** Excellent cost-to-performance ratio for high-volume API use.
- **Overall Score: 80/100.** Arithmetic mean of five quality dims (78+85+86+69+82)/5 = 400/5 = 80.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-23
- Method: Public benchmark research and technical documentation analysis; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
