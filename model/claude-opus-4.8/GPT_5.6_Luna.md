# Claude Opus 4.8 — findings by GPT 5.6 Luna

- Source: Anthropic/Claude Opus 4.8
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8
- **Short description:** Anthropic's prior flagship reasoning and coding model.
- **Provider / access:** Claude API and cloud partners.
- **Release / knowledge:** 2026 release; January 2026 cutoff.
- **IDs:** `anthropic/claude-opus-4-8`.
- **Context window:** 1M tokens; 128K output.
- **Modalities:** Text/image input, text output, adaptive thinking, tools.
- **Pricing (as of 2026-10-04):** $5/$25 per 1M input/output tokens.
- **Architecture:** Proprietary; undisclosed.

## Raw benchmarks found

- Terminal-Bench 2.1: **87.0%** (independent comparison reporting).
- ARC-AGI-2: **89.2%** (independent comparison reporting).
- Context window: **1M tokens** (Anthropic documentation).

## Normalized scores (1–100)

- **Tool use: 90/100.** Strong coding-agent performance.
- **Reasoning: 91/100.** ARC-AGI-2 89.2 supports excellent abstract reasoning.
- **Context window: 96/100.** 1M context is documented.
- **Multimodal: 85/100.** Image input is supported; output is text.
- **Coding: 91/100.** Terminal-Bench result is frontier-grade.
- **Cost efficiency: 76/100.** High $5/$25 pricing.
- **Overall Score: 90.6/100.** Best fit: demanding coding and research.

## Signature

- Provided by: **GPT 5.6 Luna (OpenAI/gpt-5.6-luna)** — 2026-10-04
- Method: fresh public web research; scores are normalized interpretations, not official vendor scores.
