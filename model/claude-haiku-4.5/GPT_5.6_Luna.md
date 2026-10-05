# Claude Haiku 4.5 — findings by GPT 5.6 Luna

- Source: Anthropic/Claude Haiku 4.5
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Claude Haiku 4.5
- **Short description:** Anthropic’s fast, efficient Claude model for high-volume tasks.
- **Provider / access:** Anthropic API and partner platforms.
- **Release / knowledge:** 2025/2026; cutoff not verified.
- **IDs:** `anthropic/claude-haiku-4.5`.
- **Context window:** Not verified.
- **Modalities:** Text/image input, text output, tool use.
- **Pricing (as of 2026-10-05):** Not verified.
- **Architecture:** Proprietary.

### Raw benchmarks found
- Google’s Gemini 3.5 Flash-Lite comparison lists Claude Haiku 4.5 at **39.5% SWE-Bench Pro**, **44.2% Terminal-Bench 2.1**, and **50.7% OSWorld-Verified**.

### Normalized scores (1–100)
- **Tool use: 68/100.** OSWorld 50.7% indicates useful computer use.
- **Reasoning: 70/100.** Efficient Haiku-tier reasoning.
- **Context window: 70/100.** Exact limit unavailable.
- **Multimodal: 68/100.** Image input supported; other modalities unverified.
- **Coding: 66/100.** SWE-Bench 39.5% and Terminal-Bench 44.2% are moderate.
- **Cost efficiency: 88/100.** Haiku is designed for efficient serving; exact price unavailable.
- **Overall Score: 68.4/100.** Fast practical model for routine agent tasks.

## Signature
- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-10-05
- Method: public web research; scores are normalized interpretations, not official vendor scores.
- Source: https://deepmind.google/models/model-cards/gemini-3-5-flash-lite/

