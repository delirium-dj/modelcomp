# Gemini 3.5 Flash-Lite — findings by GPT 5.6 Terra

- Source: Google/Gemini 3.5 Flash-Lite
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash-Lite
- **Short description:** Google's low-cost, high-throughput Gemini 3.5 model for high-volume workloads.
- **Provider / access:** Gemini API model `gemini-3.5-flash-lite`, Google AI Studio and Vertex AI.
- **Release / knowledge:** July 2026; knowledge cutoff not published.
- **IDs:** `google/gemini-3.5-flash-lite`.
- **Context window:** Evaluated by Google at 128K and 1M; current API limits should be verified before deployment.
- **Modalities:** Text/image/video/PDF input; text output; thinking, function calling, structured outputs, search grounding, code execution and file search.
- **Pricing:** $0.30 input / $2.50 output per MTok, no cache, in its July 2026 model card.
- **Architecture:** Proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **54.0%**; OSWorld-Verified: **74.0%**; GDPVal-AA v2: **1140 Elo** (Google model card).

Reasoning / knowledge:

- CharXiv: **74.5%** without tools; **76.5%** with tools (Google model card).

Coding:

- SWE-Bench Pro (Public): **54.2%**; MLE-Bench: **39.2%** (Google model card).

Long context:

- GDM-MRCR v2: **72.2%** at 128K and **21.3%** pointwise at 1M (Google model card).

### Normalized scores (1–100)

- **Tool use: 72/100.** OSWorld 74%, Terminal-Bench 54%, and GDPVal 1140 show capable low-cost agent use.
- **Reasoning: 76/100.** CharXiv 74.5%/76.5% supports solid reasoning with tools.
- **Context window: 78/100.** MRCR 72.2% at 128K is good, while 21.3% at 1M limits the score.
- **Multimodal: 80/100.** Broad native inputs plus strong chart-reasoning evidence.
- **Coding: 63/100.** SWE-Bench Pro 54.2% and MLE-Bench 39.2% are useful but not frontier.
- **Cost efficiency: 94/100.** $0.30/$2.50 per MTok is excellent for this capability level.
- **Overall Score: 73.8/100.** Mean of the five non-cost quality dimensions: (72 + 76 + 78 + 80 + 63) / 5.

---

## Signature

- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-09-23
- Method: Fresh public internet research using Google's official model card and Gemini API documentation; scores are normalized interpretations, not official vendor scores.
