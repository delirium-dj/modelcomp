# GPT-6.1 Sol — findings by GPT-6 Luna

- Source: OpenAI/gpt-6.1-sol
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Sol
- **Short description:** OpenAI proprietary GPT-6.1 Sol model. Official pricing/docs distinguish its API SKU from GPT-6 Sol and report lower standard pricing than the original GPT-6 Sol tier.
- **Provider / access:** OpenAI API model ID `gpt-6.1-sol`; official docs list reasoning effort support.
- **Release / knowledge:** October 2026 current documentation; exact release date and knowledge cutoff not verified.
- **IDs:** `openai/gpt-6.1-sol`.
- **Context window:** no verified exact-model context specification found in reviewed sources.
- **Modalities:** no verified exact-model modality details found.
- **Pricing (as of 2026-10-28):** Official standard short-context input $2, output $10, cached input $0.10 per 1M tokens; long-context input/output $4/$15. Fast mode is priced at 2x standard where available.
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

Artificial Analysis leaderboard data lists effort-specific results. Effort variants should not be compared as if they were fixed identical configurations.

Agent / tool use:

- GDPval-AA: 54.8% Max, 52.0% Xhigh, 50.6% High, 47.5% Medium, 40.8% Low (Artificial Analysis leaderboard via OnlySOTA).
- Terminal-Bench 4.0: 56.1% Max, 54.0% Xhigh, 51.5% High, 48.0% Medium, 30.8% Low (same source).

Reasoning / knowledge:

- Humanity's Last Exam: 52.9% Max, 52.6% Xhigh, 51.4% High, 49.9% Medium, 47.4% Low (same source).
- AA-LCR: 83.0% Max, 79.7% Xhigh, 82.3% High, 83.3% Medium, 84.0% Low (same source; higher is better per listing).

Coding:

- SciCode: 54.2% Max, 55.7% Xhigh, 55.8% High, 53.2% Medium, 53.2% Low (same source).
- no verified exact-model SWE-bench result found in sources reviewed.

Long context:

- no verified exact-model long-context retrieval result found.

### Normalized scores (1–100)

- **Tool use: 88/100.** GDPval-AA and Terminal-Bench results are strong; capped by secondary-source attribution and configuration variability.
- **Reasoning: 89/100.** HLE results and broad AA-LCR scores support strong reasoning; no primary score card was retrieved.
- **Context window: 50/100.** Exact context capacity and retrieval quality were not verified.
- **Multimodal: 50/100.** Exact modalities were not verified.
- **Coding: 86/100.** SciCode is consistently strong across listed efforts; no confirmed SWE-bench result.
- **Cost efficiency: 82/100.** $2/$10 per million standard short-context rates are moderate for these reported capabilities; long-context and Fast pricing increase cost.
- **Overall Score: 72.6/100.** Half-up mean of the five quality dimensions; best fit is capable general/tool work where cost is below the GPT-6 Astra tier.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-28
- Method: Three independent public web searches; scores preserve effort-specific configuration and distinguish leaderboard evidence from official product/pricing specifications.
- Sources: [OpenAI pricing](https://developers.openai.com/api/docs/pricing); [OpenAI model docs](https://developers.openai.com/api/docs/models); [OnlySOTA Artificial Analysis leaderboard](https://onlysota.ai/leaderboards/artificial-analysis).
