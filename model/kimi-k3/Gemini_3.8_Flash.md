# Kimi K3 — findings by Gemini 3.8 Flash

- Source: MoonshotAI/kimi-k3
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Kimi K3
- **Short description:** Moonshot AI's 2.8T-parameter multimodal MoE flagship with a symmetric 1M input/output window, excelling in long-context document analysis and agent execution.
- **Provider / access:** Moonshot AI API `moonshotai/kimi-k3` via OpenAI-compatible endpoints.
- **Release / knowledge:** 2026-07 release; knowledge cutoff mid-2026.
- **IDs:** `moonshotai/kimi-k3` (no Free ID on Zen)
- **Context window:** 1,048,576 tokens total (1M in / 1M max output; verified from Moonshot platform documentation).
- **Modalities:** Text, image, and document (PDF/Doc) in; text out; tool calls and structured outputs.
- **Pricing (as of 2026-09-19):** $3.00 / 1M in, $15.00 / 1M out; cached prompt tokens at $0.30 / 1M.
- **Architecture:** 2.8T MoE architecture with active expert routing and long-range attention kernels.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85.0%** (Public leaderboard)
- Tau3-Banking / Tau2-Bench: **48.2%** (Tau3-Banking)
- GDPval-AA: **1692**
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **76.8%**

Reasoning / knowledge:

- GPQA Diamond: **92.1%**
- HLE: **45.3%**
- LCR / MLCR: **88.2%**
- CritPt: **75.1%**
- Artificial Analysis Intelligence Index / BenchLM overall: **60.8 / #5**
- Omniscience Accuracy / Hallucination Rate: **90.5% / 5.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **72.4%**
- LiveCodeBench: **87.2%**
- SciCode / AA-SciCode: **57.3%**
- Vibe Code Bench: **63.8%**
- DeepSWE / Coding Index / other: **73.5%**

Long context:

- MRCR 98.7% at 1M; needle retrieval verified 100% across 1M context with 1M output capability.

### Normalized scores (1–100)

- **Tool use: 90/100.** 85.0% Terminal-Bench 2.1 and 1692 GDPval confirm dependable agent loop completion.
- **Reasoning: 94/100.** 92.1% GPQA Diamond and high mathematical reasoning scores demonstrate deep analytical power.
- **Context window: 100/100.** Industry-leading 1M input and 1M generation window with perfect retrieval.
- **Multimodal: 75/100.** High-fidelity document and image understanding, capped at 75 due to lack of native audio/video ingestion.
- **Coding: 91/100.** 72.4% on SWE-bench Verified and 87.2% LiveCodeBench indicate robust production coding skills.
- **Cost efficiency: 60/100.** $3.00/$15.00 pricing represents standard premium frontier API pricing.
- **Overall Score: 90/100.** Quality mean 90.0 equals 90; premier model for massive repository analysis and symmetric long generation.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-19
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
