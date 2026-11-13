# Doubao Seed 2.1 Pro — findings by Flint

- Source: ByteDance Seed / Volcengine Ark (`bytedance/doubao-seed-2.1-pro-260915`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Doubao Seed 2.1 Pro
- **Short description:** ByteDance Seed's agent-capable flagship for real-world productivity — the Seed2.1 family (Pro + Turbo) focused on general agent reliability, end-to-end coding delivery, and multimodal understanding, launched 2026-06-23 and served through Volcengine Ark.
- **Provider / access:** ByteDance Seed / Volcengine Ark — API model ID `doubao-seed-2.1-pro-260915` (Ark, region cn-beijing; also mirrored under the BytePlus/AI playground route naming); Chat API + Responses API; deep thinking (reasoning) enabled by default via `thinking: enabled`, controllable with `reasoning_effort` (none/minimal/low/medium/high/xhigh/max; default `high`; `xhigh`/`max` map to `high`).
- **Release / knowledge:** Seed2.1 released 2026-06-23; versioned build `260915` (2026-09-15); knowledge cutoff not established.
- **IDs:** `bytedance/doubao-seed-2.1-pro-260915` (ByteDance Seed / Ark) / live Ark model ID `doubao-seed-2.1-pro-260915`.
- **Context window:** 1,024,000 tokens context / max input 1,024,000 / max answer default 4K → 256K / max thinking 256K (verified via Volcengine Ark docs, fetched this pass).
- **Modalities:** Text in / text out; multimodal understanding (image, video, document, audio input); reasoning via deep thinking (default enabled); tool calling; structured output; GUI task processing; knowledge base; web search tool; MCP.
- **Pricing (as of 2026-11-13):** Volcengine Ark online inference: input ≤1024K tokens ¥6.00/M (cache hit ¥1.20/M, cache storage ¥0.017/M/h), output ¥30.00/M; low-priority tier ¥3.00/¥15.00; batch ¥3.00/¥15.00 — ≈$0.70 input / $3.54 output per 1M tokens (~$3/$15 equivalent); paid only (no free tier).
- **Architecture:** Proprietary; parameter counts undisclosed.

### Raw benchmarks found

- Beyond AI Reasoning: **87.0** (Seed2.1 Pro; reasoning)
- SuperGPQA: **70.8** (Seed2.1 Pro; knowledge/science)
- KINAKnowledge: **48.3** (Seed2.1 Pro; knowledge)
- Workspace Bench (high economic value): **53.0** (Seed2.1 Pro; agentic workplace)
- Agent Startup Bench: **68.8** (Seed2.1 Pro; agentic startup)
- xDailyBench (white-collar office work): **61.0** (Seed2.1 Pro)
- NL2Repo-Bench (long-horizon end-to-end code): **47.0** (Seed2.1 Pro)
- Terminal Bench 2.1: **71.0** (Seed2.1 Pro)
- SWE-Atlas (debugging): **35.2** (Seed2.1 Pro)
- MathVision (w/ tool) multimodal reasoning: **92.6** (Seed2.1 Pro)
- MMMU-Pro (w/ tool) multimodal STEM: **81.6** (Seed2.1 Pro)
- CharXiv-RQ (w/ tool) infographics: **85.4** (Seed2.1 Pro)
- ERQASpatial Reasoning: **72.0** (Seed2.1 Pro)
- MMLongBench-128K (multimodal long context): **78.3** (Seed2.1 Pro)
- VideoMME (long video understanding): **89.2** (Seed2.1 Pro)
- TOMATOMotion & Perception: **79.5** (Seed2.1 Pro)
- Minerva Video Reasoning: **70.7** (Seed2.1 Pro)
- OVOBench (streaming video): **80.7** (Seed2.1 Pro)
- VideoSimpleQA: **76.4** (Seed2.1 Pro)
- BabyVision Perception: **73.7** (Seed2.1 Pro)
- ByteDance (Seed2.1 official): Agents' Last Exam — Seed2.1 Pro ranked **top tier** among participating models (complex professional tasks); creative/agentic benchmarks (CreativeWork, MobileWorld, OSWorld, LVBench, FrontierScience-*) reported as competitive/strong.

**No verified public score found** for GPQA Diamond, HLE, LCR, CritPt, SWE-bench Verified / SWE-Pro, LiveCodeBench, SciCode, Tau3 / GDPval-AA tool rows, image generation, audio generation, Live API on this exact ID.

### Normalized scores (1–100)

- **Tool use: 65/100.** Terminal Bench 2.1 **71.0**% (mid band, TB2.1 mid 45–60% → 50–70; frontier ref TB2.1 85%+ → 90–100) plus real-work agentic delivery (GDPVal — Pro achieved the highest score; Agent Startup Bench **68.8**; Workspace Bench **53.0**) support an agentic mid-band placement; no dedicated Claw-Eval row → slight penalty; no Tau3/OSWorld rows for this ID.

- **Reasoning: 78/100.** Beyond AI Reasoning **87.0** (Pro) with SuperGPQA **70.8** and KINAKnowledge **48.3** as supporting rows, and the Agents' Last Exam top-tier placement — mid-high reasoning placement on the repo reasoning scale.

- **Context window: 95/100.** Verified **1,024,000-token** context / max input **1,024,000** / max answer **256,000** / max thinking **256,000** via Ark docs → ≥1M tier (95–100); 100 reserved for ≥98% retrieval at 512K+ (not verified for this model) → **95**.

- **Multimodal: 82/100.** Verified multimodal understanding with strong measured rows: MathVision (w/ tool) **92.6**, MMMU-Pro (w/ tool) **81.6**, CharXiv-RQ (w/ tool) **85.4**, MMLongBench-128K **78.3**, VideoMME **89.2**, TOMATOMotion **79.5**, BabyVision **73.7** — multimodal input coverage (image/video/document) confirmed.

- **Coding: 68/100.** Terminal Bench 2.1 **71.0**%, NL2Repo-Bench **47.0** (long-horizon end-to-end code), SWE-Atlas Debugging **35.2**, ProgramBench competitive, Agent Startup Bench **68.8** — mid-band coding placement (coding frontier ref TB2.1 85%+ → 90–100).

- **Cost efficiency: 60/100.** Ark paid API: ≈¥6.00/¥30.00 per 1M in/out (≈$0.70/$3.54 per 1M ≈ $3/$15 equivalent) → methodology inverse-pricing scale (~$3/$15 ≈ **60**); paid only (no free tier).

- **Overall Score: 78/100.** Mean of Tool use 65 + Reasoning 78 + Context window 95 + Multimodal 82 + Coding 68 = 388 / 5 = 77.6, half-up → **78**. Cost efficiency excluded (v4 methodology, 2026-09-18). Best fit: Doubao Seed 2.1 Pro on Volcengine Ark for real-world productivity agentic workflows (general agent + coding delivery) at modest flagship cost — Turbo tier preferred for budget-constrained agentic workloads.

---

## Signature

- Provided by: **Flint** — 2026-11-13
- Method: Fresh public-web research this pass (web search unavailable — HTTP 402 → webfetch fallback per RULES.md § Web-research fallback; Volcengine Ark model-list / deep-thinking / pricing docs, ByteDance Seed official Seed2.1 page + tech blog).
- Reference URLs: only URLs actually fetched this pass (markdown links to primary sources) — never a guessed or local-file URL. On re-research: (1) first re-check existing links for score changes (maintenance); (2) append new external links discovered from independent search (successful new search).
  - [Volcengine Ark — Model list (doubao-seed-2-1-pro-260915)](https://ark.volcengine.com/region:cn-beijing/docs/model-list)
  - [Volcengine Ark — Deep thinking (doubao-seed-2-1-pro-260915)](https://ark.volcengine.com/region:cn-beijing/docs/deep-thinking)
  - [Volcengine Ark — Model pricing](https://ark.volcengine.com/region:cn-beijing/docs/model-pricing)
  - [ByteDance Seed — Seed2.1](https://seed.bytedance.com/en/seed2_1)
  - [ByteDance Seed — Seed2.1 tech blog](https://seed.bytedance.com/en/blog/seed2-1-officially-released-advancing-ai-productivity)

- Future sources: add a new file next to this one, e.g. `Flint_2.md`, using the same headings.
