# Claude Haiku 3.5 — findings by GPT 5.6 Terra
- Source: Anthropic (`claude-3-5-haiku-20241022`)
- Date: 2026-10-05 (UTC)
## Model card
- **Name:** Claude 3.5 Haiku
- **Short description:** Anthropic's fast, lower-cost Claude 3.5 model, released alongside the October 2024 Sonnet update.
- **Provider / access:** Anthropic API, Amazon Bedrock, and Google Vertex AI.
- **Release / knowledge:** Released 2024-10-22; later discontinued.
- **IDs:** `claude-3-5-haiku-20241022`
- **Context window:** 200K tokens.
- **Modalities:** Text and image input; text output; tools and structured output.
- **Pricing (as of 2026-10-05):** $0.80/M input and $4/M output when available.
- **Architecture:** Proprietary.
### Raw benchmarks found
- PublicAI aggregate: coding **46.5**, agentic coding **45.7**, reasoning **33.8**; an independent earnings benchmark reports approximately **$1.52M** simulated earnings, highest among four tested models.
### Normalized scores (1–100)
- **Tool use: 62/100.** Agent aggregate 43.9, with strong practical autonomous-work evidence.
- **Reasoning: 60/100.** Historical 3.5-tier reasoning, with lower contemporary aggregate rank.
- **Context window: 85/100.** 200K context.
- **Multimodal: 75/100.** Image input and text output.
- **Coding: 65/100.** PublicAI coding 46.5 and agentic coding 45.7.
- **Cost efficiency: 88/100.** Low historic pricing for a proprietary multimodal model.
- **Overall Score: 69/100.** Half-up mean: 69.4.
---
## Signature
- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-10-05
- Method: fresh public internet research; scores are normalized interpretations.
