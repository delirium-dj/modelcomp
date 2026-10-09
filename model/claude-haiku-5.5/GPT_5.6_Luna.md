# Claude Haiku 5.5 — findings by GPT 5.6 Luna

- Source: Anthropic/Claude Haiku 5.5
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Claude Haiku 5.5
- **Short description:** Fast Anthropic Haiku model for high-volume tasks.
- **Provider / access:** Anthropic API and partner platforms.
- **Release / knowledge:** 2026; cutoff not verified.
- **IDs:** `anthropic/claude-haiku-5.5`.
- **Context window:** Not verified.
- **Modalities:** Text/image input, text output, tools.
- **Pricing (as of 2026-10-08):** Not verified.
- **Architecture:** Proprietary.

### Raw benchmarks found
- Anthropic’s model overview lists the model, but no exact benchmark table was located in this pass.

### Normalized scores (1–100)
- **Tool use: 72/100.** Haiku-tier agent capability.
- **Reasoning: 75/100.** Provisional family score.
- **Context window: 72/100.** Exact limit unavailable.
- **Multimodal: 68/100.** Image input supported; other modalities unverified.
- **Coding: 72/100.** Provisional fast-tier coding score.
- **Cost efficiency: 88/100.** Haiku positioning favors efficiency.
- **Overall Score: 71.8/100.** Conservative provisional result.

### Multi-source deep-research addendum (2026-10-09)

- Anthropic’s docs and launch page position Haiku 5.5 as the fastest small model for high-volume/cost-sensitive applications. Independent reporting gives $0.10/$0.50 pricing below 100K input and notes strong gains over Haiku 4.5; an external coding test remains early and effort-sensitive.
- Recalculation: retained existing score; the value case is strong, but independent capability coverage is too new for a numeric change.
- Sources: https://platform.claude.com/docs/en/models/haiku-5-5/overview ; https://www.anthropic.com/claude-haiku-5-5 ; https://www.datacamp.com/blog/claude-haiku-5-5

## Signature
- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-10-08
- Method: public web research; scores are provisional normalized interpretations.
- Source: https://platform.claude.com/docs/en/models/overview
