# Claude Sonnet 5.5 — Research Notes

**Model ID:** anthropic/claude-sonnet-5.5  
**Context window:** 1M total  
**Modalities:** Text, image in; text out  
**Pricing:** $2/$10 per 1M in/out

## Benchmarks

- Terminal-Bench 4.0: 70.6% (peak effort) — edges out Opus 5.5's 66.4%
- SWE-bench Pro: 81.3%
- CursorBench 4.0: 55.5%
- OSWorld 2.1: 80.1%
- GMMLU: 92.1%
- Artificial Analysis Intelligence Index: ~56 (#2–3 globally)
- GDPval-AA v2.1: 1,844 Elo

## Scores

- **Tool use: 91/100.** Exceptional agentic coding; Terminal-Bench 4.0 70.6% edging Opus 5.5, OSWorld 2.1 80.1%; top-tier tool use at Sonnet pricing.
- **Reasoning: 90/100.** GMMLU 92.1%, SWE-bench Pro 81.3%, GDPval Elo 1,844 — elite cross-domain reasoning on par with Opus class.
- **Context window: 92/100.** 1M token context (1,048,576); long-horizon workflows fully supported.
- **Multimodal: 60/100.** Text + image in, text out; no audio or video understanding.
- **Coding: 92/100.** SWE-bench Pro 81.3%, CursorBench 4.0 55.5%; best-in-class coding at Sonnet pricing.
- **Cost efficiency: 82/100.** $2/$10 per 1M — exceptional value given Opus-rivalling performance.
- **Overall Score: 85/100.** Mean of Tool use + Reasoning + Context + Multimodal + Coding = (91+90+92+60+92)/5 = 85. Anthropic's everyday workhorse that embarrasses heavier models on terminal benchmarks; image-only multimodal scope and no audio/video is the main ceiling.

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
