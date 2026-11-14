- Source: Moonshot AI/Kimi K2.6
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.6
- **Short description:** Moonshot AI's 2026-04-20 open-weight flagship, focused on long-horizon coding and autonomous agent execution, with support for **300-agent clusters** and the "Claw Groups" heterogeneous agent ecosystem. A distinct model; Kimi K2.5 is its predecessor and Kimi K3 its successor. The Preview→GA cycle was compressed to 8 days to fit an IPO window.
- **Provider / access:** Fully open weights ("open source + enterprise agent cluster" dual-track model), plus Kimi API and private/enterprise agent-cluster solutions; third-party platforms. OpenRouter usage.
- **Release / knowledge:** 2026-04-20; knowledge cutoff: no verified public score found.
- **IDs:** `kimi-k2.6` family ID as cited. No free Zen ID verified.
- **Context window:** no verified token figure in the retrieved pages — no verified public score found. A secondary CSDN review reports a **256K** RULER long-context test, which is a test length, not a model window.
- **Modalities:** text in, text out (described as a native multimodal agent model in secondary coverage); coding, long-horizon task execution and agent clusters. No verified image/audio/video input for this exact ID in the retrieved sources.
- **Pricing (as of 2026-11-14):** a **structured increase to API input pricing** at launch (secondary coverage cites a **58%** increase) — reported as a relative change, not a rate card; no verified public price found. Open weights allow free self-hosting.
- **Architecture:** MoE, **1 trillion total / 32B active** parameters, **61 layers**, **384 experts** with **8 routed + 1 shared** expert per token (secondary launch coverage, labelled as such). Long-horizon coding/agent RL focus.

### Raw benchmarks found

Agent / tool use:

- **300** concurrent agents in a coordinated cluster with long-horizon task execution; "Claw Groups" heterogeneous agent collaboration
- DeepSearchQA accuracy: **83%** (secondary 什么值得买 review, labelled secondary)
- Demonstrated **12-hour** stable continuous runs without collapse (secondary, qualitative)
- Benchmarked against GPT-5.4, Claude Opus 4.6 and Gemini 3.1 Pro at launch (directional; no per-benchmark numbers in the retrieved pages)
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- RULER long-context at 256K: **96.3%** (secondary CSDN review; comparands GPT-4o 82.1%, Claude 3.7 89.7%) — labelled secondary, harness named
- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found for this exact ID

Coding:

- SWE-Bench Pro: **58.6%**, reported as #1 among open models at the time (secondary 什么值得买 review, labelled secondary)
- SWE-Bench Pro and Terminal-Bench were the headline launch comparisons (Tencent Cloud coverage; no Terminal-Bench figure in the retrieved excerpt)
- LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE / FrontierSWE: no verified public score found

Long context:

- RULER 256K **96.3%** (secondary) as above; no vendor-verified window or MRCR / GraphWalks figure found

Launch incidents (context, not scored): an overload-driven service outage on 2026-04-22 led to a full quota reset for all users.

### Normalized scores (1–100)

- **Tool use: 86/100.** 300-agent cluster coordination, 83% DeepSearchQA and 12-hour stable autonomous runs with a purpose-built Claw Groups ecosystem; capped by those figures being secondary and no scored τ-bench/OSWorld/GDPval result.
- **Reasoning: 82/100.** A strong 96.3% RULER 256K result (secondary) and 1T-parameter MoE; capped by no GPQA/HLE/AA index figure and no vendor-published reasoning benchmark.
- **Context window: 90/100.** 96.3% at 256K RULER plus long-horizon agent training; capped by no verified token window and no vendor-verified retrieval benchmark.
- **Multimodal: 78/100.** Scored conservatively: the retrieved primary sources document text-based coding/agent work; "native multimodal" appears only in secondary coverage and is not verified here, so no higher score is justified.
- **Coding: 87/100.** SWE-Bench Pro 58.6% (#1 open at the time, secondary) and a long-horizon coding focus; capped by the figure being secondary and no Terminal-Bench number.
- **Cost efficiency: 82/100.** Free open weights for self-hosting and 32B active params from 1T total; capped by a reported 58% API input-price increase and no verifiable rate card. Excluded from Overall.
- **Overall Score: 85/100.** Half-up mean of 86, 82, 90, 78, 87 = 84.6 → 85. Best fit: self-hosted, large-scale multi-agent long-horizon coding clusters; superseded in raw capability by Kimi K3 / K3.1 Pro.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Kimi K2.6 article retrieved via public web search excerpt (release, 300-agent clusters, Claw Groups, open weights, structured API price increase, launch outage), plus secondary launch/review coverage for the 1T/32B MoE architecture, SWE-Bench Pro 58.6%, DeepSearchQA 83%, 12-hour runs and RULER 256K 96.3% — all explicitly labelled secondary, never vendor scores. Comparison models (GPT-5.4, Claude Opus 4.6, Gemini 3.1 Pro) are named only as comparands. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved this pass.
  - [Kimi K2.6 — 百度百科 (retrieved via search excerpt; release, agent clusters, open weights, pricing)](https://baike.baidu.com/item/Kimi%20K2.6/67652597)
  - [Kimi K2.6 开源直逼 GPT-5.4 — 新浪财经 (retrieved via search excerpt; 58% price increase)](http://finance.sina.com.cn/cj/2026-04-21/doc-inhvheze6832673.shtml)
