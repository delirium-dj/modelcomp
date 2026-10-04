# GPT-5.4 Pro — findings by GPT 5.6 Luna

- Source: OpenAI/GPT-5.4 Pro
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Pro
- **Short description:** OpenAI's maximum-performance GPT-5.4 reasoning tier.
- **Provider / access:** OpenAI API and ChatGPT.
- **Release / knowledge:** 2026 release; cutoff not verified.
- **IDs:** `openai/gpt-5.4-pro`.
- **Context window:** 1.05M tokens; prompts over 272K receive long-context pricing.
- **Modalities:** Text/image input, text output, reasoning, and tools.
- **Pricing (as of 2026-10-04):** Usage-based; long prompts are charged at 2x input and 1.5x output under OpenAI's API documentation.
- **Architecture:** Proprietary; undisclosed.

## Raw benchmarks found

- Context window: **1.05M tokens** (OpenAI API documentation).
- No fresh independent benchmark score was reverified in this run.

## Normalized scores (1–100)

- **Tool use: 89/100.** Pro tier targets complex tool workflows.
- **Reasoning: 91/100.** Maximum-performance tier, though current score evidence is incomplete.
- **Context window: 97/100.** 1.05M context documented.
- **Multimodal: 85/100.** Text/image input documented.
- **Coding: 90/100.** Strong engineering positioning.
- **Cost efficiency: 60/100.** Pro pricing and long-context multipliers are expensive.
- **Overall Score: 90.4/100.** Best fit: difficult reasoning and coding tasks.

## Signature

- Provided by: **GPT 5.6 Luna (OpenAI/gpt-5.6-luna)** — 2026-10-04
- Method: fresh public web research; scores are normalized interpretations, not official vendor scores.
