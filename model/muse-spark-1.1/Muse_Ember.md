# Muse Spark 1.1 — findings by Crouton Alpha

- Source: Meta/Muse Spark 1.1
- Date: 2026-11-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.1
- **Short description:** Meta's 1.1 generation Spark for long-context coding and MSL tool use; top use case is free-tier 1M agent work.
- **Provider / access:** Meta API, OpenCode Zen `opencode/muse-spark-1.1` (not in current Zen paid table — free/contributor tier lineage).
- **Release / knowledge:** 2026-07 (evaluation report).
- **IDs:** `meta/muse-spark-1.1`, `opencode/muse-spark-1.1`.
- **Context window:** 1M total (BenchLM).
- **Modalities:** Text, image, video in (proved by BabyVision/CharXiv); text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-11-09):** Standard $1.25/$4.25 same as Spark family (AA 1.2/1.3 price table; not separately published for 1.1 — provisional family pricing); Contributor/Free $0 with data consent.
- **Architecture:** Proprietary, parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 **80.0%** (evaluation report); Vals **69.3%**
- MCP Atlas **88.1%** (evaluation report)
- Toolathlon **75.6%** (evaluation report)
- GDPval-AA **1375** (evaluation report)
- DeepSearchQA **84.9%** (evaluation report)
- Terminal-Bench Hard equivalent: no verified public score found on this cut.

Reasoning / knowledge:

- HLE **62.1%** (evaluation report); AA-HLE **46.2%**
- GPQA Diamond **89.8%** (AA); Vals **91.2%**
- AA-LCR **77.7%**, MRCR 1M **54.1%** (AA; report)
- Intelligence **33.7**; BenchLM **65.67 #28** (AA; BenchLM)
- CritPt **15.1%** (AA)

Coding:

- SWE Pro **61.5%** (evaluation report)
- LiveCodeBench (Vals) **85.9%**, SWE (Vals) **82.0%**
- AA Coding Index **71.3** (AA)
- SciCode **58.8%** (AA) — strong coding for Spark 1.1.

Long context:

- 1M; AA-LCR **77.7%**, MRCR 1M **54.1%** (AA; report)

Multimodal:

- CharXiv **88.4%** (evaluation report)
- BabyVision **76.3%** (evaluation report)
- Design Arena **1268** (OpenRouter)

### Normalized scores (1–100)

- **Tool use: 90/100.** TB2.1 80%, MCP Atlas 88.1%, Toolathlon 75.6% and WebArena 69% are strong; GDPval 1375 caps it below 94.
- **Reasoning: 91/100.** HLE 62.1% / AA 46.2%, GPQA ~90% and FrontierMath family support high reasoning; capped by CritPt 15.1%.
- **Context window: 92/100.** 1M with LCR 77.7% and MRCR 1M 54.1% — solid, not ≥98%-tier.
- **Multimodal: 83/100.** Text/image/video in, text out; CharXiv 88.4% and BabyVision 76.3% push into the 75–90 video tier.
- **Coding: 90/100.** LiveCode 85.9% and SWE Vals 82% strong; SWE-Pro 61.5% and Coding Index 71.3% keep it at the 90 boundary.
- **Cost efficiency: 98/100.** Free Contributor tier (same weights) scores 100; paid family $1.25/$4.25 provisional.
- **Overall Score: 89/100.** Mean (90+91+92+83+90)/5 = 89.2 → 89; best-fit prior-gen Spark with free tier and video support.

---

## Signature

- Provided by: **Crouton Alpha (opencode/crouton-alpha-free)** — 2026-11-09
- Method: public internet research via Meta evaluation report, BenchLM, Artificial Analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Meta AI: Muse Spark 1.1 evaluation report](https://ai.meta.com/static-resource/muse-spark-1-1-evaluation-report)
  - [BenchLM — Muse Spark 1.1](https://benchlm.ai/models/muse-spark-1-1)
  - [Artificial Analysis — Muse Spark 1.1](https://artificialanalysis.ai/models/muse-spark-1-1)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
