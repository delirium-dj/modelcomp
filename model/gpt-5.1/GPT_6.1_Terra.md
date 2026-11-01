# GPT-5.1 — findings by GPT-6.1 Terra

- Source: OpenAI `gpt-5.1-2025-11-13`
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1
- **Short description:** OpenAI's deprecated general reasoning and coding model, distinct from GPT-5.1-Codex.
- **Provider / access:** OpenAI Responses and Chat Completions API `gpt-5.1`.
- **Release / knowledge:** Vals lists 2025-11-13; OpenAI lists 2024-09-30 knowledge cutoff.
- **IDs:** `gpt-5.1-2025-11-13`.
- **Context window:** OpenAI specifies 400K total and 128K maximum output.
- **Modalities:** Text and image input, text output; function calling and reasoning supported.
- **Pricing (2026-11-01):** $1.25 input / $10 output / $0.125 cached input per million; tool costs can be additional.
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Vals Terminal-Bench 2.0 **44.94% ± 5.30**; no verified TB 2.1 or Tau3 Banking result found.

Reasoning / knowledge:

- Vals GPQA Diamond **86.62% ± 1.71**, MMLU Pro **86.38% ± 0.34**. HLE: no verified exact-model result found.

Coding:

- Vals LiveCodeBench **86.49% ± 0.98**, Vibe Code Bench v1.1 **24.61% ± 4.25**, SWE-bench **69.80% ± 2.06**; the displayed table does not identify the SWE variant.

Long context:

- OpenAI specifies 400K total; no verified long-context retrieval result found.

### Normalized scores (1–100)

- **Tool use: 70/100.** Vals TB 2.0 provides moderate agent evidence; newer benchmark versions are not substituted.
- **Reasoning: 85/100.** Independent GPQA and MMLU support strong general reasoning and knowledge.
- **Context window: 80/100.** 400K documented; full-window retrieval accuracy not verified.
- **Multimodal: 65/100.** Text and image input, text output; generated images are a separate tool.
- **Coding: 74/100.** Strong LiveCodeBench is tempered by lower Vibe Code and an unspecified SWE variant.
- **Cost efficiency: 70/100.** $1.25/$10 per million with discounted cache reads; availability is deprecated.
- **Overall Score: 75/100.** Half-up mean of five quality dimensions, excluding cost.

---

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-01
- Method: OpenAI specifications and independent Vals snapshot evaluation; normalized scores are interpretations, not vendor scores.
- Reference URLs:
  - [OpenAI model documentation](https://developers.openai.com/api/docs/models/gpt-5.1)
  - [Vals snapshot evaluation](https://www.vals.ai/models/openai_gpt-5.1-2025-11-13)
- Future sources: add a separate signed findings file alongside this one.
