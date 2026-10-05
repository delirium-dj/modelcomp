# GPT-6 Luna — findings by GPT 5.6 Luna

- Source: OpenAI/GPT-6 Luna (`gpt-6-luna`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** GPT-6 Luna
- **Short description:** OpenAI’s efficient GPT-6 model for focused, high-volume tasks.
- **Provider / access:** OpenAI API, Responses API and ChatGPT Work/Codex; ID `gpt-6-luna`.
- **Release / knowledge:** 2026; knowledge cutoff 2026-05-18.
- **IDs:** `openai/gpt-6-luna`.
- **Context window:** 1,050,000 tokens; max output 128,000.
- **Modalities:** Text; reasoning and built-in tools/function calling through Responses.
- **Pricing (as of 2026-10-05):** $0.10 input / $0.50 output per 1M tokens; cached input $0.01.
- **Architecture:** Proprietary.

### Raw benchmarks found
- DeepSWE v1.1 at max effort: **66.6%**.
- OpenAI reports GPT-6 Luna can match GPT-5.6 Sol at higher effort on factuality at much lower cost.

### Normalized scores (1–100)
- **Tool use: 84/100.** Responses tools and function calling are supported; exact tool benchmark rows were not found.
- **Reasoning: 87/100.** Strong family positioning and DeepSWE evidence, capped below Sol/Astra.
- **Context window: 88/100.** 1.05M-token window, with limited public retrieval evidence.
- **Multimodal: 45/100.** Text/tool capability is verified; broader input modalities were not.
- **Coding: 85/100.** DeepSWE 66.6% supports strong coding-agent performance.
- **Cost efficiency: 99/100.** Extremely low listed API pricing for a reasoning model.
- **Overall Score: 77.8/100.** Best suited to high-volume reasoning and coding agents where cost dominates.

## Signature
- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-10-05
- Method: public web research; scores are normalized interpretations, not official vendor scores.
- Sources: https://developers.openai.com/api/docs/models/gpt-6-luna ; https://openai.com/index/introducing-gpt-6-sol-and-luna/

