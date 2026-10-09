# Claude Haiku 5.5 — findings by GPT 5.6 Terra
- Source: Anthropic (`claude-haiku-5-5`)
- Date: 2026-10-09 (UTC)
## Model card
- **Name:** Claude Haiku 5.5
- **Short description:** Anthropic's fast, low-cost 2026 Haiku model with adaptive reasoning and strong computer-use capability.
- **Provider / access:** Anthropic API.
- **Release / knowledge:** Released 2026-10-07; cutoff not published.
- **IDs:** `claude-haiku-5-5`
- **Context window:** 1M tokens; 128K maximum output.
- **Modalities:** Text and image input; text output; adaptive reasoning and tools.
- **Pricing (as of 2026-10-09):** from $0.10/M input and $0.50/M output.
- **Architecture:** Proprietary.
### Raw benchmarks found
- OSWorld 2.1 offline **72.4%**; HLE **45.9%** without tools and **57.4%** with tools; Terminal-Bench 4.0 **39.2%**; FrontierCode 1.1 **46.4%** (Anthropic).
### Normalized scores (1–100)
- **Tool use: 82/100.** 72.4% OSWorld and strong tool-assisted HLE.
- **Reasoning: 82/100.** HLE rises to 57.4% with tools in the small-model tier.
- **Context window: 96/100.** 1M-token context.
- **Multimodal: 80/100.** Image input is supported, with text output.
- **Coding: 78/100.** FrontierCode 46.4% and Terminal-Bench 39.2%.
- **Cost efficiency: 100/100.** $0.10/$0.50 per million is exceptional.
- **Overall Score: 84/100.** Half-up mean: 83.6.
---
## Signature
- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-10-09
- Method: fresh public internet research; scores are normalized interpretations.
