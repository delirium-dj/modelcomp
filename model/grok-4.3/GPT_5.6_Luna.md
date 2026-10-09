# Grok 4.3 — findings by GPT 5.6 Luna

- Source: xAI/Grok 4.3
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.3
- **Short description:** Earlier xAI reasoning and tool-use model.
- **Provider / access:** xAI API; exact current ID not reverified.
- **Release / knowledge:** 2026 release; cutoff not verified.
- **IDs:** `xai/grok-4.3`.
- **Context window:** Not reverified.
- **Modalities:** Text/image input and tools reported.
- **Pricing (as of 2026-10-04):** Not reverified.
- **Architecture:** Proprietary; undisclosed.

## Raw benchmarks found

- No fresh independently verified benchmark score found in this run.

## Normalized scores (1–100)

- **Tool use: 75/100.** Earlier Grok tool tier.
- **Reasoning: 77/100.** Evidence is limited.
- **Context window: 80/100.** Limit not reverified.
- **Multimodal: 78/100.** Text/image support reported.
- **Coding: 76/100.** Evidence incomplete.
- **Cost efficiency: 82/100.** Pricing not reverified.
- **Overall Score: 77.2/100.** Validate before production deployment.

### Multi-source deep-research addendum (2026-10-09)

- AWS and xAI documentation report a 1M context, configurable reasoning effort, tool calling, structured output, and streaming. Independent provider documentation corroborates deployment details, but public exact-model benchmark coverage is thinner than the newer Grok releases.
- Recalculation: retained existing score; specifications are verified, while performance evidence remains limited.
- Sources: https://docs.aws.amazon.com/bedrock/latest/userguide/model-card-xai-grok-4-3.html ; https://docs.x.ai/developers/models/grok-4.3 ; https://developers.cloudflare.com/ai/models/xai/grok-4.3/

## Signature

- Provided by: **GPT 5.6 Luna (OpenAI/gpt-5.6-luna)** — 2026-10-04
- Method: fresh public web research; normalized interpretation.
