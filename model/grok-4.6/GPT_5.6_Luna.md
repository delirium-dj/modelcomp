# Grok 4.6 — findings by GPT 5.6 Luna

- Source: xAI/Grok 4.6
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.6
- **Short description:** xAI's reasoning model for coding, search, and tool-enabled workflows.
- **Provider / access:** xAI API; model ID `grok-4.6`.
- **Release / knowledge:** 2026 release; cutoff not verified.
- **IDs:** `xai/grok-4.6`.
- **Context window:** 500K tokens.
- **Modalities:** Text/image input, text output, reasoning, function calling, search and code tools.
- **Pricing (as of 2026-10-04):** Approximately $2/$6 per 1M input/output tokens; long-context pricing may increase above 200K.
- **Architecture:** Proprietary; undisclosed.

## Raw benchmarks found

- Context: **500K tokens** (xAI documentation coverage).
- Independent trackers report **9 benchmark scores**, but exact rows were not reverified in this run.

## Normalized scores (1–100)

- **Tool use: 88/100.** Search, code, and function tools are documented.
- **Reasoning: 88/100.** Strong current frontier positioning.
- **Context window: 91/100.** 500K is large but below 1M peers.
- **Multimodal: 85/100.** Text/image input.
- **Coding: 87/100.** Coding and tool workflows are core uses.
- **Cost efficiency: 87/100.** Competitive base pricing with long-context caveat.
- **Overall Score: 87.8/100.** Best fit: tool-rich search and coding agents.

### Multi-source deep-research addendum (2026-10-09)

- xAI documentation confirms Grok 4.6 availability and regional pricing; independent coverage reports a 500K context positioning and lower cost, but much of the benchmark discussion remains review- or video-based rather than a reproducible public evaluation.
- Recalculation: retained existing score; access/pricing evidence is stronger than exact-model benchmark evidence.
- Sources: https://docs.x.ai/developers/models/grok-4.6 ; https://www.youtube.com/watch?v=s-lTTWPvQWY ; https://data.x.ai/2025-08-20-grok-4-model-card.pdf

## Signature

- Provided by: **GPT 5.6 Luna (OpenAI/gpt-5.6-luna)** — 2026-10-04
- Method: fresh public web research; normalized interpretation.
