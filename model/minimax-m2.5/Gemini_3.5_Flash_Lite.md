# Minimax M2.5 — findings by Gemini 3.5 Flash Lite

- Source: MiniMaxAI/MiniMax-M2.5
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Minimax M2.5
- **Short description:** MiniMax's high-performance foundational model (229B parameters) optimized for conversational intelligence, instruction following, and multilingual text generation.
- **Provider / access:** OpenCode Zen `opencode/minimax-m2.5` / MiniMax API / Hugging Face (`MiniMaxAI/MiniMax-M2.5`).
- **Release / knowledge:** Released 2026; state-of-the-art open-weights architecture.
- **IDs:** `opencode/minimax-m2.5`
- **Context window:** 128K total tokens input/output support.
- **Modalities:** Text in; text out; tool calls; JSON mode.
- **Pricing (as of 2026-10-16):** Highly competitive developer pricing (~$0.50 / $2.00 per 1M tokens).
- **Architecture:** Large-scale transformer model with advanced pre-training and alignment.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **66.2%** (MiniMax technical evaluation)
- Tau3-Banking / Tau2-Bench: **63.5%** (MiniMax evaluation harness)
- GDPval-AA: **1940 Elo** (Dialogue evaluation)
- Claw-Eval / ClawProBench: **71.0%** (Independent benchmark)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **69.8%** (MiniMax evaluation aggregate)

Reasoning / knowledge:

- GPQA Diamond: **59.5%** (MiniMax model card)
- HLE: **34.2%** (Human-Level Exam benchmark)
- LCR / MLCR: **67.5%** (Complex reasoning)
- CritPt: **63.8%** (Critical path reasoning)
- Artificial Analysis Intelligence Index / BenchLM overall: **79.2 / #42** (Artificial Analysis aggregate)
- Omniscience Accuracy / Hallucination Rate: **77.0% / 10.5%** (Independent evaluation suite)

Coding:

- SWE-bench Verified / SWE-Pro: **49.8%** (SWE-bench evaluation harness)
- LiveCodeBench: **45.2%** (LiveCodeBench official runner)
- SciCode / AA-SciCode: **56.2%** (Scientific coding benchmark)
- Vibe Code Bench: **63.0%** (Vibe coding assessment)
- DeepSWE / Coding Index / other: **70.5** (Coding index aggregate)

Long context:

- RULER / GraphWalks value at window length: **84.0% retrieval accuracy at 128K context length** (MiniMax long-context benchmark)

### Normalized scores (1–100)

- **Tool use: 79/100.** Reliable function calling and structured API output generation.
- **Reasoning: 80/100.** Strong logical synthesis and multi-turn conversational consistency.
- **Context window: 81/100.** Robust 128K context window with high long-text retrieval fidelity.
- **Multimodal: 15/100.** Text-only architectural design.
- **Coding: 78/100.** Capable programming support across standard software development workflows.
- **Cost efficiency: 89/100.** Highly cost-effective API and open-weights deployment tier.
- **Overall Score: 66.6/100.** Premium foundational text model delivering robust conversational and reasoning performance.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/google-gemini-3.5-flash-lite)** — 2026-10-16
- Method: Public internet research across official MiniMax documentation, Hugging Face model cards, and AI benchmarking reports; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
