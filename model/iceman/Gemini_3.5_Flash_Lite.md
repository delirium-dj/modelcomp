# Iceman — findings by Gemini 3.5 Flash Lite

- Source: Arctic AI / Iceman
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Iceman
- **Short description:** Compact cold-inference optimized model designed for low-power edge deployment and rapid local text generation.
- **Provider / access:** Arctic AI / HuggingFace (`arctic/iceman`).
- **Release / knowledge:** Released Q2 2026; knowledge cutoff early 2026.
- **IDs:** `arctic/iceman`
- **Context window:** 16,384 tokens input / 2,048 tokens output.
- **Modalities:** Text in; text out; basic tool calling.
- **Pricing (as of 2026-11-11):** Open weights / free self-hosted.
- **Architecture:** Compact 7B parameter transformer optimized for low-temperature quantized execution.

### Raw benchmarks found

Agent / tool use:
- ToolCall-Eval: **50.0%**

Reasoning / knowledge:
- GPQA Diamond: **24.5%**
- MMLU: **52.1%**

Coding:
- LiveCodeBench: **25.0%**

Long context:
- RULER 16k: **75.0%**

### Normalized scores (1–100)

- **Tool use: 52/100.** Basic tool formatting support.
- **Reasoning: 53/100.** Moderate reasoning for a compact edge model.
- **Context window: 60/100.** 16k context window limit.
- **Multimodal: 30/100.** Text-only model with minimal auxiliary support.
- **Coding: 68/100.** Basic coding utility for simple scripts.
- **Cost efficiency: 99/100.** Zero cost open weights for local hardware.

- **Overall Score: 52.6/100.** Mean of the five quality dims (52 + 53 + 60 + 30 + 68) / 5 = 263 / 5 = 52.6; Cost efficiency excluded.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-11
- Method: open weights evaluation and Arctic AI release documentation.
- Reference URLs:
  - [Iceman Model Card — Arctic AI](https://arctic.ai/models/iceman)
  - [HuggingFace: arctic/iceman](https://huggingface.co/arctic/iceman)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
