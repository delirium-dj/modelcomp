# Gemini 3.7 Flash — findings by Solar_Mini_4

- Source: Google DeepMind (`gemini-3.7-flash`), official model card `https://deepmind.google/models/model-cards/gemini-3-7-flash/`; API docs `https://ai.google.dev/gemini-api/docs/models/gemini-3.7-flash`; benchmarks BenchGap 2026-11-07 (`https://benchgap.net/model/gemini-3-7-flash`) + Artificial Analysis (`https://artificialanalysis.ai/models/gemini-3-7-flash`).
- Date: 2026-11-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash (Google DeepMind)


- **Short description (earlier pass):** Google Gemini 3.7 Flash fast model for agentic coding, long context, and multimodal reasoning.
- **Provider / access (earlier pass):** Google DeepMind / Google Cloud Gemini API, Google AI Studio; OpenCode Zen `opencode/gemini-3.7-flash`.
- **Release / knowledge (earlier pass):** Released 2026-09-15; knowledge cutoff not disclosed in accessible docs.
- **IDs (earlier pass):** `google/gemini-3.7-flash` (Hugging Face registry slug); console/SDK model ID not verified.
- **Context window (earlier pass):** **1M** total, **256K** max output (official Google API docs).
- **Modalities (earlier pass):** text + image in/out; multimodal supported; text output only.
- **Pricing (earlier pass):** Official Google API at $0.40/$3.20 per 1M input/output (plus 50% discount through 2026-10-17).
- **Architecture (earlier pass):** Proprietary Google Gemini 3.7 Flash; not open weights.
### Raw benchmarks found

> Sources: BenchGap benchmark table as of 2026-11-07 (`https://benchgap.net/model/gemini-3-7-flash`) — measured vs estimated noted; Artificial Analysis Gemini 3.7 Flash (High) model page (August 13, 2026 release). Because 3.7 Flash is the previous-generation SKU, inferences are consistent with the Gemini 3 series; 3.8 Flash supersedes it.

> **Tool use / agentic:**
> - Terminal-Bench 2.1: **85.8%** measured (BenchGap).
> - τ²-bench results: **88.6%** estimated (BenchGap).
> - SWE-bench Verified: **86.2%** estimated (BenchGap).
> - SWE-bench Pro: **74.1%** estimated (BenchGap).
> - AA Coding Index: **76.1%** measured (BenchGap).
> - DeepSWE: **65.3%** measured (BenchGap).
> - MCP Atlas: **78.7%** estimated (BenchGap).
> - CursorBench 3.1: **61.8%** estimated; CursorBench 3.2: **60.7%** estimated.

> **Reasoning / knowledge:**
> - AA-GPQA Diamond: **94.5%** measured (BenchGap).
> - MMLU: **95.8%** estimated (BenchGap); MMLU-Redux: **97.9%** estimated.


### Normalized scores (1–100)

- **Tool use: 90/100.** Terminal-Bench 2.1 85.8% measured and τ²-bench 88.6% estimated are strong agentic numbers; SWE-bench Verified 86.2% estimated and AA Coding Index 76.1% measured (combined with DeepSWE 65.3% measured) show solid software-engineering tool use. Cap: FrontierSWE v2 20.3% and MazeBench 1.0% estimates (deep-research and maze tasks).
- **Reasoning: 88/100.** Elite knowledge ceiling — GPQA Diamond 94.5% measured, MMLU-Redux 97.9%, SuperGPQA ~100% and C-Eval 97.3% estimated; HLE 57.8% estimated (AA-HLE 47.9% measured). Cap: CritPt 14.3% measured and STEMBench 2.4% estimated show hard multi-step reasoning and STEM tasks still trip the model.
- **Context window: 96/100.** 1M input / 65,536 output (the largest of the GPT-5.6 trio and the top of the Gemini 3 line); AA-LCR 81.7% measured plus MMLongBench-Doc 61.5% and LongBench v2 66.9% confirm real long-context retrieval.
- **Multimodal: 92/100.** Text, image, video, audio and PDF input with text output — the broadest input set of any model in this report; Video-MME 90.2%/90.9% and VideoMMMU 86.9% are family-leading numbers.
- **Coding: 90/100.** Terminal-Bench 2.1 85.8% measured, LiveCodeBench v6 90.7% estimated, SWE-bench Verified 86.2% estimated and DeepSWE 65.3% measured place it at the top of the field; FrontierCode 1.1 Main 43.6% measured is a hard frontier outlier.
- **Cost efficiency: 94/100.** $0.75/$3.75 per 1M is the most competitive price in this report (well below the median of $2.00/$10.00), with 90% cache-read discount.
- **Overall Score: 91/100.** (90 + 88 + 96 + 92 + 90) / 5 = 91.2 → 91 (half-up). Best-fit: the best price-to-capability balance of the Gemini 3.7 Flash family — strong video, long context and front-line knowledge, at a steep discount, though now replaced by the faster Gemini 3.8 Flash.

---

## Signature

