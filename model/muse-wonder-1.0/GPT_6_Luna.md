# Muse Wonder 1.0 — findings by GPT-6 Luna

- Source: Meta (`muse-wonder-1.0`)
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder 1.0 (Meta's product name is Muse Wonder)
- **Short description:** Meta's proprietary reasoning model for complex software engineering, long-running agent workflows, and computer use. This is the standard Muse Wonder API model; Muse Wonder Full is a separate, subscription-only variant and is not used as a substitute here.
- **Provider / access:** Meta Model API at `https://api.meta.ai/v1`, OpenAI-SDK-compatible; Meta documents Responses, Chat Completions, and Messages APIs. The model is in preview, available pay-as-you-go in Standard mode and through Muse Code plans. [Meta model docs](https://dev.meta.ai/docs/models) · [Meta model page](https://dev.meta.ai/models/muse-wonder)
- **Release / knowledge:** Released October 12, 2026. Meta has not published an exact-model knowledge cutoff. [Meta launch announcement](https://research.meta.ai/blog/muse-wonder/)
- **IDs:** Stable API model ID `muse-wonder-1.0`. The `max` reasoning setting is an effort level on this model, not Muse Wonder Full. [Meta model docs](https://dev.meta.ai/docs/models)
- **Context window:** 1,048,576-token context window. Meta's public model documentation does not specify a separate maximum output length. [Meta model docs](https://dev.meta.ai/docs/models)
- **Modalities:** Text, image, video, audio, and PDF input; text output. Supports adjustable reasoning effort (minimal through max), tool calling, structured output, and search grounding. [Meta model docs](https://dev.meta.ai/docs/models)
- **Pricing (as of 2026-10-28):** $4.00 input / $20.00 output per MTok; cached input $0.20/MTok. No Contributor mode for Muse Wonder on the API. Search grounding is an additional $2.50 per 1,000 queries. [Meta pricing and rate limits](https://dev.meta.ai/docs/pricing-rate-limits)
- **Architecture:** Proprietary; Meta has not disclosed weights or parameter count. [Meta launch announcement](https://research.meta.ai/blog/muse-wonder/) · [Artificial Analysis](https://artificialanalysis.ai/models/muse-wonder)

### Raw benchmarks found

> The exact API ID is `muse-wonder-1.0`; benchmark pages generally display its product name, Muse Wonder. Several reported evaluations use max reasoning effort. Muse Wonder Full results are kept out. Benchmark versions, settings, and dated composite-index revisions are labeled rather than merged.

Agent / tool use:

- AA-Briefcase: **1,659 Elo**, rank **8/155** (95th percentile); JobBench: **70.5%**, rank **4/57** (95th percentile); AutomationBench-AA: **68.1%**, rank **8/32**. BenchmarkList attributes these model-card results to Meta and marks JobBench/AutomationBench verified. [BenchmarkList](https://benchmarklist.com/models/meta-muse-wonder/)
- Terminal-Bench 4.0: **52.0%**, rank **10/39** (76th percentile; Meta-reported). OSWorld 2.1: **72.6%** (Meta model-card result). These are later benchmark editions than Terminal-Bench 2.1 and are not directly interchangeable with it. [BenchmarkList](https://benchmarklist.com/models/meta-muse-wonder/)
- GDPval-AA: **1,770 Elo** on the Artificial Analysis record indexed by BenchLM; the BenchmarkList page also displays a separate normalized GDPval-AA result of **63.5%**. These are different reported metrics, not competing values for one scale. [BenchLM](https://benchlm.ai/models/muse-wonder) · [BenchmarkList](https://benchmarklist.com/models/meta-muse-wonder/)
- Claw-Eval / ClawProBench and Tau3-Banking: **no verified exact-model result found**.

Reasoning / knowledge:

- Humanity's Last Exam: **50.1%** on the Artificial Analysis leaderboard; CritPt: **28.3%**, rank **9/33**; AA-LCR: **80.7%**, rank **39/419**. [BenchmarkList](https://benchmarklist.com/models/meta-muse-wonder/) · [BenchLM](https://benchlm.ai/models/muse-wonder)
- Artificial Analysis Intelligence Index has a version/date discrepancy: Artificial Analysis' October 12 launch article reported **52 on v4.3** at max reasoning effort; its current model page reports **43** (current page describes v5.0). These are different index revisions/snapshots and should not be read as a like-for-like decline. [Artificial Analysis, October 12](https://artificialanalysis.ai/articles/muse-wonder) · [current Artificial Analysis model page](https://artificialanalysis.ai/models/muse-wonder)
- BenchLM aggregate: **71.7/100, rank #15/1,001**, with partial coverage of 28/716 benchmarks; this is BenchLM's aggregate, not the project's normalized score. [BenchLM](https://benchlm.ai/models/muse-wonder)
- AA-Omniscience: **41.1% accuracy / 26.5% hallucination rate** in the model results indexed by BenchLM. [BenchLM](https://benchlm.ai/models/muse-wonder)
- GPQA Diamond: **no verified exact-model score found**.

Coding:

- DeepSWE 1.1: **78.8%**, rank **2/61**; SWE-Marathon: **53.1%**, rank **2/37**; ProgramBench: **50.0%**. BenchmarkList attributes these to Meta's October 12 model card. [BenchmarkList](https://benchmarklist.com/models/meta-muse-wonder/)
- SciCode: **60.3%**, rank **8/307** on the Artificial Analysis leaderboard; Terminal-Bench 4.0 is **52.0%** as noted above. [BenchmarkList](https://benchmarklist.com/models/meta-muse-wonder/)
- FrontierCode 2.0: **24.3%** in the BenchLM source table, citing Cognition's benchmark report. [BenchLM](https://benchlm.ai/models/muse-wonder)
- SWE-bench Verified, LiveCodeBench, and Vibe Code Bench: **no verified exact-model result found** in the sources reviewed.

Multimodal:

- Meta verifies text, image, video, audio, and PDF input with text output. OSWorld 2.1 is **72.6%**; no exact-model MMMU-Pro score was verified in the reviewed sources. [Meta model docs](https://dev.meta.ai/docs/models) · [BenchmarkList](https://benchmarklist.com/models/meta-muse-wonder/)

Long context:

- The documented context window is **1,048,576 tokens**. AA-LCR is **80.7%**, but no exact-model MRCR/RULER needle-retrieval result at 512K or 1M was found; the advertised window alone does not establish retrieval reliability. [Meta model docs](https://dev.meta.ai/docs/models) · [BenchLM](https://benchlm.ai/models/muse-wonder)

### Normalized scores (1–100)

- **Tool use: 87/100.** GDPval-AA at 1,770 Elo, AA-Briefcase at 1,659 Elo, and JobBench at 70.5% are strong; Terminal-Bench 4.0 at 52%, OSWorld at 72.6%, and missing Claw/Tau3 results cap the score.
- **Reasoning: 89/100.** HLE at 50.1%, CritPt at 28.3%, and AA-LCR at 80.7% are strong, but the current AA index is 43 (the October v4.3 result was 52) and GPQA is unverified.
- **Context window: 95/100.** Meta documents 1M tokens, placing it in the methodology's ≥1M tier; absent 512K+/1M retrieval testing prevents a higher score.
- **Multimodal: 95/100.** Official documentation verifies image, video, audio, and PDF input with text output; no non-text generation is documented.
- **Coding: 88/100.** DeepSWE 1.1 at 78.8%, SWE-Marathon at 53.1%, and SciCode at 60.3% are excellent, while Terminal-Bench 4.0 at 52%, ProgramBench at 50%, and FrontierCode 2.0 at 24.3% show meaningful task variance.
- **Cost efficiency: 56/100.** Paid API pricing of $4/$20 per MTok is above the methodology's $3/$15 reference; cached input is $0.20/MTok, but there is no free or Contributor API tier.
- **Overall Score: 91/100.** Half-up mean of the five quality dimensions: (87 + 89 + 95 + 95 + 88) / 5 = 90.8. Best suited to complex, long-horizon coding and professional agent work when strong capability matters more than token cost; verify retrieval on very large prompts rather than relying on the 1M advertised limit alone.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-28
- Method: Three independent web searches, followed by source checks against Meta's API documentation, model page, and launch announcement and independent Artificial Analysis, BenchmarkList, and BenchLM coverage. The different Artificial Analysis index versions are explicitly labeled; Muse Wonder Full results were excluded. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
