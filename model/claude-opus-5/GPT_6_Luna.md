# Claude Opus 5 — findings by GPT-6 Luna

- Source: Anthropic/Claude Opus 5
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic's Claude Opus model, positioned for high-capability work. The three searches in this pass did not locate an official Anthropic page establishing the exact `Claude Opus 5` SKU, so similarly named models are not treated as identical.
- **Provider / access:** Anthropic; exact API ID not verified.
- **Release / knowledge:** no exact-model release date or cutoff verified.
- **IDs:** display identity `Claude Opus 5`; canonical API identifier not verified.
- **Context window:** no verified exact-model context figure found.
- **Modalities:** no exact-model official modality specification verified.
- **Pricing (as of 2026-10-28):** no exact-model official pricing verified.
- **Architecture:** proprietary; exact-model architecture detail not verified.

### Raw benchmarks found

Secondary Artificial Analysis leaderboard data reports results by reasoning effort. Its identity provenance and exact harness settings were not fully established here, so values are presented as attributed secondary evidence.

Agent / tool use:

- GDPval-AA: 26.9% at Max effort (OpenAI's GPT-6 release comparison, which includes this comparator and notes omitted fallback cost in a separate Fable comparison).
- no verified exact-model standalone tool-use score found in independent sources.

Reasoning / knowledge:

- no verified exact-model AA Intelligence Index / GPQA result found in the searches completed.

Coding:

- DeepSWE v1.1: OpenAI reports GPT-6 Luna Max 66.6% as comparable to Claude Opus 5 and Fable 5 at Medium effort; no exact Opus 5 percentage is stated in that passage.

Long context:

- no verified exact-model long-context result found.

### Normalized scores (1–100)

- **Tool use: 58/100.** One attributable GDPval-AA result exists, but no corroborating independent exact-model agent benchmark was verified.
- **Reasoning: 50/100.** Insufficient exact-model evidence to justify a higher normalized score.
- **Context window: 15/100.** No exact-model context or retrieval evidence verified.
- **Multimodal: 15/100.** No exact-model modality evidence verified.
- **Coding: 60/100.** OpenAI provides only a qualitative DeepSWE comparison, not an exact Opus 5 result.
- **Cost efficiency: 15/100.** No exact-model pricing verified.
- **Overall Score: 40/100.** Half-up mean of the five quality dimensions; low confidence because primary model identity and most specifications remain unverified.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-28
- Method: Three independent public web searches; only explicit exact-model-attributed results are retained, and qualitative comparisons are not converted to numeric scores.
- Sources: [OpenAI GPT-6 family release comparison](https://openai.com/index/introducing-gpt-6-sol-and-luna/); [Artificial Analysis](https://artificialanalysis.ai/); [OpenAI model guide](https://openai.com/index/practical-guide-building-gpt-6/).
