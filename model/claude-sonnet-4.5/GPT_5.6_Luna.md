# Claude Sonnet 4.5 — findings by GPT 5.6 Luna

- Source: Anthropic/Claude Sonnet 4.5
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Claude Sonnet 4.5
- **Short description:** Anthropic’s balanced Claude model for coding, reasoning, and agentic work.
- **Provider / access:** Anthropic API and hosted partners; exact current endpoint details not verified here.
- **Release / knowledge:** 2025-era Claude model family.
- **IDs:** `anthropic/claude-sonnet-4.5`.
- **Context window:** Exact current limit not verified in the sources consulted.
- **Modalities:** Text and image input, text output, tool use.
- **Pricing (as of 2026-10-05):** Exact current price not verified.
- **Architecture:** Proprietary.

### Raw benchmarks found
- Public comparative coverage lists Claude Sonnet 4.5 around **73.3% SWE-Bench Verified** and **50.7% OSWorld** in the Gemini 3.5 Flash-Lite model-card comparison.
- No current official standalone Sonnet 4.5 model card was located in this pass.

### Normalized scores (1–100)
- **Tool use: 78/100.** OSWorld 50.7% supports capable computer use, though below newer frontier systems.
- **Reasoning: 82/100.** Balanced Sonnet positioning and comparative results support strong general reasoning.
- **Context window: 78/100.** Large-context use is supported, but exact current limit was not verified.
- **Multimodal: 72/100.** Image input is supported; no verified audio/video evidence.
- **Coding: 83/100.** SWE-Bench Verified 73.3% is strong practical coding evidence.
- **Cost efficiency: 72/100.** Exact current price was not verified and Sonnet is a paid tier.
- **Overall Score: 78.6/100.** Strong balanced coding assistant with less evidence for current frontier performance.

### Multi-source deep-research addendum (2026-10-09)

- Anthropic documents 200K context, 64K output, and $3/$15 pricing for Sonnet 4.5; its system card reports strong coding, cyber, and agent results, with context resets used in some evaluations. Independent theorem-proving work still finds substantial difficulty on hard formal tasks.
- Recalculation: retained existing score; broad capability evidence is strong, but methodology and context-management differences limit a numeric increase.
- Sources: https://platform.claude.com/docs/en/models/sonnet-4-5/overview ; https://assets.anthropic.com/m/12f214efcc2f457a/original/Claude-Sonnet-4-5-System-Card.pdf ; https://arxiv.org/abs/2604.23698

## Signature
- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-10-05
- Method: public web research; scores are normalized interpretations, not official vendor scores.
- Sources: https://deepmind.google/models/model-cards/gemini-3-5-flash-lite/ ; https://www.anthropic.com/
