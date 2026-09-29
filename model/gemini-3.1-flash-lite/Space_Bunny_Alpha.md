# Gemini 3.1 Flash-Lite — findings by Space Bunny Alpha

- Source: Google (`gemini-3.1-flash-lite`; stable successor to the shut-down preview)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash-Lite
- **Short description:** Google's cost-efficient multimodal Flash-Lite model for high-volume extraction, subagents, and lightweight multimodal reasoning.
- **Provider / access:** Google Gemini API and Vertex AI (`gemini-3.1-flash-lite`); Google AI Studio and supported Gemini endpoints. The older `gemini-3.1-flash-lite-preview` ID was deprecated and **shut down on 2026-05-25**.
- **Release / knowledge:** GA release date **2026-05-07** (Vertex AI model page and Google deprecations table); the preview shipped 2026-03-03. **Knowledge cutoff: January 2025** (Vertex AI). This is new in this revision — the prior report recorded "no knowledge cutoff shown".
- **IDs:** `gemini-3.1-flash-lite` (GA, stable); `gemini-3.1-flash-lite-preview` (shut down 2026-05-25).
- **Context window:** 1,048,576 input tokens; **65,536 output tokens** (Google model documentation; Vertex AI confirms the input limit).
- **Modalities:** Text, code, image, audio, video, and PDF input; text output; thinking (default `minimal`, with `medium`/`high` advised for subagents), function calling, structured outputs, code execution, search grounding, file search, URL context, Maps grounding, caching, batch/flex/priority inference, and computer use (preview) supported. Image/audio generation and the Live API are not supported.
- **Pricing (as of 2026-09-29):** **$0.25 per 1M input, $0.025 cached input, $1.50 output** — unchanged from the prior revision and still the cheapest 1M-context multimodal tier in the Gemini 3 line. OpenRouter batch is ~$0.125 in / $0.75 out; Vertex/Google Cloud list $0.30 / $2.50.
- **Speed / latency:** Artificial Analysis now reports **305.1 output tokens/s** (**#7 of 177** in its price class) and **5.33 s TTFT** — **both changed since the prior revision, which recorded ~199 output tokens/s and ~7.8 s TTFT**. The fastest single route is Google AI Studio at 318.6 t/s. TTFT remains slow for a "lite" tier.
- **Architecture:** Proprietary; Google has not disclosed parameter count.
- **Deprecation / retirement:** The GA model is **not yet deprecated, but a hard shutdown date is published: May 7, 2027** (earliest possible), with **`gemini-3.5-flash-lite` as Google's recommended replacement** on the first-party Gemini API; the Vertex AI entry publishes the same May 7, 2027 retirement with no replacement named (re-verified 2026-09-29, unchanged). Gemini 3.5 Flash-Lite is GA (July 21, 2026), priced higher at $0.30 / $2.50. **The prior revision's "scores 37 vs 26" comparison is superseded**: on the current index Gemini 3.1 Flash-Lite is **19 (estimated)**, #57 of 177. Separately, Vertex AI still lists the preview as discontinued **July 9, 2026**, one month later than the first-party shutdown of May 25, 2026. Gemini 2.5 Flash-Lite retires October 20, 2026 with Gemini 3.1 Flash-Lite named as a replacement, so the model still absorbs migration traffic.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **31.1%** (Artificial Analysis via ComputePrices, measured Sep 2026). The earlier Vals AI/BenchLM reading was 34.1%.
- Terminal-Bench Hard: **24.2%** (Artificial Analysis) — **added**.
- τ²-bench: **31.3%**; τ-bench Banking: **9.7%** (Artificial Analysis) — **added**; these replace the earlier "no verified Tau value" gap.
- Gert Labs Composite Game Benchmark: **38.46%** (BenchLM, exact benchmark source).
- Toolathlon, GDPval-AA, Claw-Eval, and MCP-Atlas: **no verified public exact value found**

Reasoning / knowledge:

- GPQA Diamond: **82.2%** (Artificial Analysis); the earlier Vals AI/BenchLM reading was 81.1%.
- MMLU-Pro (Vals AI): **86.2%** (BenchLM, Vals AI leaderboard).
- Humanity's Last Exam: **17.2%** (Artificial Analysis) — **added**; previously recorded as not found.
- Artificial Analysis Intelligence Index **v4.3.2**: **19 (estimated)**, ranked **#57 of 177** in its price-class comparison (comparable-model median 12) — **changed**; the prior revision recorded the displayed value 26 and no v4.3.2 reading. A stale comparison page still shows 26 against Gemini 3 Pro Preview (low) at 34.
- LCR/MLCR, CritPt, and hallucination metrics: **no verified public exact value found**

Coding:

- LiveCodeBench (Vals AI): **80.1%** (BenchLM, Vals AI leaderboard).
- SWE-bench (Vals AI): **62.8%** (BenchLM, Vals AI leaderboard).
- SciCode: **41.9%** (Artificial Analysis) — **added**.
- Vibe Code Bench v1.1: **0.00%** (BenchLM, Vals AI leaderboard).
- SWE-bench Pro, DeepSWE, and exact SWE-bench Verified: **no verified public exact value found**

Long context:

- Long-context reasoning composite: **71.3%** (Artificial Analysis) — **added**; the prior revision had no exact-model retrieval-at-length score.
- IFBench: **77.2%** (Artificial Analysis) — **added**.
- Native context: **1,048,576 input tokens**; output cap 65,536.

Sources consulted: [Google Gemini deprecations table](https://ai.google.dev/gemini-api/docs/deprecations), [Google Gemini 3.1 Flash-Lite preview documentation (shut down)](https://ai.google.dev/gemini-api/docs/models/gemini-3.1-flash-lite-preview), [Vertex AI Gemini 3.1 Flash-Lite](https://cloud.google.com/vertex-ai/docs/generative-ai/models/gemini/3-1-flash-lite), [What's new in Gemini 3.5 Flash](https://ai.google.dev/gemini-api/docs/generate-content/whats-new-gemini-3.5), [Artificial Analysis Gemini 3.1 Flash-Lite](https://artificialanalysis.ai/models/gemini-3-1-flash-lite-preview), [ComputePrices Gemini 3.1 Flash-Lite](https://computeprices.com/models/gemini-3-1-flash-lite), and [BenchLM Gemini API pricing](https://benchlm.ai/google/api-pricing), accessed 2026-09-29.

### Normalized scores (1–100)

- **Tool use: 55/100.** Down from 62. The newly available Artificial Analysis rows are weak and now measurable: Terminal-Bench 2.1 31.1%, Terminal-Bench Hard 24.2%, τ²-bench 31.3%, τ-bench Banking 9.7%, against a documented but broad tool surface. The 2026-09-24 report could not see the τ and Terminal-Bench Hard rows and therefore over-weighted the documented tool list.
- **Reasoning: 68/100.** Down from 72. HLE 17.2% is verified and is low; GPQA 82.2% and MMLU-Pro 86.2% are solid. LCR/CritPt remain absent, and the **newly verified AA Intelligence Index v4.3.2 value of 19 against a ceiling of 58** is the reason for the drop — the prior revision scored against a stale displayed 26. Score changed.
- **Context window: 95/100.** Unchanged. A 1M input context is confirmed, and the long-context reasoning composite of 71.3% now supplies the exact-model retrieval evidence the prior revision lacked.
- **Multimodal: 95/100.** Unchanged. Google explicitly documents text, code, image, audio, video, and PDF input with text output.
- **Coding: 68/100.** Down from 70. SciCode 41.9% is confirmed and Vibe Code Bench remains 0.00%; LiveCodeBench 80.1% and SWE-bench Vals 62.8% are the only strong rows, and SWE-Pro/DeepSWE are absent.
- **Cost efficiency: 96/100.** Unchanged. The $0.25/$1.50 rate and $0.025 cached input remain highly competitive for a 1M multimodal model.
- **Overall Score: 76.2/100.** (55 + 68 + 95 + 95 + 68) / 5 = 381 / 5 = 76.2, down from 77.0 on 2026-09-29. The only quality change is Reasoning, driven by the newly verified AA Intelligence Index v4.3.2 value of 19 (ceiling 58); faster output (305.1 t/s, 5.33 s TTFT) is recorded but does not enter Overall. Best fit: inexpensive high-volume multimodal extraction and subagent tasks, with little evidence for hard agentic coding and a retirement clock running to 2027-05-07.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: Public web research of Google's current, deprecated, and Vertex AI model documentation plus Artificial Analysis, ComputePrices, and BenchLM; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
