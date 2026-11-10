# Kimi K3 — findings by Solar_Mini_4

- Source: Moonshot AI (`kimi-k3`), official pricing page `https://www.kimi.ai/resources/kimi-k3-pricing`; benchmarks Artificial Analysis model page (`https://artificialanalysis.ai/models/kimi-k3`) and launch details (`https://artificialanalysis.ai/articles/kimi-k3-1-pro-launch-benchmarks` — K3 is the predecessor of K3.1 Pro), BenchGap 2026-11-07 (`https://benchgap.net/model/kimi-k3`), llm-stats (`https://llm-stats.com/models/kimi-k3`).
- Date: 2026-11-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3 (Moonshot AI)
- **Short description:** Moonshot AI's flagship 3T-class open-weight model ("world's first open 3T-class model"): a 2.8T-parameter MoE with 104B active, built for long-horizon coding, knowledge work and reasoning, with native vision and a 1M-token context window. Released July 2026; predecessor of Kimi K3.1 Pro (October 2026).


### Raw benchmarks found

> Sources: BenchGap benchmark table as of 2026-11-07 (`https://benchgap.net/model/kimi-k3`) — measured vs estimated noted; Artificial Analysis Kimi K3 (max) model page (July 16, 2026); official Moonshot AI pricing page (2026-10-27). Kimi K3 is the predecessor of Kimi K3.1 Pro (October 2026).

> **Tool use / agentic:**
> - τ²-bench results: **95.7%** estimated (BenchGap).
> - AA Coding Index: **76.2%** measured (BenchGap).
> - Terminal-Bench 2.1: **88.3%** measured (BenchGap).
> - DeepSWE: **67.5%** measured (BenchGap).
> - MCP Atlas: **84.2%** estimated (BenchGap).
> - SWE-Marathon: **42.0%** measured (BenchGap).

> **Reasoning / knowledge:**
> - AA-GPQA Diamond: **93.5%** measured (BenchGap).
> - MMLU-Redux: **96.9%** estimated (BenchGap).
> - SuperGPQA: **94.6%** estimated (BenchGap); C-Eval: **98.6%** estimated.


### Normalized scores (1–100)

- **Tool use: 90/100.** τ²-bench 95.7% estimated and AA Coding Index 76.2% measured are strong; Terminal-Bench 2.1 88.3% measured plus MCP Atlas 84.2% and DeepSWE 67.5% measured confirm agentic tool use is a family strength. Cap: FrontierCode 1.1 Main 43.6% estimated and MazeBench 1.0% (deep-research tasks).
- **Reasoning: 88/100.** Elite knowledge — GPQA Diamond 93.5% measured, MMLU-Redux 96.9%, SuperGPQA ~95% and C-Eval 98.6% estimated; HLE 56.0% measured and CritPt 23.4% measured show strong but not frontier reasoning. Cap: STEMBench 2.4% estimated, AA-HLE 46.9% measured and the always-on high-effort thinking consumption.
- **Context window: 96/100.** 1M input (1,048,576) tokens with up to 1M-chat capacity on Max/Ultra memberships; AA-LCR 88.7% measured and MMLongBench-Doc 61.8% estimate real long-context retrieval.
- **Multimodal: 84/100.** Text + image input only (native vision); Video-MME 90.8%/86.3%, VideoMMMU 87.6% and MLVU 89.2% estimated confirm strong visual understanding — but no audio or video output, fixing the ceiling.
- **Coding: 91/100.** Terminal-Bench 2.1 88.3% measured, LiveCodeBench v6 89.8% estimated, SWE-bench Verified 81.2% estimated and DeepSWE 67.5% measured are elite; ProgramBench 77.8% estimated backs code reasoning. Cap: FrontierCode 1.1 Main 43.6% estimated, FrontierSWE v2 25.9% measured and MazeBench 1.0% (hard frontier tasks).
- **Cost efficiency: 66/100.** $3/$15 per 1M is expensive on both input and output (median $0.47/$1.97); 90% cache-read discount and the 33%-cheaper successor K3.1 Pro improve the picture at the margin.
- **Overall Score: 90/100.** (90 + 88 + 96 + 84 + 91) / 5 = 89.8 → 90 (half-up). Best-fit: a pioneer open-weights flagship — the first 3T-class open model, top-5 on the Intelligence Index and best-in-class at its release, at a full-parity cost disadvantage vs the closed-lab models.

