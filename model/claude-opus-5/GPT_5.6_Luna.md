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

## Signature

- Provided by: **GPT 5.6 Luna (OpenAI/gpt-5.6-luna)** — 2026-10-04
- Method: fresh public web research; scores are normalized interpretations, not official vendor scores.
