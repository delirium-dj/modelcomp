# DeepSeek V4 Flash — findings by GPT 5.6 Luna

- Source: DeepSeek/DeepSeek V4 Flash
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** DeepSeek V4 Flash
- **Short description:** DeepSeek’s fast, lower-cost V4 model for reasoning and agent workloads.
- **Provider / access:** DeepSeek API; exact current endpoint documented as `deepseek-v4-flash` in release materials.
- **Release / knowledge:** 2026; cutoff not verified.
- **IDs:** `deepseek/deepseek-v4-flash`.
- **Context window:** 1M-token service default is reported for V4.
- **Modalities:** Text, reasoning, tools; vision is provided by a separate Vision Exp model.
- **Pricing (as of 2026-10-05):** Exact current price not verified.
- **Architecture:** DeepSeek V4 Flash; exact parameters not verified here.

### Raw benchmarks found
- DeepSeek V4 release materials document the Flash service and 1M context, but exact Flash benchmark rows were not extracted in this pass.

### Normalized scores (1–100)
- **Tool use: 84/100.** V4 agent positioning and tool workflows support a strong provisional score.
- **Reasoning: 82/100.** Flash tier trades some depth for speed.
- **Context window: 88/100.** 1M service context.
- **Multimodal: 20/100.** Vision is separated into Vision Exp.
- **Coding: 82/100.** Strong V4 coding-family proxy.
- **Cost efficiency: 90/100.** Flash positioning indicates low-cost serving; exact price unavailable.
- **Overall Score: 71.2/100.** Strong efficient text-agent model.

## Signature
- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-10-05
- Method: public web research; scores are normalized interpretations, not official vendor scores.
- Sources: https://api-docs.deepseek.com/news/news260424/ ; https://deepseek.com/news/v4-preview/

