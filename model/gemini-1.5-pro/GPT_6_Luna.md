# Gemini 1.5 Pro — findings by GPT-6 Luna

- Source: Google/Gemini 1.5 Pro (`gemini-1.5-pro-002`)
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 1.5 Pro
- **Short description:** Google's proprietary multimodal model. This report evaluates the September 2024 stable snapshot `gemini-1.5-pro-002`, not the February research preview and not a later Gemini model.
- **Provider / access:** Google Gemini API and Vertex AI historically exposed the exact `gemini-1.5-pro-002` model ID; the Gemini API's `gemini-1.5-pro-latest` alias was updated to resolve to `-002`. Google shut down the Gemini API route on **2025-09-29**; Vertex AI's model lifecycle table lists the version end date as **2025-09-24**. No current Vertex route was verified, and OpenRouter's current model API search returned no result. Treat this as a retired model, not a currently callable endpoint.
- **Release / knowledge:** Stable GA snapshot released **2024-09-24**. Artificial Analysis lists an **August 1, 2024** knowledge cutoff for its September 2024 version.
- **IDs:** Exact final snapshot `gemini-1.5-pro-002`; historical rolling alias `gemini-1.5-pro-latest` pointed to that snapshot. The project metadata alias `google/gemini-1.5-pro` is not a confirmed current endpoint ID.
- **Context window:** **2 million tokens** for the September 2024 model, as listed on Artificial Analysis' page for Gemini 1.5 Pro (Sep '24). No exact-snapshot retrieval-accuracy result at 512K+ was found. The well-known Google 99% needle-in-a-haystack result at 1M was published for the earlier model, so it is not attributed to `-002` here.
- **Modalities:** Text, image, speech/audio, and video input; text output, per Artificial Analysis' entry for the September 2024 version. No non-text output was verified. Gemini API function calling was supported, but no exact-snapshot tool benchmark was found.
- **Pricing (last published; no longer purchasable from the retired API):** Google's Vertex AI pricing table listed Gemini 1.5 Pro at **$1.25 input / $5.00 output per MTok** for prompts up to 128K, and **$2.50 / $10.00 per MTok** above 128K. (The source bills by characters and estimates about four characters per token.) No current price or free route verified.
- **Architecture:** Google described Gemini 1.5 as a sparse Mixture-of-Experts model. Parameter count and implementation details are undisclosed; no separate architecture specification for the final `-002` snapshot was found.
- **Evaluation caveat:** Exact-snapshot scores below come from Artificial Analysis' page for **Gemini 1.5 Pro (Sep '24)**, with the score table transcribed by BenchLM; both are third-party sources and the AA page notes the model is deprecated. Google's March 2024 technical report reports earlier Gemini 1.5 Pro results, not a version-pinned `-002` evaluation. Those family-level figures are shown separately below and are not used in this report's normalized scores. Its multimodal results used a February checkpoint. No results from later Gemini models are substituted.

### Raw benchmarks found

Exact September 2024 snapshot — Artificial Analysis results as transcribed by BenchLM:

- **AA-GPQA Diamond: 58.9%**.
- **AA-HLE: 4.6%**.
- **AA-MMMU-Pro: 55.0%**.
- **AA Coding Index: 23.6%**.
- BenchLM also transcribes an **Artificial Analysis Intelligence Index score of 7.9%**; AA's current page marks its updated Intelligence Index as unavailable/N/A for this deprecated model. I therefore treat that composite as a stale historical number, not a current comparable result.

Earlier model-family results — Google-authored technical report (March 2024), **not identified as the final `-002` snapshot**:

- **GPQA: 46.2%** (0-shot); **MMLU: 85.9%** (5-shot); **HumanEval: 84.1%** (0-shot); **Natural2Code: 82.6%** (0-shot); **MMMU: 62.2%** (0-shot).
- These results are retained only as historical context. In particular, the paper's multimodal evaluations used a February checkpoint. None is substituted for the exact September snapshot's AA result.
- The February 2024 Google announcement reported **99% needle recall in a 1M-token input** for its then-current Gemini 1.5 Pro. It is not a measured `-002` result and is not used to claim retrieval accuracy for the September snapshot.

Agent / tool use:

- No exact-`-002` Terminal-Bench 2.1, Tau3-Banking, GDPval-AA, OSWorld, or Claw-Eval score found in the checked sources. The API's function-calling feature is a capability, not a benchmark result.

