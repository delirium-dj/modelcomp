# Mistral Large 4 — findings by GPT 5.5

- Source: Mistral AI (`mistral-large-4`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Large 4
- **Short description:** Mistral's open-weight flagship "Large 4" general-purpose multimodal MoE model, positioned as a European frontier-adjacent alternative for enterprise and self-hosting.
- **Provider / access:** Mistral API, open-weight distribution, and third-party routes such as OpenRouter.
- **Release / knowledge:** Announced in early October 2026; cutoff not stated.
- **IDs:** `mistral-large-4`, `mistralai/mistral-large-4`.
- **Context window:** Public listings report roughly **524K** context.
- **Modalities:** Text and image input; text output; tool/function calling via API routes.
- **Pricing (as of 2026-10-08):** Public route reports range from **$0.68/M input, $2.09/M output** to list pricing around **$1.36/M input, $4.18/M output**.
- **Architecture:** Granular Mixture-of-Experts open-weight multimodal model.

### Raw benchmarks found

Agent / tool use:

- Mistral docs describe Large 4 as a state-of-the-art open-weight general-purpose multimodal model; exact public Terminal-Bench/Tau rows were not recovered.

Reasoning / knowledge:

- Public launch coverage positions it near top open models; independent benchmark rows were still sparse immediately after launch.

Coding:

- Public discussion says it is strong but not obviously best value versus cheaper DeepSeek/GLM/MiMo coding options.

Long context:

- OpenRouter/community route listings report **524K** context.

### Normalized scores (1–100)

- **Tool use: 72/100.** Tool support is present and model class is strong, but exact tool rows are not yet widely published.
- **Reasoning: 76/100.** Frontier-adjacent open flagship positioning supports a high score, capped by early benchmark sparsity.
- **Context window: 88/100.** 524K context is strong.
- **Multimodal: 78/100.** Image input and multimodal architecture are verified strengths.
- **Coding: 74/100.** Likely strong for coding, though cost/performance evidence is still immature.
- **Cost efficiency: 74/100.** Attractive for open weights, but API pricing is not ultra-cheap.
- **Overall Score: 78/100.** Half-up mean of the five quality dimensions; best fit is enterprise/open-weight multimodal work.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-08
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

