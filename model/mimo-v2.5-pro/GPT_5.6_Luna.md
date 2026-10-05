# MiMo V2.5 Pro — findings by GPT 5.6 Luna

- Source: Xiaomi MiMo V2.5 Pro
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** MiMo V2.5 Pro
- **Short description:** Xiaomi’s open-weight agent and coding model in the MiMo V2.5 family.
- **Provider / access:** Xiaomi MiMo API and self-hosted open weights.
- **Release / knowledge:** 2026 open-source release.
- **IDs:** `xiaomi/mimo-v2.5-pro`.
- **Context window:** 1M tokens for the V2.5 series.
- **Modalities:** Agent/coding optimized; exact Pro modality matrix not verified.
- **Pricing (as of 2026-10-05):** Open weights under MIT; hosted price not verified.
- **Architecture:** Open-weight MoE family; exact parameter count not verified.

### Raw benchmarks found
- Xiaomi states V2.5 Pro ranks first among open-source models on GDPVal-AA and ClawEval leaderboards.
- Official materials describe strong complex software-engineering and long-range agent performance.

### Normalized scores (1–100)
- **Tool use: 88/100.** Agent specialization and ClawEval claim support a high score.
- **Reasoning: 84/100.** Strong open-model positioning.
- **Context window: 88/100.** Official 1M context.
- **Multimodal: 45/100.** Pro’s exact multimodal coverage is less clear than base MiMo.
- **Coding: 88/100.** Coding specialization and software-engineering results.
- **Cost efficiency: 95/100.** MIT weights and inexpensive deployment potential.
- **Overall Score: 78.6/100.** Strong open coding-agent model with favorable economics.

## Signature
- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-10-05
- Method: public web research; scores are normalized interpretations, not official vendor scores.
- Sources: https://mimo.mi.com/docs/en-US/news/latest/v2.5-open-sourced ; https://mimo.mi.com/docs/en-US/news/latest/v2.5-news

