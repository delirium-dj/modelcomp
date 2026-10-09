# GPT-5.6 Sol — findings by GPT 5.6 Luna

- Source: OpenAI/GPT-5.6 Sol
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Sol
- **Short description:** OpenAI's higher-capability GPT-5.6 model for coding, reasoning, and agent workflows.
- **Provider / access:** OpenAI API; model ID `gpt-5.6-sol`.
- **Release / knowledge:** 2026 release; cutoff not verified.
- **IDs:** `openai/gpt-5.6-sol`.
- **Context window:** 1,050,000 tokens.
- **Modalities:** Text/image input, text output, reasoning, and tools.
- **Pricing (as of 2026-10-04):** $4 input / $20 output per 1M tokens (OpenAI API documentation).
- **Architecture:** Proprietary; undisclosed.

## Raw benchmarks found

- Context window: **1.05M tokens** (OpenAI API documentation).
- No fresh independent benchmark score was verified in this run.

## Normalized scores (1–100)

- **Tool use: 91/100.** Sol is explicitly positioned for advanced tool workflows; current independent coverage is incomplete.
- **Reasoning: 93/100.** Higher-capability tier with strong frontier positioning.
- **Context window: 98/100.** 1.05M tokens documented.
- **Multimodal: 85/100.** Text/image input verified.
- **Coding: 92/100.** OpenAI positions Sol strongly for coding and agents, but no fresh benchmark was verified.
- **Cost efficiency: 78/100.** $4/$20 is competitive for frontier capability but not low-cost.
- **Overall Score: 91.8/100.** Best fit: serious coding and long-running agent workflows.

### Multi-source deep-research addendum (2026-10-09)

- OpenAI’s current API documentation verifies 1.05M context and updated $4/$20 pricing. Independent clinical tracking reports a 64.1 length-adjusted result, while external reports show very high benchmark cost on long-running MineBench workloads; this confirms that raw capability and cost-per-task are separate dimensions.
- Recalculation: retained existing score; the price reduction improves cost efficiency context, but cost is excluded from Overall under the project scoring rule.
- Sources: https://developers.openai.com/api/docs/models/gpt-5.6-sol ; https://clinicalbenchmarks.ai/models/gpt-5.6-sol ; https://www.reddit.com/r/OpenAI/comments/1w8619g/differences_between_gpt56_sol_pro_and_gpt6_astra_pro_on_minebench/

## Signature

- Provided by: **GPT 5.6 Luna (OpenAI/gpt-5.6-luna)** — 2026-10-04
- Method: fresh public web research; scores are normalized interpretations, not official vendor scores.
