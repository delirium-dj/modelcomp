# Muse Wonder 1.0 — Research Notes

**Model ID:** opencode/muse-wonder-1.0  
**Context window:** 1,048,576 total; 131,072 max output  
**Modalities:** Text, image, video, audio in; text out  
**Pricing:** $4.00/$20.00 per 1M in/out; $0.20 cached input

## Benchmarks

- DeepSWE 1.1: 78.8% (Standard API) — edges Gemini 4 Argon (~77.9%), GPT-6.1 Sol (~75.2%), Claude Opus 5.5 (~74.2%)
- SWE-Marathon: 53.1% (max)
- Terminal-Bench 4.0-AA: 52.0%
- ProgramBench: 30.8%

## Scores

- **Tool use: 88/100.** Terminal-Bench 4.0-AA 52.0%; SWE-Marathon 53.1% at max; strong agentic tool use tuned for sustained multi-file workflows.
- **Reasoning: 88/100.** DeepSWE 1.1 78.8% — leads Gemini 4 Argon, GPT-6.1 Sol, Opus 5.5 on long-horizon engineering reasoning.
- **Context window: 92/100.** 1M token context (1,048,576); designed for multi-hour engineering marathons.
- **Multimodal: 85/100.** Full omni input: text, image, video, audio in — all four modalities covered.
- **Coding: 88/100.** DeepSWE 78.8% is best-in-class for the standard public API tier; SWE-Marathon 53.1%; ProgramBench 30.8% shows narrower from-scratch strength.
- **Cost efficiency: 65/100.** $4/$20 per 1M — higher than comparable Anthropic models but justified by frontier long-horizon coding capability and full omni inputs.
- **Overall Score: 88/100.** Mean of Tool use + Reasoning + Context + Multimodal + Coding = (88+88+92+85+88)/5 = 88.2 ≈ 88. Meta's publicly accessible frontier long-horizon model; DeepSWE leader with full omni inputs at a premium but reasonable public API price.

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
