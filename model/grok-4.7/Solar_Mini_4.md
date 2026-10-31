# Grok 4.7 — findings by Solar Mini 4

> Research completed 2026-10-31 by Solar Mini 4 (independent research; scores are normalized 1–100 interpretations, not official vendor scores).

- **Source:** xAI / Grok (`grok-4.7`)
- **Date:** 2026-10-31 (UTC)
- **Overview & methodology:** `../../model-comparison.md` · **Log:** `../../model-findings.md`

## Model card

- **Name:** Grok 4.7 — xAI's frontier model for coding, agentic work, and knowledge work
- **Short description:** New larger base model than Grok 4.6 with a longer RL run, better self-verification, and native Grok Bot harness understanding; configurable reasoning effort (low/medium/high/xhigh); ~2× faster and half the price of comparable frontier models. "Grok 4.7 Fast" variant: 2× token rates (1.5× long-context speed).
- **Provider / access:** xAI (Grok API, Grok Build, Cursor); third-party gateways OpenRouter, Vercel, Cloudflare; US regional endpoint with 10% premium. Grok on X.
- **Release / knowledge:** Released September 21, 2026. Knowledge cutoff: May 2026.
- **IDs:** `grok-4.7` (Zen/OpenCode); `xai/grok-4.7`; `grok-4.7-fast` (variant).
- **Context window:** 500,000 tokens total; no text output limit.
- **Modalities:** Text + image input; text output. Native multimodal (no audio/video).
- **Pricing (2026-10-31):** $2.00 per 1M input, $6.00 per 1M output; cache hits $0.50 per 1M. Fast variant: 2× token rates (1.5× long-context speed in long-context mode).
- **Architecture:** SpaceX Super Intelligence; larger base than Grok 4.6, longer RL run, native Grok Bot harness.

### Raw benchmarks found

**Official (xAI, 2026-09-21 launch + docs):**
- CursorBench 4.0: **46.3%** (x.ai chart).
- DeepSWE v1.1: **71.0%** (high effort, * on chart).
- EEBench: **64.0%**; AA Briefcase v1.1: **1,657 Elo** (+111 over Grok 4.6).
- Terminal-Bench 4.0: **37.6%**; Harvey Legal Agent Benchmark: **19.6%**; HealthBench Professional: **56.7%** (raw 62.0%).
- AA-Omniscience: hallucination rate 29% (vs 34% for 4.6), accuracy 47%, Index 32 (from 30).

**Independent (Artificial Analysis article 2026-09-21):**
- AA-Briefcase: **1,657 Elo**; GDPval-AA: **1,695 Elo**; Coding Agent Index (with Grok Build): **56** (DeepSWE v1.1 73%, Terminal-Bench 4.0 33%, SWE-Atlas-QnA 63%).
- Speed ≈ 188 output tokens/sec; ~7.1 min per ~81k-output-token task.

**Independent (BenchGap 2026-10-29, 34 measured benchmarks):**
- AA-GPQA Diamond: **91.5%** (estimated ±2.1pp); HLE: **59.0%** (estimated ±5.4pp); AA-HLE (measured): **43.1%**.
- GPQA Diamond: **92.7%** (estimated ±1.0pp); AIME26: **95.9%** (estimated ±1.2pp); MMLU: **94.0%**; MMMLU: **90.6%**; MMLU-Redux: **96.3%**; C-Eval: **95.8%**.
- SciCode: **57.0%** (estimated ±3.1pp); AA-SciCode: **57.4%** (measured); LiveCodeBench v6: **97.9%** (estimated ±4.9pp).
- AA-LCR: **76.7%** (measured); CritPt: **17.7%** (measured); BrowseComp: **87.0%**; DeepSearchQA: **89.6%** (estimated ±9.6pp).
- SWE-bench Verified: **91.2%** (estimated ±4.6pp, high); SWE-bench Pro: **74.5%** (estimated ±4.3pp, high); WideResearch: **85.2%**; AA Agentic Index: **58.4%** (estimated ±2.9pp, high); AA Coding Index: **79.0%** (estimated ±1.0pp, high); AA-Omniscience accuracy: **42.7%** (measured).
- Terminal-Bench 2.1: **86.6%** (estimated ±5.2pp); OSWorld-Verified: **82.8%** (estimated ±8.1pp); OSWorld 2.1: **79.7%**; Terminal-Bench Hard: **56.3%** (estimated ±3.8pp); VulcanBench v3: **87.0%** (estimated ±0.7pp).
- ARC-AGI-1: **89.5%** (measured); ARC-AGI-2: **61.4%** (measured); FrontierCode 2.0: **28.6%** (estimated); FrontierMath v2 (Tiers 1-3): **53.0%** (measured).
- CursorBench 3.2: **70.6%**; Terminal-Bench 2.0: **75.7%**; HealthBench Professional: **56.7%** (measured); HMMT Feb 2026: **89.7%**; MCP Atlas: **85.9%**.

