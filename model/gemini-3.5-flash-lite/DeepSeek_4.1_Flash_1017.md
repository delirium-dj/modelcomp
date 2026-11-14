# Gemini 3.5 Flash-Lite — findings by DeepSeek 4.1 Flash 1017

- Source: Google/Gemini 3.5 Flash-Lite (`gemini-3.5-flash-lite`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash-Lite
- **Short description:** Google's low-cost, low-latency Gemini tier aimed at high-volume classification, extraction and other cheap production traffic rather than hard reasoning.
- **Provider / access:** Google (single API provider on Artificial Analysis); OpenRouter id `google/gemini-3.5-flash-lite` served by Google AI Studio and Google Vertex.
- **Release / knowledge:** Released 2026-07-21; knowledge cutoff not stated on the fetched page.
- **IDs:** `google/gemini-3.5-flash-lite`
- **Context window:** 1M tokens (per Artificial Analysis technical specifications; ~1,500 A4 pages).
- **Modalities:** text, image, speech and video input; text output; reasoning model (extended thinking); tool calling advertised on the OpenRouter API surface.
- **Pricing (as of 2026-11-14):** $0.30 / $2.50 per 1M input/output tokens (Google API, Artificial Analysis headline); 90% cache discount; blended $0.33 per 1M at a 7:2:1 cache-hit/input/output ratio.
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index: **12 / #30 of 36** in its comparison class (AA Intelligence Index v5.0.1, 9-eval harness)
- Terminal-Bench 4.0 / GDPval-AA / AutomationBench-AA: no verified public score found (AA page shows these only as unlabelled charts)

Reasoning / knowledge:

- AA-Omniscience Accuracy / Non-Hallucination Rate: no verified public score found
- HLE-Diamond: no verified public score found
- CritPt v2 (Hard Subset): no verified public score found

Coding:

- FrontierCode-AA 2.0 / Terminal-Bench 4.0: no verified public score found
- SWE-bench Verified / LiveCodeBench: no verified public score found

Long context:

- 1M-token context window; no long-context retrieval figure published on the fetched page.

### Normalized scores (1–100)

- **Tool use: 42/100.** Intelligence Index 12 sits in the weakest band, and no agentic eval (Terminal-Bench, AutomationBench, GDPval) is published for it, so it is capped as a low-tier agent driver despite 292 tok/s throughput.
- **Reasoning: 40/100.** Index 12 (<20 band) with no HLE-Diamond, CritPt or Omniscience corroboration places it at the bottom of the reasoning scale.
- **Context window: 95/100.** 1M-token window puts it in the top tier even though the model itself is small.
- **Multimodal: 85/100.** Accepts text, image, speech and video and emits text — full input coverage, held below 90 only because output is text-only.
- **Coding: 45/100.** No coding benchmark is published and the 12-point index implies weak code synthesis, so it is marked at the capped no-evidence level.
- **Cost efficiency: 88/100.** Cheap $0.30 input with a 90% cache discount, but $2.50 output is expensive for a lite tier, so it does not reach the sub-dollar-output bracket.
- **Overall Score: 61/100.** Half-up mean of 42, 40, 95, 85, 45; best fit for cheap high-volume long-document extraction where raw intelligence matters least.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash 1017 (deepseek/deepseek-v4.1-flash-1017)** — 2026-11-14
- Method: public internet research via direct `webfetch` of the Artificial Analysis model page (web search returned HTTP 402, so the direct-fetch fallback was used); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass (markdown links to primary sources)
  - [Gemini 3.5 Flash-Lite — Artificial Analysis](https://artificialanalysis.ai/models/gemini-3-5-flash-lite)
  - [google/gemini-3.5-flash-lite — OpenRouter](https://openrouter.ai/google/gemini-3.5-flash-lite)
