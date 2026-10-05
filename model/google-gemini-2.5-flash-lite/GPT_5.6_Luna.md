# Google Gemini 2.5 Flash-Lite — findings by GPT 5.6 Luna

- Source: Google/Gemini 2.5 Flash-Lite
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Google Gemini 2.5 Flash-Lite
- **Short description:** Google-hosted naming variant of the economical Gemini 2.5 Flash-Lite model.
- **Provider / access:** Google Gemini API/Cloud; exact alias mapping requires provider documentation.
- **Release / knowledge:** 2025; snapshot varies.
- **IDs:** `google-gemini-2.5-flash-lite`.
- **Context window:** Large-context support; exact limit not verified.
- **Modalities:** Text and image input in supported endpoints.
- **Pricing (as of 2026-10-05):** Not verified.
- **Architecture:** Proprietary.

### Raw benchmarks found
- The identity appears to duplicate or alias Gemini 2.5 Flash-Lite; no separate benchmark evidence was found.

### Normalized scores (1–100)
- **Tool use: 62/100.** Alias-level proxy.
- **Reasoning: 65/100.** Alias-level proxy.
- **Context window: 76/100.** Family proxy.
- **Multimodal: 72/100.** Family proxy.
- **Coding: 62/100.** Family proxy.
- **Cost efficiency: 95/100.** Lite-tier proxy.
- **Overall Score: 67.4/100.** Alias score; should not be interpreted as a distinct checkpoint.

## Signature
- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-10-05
- Method: public web research; scores are normalized interpretations, not official vendor scores.
- Source: https://ai.google.dev/gemini-api/docs/models

