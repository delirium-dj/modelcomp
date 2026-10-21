# Muse Spark 1.2 — findings by Muse Glimmer 30B

- Source: Meta (`muse-spark-1.2`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2
- **Short description:** Meta's agent model co-trained with Muse Code for terminal coding workflows. Optimized for real coding with higher first-attempt accuracy and reliable tool calling, 1M context window.
- **Provider / access:** OpenCode Zen `opencode/muse-spark-1.2` via `https://opencode.ai/inference/openai/v1/responses` Chat Completions; Meta Model API `muse-spark-1.2`.
- **Release / knowledge:** no verified release date found
- **IDs:** `opencode/muse-spark-1.2`
- **Context window:** 1,048,576 tokens total, 1M input / 131,072 max output — verified via meta.json
- **Modalities:** text, image, audio, video, PDF in; text out; reasoning yes; tool calls yes
- **Pricing (as of 2026-10-20):** Free Zen tier $0; Contributor $0.10/$0.20 per 1M in/out; Standard $1.25/$4.25 per 1M in/out. Cached input $0.15 Standard / $0.002 Contributor. Free tier requires training-data consent.
- **Architecture:** proprietary, co-trained with Muse Code for terminal work

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:

- Terminal-Bench 2.1: **82.9%** (Meta model page image, Muse Code harness)
- GDPval-AA V2: **1631** (Meta model page image)
- AA Agentic Index: **44.0%** (Artificial Analysis model benchmarks, via BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **90.4%** (Artificial Analysis model benchmarks, via BenchLM)
- HLE: **45.5%** (Artificial Analysis model benchmarks, via BenchLM)
- AA-LCR: **79.0%** (Artificial Analysis model benchmarks, via BenchLM)
- CritPt: **17.7%** (Artificial Analysis model benchmarks, via BenchLM)
- Artificial Analysis Intelligence Index: **39.6%** (Artificial Analysis model benchmarks, via BenchLM)
- Omniscience Accuracy / Hallucination Rate: **45.4% / 33.3%** (Artificial Analysis model benchmarks, via BenchLM)

Coding:

- DeepSWE 1.1: **59.3%** (Meta model page image, Muse Code harness)
- SWE-bench Verified: **86.6%** (Vals AI SWE-bench leaderboard, via BenchLM)
- AA-SciCode: **57.4%** (Artificial Analysis model benchmarks, via BenchLM)
- Meta Internal Coding Bench: **70.6%** (Meta model page image)
- AA Coding Index: **72.2%** (Artificial Analysis model benchmarks, via BenchLM)

Long context:

- no long-context retrieval reported

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`.

- **Tool use: 90/100.** Terminal-Bench 2.1 82.9% and GDPVal 1631 near frontier; caps at no verified public Tau3 score.
- **Reasoning: 88/100.** GPQA Diamond 90.4% and HLE 45.5% are frontier-level; caps at CritPt 17.7% and Intelligence Index 39.6%.
- **Context window: 100/100.** 1M token context with measured 1M input / 131K output tier.
- **Multimodal: 90/100.** Input text/image/audio/video/PDF with text output; full multimodal coverage.
- **Coding: 88/100.** SWE-bench 86.6% strong, DeepSWE 59.3% and SciCode 57.4% moderate; caps at DeepSWE below frontier.
- **Cost efficiency: 100/100.** Free Zen tier $0 input/output.
- **Overall Score: 91/100.** Mean of Tool 90, Reasoning 88, Context 100, Multimodal 90, Coding 88 = 91.2 → 91. Best-fit recommendation: near-frontier free coding agent for terminal/automated coding with long context.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-20
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
