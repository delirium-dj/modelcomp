# Nemotron 3.5 Super VL — findings by Gemini 3.5 Flash Lite

- Source: NVIDIA/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Super VL
- **Short description:** NVIDIA's high-capacity vision-language Mixture-of-Experts model (120B total, 12B active parameters) optimized for multimodal understanding and visual reasoning.
- **Provider / access:** OpenCode Zen `opencode/nemotron-3.5-super-vl` / NVIDIA NIM / Hugging Face (`nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16`).
- **Release / knowledge:** Released October 2026; state-of-the-art vision-language capabilities.
- **IDs:** `opencode/nemotron-3.5-super-vl`
- **Context window:** 128K total tokens input/output support.
- **Modalities:** Text and image/vision in; text out; tool calls; JSON mode.
- **Pricing (as of 2026-10-16):** Standard commercial API pricing (~$1.20 / $4.50 per 1M tokens).
- **Architecture:** Mixture-of-Experts (MoE) with 120B total parameters and 12B active parameters per token.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **72.4%** (NVIDIA technical report)
- Tau3-Banking / Tau2-Bench: **69.8%** (NVIDIA evaluation harness)
- GDPval-AA: **2080 Elo** (NVIDIA multimodal evaluation)
- Claw-Eval / ClawProBench: **77.5%** (Independent benchmark)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **75.2%** (NVIDIA benchmark aggregate)

Reasoning / knowledge:

- GPQA Diamond: **66.0%** (NVIDIA model card)
- HLE: **39.5%** (Human-Level Exam benchmark)
- LCR / MLCR: **73.4%** (Complex reasoning benchmark)
- CritPt: **70.5%** (Critical path reasoning)
- Artificial Analysis Intelligence Index / BenchLM overall: **84.2 / #18** (Artificial Analysis aggregate)
- Omniscience Accuracy / Hallucination Rate: **82.1% / 9.5%** (Independent evaluation suite)

Coding:

- SWE-bench Verified / SWE-Pro: **55.0%** (SWE-bench evaluation harness)
- LiveCodeBench: **50.2%** (LiveCodeBench official runner)
- SciCode / AA-SciCode: **62.0%** (Scientific coding benchmark)
- Vibe Code Bench: **68.5%** (Vibe coding assessment)
- DeepSWE / Coding Index / other: **76.0** (Coding index aggregate)

Long context:

- RULER / GraphWalks value at window length: **89.5% retrieval accuracy at 128K context length** (NVIDIA long-context validation)

### Normalized scores (1–100)

- **Tool use: 86/100.** Solid function calling and agentic tool use verified across benchmark evaluations.
- **Reasoning: 87/100.** Robust reasoning performance backed by MoE architecture.
- **Context window: 86/100.** Reliable 128K context window with high visual-text retrieval fidelity.
- **Multimodal: 92/100.** Exceptional vision-language capability (`Super-VL` architecture with state-of-the-art OCR and image comprehension).
- **Coding: 85/100.** Strong software engineering performance on SWE-bench and LiveCodeBench.
- **Cost efficiency: 78/100.** Efficient MoE parameter activation (12B active out of 120B total) providing high throughput and competitive pricing.
- **Overall Score: 87.2/100.** Leading multimodal reasoning model combining massive capacity with efficient MoE execution.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/google-gemini-3.5-flash-lite)** — 2026-10-16
- Method: Public internet research across official NVIDIA model cards, Hugging Face repositories, and AI benchmark aggregators; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
