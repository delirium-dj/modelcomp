# Ling 3.0 Flash VL — findings by GPT-6 Luna

- Source: InclusionAI/Ling 3.0 Flash VL (`inclusionAI/Ling-3.0-flash-VL`)
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash VL
- **Short description:** InclusionAI's open-weight vision-language extension of Ling 3.0 Flash. It adds native image/video perception to the related model's language and reasoning capabilities; this report uses the exact VL checkpoint and does not transfer Ling 3.0 Flash or Ling 3.1 Flash scores.
- **Provider / access:** Official weights `inclusionAI/Ling-3.0-flash-VL` on Hugging Face, MIT licensed. OpenRouter serves the exact route `inclusionai/ling-3.0-flash-vl` through one provider and uses OpenAI-compatible APIs. This hosted route is capped below the full native context window.
- **Release / knowledge:** Official weights appeared on Hugging Face on **2026-09-04**; OpenRouter lists the hosted route release as **2026-09-10**, matching Artificial Analysis' release date. Knowledge cutoff not published.
- **IDs:** Weights/API model name `inclusionAI/Ling-3.0-flash-VL`; OpenRouter ID `inclusionai/ling-3.0-flash-vl` (canonical route slug `inclusionai/ling-3.0-flash-vl-20260910`).
- **Context window:** Native weights support **262,144 tokens**. The OpenRouter route lists **131,072 total context** and up to **32,768 completion tokens**; provider limits therefore do not expose the full native window. Artificial Analysis lists 262K for the model itself.
- **Modalities:** Text, image, and video input; text output. No audio input or non-text output verified. Thinking is enabled by default in the official chat template; tool calling and structured/JSON outputs are supported.
- **Pricing (as of 2026-10-30):** OpenRouter lists **$0.06/MTok input, $0.18/MTok output, and $0.012/MTok cached input**. The MIT-licensed weights can also be self-hosted, with hardware and operating costs separate.
- **Architecture:** Sparse MoE with **124B total / 5.5B active parameters**. The official model card describes a 42-layer hybrid KDA/Gated-MLA backbone (5:1 ratio), a ViT vision encoder and two-layer projector, plus VideoRoPE for spatial and temporal video positions. MIT license.
- **Evaluation caveat:** The official card publishes several visual/agent benchmarks in an image rather than a text table; the values below are transcribed from the exact Ling 3.0 Flash VL column. OpenRouter separately attributes its benchmark summary to Artificial Analysis. The official card's **42** is specifically Artificial Analysis Intelligence Index **v4.1.1**; Artificial Analysis' current page marks its updated Index as unavailable/N/A, so 42 is historical and not a current v5 score. Benchmark harness and settings vary; vendor-reported rows, third-party AA results, and the OpenRouter hosted context limit are distinguished below.

### Raw benchmarks found

Agent / tool use:

