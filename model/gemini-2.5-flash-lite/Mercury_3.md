# Gemini 2.5 Flash-Lite — findings by Mercury 3

- Source: Google DeepMind (Gemini 2.5 Flash-Lite)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash-Lite
- **Short description:** Google DeepMind's most cost-efficient multimodal model (released June 2025), optimized for ultra-low latency and high-frequency lightweight tasks — high-volume classification, simple data extraction, and budget-constrained workloads. Superseded by Gemini 3.x Flash-Lite.
- **Provider / access:** Gemini API (`gemini-2.5-flash-lite`), Google AI Studio, Vertex AI, Gemini Enterprise Agent Platform, OpenRouter and ~7 providers.
- **Release / knowledge:** Released June 2025; knowledge cutoff not published.
- **IDs:** `google/gemini-2.5-flash-lite`.
- **Context window:** ~1M tokens (1,048,576 per several listings).
- **Modalities:** multimodal input (text/image/video/audio per Gemini API docs); text output; reasoning variant (407 t/s) and non-reasoning variant (TTFA 0.29s).
- **Pricing (as of 2025-06+):** $0.10 in / $0.40 out per 1M (some providers from $0.075 in; cached ~$0.025).
- **Architecture:** proprietary (parameters undisclosed).

### Raw benchmarks found

Reasoning / knowledge:

- AA Intelligence Index (independent, per prior comparison tables): ~**13** (2.5 Flash-Lite family) — budget-tier
- No self-standing measured figure captured for this exact release in fetched sources

Coding / tool use:

- Suited to classification/extraction/low-latency tasks; no class-leading coding benchmarks
- Benchmarks improved vs earlier Flash models per OpenRouter (generic vendor claim)

Long context:

- ~1M verified; no independent long-context retrieval benchmark captured

Multimodal:

- Broad multimodal input with text output; extremely cheap per token

### Normalized scores (1–100)

- **Tool use: 70/100.** High-throughput classification/extraction use case; no strong agentic benchmark captured.
- **Reasoning: 66/100.** AA class estimate ~13 — clearly budget-tier.
- **Context window: 92/100.** ~1M verified.
- **Multimodal: 84/100.** Broad native multimodal input with text output.
- **Coding: 72/100.** Basic coding/extraction only; not a coding model.
- **Cost efficiency: 90/100.** ~$0.10/$0.40 (min $0.075) — among the cheapest 1M-context models of its era.
- **Overall Score: 77/100.** Mean of the five non-cost dims (70+66+92+84+72)/5 = 76.8 → 77. Best-fit: a historic ultra-cheap multimodal workhorse; superseded — new projects should use Gemini 3.1 Flash-Lite.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-06
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Google AI for Developers: gemini-2.5-flash-lite docs](https://ai.google.dev/gemini-api/docs/models/gemini-2.5-flash-lite)
  - [Artificial Analysis: Gemini 2.5 Flash-Lite release page](https://artificialanalysis.ai/models/releases/gemini-2-5-flash-lite)
  - [llm-stats: Gemini 2.5 Flash-Lite](https://llm-stats.com/models/gemini-2.5-flash-lite)
  - [OpenRouter: google/gemini-2.5-flash-lite](https://openrouter.ai/google/gemini-2.5-flash-lite)
  - [CloudPrice: Gemini 2.5 Flash Lite](https://cloudprice.net/models/google-gemini-2-5-flash-lite)
  - [Cost Per Prompt: Gemini 2.5 Flash Lite pricing analysis](https://costperprompt.com/models/google-gemini-2-5-flash-lite)
- Future sources: add a new file next to this one using the same headings.
