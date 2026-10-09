# MiMo V2.5 Free — findings by GPT 5.6 Luna

- Source: Xiaomi MiMo V2.5 (`mimo-v2.5`) free-token access
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** MiMo V2.5 Free
- **Short description:** Free-access tier for Xiaomi’s open MiMo V2.5 native multimodal model; “Free” is an access tier, not a separate checkpoint.
- **Provider / access:** Xiaomi MiMo free-token/Orbit program; base model `mimo-v2.5`.
- **Release / knowledge:** 2026 open-source release.
- **IDs:** `xiaomi/mimo-v2.5`.
- **Context window:** 1M tokens for the V2.5 series.
- **Modalities:** Text, image, video, and audio understanding; agent capabilities.
- **Pricing (as of 2026-10-05):** Free token distribution was announced; self-hosted weights use MIT license.
- **Architecture:** Open-weight multimodal model; details not fully verified here.

### Raw benchmarks found
- Xiaomi states MiMo V2.5 Pro ranks first among open-source models on GDPVal-AA and ClawEval; the base Free checkpoint’s exact scores were not isolated.
- Official release confirms 1M context and full-modal support.

### Normalized scores (1–100)
- **Tool use: 78/100.** Powerful agent capability is claimed, but exact base-checkpoint tool scores are unavailable.
- **Reasoning: 76/100.** Family-level competitive positioning, capped by missing exact-tier numbers.
- **Context window: 86/100.** 1M-token window is officially stated.
- **Multimodal: 91/100.** Native text, image, video, and audio understanding.
- **Coding: 74/100.** Agent/coding optimization is documented mainly for Pro.
- **Cost efficiency: 100/100.** Free token program and MIT self-hosting license.
- **Overall Score: 81.0/100.** Attractive free multimodal model, with base-versus-Pro evidence separation important.

### Multi-source deep-research addendum (2026-10-09)

- Xiaomi confirms MiMo-V2.5 as an open-weight, full-modality model with 1M context and free commercial use. Independent inference research focuses on efficiency and deployment rather than a broad quality leaderboard.
- Recalculation: retained existing score; free/open access improves value but does not provide new general capability evidence.
- Sources: https://mimo.mi.com/docs/en-US/news/latest/v2.5-open-sourced ; https://arxiv.org/abs/2607.13095

## Signature
- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-10-05
- Method: public web research; scores are normalized interpretations, not official vendor scores.
- Source: https://mimo.mi.com/docs/en-US/news/latest/v2.5-open-sourced