- **Artificial Analysis Agentic Index: 28.7**; **τ-Bench Banking: 34.4%**; **Terminal-Bench 2.1: 64.4%**; **Terminal-Bench 4.0: 0.0%**; **CritPt: 2.0%** (OpenRouter's exact-model benchmark summary, attributed there to Artificial Analysis).
- The official model-card chart reports **ClawEval-MM: 59.9** and **WebVoyager: 90.83** for Ling 3.0 Flash VL. ClawEval-MM is the chart's multimodal-agent variant, not generic Claw-Eval.
- OpenRouter's summary shows **GDPval-AA: 33.5%** without documenting the scale in that row; it is retained as displayed and not interpreted as Elo.

Reasoning / knowledge:

- **GPQA Diamond: 86.2%**; **HLE: 22.0%**; **AA-LCR: 78.3%** (OpenRouter benchmark summary, sourced to Artificial Analysis).
- **Artificial Analysis Intelligence Index v4.1.1: 42** (official model-card chart). This is a historical composite; the current Artificial Analysis page shows the updated Index as N/A.
- The vendor chart separately reports **Humanity's Last Exam-MM: 19.88**; this multimodal variant is not interchangeable with AA's HLE 22.0%.

Coding:

- **Artificial Analysis Coding Index: 57.0** and **SciCode: 44.2%** (OpenRouter exact-model benchmark summary).
- Terminal-Bench 2.1 is **64.4%** and Terminal-Bench 4.0 is **0.0%** in the same AA-attributed summary. No exact-model SWE-bench Verified/Pro or LiveCodeBench result found in the checked sources.

Long context:

- Native context limit **262,144 tokens** (official model card; also 262K on Artificial Analysis). OpenRouter's hosted route is limited to **131,072 total / 32,768 completion tokens**.
- **AA-LCR: 78.3%** (OpenRouter's AA-attributed benchmark summary); no separate exact-model MRCR/RULER result verified.

Multimodal:

- Official model-card chart, exact Ling 3.0 Flash VL column: **CountBench 97.33**, **WorldVQA 45.67**, **MMMU-Pro 79.00**, **MathVision 84.87**, **OmniDocBench 1.5 91.35**, **CharXiv_RQ 81.30**, **MMSearch 79.00**, **ClawEval-MM 59.9**, **WebVoyager 90.83**, and **Vision2Web 57.69**. The chart does not provide a common harness description for every row; the AntBench-Medical row is explicitly marked in-house and is not used here.
- Text, image, and video input; text output. No audio benchmark or audio modality claim verified.

### Normalized scores (1–100)

- **Tool use: 70/100.** Terminal-Bench 2.1 is 64.4% and the model-card chart has WebVoyager 90.83, while the AA Agentic Index is 28.7, τ-Bench Banking 34.4%, and Terminal-Bench 4.0 is 0.0%; mixed results cap the score. Sources: OpenRouter/Artificial Analysis; official model card.
- **Reasoning: 80/100.** GPQA Diamond 86.2%, HLE 22.0%, and AA-LCR 78.3% are strong; the current AA v5 Index is unavailable and its historical v4.1.1 score was 42. Sources: OpenRouter/Artificial Analysis; official model card.
- **Context window: 75/100.** Native 262K is in the 200K–500K tier and AA-LCR is 78.3%, but OpenRouter exposes only 131K context and no MRCR/RULER retrieval curve was verified. Sources: official model card; OpenRouter; Artificial Analysis.
- **Multimodal: 85/100.** Image and video input place it in the video-input band; exact-model MMMU-Pro is 79.00 and MathVision 84.87, with document and visual-agent results also reported. Text-only output and no audio support cap the score. Source: official model-card benchmark chart.
- **Coding: 70/100.** Coding Index 57.0, SciCode 44.2%, and Terminal-Bench 2.1 64.4% are useful, but Terminal-Bench 4.0 is 0.0% and no exact SWE-bench or LiveCodeBench score was verified. Source: OpenRouter/Artificial Analysis.
- **Cost efficiency: 98/100.** OpenRouter's exact route is $0.06/$0.18 per MTok with $0.012 cached input, and MIT weights are available for self-hosting; hardware and hosting are not free. Sources: OpenRouter; official model card.
- **Overall Score: 76/100.** Half-up mean of the five quality dimensions, excluding cost: `(70 + 80 + 75 + 85 + 70) / 5 = 76`. It pairs strong vision/video understanding and solid Terminal-Bench 2.1 with low hosted pricing, but its agentic composite and newer Terminal-Bench 4.0 result are weak points.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-30
- Method: Researched the official Hugging Face weights card and its embedded benchmark charts, OpenRouter's exact route/API record and AA-attributed scores, Artificial Analysis' current model page, and BenchLM's exact-model evidence notes. Kept the native weights' 262K context distinct from the hosted 131K route; treated the official 42 as historical AA Index v4.1.1; did not transfer any results from Ling 3.0 Flash or other siblings.
- Reference URLs:
  - [InclusionAI official Ling 3.0 Flash VL model card and benchmark charts](https://huggingface.co/inclusionAI/Ling-3.0-flash-VL)
  - [Official model-card README](https://huggingface.co/inclusionAI/Ling-3.0-flash-VL/resolve/main/README.md)
  - [OpenRouter exact model route and benchmark summary](https://openrouter.ai/inclusionai/ling-3.0-flash-vl)
  - [OpenRouter exact model API record](https://openrouter.ai/api/v1/models?q=ling-3.0-flash-vl)
  - [Artificial Analysis Ling 3.0 Flash VL](https://artificialanalysis.ai/models/ling-3-0-flash-vl)
  - [BenchLM Ling 3.0 Flash VL evidence profile](https://benchlm.ai/models/ling-3-0-flash-vl)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
