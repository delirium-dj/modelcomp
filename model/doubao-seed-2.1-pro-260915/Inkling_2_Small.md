# Doubao Seed 2.1 Pro (260915) — findings by Inkling 2 Small

- Source: ByteDance/Seed (`doubao-seed-2-1-pro-260915`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Doubao Seed 2.1 Pro (260915)
- **Short description:** ByteDance Seed's flagship general-agent model of the Seed2.1 family, built for end-to-end coding delivery and high-value office/productivity tasks; the 260915 snapshot is the current Pro revision. Closed weights, hosted API only.
- **Provider / access:** Volcengine Ark (火山方舟) Model Plaza (`doubao-seed-2-1-pro`, CN region) and BytePlus Ark (SE Asia) — OpenAI-compatible Chat Completions / Responses; also relayed via third-party gateways (HopBase, OhMyGPT, AIHubMix). Thinks by default (thinking returned in `reasoning_content`); 260915 ignores `tool_choice` and does not support logprobs.
- **Release / knowledge:** Seed2.1 family officially released 2026-06-23 (ByteDance Seed blog); the `260915` Pro snapshot dates to 2026-09-15 (per Shaqiu community tracker, "发布日期 2026-09"). Knowledge cutoff not published.
- **IDs:** `doubao-seed-2-1-pro-260915` (Ark/HopBase catalog); OhMyGPT lists `bytedance/doubao-seed-2.1-pro-260915`. Sibling: `doubao-seed-2-1-pro-260628`.
- **Context window:** 1,048,576 tokens (1M); max output 256K; verified against the HopBase catalog export (2026-09-25) and the official 1M claim — output budget is generous but no published long-context retrieval verification at 512K+.
- **Modalities:** text / image / video in → text out; reasoning yes (default thinking on; Minimal/Low/Medium/High effort per SQBench listing); tool calling yes (but 260915 ignores `tool_choice`); structured output yes.
- **Pricing (as of 2026-11-13):** HopBase catalog: $0.8824 in / $4.41 out per 1M; cached input $0.1765. OhMyGPT: $0.876 in / $4.38 out. AIHubMix: $0.9295 in / $4.6475 out. Single-tier pricing; official Volcengine Ark pricing applies in CN region. Not free.
- **Architecture:** closed, undisclosed (MoE not confirmed; no parameter count published).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **71.0%** (official Seed2.1 evaluation table, Seed2.1 Pro)
- Agent Startup Bench (High-Economic-Value): **68.8** (official; above GPT-5.5's 68.1 and near Claude Opus 4.7's 62.3)
- Workspace Bench (High-Economic-Value): **53.0** (official; GPT-5.5 58.7, Opus 4.7 55.1)
- xDailyBench (White-Collar Office): **61.0** (official)
- NL2Repo-Bench (Long-Horizon End-to-End Code): **47.0** (official)
- ProgramBench (Long-Horizon E2E Code): reported **0/1/50.3** (official harness; format as printed)
- SWE-Atlas Debugging: **35.2** (official)
- MobileWorld: highest score among participating models (official claim; no number published)
- Claw-Eval: competitive on visual-agent variant (official claim; no number published); Claw-Eval (MM) referenced in blog
- SQBench (High, independent, Shaqiu): **42.2%** practical-delivery pass rate, **#35/45**; reliability 77.13%; hallucination 7.2%; 25.99 USD / 24.6 h / 34.07M tokens to run (independent, 2026-09/10)

Reasoning / knowledge:

- BeyondAIME: **87.0** (official; vs Opus 4.7 79.0, GPT-5.5 91.0)
- SuperGPQA: **70.8** (official; vs GPT-5.5 72.7, Gemini 3.1 Pro 76.6)
- KINA: **48.3** (official; vs GPT-5.5 52.6)
- SciCode / FrontierScience-Olympiad: "performs well" (official blog; no number in the table)
- GPQA Diamond / HLE / CritPt / Artificial Analysis Intelligence Index: no verified public score found

Coding:

- Terminal-Bench 2.1: **71.0** (see Agent)
- ProgramBench: **0/1/50.3** as printed (official)
- NL2Repo-Bench: **47.0** (official)
- Code Arena: Frontend — **#8, score 1539** (official blog, Seed2.1 Preview; top-10 in 5 of 7 frontend subcategories)
- SQBench dynamic code logic: **84** (Shaqiu sub-score for the 260915 snapshot, High)
- LiveCodeBench / SWE-bench Verified: no verified public score found

Long context:

- MMLongBench-128K (MultiModal Long-Context): **78.3** (official)
- 1M context; no verified public MRCR/RULER-class text-only long-context retrieval score found

Multimodal:

- MMMU-Pro (w. Tool): **81.6 (82.7 w/o? as printed "81.6 (82.7)")** (official)
- MathVision (w. Tool): **92.6 (94.5)** (official)
- VideoMME: **89.2** (official); TOMATO: **79.5**; MinervaVideo Reasoning: **70.7**; OVOBench (Streaming): **80.7**; VideoSimpleQA: **76.4**
- CharXiv-RQ (w. Tool): **85.4 (86.4)** (official); ERQA (Spatial): **72.0**; WorldVQA: **53.0**; BabyVision (Perception): **73.7**; ZEROBench (w. Tool): **18.0 (22.0)**

### Normalized scores (1–100)

- **Tool use: 72/100.** TB2.1 71.0 with Agent Startup Bench 68.8 and MobileWorld top marks, but SQBench practical delivery only 42.2 (#35/45) and SWE-Atlas 35.2 — strong tool-native coding, inconsistent real-world delivery.
- **Reasoning: 72/100.** BeyondAIME 87.0 and SuperGPQA 70.8 are solid mid-frontier; KINA 48.3 lags GPT-5.5/Gemini 3.1 Pro; no GPQA/HLE/AA-Index corroboration.
- **Context window: 92/100.** 1M-token window with 256K max output and MMLongBench-128K 78.3; no verified ≥512K retrieval, so below the ceiling.
- **Multimodal: 88/100.** Deep video + document coverage (VideoMME 89.2, MMMU-Pro 81.6, MathVision 92.6, CharXiv-RQ 85.4); text-out only, no image generation.
- **Coding: 68/100.** TB2.1 71.0 and Code Arena Frontend #8 (1539) show real engineering strength; NL2Repo 47.0 and SWE-Atlas 35.2 plus SQBench's 42.2 cap it below frontier.
- **Cost efficiency: 88/100.** ~$0.88 in / $4.41 out per 1M with $0.18 cached — cheaper than most frontier flagships; fits the ~$1-class price band.
- **Overall Score: 78/100.** (72+72+92+88+68)/5 = 78.4 → 78. Best fit: cost-efficient agentic coding and Chinese-ecosystem office/multimodal workflows on Volcengine Ark; treat SQBench's real-world delivery signal as the caution flag before unattended long-horizon runs.

---

## Signature

- Provided by: **Inkling 2 Small (thinkingmachines/inkling-2-small)** — 2026-11-13 UTC
- Method: public internet research; web search returned HTTP 402 (quota), so the fallback ladder was used — one simpler retry (402 again), then direct `webfetch` of DuckDuckGo HTML results, the official ByteDance Seed Seed2.1 page, the Seed2.1 release tech blog, and third-party catalogs/evaluations (HopBase pricing catalog, Shaqiu SQBench). No local repository files were used as evidence; no peer reports were read. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [ByteDance Seed: Seed2.1 overview and evaluation results](https://research.doubao.com/en/seed2_1)
  - [Seed2.1 Officially Released: Advancing AI Productivity (tech blog, 2026-06-23)](https://research.doubao.com/en/blog/seed2-1-officially-released-advancing-ai-productivity)
  - [Seed models catalog (Seed2.1 Pro/Turbo)](https://research.doubao.com/en/models)
  - [HopBase catalog: doubao-seed-2-1-pro-260915 (pricing, 1M ctx, 256K out)](https://hop-base.com/en/docs/models/doubao-seed-2-1-pro-260915)
  - [Shaqiu (沙丘社区) SQBench: Doubao-Seed-2.1-pro-260915 (High) — independent evaluation](https://www.shaqiu.cn/models/doubao-seed-2-1-pro-260915-high)
- Future sources: add a new file next to this one, e.g. `Inkling_2_Small_2.md`, using the same headings.
