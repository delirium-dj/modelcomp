# Claude Sonnet 5.5 — findings by GPT-6 Luna

- Source: Anthropic/Claude Sonnet 5.5
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.5
- **Short description:** Anthropic Claude Sonnet model identity as tracked by the subject folder. This pass could not verify an official Anthropic model card or canonical exact-SKU API identifier.
- **Provider / access:** Anthropic; exact endpoint/model ID not verified.
- **Release / knowledge:** no exact-model release or cutoff verified.
- **IDs:** display label `Claude Sonnet 5.5`; canonical API ID unverified.
- **Context window:** no verified exact-model specification found.
- **Modalities:** no exact-model official modality details verified.
- **Pricing (as of 2026-10-28):** no exact-model official price verified.
- **Architecture:** proprietary; no exact-model architecture detail verified.

### Raw benchmarks found

Secondary Artificial Analysis leaderboard coverage gives effort-specific results under this exact display name. These scores are attributed to the AA dataset mirror, not claimed as vendor-published.

Agent / tool use:

- GDPval-AA: 66.9% at Max, 61.4% Xhigh, 52.4% High, 41.1% Medium (Artificial Analysis leaderboard mirror, OnlySOTA).
- Terminal-Bench 4.0: 63.6% at Max, 57.1% Xhigh, 43.9% High, 29.8% Medium (same leaderboard; effort-specific).

Reasoning / knowledge:

- Humanity's Last Exam: 55.0% at Max, 50.0% Xhigh, 45.8% High, 39.8% Medium (same leaderboard).
- AA-LCR: 82.7% at Max, 79.7% Xhigh, 78.0% High, 76.3% Medium (same leaderboard).

Coding:

- SciCode: 61.0% at Max, 57.3% Xhigh, 53.7% High, 52.9% Medium (same leaderboard).
- no verified exact-model SWE-bench result found.

Long context:

- no verified exact-model context window or retrieval score found.

### Normalized scores (1–100)

- **Tool use: 91/100.** Strong GDPval-AA and Terminal-Bench results; capped because model/API identity and independent primary harness evidence are unresolved.
- **Reasoning: 91/100.** HLE and AA-LCR results are strong across efforts; attribution remains secondary-source dependent.
- **Context window: 15/100.** No exact-model context or retrieval evidence verified.
- **Multimodal: 15/100.** No exact-model official modality evidence verified.
- **Coding: 89/100.** SciCode results are strong; no independently verified exact-model SWE-bench result.
- **Cost efficiency: 15/100.** Exact model pricing not verified.
- **Overall Score: 60/100.** Half-up mean of the five quality dimensions; low confidence due to unverified specs and missing context/multimodal evidence.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-28
- Method: Three independent public web searches; effort-specific benchmark values are identified as secondary AA listing data, not universal model scores.
- Sources: [OnlySOTA Artificial Analysis leaderboard](https://onlysota.ai/leaderboards/artificial-analysis); [Artificial Analysis](https://artificialanalysis.ai/); [Anthropic model documentation](https://docs.anthropic.com/) (no exact matching page verified in this pass).
