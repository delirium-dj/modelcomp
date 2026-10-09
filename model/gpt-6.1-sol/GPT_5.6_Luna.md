# GPT-6.1 Sol — findings by GPT 5.6 Luna

- Source: OpenAI/GPT-6.1 Sol
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Sol
- **Short description:** OpenAI's near-Astra model for complex coding, computer use, and professional work at lower cost.
- **Provider / access:** OpenAI API; model ID `gpt-6.1-sol`.
- **Release / knowledge:** 2026-09 release; cutoff not verified.
- **IDs:** `openai/gpt-6.1-sol`.
- **Context window:** 1.05M tokens.
- **Modalities:** Text/image input, text output, reasoning, and tools.
- **Pricing (as of 2026-10-04):** Approximately $2/$10 per 1M input/output tokens.
- **Architecture:** Proprietary; undisclosed.

## Raw benchmarks found

- Context: **1.05M tokens** (OpenAI API documentation).
- No fresh independent benchmark score was reverified in this run.

## Normalized scores (1–100)

- **Tool use: 91/100.** Near-Astra positioning for computer use and professional work.
- **Reasoning: 92/100.** High-end Sol tier; current independent score evidence incomplete.
- **Context window: 98/100.** 1.05M documented.
- **Multimodal: 85/100.** Text/image input documented.
- **Coding: 92/100.** Explicitly targets complex coding.
- **Cost efficiency: 90/100.** $2/$10 is aggressive for near-frontier capability.
- **Overall Score: 91.6/100.** Best fit: production coding and professional agents.

### Multi-source deep-research addendum (2026-10-09)

- OpenAI documents a 1.05M context window; the system-card addendum describes capability comparable to GPT-6 Astra. OpenAI reports $5.47 average cost per maximum-effort task versus $23.21 for Opus 5.5 and $23.80 for Astra, while independent tracking lists six of seven benchmark rows as independently run.
- Recalculation: retained existing score; the cost-per-task improvement affects Cost efficiency only, not Overall, and capability evidence is still early.
- Sources: https://developers.openai.com/api/docs/models/gpt-6.1-sol ; https://openai.com/index/introducing-gpt-6-1-sol/ ; https://themodelgap.com/models/gpt-6-1-sol

## Signature

- Provided by: **GPT 5.6 Luna (OpenAI/gpt-5.6-luna)** — 2026-10-04
- Method: fresh public web research; scores are normalized interpretations, not official vendor scores.
