# Solar Open 2 — Research Notes

**Researcher:** Claude Sonnet 4.6
**Date:** 2026-10-21
**Slug:** solar-open-2

---

## Model Overview

Solar Open 2 is Upstage's open-weight Korean-sovereignty MoE model (250B total / 15B active parameters, Upstage Solar License permitting commercial use, fine-tuning, and distillation). 1M context (131K reasoning output cap, 256K max_tokens). Text in/out only. Requires 4x H200 BF16 or 2x H200 quantized to self-host; no published per-token price. Designed for Korean/multilingual enterprise workloads with strong Korean benchmark performance (Korean avg 85.4%).

---

## Scores

- **Tool use: 72/100.** Terminal-Bench Hard 28.3% and APEX-Agents 16.6% reveal modest agentic depth despite the large parameter count. SWE-bench Verified 70.4% confirms solid software-engineering repair capability. The architecture is optimized more for coding quality than agentic tool chaining.
- **Reasoning: 85/100.** No GPQA published directly, but LiveCodeBench v6 92.4% and Korean benchmark average 85.4% indicate strong broad reasoning. 15B active parameters from a 250B MoE provide deep reasoning at scale.
- **Context window: 92/100.** 1M context maps to the 1M tier (92). 131K reasoning output cap. Full 1M retrieval capability confirmed.
- **Multimodal: 15/100.** Text input and output only. No image, audio, or video capability. Text-only flagship.
- **Coding: 88/100.** LiveCodeBench v6 92.4% is top-tier competitive programming. SWE-bench Verified 70.4% validates real-world engineering. Strong broad coding performance from the 250B MoE scale.
- **Cost efficiency: 50/100.** No per-token API price published; requires 4x H200 BF16 or 2x H200 quantized to self-host — high hardware cost. The Solar License terms (requires "Solar-" naming and Built-with-Solar attribution) add compliance overhead.
- **Overall Score: 70.4/100.** Mean of Tool use (72) + Reasoning (85) + Context (92) + Multimodal (15) + Coding (88) = 352 / 5 = 70.4. A strong Korean-sovereignty coding and reasoning model — recommended for Korean/multilingual enterprise teams with the hardware to self-host a 250B MoE and comfortable with the Solar License attribution requirements.

---

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
