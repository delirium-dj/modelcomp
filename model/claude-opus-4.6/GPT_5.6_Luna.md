# Claude Opus 4.6 — findings by GPT 5.6 Luna

- Source: Anthropic/Claude Opus 4.6
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6
- **Short description:** Anthropic's prior flagship model for reasoning, coding, and agents.
- **Provider / access:** Claude API and cloud partners.
- **Release / knowledge:** 2026 release; cutoff not verified.
- **IDs:** `anthropic/claude-opus-4-6`.
- **Context window:** 1M tokens reported in comparison material.
- **Modalities:** Text/image input, text output, thinking, tools.
- **Pricing (as of 2026-10-04):** Current rate not reverified.
- **Architecture:** Proprietary; undisclosed.

## Raw benchmarks found

- ARC-AGI-2: **68.8%** (Google comparison table).
- Context: **1M tokens** (comparison material).

## Normalized scores (1–100)

- **Tool use: 87/100.** Strong agent heritage.
- **Reasoning: 88/100.** ARC-AGI-2 68.8 is solid.
- **Context window: 95/100.** 1M reported.
- **Multimodal: 85/100.** Image input supported.
- **Coding: 88/100.** Strong coding focus, but current fresh evidence limited.
- **Cost efficiency: 70/100.** Current pricing was not reverified.
- **Overall Score: 88.6/100.** Best fit: complex coding and reasoning below the newer Opus generations.

### Multi-source deep-research addendum (2026-10-09)

- Anthropic verifies 1M context, 128K output, and $5/$25 pricing, with premium rates above 200K input. The system card and independent coverage report MRCR 1M retrieval at 76%, Terminal-Bench 2.0 at 65.4%, and strong GDPval knowledge-work performance.
- Recalculation: retained existing score; retrieval evidence increases confidence in Context but does not meet the project’s highest retrieval threshold.
- Sources: https://platform.claude.com/docs/en/models/opus-4-6/overview ; https://www.anthropic.com/news/claude-opus-4-6 ; https://www.itpro.com/technology/artificial-intelligence/anthropic-reveals-claude-opus-4-6-enterprise-focused-model-1-million-token-context-window

## Signature

- Provided by: **GPT 5.6 Luna (OpenAI/gpt-5.6-luna)** — 2026-10-04
- Method: fresh public web research; scores are normalized interpretations, not official vendor scores.
