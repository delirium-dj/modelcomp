# GPT-5.4 Nano — Research Notes

**Model ID:** opencode/gpt-5.4-nano  
**Context window:** 400K total; 128K max output  
**Modalities:** Text, image in; text out  
**Pricing:** $0.20/$1.25 per 1M; cached $0.02

## Benchmarks (from meta.json)

- SWE-bench Verified: 69.8%
- LiveCodeBench: 84.0%
- Terminal-Bench 2.0: 46.3%

## Scores

- **Tool use: 74/100.** Terminal-Bench 2.0 46.3%; SWE-bench Verified 69.8% for a nano-class model is impressive; designed for fleet subagent tool calls, not orchestration.
- **Reasoning: 75/100.** LiveCodeBench 84.0% shows strong code reasoning; SWE-bench Verified 69.8%; smallest reasoning ceiling in the GPT-5.4 line — strictly a subagent.
- **Context window: 82/100.** 400K total; 128K output; full Codex-family context window at nano pricing.
- **Multimodal: 60/100.** Text + image in; text out; no audio or video.
- **Coding: 75/100.** SWE-bench Verified 69.8%, LiveCodeBench 84.0% — punches above its weight for classification/extraction coding tasks at $0.20/M in.
- **Cost efficiency: 88/100.** $0.20/$1.25 per 1M — near-nano pricing for a model with SWE-bench Verified 69.8%; excellent for high-volume subagent fleets.
- **Overall Score: 73/100.** Mean of Tool use + Reasoning + Context + Multimodal + Coding = (74+75+82+60+75)/5 = 73.2 ≈ 73. OpenAI's cheapest current reasoning subagent: SWE-bench Verified 69.8% and LiveCodeBench 84.0% at $0.20/$1.25 — the fleet-scale classification and extraction specialist.

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
