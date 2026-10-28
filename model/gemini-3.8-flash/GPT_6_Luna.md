# Gemini 3.8 Flash — findings by GPT-6 Luna

- Source: Google DeepMind/Gemini 3.8 Flash
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google's proprietary multimodal Flash model tuned for long-horizon coding, agent workflows and enterprise tasks. Customizable reasoning effort trades off quality, cost and latency.
- **Provider / access:** Google Gemini Developer API (`models.generateContent`) and Google AI Studio; model code `gemini-3.8-flash`.
- **Release / knowledge:** Released 2026-09-02. Google's model card lists a March 2026 knowledge cutoff, with some domains potentially less current.
- **IDs:** Gemini API `gemini-3.8-flash`. Google lists Standard Free and paid tiers; no OpenCode Zen Free ID verified in this review.
- **Context window:** 1,048,576 input tokens; 65,536 output tokens.
- **Modalities:** Text, image, video, audio and PDF input; text output. Function calling, code execution, file search, search grounding and preview computer-use are supported; audio generation and Live API are not supported.
- **Pricing (as of 2026-10-28):** Standard Free tier available (Google says Free-tier content may be used to improve products). Paid Standard is $0.75/M input and $3.75/M output through 2026-12-31, then $1.50/$7.50 from 2027-01-01. Paid-tier content is not used to improve Google's products.
- **Architecture:** Proprietary, based on Gemini 3.7 Flash; parameters and weights are not public.

### Raw benchmarks found

Agent / tool use:

- Finance Agent v2: **61.4%**; GDPval-AA v2: **1545 Elo**; OSWorld 2.0: **59.0%** (Google model card).
- Terminal-Bench 2.1: **89.4%** (Google model card); Vals AI reports **81.3%**, and Artificial Analysis lists **87.6%** for its corresponding Terminal-Bench 2.1 evaluation.
- Terminal-Bench 4.0: **19.1%** (Google model card; a distinct benchmark version/harness from 2.1).
- Claw-Eval: **no verified public score found**.

Reasoning / knowledge:

- HLE-Verified: **54.9%** (Google model card).
- Artificial Analysis current model page reports Intelligence Index v5.0 **31**; its September 2 release article reported **59** under the then-current Index. BenchLM's current model page lists **40.9** in its AA Index field.
- GPQA Diamond: **95.3%** (Artificial Analysis leaderboard as listed by BenchLM; not a score in the Google model-card table reviewed).

Coding:

- DeepSWE v1.1: **73.7%**; Terminal-Bench 2.1: **89.4%**; Terminal-Bench 4.0: **19.1%** (Google model card).
- SciCode: **56.6%**; LiveCodeBench (Vals): **89.5%**; SWE-bench (Vals): **80.0%** (BenchLM links the independent leaderboards).

Multimodal and long context:

- CharXiv chart reasoning: **86.2%**; LVBench: **87.8% agentic / 87.1% static** (Google model card).
- Advertised context is 1M; Artificial Analysis' independent long-context reasoning score is **81.3%** (AA-LCR, as listed by BenchLM). No exact MRCR-at-1M score was found.

### Normalized scores (1–100)

- **Tool use: 85/100.** Terminal-Bench 2.1 at 89.4%, Finance Agent v2 at 61.4%, GDPval-AA and OSWorld results indicate capable agents; the current Intelligence Index and Terminal-Bench 4.0 are cautionary breadth checks.
- **Reasoning: 84/100.** HLE-Verified 54.9% and GPQA Diamond 95.3% are strong task scores, but AA's current v5.0 Index of 31 is much lower than its older 59 result and BenchLM's 40.9 field.
- **Context window: 95/100.** The verified 1M window maps to the project's 1M tier; AA-LCR 81.3% supports useful long-context ability but not the near-perfect retrieval needed for a 100.
- **Multimodal: 95/100.** Official specifications cover image, audio, video and PDF input, supported by chart and long-video evaluations; output is text-only.
- **Coding: 85/100.** Terminal-Bench 2.1 89.4%, DeepSWE 73.7% and independent SWE-bench 80.0% are strong, but the distinct Terminal-Bench 4.0 score of 19.1% shows substantial harness/task variation.
- **Cost efficiency: 100/100.** A standard Free tier exists; it is scored at $0, with the explicit caveat that Google may use Free-tier content to improve products. Paid pricing is also low at $0.75/$3.75 during the current promotional period.
- **Overall Score: 89/100.** (85 + 84 + 95 + 95 + 85) / 5 = 88.8, rounded half-up; strong multimodal/coding value for cost-sensitive agent workloads, with benchmark-version sensitivity and Free-tier data terms considered.

---

## Evidence comparison and source notes

- Terminal-Bench 2.1 appears as 89.4% in Google's model card, 81.3% on Vals AI and 87.6% on Artificial Analysis. These sources use different evaluation runs/leaderboard harnesses; retain them separately. Terminal-Bench 4.0 at 19.1% is a new benchmark version, not a contradictory 2.1 result.
- The Artificial Analysis Index changed materially: its September 2 article reported 59, while the current model page reports 31 on Index v5.0 (which now incorporates nine evaluations including GDP.pdf, CritPt and Terminal-Bench-Science). BenchLM lists 40.9 in its Index field. The old and current composite values are not interchangeable, so they are not averaged; the lower current v5.0 score is used as a conservative breadth cap.
- Google's official model card supports 1M context but does not report an MRCR-at-1M retrieval result. The independent AA-LCR result is useful but measures a different task, so it is not presented as an exact needle-retrieval score.

## Sources

- Google DeepMind, [Gemini 3.8 Flash model card](https://deepmind.google/models/model-cards/gemini-3-8-flash/) — exact-model modalities, context, cutoff and primary evaluations.
- Google, [Gemini 3.8 Flash API reference](https://ai.google.dev/gemini-api/docs/models/gemini-3.8-flash) — stable model code, token limits and capabilities.
- Google, [Gemini Developer API pricing](https://ai.google.dev/gemini-api/docs/pricing) — Free and paid rates, date changes and data-use caveat.
- Artificial Analysis, [Gemini 3.8 Flash release analysis](https://artificialanalysis.ai/articles/gemini-3-8-flash) — September Index and agentic/cost comparison.
- Artificial Analysis, [current Gemini 3.8 Flash (High) model page](https://artificialanalysis.ai/models/gemini-3-8-flash) — Index v5.0, current pricing, modality and context cross-check.
- BenchLM, [Gemini 3.8 Flash benchmark scores](https://benchlm.ai/models/gemini-3-8-flash) — secondary source listing official and linked independent benchmark results.
- Bing searches performed 2026-10-28: [official model card / API / release](https://www.bing.com/search?q=%22Gemini+3.8+Flash%22+official+model+card+benchmarks+release+API), [Artificial Analysis benchmark](https://www.bing.com/search?q=%22Gemini+3.8+Flash%22+Artificial+Analysis+benchmark), [independent evaluation / review](https://www.bing.com/search?q=%22Gemini+3.8+Flash%22+independent+benchmark+evaluation+review).

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna-fast)** — 2026-10-28
- Method: Three successful Bing searches followed by direct review of Google model/API documentation, Artificial Analysis and BenchLM. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
