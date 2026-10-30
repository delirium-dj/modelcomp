# Grok Build 0.1 — Research Notes

**Model ID:** opencode/grok-build-0.1  
**Context window:** 256,000 total; 230,400 max output  
**Modalities:** Text, image in; text out  
**Pricing:** $1.00/$2.00 per 1M; $0.20 cached; 2x over 200K  
**Status:** Deprecated in favour of Grok 4.5+

## Benchmarks (from meta.json)

- Terminal-Bench 2.1: 52.06%
- GPQA Diamond: 89.5% (AA 0616)
- Speed: 100+ tokens/second for agentic loops
- Note: 70.8% SWE-bench Verified in circulation belongs to grok-code-fast-1, NOT this model

## Scores

- **Tool use: 73/100.** Terminal-Bench 2.1 52.06%; 100+ tok/s enables rapid agentic loop execution; MCP tooling support; tool-call efficient at speed; deprecated — xAI now routes code to Grok 4.7.
- **Reasoning: 85/100.** GPQA Diamond 89.5% is elite graduate-level science reasoning; strong foundation despite being a fast-coding beta checkpoint.
- **Context window: 78/100.** 256K total; 230K max output — unusually large output window for a fast coding beta; 2x pricing over 200K deters long context use.
- **Multimodal: 60/100.** Text + image in; text out; no audio or video.
- **Coding: 73/100.** Terminal-Bench 2.1 52.06%; 100+ tok/s makes it a latency-optimised coding beta; deprecated for Grok 4.5+ which offers better benchmark coverage.
- **Cost efficiency: 62/100.** $1.00/$2.00 per 1M — reasonable for 100+ tok/s throughput; deprecated model so no longer the recommended path; 2x surcharge over 200K.
- **Overall Score: 74/100.** Mean of Tool use + Reasoning + Context + Multimodal + Coding = (73+85+78+60+73)/5 = 73.8 ≈ 74. xAI's fast coding beta: GPQA 89.5% and 100+ tok/s at $1/$2 — the 70.8% SWE-bench figure in circulation is from a different model; deprecated in favour of Grok 4.5+.

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
