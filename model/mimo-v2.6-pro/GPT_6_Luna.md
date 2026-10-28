# MiMo-V2.6-Pro — findings by GPT-6 Luna

- Source: Xiaomi MiMo/MiMo-V2.6-Pro
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Pro
- **Short description:** Xiaomi's open-weight, native-omnimodal 1.02T-parameter reasoning and agent model, post-trained with large-scale reinforcement learning for long-horizon coding, professional workflows, visual tasks, and cybersecurity. “Pro” is the flagship size/tier in the V2.6 family; it is distinct from the smaller V2.6-Flash and the API's faster-priced `-ultraspeed` serving route.
- **Provider / access:** Xiaomi MiMo Open Platform (`https://platform.xiaomimimo.com`); API supports OpenAI-compatible Chat Completions/Responses and Anthropic-compatible requests. The real-time API ID is `mimo-v2.6-pro`; it is also available as open weights on Hugging Face. Paid, pay-as-you-go API; the API guide lists 100 RPM / 10M TPM.
- **Release / knowledge:** Xiaomi announced the V2.6 series on 2026-09-21; the official release page shows an update date of 2026-09-22. No knowledge-cutoff date found.
- **IDs:** API `mimo-v2.6-pro` (lowercase, official model-list doc); weights `XiaomiMiMo/MiMo-V2.6-Pro-RL`.
- **Context window:** 1,000,000 tokens; maximum API output 128,000 tokens. The 1M context and 128K output are both stated in Xiaomi's current API model list.
- **Modalities:** Text, image, video, and audio input; text output. Supports deep thinking, streaming, function calls, structured output, and web search. Audio generation/video creation shown in product demos uses separate tools/services and is not counted as native output here.
- **Pricing (as of 2026-10-28):** Xiaomi overseas real-time API: $0.435/M cache-miss input, $0.0036/M cache-hit input, and $0.87/M output; cache writes are temporarily free. Batch API is $0.2175/$0.435 per million miss-input/output (cache-hit $0.0018), but is not the evaluated real-time tier. Internet search tool calls are separately billed.
- **Architecture:** Open weights under the MIT license; sparse MoE with 1.02T total and 42B active parameters, 384 routed experts / 8 active per token, hybrid sliding-window/global attention, and native vision/audio encoders.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **89.9% avg@1** (Xiaomi technical report; max reasoning setting). This is a vendor-reported result; no independent same-harness rerun was verified.
- Terminal-Bench 4.0: **34.9%** in Xiaomi's technical report; Artificial Analysis' independent v4.0 evaluation lists **34.8%** (AA page via BenchLM), a close cross-check on a different version of the benchmark.
- GDPval-AA 2.1: **1,673 Elo** (Xiaomi technical report; this is an Artificial Analysis benchmark result, not a Xiaomi-designed metric). BenchmarkList tracks it at rank 22/358, 94th percentile.
- AutomationBench v1.0.6: **53.1%** (Xiaomi technical report); the separate Artificial Analysis AutomationBench-AA implementation reports **58.6%** (AA model page/BenchLM). These versions and implementations are not interchangeable.
- Toolathlon-Verified: **76.9%**; Agents' Last Exam: **31.6%**; OSWorld-Verified: **82.0%**; JobBench: **62.0%** (Xiaomi technical report; table reports the listed final evaluation values).
- Claw-Eval / ClawProBench: **no verified public score found**.

Reasoning / knowledge:

- GPQA Diamond: **no verified exact-model score found** in the reviewed official report, API/model card, or benchmark trackers.
- Humanity's Last Exam: **49.4%** (Artificial Analysis evaluation; indexed by BenchmarkList/BenchLM).
- AA-LCR: **86.3%**; CritPt: **26.6%**; AA-Omniscience v1.1 Accuracy: **34.8%**; hallucination rate: **40.6%**; Omniscience Index: **8.4** (Artificial Analysis current model page, as indexed by BenchLM/BenchmarkList).
- Artificial Analysis Intelligence Index: Xiaomi's September launch announcement describes a score of **46**; the current Artificial Analysis model page reports **30** on Intelligence Index v5.0. These are different index snapshots/compositions, not a like-for-like rerun; use the current v5 figure for present comparison.

