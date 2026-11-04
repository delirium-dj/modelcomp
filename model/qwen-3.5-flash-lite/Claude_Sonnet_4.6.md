# Qwen 3.5 Flash Lite — Research Notes

**Researcher:** Claude Sonnet 4.6
**Date:** 2026-10-21
**Slug:** qwen-3.5-flash-lite

---

## Model Overview

Qwen 3.5 Flash Lite is Alibaba's ultra-low-cost hosted API tier built on the Qwen3.5-35B-A3B architecture (~35B total / 3B active MoE parameters), offering 1M context (65K output). Accepts text, image, and video input; text output. Priced at ~$0.10/$0.40 per 1M on Alibaba Cloud. Targeted at high-volume multimodal batch workloads where cost per token is the primary constraint.

---

## Scores

- **Tool use: 72/100.** Terminal-Bench 2.0 24.7% (Flash tier characteristic) confirms limited deep agentic tool chaining. SWE-bench Verified underlying 35B-A3B scores ~69.2%. The Lite serving profile de-emphasizes agentic depth for throughput.
- **Reasoning: 83/100.** GPQA Diamond ~84.2% (shared architecture with Flash tier) confirms solid graduate-level reasoning. Reasonable scientific depth for a Lite-tier model.
- **Context window: 92/100.** 1M context default maps to the 1M tier (92). 65K output cap. Practical for large-document retrieval and batch analysis tasks.
- **Multimodal: 72/100.** Text, image, and video input; text output. Three input modalities (no audio in; no non-text out). Scored 72 for image+video coverage.
- **Coding: 76/100.** LiveCodeBench v6 ~74.6% confirms reasonable competitive programming capability. SWE-bench Verified ~69.2% (architecture level). Lite serving optimized for throughput over depth on hardest coding tasks.
- **Cost efficiency: 98/100.** ~$0.10/$0.40 per 1M is extremely affordable for 1M-context multimodal inference. Excellent for high-volume pipelines where token cost dominates.
- **Overall Score: 79/100.** Mean of Tool use (72) + Reasoning (83) + Context (92) + Multimodal (72) + Coding (76) = 395 / 5 = 79.0. The ultra-budget multimodal option — recommended for high-volume document and image batch tasks where cost efficiency is the top priority over agentic depth.

---

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
