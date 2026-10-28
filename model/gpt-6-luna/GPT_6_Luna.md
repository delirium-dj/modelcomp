# GPT-6 Luna — findings by GPT-6 Luna

- Source: OpenAI/gpt-6-luna
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Luna
- **Short description:** OpenAI proprietary model optimized for focused, high-volume work such as extraction, classification, and structured summaries. OpenAI positions it as the lower-cost Luna tier in its GPT-6 family.
- **Provider / access:** OpenAI API (`gpt-6-luna`); Responses API for built-in tools/function calling, Chat Completions supports function calling only with reasoning effort `none`.
- **Release / knowledge:** GPT-6 Luna October 2026 update; official model documentation reports a May 18, 2026 knowledge cutoff.
- **IDs:** `openai/gpt-6-luna`; also documented on Amazon Bedrock as `openai.gpt-6-luna`.
- **Context window:** 1,050,000 tokens total; maximum input 922,000, maximum output 128,000 (OpenAI model docs).
- **Modalities:** Text and image input; text output; reasoning effort levels none/low/medium/high/xhigh/max; tool/function calling.
- **Pricing (as of 2026-10-28):** Standard short-context input $0.10, cached input $0.01, output $0.50 per 1M tokens; long-context (>272K input) input $0.20 and output $0.75. Batch is half standard. OpenAI official pricing/docs agree; no free API tier identified.
- **Architecture:** Proprietary; parameter count and architecture undisclosed.

### Raw benchmarks found

Results depend on reasoning effort and evaluation harness; the figures below are not interchangeable. OpenAI's system card notes length adjustment for some health evaluations. Artificial Analysis reports its own benchmark suite; secondary aggregators sometimes show estimated results and must not be treated as measured.

Agent / tool use:

- GDPval-AA (Artificial Analysis): 47.2% Max; 42.6% High; 38.5% Medium; 27.0% Low (OpenRouter benchmark listing sourced to AA; effort-specific).
- AutomationBench 1.0.6, GPT-6 Luna High: improves 5.4 percentage points over GPT-5.6 Luna High, at 58% lower cost per task (OpenAI release post; no absolute Luna score stated there).
- Terminal-Bench 4.0 (Artificial Analysis): 12.6% Max; 4.5% High; 2.5% Medium; 0.0% Low (OpenRouter AA listing).
- Toolathlon-Verified: 76.6% estimated, medium confidence (benchgap; not used as a primary score).

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: 38.1, Max (OpenRouter's AA sourced listing); AA release page ranks the model #8 of 22 in its release set. Index value/rank are snapshot- and configuration-dependent.
- HLE: 38.5% Max; AA-LCR: 83.3%; CritPt: 19.4%; AA-Omniscience Accuracy: 43.8% (Artificial Analysis results listed by OpenRouter).
- HealthBench Professional (length-adjusted): 48.2% for GPT-6 Luna October; 44.1% for GPT-5.6 Luna August. HealthBench Hard: 27.2% vs 28.7%, respectively (OpenAI October system card). OpenAI cautions that length adjustment and response length affect comparisons.
- MentalHealthBench overall: 51.73 ± 0.96 for GPT-6 Luna October vs 47.53 ± 0.97 for GPT-5.6 Luna August (OpenAI system card).

Coding:

- DeepSWE v1.1: 66.6% at Max (OpenAI release post); OpenRouter's AA benchmark listing also reports 66.6%.
- SciCode (Artificial Analysis): 54.6% Max, 50.9% Medium, 46.9% Low (OpenRouter AA listing).
- SWE-bench Verified: 88.4% estimated, high confidence (benchgap; explicitly estimated, not independently verified as a direct result here).

Long context:

- 1.05M-token advertised context, but no independently verified long-context retrieval score found. Treat advertised capacity as specification, not evidence of retrieval quality.

### Normalized scores (1–100)

- **Tool use: 86/100.** Strong GDPval-AA and Toolathlon-Verified evidence plus tool/function support; capped because the direct terminal benchmark varies sharply by effort and independent absolute AutomationBench result was unavailable.
- **Reasoning: 87/100.** AA index 38.1 and HLE 38.5% at Max plus health benchmark results support strong capability; capped by effort sensitivity and the weaker length-adjusted HealthBench Professional score versus some peers.
- **Context window: 91/100.** OpenAI specifies 1.05M context and 922K max input; capped because no long-context retrieval test was independently verified.
- **Multimodal: 56/100.** Officially accepts text and images but outputs text only; no verified image-benchmark figure was found in the reviewed sources.
- **Coding: 84/100.** DeepSWE v1.1 66.6% at Max and SciCode 54.6% Max are substantial; capped because the strongest SWE-bench figure located is a secondary estimate rather than confirmed primary measurement.
- **Cost efficiency: 98/100.** Official $0.10/$0.50 per million standard input/output tokens is exceptionally low; long-context requests cost more, and score is not part of Overall.
- **Overall Score: 81/100.** Half-up mean of quality dimensions (86 + 87 + 91 + 56 + 84) / 5; best suited to economical repeated text/image-input tasks where high context and tool use matter more than rich multimodal output.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-28
- Method: Public web research; normalized scores are interpretations, not official vendor scores.
- Sources: [OpenAI model docs](https://developers.openai.com/api/docs/models/gpt-6-luna); [OpenAI pricing](https://developers.openai.com/api/docs/pricing); [OpenAI GPT-6 Luna/ Sol release and benchmark notes](https://openai.com/index/introducing-gpt-6-sol-and-luna/); [OpenAI October system card](https://cdn.openai.com/pdf/gpt-6-october.pdf); [Artificial Analysis release page](https://artificialanalysis.ai/models/releases/gpt-6-luna); [OpenRouter benchmark listing](https://openrouter.ai/openai/gpt-6-luna); [benchgap estimates](https://benchgap.net/model/gpt-6-luna).
- Independent searches completed: 3 successful web searches (official model docs/release, independent benchmark/review coverage, and pricing cross-check). Conflicts reconciled: official context is 1,050,000 total with 922,000 max input; pricing is $0.10/$0.50 standard with >272K premium; benchmark values are effort-specific, and benchgap's estimated SWE-bench/other figures are labeled estimates rather than measured facts.
