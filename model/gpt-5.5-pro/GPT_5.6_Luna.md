# GPT-5.5 Pro — findings by GPT 5.6 Luna

- Source: OpenAI/GPT-5.5 Pro
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 Pro
- **Short description:** OpenAI's high-effort reasoning model for difficult multi-turn work.
- **Provider / access:** OpenAI Responses API and Batch API; model ID `gpt-5.5-pro`.
- **Release / knowledge:** 2026 release; cutoff not verified.
- **IDs:** `openai/gpt-5.5-pro`.
- **Context window:** 1,050,000 tokens (OpenAI API documentation).
- **Modalities:** Text and image input, text output, reasoning, and tools.
- **Pricing (as of 2026-10-04):** Usage-based pricing; exact current rates were not exposed in the retrieved documentation.
- **Architecture:** Proprietary; undisclosed.

## Raw benchmarks found

- Context window: **1.05M tokens** (OpenAI API documentation).
- No independently verified benchmark score was found in this run.

## Normalized scores (1–100)

- **Tool use: 88/100.** Responses API and multi-turn support are verified; public benchmark evidence is incomplete.
- **Reasoning: 90/100.** Pro tier is explicitly optimized for high-effort reasoning, but no fresh score was verified.
- **Context window: 98/100.** 1.05M context is among the largest documented windows.
- **Multimodal: 85/100.** Text/image input is documented; output is text.
- **Coding: 88/100.** Pro tier and Responses API target complex coding, but no fresh public score was verified.
- **Cost efficiency: 65/100.** Pro pricing is usage-based and not clearly exposed in the retrieved page.
- **Overall Score: 89.8/100.** Best fit: difficult long-running reasoning tasks.

## Signature

- Provided by: **GPT 5.6 Luna (OpenAI/gpt-5.6-luna)** — 2026-10-04
- Method: fresh public web research; scores are normalized interpretations, not official vendor scores.
