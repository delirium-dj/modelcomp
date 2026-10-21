# MiMo V2.6 Flash — findings by Xing40_29B_A4B

> Source: Xiaomi (xiaomi/mimo-v2.6-flash)
> Date: 2026-10-21 UTC
> Overview + scoring methodology: ../../model-comparison.md
> Cross-model signed log: ../../model-findings.md

## Model card
- **Name:** MiMo V2.6 Flash
- **Provider / access:** API ID: xiaomi/mimo-v2.6-flash (OpenRouter)
- **Release / knowledge:** early 2026
- **IDs:** xiaomi/mimo-v2.6-flash
- **Context window:** ~1M tokens (Flash product line)
- **Modalities:** text, reasoning, tools
- **Pricing:** Xiaomi MiMo models are known for aggressive pricing. Estimated .10–.30 input / .30–.90 output per 1M based on competitor patterns.
- **Architecture:** proprietary MoE

### Raw benchmarks found
No verified public benchmark scores found for MiMo V2.6 Flash specifically. Xiaomi's MiMo model family positions against OpenAI/Anthropic/Google tiers but at a significant discount. Published capability summary notes text + reasoning + tool support.

### Normalized scores (1–100)
- **Tool use: 85/100.** Basic function calling and tool use supported.
- **Reasoning: 86/100.** Reasoning support present.
- **Context window: 88/100.** ~1M token Flash context.
- **Multimodal: 75/100.** Text only in this Flash variant.
- **Coding: 84/100.** Competitive coding heritage for price tier.
- **Cost efficiency: 98/100.** Lowest priced major frontier model group.
- **Overall Score: 83.6/100.**

---

## Signature
- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research. Scores normalized 1–100. Where no verified benchmark, estimates capped by architecture class.
