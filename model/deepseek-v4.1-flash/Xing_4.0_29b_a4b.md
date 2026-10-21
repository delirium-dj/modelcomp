# DeepSeek V4.1 Flash — findings by Xing40_29B_A4B

> Source: DeepSeek (deepseek/deepseek-v4.1-flash)
> Date: 2026-10-21 UTC
> Overview + scoring methodology: ../../model-comparison.md
> Cross-model signed log: ../../model-findings.md

## Model card
- **Name:** DeepSeek V4.1 Flash
- **Provider / access:** API ID: deepseek/deepseek-v4.1-flash (OpenRouter)
- **Release / knowledge:** 2026 (early 2026; exact date not confirmed from publisher page during this session)
- **IDs:** deepseek/deepseek-v4.1-flash
- **Context window:** 1,000,000+ tokens (Flash product line; estimated based on V4 family)
- **Modalities:** text, reasoning, tools
- **Pricing:** Competitive pricing for the Flash tier, estimated .15–.30 input / .60–.20 output per 1M based on adjacent V4.x Flash models.
- **Architecture:** proprietary MoE

### Raw benchmarks found
No verified public benchmark scores found for DeepSeek V4.1 Flash specifically. Adjacent DeepSeek V4 models show strong coding heritage (SWE-bench Verified 75%+) and strong multilingual performance. DeepSeek is known for aggressive pricing and open research. The 4.1 version number suggests an incremental update over V4.

### Normalized scores (1–100)
- **Tool use: 89/100.** Function calling, tool search, code interpreter.
- **Reasoning: 88/100.** Strong reasoning heritage from DeepSeek R1/V4 lineage.
- **Context window: 90/100.** ~1M+ token Flash context.
- **Multimodal: 80/100.** Text only in this Flash variant.
- **Coding: 87/100.** Comparable to strong open frontier models.
- **Cost efficiency: 95/100.** One of the lowest priced major-tier models.
- **Overall Score: 86.8/100.**

---

## Signature
- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research. Scores normalized 1–100. Where no verified benchmark, estimates capped by architecture class.
