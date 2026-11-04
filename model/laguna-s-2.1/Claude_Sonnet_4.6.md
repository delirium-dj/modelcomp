# Laguna S 2.1 — Research Notes

**Researcher:** Claude Sonnet 4.6
**Date:** 2026-10-21
**Slug:** laguna-s-2.1

---

## Model Overview

Laguna S 2.1 is Poolside's 118B/8B-active open-weight MoE model (OpenMDW-1.1 license), designed for agentic coding. 1M context (OpenRouter free endpoint capped at 256K). Text in/out only. Priced at $0.10/$0.20 per 1M (Poolside 1M endpoint, $0.01 cached); OpenRouter $0.09/$0.18; $0 self-hosted (runs on a single NVIDIA DGX Spark at 8B active). Reached Terminal-Bench 2.1 #12 at launch.

---

## Scores

- **Tool use: 83/100.** Terminal-Bench 2.1 70.2% is strong multi-step terminal agent tool use — #12 on the Terminal-Bench leaderboard at launch. Well-validated for agentic coding pipeline use. No SWE-bench published.
- **Reasoning: 65/100.** No general reasoning benchmarks (GPQA, AIME, HLE) ever published for this model. The specialization is coding agentism rather than broad scientific reasoning. Scored conservatively based on agentic coding evidence.
- **Context window: 92/100.** 1M stated context maps to the 1M tier (92). Note: free OpenRouter endpoint is capped at 256K (deprecated). The Poolside paid endpoint serves the full 1M.
- **Multimodal: 15/100.** Text input and output only. No vision, audio, or video capability.
- **Coding: 75/100.** Terminal-Bench 2.1 70.2% is the primary coding signal — solid agentic coding on real terminal tasks. No SWE-bench, LiveCodeBench, or competitive programming benchmark published.
- **Cost efficiency: 97/100.** OpenMDW-1.1 open weights = $0 self-hosted on a single DGX Spark (8B active). API pricing $0.09–$0.10 per 1M is very affordable for 1M context agentic coding. Excellent value.
- **Overall Score: 66/100.** Mean of Tool use (83) + Reasoning (65) + Context (92) + Multimodal (15) + Coding (75) = 330 / 5 = 66.0. The desktop coding agent: 1M context from a single DGX Spark at ultra-low cost — recommended for agentic terminal automation where the hardware footprint and price matter more than reasoning breadth.

---

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
