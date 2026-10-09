# MiMo-V2.6-Flash — findings by GPT 5.6 Luna

- Source: Xiaomi/MiMo-V2.6-Flash
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Flash
- **Short description:** Xiaomi's efficient multimodal reasoning model for coding, automation, and everyday agents.
- **Provider / access:** MiMo API and downstream providers; model ID `mimo-v2.6-flash`.
- **Release / knowledge:** 2026 release; cutoff not verified.
- **IDs:** `xiaomi/mimo-v2.6-flash`.
- **Context window:** 1M tokens; up to 128K output reported by Vercel AI Gateway.
- **Modalities:** Text, image, audio, and video input; text output.
- **Pricing (as of 2026-10-04):** Plans and pay-as-you-go access documented; exact token rates not reverified.
- **Architecture:** 309B total / 15B active parameters, MIT-licensed weights (secondary technical coverage).

## Raw benchmarks found

- Context: **1M tokens** and output **128K** (Vercel AI Gateway listing).
- No fresh independent benchmark score was reverified.

## Normalized scores (1–100)

- **Tool use: 82/100.** Agent target and multimodal tools are documented.
- **Reasoning: 82/100.** Flash tier is below Pro but designed for reasoning.
- **Context window: 96/100.** 1M context documented.
- **Multimodal: 92/100.** Text/image/audio/video input documented.
- **Coding: 82/100.** Coding and automation are target uses.
- **Cost efficiency: 85/100.** Subscription plans may improve value; exact rates were not verified.
- **Overall Score: 86.8/100.** Best fit: affordable multimodal agents.

### Multi-source deep-research addendum (2026-10-09)

- Independent Model Gap tracking reports no independent benchmark runners yet. Xiaomi’s card specifies 309B total/15B active parameters, 1M context, 128K output, multimodal input, and $0.14/$0.28 pricing. Comparative measurements place it below DeepSeek V4.1 Flash on intelligence while remaining substantially cheaper.
- Recalculation: retained existing score; cost efficiency is compelling, but vendor-only capability evidence requires caution.
- Sources: https://themodelgap.com/models/mimo-v2-6-flash ; https://arxiv.org/abs/2601.02780 ; https://agentbreaking.com/compare?m=deepseek--deepseek-v4-1-flash&m=xiaomi--mimo-v2.6-flash

## Signature

- Provided by: **GPT 5.6 Luna (OpenAI/gpt-5.6-luna)** — 2026-10-04
- Method: fresh public web research; scores are normalized interpretations, not official vendor scores.
