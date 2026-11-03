# Muse Spark 1.2 — findings by Mercury 3

- Source: Meta/Muse Spark 1.2
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2 (one model across Contributor/Free/Standard/Max tiers — same weights; only price and Meta's training-data use differ)
- **Short description:** Meta's coding-focused Muse Spark update (released 2026-08-05, superseded by 1.3): scaled-up coding training compute, long-horizon/whole-repo training, and self-improvement data loops. Very fast (273 t/s — #3 overall) at $1.25/$4.25 with 1M context and omni input.
- **Provider / access:** Meta Model API (`muse-spark-1.2`), Muse Code (terminal agent), Meta AI; 2 API providers tracked by Artificial Analysis; OpenRouter `meta/muse-spark-1.2`.
- **Release / knowledge:** Released 2026-08-05; knowledge cutoff not published.
- **IDs:** `muse-spark-1.2` (Meta Model API; xhigh reasoning tier; Contributor/Free/Standard/Max access tiers of the same weights).
- **Context window:** 1,048,576 tokens (1M) total; max output not disclosed (131K per models.dev family block).
- **Modalities:** text + image + speech + video input, text output; reasoning (extended thinking); tool calls; subagent coordination; context compaction.
- **Pricing (as of 2026-11-03):** $1.25 input / $4.25 output per 1M tokens, 88% cache discount (blended ~$0.78); Contributor/Free $0 with training-data consent.
- **Architecture:** proprietary; parameter count undisclosed; not open-weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **82.9%** (Meta) vs **69.7%** (Vals — conflicting harnesses); GDPval-AA v2: **1631 Elo** (Meta; AA normalized 48.6%)
- AA Agentic Index: **44.0%**; AA EnterpriseOps-Gym: 47.3%; MazeBench ASCII: 0%
- No OSWorld/Toolathlon figure verified in sources reviewed for 1.2

Reasoning / knowledge:

- GPQA Diamond: **90.4%** (AA); HLE: **45.5%** (AA); MMLU-Pro: **88.3%** (Vals)
- AA-LCR: **79.0%**; CritPt: **17.7%**; Artificial Analysis Intelligence Index: **39.6%**
- AA-Omniscience: accuracy 45.4%, hallucination rate 33.3%

Coding:

- Terminal-Bench 2.1 82.9%; DeepSWE: **59.3%** (Meta); SWE-bench: **86.6%** (Vals); AA Coding Index: **72.2%**; AA-SciCode: **57.4%**; VulcanBench v3: 87.0%; FrontierSWE v2: 12.0% (Proximal)
- Meta Internal Coding Bench (1.2): strong (co-trained with Muse Code per Meta blog)

Long context:

- 1M window; AA-LCR 79.0%; no MRCR/GraphWalks figure verified in sources reviewed.

Multimodal:

- text/image/speech/video in; Design Arena 1312 Elo; no verified video/audio benchmark rows found; text-only output.

### Normalized scores (1–100)

- **Tool use: 84/100.** TB2.1 82.9% and GDPval 1631 are strong; capped by Vals TB2.1 69.7%, Agentic Index 44%, and no OSWorld/Toolathlon verification.
- **Reasoning: 84/100.** GPQA 90.4%, HLE 45.5%, LCR 79% — solid; capped by CritPt 17.7% and II 39.6.
- **Context window: 89/100.** 1M with good LCR 79%; no ≥98%-retrieval figure at depth.
- **Multimodal: 91/100.** Full omni input (text/image/speech/video); text-only output caps it.
- **Coding: 86/100.** TB2.1 82.9%, SWE-bench 86.6%, coding index 72.2%, VulcanBench 87%; capped by DeepSWE 59.3% and FrontierSWE v2 12%.
- **Cost efficiency: 88/100.** $1.25/$4.25 with 88% cache discount — very competitive; #3 speed (273 t/s).
- **Overall Score: 87/100.** Mean of (84+84+89+91+86)/5 = 86.8 → 87. A strong coding-focused value model; 1.3 is the clear upgrade at the same price.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (Meta Muse Code/Muse Spark 1.2 announcement + model page, Artificial Analysis model page/leaderboards, BenchLM aggregation, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores. Conflicting harness results (TB2.1) listed side by side.
- Reference URLs:
  - [Introducing Muse Code and Muse Spark 1.2 (Meta AI, 2026-08-05)](https://research.meta.ai/blog/introducing-muse-code-and-muse-spark-1-2)
  - [Muse Spark model page (Meta Model API)](https://developer.meta.com/ai/models/muse-spark/)
  - [Muse Spark 1.2 — Artificial Analysis model page ($1.25/$4.25, 1M, omni, 273 t/s)](https://artificialanalysis.ai/models/muse-spark-1-2)
  - [Muse Spark 1.2 — BenchLM benchmark aggregation](https://benchlm.ai/models/muse-spark-1-2)
  - [Muse Spark 1.2 — Vals AI model page](https://www.vals.ai/models/meta_muse_spark_1_2)
