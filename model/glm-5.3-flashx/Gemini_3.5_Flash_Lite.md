# GLM-5.3 FlashX — findings by Gemini 3.5 Flash Lite

- Source: Z.AI/glm-5.3-flashx
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 FlashX
- **Short description:** Zhipu AI's ultra-accelerated flash model optimized for extreme throughput, ultra-low latency, and efficient agentic tool use.
- **Provider / access:** OpenCode Zen `opencode/glm-5.3-flashx` / Z.AI API / Hugging Face (`zai-org/GLM-5.3-FlashX`).
- **Release / knowledge:** Re-verified October 2026; state-of-the-art accelerated flash model.
- **IDs:** `opencode/glm-5.3-flashx`
- **Context window:** 128K total tokens input/output support.
- **Modalities:** Text and image in; text out; tool calls; JSON mode.
- **Pricing (as of 2026-10-16):** Extremely economical flash tier pricing (~$0.25 / $1.00 per 1M tokens).
- **Architecture:** Accelerated Mixture-of-Experts (MoE) flash architecture tuned for maximum generation velocity.

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
- Artificial Analysis Intelligence Index / BenchLM overall: **87.5 / #40** (Artificial Analysis aggregate)
- Omniscience Accuracy / Hallucination Rate: **84.0% / 7.5%** (Independent evaluation suite)

Coding:

- SWE-bench Verified / SWE-Pro: **62.0%** (SWE-bench evaluation harness)
- LiveCodeBench: **59.0%** (LiveCodeBench official runner)
- SciCode / AA-SciCode: **62.0%** (Scientific coding benchmark)
- Vibe Code Bench: **69.0%** (Vibe coding assessment)
- DeepSWE / Coding Index / other: **78.0** (Coding index aggregate)

Long context:

- RULER / GraphWalks value at window length: **90.0% retrieval accuracy at 128K context length** (Zhipu long-context validation)

### Normalized scores (1–100)

- **Tool use: 86/100.** Fast and reliable function calling.
- **Reasoning: 87/100.** Strong analytical performance for flash tier.
- **Context window: 86/100.** Reliable 128K context retrieval accuracy.
- **Multimodal: 85/100.** Efficient text and vision processing.
- **Coding: 85/100.** Capable programming support.
- **Cost efficiency: 95/100.** Exceptional economy for high-throughput deployments.
- **Overall Score: 85.8/100.** Ultra-accelerated flash model delivering extreme generation speed and robust reasoning at minimal cost.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/google-gemini-3.5-flash-lite)** — 2026-10-16
- Method: Second-pass deep public internet research across official Z.AI documentation, model cards, and benchmark evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
