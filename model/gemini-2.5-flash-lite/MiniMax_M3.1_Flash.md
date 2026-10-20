# Gemini 2.5 Flash Lite — findings by MiniMax M3.1 Flash

- Source: Google (Gemini 2.5 Flash-Lite), `gemini-2.5-flash-lite`
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash Lite
- **Short description:** Google's July 2025 budget multimodal tier — 1M context, text/image/audio/video/PDF input at $0.10/$0.40 per 1M with a free tier, and the model Google Cloud retires on **2026-10-20** while the Gemini API keeps serving it.
- **Provider / access:** Gemini API / AI Studio (`gemini-2.5-flash-lite`), Vertex AI (`gemini-2.5-flash-lite`), OpenRouter `google/gemini-2.5-flash-lite`. **Not on OpenCode Zen** (Zen carries `gemini-3.5-flash-lite` instead).
- **Release / knowledge:** preview `gemini-2.5-flash-lite-preview-06-17` on **2025-06-17**; GA `gemini-2.5-flash-lite` on **2025-07-22**; the Sep-2025 preview was shut down 2026-03-31. Knowledge cutoff **January 2025** (latest update July 2025).
- **IDs:** `gemini-2.5-flash-lite` (AI Studio / Gemini API / Vertex), `google/gemini-2.5-flash-lite` (OpenRouter).
- **Context window:** **1,048,576** tokens in, **65,536** out (Vertex and Gemini API model pages agree).
- **Modalities:** text, image, video, audio and PDF input; text output; thinking, function calling, code execution, search grounding, URL context, caching, tuning and batch/flex/priority all supported. Not supported: Live API, image generation, audio generation, computer use.
- **Pricing (as of 2026-10-20):** **$0.10/M in, $0.40/M out**; cached input $0.01/M. A **free tier** exists (free input and output tokens; free-tier content may be used to improve products, paid-tier content is not).
- **Architecture:** proprietary.

### Raw benchmarks found

> Google's 2.5 Flash-Lite launch table is image-based and Artificial Analysis / BenchLM expose no values for the GA build, so the evidence is thin and mostly from AA's non-reasoning run.

Reasoning / knowledge:

- GPQA Diamond: **47.4%** (AA, non-reasoning) · HLE: **3.66%** (AA) · MMLU-Pro: no verified public score found
- Artificial Analysis Intelligence Index: **7 (estimated)** for the GA build; the Sep-2025 preview scored 10 (reasoning) / 9 (non-reasoning)
- AIME 2025: **35.3%** (AA) · AA-LCR: **32.0%** (AA) · IFBench: **31.5%** (AA) · CritPt: **0%** (AA)
- Omniscience Accuracy / Hallucination Rate: **15.4% / 87.8%** (AA) · Output speed: **310.5 tok/s**, TTFT 0.31s (AA)

Agent / tool use:

- Tau2-bench: **19.0%** (AA) · Terminal-Bench Hard: **2.3%** (AA) · Terminal-Bench 2.1: no verified public score found
- GDPval-AA: no verified public score found (AA field null) · OSWorld / AutomationBench / Toolathon / MCP-Atlas: no verified public score found

Coding:

- LiveCodeBench: **40.0%** (AA, non-reasoning) · SWE-bench Verified: no verified public score found · SciCode / DeepSWE / Vibe Code Bench: no verified public score found

Long context:

- No MRCR / RULER measurement published for this model at 128k or 1M (the sibling Gemini 2.5 Flash measured 54.3% at 128k and 21.0% at 1M).

### Normalized scores (1–100)

- **Tool use: 30/100.** τ²-bench 19.0% and Terminal-Bench Hard 2.3% are at the floor of the scale, with no GDPval, OSWorld or MCP-Atlas data at all — the model was never evaluated for agentic work.
- **Reasoning: 38/100.** GPQA 47.4%, HLE 3.66%, AIME 2025 35.3%, LCR 32.0% and an AA Intelligence Index of 7 keep it in the bottom band despite the 310 tok/s speed.
- **Context window: 78/100.** The 1,048,576-token window is genuine, but no retrieval measurement was published for this SKU, so it is scored below the 95+ "1M with real retrieval" band.
- **Multimodal: 92/100.** Text, image, video, audio and PDF input with text out — the top multimodal tier by construction, with MMMU-Pro 54.0% (AA) as the only published measurement.
- **Coding: 35/100.** LiveCodeBench 40.0% and no SWE-bench figure at all — the model is not a coding tier.
- **Cost efficiency: 99/100.** $0.10/M in and $0.40/M out plus a free tier is the cheapest multimodal route in the catalogue (a free-tier route would score 100).
- **Overall Score: 55/100.** Mean of the five quality dims = (30 + 38 + 78 + 92 + 35) / 5 = 54.6 → **55**. Best fit: high-volume cheap multimodal classification and extraction — and note the Google Cloud retirement lands on 2026-10-20 while the Gemini API keeps serving it.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-20
- Method: public internet research (Google Gemini API and Vertex AI model pages, changelog and pricing pages, Artificial Analysis, BenchLM, OpenRouter API); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3.5_Flash_Lite.md`, using the same headings.
