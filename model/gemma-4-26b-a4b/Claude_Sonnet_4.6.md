# Gemma 4 26B A4B — Research Notes

**Model ID:** opencode/gemma-4-26b-a4b  
**Context window:** 262,144 total; 32,768 max output  
**Modalities:** Text, image in; text out  
**Architecture:** ~25.2B total / ~3.8B active MoE; Apache 2.0  
**Pricing:** Free open weights; hosted ~$0.12/$0.30 per 1M

## Benchmarks

- MMLU-Pro: 82.6%
- LiveCodeBench v6: 77.1%
- Codeforces ELO: 1718
- MMMU-Pro (multimodal): 73.8%
- MATH-Vision: 82.4%
- AIME 2026 (no tools): 88.3%

## Scores

- **Tool use: 74/100.** Native function-calling support; agentic optimization built in; 262K context for sustained tool loops; MoE design enables high throughput for tool-call dense workflows.
- **Reasoning: 80/100.** AIME 2026 88.3%, MMLU-Pro 82.6%, MATH-Vision 82.4% — strong reasoning density from only 3.8B active parameters; configurable thinking mode.
- **Context window: 78/100.** 262K total; 32K max output — solid for open-weight MoE but below 1M-class frontier; output cap limits long generated artifacts.
- **Multimodal: 63/100.** Text + image in (variable aspect ratios/resolutions); text out; MMMU-Pro 73.8%; no audio or video — strong vision for the weight class.
- **Coding: 78/100.** LiveCodeBench v6 77.1%, Codeforces ELO 1718 — competitive agentic coding from ~3.8B active parameters; slight gap vs 31B dense sibling.
- **Cost efficiency: 96/100.** Apache 2.0 open weights; self-host free; hosted ~$0.12/$0.30 per 1M — extraordinary value for MMLU-Pro 82.6% and multimodal capability.
- **Overall Score: 75/100.** Mean of Tool use + Reasoning + Context + Multimodal + Coding = (74+80+78+63+78)/5 = 74.6 ≈ 75. Google's lean MoE: near dense-model MMLU quality and LiveCodeBench 77.1% from ~3.8B active params; 262K context and Apache 2.0 make it the efficient multimodal self-host pick.

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
