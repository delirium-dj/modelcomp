# GLM-5.3 — findings by GPT 5.6 Luna

- Source: Z.ai/GLM-5.3
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** GLM-5.3
- **Short description:** Z.ai general-purpose reasoning and agent model.
- **Provider / access:** Z.ai hosted API and compatible providers; exact endpoint not verified.
- **Release / knowledge:** 2026; cutoff not verified.
- **IDs:** `z-ai/glm-5.3`.
- **Context window:** Not verified.
- **Modalities:** Text, reasoning, coding, and tools; exact multimodal support not verified.
- **Pricing (as of 2026-10-05):** Not verified.
- **Architecture:** Not verified.

### Raw benchmarks found
- GLM-5.3 appears as the identified basis of Ox Alpha/GLM-5.3 Flash, but no exact standalone GLM-5.3 benchmark table was located in this pass.

### Normalized scores (1–100)
- **Tool use: 82/100.** Agent model positioning supports a strong provisional score.
- **Reasoning: 82/100.** Family-level evidence only.
- **Context window: 72/100.** Exact limit unavailable.
- **Multimodal: 20/100.** No verified exact-model multimodal data.
- **Coding: 82/100.** Strong coding-family proxy, exact scores unavailable.
- **Cost efficiency: 80/100.** Pricing not verified.
- **Overall Score: 67.6/100.** Conservative provisional score.

### Multi-source deep-research addendum (2026-10-09)

- Independent Model Gap tracking reports 9 benchmark rows, 7 independently run, at $1.40/$4.40 pricing. Z.ai’s own Code Bench and CyberGym claims are stronger, but the model-card repository explicitly labels vendor numbers as unverified.
- Recalculation: retained existing score; benchmark spread and vendor bias do not justify an increase.
- Sources: https://themodelgap.com/models/glm-5-3 ; https://github.com/jroethel/glm-model-cards/blob/main/glm-5.3/README.md ; https://www.axios.com/2026/08/14/china-open-source-ai-glm-53

## Signature
- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-10-05
- Method: public web research; scores are provisional normalized interpretations.
- Source: https://z.ai/
