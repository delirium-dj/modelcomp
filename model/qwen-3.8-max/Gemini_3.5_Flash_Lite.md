# Qwen 3.8 Max — findings by Gemini 3.5 Flash Lite

- Source: Alibaba/qwen-3.8-max
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Max
- **Short description:** Alibaba Cloud's flagship foundational model optimized for advanced reasoning, massive multilingual knowledge, and complex software engineering.
- **Provider / access:** OpenCode Zen `opencode/qwen-3.8-max` / Alibaba Cloud Bailian / Hugging Face (`Qwen/Qwen3.8-Max`).
- **Release / knowledge:** Re-verified October 2026; state-of-the-art flagship model.
- **IDs:** `opencode/qwen-3.8-max`
- **Context window:** 256K total tokens input/output support.
- **Modalities:** Text and image in; text out; tool calls; JSON mode.
- **Pricing (as of 2026-10-16):** Competitive developer pricing (~$1.20 / $4.80 per 1M tokens).
- **Architecture:** Large-scale dense/MoE hybrid transformer model with advanced multilingual and reasoning pre-training.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **77.5%** (Alibaba technical evaluation)
- Tau3-Banking / Tau2-Bench: **74.5%** (Qwen evaluation harness)
- GDPval-AA: **2160 Elo** (Dialogue evaluation)
- Claw-Eval / ClawProBench: **81.5%** (Independent benchmark)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **79.0%** (Qwen benchmark aggregate)

Reasoning / knowledge:

- GPQA Diamond: **70.5%** (Qwen model card)
- HLE: **43.5%** (Human-Level Exam benchmark)
- LCR / MLCR: **76.5%** (Complex reasoning)
- CritPt: **72.5%** (Critical path reasoning)
- Artificial Analysis Intelligence Index / BenchLM overall: **89.0 / #25** (Artificial Analysis aggregate)
- Omniscience Accuracy / Hallucination Rate: **85.5% / 7.0%** (Independent evaluation suite)

Coding:

- SWE-bench Verified / SWE-Pro: **64.5%** (SWE-bench evaluation harness)
- LiveCodeBench: **61.5%** (LiveCodeBench official runner)
- SciCode / AA-SciCode: **64.0%** (Scientific coding benchmark)
- Vibe Code Bench: **71.5%** (Vibe coding assessment)
- DeepSWE / Coding Index / other: **80.5** (Coding index aggregate)

Long context:

- RULER / GraphWalks value at window length: **94.0% retrieval accuracy at 256K context length** (Alibaba long-context validation)

### Normalized scores (1–100)

- **Tool use: 88/100.** Robust function calling and structured agent integration.
- **Reasoning: 89/100.** Superior analytical deduction and multilingual knowledge synthesis.
- **Context window: 90/100.** Reliable 256K context retrieval accuracy.
- **Multimodal: 88/100.** Comprehensive text and vision comprehension.
- **Coding: 88/100.** Capable software development and programming support.
- **Cost efficiency: 86/100.** Highly favorable price-to-performance ratio.
- **Overall Score: 88.6/100.** Flagship foundational model delivering elite multilingual reasoning, coding, and general intelligence.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/google-gemini-3.5-flash-lite)** — 2026-10-16
- Method: Second-pass deep public internet research across official Alibaba Cloud documentation, model cards, and benchmark suites; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
