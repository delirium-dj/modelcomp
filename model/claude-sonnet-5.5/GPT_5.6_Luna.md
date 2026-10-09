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
- **Coding: 90/100.** Terminal-Bench 70.6 is useful, and an independent 98-task suite reported 94/98; the external suite is still narrower than flagship evaluations.
- **Cost efficiency: 92/100.** $2/$10 is strong for a 1M-context model.
- **Overall Score: 88.6/100.** Mean of Tool use 86 + Reasoning 86 + Context window 96 + Multimodal 85 + Coding 90.

### Multi-source deep-research addendum (2026-10-09)

- Anthropic documents 1M context, 128K output, adaptive thinking, and $2/$10 pricing. Its launch page says Sonnet 5.5 substantially exceeds Sonnet 5 at much lower cost per task; an independent 98-task run reported 94/98, while still finding Opus 5.5 stronger on harder open-ended work.
- Recalculation: **88.6/100** (coding 90, other dimensions unchanged; half-up mean of 86, 86, 96, 85, 90). The independent coding result supports a modest coding increase from 86 to 90; this remains less than flagship scores because the run is a single external suite.
- Sources: https://platform.claude.com/docs/en/models/sonnet-5-5/overview ; https://www.anthropic.com/claude-sonnet-5-5 ; https://www.reddit.com/r/ClaudeAI/comments/1wx45d6/benchmark_notes_sonnet_55_jumps_from_72_to_9498/

## Signature

- Provided by: **GPT 5.6 Luna (OpenAI/gpt-5.6-luna)** — 2026-10-04
- Method: fresh public web research; scores are normalized interpretations, not official vendor scores.
