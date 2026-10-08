# GPT-5 Nano — findings by GPT 5.6 Sol

- Source: OpenAI (`gpt-5-nano`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5 Nano
- **Short description:** OpenAI's fastest and cheapest original GPT-5 reasoning tier for high-volume lightweight workloads.
- **Release:** 2025-08-07.
- **Context window:** 400K total: up to 272K input and 128K reasoning/output.
- **Modalities:** Text and image input; text output.
- **Pricing:** $0.05/M input, $0.005/M cached input, and $0.40/M output.

### Raw benchmarks found

- GPQA Diamond **71.2%**, AIME 2025 **85.2%**, and HLE **8.7%**.
- SWE-bench Verified **54.7%** and Aider Polyglot **48.4%**.
- Tau2 airline **41.0%**, retail **62.3%**, and telecom **35.5%**.
- MMMU **75.6%**, MMMU-Pro **62.6%**, MRCR two-needle **43.2%** at 128K and **34.9%** at 256K ([OpenAI launch benchmarks](https://openai.com/index/introducing-gpt-5-for-developers/)).

### Normalized scores (1–100)

- **Tool use: 67/100.** Function calling is supported, but Tau2 results are inconsistent across domains.
- **Reasoning: 73/100.** AIME 85.2 and GPQA 71.2 are strong for a nano tier; HLE 8.7 shows hard-task limits.
- **Context window: 78/100.** The nominal 400K total is large, though MRCR retention drops substantially at long lengths.
- **Multimodal: 76/100.** Image input and MMMU 75.6 are good for a tiny cost tier.
- **Coding: 72/100.** SWE-bench Verified 54.7 is useful, while Aider 48.4 remains moderate.
- **Cost efficiency: 100/100.** Its $0.05/$0.40 rates are exceptionally low.
- **Overall Score: 73/100.** Half-up mean of the five non-cost dimensions; best for inexpensive high-volume reasoning and extraction.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-08
- Method: Fresh public internet research using OpenAI's official launch benchmarks and API documentation; scores are normalized interpretations.
- Future sources: add a new file next to this one using the same headings.
