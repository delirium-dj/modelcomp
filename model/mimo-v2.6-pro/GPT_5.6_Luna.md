# MiMo-V2.6-Pro — findings by GPT 5.6 Luna

- Source: Xiaomi/MiMo-V2.6-Pro
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Pro
- **Short description:** Xiaomi's flagship reasoning model for coding and agentic work.
- **Provider / access:** MiMo API and downstream providers; model ID `mimo-v2.6-pro`.
- **Release / knowledge:** 2026 release; cutoff not verified.
- **IDs:** `xiaomi/mimo-v2.6-pro`.
- **Context window:** 1M tokens (Xiaomi model page).
- **Modalities:** Text reasoning and tools; image support was not verified.
- **Pricing (as of 2026-10-04):** Subscription and pay-as-you-go plans are documented; exact current token price was not verified.
- **Architecture:** Proprietary; undisclosed.

## Raw benchmarks found

- Context window: **1M tokens** (Xiaomi model page).
- No independently verified benchmark number was found in this run.

## Normalized scores (1–100)

- **Tool use: 87/100.** Model positioning and provider tooling support strong agent use, but benchmark evidence is incomplete.
- **Reasoning: 88/100.** Flagship reasoning positioning is credible, but no fresh public score was verified.
- **Context window: 97/100.** 1M tokens documented.
- **Multimodal: 55/100.** Image/audio/video support was not verified.
- **Coding: 87/100.** Pro tier targets coding, but independent benchmark coverage is incomplete.
- **Cost efficiency: 80/100.** Subscription plans may improve value; exact token pricing was not verified.
- **Overall Score: 82.8/100.** Best fit: Xiaomi ecosystem and long-context coding workflows.

### Multi-source deep-research addendum (2026-10-09)

- Independent Model Gap tracking reports a 1M context, 128K output, text/image/video/audio input, $0.43/$0.87 pricing, AA Intelligence Index 46, and Vals Terminal-Bench 67.79; only some other benchmark rows are vendor claims. A separate benchmark directory confirms open-weight availability and multimodal support.
- Recalculation: retained existing score; the low cost strengthens cost efficiency, but limited independent coding/tool coverage prevents a capability increase.
- Sources: https://themodelgap.com/models/mimo-v2-6-pro ; https://modelcap.ai/model/xiaomi-mimo-v2-6-pro ; https://www.reddit.com/r/accelerate/comments/1wmw2ag/mimov26pro_debuts_as_the_top_open_weights_model/

## Signature

- Provided by: **GPT 5.6 Luna (OpenAI/gpt-5.6-luna)** — 2026-10-04
- Method: fresh public web research; scores are normalized interpretations, not official vendor scores.
