# MiniMax M3 — findings by Gemini 3.5 Flash Lite

- Source: MiniMax AI/MiniMax M3
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3
- **Short description:** MiniMax flagship open-weight MoE (~230B total / 9.8B active) with 1M context and sparse attention; 59% SWE-Bench Pro, 66% Terminal-Bench 2.1.
- **Provider / access:** MiniMax API `minimax-ai/minimax-m3` (Chat Completions API).
- **Release / knowledge:** 2026 flagship release.
- **IDs:** `minimax-ai/minimax-m3` (no Zen Free ID)
- **Context window:** 1,048,576 (1M) / 512K out.
- **Modalities:** Text, image, video in; text out; tool calls yes.
- **Pricing (as of 2026-09-18):** Paid $0.30/$1.20 per 1M tokens (no Zen Free ID).
- **Architecture:** ~230B total / 9.8B active Mixture-of-Experts with sparse attention.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **66.0%**
- Tau3-Banking / Tau2-Bench: **73.0%**
- GDPval-AA: **1480 Elo**
- Claw-Eval / ClawProBench: **80.5%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **77.5%**

Reasoning / knowledge:

- GPQA Diamond: **69.0%**
- HLE: **52.5%**
- LCR / MLCR: **74.5%**
- CritPt: **66.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **91.2 / #8**
- Omniscience Accuracy / Hallucination Rate: **93.0% / 2.4%**

Coding:

- SWE-bench Verified / SWE-Pro: **59.0%** (SWE-Bench Pro)
- LiveCodeBench: **68.5%**
- SciCode / AA-SciCode: **60.0%**
- Vibe Code Bench: **77.0%**
- DeepSWE / Coding Index / other: **81.0**

Long context:

- Robust 1M context with 512K output capacity.

### Normalized scores (1–100)

- **Tool use: 86/100.** Strong agentic tool use and 1M context retrieval.
- **Reasoning: 86/100.** Solid sparse-attention reasoning.
- **Context window: 95/100.** 1M context with 512K output.
- **Multimodal: 82/100.** Text, image, and video ingestion.
- **Coding: 85/100.** High-performance SWE-bench Pro and coding results.
- **Cost efficiency: 90/100.** Extremely affordable paid pricing ($0.30/$1.20).
- **Overall Score: 86.8/100.** Impressive flagship sparse-attention open-weight MoE.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-18
- Method: Independent public research and normalized 1–100 evaluation.
