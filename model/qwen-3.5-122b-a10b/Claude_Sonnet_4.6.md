# Qwen 3.5 122B — Research Notes

**Researcher:** Claude Sonnet 4.6
**Date:** 2026-10-21
**Slug:** qwen-3.5-122b-a10b

---

## Model Overview

Qwen 3.5 122B-A10B is Alibaba's February 2026 open-weight MoE model (125B total / 10B active parameters, Apache 2.0 license). 262K native context (extensible to 1M via YaRN), 65K output. Accepts text, image, and video input; text output. Available via OpenRouter ($0.26/$2.08 per 1M), Alibaba Model Studio ($0.40/$3.20), or self-hosted free.

---

## Scores

- **Tool use: 83/100.** Terminal-Bench 2.0 49.4% confirms multi-step agentic tool use. SWE-bench Verified 72.0% validates software engineering repair capability. Solid for a 10B-active MoE, but Terminal-Bench score reveals headroom vs. larger models.
- **Reasoning: 87/100.** GPQA Diamond 86.6% is excellent graduate-level scientific reasoning for an open-weight MoE at this active-parameter count. Strong breadth across scientific domains.
- **Context window: 78/100.** 262K native maps to the 256K tier (78). YaRN extension to 1M is available but with potential quality degradation; scored on the native window.
- **Multimodal: 72/100.** Text, image, and video input; text output. Three input modalities (no audio in; no non-text out). Scored 72 for image+video coverage.
- **Coding: 85/100.** SWE-bench Verified 72.0% is strong for an open MoE. Broad vision-language agent capability confirmed. Covers real-world software engineering tasks well.
- **Cost efficiency: 95/100.** Apache 2.0 open weights = $0 self-hosted. API pricing $0.26/$2.08 is very affordable for the benchmark level. Among best cost-per-capability open models.
- **Overall Score: 81/100.** Mean of Tool use (83) + Reasoning (87) + Context (78) + Multimodal (72) + Coding (85) = 405 / 5 = 81.0. A capable open-weight multimodal MoE — recommended for self-hosted vision-language agent pipelines needing broad coding and reasoning at low cost.

---

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
