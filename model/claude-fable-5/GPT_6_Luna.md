# Claude Fable 5 — findings by GPT-6 Luna

- Source: Anthropic/Claude Fable 5
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5
- **Short description:** Tracked Anthropic Claude Fable model. The searches completed here did not find an official model card or canonical exact-model API ID; it is kept distinct from Fable 5.1 in the absence of authoritative identity evidence.
- **Provider / access:** Anthropic; exact API ID not verified.
- **Release / knowledge:** no exact-model release date or cutoff verified.
- **IDs:** tracked display identity `Claude Fable 5`; canonical identifier unverified.
- **Context window:** no verified exact-model context specification found.
- **Modalities:** no exact-model official modality information verified.
- **Pricing (as of 2026-10-28):** no exact-model official pricing verified.
- **Architecture:** proprietary; exact-model architecture disclosure not verified.

### Raw benchmarks found

OpenAI's October release article reports an exact-name comparison on DeepSWE v1.1. Other results below come from secondary Artificial Analysis leaderboard data and remain effort-specific.

Agent / tool use:

- Claude Fable 5.1 with Opus 5 fallback: 31.4% AutomationBench score at Max; OpenAI cautions its reported cost omits fallback cost on about 40% of tasks. This is **not** attributed to Fable 5.
- no verified exact-model agent benchmark score for Fable 5 found.

Reasoning / knowledge:

- no verified exact-model reasoning benchmark found in the searches completed.

Coding:

- DeepSWE v1.1: 69.9% at Xhigh for Claude Fable 5, reported by OpenAI; article describes it as the family's highest score in the comparison.

Long context:

- no verified exact-model context or long-context retrieval result found.

### Normalized scores (1–100)

- **Tool use: 15/100.** No exact Fable 5 tool benchmark verified; Fable 5.1/fallback data is deliberately not transferred.
- **Reasoning: 15/100.** No exact-model reasoning score verified.
- **Context window: 15/100.** No exact-model context specification or retrieval score verified.
- **Multimodal: 15/100.** No exact-model modality evidence verified.
- **Coding: 70/100.** DeepSWE v1.1 69.9% at Xhigh is a direct, attributable result; evidence is limited to one benchmark.
- **Cost efficiency: 15/100.** Exact-model pricing not verified; Fable 5.1 fallback pricing context is not applicable.
- **Overall Score: 26/100.** Half-up mean of quality dimensions; this is evidence-limited and should not be interpreted as a robust comparative rating.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-28
- Method: Three independent public web searches; exact-name evidence was retained, and Fable 5.1 results were not conflated with Fable 5.
- Sources: [OpenAI GPT-6 release and benchmark comparison](https://openai.com/index/introducing-gpt-6-sol-and-luna/); [Artificial Analysis](https://artificialanalysis.ai/); [OnlySOTA leaderboard](https://onlysota.ai/leaderboards/artificial-analysis).
