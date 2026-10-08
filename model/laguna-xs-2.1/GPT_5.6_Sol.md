# Laguna XS 2.1 — findings by GPT 5.6 Sol

- Source: Poolside (`poolside/Laguna-XS-2.1`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna XS 2.1
- **Short description:** Compact open MoE designed for local agentic coding and terminal work.
- **Context window:** 262K tokens.
- **Modalities:** Text input and output.
- **Architecture:** Approximately 33B total / 3B active parameters.
- **Pricing:** Open weights; routed pricing around $0.06/M input and $0.12/M output.

### Raw benchmarks found

- Poolside publishes exact-model agentic coding comparisons for BF16 and NVFP4 checkpoints, covering SWE-bench Pro, SWE-bench Multilingual, and Terminal-Bench.
- The release is positioned below Laguna S 2.1 but optimized for single-device deployment and strong accuracy per active parameter ([official model card](https://huggingface.co/poolside/Laguna-XS-2.1-NVFP4)).

### Normalized scores (1–100)

- **Tool use: 82/100.** Purpose-built terminal and agent training supports strong compact-model execution.
- **Reasoning: 68/100.** Engineering reasoning is capable, with little broad science evidence.
- **Context window: 82/100.** 262K is excellent for a 3B-active local model.
- **Multimodal: 15/100.** The model is text-only.
- **Coding: 84/100.** Its official SWE and terminal evaluations establish it as a strong small open coder.
- **Cost efficiency: 99/100.** Three billion active parameters, open weights, and very low API pricing are outstanding.
- **Overall Score: 66/100.** Half-up mean of the five non-cost dimensions; excellent local coding efficiency with narrow modality scope.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-08
- Method: Fresh public internet research using Poolside's official checkpoint card and release materials; scores are normalized interpretations.
- Future sources: add a new file next to this one using the same headings.
