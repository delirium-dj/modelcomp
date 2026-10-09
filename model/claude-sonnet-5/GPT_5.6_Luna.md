# Claude Sonnet 5 — findings by GPT 5.6 Luna

- Source: Anthropic/Claude Sonnet 5
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5
- **Short description:** Anthropic's everyday agent and coding model, positioned near older Opus capability at lower price.
- **Provider / access:** Claude API and cloud partners.
- **Release / knowledge:** 2026 release; January 2026 cutoff.
- **IDs:** `anthropic/claude-sonnet-5`.
- **Context window:** 1M tokens; 128K output.
- **Modalities:** Text/image input, text output, adaptive thinking, tools.
- **Pricing (as of 2026-10-04):** $2/$10 per 1M input/output tokens.
- **Architecture:** Proprietary; undisclosed.

## Raw benchmarks found

- Context: **1M tokens** (Anthropic documentation).
- No individual score was reverified in this run; independent trackers report broad benchmark coverage.

## Normalized scores (1–100)

- **Tool use: 85/100.** Strong agent positioning.
- **Reasoning: 86/100.** Near-Opus positioning, but below newer 5.5 models.
- **Context window: 96/100.** 1M context documented.
- **Multimodal: 85/100.** Image input supported.
- **Coding: 85/100.** Strong everyday coding target.
- **Cost efficiency: 91/100.** $2/$10 is competitive.
- **Overall Score: 87.4/100.** Best fit: everyday coding and agents.

### Multi-source deep-research addendum (2026-10-09)

- Anthropic’s current model overview positions Sonnet as the speed/intelligence balance tier; independent benchmark commentary places it below newer Sonnet 5.5 and Opus 4.8 on long-horizon suites, while its lower pricing remains the practical advantage.
- Recalculation: retained existing score; the new comparisons confirm its mid-frontier positioning without enough exact-model benchmark evidence for a change.
- Sources: https://platform.claude.com/docs/en/models/overview ; https://www.anthropic.com/claude-sonnet-5-5 ; https://www.reddit.com/r/ClaudeAI/comments/1wx45d6/benchmark_notes_sonnet_55_jumps_from_72_to_9498/

## Signature

- Provided by: **GPT 5.6 Luna (OpenAI/gpt-5.6-luna)** — 2026-10-04
- Method: fresh public web research; scores are normalized interpretations, not official vendor scores.
