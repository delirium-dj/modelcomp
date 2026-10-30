# GPT-5 Codex — Research Notes

**Model ID:** opencode/gpt-5-codex  
**Context window:** 400K total; 128K max output  
**Modalities:** Text, image in; text out  
**Pricing:** $1.25/$10.00 per 1M native ($0.125 cached); Zen $1.07/$8.50  
**Status:** Removed from Codex 2026-04; deprecated on Zen

## Benchmarks (from meta.json)

- SWE-bench Verified: 74.5%
- Code-refactor: 51.3%
- Token efficiency: 93.7% fewer tokens vs baseline
- Made Codex the default coding surface on launch (Sep 2025)

## Scores

- **Tool use: 76/100.** SWE-bench Verified 74.5% at 93.7% fewer tokens than baseline — exceptional efficiency; Responses-API agentic design; removed from Codex April 2026.
- **Reasoning: 75/100.** Strong for Sep 2025 release window; no Terminal-Bench or LiveCodeBench published; code-refactor 51.3% shows solid practical reasoning.
- **Context window: 82/100.** 400K total; 128K output — same Codex-family context as successors.
- **Multimodal: 60/100.** Text + image in; text out; no audio or video.
- **Coding: 76/100.** SWE-bench Verified 74.5%; 93.7% fewer tokens was the headline feature — made Codex the default for a month before 5.1/5.3 line replaced it.
- **Cost efficiency: 52/100.** $1.25/$10.00 per 1M — now deprecated; historical pricing; no longer accessible for new projects.
- **Overall Score: 74/100.** Mean of Tool use + Reasoning + Context + Multimodal + Coding = (76+75+82+60+76)/5 = 73.8 ≈ 74. The original Codex hit: SWE-bench Verified 74.5% with 93.7% fewer tokens made it OpenAI's default coding surface in Sep 2025; deprecated April 2026.

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
