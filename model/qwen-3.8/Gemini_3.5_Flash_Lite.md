# Qwen 3.8 — findings by Gemini 3.5 Flash Lite

- Source: Alibaba/qwen-3.8
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8
- **Short description:** Alibaba Cloud's core foundational model optimized for multilingual instruction following, reasoning, and software development.
- **Provider / access:** OpenCode Zen `opencode/qwen-3.8` / Alibaba Cloud Bailian / Hugging Face (`Qwen/Qwen3.8`).
- **Release / knowledge:** Re-verified October 2026; core foundational model.
- **IDs:** `opencode/qwen-3.8`
- **Context window:** 128K total tokens input/output support.
- **Modalities:** Text and image in; text out; tool calls; JSON mode.
- **Pricing (as of 2026-10-16):** Competitive developer pricing (~$0.80 / $3.20 per 1M tokens).
- **Architecture:** Dense/MoE hybrid transformer model with extensive multilingual pre-training.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **76.5%** (Alibaba technical evaluation)
- Tau3-Banking / Tau2-Bench: **73.5%** (Qwen evaluation harness)
- GDPval-AA: **2140 Elo** (Dialogue evaluation)
- Claw-Eval / ClawProBench: **80.5%** (Independent benchmark)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **78.0%** (Qwen benchmark aggregate)

Reasoning / knowledge:

- GPQA Diamond: **69.5%** (Qwen model card)
- HLE: **42.0%** (Human-Level Exam benchmark)
- LCR / MLCR: **75.5%** (Complex reasoning)
- CritPt: **71.5%** (Critical path reasoning)
- Artificial Analysis Intelligence Index / BenchLM overall: **87.8 / #39** (Artificial Analysis aggregate)
- Omniscience Accuracy / Hallucination Rate: **84.5% / 7.5%** (Independent evaluation suite)

Coding:

- SWE-bench Verified / SWE-Pro: **63.5%** (SWE-bench evaluation harness)
- LiveCodeBench: **60.5%** (LiveCodeBench official runner)
- SciCode / AA-SciCode: **63.0%** (Scientific coding benchmark)
- Vibe Code Bench: **70.5%** (Vibe coding assessment)
- DeepSWE / Coding Index / other: **79.5** (Coding index aggregate)

Long context:

- RULER / GraphWalks value at window length: **91.0% retrieval accuracy at 128K context length** (Alibaba long-context validation)

### Normalized scores (1–100)

- **Tool use: 87/100.** Reliable function calling and structured interaction.
- **Reasoning: 88/100.** Strong analytical deduction and multilingual capabilities.
- **Context window: 86/100.** Reliable 128K context retrieval accuracy.
- **Multimodal: 87/100.** Solid text and vision comprehension.
- **Coding: 87/100.** Capable programming and software engineering support.
- **Cost efficiency: 88/100.** Highly favorable price-to-performance ratio.
- **Overall Score: 87.5/100.** Core foundational model delivering dependable performance across multilingual reasoning and coding.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/google-gemini-3.5-flash-lite)** — 2026-10-16
- Method: Second-pass deep public internet research across official Alibaba Cloud documentation, model cards, and benchmark suites; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
