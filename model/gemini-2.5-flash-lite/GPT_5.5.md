# Gemini 2.5 Flash-Lite — findings by GPT 5.5

- Source: Google DeepMind (`gemini-2.5-flash-lite`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash-Lite
- **Short description:** Google's lightweight, ultra-low-latency Gemini 2.5 model optimized for cost-efficient reasoning and multimodal workloads.
- **Provider / access:** Gemini API, Google AI Studio, Vertex AI, and router providers.
- **Release / knowledge:** Gemini 2.5 Flash-Lite preview/general availability in 2025; cutoff not stated.
- **IDs:** `google/gemini-2.5-flash-lite`, `gemini-2.5-flash-lite`.
- **Context window:** **1M tokens** in Gemini 2.5 family docs/model cards.
- **Modalities:** Text, image, audio, video, and PDF input; text output; thinking/reasoning support in the Gemini 2.5 family.
- **Pricing (as of 2026-10-05):** Public examples commonly cite around **$0.10/M input** and **$0.40/M output**; route availability/pricing may change as later Flash-Lite models replace it.
- **Architecture:** Proprietary Gemini Flash-Lite model.

### Raw benchmarks found

Agent / tool use:

- OpenRouter page includes an Artificial Analysis benchmark summary for Gemini 2.5 Flash-Lite.
- Public tool-calling posts describe surprisingly strong tool calling, but the examples are community tests rather than standard rows.

Reasoning / knowledge:

- Gemini 2.5 technical/model-card materials compare Flash-Lite against Gemini 2.5 Flash, Gemini 2.0 Flash, Gemini 1.5 Pro, and competitors.
- Community summaries generally place it around Gemini 2.0 Flash / 1.5 Pro in some tasks while much cheaper.

Coding:

- No exact SWE-bench/LiveCodeBench value recovered.

Long context:

- Gemini 2.5 model-card materials report 1M context evaluation for the family and MRCR v2 long-context comparisons.

### Normalized scores (1–100)

- **Tool use: 58/100.** Tool support is real and AA summary exists, but exact agent rows are not recovered.
- **Reasoning: 62/100.** Lightweight reasoning is solid, below full Flash and Pro.
- **Context window: 92/100.** 1M context earns very strong context credit.
- **Multimodal: 82/100.** Broad multimodal input coverage is a major strength.
- **Coding: 54/100.** Useful for lightweight coding, but no direct coding score was verified.
- **Cost efficiency: 96/100.** Very low token pricing with 1M multimodal context is excellent.
- **Overall Score: 70/100.** Half-up mean of the five quality dimensions; best fit is cheap, fast multimodal extraction and routing.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

