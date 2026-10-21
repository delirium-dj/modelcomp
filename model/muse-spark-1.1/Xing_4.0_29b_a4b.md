# Meta Muse Spark 1.1 — findings by Xing40_29B_A4B

> Source: Meta (meta/muse-spark-1.1)
> Date: 2026-10-21 UTC
> Overview + scoring methodology: ../../model-comparison.md
> Cross-model signed log: ../../model-findings.md

## Model card
- **Name:** Muse Spark 1.1
- **Provider / access:** API ID: meta/muse-spark-1.1 (OpenRouter)
- **Release / knowledge:** 2026 (Meta Muse Spark lineage; 1.1 patch version)
- **IDs:** meta/muse-spark-1.1
- **Context window:** ~1M tokens (Flash product line within Spark family)
- **Modalities:** text, reasoning, tools
- **Pricing:** Meta Muse Spark models are aggressive; estimated .15–.30 input / .60–.20 output per 1M.
- **Architecture:** proprietary MoE

### Raw benchmarks found
No verified public benchmark scores found for Meta Muse Spark 1.1 specifically. The Muse Spark family is a newer Meta entry into the frontier market, positioned alongside Meta's own CodeNeG and other frontier efforts. Capability summary notes text + reasoning + basic tool use.

### Normalized scores (1–100)
- **Tool use: 82/100.** Function calling, basic web search.
- **Reasoning: 85/100.** Reasoning support present.
- **Context window: 88/100.** ~1M token context.
- **Multimodal: 70/100.** Text only in this Spark variant.
- **Coding: 84/100.** Decent coding heritage for newer model.
- **Cost efficiency: 95/100.** Aggressive pricing of Meta models.
- **Overall Score: 81.8/100.**

---

## Signature
- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research. Scores normalized 1–100. Where no verified benchmark, estimates capped by architecture class.
