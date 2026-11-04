# Qwen 3.7 — Research Notes

**Researcher:** Claude Sonnet 4.6
**Date:** 2026-10-21
**Slug:** qwen-3.7

---

## Model Overview

Qwen 3.7 is Alibaba's mid-2026 text-only reasoning model — the base tier of the Qwen 3.7 family (Qwen3.7 Max / base), designed for complex agentic workflows, multi-step coding, and long-horizon autonomous execution. Available via API (Alibaba Cloud Model Studio, OpenRouter); 1M context (65K output); text in, text out. Strictly text-focused to maximize reasoning and code execution depth. Closed weights.

---

## Scores

- **Tool use: 87/100.** Terminal-Bench 2.0-Terminus ~69.7 confirms strong terminal execution and agentic tool chaining. SWE-Verified ~80.4 validates multi-step software-engineering repair capability. Maintains context across extended autonomous loops (35+ hours confirmed in enterprise stress tests).
- **Reasoning: 88/100.** SciCode ~53.5 and SWE-Multilingual ~78.3 demonstrate broad scientific and multilingual reasoning depth. Deep-thinking mode for extended chain-of-thought up to 262K tokens. Strong for complex long-horizon reasoning tasks.
- **Context window: 92/100.** 1M token context (65K output) maps to the 1M tier (92). Prompt caching supported. Full 1M retrieval across extended agentic loops confirmed.
- **Multimodal: 15/100.** Text input and output only. No image, audio, or video modality. Strictly text-focused by design for maximum reasoning performance.
- **Coding: 88/100.** SWE-Verified ~80.4%, SWE-Pro ~60.6%, SWE-Multilingual ~78.3%. Terminal-Bench ~69.7. Broad multi-language software engineering strength with strong autonomous coding loop endurance.
- **Cost efficiency: 65/100.** Proprietary closed-weight API model; pricing comparable to mid-tier hosted models at Alibaba Model Studio. No self-hosting option. Reasonable for the agentic coding capability provided.
- **Overall Score: 74/100.** Mean of Tool use (87) + Reasoning (88) + Context (92) + Multimodal (15) + Coding (88) = 370 / 5 = 74.0. A strong text-only agentic coding model with 1M context — recommended for long-horizon autonomous coding agents, terminal automation, and multi-step engineering pipelines that don't require multimodal input.

---

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
