# Qwen 3.7 Flash — Research Notes

**Researcher:** Claude Sonnet 4.6
**Date:** 2026-10-21
**Slug:** qwen-3.7-flash

---

## Model Overview

Qwen 3.7 Flash is Alibaba's July 2026 Flash-tier vision-language reasoning model — a lightweight, cost-optimized multimodal API model with 1M token context (131K output). Text, image, and video input; text output. Proprietary closed-weight API model. Priced at $0.03/$0.13 per 1M (≤32K input) on QwenCloud ($0.006/M cached). Native function calling and web search capability built in. Targets high-throughput, latency-sensitive agent workflows.

---

## Scores

- **Tool use: 79/100.** SWE-bench Verified ~64.4% (Vals.ai third-party harness) confirms solid agentic coding capability at Flash-tier pricing. Native function calling and web search built in support practical agent loop use. Strong for high-volume automated code refactoring.
- **Reasoning: 83/100.** GPQA Diamond ~82.3% (Epoch AI independent evaluation) is strong scientific reasoning for a Flash-tier multimodal model. Competitive with economy flash models at a fraction of flagship cost.
- **Context window: 92/100.** 1M total context maps to the 1M tier (92). 131K max output is generous. Full 1M retrieval available.
- **Multimodal: 72/100.** Text, image, and video input; text output. Three input modalities (no audio in; no non-text out). Scored 72 for image+video coverage.
- **Coding: 83/100.** LiveCodeBench 81.9–82.8% (third-party aggregators) confirms strong competitive programming. SWE-bench Verified ~64.4% validates real-world engineering — well-positioned for Flash-tier high-volume code refactoring.
- **Cost efficiency: 99/100.** $0.03/$0.13 per 1M is exceptionally cheap for a 1M-context multimodal model with reasoning capability. Among the cheapest 1M vision-language models available. $0.006/M cached input further reduces costs for repeated-context pipelines.
- **Overall Score: 81.8/100.** Mean of Tool use (79) + Reasoning (83) + Context (92) + Multimodal (72) + Coding (83) = 409 / 5 = 81.8. An ultra-cheap Flash Flash model for high-volume vision-language agents — recommended for teams needing 1M-context multimodal reasoning at minimal cost per token.

---

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
