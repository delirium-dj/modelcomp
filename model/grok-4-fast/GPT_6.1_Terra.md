# Grok 4 Fast — findings by GPT-6.1 Terra

- Source: xAI `grok-4-fast-reasoning`
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4 Fast
- **Short description:** xAI's fast long-context model; benchmark numbers below refer to its reasoning configuration.
- **Provider / access:** xAI API reasoning route `grok-4-fast-reasoning`; the reasoning name is a mode of the canonical Fast model.
- **Release / knowledge:** Vals reports 2025-09-19; knowledge cutoff not verified.
- **IDs:** `grok-4-fast-reasoning`.
- **Context window:** Vals lists 2M context; output up to 2M is subject to the shared window.
- **Modalities:** Text and image input, text output, supported by Vals's MMMU Pro visual evaluation.
- **Pricing (2026-11-02):** Vals lists $0.20 input / $0.50 output per million on the evaluated route.
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Vals Terminal-Bench 2.0 **29.21% ± 4.85**; no verified TB 2.1 or Tau3 result found.

Reasoning / knowledge:

- Vals GPQA Diamond **85.35% ± 1.79**, MMLU Pro **79.70% ± 0.39**.

Coding:

- Vals LiveCodeBench **78.97% ± 1.10**, SWE-bench **45.40% ± 2.23**, Vibe Code Bench v1.1 **0.00%**; the displayed SWE variant is unspecified.

Long context:

- Vals lists 2M context; no verified 512K-plus retrieval score found.

### Normalized scores (1–100)

- **Tool use: 63/100.** Vals TB 2.0 indicates limited terminal-agent performance.
- **Reasoning: 83/100.** Vals GPQA and MMLU support capable reasoning.
- **Context window: 97/100.** 2M advertised without verified long-context retrieval accuracy.
- **Multimodal: 65/100.** Image and text input with text output; broader modalities not independently established here.
- **Coding: 59/100.** Vals LiveCodeBench is much stronger than its SWE and Vibe Code results.
- **Cost efficiency: 97/100.** Vals lists $0.20/$0.50 per million for its route.
- **Overall Score: 73/100.** Half-up mean of five quality dimensions, excluding cost.

---

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-02
- Method: Independent Vals evaluation of the reasoning configuration; normalized scores are interpretations, not vendor scores.
- Reference URLs:
  - [Vals reasoning-mode evaluation](https://www.vals.ai/models/grok_grok-4-fast-reasoning)
- Future sources: add a separate signed findings file alongside this one.
