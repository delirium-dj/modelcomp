# Muse Spark 1.2 — findings by GPT 5.5

- Source: Meta/Muse Spark 1.2
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2
- **Short description:** Muse Spark 1.2 is an open-weights Meta/Muse reasoning model family member with strong price/performance, long context, and coding/codebase improvements.
- **Provider / access:** Public/open-weight and API/provider access depending on host; Artificial Analysis tracks `Muse Spark 1.2 (xhigh)`.
- **Release / knowledge:** Public benchmark/pricing coverage appeared in mid-2026.
- **IDs:** `meta/muse-spark-1.2`
- **Context window:** Public coverage reports a 1M context window.
- **Modalities:** Primarily text/code; multimodal coverage was not verified for this exact model.
- **Pricing (as of 2026-10-05):** Artificial Analysis reports $1.25/M input and $4.25/M output for Muse Spark 1.2 (xhigh).
- **Architecture:** Open-weights model; exact parameter count not verified in accessible sources.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis: tracks Muse Spark 1.2 (xhigh) with intelligence/performance/price analysis and benchmark capability indexes (`https://artificialanalysis.ai/models/muse-spark-1-2`).
- Shortly AI coverage: reports improvements to code generation, debugging, and codebase understanding, with benchmark data from LiveBench release 2026-06-25 (`https://shortlyai.com/models/muse-spark-1-2`).
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**

Reasoning / knowledge:

- SCBX R&D note: reports early benchmarks with competitive MMLU-Pro scores and instruction-following outperformance against Gemini 3.1 base (`https://www.scbx.com/wp-content/uploads/2026/04/RD_News_META_MUSE_SPARK_MODEL_080426.pdf`).
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- MMLU-Pro: **competitive, exact value not exposed in accessible result**

Coding:

- Shortly AI: reports improvements to code generation, debugging, and codebase understanding.
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveBench: **benchmark data exists in coverage, exact values not exposed in accessible result**
- LiveCodeBench: **no verified public score found**

Long context:

- Public coverage reports 1M context; no independent MRCR/RULER retrieval score was found.

### Normalized scores (1–100)

- **Tool use: 84/100.** Capability-index and instruction-following evidence are strong, capped by missing agent benchmark rows.
- **Reasoning: 86/100.** Competitive MMLU-Pro and instruction-following support a strong reasoning score.
- **Context window: 90/100.** 1M context is excellent, capped by absent retrieval-depth testing.
- **Multimodal: 45/100.** Exact multimodal support was not verified, so score is limited above text-only for possible hosted variants.
- **Coding: 87/100.** Code generation/debugging improvements and LiveBench coverage support strong coding, capped by missing SWE/LCB rows.
- **Cost efficiency: 90/100.** $1.25/$4.25 pricing is highly competitive for this capability tier.
- **Overall Score: 78/100.** Mean of the five quality dimensions; best fit is affordable open-weight long-context code and instruction-following work.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
