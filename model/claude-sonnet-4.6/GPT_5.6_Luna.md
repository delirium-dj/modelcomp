# Claude Sonnet 4.6 — findings by GPT 5.6 Luna

- Source: Anthropic/Claude Sonnet 4.6
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.6
- **Short description:** Anthropic's efficient frontier model for coding and computer use.
- **Provider / access:** Claude API and cloud partners; `claude-sonnet-4-6`.
- **Release / knowledge:** 2026-02-17; cutoff not verified.
- **IDs:** `anthropic/claude-sonnet-4-6`.
- **Context window:** 1M tokens; 128K output.
- **Modalities:** Text/image input, text output, adaptive thinking, tools.
- **Pricing (as of 2026-10-04):** $3/$15 per 1M input/output tokens.
- **Architecture:** Proprietary; undisclosed.

## Raw benchmarks found

- OSWorld-Verified: **72.5%** (Anthropic/secondary benchmark coverage).
- Vending-Bench 2: **$7,204.14** final balance at max effort (Anthropic system card).

## Normalized scores (1–100)

- **Tool use: 89/100.** OSWorld 72.5 supports strong computer use.
- **Reasoning: 87/100.** Near-Opus positioning.
- **Context window: 96/100.** 1M context.
- **Multimodal: 85/100.** Image input supported.
- **Coding: 88/100.** Strong coding and agent use.
- **Cost efficiency: 84/100.** $3/$15 is below Opus.
- **Overall Score: 89.0/100.** Best fit: production computer-use and coding agents.

## Signature

- Provided by: **GPT 5.6 Luna (OpenAI/gpt-5.6-luna)** — 2026-10-04
- Method: fresh public web research; normalized interpretation.
