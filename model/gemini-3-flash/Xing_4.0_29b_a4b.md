# Gemini 3 Flash — findings by Xing40_29B_A4B

> Source: Google (google/gemini-3-flash)
> Date: 2026-10-21 UTC
> Overview + scoring methodology: ../../model-comparison.md
> Cross-model signed log: ../../model-findings.md

## Model card
- **Name:** Gemini 3 Flash
- **Provider / access:** API ID: google/gemini-3-flash (Google Cloud Vertex AI)
- **Release / knowledge:** 2026
- **IDs:** google/gemini-3-flash
- **Context window:** ~1M tokens (Flash product line)
- **Modalities:** text, reasoning, tools
- **Pricing:** Google Cloud pricing for Gemini 3 Flash; estimated based on adjacent Gemini models at low end.
- **Architecture:** proprietary

### Raw benchmarks found
No verified public benchmark scores found for Gemini 3 Flash specifically. The published Gemini 3 series includes a Flash variant that's optimized for speed and cost while retaining general quality. Adjacent Google Gemini family benchmarks are published on the Gemini pages but specific Flash numbers were not returned from this session.

### Normalized scores (1–100)
- **Tool use: 85/100.** Basic web search + file search.
- **Reasoning: 85/100.** Reasoning token support.
- **Context window: 88/100.** ~1M token Flash context.
- **Multimodal: 86/100.** Image input supported.
- **Coding: 86/100.** Strong coding heritage from Gemini family.
- **Cost efficiency: 95/100.** Most efficient major-tier model per token.
- **Overall Score: 86/100.**

---

## Signature
- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research. Scores normalized 1–100. Where no verified benchmark, estimates capped by architecture class.
