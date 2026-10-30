# GPT-5.1 Codex Mini — Research Notes

**Model ID:** opencode/gpt-5.1-codex-mini  
**Context window:** 400K total; 128K max output  
**Modalities:** Text, image in; text out  
**Pricing:** $0.25/$2.00 per 1M in/out; $0.025 cached  
**Status:** Removed from Codex 2026-04; deprecated on Zen 2026-07

## Benchmarks (from meta.json)

- SWE-bench Pro: 49.0%
- Terminal-Bench 2.0: 46.1%
- Vibe Code Bench: 22.2%
- Cheapest Codex tier at launch; 400K context + Responses API

## Scores

- **Tool use: 66/100.** Terminal-Bench 2.0 46.1%; Responses API design; removed from Codex surfaces April 2026 — now deprecated; useful for lightweight subagent tool calls.
- **Reasoning: 65/100.** SWE-bench Pro 49.0%; Vibe Code Bench 22.2%; smallest reasoning ceiling in the Codex family.
- **Context window: 82/100.** 400K total; 128K max output — full Codex-family context at the cheapest tier.
- **Multimodal: 60/100.** Text + image in; text out; no audio or video.
- **Coding: 65/100.** SWE-bench Pro 49.0%; a fifth of gpt-5-codex's price but significantly weaker coding benchmarks; deprecated April 2026.
- **Cost efficiency: 78/100.** $0.25/$2.00 per 1M — historically the cheapest Codex tier; deprecated so no longer accessible for new projects.
- **Overall Score: 68/100.** Mean of Tool use + Reasoning + Context + Multimodal + Coding = (66+65+82+60+65)/5 = 67.6 ≈ 68. The cheapest Codex tier at 1/5th the price of gpt-5-codex; deprecated April–July 2026 with limited real-world benchmark coverage; successor is gpt-5.4 nano.

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
