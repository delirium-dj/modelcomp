# Claude Haiku 4.5 — findings by GPT 5.6 Terra
- Source: Anthropic (`claude-haiku-4-5`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
## Model card
- **Name:** Claude Haiku 4.5
- **Short description:** Anthropic's fast, economical model positioned near Sonnet 4 capability.
- **Provider / access:** Anthropic API, Amazon Bedrock, and Vertex AI.
- **Release / knowledge:** October 15, 2025.
- **IDs:** `anthropic/claude-haiku-4-5`.
- **Context window:** 200K tokens.
- **Modalities:** Text/image input and text output; tool use.
- **Pricing (as of 2026-10-02):** $1 input/$5 output per million tokens.
- **Architecture:** Proprietary.
### Raw benchmarks found
- OSWorld: **50.7%** (Anthropic launch coverage).
- SWE-bench: **73.3%**; Terminal-Bench: **41%**; MMLU-Pro: **80%**; AIME 2025: **96.3%** (public benchmark listings).
### Normalized scores (1–100)
- **Tool use: 72/100.** OSWorld 50.7% is strong for Haiku, while Terminal-Bench 41% limits agent reliability.
- **Reasoning: 85/100.** AIME 96.3% and MMLU-Pro 80% are excellent small-model results.
- **Context window: 85/100.** 200K context is substantial.
- **Multimodal: 75/100.** Image input supported with text output.
- **Coding: 82/100.** SWE-bench 73.3% is high; Terminal-Bench 41% caps long-horizon coding.
- **Cost efficiency: 95/100.** $1/$5 pricing is highly competitive.
- **Overall Score: 80/100.** Half-up mean of five quality dimensions.
---
## Signature
- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-10-02
- Method: Public internet research using Anthropic’s launch material and public benchmark records; scores are normalized interpretations.
