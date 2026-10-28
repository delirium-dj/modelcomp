# GPT-6 Astra — findings by GPT-6 Luna

- Source: OpenAI/gpt-6-astra
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra
- **Short description:** OpenAI's proprietary GPT-6 flagship tier, positioned for complex work, coding, research, and computer use. OpenAI identifies it as distinct from the more cost-efficient Luna profile.
- **Provider / access:** OpenAI API model `gpt-6-astra`; exact API feature/effort details were not fully verified in the sources reviewed.
- **Release / knowledge:** GPT-6 family released October 2026; exact model-specific knowledge cutoff not verified.
- **IDs:** `openai/gpt-6-astra`.
- **Context window:** no verified model-specific context figure found in the reviewed search results.
- **Modalities:** Computer-use capability evaluated by OpenAI; exact supported input/output modalities not confirmed here.
- **Pricing (as of 2026-10-28):** OpenAI pricing lists standard input $10, output $50, cached input $1 per 1M tokens; long-context input/output $20/$75. Batch rates are lower.
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

OpenAI and Artificial Analysis results vary by reasoning effort and harness. The AA figures below are configuration-specific and not a single universal score.

Agent / tool use:

- OSWorld 2.0 offline: GPT-6 Astra remains OpenAI's strongest computer-use model, per OpenAI's GPT-6 family guide; no exact score captured in reviewed sources.
- GDPval-AA: 53.7% Max; 51.2% High; 49.3% Medium; 44.5% Low (Artificial Analysis benchmark listing via OpenRouter).
- Terminal-Bench 4.0: 59.1% Max; 54.0% High; 49.5% Medium; 41.9% Low (Artificial Analysis listing via OpenRouter).

Reasoning / knowledge:

- Artificial Analysis Intelligence Index (Max): 52.7; rank 9 in the broader listing (Artificial Analysis results via OnlySOTA).
- Humanity's Last Exam: 54.7% Max; 53.1% High; 52.7% Medium; 49.2% Low (Artificial Analysis results via OnlySOTA).
- GPQA Diamond: 96.1% Max; 94.9% High; 93.9% Medium; 93.1% Low (Artificial Analysis results via OnlySOTA).

Coding:

- SciCode: 56.5% Max; 55.4% High; 54.2% Medium; 54.1% Low (Artificial Analysis results via OnlySOTA).
- SWE-bench Verified: no verified exact-model score found in reviewed sources.

Long context:

- no verified model-specific context-window or retrieval result found in reviewed sources.

### Normalized scores (1–100)

- **Tool use: 94/100.** High Terminal-Bench 4.0 and GDPval-AA results across efforts support strong agentic ability; capped by lack of an independently verified OSWorld score here.
- **Reasoning: 96/100.** GPQA Diamond 96.1% Max and HLE 54.7% Max support frontier reasoning; effort and evaluator differences remain relevant.
- **Context window: 60/100.** No verified model-specific window or retrieval result was available to justify a higher score.
- **Multimodal: 75/100.** OpenAI positions Astra for computer use, but exact modality and vision benchmark evidence was not confirmed in this search.
- **Coding: 90/100.** Strong SciCode results support coding capability; capped due to absence of a confirmed SWE-bench figure.
- **Cost efficiency: 35/100.** Standard rates ($10/$50 per million input/output) are high versus the Luna tier; efficiency depends on performance and task cost.
- **Overall Score: 83/100.** Half-up mean of five quality dimensions; best suited to demanding agentic/reasoning workloads where capability outweighs token price.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-28
- Method: Three independent public web searches; benchmark values are attributed to their stated harness/effort and not generalized across settings.
- Sources: [OpenAI pricing](https://developers.openai.com/api/docs/pricing); [OpenAI GPT-6 family guide](https://openai.com/index/practical-guide-building-gpt-6/); [Artificial Analysis leaderboard mirror](https://onlysota.ai/leaderboards/artificial-analysis); [OpenRouter benchmark listing](https://openrouter.ai/).
