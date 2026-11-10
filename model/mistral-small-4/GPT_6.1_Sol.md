# Mistral Small 4 — findings by GPT-6.1 Sol

- Source: Mistral AI / `mistral-small-2603`
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md); current Overall contract in `../../RULES.md`
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name:** Mistral Small 4
- **Short description:** Mistral's open-weight MoE combining instruction following, optional reasoning, image understanding, and coding. `none` and `high` are per-request reasoning settings of the same model; NVFP4 and speculative-decoding helpers are not new target checkpoints.
- **Provider / access:** Native Mistral Chat Completions (`https://api.mistral.ai/v1/chat/completions`), Agents/Conversations, and self-hosted weights. OpenRouter verifies `mistralai/mistral-small-2603`; protocol translation there is not a native OpenAI Responses claim.
- **Release / knowledge:** Released 2026-03-16, verified by the [announcement](https://mistral.ai/news/mistral-small-4) and [native model card](https://docs.mistral.ai/models/model-cards/mistral-small-4-0-26-03). Knowledge cutoff not verified.
- **IDs:** `mistral-small-2603`; weights `mistralai/Mistral-Small-4-119B-2603`; gateway `mistralai/mistral-small-2603`. No Zen Free ID verified; a rolling `latest` alias is not used to pin these findings.
- **Context window:** Native 256K; OpenRouter 262,144 context / 209,715 maximum completion tokens. No separate native output cap verified, and gateway maxima are not additive to total context.
- **Modalities:** Text/image inputs; text output; document QnA, native functions, JSON/structured outputs, and optional reasoning. No native audio/video or non-text output established.
- **Pricing (as of 2026-11-10):** Native and gateway $0.15 input / $0.60 output per 1M; gateway cache read $0.015. [Native claimant](https://docs.mistral.ai/models/model-cards/mistral-small-4-0-26-03), [gateway claimant](https://openrouter.ai/api/v1/models). Mistral advertises free NVIDIA prototyping, but this report grades the documented paid API tier, not an assumed permanent unlimited free endpoint.
- **Architecture:** 119B total / 6.5B active per native/HF cards, 128 experts with four active; Apache 2.0. The announcement also rounds active counts to 6B or 8B when embedding/output layers are included; those counting conventions are not separate models.

### Raw benchmarks found

Publisher image charts were inspected directly from the [official weights card](https://huggingface.co/mistralai/Mistral-Small-4-119B-2603/raw/main/README.md). Independently, AA's public page-delivered JSON was decoded without executing scripts and filtered to exact `slug=mistral-small-4`, name **Mistral Small 4 (Reasoning)**, ID `3fd96175-4ef1-434c-8795-f873aec2abc1`. AA's record does not specify the exact effort/harness for every stored legacy result, so publisher and AA measurements are not averaged.

Agent / tool use:

- AA Tau2: **41.23%**; GDPval-AA **369.68 Elo**; Terminal-Bench **2.1: 20.97%** ([AA exact profile/data](https://artificialanalysis.ai/models/mistral-small-4)).
- AA Terminal-Bench **4.0: 0.0%** and AutomationBench partial-score **0.96%**. These are present measured fields, not missing-data placeholders; partial credit is not all-pass success.
- Tau3-Banking version-specific result, Claw-Eval/ClawProBench, Toolathon, MCP-Atlas, and SWE Atlas QnA: no verified public score found.

Reasoning / knowledge:

- Publisher chart: GPQA Diamond **71.2% High / 59.1% None**; MMLU Pro **78.0% High / 73.5% None**; AllenAI IFBench **48.0% High / 35.7% None**.
- Publisher reasoning chart: AIME25 **83.8%**, High; Collie **62.9%**, High.
- Independent AA GPQA field **76.87%**; HLE-Diamond **4.4%**; AA Intelligence Index **v5.0.1: 4.30**. The changed composite and different GPQA harness/settings are not treated as equivalent to the publisher chart.
- AA-Omniscience accuracy **21.37%**, hallucination rate **66.55%**, net score **-30.97**; rates and net score are distinct metrics.
- Original-HLE setting, MLCR length-specific setting, and original CritPt setting were not resolved; no unqualified no-tools or full-window claims are made from those legacy fields.

Coding:

- Publisher LiveCodeBench **63.6%**, High, version unspecified in the chart.
- AA SciCode **38.77%**; FrontierCode **2.0: 0.0%**; Terminal-Bench-Science **0.1: 0.0%**; TB2.1 **20.97%**. Genuine zero success on these harder workflows is not zero general coding ability.
- SWE-bench Verified/SWE-Pro, Vibe Code Bench, and DeepSWE: no verified exact-model result found.

Long context:

- Publisher AA-LCR chart **71.2%**, High; prose rounds its comparison to **0.72**. AA's current `lcr` field is **49.67%**, with setting/length not established in this extraction. Neither is a verified MRCR/RULER result at the 256K maximum.

Multimodal/performance:

- Publisher MMMU-Pro **60.0% High / 46.3% None**; independent AA MMMU-Pro **56.82%**.
- Publisher reports **40% lower completion time** in a latency-optimized setup and **3× requests/s** in a throughput-optimized setup versus Small 3; these are different configurations, not universal speed guarantees.
- AA headline **143.28 output tokens/s**, **12.51 seconds to first answer token**; endpoint/workload-dependent.

### Normalized scores (1–100)

- **Tool use: 44/100.** Tau2 41.23%, TB2.1 20.97%, low GDPval-AA, and harder-workflow zeros indicate limited measured agent reliability despite native functions.
- **Reasoning: 64/100.** GPQA and AIME support useful reasoning, but HLE-Diamond 4.4%, low AA v5 intelligence, and high Omniscience hallucination cap frontier claims.
- **Context window: 72/100.** Verified 256K capacity reaches the 200K–500K tier, but conflicting LCR runs and absent maximum-window retrieval limit effective-context confidence.
- **Multimodal: 67/100.** Verified image/document input and MMMU-Pro roughly 57–60% support the image tier; audio/video/non-text output remain absent.
- **Coding: 64/100.** Publisher LiveCodeBench 63.6% and independent SciCode 38.77% support assistance, but terminal/repository-workflow weaknesses prevent a high agentic-coding score.
- **Cost efficiency: 96/100.** The documented $0.15/$0.60 paid tier is inexpensive, with discounted cache reads; quality/retry costs and self-host hardware requirements prevent treating it as universally free.
- **Overall Score: 62/100.** Half-up mean: (44 + 64 + 72 + 67 + 64) / 5 = 62.2, rounded to 62; cost excluded. Best fit is inexpensive image-aware chat and constrained assistance, not autonomous difficult engineering.

---

## Signature

- Provided by: **GPT 6.1 Sol (agentrouter/gpt-6.1-sol)** — 2026-11-10
- Method: Fresh public-source research, visual transcription of official benchmark charts, exact native/gateway verification, and JSON-only extraction of AA's public exact-model record. No peer findings read. Reasoning settings, benchmark versions, partial credit, and measured zero versus missing values are separated; normalized scores are interpretations. Configured search returned HTTP 402, so direct sources and Bing were used.
- Reference URLs:
  - [Mistral launch and pricing](https://mistral.ai/news/mistral-small-4)
  - [Native exact model card](https://docs.mistral.ai/models/model-cards/mistral-small-4-0-26-03)
  - [Official weights card and benchmark images](https://huggingface.co/mistralai/Mistral-Small-4-119B-2603/raw/main/README.md)
  - [Independent Artificial Analysis model/data page](https://artificialanalysis.ai/models/mistral-small-4)
  - [OpenRouter live exact route/pricing](https://openrouter.ai/api/v1/models)
- Future sources: Add a separately signed file and preserve this report.
