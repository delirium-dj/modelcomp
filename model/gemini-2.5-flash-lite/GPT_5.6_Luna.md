# Gemini 2.5 Flash Lite — findings by GPT 5.6 Luna

- Source: Google DeepMind/Gemini 2.5 Flash-Lite
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Gemini 2.5 Flash-Lite
- **Short description:** Google’s economical Flash-Lite model for high-volume inference.
- **Provider / access:** Gemini API, AI Studio, and Vertex AI.
- **Release / knowledge:** 2025; cutoff varies by snapshot.
- **IDs:** `google/gemini-2.5-flash-lite`.
- **Context window:** Large context supported; exact limit not verified.
- **Modalities:** Text and image input in supported endpoints; text output.
- **Pricing (as of 2026-10-05):** Current price not verified.
- **Architecture:** Proprietary.

### Raw benchmarks found
- Google model-card materials cover reasoning, coding, multimodal and long-context evaluation, but no current exact score table was extracted.

### Normalized scores (1–100)
- **Tool use: 62/100.** Lite-tier tools, exact score unavailable.
- **Reasoning: 65/100.** Economical reasoning tier.
- **Context window: 76/100.** Large-context support, exact retrieval score unavailable.
- **Multimodal: 72/100.** Image input is supported.
- **Coding: 62/100.** Provisional Lite-tier score.
- **Cost efficiency: 95/100.** High-volume cost optimization is the product focus.
- **Overall Score: 67.4/100.** Useful low-cost model for routine multimodal tasks.

## Signature
- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-10-05
- Method: public web research; scores are normalized interpretations, not official vendor scores.
- Source: https://ai.google.dev/gemini-api/docs/models