---

## Signature

- Provided by: **Solar Mini 4 (opencode/solar-mini-4)** — 2026-11-08
- Method: public internet research (official Moonshot AI/Kimi K3 pricing page 2026-10-27; Artificial Analysis Kimi K3 model page Jul 2026; Artificial Analysis K3.1 Pro launch article 2026-10-23; BenchGap 2026-11-07 benchmark table; llm-stats); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Moonshot AI — Kimi K3 Pricing](https://www.kimi.ai/resources/kimi-k3-pricing)
  - [Artificial Analysis — Kimi K3 (Max) model page](https://artificialanalysis.ai/models/kimi-k3)
  - [Artificial Analysis — Kimi K3.1 Pro launches at 4th on the Intelligence Index](https://artificialanalysis.ai/articles/kimi-k3-1-pro-launch-benchmarks)
  - [BenchGap — Kimi K3 benchmark scores](https://benchgap.net/model/kimi-k3)
  - [LLM Stats — Kimi K3](https://llm-stats.com/models/kimi-k3)

> - HLE: **56.0%** measured (BenchGap); AA-HLE: **46.9%** measured.
> - CritPt: **23.4%** measured (BenchGap).
> - STEMBench: **2.4%** estimated (BenchGap) — very weak measured result.
> - GPQA: **93.5%** measured; Vals GPQA Diamond: **92.9%** measured.

> **Coding:**
> - LiveCodeBench v6: **89.8%** estimated (BenchGap).
> - SciCode: **51.1%** estimated (BenchGap).
> - SWE-bench Verified: **81.2%** estimated (BenchGap).
> - DeepSWE: **67.5%** measured (BenchGap).
> - ProgramBench: **77.8%** estimated (BenchGap).
> - FrontierCode 1.1 Main: **43.6%** estimated (BenchGap).
> - Terminal-Bench 2.1: **88.3%** measured (BenchGap).

> **Long context / multimodal:**
> - AA-LCR: **88.7%** measured (BenchGap).
> - MMLongBench-Doc: **61.8%** estimated (BenchGap).
> - Video-MME (with subtitle): **90.8%** estimated; Video-MME (w/o subtitle): **86.3%** estimated.
> - VideoMMMU: **87.6%** estimated (BenchGap); MLVU (M-Avg): **89.2%** estimated.
> - MMMU: **86.7%** estimated; MMMLU: **91.1%** estimated.
> - Multi-input: text and image only; no audio/video output (official Kimi / AA).

- **Provider / access:** Moonshot AI — Kimi web, Kimi Work, Kimi Code, Kimi API; open-weight weights on Hugging Face (Kimi K3 Licence, commercial use with restrictions).
- **Release / knowledge:** Released July 16, 2026 (Artificial Analysis model page); membership pricing page updated 2026-10-27. Knowledge cutoff not disclosed in accessible official docs.
- **IDs:** `kimi-k3` (Kimi API); weights on Hugging Face.
- **Context window:** 1,048,576 input tokens (1M), with up to 1M-chat capacity on Max/Ultra membership plans.
- **Modalities:** Text and image input; text output. Always reasons; reasoning_effort low / high / max.
- **Pricing (as of 2026-11-08):** Standard API — $3/MTok input (cache miss), $0.30/MTok input (cache hit), $15/MTok output; 90% cache-read discount (Artificial Analysis: $2.31 blended). Highspeed not published for K3 (K3.1 Pro Highspeed: $4/$20).
- **Architecture:** Proprietary MoE — 2.8T total parameters, 104B active; weights open (Kimi K3 Licence).
