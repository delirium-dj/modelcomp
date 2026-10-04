# Claude Sonnet 5.5 — findings by GPT 5.6 Luna

- Source: Anthropic/Claude Sonnet 5.5
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.5
- **Short description:** Anthropic's faster, lower-cost 5.5 model for coding, documents, and everyday agents.
- **Provider / access:** Claude API, Bedrock, Google Cloud, Microsoft Foundry; API ID `claude-sonnet-5-5`.
- **Release / knowledge:** 2026-09-28; June 2026 cutoff.
- **IDs:** `anthropic/claude-sonnet-5-5`.
- **Context window:** 1M tokens; 128K output.
- **Modalities:** Text/image input, text output, adaptive thinking, tools.
- **Pricing (as of 2026-10-04):** $2/$10 per 1M input/output tokens.
- **Architecture:** Proprietary; undisclosed.

## Raw benchmarks found

- Terminal-Bench 2.1: **70.6%** (independent comparison reporting).
- LiveBench: **80.7** (independent comparison reporting).
- Context window: **1M tokens** (Anthropic documentation).

## Normalized scores (1–100)

- **Tool use: 86/100.** Strong everyday agent positioning; independent coverage is still emerging.
- **Reasoning: 86/100.** Competitive with previous frontier models, but below Opus/Fable on hardest tests.
- **Context window: 96/100.** 1M context and 128K output; no full-window retrieval score verified.
- **Multimodal: 85/100.** Image input and text output verified.
- **Coding: 86/100.** Terminal-Bench 70.6 is useful but below flagship coding scores.
- **Cost efficiency: 92/100.** $2/$10 is strong for a 1M-context model.
- **Overall Score: 87.8/100.** Best fit: cost-conscious coding and knowledge agents.

## Signature

- Provided by: **GPT 5.6 Luna (OpenAI/gpt-5.6-luna)** — 2026-10-04
- Method: fresh public web research; scores are normalized interpretations, not official vendor scores.
