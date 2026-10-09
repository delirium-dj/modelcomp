# Kimi K2.6 — findings by GPT 5.6 Luna

- Source: Moonshot AI/Kimi K2.6
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.6
- **Short description:** Moonshot's multimodal reasoning model for coding agents.
- **Provider / access:** Moonshot API; model ID `kimi-k2.6`.
- **Release / knowledge:** 2026-04-20; cutoff not verified.
- **IDs:** `moonshot/kimi-k2.6`.
- **Context window:** 262,144 tokens.
- **Modalities:** Text, image, code, and video input; text output.
- **Pricing (as of 2026-10-04):** Approximately $0.95/$4 per 1M input/output tokens.
- **Architecture:** Approximately 1T MoE / 32B active parameters reported by technical coverage.

## Raw benchmarks found

- Composite benchmark rating: **52.2/100** (RankLLMs).
- Context: **256K** (provider/model documentation coverage).

## Normalized scores (1–100)

- **Tool use: 87/100.** Strong coding-agent positioning.
- **Reasoning: 86/100.** Composite evidence is competitive.
- **Context window: 84/100.** 256K is useful but below 1M leaders.
- **Multimodal: 90/100.** Native text/image/video input reported.
- **Coding: 88/100.** Coding is a major target use.
- **Cost efficiency: 92/100.** Low $0.95/$4 pricing.
- **Overall Score: 87.0/100.** Best fit: economical multimodal coding agents.

### Multi-source deep-research addendum (2026-10-09)

- Moonshot’s model card reports K2.6 experiments over 262K context with ten-run averages for coding tasks and open weights. Independent reporting describes a 1T MoE with about 32B active parameters, native multimodality, and roughly 256K–262K context.
- Recalculation: retained existing score; the independent profile supports strong value and coding, but no new exact benchmark justified a numeric adjustment.
- Sources: https://huggingface.co/moonshotai/Kimi-K2.6 ; https://www.techradar.com/pro/kimi-ai-review ; https://arxiv.org/abs/2507.20534

## Signature

- Provided by: **GPT 5.6 Luna (OpenAI/gpt-5.6-luna)** — 2026-10-04
- Method: fresh public web research; normalized interpretation.
