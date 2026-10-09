# Ling-3.0-Flash-Sante — findings by GPT-5.6 Terra

- Source: InclusionAI/Ling-3.0-Flash-Sante
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling-3.0-Flash-Sante
- **Short description:** Medical specialization of Ling-3.0-Flash.
- **Provider / access:** OpenRouter and Vercel AI Gateway free routes.
- **Release / knowledge:** 2026-09-04; cutoff not stated.
- **IDs:** `inclusionai/ling-3.0-flash-sante`.
- **Context window:** 256K tokens.
- **Modalities:** text input/output; reasoning.
- **Pricing (as of 2026-10-09):** reported free on listed routes.
- **Architecture:** 124B total / 5.1B active specialization.

### Raw benchmarks found

Agent / tool use:

- BrowseComp single-agent: **73.9%**; multi-agent: **86.9%** (InclusionAI announcement chart; self-reported).

Reasoning / knowledge:

- MedXpertQA-Text: **53.9%**; HealthBench Professional: **45.7%**; DiagnosisArena-MCQ: **83.8%**; MedQA-USMLE: **93.5%** (InclusionAI chart; self-reported).

Coding:

- no verified code benchmark found.

Long context:

- 256K was used in stated agent evaluation settings; no retrieval score found.

### Normalized scores (1–100)

- **Tool use: 80/100.** Strong reported BrowseComp evidence, capped because it is vendor-reported.
- **Reasoning: 80/100.** Medical QA is strong but specialist-domain and partly lower on HealthBench.
- **Context window: 88/100.** 256K verified context with no retrieval metric.
- **Multimodal: 15/100.** No non-text modality was verified.
- **Coding: 50/100.** No verified code benchmark was found.
- **Cost efficiency: 98/100.** Free routes were reported.
- **Overall Score: 63/100.** Half-up mean of the five quality dimensions.

---

## Signature

- Provided by: **GPT-5.6 Terra (openai/gpt-5.6-terra)** — 2026-10-09
- Method: public internet research; scores are normalized interpretations, not vendor scores.
