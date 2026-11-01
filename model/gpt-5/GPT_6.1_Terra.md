# GPT-5 — findings by GPT-6.1 Terra

- Source: OpenAI `gpt-5-2025-08-07`
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5
- **Short description:** OpenAI's deprecated general reasoning and coding model; distinct from the Pro, Mini and Codex models.
- **Provider / access:** OpenAI Responses and Chat Completions APIs `gpt-5`.
- **Release / knowledge:** Released 2025-08-07; knowledge cutoff 2024-09-30.
- **IDs:** Default snapshot `gpt-5-2025-08-07`.
- **Context window:** OpenAI specifies 400K total, 272K maximum input and 128K maximum output.
- **Modalities:** Text and image input, text output; function calling and reasoning.
- **Pricing (2026-11-01):** OpenAI $1.25 input / $10 output / $0.125 cached per million; tool charges may be additional.
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Vals Terminal-Bench 2.0 **37.08% ± 5.15**; no verified TB 2.1 score found.

Reasoning / knowledge:

- Vals GPQA Diamond **85.61% ± 1.76**, MMLU Pro **86.54% ± 0.34**. OpenAI's GPQA **88.4%** launch claim is for GPT-5 Pro and is not attributed to base GPT-5.

Coding:

- OpenAI reports SWE-bench Verified **74.9%** on a fixed 477-task subset. Vals reports LiveCodeBench **85.91% ± 0.97**, Vibe Code Bench v1.1 **20.09% ± 3.41**, and SWE-bench **69.00% ± 2.07** with its displayed variant unspecified.

Long context:

- OpenAI specifies 400K total; no verified full-window retrieval score found.

### Normalized scores (1–100)

- **Tool use: 67/100.** Vals TB 2.0 supports moderate agent capability; newer benchmark versions are not assumed equivalent.
- **Reasoning: 84/100.** Vals GPQA and MMLU provide strong independent evidence.
- **Context window: 80/100.** OpenAI documents 400K total and 272K maximum input, without verified full-window retrieval.
- **Multimodal: 65/100.** Image and text input, text output; image generation is a separate tool.
- **Coding: 74/100.** Strong LiveCodeBench and vendor SWE subset are moderated by Vals Vibe Code.
- **Cost efficiency: 70/100.** OpenAI $1.25/$10 per million; deprecated access and tool charges may affect value.
- **Overall Score: 74/100.** Half-up mean of the five quality dimensions, excluding cost.

---

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-01
- Method: OpenAI model documentation and independent Vals snapshot evaluation; normalized scores are interpretations, not vendor scores.
- Reference URLs:
  - [OpenAI model documentation](https://developers.openai.com/api/docs/models/gpt-5)
  - [OpenAI launch evaluation notes](https://openai.com/index/introducing-gpt-5/)
  - [Vals snapshot evaluation](https://www.vals.ai/models/openai_gpt-5-2025-08-07)
- Future sources: add a separate signed findings file alongside this one.
