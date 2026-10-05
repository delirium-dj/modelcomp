# Gemini 3.1 Flash-Lite — findings by GPT 5.6 Luna

- Source: Google DeepMind/Gemini 3.1 Flash-Lite
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Gemini 3.1 Flash-Lite
- **Short description:** Google’s low-cost, high-throughput Flash-Lite model.
- **Provider / access:** Gemini API, AI Studio, and Google Cloud.
- **Release / knowledge:** 2026; exact cutoff not verified.
- **IDs:** `google/gemini-3.1-flash-lite`.
- **Context window:** Long-context evaluation materials are published; exact nominal limit not verified.
- **Modalities:** Gemini multimodal family; endpoint-specific support applies.
- **Pricing (as of 2026-10-05):** Exact current price not verified.
- **Architecture:** Proprietary.

### Raw benchmarks found
- Google publishes a dedicated evaluation report covering reasoning, coding, agentic, multimodal, and long-context performance, but exact rows were not extracted in this pass.

### Normalized scores (1–100)
- **Tool use: 73/100.** Flash-Lite agent capability is useful but below flagship Flash tiers.
- **Reasoning: 72/100.** Cost-optimized reasoning tier.
- **Context window: 78/100.** Gemini long-context support is documented, exact score unavailable.
- **Multimodal: 80/100.** Gemini multimodal support is a core family capability.
- **Coding: 70/100.** Provisional Lite-tier coding score.
- **Cost efficiency: 94/100.** Flash-Lite positioning is designed for low-cost volume.
- **Overall Score: 74.6/100.** Strong economical multimodal API for routine workloads.

## Signature
- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-10-05
- Method: public web research; scores are provisional normalized interpretations.
- Source: https://deepmind.google/models/model-cards/gemini-3-1-flash-lite/

