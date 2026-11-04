# Nemotron 3 Ultra 550B A55B — Research Notes

**Researcher:** Claude Sonnet 4.6
**Date:** 2026-10-21
**Slug:** nemotron-3-ultra-free

---

## Model Overview

Nemotron 3 Ultra 550B A55B is NVIDIA's June 2026 open-weight LatentMoE model (550B total / 55B active parameters) with 1M context (262K default serve, 128K max output on free tier). Text in/out only. Hybrid Mamba-MoE architecture. Free on OpenCode Zen and NVIDIA trial endpoint (usage logged — no confidential data); paid $0.50/$2.50 on NVIDIA Build, $0.60/$2.40 on OpenRouter. Apache 2.0 open weights.

---

## Scores

- **Tool use: 83/100.** SWE-bench Verified 70.7% confirms strong agentic software-engineering repair capability. Multi-step tool calling and long-horizon agent loops validated at this benchmark level. Free-tier caps may limit token-heavy agent runs.
- **Reasoning: 88/100.** RULER 94.7% at 1M tokens demonstrates exceptional long-context retrieval and reasoning. LiveCodeBench 89.0% validates deep reasoning on competitive programming. Frontier-shaped reasoning from a LatentMoE architecture.
- **Context window: 92/100.** 1M stated context (262K default serve on free tier). Maps to the 1M tier (92). Full 1M RULER score of 94.7% confirms the retrieval quality at scale. Free tier capped at 128K max output.
- **Multimodal: 15/100.** Text input and output only. No image, audio, or video modality. Text-only despite the LatentMoE architecture scale.
- **Coding: 88/100.** LiveCodeBench 89.0% is top-tier competitive programming. SWE-bench Verified 70.7% validates real-world software engineering repair. Strong broad coding capability for a free-available model.
- **Cost efficiency: 97/100.** $0 on Zen and NVIDIA trial endpoint with open Apache 2.0 weights. Paid routes $0.50/$2.50 are very affordable for a 550B model. Exceptional value for the benchmark level.
- **Overall Score: 73.2/100.** Mean of Tool use (83) + Reasoning (88) + Context (92) + Multimodal (15) + Coding (88) = 366 / 5 = 73.2. A powerful free text-only coding and reasoning model with 1M context — recommended for coding agents, long-document analysis, and competitive programming where multimodal input is not needed.

---

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
