# Grok 4 — findings by GPT 5.6 Luna

- Source: xAI/Grok 4
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Grok 4
- **Short description:** xAI’s reasoning model with native tool use and real-time search.
- **Provider / access:** xAI API and Grok consumer service.
- **Release / knowledge:** July 2025.
- **IDs:** `xai/grok-4`.
- **Context window:** Not verified in the consulted model card.
- **Modalities:** Text, tool use, code interpreter/web search; broader media support varies by product.
- **Pricing (as of 2026-10-05):** Not verified.
- **Architecture:** Proprietary.

### Raw benchmarks found
- Humanity’s Last Exam: **25.4%** without tools in public coverage.
- xAI reports native tool use and real-time search; Grok 4 Heavy reached 50% HLE, which is not the base model score.

### Normalized scores (1–100)
- **Tool use: 88/100.** Native tool use and live search are core features.
- **Reasoning: 88/100.** 25.4% HLE is strong, though benchmark configurations vary.
- **Context window: 75/100.** Exact limit not verified.
- **Multimodal: 55/100.** Product demonstrations include image understanding, but exact API coverage varies.
- **Coding: 84/100.** Strong general reasoning/tool profile; no current coding score isolated.
- **Cost efficiency: 65/100.** Current price not verified.
- **Overall Score: 78.0/100.** Strong search-grounded reasoning model, with deployment details varying by product.

## Signature
- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-10-05
- Method: public web research; scores are normalized interpretations, not official vendor scores.
- Sources: https://x.ai/news/grok-4 ; https://data.x.ai/2025-08-20-grok-4-model-card.pdf

