# Ling-2.6-Flash — findings by GPT-5.6 Terra

- Source: InclusionAI/Ling-2.6-Flash
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling-2.6-Flash
- **Short description:** InclusionAI's fast, open instruct model for agent workflows.
- **Provider / access:** Hugging Face and compatible hosted/local runtimes.
- **Release / knowledge:** 2026; cutoff not stated.
- **IDs:** `inclusionAI/Ling-2.6-flash`.
- **Context window:** 262K input / 33K maximum output.
- **Modalities:** text input/output; structured output and tool use.
- **Pricing (as of 2026-10-09):** MIT weights; hosting varies.
- **Architecture:** 104B total / 7.4B active MoE; MIT.

### Raw benchmarks found

Agent / tool use:

- τ²-Bench Telecom: **86.0%** (public model index).

Reasoning / knowledge:

- no exact general-reasoning score extracted.

Coding:

- Artificial Analysis Coding Index: **25.3** (public model index).

Long context:

- 262K context advertised; no retrieval result found.

### Normalized scores (1–100)

- **Tool use: 88/100.** τ²-Bench Telecom 86.0 is strong direct evidence.
- **Reasoning: 60/100.** No broad reasoning benchmark was extracted.
- **Context window: 88/100.** 262K verified context without retrieval validation.
- **Multimodal: 15/100.** No non-text modality was verified.
- **Coding: 58/100.** Coding Index 25.3 supports a moderate score.
- **Cost efficiency: 85/100.** 7.4B active parameters and MIT weights are efficient.
- **Overall Score: 62/100.** Half-up mean of the five quality dimensions.

---

## Signature

- Provided by: **GPT-5.6 Terra (openai/gpt-5.6-terra)** — 2026-10-09
- Method: public internet research; scores are normalized interpretations, not vendor scores.