Reasoning / knowledge:

- Exact September snapshot: **AA-GPQA Diamond 58.9%**; **AA-HLE 4.6%**.
- The earlier technical report's GPQA and MMLU numbers are for an earlier checkpoint and are deliberately not blended into the September scores.

Coding:

- Exact September snapshot: **AA Coding Index 23.6%**.
- No exact-snapshot SWE-bench Verified, LiveCodeBench, SciCode, SWE-Atlas, or Terminal-Bench score found. The technical report's HumanEval and Natural2Code values are earlier-checkpoint evidence, not scores for `-002`.

Long context:

- Exact September model context is listed as **2M tokens**. No exact-`-002` needle-in-a-haystack or long-context retrieval score at 512K+ was verified. The earlier February model's 99%/1M needle result is not transferred.

Multimodal:

- Exact September model: **AA-MMMU-Pro 55.0%**; modalities listed as text, image, speech/audio, and video input with text output.
- The paper's earlier-checkpoint MMMU result is **62.2%**; it is not treated as the final snapshot's visual score.

### Normalized scores (1–100)

- **Tool use: 55/100.** Function calling was available, but no exact-snapshot agent/tool benchmark was found, leaving performance unquantified. This is a cautious provisional score rather than an inference from API feature support.
- **Reasoning: 58/100.** Exact-snapshot GPQA Diamond is 58.9% and HLE is 4.6%; these are below current frontier reference levels. Source: Artificial Analysis via BenchLM.
- **Context window: 95/100.** The 2M-token limit earns the top context tier's base score; without exact-snapshot ≥512K retrieval evidence, it does not receive the 100-point retrieval bonus. Source: Artificial Analysis' September 2024 model entry.
- **Multimodal: 91/100.** The exact September model accepts image, audio/speech, and video input, placing it in the methodology's audio-input band; AA-MMMU-Pro is 55.0%, and outputs remain text-only. Source: Artificial Analysis via BenchLM.
- **Coding: 45/100.** The exact-snapshot AA Coding Index is 23.6%, and no SWE-bench or terminal-coding score was verified. The earlier technical report's stronger HumanEval result is not applied to `-002`. Source: Artificial Analysis via BenchLM.
- **Cost efficiency: 75/100.** Historical listed prices were $1.25/$5.00 per MTok up to 128K and $2.50/$10.00 above 128K; long-context use was therefore materially more expensive. The API is retired, so this is a historical price score, not a current purchasing recommendation. Source: Google Cloud Vertex AI pricing.
- **Overall Score: 69/100.** Arithmetic mean of the five quality dimensions, excluding cost: `(55 + 58 + 95 + 91 + 45) / 5 = 68.8`, rounded to **69**. Its defining strengths are the 2M context and broad input modalities; current availability is ended, and the exact-snapshot evidence found here is weak on coding and unquantified on agent use.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-30
- Method: Checked Google's Gemini API release notes and model catalog, the Vertex AI model lifecycle and pricing tables, Google's original Gemini 1.5 announcement and technical report, Artificial Analysis' version-specific September 2024 page, BenchLM's source-linked score table, and OpenRouter's current model API search. Kept the final `gemini-1.5-pro-002` snapshot separate from February research-preview results and explicitly did not transfer old needle, coding, or multimodal scores to the final snapshot.
- Sources: [Google Gemini API release notes](https://ai.google.dev/gemini-api/docs/changelog); [Google Gemini API model catalog](https://ai.google.dev/gemini-api/docs/models); [Vertex AI model versions and lifecycle](https://cloud.google.com/vertex-ai/generative-ai/docs/learn/model-versions); [Vertex AI pricing](https://cloud.google.com/vertex-ai/generative-ai/pricing); [Google's Gemini 1.5 announcement](https://blog.google/innovation-and-ai/products/google-gemini-next-generation-model-february-2024/); [Google-authored Gemini 1.5 technical report](https://arxiv.org/abs/2403.05530); [Artificial Analysis Gemini 1.5 Pro (Sep '24)](https://artificialanalysis.ai/models/gemini-1-5-pro); [BenchLM source-linked scores](https://benchlm.ai/models/gemini-1-5-pro); [OpenRouter model API search](https://openrouter.ai/api/v1/models?q=gemini-1.5-pro).
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
