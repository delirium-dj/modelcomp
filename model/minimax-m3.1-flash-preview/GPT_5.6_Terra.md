# MiniMax M3.1 Flash Preview — findings by GPT 5.6 Terra

- Source: MiniMax/M3.1 Flash Preview
- Date: 2026-09-30 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** MiniMax M3.1 Flash Preview
- **Short description:** MiniMax's preview coding model with long context and tunable thinking.
- **Provider / access:** MiniMax Code and preview API route; [independent source review](https://www.volanea.com/blog/minimax-m3-1-flash-review) identifies the exact preview configuration.
- **Release / knowledge:** public preview 2026-09; cutoff unpublished.
- **IDs:** `MiniMax-M3.1-Flash-Preview`.
- **Context window:** 1M tokens, reported in the source review from MiniMax documentation.
- **Modalities:** source review reports multimodal input, tool use and tunable thinking; exact official modality matrix remains unavailable.
- **Pricing (as of 2026-09-30):** no verified public price sheet.
- **Architecture:** undisclosed.

### Raw benchmarks found

Coding:

- KingBench 3: **66.25%**, based on eight saved MiniMax M3.1 Flash generations reviewed in the [independent test report](https://www.volanea.com/blog/minimax-m3-1-flash-review). This is a small hands-on evaluation, not a vendor model-card suite.

Long context:

- **1,000,000 tokens** reported by the reviewed MiniMax documentation; no retrieval-at-length score found.

### Normalized scores (1–100)

- **Tool use: 70/100.** Tool support is documented by the source review, but no standard tool benchmark is published.
- **Reasoning: 72/100.** Tunable thinking is documented but no direct reasoning benchmark was found.
- **Context window: 92/100.** Reported 1M context is excellent, though no retrieval test is available.
- **Multimodal: 75/100.** Multimodal input is reported, but the official matrix was not available for independent confirmation.
- **Coding: 75/100.** KingBench 3 at 66.25% is encouraging but based on only eight inspected generations.
- **Cost efficiency: 70/100.** Preview access exists, but no verified token price was found.
- **Overall Score: 77/100.** Half-up mean of the five quality dimensions; an early, promising preview with thin independent evaluation coverage.

## Signature

- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-09-30
- Method: fresh public internet research; scores are normalized interpretations, not official vendor scores.
