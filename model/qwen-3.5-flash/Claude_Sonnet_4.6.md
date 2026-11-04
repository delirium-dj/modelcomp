# Qwen 3.5 Flash — Research Notes

**Researcher:** Claude Sonnet 4.6
**Date:** 2026-10-21
**Slug:** qwen-3.5-flash

---

## Model Overview

Qwen 3.5 Flash is Alibaba's hosted Flash-tier production profile built on the open 35B-A3B weights, with 1M context extended by default (65K output). Accepts text, image, and video input; text output. Priced at ~$0.065/$0.26 per 1M (OpenRouter snapshot) or $0.10/$0.40 per 1M (Alibaba Model Studio international).

---

## Scores

- **Tool use: 72/100.** Terminal-Bench 2.0 24.7% reveals agentic headroom vs. larger models. SWE-bench Verified underlying 35B-A3B weights scored 69.2%, but the hosted Flash serving profile may underperform the open weights on agentic tasks per meta note.
- **Reasoning: 83/100.** GPQA Diamond 82.8% is solid graduate-level reasoning. Good scientific reasoning quality for a Flash-tier hosted model at this price point.
- **Context window: 92/100.** 1M context extended by default (hosted tier) maps to the 1M tier (92). 65K output cap applies. Full 1M retrieval available via the hosted API.
- **Multimodal: 72/100.** Text, image, and video input; text output. Three input modalities (no audio in; no non-text out). Scored 72 for image+video coverage.
- **Coding: 83/100.** LiveCodeBench 83.3% (Vals) confirms solid competitive programming. FrontierMath Tiers 1-3 18.2% and Terminal-Bench 24.7% reveal weakness on the hardest agentic and math tasks; not a full frontier-coding replacement.
- **Cost efficiency: 98/100.** $0.065/$0.26 per 1M (OpenRouter) or $0.10/$0.40 (Model Studio) is exceptional value for 1M context multimodal inference. Among the cheapest 1M-context models available.
- **Overall Score: 80.4/100.** Mean of Tool use (72) + Reasoning (83) + Context (92) + Multimodal (72) + Coding (83) = 402 / 5 = 80.4. A cheap, 1M-context multimodal serving profile — recommended for high-volume batch tasks, document analysis, and vision pipelines where cost efficiency is the primary constraint.

---

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
