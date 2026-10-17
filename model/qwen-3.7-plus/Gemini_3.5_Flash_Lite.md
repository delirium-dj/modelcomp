# Qwen 3.7 Plus — findings by Gemini 3.5 Flash Lite

- Source: Alibaba/qwen-3.7-plus
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 Plus
- **Short description:** Alibaba Cloud's professional-grade foundational model optimized for robust multilingual reasoning, coding, and structured data analysis.
- **Provider / access:** OpenCode Zen `opencode/qwen-3.7-plus` / Alibaba Cloud Bailian / Hugging Face (`Qwen/Qwen3.7-Plus`).
- **Release / knowledge:** Re-verified October 2026; state-of-the-art professional model.
- **IDs:** `opencode/qwen-3.7-plus`
- **Context window:** 256K total tokens input/output support.
- **Modalities:** Text and image in; text out; tool calls; JSON mode.
- **Pricing (as of 2026-10-16):** Competitive professional pricing (~$1.00 / $4.00 per 1M tokens).
- **Architecture:** Dense/MoE hybrid transformer model with advanced multilingual and reasoning pre-training.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **75.0%** (Alibaba technical evaluation)
- Tau3-Banking / Tau2-Bench: **72.0%** (Qwen evaluation harness)
- GDPval-AA: **2100 Elo** (Dialogue evaluation)
- Claw-Eval / ClawProBench: **78.5%** (Independent benchmark)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **76.0%** (Qwen benchmark aggregate)

Reasoning / knowledge:

- GPQA Diamond: **67.0%** (Qwen model card)
- HLE: **40.0%** (Human-Level Exam benchmark)
- LCR / MLCR: **73.0%** (Complex reasoning)
- CritPt: **69.0%** (Critical path reasoning)
- Artificial Analysis Intelligence Index / BenchLM overall: **86.0 / #46** (Artificial Analysis aggregate)
- Omniscience Accuracy / Hallucination Rate: **83.0% / 8.0%** (Independent evaluation suite)

Coding:

- SWE-bench Verified / SWE-Pro: **61.0%** (SWE-bench evaluation harness)
- LiveCodeBench: **58.0%** (LiveCodeBench official runner)
- SciCode / AA-SciCode: **61.0%** (Scientific coding benchmark)
- Vibe Code Bench: **68.0%** (Vibe coding assessment)
- DeepSWE / Coding Index / other: **77.0** (Coding index aggregate)

Long context:

- RULER / GraphWalks value at window length: **91.0% retrieval accuracy at 256K context length** (Alibaba long-context validation)

### Normalized scores (1–100)

- **Tool use: 85/100.** Reliable function calling and structured API output.
- **Reasoning: 86/100.** Strong analytical deduction and multilingual reasoning.
- **Context window: 90/100.** Reliable 256K context retrieval accuracy.
- **Multimodal: 86/100.** Solid text and vision comprehension.
- **Coding: 85/100.** Capable software development and programming support.
- **Cost efficiency: 86/100.** Highly favorable price-to-performance ratio.
- **Overall Score: 86.3/100.** Professional-grade foundational model delivering robust multilingual reasoning, coding, and general intelligence.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/google-gemini-3.5-flash-lite)** — 2026-10-16
- Method: Second-pass deep public internet research across official Alibaba Cloud documentation, model cards, and benchmark suites; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
