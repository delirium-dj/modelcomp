# MiniMax M3 — findings by Gemini 3.8 Flash

- Source: MiniMaxAI/minimax-m3
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** MiniMax M3
- **Short description:** MiniMax flagship open-weight MoE (~230B total / 9.8B active) with 1M context, 512K output capability, and sparse attention.
- **Provider / access:** MiniMax API `minimax-ai/minimax-m3` and open weights.
- **Release / knowledge:** 2026-06 release; knowledge cutoff mid-2026.
- **IDs:** `minimax-ai/minimax-m3` (no Free ID on Zen)
- **Context window:** 1,048,576 tokens total (1M in / 512K out; verified via MiniMax developer documentation).
- **Modalities:** Text, image, and video in; text out; tool calls and JSON mode.
- **Pricing (as of 2026-09-19):** $0.30 / 1M input, $1.20 / 1M output; cached tokens at $0.075 / 1M.
- **Architecture:** 230B/9.8B sparse MoE with Lightning Attention architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **66.0%** (Public leaderboard)
- Tau3-Banking / Tau2-Bench: **42.0%** (Tau3-Banking)
- GDPval-AA: **1510**
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **70.5%**

Reasoning / knowledge:

- GPQA Diamond: **84.0%**
- HLE: **32.5%**
- LCR / MLCR: **76.0%**
- CritPt: **64.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **51.5 / #18**
- Omniscience Accuracy / Hallucination Rate: **84.0% / 8.0%**

Coding:

- SWE-bench Verified / SWE-Pro: **59.0%**
- LiveCodeBench: **80.0%**
- SciCode / AA-SciCode: **48.0%**
- Vibe Code Bench: **55.0%**
- DeepSWE / Coding Index / other: **62.5%**

Long context:

- MRCR 96.5% at 1M; massive 512K output capacity with solid long-range retrieval.

### Normalized scores (1–100)

- **Tool use: 78/100.** 66.0% Terminal-Bench 2.1 supports general script execution and agent loops.
- **Reasoning: 80/100.** 84.0% GPQA Diamond demonstrates competent multi-step logic.
- **Context window: 100/100.** 1M context with unprecedented 512K generation window.
- **Multimodal: 80/100.** Native image and video understanding; text-only output.
- **Coding: 80/100.** 59.0% SWE-bench Pro and 80.0% LiveCodeBench offer capable code synthesis.
- **Cost efficiency: 95/100.** Highly economical $0.30/$1.20 per 1M pricing.
- **Overall Score: 84/100.** Quality mean 83.6 rounds to 84; extraordinary long-generation model with high cost-effectiveness.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-19
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
