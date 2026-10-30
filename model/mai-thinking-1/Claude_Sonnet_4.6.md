# MAI-Thinking-1 — Research Notes

**Model ID:** microsoft/mai-thinking-1  
**Context window:** 256,000 total; 25,000 max output  
**Modalities:** Text in/out only  
**Architecture:** ~1T total / ~35B active MoE (in-house); closed weights  
**Pricing:** No public rate card; unverified ~$2 in / $8–10 out per 1M

## Benchmarks (from meta.json — all vendor-published, no independent verification)

- AIME 2025: 97.0%
- GPQA Diamond: 84.2%
- SWE-bench Verified: 73.5%
- Human preference vs Opus 4.6: 43% win rate
- Pretraining: 30T tokens from scratch

## Scores

- **Tool use: 73/100.** SWE-bench Verified 73.5%; 256K context for agentic reasoning chains; 25K max output is a serious constraint for long tool-call outputs; all numbers vendor-published only.
- **Reasoning: 88/100.** AIME 2025 97.0% is near-perfect competition math; GPQA Diamond 84.2% — elite scientific reasoning from 30T-token pretraining; caveat: zero independent measurement exists.
- **Context window: 78/100.** 256K total; 25K max output — the 25K output cap significantly constrains reasoning chain length and long code generation.
- **Multimodal: 15/100.** Text in/out only — no vision, audio, or video inputs.
- **Coding: 73/100.** SWE-bench Verified 73.5% — competitive but not frontier for a model claiming 1T parameters; 25K output cap limits large-file code generation.
- **Cost efficiency: 40/100.** No published price; unverified ~$2/$8–10 per 1M; no API accessible externally; 25K output cap reduces value even at estimated pricing.
- **Overall Score: 65/100.** Mean of Tool use + Reasoning + Context + Multimodal + Coding = (73+88+78+15+73)/5 = 65.4 ≈ 65. Microsoft's from-scratch reasoning flagship: AIME 2025 97.0% is genuinely impressive; 25K max output and zero independent verification are critical caveats; no public API, no confirmed pricing — treat all scores as vendor-reported.

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
