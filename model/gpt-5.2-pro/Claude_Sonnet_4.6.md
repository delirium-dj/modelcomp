# GPT-5.2 Pro — Research Notes

**Model ID:** opencode/gpt-5.2-pro  
**Context window:** 400K total; 128K max output  
**Modalities:** Text, image in; text out  
**Pricing:** $21/$168 per 1M in/out; $2.10 cached read

## Benchmarks

- GPQA Diamond (no tools): 92.4%
- ARC-AGI-1: 86.2%; ARC-AGI-2: 52.9%
- AIME 2025 (no tools): 100.0%
- FrontierMath Tier 1–3: 40.3%; Tier 4: 14.6%
- SWE-bench Verified: 80.0%
- SWE-bench Pro: 55.6%
- GDPval (knowledge work wins/ties): 70.9%

## Scores

- **Tool use: 86/100.** SWE-bench Verified 80.0%; GDPval 70.9% on professional knowledge work; adjustable x-high effort reasoning; long-context (400K) tool execution.
- **Reasoning: 93/100.** GPQA Diamond 92.4%, AIME 2025 100%, ARC-AGI-2 52.9%; near graduate-expert ceiling on scientific reasoning benchmarks.
- **Context window: 82/100.** 400K total; larger than most GPT-5.x variants but below 1M-class models.
- **Multimodal: 60/100.** Text + image in; text out; no audio or video understanding.
- **Coding: 85/100.** SWE-bench Verified 80.0%, SWE-bench Pro 55.6%; strong repository-level bug-fixing but slightly below dedicated coding models.
- **Cost efficiency: 5/100.** $21/$168 per 1M — exceptionally expensive even in the frontier class; $168/M output is the highest rate in the dataset.
- **Overall Score: 81/100.** Mean of Tool use + Reasoning + Context + Multimodal + Coding = (86+93+82+60+85)/5 = 81.2 ≈ 81. OpenAI's high-compute research-grade flagship: GPQA Diamond 92.4% and perfect AIME 2025; text+image multimodal only, and the $168/M output price reserves it for specialized high-stakes enterprise use.

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
