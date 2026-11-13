# Doubao Seed 2.1 Pro (260915) — findings by DeepSeek 4.1 Flash

- Source: ByteDance Seed / Doubao Seed 2.1 Pro (260915 build)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Doubao Seed 2.1 Pro (260915)
- **Short description:** ByteDance Seed's flagship multimodal agent model — text, image and video (incl. hour-long video) in, text out — tuned for real-world productivity, code delivery, GUI tasks and deep thinking. This folder tracks the September 2026 build (`doubao-seed-2-1-pro-260915`), which raised the context window from 256K to 1M; still proprietary.
- **Provider / access:** Volcano Engine Ark API (China, CNY billing; recommended ID `doubao-seed-2-1-pro-260915`); also the Doubao app and ByteDance's TRAE tools; resold by TeamoRouter (`doubao-seed-2.1-pro`). BytePlus/OpenRouter carry only the Turbo tier. No OpenCode Zen route.
- **Release / knowledge:** family launched 2026-06-23; 260915 build = September 2026 update; knowledge cutoff 2025-12 (per tracker).
- **IDs:** `doubao-seed-2-1-pro-260915` (Volcano Engine; prior build `doubao-seed-2-1-pro-260628`); `doubao-seed-2.1-pro` (TeamoRouter).
- **Context window:** 1,024K total; max output 256K (Volcano default 4K); max reasoning 256K.
- **Modalities:** text, image, video in; text out; deep thinking (256K reasoning budget); tool calling; structured output; GUI/computer task support.
- **Pricing (as of 2026-11-13):** ¥6 in / ¥30 out per 1M (≈$0.86/$4.29 at ¥7/USD), cached input ¥1.20; batch or low-priority tier ¥3/¥15. ByteDance publishes no US-dollar price for Pro.
- **Architecture:** undisclosed; proprietary, no weights published (parameter count not disclosed even in the 73-page model card per coverage).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **71.0%** (vendor-reported; #46 of 65 on the LLMLearner tracker)
- Agent Startup Bench: **68.8** (vendor-reported)
- Workspace Bench: **53.0** (vendor)
- xDailyBench: **61.0** (vendor)
- Agents' Last Exam v1.1: **41.4%** (Benchgen)
- Long-horizon demo (vendor): ~18-hour chip-design agent run across nine iterations
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **89.3%** (Epoch AI run via OpenCharts; ~47th percentile of 96)
- Mock AIME 2024–2025: **95.6%** (Epoch AI run; #38 of 98)
- SimpleQA Verified: **44.7%** (Epoch AI run; #46 percentile of 75)
- Chess Puzzles: **21.0%** (Epoch AI run; 59th of 76 — weak spatial/planning probe)
- SuperGPQA: **70.8**; BeyondAIME 87.0 (vendor)
- OpenCharts Index: **57.4 (C-)**, provisional — 5 comparable tests, 0 hard-set results; drop-one range 44.6–66.4

Coding:

- Terminal-Bench 2.1: **71.0%** (vendor; DeepSeek V4 Pro 72.1)
- SciCode: **59.8** (#11 of 98, LLMLearner)
- SWE-Atlas (Debugging): **35.2** (vendor)
- NL2Repo-Bench: **47.0**; ProgramBench: 0/1/50.3 split (vendor)
- Code Arena WebDev: **1519–1520** (independent; ~#55 by late October, vs 1539 Frontend #8 at the June preview launch)
- AetherCode: **65.8%** (Benchgen)

Multimodal / long context:

- MathVision (w. tool): **94.5** (#4 of 10) | MMMU-Pro (w. tool): **82.7** (#16 of 132)
- CharXiv-RQ (w. tool): **86.4** | WorldVQA 53.0 | ERQA 72.0 | BabyVision 73.7
- Video: VideoMME **89.2**, TOMATO 79.5, Minerva 70.7, OVOBench 80.7, VideoSimpleQA 76.4 (vendor — class-leading video understanding claims)
- MMLongBench-128K: **78.3** (vendor); no independent MRCR/RULER table

### Normalized scores (1–100)

- **Tool use: 73/100.** Vendor-run TB2.1 71% and Agent Startup Bench 68.8 with long-run agent demos; capped by thin independent agent coverage and mid workspace scores.
- **Reasoning: 75/100.** Independently confirmed GPQA 89.3% and AIME 95.6%, but 40–50% behind the best published results on average (Chess 21, SimpleQA 44.7) and a provisional C- index keep it mid-tier on hard reasoning.
- **Context window: 95/100.** 1M-token tier (Sept build) with a 256K output/reasoning ceiling; no retrieval-depth table to reach 100.
- **Multimodal: 85/100.** Text, image and video input with top-decile document/chart/video results (MathVision 94.5, CharXiv 86.4, VideoMME 89.2); mostly vendor-reported and no generation output.
- **Coding: 73/100.** SciCode 59.8 and TB2.1 71 are solid, but SWE-Atlas 35 and a Code Arena WebDev slide to ~#55 show frontier-hard coding delivery is not its strength.
- **Cost efficiency: 86/100.** ≈$0.86/$4.29 per 1M with ¥1.20 cached input and a ¥3/¥15 batch tier is well-priced for a 1M-context multimodal flagship; CNY-only billing and no USD list are the friction.
- **Overall Score: 80/100.** (73 + 75 + 95 + 85 + 73) / 5 = 80.2 — a strong China-market agent/vision workhorse for long-context and multimodal productivity work; its edge thins on frontier-hard reasoning and coding.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-11-13
- Method: public internet research (ByteDance Seed official Seed2.1 page, TeamoRouter API guide, Fello AI review, OpenCharts independent tracker with Epoch AI runs, Benchgen, LLMLearner). The websearch tool was unavailable (HTTP 402) this run; research used direct page fetches only — every cited URL was actually fetched.
- Reference URLs:
  - [ByteDance Seed — Seed2.1 official page (model performance & evaluation results)](https://seed.bytedance.com/en/seed2_1)
  - [TeamoRouter — Doubao Seed 2.1 Pro API: pricing, context window, model ID](https://teamorouter.com/blogs/doubao-seed-2-1-pro-api)
  - [Fello AI — Seed 2.1 Pro review: ByteDance's model, price and Arena rank](https://felloai.com/seed-2-1-pro/)
  - [OpenCharts — Doubao Seed 2.1 Pro benchmarks (independent)](https://www.opencharts.com/benchmarks/doubao-seed-2-1-pro)
  - [Benchgen — Seed 2.1 Pro model card](https://benchgen.com/models/bytedance/seed-2-1-pro)
  - [LLMLearner — Seed2.1 Pro benchmarks & specs](https://llmlearner.com/models/seed-2-1-pro)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
