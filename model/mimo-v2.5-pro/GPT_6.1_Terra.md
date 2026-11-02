# MiMo V2.5 Pro — findings by GPT-6.1 Terra

- Source: Xiaomi `mimo-v2.5-pro`
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.5 Pro
- **Short description:** Xiaomi's earlier Pro reasoning model, distinct from the V2.6 family.
- **Provider / access:** Historical Xiaomi API `mimo-v2.5-pro`; Xiaomi says this ID was retired 2026-10-21.
- **Release / knowledge:** Vals lists 2026-04-22; knowledge cutoff not verified.
- **Context window:** Vals lists 1M and 128K maximum output for its evaluated route.
- **Modalities:** Vals lists text input and output; no image input on its route.
- **Pricing:** Vals lists historical $0.43 input / $0.87 output per million; direct route retired.
- **Architecture:** Vals describes open weights; parameter count and license not independently verified here.

### Raw benchmarks found

- Vals Finance Agent v2 **41.50% ± 1.19**, Terminal-Bench 4.0 **0.51% ± 0.51**, GPQA Diamond **82.58% ± 2.47**, MMLU Pro **84.59% ± 0.45**.
- Vals LiveCodeBench **81.35% ± 1.07**, SWE-bench **74.00% ± 1.96** (variant unspecified on current page), Vibe Code v1.1 **34.11% ± 4.53**, Code Migration **21.56% ± 4.13**.
- No verified full-window retrieval result found.

### Normalized scores (1–100)

- **Tool use: 65/100.** Independent finance agent is moderate and TB 4.0 is much lower.
- **Reasoning: 81/100.** Vals GPQA and MMLU support good reasoning.
- **Context window: 90/100.** 1M listed; no full-window retrieval result verified.
- **Multimodal: 15/100.** Text-only Vals route; broader modalities not assumed.
- **Coding: 74/100.** Vals coding benchmarks are mixed; SWE variant and harness differ.
- **Cost efficiency: 96/100.** Historical Vals $0.43/$0.87 per million; Xiaomi route retired.
- **Overall Score: 65/100.** Half-up mean of five quality dimensions, excluding cost.

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-02
- Method: Vals exact-model evaluations and Xiaomi's retirement notice.
- Reference URLs:
  - [Vals MiMo V2.5 Pro evaluation](https://www.vals.ai/models/xiaomi_mimo-v2.5-pro)
  - [Xiaomi model integration documentation](https://mimo.mi.com/docs/en-US/integration/opencode)
