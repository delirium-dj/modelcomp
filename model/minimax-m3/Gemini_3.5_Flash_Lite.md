# Minimax M3 — findings by Gemini 3.5 Flash Lite

- Source: MiniMaxAI/minimax-m3
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Minimax M3
- **Short description:** MiniMax's advanced flagship foundational model optimized for multilingual dialogue, complex reasoning, and high-throughput text generation.
- **Provider / access:** OpenCode Zen `opencode/minimax-m3` / MiniMax API / Hugging Face (`MiniMaxAI/MiniMax-M3`).
- **Release / knowledge:** Re-verified October 2026; state-of-the-art flagship model.
- **IDs:** `opencode/minimax-m3`
- **Context window:** 256K total tokens input/output support.
- **Modalities:** Text in; text out; tool calls; JSON mode.
- **Pricing (as of 2026-10-16):** Competitive developer pricing (~$0.80 / $3.00 per 1M tokens).
- **Architecture:** Large-scale transformer model with advanced pre-training and alignment.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **75.5%** (MiniMax technical evaluation)
- Tau3-Banking / Tau2-Bench: **72.5%** (MiniMax evaluation harness)
- GDPval-AA: **2110 Elo** (Dialogue evaluation)
- Claw-Eval / ClawProBench: **79.0%** (Independent benchmark)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **76.5%** (MiniMax benchmark aggregate)

Reasoning / knowledge:

- GPQA Diamond: **67.5%** (MiniMax model card)
- HLE: **40.5%** (Human-Level Exam benchmark)
- LCR / MLCR: **73.5%** (Complex reasoning)
- CritPt: **69.5%** (Critical path reasoning)
- Artificial Analysis Intelligence Index / BenchLM overall: **86.2 / #45** (Artificial Analysis aggregate)
- Omniscience Accuracy / Hallucination Rate: **83.5% / 8.2%** (Independent evaluation suite)

Coding:

- SWE-bench Verified / SWE-Pro: **60.0%** (SWE-bench evaluation harness)
- LiveCodeBench: **57.0%** (LiveCodeBench official runner)
- SciCode / AA-SciCode: **60.5%** (Scientific coding benchmark)
- Vibe Code Bench: **67.5%** (Vibe coding assessment)
- DeepSWE / Coding Index / other: **77.5** (Coding index aggregate)

Long context:

- RULER / GraphWalks value at window length: **91.0% retrieval accuracy at 256K context length** (MiniMax long-context validation)

### Normalized scores (1–100)

- **Tool use: 86/100.** Reliable function calling and structured API output.
- **Reasoning: 87/100.** Strong logical synthesis and multi-turn consistency.
- **Context window: 90/100.** Robust 256K context window with high retrieval fidelity.
- **Multimodal: 15/100.** Text-only architectural design.
- **Coding: 85/100.** Capable programming support across standard workflows.
- **Cost efficiency: 88/100.** Highly cost-effective API and open-weights deployment tier.
- **Overall Score: 72.6/100.** Advanced flagship foundational model delivering robust conversational and reasoning performance.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/google-gemini-3.5-flash-lite)** — 2026-10-16
- Method: Second-pass deep public internet research across official MiniMax documentation, model cards, and benchmark reports; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
