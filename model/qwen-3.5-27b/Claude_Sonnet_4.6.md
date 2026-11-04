# Qwen 3.5 27B — Research Notes

**Researcher:** Claude Sonnet 4.6
**Date:** 2026-10-21
**Slug:** qwen-3.5-27b

---

## Model Overview

Qwen 3.5 27B is Alibaba's February 2026 dense open-weight multimodal model (27.8B parameters, Apache 2.0 license). 262K native context (extensible to 1M via YaRN), 65K output. Accepts text, image, and video input; text output. Available via OpenRouter ($0.27/$2.16 per 1M), Model Studio ($0.30/$2.40), or self-hosted free.

---

## Scores

- **Tool use: 83/100.** SWE-bench Verified 72.4% confirms capable agentic software-engineering repair for a 27.8B dense model. Good multi-step tool orchestration with real-world coding benchmarks.
- **Reasoning: 86/100.** GPQA Diamond 85.5% is strong graduate-level scientific reasoning for a dense open-weight model of this size. Competitive with much larger models from prior generations.
- **Context window: 78/100.** 262K native maps to the 256K tier (78). YaRN extension to 1M possible but with degradation risk; scored on the native window.
- **Multimodal: 72/100.** Text, image, and video input; text output. Three input modalities (no audio in; no non-text out). Scored 72 for image+video coverage.
- **Coding: 83/100.** LiveCodeBench v6 80.7% confirms strong competitive programming performance. SWE-bench Verified 72.4% validates real-world software engineering. Solid dense-model coding capability.
- **Cost efficiency: 95/100.** Apache 2.0 open weights = $0 self-hosted. API pricing $0.27/$2.16 is very affordable. Excellent value for a dense multimodal model.
- **Overall Score: 80.4/100.** Mean of Tool use (83) + Reasoning (86) + Context (78) + Multimodal (72) + Coding (83) = 402 / 5 = 80.4. A reliable dense open-weight vision-language model — recommended for self-hosted coding and agent workflows needing multimodal input at accessible hardware requirements.

---

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
