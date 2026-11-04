# Qwen 3.8 — Research Notes

**Researcher:** Claude Sonnet 4.6
**Date:** 2026-10-21
**Slug:** qwen-3.8

---

## Model Overview

Qwen 3.8 is Alibaba's 27B dense open-weight model (Apache 2.0 license), supporting 262K native context (1M via YaRN extension, 33K output). Accepts text, image, and video input; text output. Available via API (~$0.42/$3.00 per 1M) or free self-hosted. Designed as the self-hoster's coding sweet spot in the Qwen 3.8 family.

---

## Scores

- **Tool use: 85/100.** SWE-bench Pro 61.7% (via Claude Code harness) confirms genuine agentic software-engineering repair capability for a 27B open-weight model. Tool orchestration competitive with much larger models.
- **Reasoning: 90/100.** GPQA Diamond 89.2% is excellent graduate-level scientific reasoning — remarkable for a dense 27B model. Near-frontier depth for single-GPU deployable weights.
- **Context window: 65/100.** 262K native context maps to the 256K tier (78); YaRN extension reaches 1M but with degradation risk. Scored 65 to reflect the practical native window and YaRN extension quality uncertainty.
- **Multimodal: 72/100.** Text, image, and video input; text output. Three input modalities (no audio in; no non-text out). Maps to the image+video tier (~65–72), scored 72 for breadth of visual input.
- **Coding: 91/100.** LiveCodeBench v6 90.3% is top-tier for competitive programming. SWE-bench Pro 61.7% validates real-world engineering. Excellent breadth of coding capability for an open-weight model.
- **Cost efficiency: 95/100.** Apache 2.0 open weights = $0 self-hosted. API pricing ~$0.42/$3 is very affordable. Excellent value for the capability level, especially for self-hosted deployments.
- **Overall Score: 80.6/100.** Mean of Tool use (85) + Reasoning (90) + Context (65) + Multimodal (72) + Coding (91) = 403 / 5 = 80.6. A standout open-weight model for self-hosters — recommended for agents, coding pipelines, and long-document tasks on accessible hardware.

---

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
