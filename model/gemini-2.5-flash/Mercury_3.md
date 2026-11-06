# Gemini 2.5 Flash — findings by Mercury 3

- Source: Google DeepMind (Gemini 2.5 Flash)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash
- **Short description:** Google DeepMind's state-of-the-art workhorse model (released 2026-05-20), the first Flash with thinking capabilities, balancing price/performance for reasoning, coding, math, and scientific tasks. Access to 2.5-series models is limited to prior active users; for new projects Google recommends Gemini 3.5 Flash-Lite / 3.8 Flash.
- **Provider / access:** Gemini API (`gemini-2.5-flash`), Google AI Studio, Vertex AI, Gemini Enterprise Agent Platform; also via OpenRouter and ~9 providers.
- **Release / knowledge:** Released 2026-05-20; knowledge cutoff not published in fetched sources.
- **IDs:** `google/gemini-2.5-flash`.
- **Context window:** 1,048,576 tokens; max output 65,535.
- **Modalities:** multimodal input (text/image/video/audio per Gemini API docs); text output; thinking model; tool use; no image/audio generation.
- **Pricing (as of 2026-11):** $0.30 in / $2.50 out per 1M (llm-stats/pricepertoken); providers from $0.15 in (CloudPrice minimum); 222 tok/s measured throughput (#1 in AY dataset).
- **Architecture:** proprietary (parameters undisclosed).

### Raw benchmarks found

Agent / tool use:

- No strong agentic/terminal benchmark data captured; SWE-bench Verified (agentic) listed under Coding

Reasoning / knowledge:

- GPQA Diamond: **82.8%** (Google DeepMind model card)
- AIME 2025: **72.0%** (model card)
- Multi-domain reasoning via thinking mode (first Flash with thinking)

Coding:

- SWE-bench Verified: **48.9%** (model card; #12/12 in AY dataset)
- LiveCodeBench: **59.3%** (model card)

Long context:

- 1M verified; no long-context retrieval benchmark captured in fetched sources

Multimodal:

- Multimodal input with text output; 222 tok/s throughput (#1)

### Normalized scores (1–100)

- **Tool use: 72/100.** No verified agentic index captured; tool use supported but unquantified in fetched sources.
- **Reasoning: 78/100.** GPQA Diamond 82.8% and AIME 2025 72.0% are solid for a Flash-tier thinking model of its era.
- **Context window: 92/100.** 1M verified — top-tier.
- **Multimodal: 84/100.** Broad multimodal input (text/image/video/audio) with text output; excellent throughput.
- **Coding: 76/100.** SWE-bench Verified 48.9% and LiveCodeBench 59.3% are modest; budget-tier, not class-leading.
- **Cost efficiency: 72/100.** $0.30/$2.50 (from $0.15) — mid-range pricing for a workhorse; superseded by newer Flash tiers.
- **Overall Score: 80/100.** Mean of the five non-cost dims (72+78+92+84+76)/5 = 80.4 → 80. Best-fit: a fast, 1M-context budget thinking workhorse from mid-2025; deprecated in practice — new projects should use Gemini 3.x Flash models.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-06
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Google AI for Developers: gemini-2.5-flash model docs](https://ai.google.dev/gemini-api/docs/models/gemini-2.5-flash)
  - [Google DeepMind: Gemini 2.5 Flash model card (PDF)](https://storage.googleapis.com/deepmind-media/Model-Cards/Gemini-2-5-Flash-Model-Card.pdf)
  - [Google DeepMind: Gemini 2.5 technical report](https://storage.googleapis.com/deepmind-media/gemini/gemini_v2_5_report.pdf)
  - [AY Automate: Gemini 2.5 Flash specs/benchmarks (verified sources)](https://www.ayautomate.com/models/gemini-2-5-flash)
  - [llm-stats: Gemini 2.5 Flash](https://llm-stats.com/models/gemini-2.5-flash)
  - [Artificial Analysis: Gemini 2.5 Flash](https://artificialanalysis.ai/models/gemini-2-5-flash)
  - [OpenRouter: google/gemini-2.5-flash](https://openrouter.ai/google/gemini-2.5-flash)
- Future sources: add a new file next to this one using the same headings.
