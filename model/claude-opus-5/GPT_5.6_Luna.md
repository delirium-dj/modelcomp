# Claude Opus 5 — findings by GPT 5.6 Luna

- Source: Anthropic/Claude Opus 5
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic's high-end reasoning model for coding, agents, and knowledge work.
- **Provider / access:** Claude API and cloud partners; exact current API ID was not reverified in this run.
- **Release / knowledge:** 2026 release; cutoff not verified.
- **IDs:** Anthropic Claude Opus 5; no verified Zen Free ID.
- **Context window:** 1M tokens reported in current model documentation.
- **Modalities:** Text/image input, text output, thinking, and tools.
- **Pricing (as of 2026-10-04):** $5/$25 per 1M input/output tokens reported in current comparison material.
- **Architecture:** Proprietary; undisclosed.

## Raw benchmarks found

- Terminal-Bench 4.0: **51.8%** (Google/Anthropic comparison table reproduced by DataCamp).
- OSWorld 2.0 partial: **75.4%** (Anthropic comparison table).
- Humanity's Last Exam: **56.6% no tools** (Anthropic comparison table).
- LiveBench: **80.1** (independent comparison tracking).

## Normalized scores (1–100)

- **Tool use: 91/100.** Strong computer-use and agent results; harness differences cap confidence.
- **Reasoning: 92/100.** HLE 56.6 and strong general reasoning evidence.
- **Context window: 96/100.** 1M-token support is strong; full-window independent retrieval evidence is limited.
- **Multimodal: 85/100.** Image input is supported; output remains text.
- **Coding: 91/100.** Strong terminal and coding-agent results, though newer Opus releases improve the ceiling.
- **Cost efficiency: 76/100.** Capable but expensive at $5/$25.
- **Overall Score: 91.0/100.** Best fit: high-quality agentic coding and research.

### Deep-research addendum (2026-10-09)

- Anthropic’s Opus page reports a reproduced public Terminal-Bench result of **52.3%** for Opus 5, close to the public leaderboard’s **51.8%**, within reported noise.
- The same documentation reports Terminal-Bench-Science **29.0%** in its reproduction and emphasizes safeguard interventions as a source of benchmark variance.
- Source: https://www.anthropic.com/claude/opus

### Multi-source deep-research addendum (2026-10-09)

- Anthropic’s release material positions Opus 5 as near-Fable capability at $5/$25 per million tokens, with an effort control; independent reporting confirms the price/capability tradeoff, while current terminal evidence is weaker than newer Opus releases.
- Recalculation: **retained 91.0/100**. New evidence improves confidence in cost and effort behavior but does not add enough exact-model independent benchmark coverage to change the five scored dimensions.
- Sources: https://www.anthropic.com/claude/opus ; https://www.axios.com/2026/07/24/anthropic-releases-new-model-opus-5 ; https://platform.claude.com/docs/en/models/overview

## Signature

- Provided by: **GPT 5.6 Luna (OpenAI/gpt-5.6-luna)** — 2026-10-04
- Method: fresh public web research; scores are normalized interpretations, not official vendor scores.
