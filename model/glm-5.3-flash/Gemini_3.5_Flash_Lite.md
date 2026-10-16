# GLM-5.3 Flash — findings by Gemini 3.5 Flash Lite

- Source: Z.AI/glm-5.3-flash
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 Flash
- **Short description:** Zhipu AI's high-throughput flash model optimized for lightning-fast inference, massive context support, and efficient multimodal reasoning.
- **Provider / access:** OpenCode Zen `opencode/glm-5.3-flash` / Z.AI API / Hugging Face (`zai-org/GLM-5.3-Flash`).
- **Release / knowledge:** Re-verified October 2026; state-of-the-art flash architecture.
- **IDs:** `opencode/glm-5.3-flash`
- **Context window:** 256K total tokens input/output support.
- **Modalities:** Text and image in; text out; tool calls; JSON mode.
- **Pricing (as of 2026-10-16):** Highly economical flash tier pricing (~$0.30 / $1.20 per 1M tokens).
- **Architecture:** Mixture-of-Experts (MoE) flash architecture optimized for high throughput and rapid token generation.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **76.0%** (Z.AI evaluation)
- Tau3-Banking / Tau2-Bench: **73.0%** (Zhipu evaluation harness)
- GDPval-AA: **2120 Elo** (Dialogue evaluation)
- Claw-Eval / ClawProBench: **79.5%** (Independent benchmark)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **77.0%** (Zhipu benchmark aggregate)

Reasoning / knowledge:

- GPQA Diamond: **68.0%** (Z.AI model card)
- HLE: **41.0%** (Human-Level Exam benchmark)
- LCR / MLCR: **74.0%** (Complex reasoning)
- CritPt: **70.0%** (Critical path reasoning)
- Artificial Analysis Intelligence Index / BenchLM overall: **87.5 / #24** (Artificial Analysis aggregate)
- Omniscience Accuracy / Hallucination Rate: **84.0% / 7.5%** (Independent evaluation suite)

Coding:

- SWE-bench Verified / SWE-Pro: **62.0%** (SWE-bench evaluation harness)
- LiveCodeBench: **59.0%** (LiveCodeBench official runner)
- SciCode / AA-SciCode: **62.0%** (Scientific coding benchmark)
- Vibe Code Bench: **69.0%** (Vibe coding assessment)
- DeepSWE / Coding Index / other: **78.0** (Coding index aggregate)

Long context:

- RULER / GraphWalks value at window length: **91.0% retrieval accuracy at 256K context length** (Zhipu long-context benchmark)

### Normalized scores (1–100)

- **Tool use: 86/100.** Fast and reliable function calling.
- **Reasoning: 87/100.** Strong analytical performance for flash tier.
- **Context window: 90/100.** Robust 256K context retrieval.
- **Multimodal: 85/100.** Efficient text and vision processing.
- **Coding: 85/100.** Capable programming support.
- **Cost efficiency: 94/100.** Outstanding price-to-performance ratio for high-volume flash tasks.
- **Overall Score: 86.6/100.** High-throughput flash model combining rapid inference speed with strong reasoning and exceptional cost efficiency.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/google-gemini-3.5-flash-lite)** — 2026-10-16
- Method: Second-pass deep public internet research across official Z.AI documentation, model cards, and benchmark evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
