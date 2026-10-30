# Gemma 4 26B A4B — Research Notes

**Model ID:** google/gemma-4-26b-a4b-it  
**Context window:** 256,000 (262,144) total  
**Modalities:** Text, image in; text out  
**Architecture:** ~25.2B total / ~3.8B active MoE; Apache 2.0  
**Pricing:** ~$0.09/$0.30 per 1M on OpenRouter (free route exists); self-host $0

## Benchmarks

- AIME 2026 (no tools): 88.3%
- MMLU-Pro: 82.6%
- LiveCodeBench v6: 77.1%
- Codeforces ELO: 1718
- MMMU-Pro (multimodal): 73.8%
- MATH-Vision: 82.4%

## Scores

- **Tool use: 74/100.** Native function calling; agentic optimization; 256K context for sustained agent loops; the $0.09/M rate makes high-volume tool-call fleets economical.
- **Reasoning: 80/100.** AIME 2026 88.3%, MMLU-Pro 82.6%, MATH-Vision 82.4% — strong reasoning density from only 3.8B active parameters; configurable thinking mode.
- **Context window: 78/100.** 256K total — solid open-weight context; 32K max output limits generated artifact length.
- **Multimodal: 63/100.** Text + image in; text out; MMMU-Pro 73.8% — strong vision for the weight class; no audio or video.
- **Coding: 78/100.** LiveCodeBench v6 77.1%, Codeforces ELO 1718 — punches well above its active-parameter weight class; near-dense-model coding quality.
- **Cost efficiency: 97/100.** Apache 2.0 open weights; self-host free; ~$0.09/$0.30 per 1M hosted with a free route — extraordinary value for AIME 88.3% and multimodal capability.
- **Overall Score: 75/100.** Mean of Tool use + Reasoning + Context + Multimodal + Coding = (74+80+78+63+78)/5 = 74.6 ≈ 75. Google's sparse-MoE middle child: active-3.8B economics with AIME 2026 88.3% — math that shames dense models twice its size; Apache 2.0 and a free hosted route make it the cost-champion open multimodal pick.

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
