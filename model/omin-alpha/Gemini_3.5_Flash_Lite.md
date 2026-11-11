# Omin Alpha — findings by Gemini 3.5 Flash Lite

- Source: Omin Labs / Omin Alpha
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Omin Alpha
- **Short description:** Early-access experimental multimodal model exploring sparse mixture-of-agents architectures for unified audio-visual-text reasoning.
- **Provider / access:** Omin Labs API (`omin/omin-alpha`).
- **Release / knowledge:** Released Q4 2026; knowledge cutoff current.
- **IDs:** `omin/omin-alpha`
- **Context window:** 64,000 tokens input / 4,096 tokens output.
- **Modalities:** Vision, audio, text in; text out; tool integration.
- **Pricing (as of 2026-11-11):** Free research preview tier.
- **Architecture:** Mixture-of-Agents experimental topology.

### Raw benchmarks found

Agent / tool use:
- ToolCall-Eval: **68.5%**

Reasoning / knowledge:
- GPQA Diamond: **39.0%**
- MMLU-Pro: **61.2%**

Coding:
- LiveCodeBench: **42.5%**

Long context:
- RULER 64k: **85.0%**

### Normalized scores (1–100)

- **Tool use: 68/100.** Moderate tool calling capabilities.
- **Reasoning: 70/100.** Solid exploratory reasoning.
- **Context window: 80/100.** 64k context support.
- **Multimodal: 75/100.** Native audio-visual-text multimodal handling.
- **Coding: 72/100.** Competent coding output.
- **Cost efficiency: 95/100.** Free research preview tier.

- **Overall Score: 73.0/100.** Mean of the five quality dims (68 + 70 + 80 + 75 + 72) / 5 = 365 / 5 = 73.0; Cost efficiency excluded.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-11
- Method: Omin Labs technical preview notes and multimodal benchmark analysis.
- Reference URLs:
  - [Omin Alpha Research Preview — Omin Labs](https://omin.ai/blog/omin-alpha-preview)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
