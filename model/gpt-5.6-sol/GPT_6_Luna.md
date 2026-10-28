# GPT-5.6 Sol — findings by GPT-6 Luna

- Source: OpenAI/gpt-5.6-sol
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Sol
- **Short description:** OpenAI proprietary GPT-5.6 Sol model. The October 2026 official GPT-6 release compares it as a predecessor to GPT-6 Sol and describes substantial capability and price changes.
- **Provider / access:** OpenAI API model ID `gpt-5.6-sol`; exact API feature matrix not fully checked.
- **Release / knowledge:** August 2026 snapshot referenced by OpenAI's October comparison; exact knowledge cutoff not verified.
- **IDs:** `openai/gpt-5.6-sol`.
- **Context window:** no verified exact-model context specification found in the reviewed sources.
- **Modalities:** no verified exact-model modality details found.
- **Pricing (as of 2026-10-28):** OpenAI official pricing lists $4 input and $20 output per 1M tokens (standard short context); cached input $0.40. Higher long-context rates apply.
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

Official OpenAI comparisons provide relative changes, but benchmark results can differ by reasoning effort, snapshot, and task harness.

Agent / tool use:

- no verified exact-model standalone agent score found in reviewed primary sources.

Reasoning / knowledge:

- HealthBench Professional, length-adjusted: 54.0% for GPT-5.6 Sol (August); GPT-6 Sol October is 55.2% (OpenAI system card).
- HealthBench: 55.0% for GPT-5.6 Sol (August) vs 52.1% for GPT-6 Sol October; HealthBench Hard 31.4% vs 27.8% (OpenAI system card). OpenAI notes response-length adjustment can affect comparisons.

Coding:

- GPT-6 Sol improves substantially over GPT-5.6 Sol on FrontierCode 1.1 Main; OpenAI does not give an absolute GPT-5.6 Sol score in the release passage.
- DeepSWE v1.1: GPT-6 Sol Max scores 68.8%; comparison describes this as near Claude Fable 5's 69.9%, without an exact GPT-5.6 Sol result.

Long context:

- no verified exact-model retrieval result found.

### Normalized scores (1–100)

- **Tool use: 50/100.** No exact-model primary agent benchmark was verified.
- **Reasoning: 78/100.** HealthBench Professional and HealthBench results are measured, but not broad enough to establish frontier general reasoning.
- **Context window: 50/100.** Exact context specification and retrieval evidence were not verified.
- **Multimodal: 50/100.** Exact modalities were not verified.
- **Coding: 70/100.** OpenAI reports GPT-6 Sol improves substantially on FrontierCode over this model, but provides no predecessor absolute score here.
- **Cost efficiency: 58/100.** Official $4/$20 per million standard short-context rates are materially higher than GPT-6 Luna; value depends on task quality.
- **Overall Score: 60/100.** Half-up mean of the five quality dimensions; evidence is limited and should be viewed as provisional.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-28
- Method: Three independent public searches; direct predecessor comparisons are preserved as relative evidence rather than converted into invented absolute benchmark scores.
- Sources: [OpenAI pricing](https://developers.openai.com/api/docs/pricing); [OpenAI GPT-6 release comparison](https://openai.com/index/introducing-gpt-6-sol-and-luna/); [OpenAI October system card](https://cdn.openai.com/pdf/gpt-6-october.pdf).
