# Mistral Large 4 — findings by GPT 5.6 Sol

- Source: Mistral AI (`mistral-large-4`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Large 4
- **Short description:** Open-weight frontier multimodal MoE for general reasoning, coding, professional work, and multilingual deployment.
- **Release:** Public preview 2026-10-06.
- **Context window:** 1M tokens.
- **Modalities:** Text and image/document input; text output.
- **Architecture:** 1.05T total / 52B active parameters with a 1.6B vision encoder.
- **Pricing:** Preview API $0.68/M input, $0.07/M cached input, and $2.09/M output.

### Raw benchmarks found

- DeepSWE 1.1 **63%** in preliminary public reporting.
- **82%** on a vulnerability reproduction-and-patching evaluation, the highest reported result on that test.
- Top-five Artificial Analysis Cyber Index placement; leading open model on HarveyAI Legal Agent and third-party legal/finance evaluation above GPT-6 Astra.
- Expert preference was ahead of GLM-5.3 in CAD and STEM and near parity in coding and finance ([official announcement](https://mistral.ai/news/mistral-large-4/), [official documentation](https://docs.mistral.ai/models/mistral-large)).

### Normalized scores (1–100)

- **Tool use: 90/100.** Native agents, functions, built-in tools, document workflows, and strong professional-agent results support frontier tool use.
- **Reasoning: 91/100.** STEM expert preference and professional evaluations place it among leading open models.
- **Context window: 95/100.** Native 1M context is frontier-scale, though detailed retention results remain forthcoming.
- **Multimodal: 90/100.** A dedicated vision encoder and document/CAD/geospatial capabilities provide broad visual utility.
- **Coding: 92/100.** DeepSWE 63 and vulnerability patching 82 are strong long-horizon engineering results.
- **Cost efficiency: 85/100.** Preview pricing is competitive for frontier multimodal capability, while self-hosting the trillion-parameter weights is demanding.
- **Overall Score: 92/100.** Half-up mean of the five non-cost dimensions; a broadly capable European frontier model with unusually strong cyber and professional skills.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-08
- Method: Fresh public internet research using Mistral's official preview announcement and model documentation; scores are normalized interpretations.
- Future sources: add a new file next to this one using the same headings.
