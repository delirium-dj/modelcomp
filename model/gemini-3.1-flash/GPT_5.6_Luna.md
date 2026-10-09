# Gemini 3.1 Flash — findings by GPT 5.6 Luna

- Source: Google DeepMind/Gemini 3.1 Flash
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Gemini 3.1 Flash
- **Short description:** Google’s fast Gemini model tier for responsive API and agent workloads.
- **Provider / access:** Gemini API/Google AI Studio/Google Cloud; exact text endpoint variant not isolated.
- **Release / knowledge:** 2026.
- **IDs:** `google/gemini-3.1-flash`.
- **Context window:** Model-card evaluation materials exist, but exact nominal limit was not verified here.
- **Modalities:** Gemini multimodal family; exact Flash text/image/audio/video matrix varies by endpoint.
- **Pricing (as of 2026-10-05):** Not verified.
- **Architecture:** Proprietary.

### Raw benchmarks found
- Google publishes separate Flash-Lite, Flash-Image, and Flash-Live evaluations; exact general Flash table was not isolated in this pass.

### Normalized scores (1–100)
- **Tool use: 80/100.** Gemini API agent tooling is mature, but exact variant scores are unavailable.
- **Reasoning: 80/100.** Provisional family-level score.
- **Context window: 82/100.** Gemini Flash family supports long context; exact 3.1 Flash measurement unavailable.
- **Multimodal: 78/100.** Family-level multimodal support is strong, endpoint-dependent.
- **Coding: 78/100.** Provisional Flash-tier coding score.
- **Cost efficiency: 85/100.** Flash positioning implies favorable throughput economics; exact price unavailable.
- **Overall Score: 79.6/100.** Provisional result pending the exact 3.1 Flash model card.

### Multi-source deep-research addendum (2026-10-09)

- Public searches surfaced Google’s closely related Gemini 3.1 Flash-Lite card rather than a stable separate 3.1 Flash card. The official Lite card covers speed, reasoning, multimodality, tools, coding, and long context; version identity remains important.
- Recalculation: retained existing score; Lite evidence was not transferred to Flash.
- Sources: https://deepmind.google/models/model-cards/gemini-3-1-flash-lite/ ; https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-flash-lite/

## Signature
- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-10-05
- Method: public web research; scores are provisional normalized interpretations.
- Source: https://deepmind.google/models/model-cards/gemini-3-1-flash-lite/
