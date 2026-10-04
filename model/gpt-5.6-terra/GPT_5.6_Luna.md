# GPT-5.6 Terra — findings by GPT 5.6 Luna

- Source: OpenAI/GPT-5.6 Terra
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra
- **Short description:** OpenAI's balanced GPT-5.6 tier for reasoning, coding, and long-context API work.
- **Provider / access:** OpenAI API and Amazon Bedrock; Bedrock ID `us.openai.gpt-5.6-terra`.
- **Release / knowledge:** 2026 release; cutoff not verified.
- **IDs:** `openai/gpt-5.6-terra`.
- **Context window:** Approximately 1.05M tokens; Bedrock documents short-context pricing at ≤272K input.
- **Modalities:** Text/image input, text output, reasoning, and tools.
- **Pricing (as of 2026-10-04):** Approximately $2/$12 per 1M input/output tokens for short context; long-context surcharges apply.
- **Architecture:** Proprietary; undisclosed.

## Raw benchmarks found

- Context window: **1.05M tokens** (OpenAI ecosystem documentation).
- No fresh independently verified benchmark score was found in this run.

## Normalized scores (1–100)

- **Tool use: 86/100.** OpenAI tool/API support is strong; fresh score evidence is incomplete.
- **Reasoning: 86/100.** Balanced tier positioning supports high reasoning, below Sol/Pro.
- **Context window: 97/100.** Approximately 1.05M tokens, with long-context pricing caveats.
- **Multimodal: 85/100.** Text/image input documented.
- **Coding: 86/100.** Positioned for coding and agents, but no fresh benchmark number verified.
- **Cost efficiency: 88/100.** Lower-tier pricing is competitive, though long-context surcharges reduce value.
- **Overall Score: 88/100.** Best fit: general API workloads needing long context at balanced cost.

## Signature

- Provided by: **GPT 5.6 Luna (OpenAI/gpt-5.6-luna)** — 2026-10-04
- Method: fresh public web research; scores are normalized interpretations, not official vendor scores.
