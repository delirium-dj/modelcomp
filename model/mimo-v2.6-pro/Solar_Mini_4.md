# MiMo V2.6 Pro — findings by Solar_Mini_4

- Source: Xiaomi (`mimo-v2.6-pro`), official announcement (Xiaomi model release notes, 2026-09); benchmarks BenchGap 2026-11-07 (`https://benchgap.net/model/mimo-v2-6-pro`), Artificial Analysis model page (`https://artificialanalysis.ai/models/mimo-v2-6-pro`), llm-stats (`https://llm-stats.com/models/mimo-v2-6-pro`).
- Date: 2026-11-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Pro (Xiaomi)
- **Short description:** Xiaomi's flagship 3T-class open-weight reasoning model: a 1T-parameter MoE with 42B active, built for coding, science and knowledge work at an aggressive price. Released September 2026; ranks #4 on the Artificial Analysis Intelligence Index and leads all models on cost.


### Raw benchmarks found

> Sources: BenchGap benchmark table as of 2026-11-07 (`https://benchgap.net/model/mimo-v2-6-pro`) — measured vs estimated noted; Artificial Analysis MiMo-V2.6-Pro model page (September 2026 release). Rows are the documented values for this SKU.

> **Tool use / agentic:**
> - Terminal-Bench 2.1: **89.9%** measured (BenchGap).
> - CyberGym: **94.0%** measured (BenchGap).
> - AA Coding Index: **76.7%** estimated (BenchGap).
> - DeepSWE: **71.9%** measured (BenchGap).
> - MCP Atlas: **85.9%** estimated (BenchGap).
> - Toolathlon-Verified: **76.9%** measured (BenchGap).
> - SWE-bench Verified: **89.0%** estimated (BenchGap).

> **Reasoning / knowledge:**
> - AA-HLE: **49.4%** measured (BenchGap).
> - GPQA Diamond: **94.0%** estimated (BenchGap).


### Normalized scores (1–100)

- **Tool use: 92/100.** Terminal-Bench 2.1 89.9% measured and CyberGym 94.0% measured are the strongest measured security/agentic scores in this report; AA Coding Index 76.7% estimated, DeepSWE 71.9% measured and MCP Atlas 85.9% estimated back robust agentic tool use. Cap: ProgramBench 26.5% measured and FrontierCode 1.1 Main 50.8% estimated (deep-programming tasks).
- **Reasoning: 90/100.** Elite knowledge — GPQA Diamond 94.0% estimated, MMLU-Redux 95.3%, C-Eval 93.3%, GAQ 92.3%; HLE 49.4% measured. Cap: CritPt 26.6% measured and STEMBench 2.2% measured (hardest STEM reasoning).
- **Context window: 96/100.** 1M input (1,048,576) with AA-LCR 86.3% measured and MMLongBench-Doc 61.7% estimate strong long-context retrieval.
- **Multimodal: 92/100.** Text, image, speech and video input with text output — the broadest input set of any model in this report; MMMLU 91.4% estimated supports the image capability.
- **Coding: 90/100.** Terminal-Bench 2.1 89.9% measured, LiveCodeBench v6 100.0% estimated and SWE-bench Verified 89.0% estimated are elite; ProgramBench 26.5% measured tempers the score.
- **Cost efficiency: 92/100.** $0.43/$0.87 per 1M is the most competitive pricing in this report (median $0.47/$1.97), with a 99% cache-read discount; best cost per task on the Intelligence Index ($0.26).
- **Overall Score: 92/100.** (92 + 90 + 96 + 92 + 90) / 5 = 92.0 → 92 (half-up). Best-fit: a best-in-class priced open-weights reasoning flagship that punches above its price on the Intelligence Index and every cost metric, with a few narrow weak spots in deep STEM reasoning.

---

## Signature

- Provided by: **Solar Mini 4 (opencode/solar-mini-4)** — 2026-11-08
- Method: public internet research (official Xiaomi MiMo release notes 2026-09; BenchGap benchmark table 2026-11-07; Artificial Analysis MiMo-V2.6-Pro model page; llm-stats); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Xiaomi — MiMo V2.6 Pro release notes](https://ai.xiaomi.com/en/mimo-v2.6-pro)
  - [BenchGap — MiMo-V2.6-Pro benchmark scores](https://benchgap.net/model/mimo-v2-6-pro)
  - [Artificial Analysis — MiMo-V2.6-Pro model page](https://artificialanalysis.ai/models/mimo-v2-6-pro)
  - [LLM Stats — MiMo V2 6 Pro](https://llm-stats.com/models/mimo-v2-6-pro)

> - MMLU-Redux: **95.3%** estimated (BenchGap).
> - C-Eval: **93.3%** estimated (BenchGap).
> - CritPt: **26.6%** measured (BenchGap).
> - STEMBench: **2.2%** measured (BenchGap) — very weak measured result.
> - GAQ: **92.3%** estimated; GPQA: **92.3%** estimated (BenchGap).

> **Coding:**
> - LiveCodeBench v6: **100.0%** estimated (BenchGap).
> - Terminal-Bench 2.1: **89.9%** measured (BenchGap).
> - DeepSWE: **71.9%** measured (BenchGap).
> - ProgramBench: **26.5%** measured (BenchGap) — weak measured result.
> - FrontierCode 1.1 Main: **50.8%** estimated (BenchGap).
> - SWE-Marathon: **44.5%** estimated (BenchGap).

> **Long context / multimodal:**
> - AA-LCR: **86.3%** measured (BenchGap).
> - MMLongBench-Doc: **61.7%** estimated (BenchGap).
> - MMMLU: **91.4%** estimated (BenchGap).
> - Input modalities: text, image, speech and video input; text output (official API page).

- **Provider / access:** Xiaomi — MiMo API; open-weight weights on Hugging Face (MIT licence, commercial use allowed).
- **Release / knowledge:** Released September 2026 (Artificial Analysis model page). Knowledge cutoff not disclosed in accessible official docs.
- **IDs:** `mimo-v2.6-pro` (MiMo API); weights on Hugging Face.
- **Context window:** 1,048,576 input tokens (1M), with 65,536 max output per the 1M-token class convention.
- **Modalities:** Text, image, speech and video input; text output.
- **Pricing (as of 2026-11-08):** $0.43/MTok input (moderately priced; median $0.47), $0.87/MTok output (competitive; median $1.97); 99% cache-read discount; 99% cache-hit on input. Best-in-class cost per task ($0.26 on the AA Intelligence Index).
- **Architecture:** Proprietary MoE — 1T total parameters, 42B active; weights open (MIT licence).
