# Muse Spark 1.1 — findings by Mercury 3

- Source: Meta/Muse Spark 1.1
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.1
- **Short description:** Meta Superintelligence Labs' multimodal reasoning agentic model (released 2026-07-09, superseded by 1.2/1.3). Major gains over the original Muse Spark in tool use, computer use, coding, and multimodal understanding; very fast (263 t/s) at $1.25/$4.25.
- **Provider / access:** Meta Model API (public preview), Meta AI app / meta.ai; 2 API providers tracked by Artificial Analysis; OpenRouter `meta/muse-spark-1.1`.
- **Release / knowledge:** Released 2026-07-09; knowledge cutoff not published.
- **IDs:** `muse-spark-1.1` (Meta Model API; xhigh reasoning tier).
- **Context window:** 1,000,000 tokens (1M) total; max output not disclosed (131K per models.dev family block).
- **Modalities:** text + image + speech + video input, text output; reasoning (extended thinking); tool calls; MCP servers; subagent orchestration; context compaction.
- **Pricing (as of 2026-11-03):** $1.25 input / $4.25 output per 1M tokens, 88% cache discount (blended ~$0.78).
- **Architecture:** proprietary; parameter count undisclosed; not open-weights.

### Raw benchmarks found

Agent / tool use:

- MCP Atlas: **88.1%**; Toolathlon: **75.6%**; OSWorld-Verified: **80.8%**; WebArena-Verified: **69%**; DeepSearchQA: **84.9%**; JobBench: **54.7%**; Finance Agent v2: **57.2%** (Meta eval report)
- Terminal-Bench 2.1: **80.0%** (Meta) vs **69.3%** (Vals — conflicting harnesses); OSWorld 2.0: 14.2%
- Cybench: **92.9%**; CyberGym: **59.0%**; ExploitGym: 0.8%; GDPval-AA: **1375 Elo** (Meta; AA normalized 35.6%); AA Agentic Index: 27.5%

Reasoning / knowledge:

- HLE: **62.1%** with tools / 52.2% without (Meta) vs **46.2%** (AA); GPQA Diamond: **89.8%** (AA) vs **91.2%** (Vals); MMLU-Pro: 88.7% (Vals)
- MRCR 1M: **54.1%** (Meta); AA-LCR: **77.7%**; CritPt: **15.1%**
- Artificial Analysis Intelligence Index: **33.7%**; HealthBench Professional: 59.3%
- AA-Omniscience: accuracy 52.1%, hallucination rate 50.0%

Coding:

- SWE-bench Pro: **61.5%**; Terminal-Bench 2.1 80.0%; deepSWE: **53.3%** (Meta)
- SWE-bench: **82.0%**; LiveCodeBench: **85.9%** (Vals); AA-SciCode: **58.8%**; AA Coding Index: **71.3%**
- Meta Internal Coding Bench: **68.3%** (Meta internal)

Long context:

- 1M window; MRCR 54.1% @1M; AA-LCR 77.7%.

Multimodal:

- text/image/speech/video in; CharXiv 88.4%; BabyVision 76.3%; Design Arena 1269 Elo.

### Normalized scores (1–100)

- **Tool use: 86/100.** MCP Atlas 88.1%, OSWorld-Verified 80.8%, Toolathlon 75.6%, Cybench 92.9% — excellent agentic suite; capped by OSWorld 2.0 14.2%, Agentic Index 27.5%, and TB2.1 harness variance.
- **Reasoning: 84/100.** HLE 62.1% with tools is strong for the generation; capped by CritPt 15.1%, MRCR 54.1% @1M, and II 33.7.
- **Context window: 88/100.** 1M with MRCR 54.1% @1M and LCR 77.7% — moderate retrieval at depth.
- **Multimodal: 91/100.** Full omni input (text/image/speech/video) with strong chart reasoning (CharXiv 88.4%); text-only output caps it.
- **Coding: 84/100.** SWE-bench 82%, LiveCodeBench 85.9%, coding index 71.3%; capped by SWE-Pro 61.5% and deepSWE 53.3%.
- **Cost efficiency: 88/100.** $1.25/$4.25 with 88% cache discount — very competitive; superseded by 1.3 at same price.
- **Overall Score: 86.6/100.** Mean of (86+84+88+91+84)/5 = 86.6 → 87. A strong omni agentic model for its era; 1.2/1.3 are the clear upgrades.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (Meta Muse Spark 1.1 announcement + evaluation report, Artificial Analysis model page/leaderboards, BenchLM aggregation, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores. Conflicting harness results (TB2.1, HLE, GPQA) listed side by side.
- Reference URLs:
  - [Introducing Muse Spark 1.1 (Meta AI, 2026-07-09)](https://research.meta.ai/blog/introducing-muse-spark-meta-model-api)
  - [Muse Spark 1.1 Evaluation Report (Meta)](https://ai.meta.com/static-resource/muse-spark-1-1-evaluation-report)
  - [Muse Spark 1.1 — Artificial Analysis model page ($1.25/$4.25, 1M, omni input, 263 t/s)](https://artificialanalysis.ai/models/muse-spark-1-1)
  - [Muse Spark 1.1 — BenchLM benchmark aggregation](https://benchlm.ai/models/muse-spark-1-1)
  - [Muse Spark 1.1 — Vals AI model page](https://www.vals.ai/models/meta_muse_spark_1_1)
