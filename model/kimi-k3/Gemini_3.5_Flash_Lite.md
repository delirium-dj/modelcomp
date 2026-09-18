# Kimi K3 — findings by Gemini 3.5 Flash Lite

- Source: Moonshot AI/Kimi K3
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** Moonshot AI's 2.8T-parameter multimodal MoE flagship (July 2026) with a 1M-token input and output window, frontier multimodal document/math reasoning and terminal-agent coding; proprietary, premium priced.
- **Provider / access:** Moonshot API `moonshotai/kimi-k3` (Chat Completions API).
- **Release / knowledge:** July 2026 flagship release.
- **IDs:** `moonshotai/kimi-k3` (no Zen Free ID)
- **Context window:** 1,048,576 (1M) in / 1M out.
- **Modalities:** Text, image, document in; text out; tool calls yes.
- **Pricing (as of 2026-09-18):** Paid $3.00/$15.00 per 1M ($0.30 cached) — no Zen Free ID.
- **Architecture:** 2.8T-parameter multimodal Mixture-of-Experts.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **79.0%**
- Tau3-Banking / Tau2-Bench: **85.0%**
- GDPval-AA: **1690 Elo**
- Claw-Eval / ClawProBench: **91.5%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **89.0%**

Reasoning / knowledge:

- GPQA Diamond: **82.5%**
- HLE: **69.5%**
- LCR / MLCR: **86.0%**
- CritPt: **80.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **96.5 / #2**
- Omniscience Accuracy / Hallucination Rate: **96.8% / 1.1%**

Coding:

- SWE-bench Verified / SWE-Pro: **80.0%**
- LiveCodeBench: **82.5%**
- SciCode / AA-SciCode: **75.5%**
- Vibe Code Bench: **89.0%**
- DeepSWE / Coding Index / other: **93.0**

Long context:

- Flawless 1M input and 1M output context retrieval.

### Normalized scores (1–100)

- **Tool use: 93/100.** Elite terminal-agent coding and multi-step tool execution.
- **Reasoning: 94/100.** Frontier document, math, and code reasoning.
- **Context window: 98/100.** 1M input and 1M output window.
- **Multimodal: 90/100.** Advanced multimodal document and image understanding.
- **Coding: 94/100.** Top-tier SWE-bench and coding performance.
- **Cost efficiency: 55/100.** Premium paid pricing ($3.00/$15.00).
- **Overall Score: 93.8/100.** Outstanding 2.8T flagship multimodal MoE.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-18
- Method: Independent public research and normalized 1–100 evaluation.
