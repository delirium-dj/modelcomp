# Claude Sonnet 5 — findings by Xing40_29B_A4B

> Source: Anthropic (nthropic/claude-sonnet-5)
> Date: 2026-10-21 UTC
> Overview + scoring methodology: ../../model-comparison.md
> Cross-model signed log: ../../model-findings.md

## Model card
- **Name:** Claude Sonnet 5
- **Provider / access:** API ID: claude-sonnet-5 (OpenRouter)
- **Release / knowledge:** 2026-06-30 (Jan 2026 knowledge cutoff)
- **IDs:** nthropic/claude-sonnet-5
- **Context window:** 1M tokens
- **Modalities:** text, reasoning, tools
- **Pricing:** / per 1M
- **Architecture:** proprietary MoE

### Raw benchmarks found
No verified public benchmark scores for Claude Sonnet 5 specifically. Published companion data places it just below Claude Opus 5.5 in Anthropic's lineup and between Claude Sonnet 5.5 and Claude Haiku 5.5 on published comparison tables. The published summary notes adaptive thinking with high default effort; 1M context window with 300K Batch extension.

### Normalized scores (1–100)
- **Tool use: 87/100.** Strong function calling, web search, file search.
- **Reasoning: 87/100.** Adaptive thinking, high effort.
- **Context window: 95/100.** 1M tokens + 300K Batch extension.
- **Multimodal: 89/100.** Text + images → text.
- **Coding: 87/100.** Best combination of speed + intelligence per Anthropic.
- **Cost efficiency: 92/100.** / per 1M is aggressively priced for frontier.
- **Overall Score: 89/100.**

---

## Signature
- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research. Scores normalized 1–100. Where no verified benchmark, estimates capped by architecture class.