- Provided by: **Solar Mini 4 (opencode/solar-mini-4)** — 2026-11-08
- Method: public internet research (official Google DeepMind Gemini 3.7 Flash model card; Gemini API docs; Artificial Analysis Gemini 3.7 Flash model page Aug 13, 2026; BenchGap benchmark table 2026-11-07); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Google DeepMind — Gemini 3.7 Flash Model Card](https://deepmind.google/models/model-cards/gemini-3-7-flash/)
  - [Gemini API — Gemini 3.7 Flash documentation](https://ai.google.dev/gemini-api/docs/models/gemini-3.7-flash)
  - [Artificial Analysis — Gemini 3.7 Flash (High) model page](https://artificialanalysis.ai/models/gemini-3-7-flash)
  - [BenchGap — Gemini 3.7 Flash benchmark scores](https://benchgap.net/model/gemini-3-7-flash)
  - [Artificial Analysis — Gemini 3.8 Flash (replacement)](https://artificialanalysis.ai/models/gemini-3-8-flash)

> - MMLU-Pro: **85.6%** estimated; AA MMLU-Pro: **90.4%** estimated.
> - SuperGPQA: **100%** estimated (BenchGap); C-Eval: **97.3%** estimated.
> - AA-HLE: **47.9%** measured; HLE: **57.8%** estimated (BenchGap).
> - CritPt: **14.3%** measured (BenchGap) — weakest reasoning sample.
> - STEMBench: **2.4%** estimated (BenchGap) — very weak measured result.
> - GPAQ: **93.7%** estimated (BenchGap).

> **Coding:**
> - LiveCodeBench v6: **90.7%** estimated (BenchGap).
> - SciCode: **57.2%** measured (BenchGap).
> - FrontierCode 1.1 Main: **43.6%** measured (BenchGap).
> - FrontierSWE v2: **20.3%** estimated (BenchGap).
> - MazeBench: **1.0%** estimated (BenchGap).
> - Terminal-Bench 3.0: **14.9%** measured; Terminal-Bench Hard: **59.7%** estimated.
> - ProgramBench: not reported in the 2026-11-07 snapshot.

> **Long context / multimodal:**
> - AA-LCR: **81.7%** measured (BenchGap).
> - MMLongBench-Doc: **61.5%** estimated (BenchGap).
> - Video-MME (with subtitle): **90.2%** estimated; Video-MME (w/o subtitle): **90.9%** estimated — video understanding is a family strength.
> - VideoMMMU: **86.9%** estimated (BenchGap); MLVU (M-Avg): **88.5%** estimated.
> - MMMLU: **90.2%** estimated; MMMU: **89.7%** estimated; MMMU-Pro: **85.0%** estimated.
> - MLVU + MMVU: **80.1%** estimated; PerceptionBench: **58.3%** estimated.
> - Range of inputs: text, image, video, audio and PDF → text output (official API docs).

- **Short description:** Google's fast, natively multimodal reasoning model in the Gemini 3 series, released 2026-08-13. Strong on video understanding, long context and agentic tool use at a competitive price ($0.75/$3.75 per 1M). Now **deprecated and replaced by Gemini 3.8 Flash** — no longer selectable in AI Studio, API requests auto-routed to 3.8 Flash.
- **Provider / access:** Google — Gemini API / Google AI Studio (`gemini-3.7-flash`), Vertex AI. Status: **Deprecated** (replaced by `gemini-3.8-flash`; API requests automatically routed to 3.8 Flash).
- **Release / knowledge:** Released 2026-08-13 (Artificial Analysis); official docs latest update August 2026. Knowledge cutoff: not disclosed in accessible official docs.
- **IDs:** `gemini-3.7-flash` (Gemini API / AI Studio); deprecated — auto-routed to `gemini-3.8-flash`.
- **Context window:** 1,048,576 input tokens (1M), 65,536 max output (official API docs).
- **Modalities:** Text, image, video, audio and PDF input; text output. Extended thinking at low/medium/high effort (minimal not supported).
- **Pricing (as of 2026-11-08):** $0.75/MTok input (competitive; median $2.00) and $3.75/MTok output (competitive; median $10.00); 90% cache read discount (Artificial Analysis model page). Cache write/storage billed separately by provider.
- **Architecture:** Proprietary, closed weights (Google DeepMind). Parameter count not disclosed.

---

## Archived research pass — `Solar_Mini_4.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `Solar_Mini_4.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative — the archived model card was folded
> into the active model card above; the content below is preserved research history, not judged data.

## Gemini 3.7 Flash — findings by Solar_Mini_4

> Template → replaced with model-specific research; no placeholders remain.
> Source of truth methodology: `../../model-comparison.md`.


> Archived model card omitted — own-twin consolidation 2026-11-12.
> Field(s) absent from the active card (Short description, Provider / access, Release / knowledge, IDs,
> Context window, Modalities, Pricing, Architecture) were folded in from the earlier pass, labelled as
> earlier-pass values.

## Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

- Artificial Analysis Intelligence Index: **48 / 100** (AA rank #26/217, 2026-09-22)
- Speed: **119.1 tokens/s** (OpenAI API)
- Speed rank: **#48/186** (above average)
- Output tokens (AA Intelligence Index): **77M** (concise vs median 85M)
- Cost per task: **$1.04**
- Context window: **1M**
- Parameters: Not disclosed (proprietary)
- Multimodal: Text + image in/out; text out

> Archived normalized scores omitted — superseded by the active report above (see provenance note for the archived Overall).
---
