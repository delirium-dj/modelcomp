# Qwen 3.5 35B — Research Notes

**Researcher:** Claude Sonnet 4.6
**Date:** 2026-10-21
**Slug:** qwen-3.5-35b-a3b

---

## Model Overview

Qwen 3.5 35B-A3B is Alibaba's February 2026 open-weight MoE model (36B total / 3B active parameters, Apache 2.0 license). 262K native context (extensible to ~1M via YaRN), 65K output. Accepts text, image, and video input; text output. Available via OpenRouter ($0.14/$1.00 per 1M), Model Studio ($0.25/$2.00), or self-hosted free.

---

## Scores

- **Tool use: 79/100.** SWE-bench Verified 69.2% confirms multi-step agentic coding capability for a 3B-active MoE. Solid tool orchestration within its active-parameter budget.
- **Reasoning: 85/100.** GPQA Diamond 84.2% is strong graduate-level scientific reasoning for a 3B-active sparse model. Competitive with much larger models from prior generations.
- **Context window: 78/100.** 262K native maps to the 256K tier (78). YaRN to ~1M available but with potential degradation; scored on the native window.
- **Multimodal: 72/100.** Text, image, and video input; text output. Three input modalities (no audio in; no non-text out). Scored 72 for image+video coverage.
- **Coding: 78/100.** LiveCodeBench v6 74.6% is good for a 3B-active sparse model. SWE-bench Verified 69.2% validates real-world software engineering capability. Handles breadth well within its efficient compute budget.
- **Cost efficiency: 97/100.** Apache 2.0 open weights = $0 self-hosted. API pricing $0.14/$1.00 is exceptionally cheap. Among the best cost-per-multimodal-capability ratios available.
- **Overall Score: 78.4/100.** Mean of Tool use (79) + Reasoning (85) + Context (78) + Multimodal (72) + Coding (78) = 392 / 5 = 78.4. A highly affordable multimodal MoE — recommended for always-on agent pipelines and self-hosted vision-language workloads where cost efficiency is paramount.

---

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