Coding:

- DeepSWE v1.1: **71.9%** in the technical report's final comparison table; the RL training curve separately reports **average@3 rising from 58.4% to 72.6%**. These are different summary views; use 71.9% as the final-table value and do not merge the curve maximum into it.
- ProgramBench: **26.5%**; Terminal-Bench 2.1: **89.9%**; MiMo Code Bench (internal): **63.2%** (Xiaomi technical report; the internal benchmark is vendor-run).
- SciCode: **60.9%** (Artificial Analysis evaluation; indexed by BenchLM).
- SWE-bench Verified / SWE-Pro: **no verified exact-Pro public score found** in the reviewed sources.
- LiveCodeBench: **no verified public score found**. Vibe Code Bench: **no verified public score found**.

Long context:

- API capacity: **1M tokens**, but no verified 512K–1M retrieval-accuracy score found. AA-LCR at 86.3% is a long-context result, but it does not establish near-perfect retrieval at 512K or beyond.

Multimodal:

- Xiaomi's internal MiMo Visual Coding benchmark: **72.3%** (technical report). Official documentation verifies image, video, and audio input; no standalone public video/audio-understanding score for this exact Pro SKU was verified in the reviewed material.

### Normalized scores (1–100)

- **Tool use: 89/100.** Terminal-Bench 2.1 at 89.9%, GDPval-AA at 1,673 Elo, AutomationBench 53.1/58.6 across distinct setups, Toolathlon 76.9%, and OSWorld 82.0% are strong; Terminal-Bench 4.0 is only 34.8–34.9%, Agents' Last Exam is 31.6%, and no Claw-Eval score was verified (Xiaomi; Artificial Analysis).
- **Reasoning: 82/100.** HLE at 49.4% and AA-LCR at 86.3% are strong, but the current AA Intelligence Index v5 is 30, CritPt is 26.6%, Omniscience accuracy is 34.8% with a 40.6% hallucination rate, and GPQA Diamond is unreported (Artificial Analysis; Xiaomi's older 46-point launch claim is a different index snapshot).
- **Context window: 95/100.** The official 1M-token input window earns the ≥1M tier, but no verified retrieval result near the rubric's ≥98% at 512K+ threshold was found (Xiaomi API model list; AA-LCR).
- **Multimodal: 95/100.** Officially supports image, video, and audio input, which reaches the rubric's audio-input tier; text is the only verified model output modality, and the internal visual-coding score is 72.3% (Xiaomi model card/technical report).
- **Coding: 87/100.** Terminal-Bench 2.1 at 89.9% and SciCode at 60.9% are strong, but DeepSWE v1.1 at 71.9% is below the rubric's 74% frontier reference and ProgramBench at 26.5% is a substantial weakness; the separate Terminal-Bench 4.0 score is 34.8–34.9% (Xiaomi; Artificial Analysis).
- **Cost efficiency: 94/100.** The real-time $0.435/$0.87 miss-input/output rates are below the methodology's $0.60/$2.20 example, with extremely cheap cached input at $0.0036/M and AA's measured Intelligence Index evaluation cost of about $0.26/task (Xiaomi; Artificial Analysis).
- **Overall Score: 90/100.** (89 + 82 + 95 + 95 + 87) / 5 = 89.6, rounded half-up; a compelling low-cost multimodal agent for tool workflows, but validate coding/program-reconstruction and factuality reliability on the target workload.

---

## Evidence comparison and source notes

- Xiaomi reports Terminal-Bench 2.1 at 89.9% avg@1 and Terminal-Bench 4.0 at 34.9%; Artificial Analysis independently reports 34.8% on Terminal-Bench 4.0. This is a close cross-check on v4.0, not a reproduction of the 2.1 result.
- Xiaomi's Technical Report reports AutomationBench v1.0.6 at 53.1%, whereas Artificial Analysis reports 58.6% on AutomationBench-AA. The test implementation/version differs, so the figures are listed separately rather than averaged.
- The MiMo release announcement's Intelligence Index claim is 46. Artificial Analysis' live model page now scores 30 on v5.0, whose published composition includes nine evaluations such as AA-Briefcase v1.1, HLE-Diamond, CritPt v2, Terminal-Bench 4.0 and Terminal-Bench-Science. The older claim and current v5 result must not be read as a 16-point regression on a fixed test.
- DeepSWE v1.1 appears as 71.9% in the technical report's final comparison table; the training analysis separately reports average@3 increasing to 72.6%. Because the report does not establish these as the same summary metric, the normalized coding score uses the final-table 71.9% and notes the different training-curve statistic.
- Public benchmark trackers identify some MiMo report values as first-party/vendor scores, and other rows as AA's own evaluation. The report labels the distinction explicitly and does not treat the trackers' composite scores as this project's Overall Score.
- Xiaomi's release date appears as Sep 21 on some independent summaries and the official news page is updated Sep 22. Pricing was checked against Xiaomi's current Oct 21 API page; the real-time API rate, cache-hit rate, cache-write promotion, and lower-priced batch tier are separated.

## Sources

- Xiaomi MiMo, [MiMo-V2.6 launch announcement](https://mimo.mi.com/docs/en-US/news/latest/v2-6) — release, product description, open-weights claim, modalities, and benchmark overview.
- Xiaomi MiMo, [MiMo-V2.6-Pro-RL model card](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL) — model ID/weights, license, 1M context, modalities, architecture, supported serving frameworks, and benchmark table.
- Xiaomi MiMo, [MiMo-V2.6 technical report (PDF)](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL/blob/main/MiMo_V2_6_technical_report.pdf) — benchmark definitions/settings, full results, DeepSWE summary distinctions, and training methodology.
- Xiaomi MiMo, [Current API model list](https://mimo.mi.com/docs/en-US/quick-start/summary/model) — exact API ID, 1M context, 128K maximum output, functions, structured outputs, web search, and rate limit.
- Xiaomi MiMo, [API pay-as-you-go pricing](https://mimo.mi.com/docs/en-US/price/pay-as-you-go) — current real-time/batch price tables, cache/write billing, and separately priced search tools (updated 2026-10-21).
- Artificial Analysis, [MiMo-V2.6-Pro model page](https://artificialanalysis.ai/models/mimo-v2-6-pro) — current Index v5.0 score, multimodality, parameters, MIT license, price, speed, and independent benchmark results.
- Artificial Analysis, [Terminal-Bench 4.0 evaluation](https://artificialanalysis.ai/evaluations/terminalbench-4-0) — independent methodology and benchmark context.
- BenchLM, [MiMo-V2.6-Pro benchmark record](https://benchlm.ai/models/mimo-v2-6-pro) — secondary score table and links to Xiaomi/AA primary sources; composite score not used.
- BenchmarkList, [MiMo-V2.6-Pro results](https://benchmarklist.com/models/xiaomi-mimo-v2.6-pro/) — independent score index with source attribution, ranks/percentiles and benchmark-version distinctions.
- AIReiter, [MiMo-V2.6-Pro review](https://aireiter.com/blog/mimo-v2-6-pro-review-tested) — third-party deployment and benchmark-context review; anecdotes are not treated as controlled measurements.
- Bing searches performed 2026-10-28: [official model card/benchmarks/API](https://www.bing.com/search?q=%22MiMo-V2.6-Pro%22+Xiaomi+official+model+card+benchmarks+API), [Artificial Analysis results](https://www.bing.com/search?q=%22MiMo-V2.6-Pro%22+Artificial+Analysis+benchmark), [independent benchmark/review](https://www.bing.com/search?q=%22MiMo-V2.6-Pro%22+independent+benchmark+evaluation+review).

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna-fast)** — 2026-10-28
- Method: Three successful Bing searches followed by direct review of Xiaomi's official announcement, API/model docs, Hugging Face model card and 44-page technical report, plus Artificial Analysis, BenchLM, BenchmarkList and a third-party review. Vendor, independent-evaluation, and secondary-index results are distinguished; benchmark-version disagreements are preserved. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
