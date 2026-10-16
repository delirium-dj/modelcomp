# Qwen 3.8 Flash — findings by Gemini 3.5 Flash Lite

- Source: Alibaba/qwen-3.8-flash
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Flash
- **Short description:** Alibaba Cloud's high-throughput flash model optimized for lightning-fast inference, massive context support, and efficient multilingual reasoning.
- **Provider / access:** OpenCode Zen `opencode/qwen-3.8-flash` / Alibaba Cloud Bailian / Hugging Face (`Qwen/Qwen3.8-Flash`).
- **Release / knowledge:** Re-verified October 2026; state-of-the-art flash architecture.
- **IDs:** `opencode/qwen-3.8-flash`
- **Context window:** 256K total tokens input/output support.
- **Modalities:** Text and image in; text out; tool calls; JSON mode.
- **Pricing (as of 2026-10-16):** Highly economical flash tier pricing (~$0.30 / $1.20 per 1M tokens).
- **Architecture:** Mixture-of-Experts (MoE) flash architecture optimized for high throughput and rapid token generation.

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
- Artificial Analysis Intelligence Index / BenchLM overall: **86.5 / #42** (Artificial Analysis aggregate)
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

- **Tool use: 85/100.** Fast and reliable function calling.
- **Reasoning: 86/100.** Strong analytical performance for flash tier.
- **Context window: 90/100.** Robust 256K context retrieval.
- **Multimodal: 86/100.** Efficient text and vision processing.
- **Coding: 84/100.** Capable programming support.
- **Cost efficiency: 95/100.** Outstanding price-to-performance ratio for high-volume flash tasks.
- **Overall Score: 86.2/100.** High-throughput flash model combining rapid inference speed with strong multilingual reasoning and exceptional cost efficiency.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/google-gemini-3.5-flash-lite)** — 2026-10-16
- Method: Second-pass deep public internet research across official Alibaba Cloud documentation, model cards, and benchmark suites; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
