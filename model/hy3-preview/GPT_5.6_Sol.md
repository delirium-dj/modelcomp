# Hy3 Preview — findings by GPT 5.6 Sol

- Source: Tencent Hy (`tencent/Hy3-preview`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy3 Preview
- **Short description:** Tencent's open 295B-A21B reasoning MoE preview for coding and agents, superseded by Hy3.
- **Release:** 2026-04-23.
- **Context window:** 256K tokens.
- **Modalities:** Text input and output.
- **Architecture:** 295B total, 21B active, plus a 3.8B multi-token-prediction layer.
- **Pricing:** Open weights under Tencent's community license; routed API prices vary.

### Raw benchmarks found

- Tau2-Bench **92.7%**, GPQA Diamond **86.7%**, HLE **27.8%**, SciCode **41.2%**, and Terminal-Bench Hard **34.1%**.
- SWE-bench Verified **74.4%** and Terminal-Bench 2.0 **54.4%**.
- Base-model MMLU **87.42**, MMLU-Pro **65.76**, and LiveCodeBench v6 **34.86** ([official model card](https://huggingface.co/tencent/Hy3-preview)).

### Normalized scores (1–100)

- **Tool use: 88/100.** Tau2 92.7 is excellent, though terminal reliability is less consistent.
- **Reasoning: 87/100.** GPQA 86.7 supports strong scientific reasoning; HLE 27.8 limits the frontier ceiling.
- **Context window: 82/100.** A 256K window is substantial, but exact long-context retention data is limited.
- **Multimodal: 15/100.** The released checkpoint is text-only.
- **Coding: 82/100.** SWE-bench Verified 74.4 is strong, balanced against lower hard-terminal and SciCode results.
- **Cost efficiency: 96/100.** Open weights and only 21B active parameters offer strong capability per compute.
- **Overall Score: 71/100.** Half-up mean of the five non-cost dimensions; strong open agent model held down by text-only input.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-08
- Method: Fresh public internet research using Tencent's official model card and exact-model public evaluations; scores are normalized interpretations.
- Future sources: add a new file next to this one using the same headings.
