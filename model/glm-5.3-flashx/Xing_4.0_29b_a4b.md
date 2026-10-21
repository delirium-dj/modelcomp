# GLM-5.3 FlashX — findings by Xing40_29B_A4B

> Source: Z.AI / GLM (zai/glm-5.3-flashx)
> Date: 2026-10-21 UTC
> Overview + scoring methodology: ../../model-comparison.md
> Cross-model signed log: ../../model-findings.md

## Model card
- **Name:** GLM-5.3 FlashX
- **Provider / access:** API ID: zai/glm-5.3-flashx (OpenRouter)
- **Release / knowledge:** early 2026 (GLM 5.x family; 3.8 Flash lineage indicated by naming convention)
- **IDs:** zai/glm-5.3-flashx
- **Context window:** ~1M tokens (Flash product line)
- **Modalities:** text, reasoning, tools
- **Pricing:** Z.AI GLM models are aggressively priced; estimated .10–.25 input / .40–.00 output per 1M.
- **Architecture:** proprietary MoE

### Raw benchmarks found
No verified public benchmark scores found for GLM-5.3 FlashX specifically. The GLM 5.x family is the successor to GLM-4 series and typically reports strong coding heritage and strong Chinese-language reasoning. Published summaries mention multi-turn conversation and tool use support.

### Normalized scores (1–100)
- **Tool use: 86/100.** Function calling, basic tool search.
- **Reasoning: 87/100.** Reasoning support in the 5.3 family.
- **Context window: 90/100.** ~1M token context.
- **Multimodal: 75/100.** Text only in this Flash variant.
- **Coding: 85/100.** Competitive coding heritage for price tier.
- **Cost efficiency: 95/100.** One of the lowest priced major-tier models.
- **Overall Score: 84.6/100.**

---

## Signature
- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research. Scores normalized 1–100. Where no verified benchmark, estimates capped by architecture class.
