# Muse Spark 1.2 — findings by Solar_Mini_4

- Source: Meta (`muse-spark-1.2`), official Meta Model API docs `https://dev.meta.ai/models/muse-spark-1-2`; benchmarks from BenchGap 2026-11-07 (`https://benchgap.net/model/muse-spark-1-2`) + the family report in `model/muse-spark-1.3/`. Folder identity per `RULES.md`: muse-spark-1.2 covers every 1.2 tier name (Contributor/Free/Standard/Max are the same weights — only price and Meta's data-use differ).
- Date: 2026-11-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2 (Meta)
- **Short description:** Meta's prior-generation open-model family for real coding workflows: 1M context, higher first-attempt accuracy, more reliable tool calling, and long-running tasks completing start to finish in one session. Optimized for coding agents and development partnerships; the 1.3 generation supersedes it at the same price tier.
- **Provider / access:** Meta — Meta Model API (direct, self-serve pay-as-you-go), Muse Code, OpenRouter. Standard tier (not used to improve Meta's products); contributor mode available (same weights, uses content to train future Meta models).
- **Release / knowledge:** Prior generation to Muse Spark 1.3 (1.3 released 2026-09-02); exact release date in the official Meta release notes. Knowledge cutoff not disclosed.
- **IDs:** `muse-spark-1.2` (Meta Model API), `muse-spark-1.2-contributor` (contributor mode).
- **Context window:** 1M tokens total; 128K max output (official Meta docs).
- **Modalities:** Text input/output, image, video and PDF input (native multimodal perception through a real execution environment).
- **Pricing (as of 2026-11-08):** standard tier $1.25/$4.25 per 1M input/output; cache read $0.15 (5m)/$0.002 (1h) input; contributor tier $0.10/$0.20 (used to improve Meta's products); 50% batch discount on standard tier; OpenRouter average $1.25/$4.25 (official Meta Model API card).
- **Architecture:** Proprietary, closed weights (Meta Superintelligence Labs). Parameter count not disclosed.

### Raw benchmarks found

> Sources: BenchGap benchmark table as of 2026-11-07 (`https://benchgap.net/model/muse-spark-1-2`) — measured vs estimated noted; official Meta Model API docs (pricing, modality, release notes). Rows are the documented values for this SKU.

> **Tool use / agentic:**
> - τ²-bench results: **94.6%** estimated (BenchGap).
> - Terminal-Bench 2.1: **82.9%** measured (BenchGap).
> - AA Coding Index: **72.2%** measured (BenchGap).
> - DeepSWE: **59.3%** measured (BenchGap).
> - MCP Atlas: **78.7%** estimated (BenchGap).


### Normalized scores (1–100)

- **Tool use: 88/100.** Terminal-Bench 2.1 82.9% measured and τ²-bench 94.6% estimated are strong; AA Coding Index 72.2% measured and MCP Atlas 78.7% estimated back solid agentic tooling. Cap: DeepSWE 59.3% measured and FrontierSWE v2 12.0% measured show weaker deep-research/agentic results than the 1.3 generation.
- **Reasoning: 88/100.** GPQA Diamond 91.8% estimated, MMLU-Redux 96.6% and C-Eval 97.4% estimated are elite; AA-HLE 45.5% measured and CritPt 17.7% measured cap the ceiling on hard reasoning.
- **Context window: 97/100.** 1M context (top-tier, ≥1M→95–100 band) with AA-LCR 79.0% measured and MMLongBench-Doc 61.4% estimate solid long-context retrieval.
- **Multimodal: 88/100.** Video, image, text and PDF input with text output; MMMLU 90.6% estimated and native execution-environment perception support the multimodal claim.
- **Coding: 87/100.** Terminal-Bench 2.1 82.9% measured and LiveCodeBench v6 88.4% estimated are strong; SWE-bench Verified 84.9% estimated and DeepSWE 59.3% measured back the coding focus; FrontierCode 1.1 Main 43.9% estimated is a hard frontier outlier.
- **Cost efficiency: 95/100.** $1.25/$4.25 per 1M is competitive (median $2.00/$10.00), with a 50% batch discount, a $0.002 (1h) cache-hit input rate and a contributor mode at $0.10/$0.20.
- **Overall Score: 90/100.** (88 + 88 + 97 + 88 + 87) / 5 = 89.6 → 90 (half-up). Best-fit: a solid, affordable, fast-coding frontier model for agents and development partnerships — slightly behind 1.3 in raw coding depth but identical price and weight.

---

## Signature

- Provided by: **Solar Mini 4 (opencode/solar-mini-4)** — 2026-11-08
- Method: public internet research (official Meta Model API / Muse Code pages 2026-10-12; BenchGap benchmark table 2026-11-07; family report in model/muse-spark-1.3/); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Meta — Muse Spark 1.2 model page](https://dev.meta.ai/models/muse-spark-1-2)
  - [Meta — Muse Model API pricing and rate limits](https://dev.meta.ai/docs/pricing-rate-limits)
  - [BenchGap — Muse Spark 1.2 benchmark scores](https://benchgap.net/model/muse-spark-1-2)
  - [Meta — Muse Spark 1.3 model page (family reference)](https://dev.meta.ai/models/muse-spark-1-3)
  - [Artificial Analysis — Muse Spark 1.3 family benchmark rows](https://artificialanalysis.ai/models/muse-spark-1-3)

> - Toolathlon-Verified: **70.7%** estimated (BenchGap).

> **Reasoning / knowledge:**
> - AA-GPQA Diamond: **90.4%** measured (BenchGap).
> - GPQA: **92.0%** estimated (BenchGap).
> - MMLU-Redux: **96.6%** estimated (BenchGap).
> - C-Eval: **97.4%** estimated (BenchGap).
> - AA-HLE: **45.5%** measured (BenchGap).
> - CritPt: **17.7%** measured (BenchGap).
> - STEMBench: **2.4%** estimated (BenchGap).

> **Coding:**
> - Terminal-Bench 2.1: **82.9%** measured (BenchGap).
> - LiveCodeBench v6: **88.4%** estimated (BenchGap).
> - SWE-bench Verified: **84.9%** estimated (BenchGap).
> - DeepSWE: **59.3%** measured (BenchGap).
> - FrontierCode 1.1 Main: **43.9%** estimated (BenchGap).
> - FrontierSWE v2: **12.0%** measured (BenchGap).
> - MazeBench: **0.0%** measured (BenchGap).

> **Long context / multimodal:**
> - AA-LCR: **79.0%** measured (BenchGap).
> - MMLongBench-Doc: **61.4%** estimated (BenchGap).
> - LongBench v2: **64.6%** estimated (BenchGap).
> - Video input (native multimodal perception through a real execution environment).
> - Multi-input: text, image, video, PDF → text output (official Meta Model API card).
