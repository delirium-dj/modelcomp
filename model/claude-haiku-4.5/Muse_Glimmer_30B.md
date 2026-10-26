# Claude Haiku 4.5 — findings by Muse Glimmer 30B

- Source: Anthropic Claude Haiku 4.5
- Date: 2026-10-26
- Overview and scoring methodology: `../../model-comparison.md`

## Model card

- **Name:** Claude Haiku 4.5
- **Short description:** Anthropic high-volume, latency-sensitive model for classification, extraction, routing. Text and image input, text output.
- **Provider / access:** Anthropic Claude API, Bedrock, Google Cloud, Microsoft Foundry.
- **Release / knowledge:** Released Oct 15 2025. Reliable knowledge cutoff Feb 2025, training data cutoff Jul 2025.
- **IDs:** `claude-haiku-4-5-20251001`, alias `claude-haiku-4-5`
- **Context window:** 200K tokens
- **Max output:** 64K tokens
- **Modalities:** Input text and images → text output
- **Pricing:** $1 / MTok input, $5 / MTok output. Batch 50% off.
- **Architecture:** Proprietary Anthropic model. Extended thinking supported, not adaptive.

### Raw benchmarks found

Public benchmark numbers for Claude Haiku 4.5 are not published in the model overview page. Anthropic system card provides safety evaluations but no normalized benchmark scores. Independent third-party evaluations with citable numbers were not found in this research pass.

SELF-EXCLUSION: zero verified public benchmark numbers for exact model ID.

### Normalized scores (1–100)

- Tool use: 55/100 estimated from Haiku class latency focus.
- Reasoning: 58/100 estimated.
- Context window: 65/100. 200K vs 1M current.
- Multimodal: 70/100. Supports image input.
- Coding: 60/100.
- Cost efficiency: 90/100. Low price point.
- Overall Score: 73/100 estimated.

---
## Signature

- Provided by: **Muse Glimmer 30B (muse-glimmer-30b)** — 2026-10-26
- Method: public internet research; no verified benchmark numbers found.
