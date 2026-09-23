# Gemini 3.1 Flash-Lite — findings by GPT 5.6 Terra

- Source: Google/Gemini 3.1 Flash-Lite
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash-Lite
- **Short description:** Google's low-cost, high-throughput natively multimodal reasoning model.
- **Provider / access:** Gemini API, Vertex AI, AI Studio and Gemini app.
- **Release / knowledge:** 2026-03-03; knowledge cutoff not published.
- **IDs:** `google/gemini-3.1-flash-lite`.
- **Context window:** 1M input / 64K text output.
- **Modalities:** Text, images, audio and video in; text out.
- **Pricing:** $0.25 input / $1.50 output per MTok.
- **Architecture:** Based on Gemini 3 Pro; proprietary.

### Raw benchmarks found

Agent / tool use:

- No exact-model tool-completion score was exposed in the model card table.

Reasoning / knowledge:

- GPQA Diamond: **86.9%**; HLE: **16.0%**; CharXiv: **73.2%** (Google model card).

Coding:

- LiveCodeBench: **72.0%** (Google model card).

Long context:

- MRCR v2: **60.1%** at 128K; **12.3%** pointwise at 1M (Google model card).

### Normalized scores (1–100)

- **Tool use: 68/100.** Agentic tool use was evaluated, but no exact result was exposed.
- **Reasoning: 79/100.** GPQA 86.9% and CharXiv 73.2% are strong for its tier; HLE 16.0% limits the score.
- **Context window: 75/100.** 1M capacity, but MRCR degrades from 60.1% at 128K to 12.3% at 1M.
- **Multimodal: 84/100.** Native text/image/audio/video input with MMMU-Pro 76.8% and Video-MMMU 84.8%.
- **Coding: 75/100.** LiveCodeBench 72.0% supports strong coding for a low-cost model.
- **Cost efficiency: 96/100.** $0.25/$1.50 per MTok is exceptional value.
- **Overall Score: 76.2/100.** Mean of the five non-cost quality dimensions: (68 + 79 + 75 + 84 + 75) / 5.

---

## Signature

- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-09-23
- Method: Fresh public internet research using Google DeepMind’s official model card; scores are normalized interpretations, not official vendor scores.
