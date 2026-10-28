# GPT-5.6 Terra — findings by GPT-6 Luna

- Source: OpenAI/gpt-5.6-terra
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra
- **Short description:** OpenAI proprietary GPT-5.6 Terra model. OpenAI's October 2026 system card compares the August snapshot against GPT-6 Sol/Luna on health evaluations.
- **Provider / access:** OpenAI API model `gpt-5.6-terra` (official API ID spelling); exact feature matrix not checked.
- **Release / knowledge:** August 2026 snapshot referenced in OpenAI's October system card; cutoff not verified.
- **IDs:** `openai/gpt-5.6-terra`.
- **Context window:** no exact context capacity verified in sources reviewed.
- **Modalities:** no exact-model modalities verified.
- **Pricing (as of 2026-10-28):** OpenAI pricing lists $2 input, $12 output, $0.20 cached input per 1M standard short-context tokens; long-context $4/$18/$0.40.
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

OpenAI system-card results are benchmark-specific and include length-adjusted scores; they should not be read as unqualified general capability.

Agent / tool use:

- no verified exact-model tool benchmark found.

Reasoning / knowledge:

- HealthBench Professional, length-adjusted: 54.0% for GPT-5.6 Terra (August), compared with 55.2% for GPT-6 Sol (October) and 48.2% for GPT-6 Luna (October).
- HealthBench: 53.3% for GPT-5.6 Terra vs 52.1% GPT-6 Sol; HealthBench Hard 28.7% vs 27.8% (OpenAI system card). OpenAI notes length adjustment can affect these comparisons.
- MentalHealthBench overall: 47.53 ± 0.97 for GPT-5.6 Luna (not Terra); this is excluded as nonmatching model, demonstrating the need to distinguish family SKUs.

Coding:

- no verified exact-model coding benchmark found.

Long context:

- no verified exact-model retrieval benchmark found.

### Normalized scores (1–100)

- **Tool use: 50/100.** No exact-model agent/tool benchmark verified.
- **Reasoning: 72/100.** Health evaluations provide some evidence, but are narrow and length-sensitive; no broad reasoning suite was verified.
- **Context window: 50/100.** No exact-model context limit or retrieval score verified.
- **Multimodal: 50/100.** Exact-model modality evidence was not verified.
- **Coding: 50/100.** No exact-model coding benchmark verified.
- **Cost efficiency: 70/100.** Official $2/$12 rates are moderate versus higher-cost flagship offerings; value cannot be firmly judged without capability evidence.
- **Overall Score: 54/100.** Half-up mean of the five quality dimensions; provisional due to sparse exact-model evidence.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-28
- Method: Three independent public web searches; only exact-model results are cited, with length adjustment and adjacent-model exclusions noted.
- Sources: [OpenAI pricing](https://developers.openai.com/api/docs/pricing); [OpenAI October system card](https://cdn.openai.com/pdf/gpt-6-october.pdf); [OpenAI model docs](https://developers.openai.com/api/docs/models).