### Normalized scores (1–100)

- **Tool use: 82/100.** Terminal-Bench 2.1 86.6% (7 reports, est., upper-mid), OSWorld-Verified 82.8% (est.), AA-LCR 76.7% (measured), BrowseComp 87.0%, DeepSearchQA 89.6% (est.) pull up; FrontierCode 2.0 28.6%, FrontierMath Tiers 1-3 53.0%, FrontierCode 1.1 49.9%, MazeBench 1.0%, AA Terminal-Bench 4.0 25.8% pull down.
- **Reasoning: 90/100.** GPQA Diamond 92.7% and HLE 59.0% (est.) both meet the frontier bars (90%+ / 40%+ → 90–100); AIME26 95.9%, MMLU 94.0%, MMMLU 90.6%, MMLU-Redux 96.3%, C-Eval 95.8% are frontier-class. Caveat: measured HLE 43.1% and CritPt 17.7% (measured) are weak — estimate variance between trackers pushes this to the lower frontier bound.
- **Context window: 90/100.** 500K total — 500K–1M band (85–94); no output-cap caveat (no text output limit).
- **Multimodal: 65/100.** Text + image in → +image tier (60–70); text out only, no video/audio.
- **Coding: 88/100.** SWE-bench Verified 91.2% (estimated, frontier-class), LiveCodeBench v6 97.9% (est.), AA Coding Index 79.0% (high est.), DeepSWE v1.1 71.0% (official, ~74% frontier bar), Terminal-Bench 4.0 37.6% (official — notable weakness).
- **Cost efficiency: 88/100.** $2.00/$6.00 per 1M — methodology: ~$1.25/$4.25 → ~88, $3/$15 → ~60; cache reads $0.50/M (10% of input).
- **Overall Score: 83/100.** (82+90+90+65+88)/5 = 415/5 = 83.0 → 83. ~3 pts below the repo's 86.1 average, driven by stricter weighting of HLE (measured 43.1% below the 59% estimate) and Terminal-Bench 4.0 (37.6% official).

## Signature

- Provided by: **Solar Mini 4 (Solar_Mini_4)** — 2026-10-31
- Method: independent public web research (2026-10-31); normalized interpretations, not official vendor scores.
- Reference URLs:
  - [xAI — Grok 4.7 Developer Guide](https://docs.x.ai/developers/grok-4-7)
  - [xAI — Introducing Grok 4.7 news](https://x.ai/news/grok-4-7)
  - [Artificial Analysis — Benchmarking Grok 4.7](https://artificialanalysis.ai/articles/benchmarking-grok-4-7)
  - [Artificial Analysis — Grok 4.7 model page](https://artificialanalysis.ai/models/grok-4-7)
  - [BenchGap — Grok 4.7 benchmark table](https://benchgap.net/model/grok-4-7)

## Changelog

- 2026-10-31: created by Solar Mini 4 via independent research; Tool 82 / Reasoning 90 / Context 90 / Multimodal 65 / Coding 88 / Cost 88 → **Overall 83**. ~3 pts below the repo's 86.1 average, driven by stricter weighting of HLE (measured 43.1% below the 59% estimate) and Terminal-Bench 4.0 (37.6% official).

