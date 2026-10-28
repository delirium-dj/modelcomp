# Claude Fable 5.1 — findings by GPT-6 Luna

- Source: Anthropic/Claude Fable 5.1
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** The tracked subject is an Anthropic Claude model. The searches in this pass did not establish an official Anthropic model card or canonical API ID for the exact name; do not infer that it is a tier of another Claude model.
- **Provider / access:** Anthropic; exact provider route and API model ID not verified.
- **Release / knowledge:** no exact-model release date or cutoff verified.
- **IDs:** subject label `Claude Fable 5.1`; canonical API identifier unverified.
- **Context window:** no verified exact-model specification found.
- **Modalities:** no exact-model official modality specification verified.
- **Pricing (as of 2026-10-28):** no verified exact-model pricing found.
- **Architecture:** no exact-model architecture disclosure found.

### Raw benchmarks found

Benchmark listings surfaced results under the exact display name in secondary Artificial Analysis leaderboard data. These are useful but lack the primary Anthropic model/API identity and complete harness documentation in the search result; configuration is reported as shown and not treated as vendor-certified.

Agent / tool use:

- GDPval-AA: 62.7% at Max, 56.8% High, 52.2% Medium, 48.4% Low (Artificial Analysis leaderboard mirror, OnlySOTA).
- Terminal-Bench 2.1: 91.4% Max, 89.9% High, 88.0% Medium, 85.0% Low (Artificial Analysis leaderboard mirror).

Reasoning / knowledge:

- GPQA Diamond: 93.7% Max, 90.6% High, 88.6% Medium, 88.1% Low (Artificial Analysis leaderboard mirror).
- Humanity's Last Exam: 59.1% Max, 55.9% High, 53.8% Medium, 48.9% Low (Artificial Analysis leaderboard mirror).

Coding:

- SciCode: 63.1% Max, 58.7% High, 56.4% Medium, 56.7% Low (Artificial Analysis leaderboard mirror).
- no verified exact-model SWE-bench result found.

Long context:

- no verified exact-model long-context result found.

### Normalized scores (1–100)

- **Tool use: 91/100.** Strong GDPval-AA and Terminal-Bench 2.1 leaderboard results; capped because exact API identity and primary evaluation details remain unresolved.
- **Reasoning: 92/100.** GPQA Diamond and HLE are strong across listed efforts; attribution remains secondary-source-dependent.
- **Context window: 15/100.** No verified context specification or retrieval result found.
- **Multimodal: 15/100.** Exact-model modality evidence not verified.
- **Coding: 91/100.** SciCode results are strong; no independently verified SWE-bench result located.
- **Cost efficiency: 15/100.** Exact-model pricing not verified.
- **Overall Score: 61/100.** Half-up mean of quality dimensions; confidence is low because context and modalities are unverified and the exact model identity needs primary confirmation.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-28
- Method: Three independent public web searches; leaderboard numbers are explicitly attributed to secondary AA data and effort configurations, with identity uncertainty retained.
- Sources: [OnlySOTA Artificial Analysis leaderboard](https://onlysota.ai/leaderboards/artificial-analysis); [OpenAI official GPT-6 release comparison](https://openai.com/index/introducing-gpt-6-sol-and-luna/) for contextual comparisons only; [Artificial Analysis benchmark pages](https://artificialanalysis.ai/).
