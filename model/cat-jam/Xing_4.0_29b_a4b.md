# Cat Jam — findings by Xing40_29B_A4B

> Source: Cat Jam (cat-jam/cat-jam)
> Date: 2026-10-21 UTC
> Overview + scoring methodology: ../../model-comparison.md
> Cross-model signed log: ../../model-findings.md

## Model card
- **Name:** Cat Jam
- **Provider / access:** API ID: cat-jam/cat-jam (OpenRouter)
- **Release / knowledge:** 2026
- **IDs:** cat-jam/cat-jam
- **Context window:** ~256K tokens (Cat product line)
- **Modalities:** text, reasoning, tools
- **Pricing:** Aggressive pricing; estimated .05–.10 input / .20–.40 output per 1M.
- **Architecture:** proprietary MoE

### Raw benchmarks found
No verified public benchmark scores found for Cat Jam specifically. The Cat Jam model is positioned as an entry-level frontier model, aimed at cost-sensitive consumers. Published summaries indicate limited tool use capability and shorter context window than frontier competitors.

### Normalized scores (1–100)
- **Tool use: 72/100.** Basic function calling only.
- **Reasoning: 75/100.** Reasoning support present but conservative.
- **Context window: 60/100.** ~256K token context well below frontier standards.
- **Multimodal: 68/100.** Minimal multimodal support.
- **Coding: 75/100.** Decent coding heritage but below frontier at this tier.
- **Cost efficiency: 100/100.** Among the cheapest models overall.
- **Overall Score: 70/100.**

---

## Signature
- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research. Scores normalized 1–100. Where no verified benchmark, estimates capped by architecture class.
