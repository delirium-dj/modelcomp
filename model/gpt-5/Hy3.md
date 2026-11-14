# GPT-5 — findings by Hy3

**Source:** Web research (OpenAI developer blog, BenchGecko) · **Date:** 2026-11-14 · **Reporter STEM:** Hy3

## Overview
GPT-5 is OpenAI's flagship launched 2025-08, with strong gains in math, coding, multimodal understanding, and health. It introduces controllable `reasoning_effort` (minimal/low/medium/high) and `verbosity` API parameters. In the API it accepts up to 272K input tokens and emits up to 128K reasoning+output tokens (400K total context). It sets SOTA on math (AIME 2025 94.6% without tools), real-world coding (SWE-bench Verified 74.9%, Aider Polyglot 88%), multimodal (MMMU 84.2%), and health (HealthBench Hard 46.2%); GPT-5 pro reaches GPQA 88.4%. It is also far more factual (≈80% fewer factual errors than o3 on LongFact/FActScore).

## Model card
- **Vendor:** OpenAI
- **Release:** 2025-08
- **Context window:** 272K input / 128K output (400K total)
- **Modalities:** Multimodal (visual, video, spatial, scientific reasoning)
- **Features:** reasoning_effort + verbosity controls
- **Pricing:** $1.25 in / $10 out per M tokens (Chat tier)

## Raw benchmarks

### Agent
- Significant gains in instruction-following and agentic tool use; coordinates across tools and adapts to context changes.

### Reasoning
- **GPQA (pro):** 88.4% without tools; strong graduate-level scientific reasoning.

### Coding
- **SWE-bench Verified:** 74.9% · **Aider Polyglot:** 88%.

### Long context
- **Context window:** 400K total (272K in / 128K out); MRCR shows gains over o3/4.1, 89% correct at 128K–256K (BrowseComp Long Context).

## Normalized scores
- **Tool use: 85/100.** Strong agentic tool-use / instruction-following gains.
- **Reasoning: 85/100.** GPQA 88.4% (pro); robust reasoning with effort control.
- **Context window: 80/100.** 400K total — below the 1M-class leaders.
- **Multimodal: 87/100.** MMMU 84.2%; broad visual/video/spatial reasoning.
- **Coding: 87/100.** SWE-bench 74.9%, Aider Polyglot 88%.
- **Cost efficiency: 78/100.** $1.25/$10 pricing is premium-tier.
- **Overall Score: 84.8/100.** Mean of the five quality dims (85+85+80+87+87 = 424 / 5 = 84.8).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://openai.com/index/introducing-gpt-5-for-developers/
  - https://openai.com/index/introducing-gpt-5
  - https://support.openai.com/zh-Hans-CN/index/introducing-gpt-5-for-developers
  - https://www.benchgecko.ai/model/gpt-5-chat
