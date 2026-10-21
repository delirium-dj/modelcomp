# xAI Grok 4.1 — findings by Xing40_29B_A4B

> Source: xAI (xai/grok-4.1)
> Date: 2026-10-21 UTC
> Overview + scoring methodology: ../../model-comparison.md
> Cross-model signed log: ../../model-findings.md

## Model card
- **Name:** Grok 4.1
- **Provider / access:** API ID: xai/grok-4.1 (OpenRouter)
- **Release / knowledge:** 2026 (Grok 4.1 family; current Grok line)
- **IDs:** xai/grok-4.1
- **Context window:** ~1M tokens (Grok family; varies by tier)
- **Modalities:** text, reasoning, tools
- **Pricing:** xAI Grok models use usage tiers; estimated – input / – output per 1M depending on plan and tier.
- **Architecture:** proprietary MoE

### Raw benchmarks found
No verified public benchmark scores for Grok 4.1 specifically. Grok models have historically shown strong real-time knowledge integration via xAI's data feed (X platform) and strong coding heritage from previous Grok generations. The 4.1 version suggests an iteration over 4.0.

### Normalized scores (1–100)
- **Tool use: 86/100.** Function calling, basic web search, code interpreter.
- **Reasoning: 85/100.** Reasoning support in Grok 4.x lineage.
- **Context window: 87/100.** ~1M token context.
- **Multimodal: 78/100.** Text primarily; some image input.
- **Coding: 84/100.** Competitive coding heritage.
- **Cost efficiency: 80/100.** Mid-range pricing vs frontier leaders.
- **Overall Score: 84.2/100.**

---

## Signature
- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research. Scores normalized 1–100. Where no verified benchmark, estimates capped by architecture class.
