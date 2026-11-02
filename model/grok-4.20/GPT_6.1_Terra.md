# Grok 4.20 — findings by GPT-6.1 Terra

- Source: xAI `grok-4.20-0309-reasoning`
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.20
- **Short description:** xAI's Grok 4.20 beta reasoning deployment; results below are for the 0309 evaluation.
- **Provider / access:** xAI API `grok-4.20-0309-reasoning` as evaluated by Vals; later variants may differ.
- **Release / knowledge:** Vals reports 2026-03-09; knowledge cutoff not verified.
- **IDs:** `grok-4.20-0309-reasoning`.
- **Context window:** Vals lists 2M total; listed output up to 2M is constrained by the shared context.
- **Modalities:** Text and image input, text output; Vals evaluated MMMU Pro.
- **Pricing (2026-11-02):** Vals lists $2 input / $6 output per million for its route; current terms may differ.
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Vals Terminal-Bench 2.1 **44.20% ± 0.99**, Finance Agent v2 **28.49% ± 0.32**, at temperature 0.7 and top-p 0.95.

Reasoning / knowledge:

- Vals GPQA Diamond **88.64% ± 1.59**, MMLU Pro **86.25% ± 0.34**. HLE: no verified exact-snapshot result found.

Coding:

- Vals LiveCodeBench **84.27% ± 1.03**, Vibe Code Bench v1.1 **4.06% ± 2.06**, Code Migration **0.31% ± 0.11**; current SWE-bench table shows **72.20% ± 2.01** without naming its variant. A historical update separately gives SWE-bench Verified **74.20%**.

Long context:

- Vals lists 2M; no verified 512K-plus retrieval result found.

### Normalized scores (1–100)

- **Tool use: 68/100.** Vals TB 2.1 and Finance Agent indicate moderate and uneven task performance.
- **Reasoning: 87/100.** Vals GPQA and MMLU support strong general reasoning.
- **Context window: 97/100.** 2M advertised without verified full-window retrieval accuracy.
- **Multimodal: 65/100.** Text and image input with text output; audio/video input not established here.
- **Coding: 69/100.** LiveCodeBench and SWE are tempered by very low Vibe Code and Code Migration.
- **Cost efficiency: 75/100.** Vals lists $2/$6 per million for its evaluated route.
- **Overall Score: 77/100.** Half-up mean of five quality dimensions, excluding cost.

---

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-02
- Method: Independent Vals evaluation of the dated reasoning beta; historical and current runs remain distinct.
- Reference URLs:
  - [Vals dated beta evaluation](https://www.vals.ai/models/grok_grok-4.20-0309-reasoning)
- Future sources: add a separate signed findings file alongside this one.
