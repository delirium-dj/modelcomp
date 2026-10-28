# Grok 4.7 — findings by GPT-6 Luna

- Source: xAI/Grok 4.7
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.7
- **Short description:** xAI Grok model. Artificial Analysis leaderboard data includes effort-specific results; exact API identity and primary model card were not retrieved in the searches completed.
- **Provider / access:** xAI; exact API route not verified.
- **Release / knowledge:** no exact-model date/cutoff verified.
- **IDs:** tracked label `Grok 4.7`; canonical API identifier unverified.
- **Context window:** no exact-model context specification verified.
- **Modalities:** no exact-model modality details verified.
- **Pricing (as of 2026-10-28):** Secondary AA listing shows $3 blended price per 1M tokens for its comparison configuration; official pricing not confirmed.
- **Architecture:** proprietary; exact details not verified.

### Raw benchmarks found

The following figures are Artificial Analysis leaderboard values mirrored by OnlySOTA; they are effort-specific and secondary-source reported.

Agent / tool use:

- GDPval-AA: 60.7% Xhigh, 60.4% High, 54.1% Low (OnlySOTA AA leaderboard).
- Terminal-Bench 4.0: 25.8% Xhigh, 24.7% High, 16.2% Low (same source).

Reasoning / knowledge:

- Humanity's Last Exam: 43.1% Xhigh, 42.3% High, 39.2% Low (same source).
- AA-LCR: 76.7% Xhigh, 77.0% High, 80.0% Low (same source).

Coding:

- SciCode: 57.4% Xhigh, 57.8% High, 54.9% Low (same source).
- no verified exact-model SWE-bench score found.

Long context:

- no verified exact-model long-context retrieval result found.

### Normalized scores (1–100)

- **Tool use: 78/100.** GDPval-AA is strong, but Terminal-Bench results are modest and effort-dependent; benchmark source is secondary.
- **Reasoning: 82/100.** HLE and AA-LCR show solid results, with limited primary-source verification.
- **Context window: 50/100.** No context capacity or retrieval performance verified.
- **Multimodal: 50/100.** Exact input/output modalities not verified.
- **Coding: 82/100.** SciCode results are competitive; no exact-model SWE-bench result verified.
- **Cost efficiency: 78/100.** Secondary listing gives $3 blended price per million tokens, but official current rate and performance cost were not verified.
- **Overall Score: 68/100.** Half-up mean of the five quality dimensions; provisional due to secondary-source data and missing specification coverage.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-28
- Method: Three independent public web searches; effort settings and secondary-source provenance are explicitly retained.
- Sources: [OnlySOTA Artificial Analysis leaderboard](https://onlysota.ai/leaderboards/artificial-analysis); [Artificial Analysis](https://artificialanalysis.ai/); [xAI docs](https://docs.x.ai/) (exact model card not confirmed).
