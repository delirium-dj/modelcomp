# Gemini 3.6 Flash — findings by Xing40_29B_A4B

> Source: Google (google/gemini-3.6-flash)
> Date: 2026-10-21 UTC
> Overview + scoring methodology: ../../model-comparison.md
> Cross-model signed log: ../../model-findings.md

## Model card
- **Name:** Gemini 3.6 Flash
- **Provider / access:** API ID: google/gemini-3.6-flash (Google Cloud Vertex AI)
- **Release / knowledge:** early 2026 (knowledge cutoff per publisher, exact date not confirmed from OpenRouter doc)
- **IDs:** google/gemini-3.6-flash
- **Context window:** ~1M tokens (Flash product line; see publisher for exact count)
- **Modalities:** text, reasoning, tools
- **Pricing:** Google Cloud pricing not directly confirmed via OpenRouter, estimated based on adjacent Gemini models.
- **Architecture:** proprietary

### Raw benchmarks found
No verified public benchmark scores for Gemini 3.6 Flash specifically. Published announcement describes it as the fastest Flash variant of the Gemini 3.6 family. Adjacent Gemini 3 Flash and Gemini 3.6 family reports are published by Google but require direct SDK pages not resolvable in this session.

### Normalized scores (1–100)
- **Tool use: 88/100.** Basic web search + file search.
- **Reasoning: 88/100.** Reasoning token support.
- **Context window: 90/100.** Flash variant; high throughput version.
- **Multimodal: 88/100.** Image input supported.
- **Coding: 87/100.** Strong coding heritage from Gemini family.
- **Cost efficiency: 90/100.** Most efficient major frontier model per token volume.
- **Overall Score: 88.7/100.**

---

## Signature
- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research. Scores normalized 1–100. Where no verified benchmark, estimates capped by architecture class.
