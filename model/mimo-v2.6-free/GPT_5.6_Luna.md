# MiMo V2.6 Free — findings by GPT 5.6 Luna

- Source: Xiaomi MiMo / MiMo V2.6 Flash free access alias
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** MiMo V2.6 Free
- **Short description:** Free-access presentation of Xiaomi’s MiMo V2.6 Flash; the official family names are Pro and Flash, so “Free” is treated as an access tier rather than a separate checkpoint.
- **Provider / access:** Xiaomi MiMo API/free-hosted access; exact free route ID not verified.
- **Release / knowledge:** 2026-09-22 family release; cutoff not stated.
- **IDs:** Likely `mimo-v2.6-flash`; free alias not independently documented.
- **Context window:** Public catalog reports 1,048,576 tokens and 131,072 output for V2.6 Flash.
- **Modalities:** Native multimodal model with image input, reasoning, and tool use.
- **Pricing (as of 2026-10-05):** Official overseas Flash API price $0.14 input / $0.28 output per 1M; free access depends on host/quota.
- **Architecture:** Open-weight MiMo V2.6 Flash; public secondary listings describe 309B total / 15B active parameters.

### Raw benchmarks found
- DeepSWE v1.1 improved from **48.8% to 65.7%** during Xiaomi’s V2.6 Flash RL training report.
- Xiaomi reports approximately **25%** relative improvement in training-task pass rate for Flash.

### Normalized scores (1–100)
- **Tool use: 78/100.** Xiaomi reports tool-oriented visual creation and agent improvements, but limited independent tool benchmark data.
- **Reasoning: 78/100.** DeepSWE and RL evidence support capable reasoning, capped by sparse independent evaluation.
- **Context window: 86/100.** 1,048,576-token catalog window, though retrieval quality was not independently measured.
- **Multimodal: 84/100.** Official release calls the model natively fully multimodal.
- **Coding: 78/100.** DeepSWE v1.1 65.7% is meaningful evidence, but below flagship coding models.
- **Cost efficiency: 100/100.** Free access tier; hosted paid Flash fallback remains inexpensive.
- **Overall Score: 80.8/100.** High-value multimodal open-weight model when free access is available, with quota/route uncertainty.

## Signature
- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-10-05
- Method: public web research; scores are normalized interpretations, not official vendor scores.
- Sources: https://mimo.mi.com/docs/en-US/news/latest/v2-6 ; https://mimo.mi.com/docs/pricing

