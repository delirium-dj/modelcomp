# Muse Spark 1.2 — findings by Crouton Alpha

- Source: Meta/Muse Spark 1.2
- Date: 2026-11-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2
- **Short description:** Meta's 1.2 generation agentic model (same weights across Contributor/Free/Standard/Max) for long-context coding; superseded by 1.3.
- **Provider / access:** Meta API, OpenCode Zen `opencode/muse-spark-1.2` via `https://opencode.ai/inference/openai/v1/responses`.
- **Release / knowledge:** 2026-08-05 (AA).
- **IDs:** `meta/muse-spark-1.2`, `opencode/muse-spark-1.2` (paid Standard; Free Contributor tier exists).
- **Context window:** 1M tokens total (AA; BenchLM).
- **Modalities:** Text, image, speech, video in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-11-09):** $1.25 input / $4.25 output per 1M (AA; Zen same); Contributor/Free $0. Paid/free tiers same weights.
- **Architecture:** Proprietary, parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 **82.9%** (Meta model page); Vals **69.7%**
- GDPval-AA **1631** (Meta model page)
- EnterpriseOps-Gym **47.3%** (AA)

Reasoning / knowledge:

- GPQA Diamond **90.4%** (AA); MMLU-Pro **88.3%** (Vals); HLE **45.5%** (AA)
- AA-LCR **79.0%** (AA)
- Intelligence **39.6**; BenchLM **65.62 #29** (AA; BenchLM)
- CritPt **17.7%** (AA)

Coding:

- DeepSWE **59.3%** (Meta model page)
- SWE-bench (Vals) **86.6%** (Vals)
- AA Coding Index **72.2** (AA)
- AA-SciCode **57.4%** (AA)
- FrontierSWE **12.0%** (Proximal) — hardest-suite drag.

Long context:

- 1M; AA-LCR **79.0%** (AA)

Multimodal:

- AA: text/image/speech/video in (AA)
- Design Arena **1311** (OpenRouter)

### Normalized scores (1–100)

- **Tool use: 90/100.** TB2.1 82.9% and GDPval 1631 are strong; Vals 69.7% variance caps it below 94.
- **Reasoning: 91/100.** GPQA 90.4%, HLE 45.5%, LCR 79% support high reasoning; capped by CritPt 17.7%.
- **Context window: 96/100.** 1M with LCR 79%.
- **Multimodal: 80/100.** Widest inputs, text out; Design Arena 1311 solid, no MMMU row — text-only output caps below 85.
- **Coding: 89/100.** SWE Vals 86.6% strong, Coding Index 72.2 solid; DeepSWE 59.3% and FrontierSWE 12% cap it just below 90.
- **Cost efficiency: 100/100.** $0 Contributor/Free same weights (cost 100); Standard $1.25/$4.25 paid.
- **Overall Score: 89/100.** Mean (90+91+96+80+89)/5 = 89.2 → 89; best-fit prior-gen Spark with free tier.

---

## Signature

- Provided by: **Crouton Alpha (opencode/crouton-alpha-free)** — 2026-11-09
- Method: public internet research via Meta model page, BenchLM, Artificial Analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Meta: Muse Spark 1.2 model page](https://developer.meta.com/ai/models/muse-spark/)
  - [BenchLM — Muse Spark 1.2](https://benchlm.ai/models/muse-spark-1-2)
  - [Artificial Analysis — Muse Spark 1.2 (Xhigh)](https://artificialanalysis.ai/models/muse-spark-1-2)
  - [OpenCode Zen Model Catalog](https://opencode.ai/docs/zen)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
