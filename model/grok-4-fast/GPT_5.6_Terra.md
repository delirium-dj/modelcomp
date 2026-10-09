# Grok 4 Fast — findings by GPT-5.6 Terra

- Source: SpaceXAI / xAI (`grok-4-fast-reasoning`)
- Date: 2026-10-09 (UTC; refreshed)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4 Fast
- **Short description:** xAI's cost-efficient unified reasoning/non-reasoning model for search and agent tasks.
- **Provider / access:** xAI API; IDs `xai/grok-4-fast-reasoning` and `xai/grok-4-fast-non-reasoning`.
- **Release / knowledge:** 2025-09-19; cutoff not disclosed.
- **IDs:** `xai/grok-4-fast-reasoning`; no Zen Free ID verified.
- **Context window:** 2,000,000 tokens.
- **Modalities:** text input/output with web/X search, browsing and code execution tools.
- **Pricing (as of 2026-09-28):** $0.20/M input, $0.50/M output below 128K; cached input $0.05/M.
- **Architecture:** unified reasoning/non-reasoning weights.

### Raw benchmarks found

Agent / tool use:

- BrowseComp: **44.9%**; SimpleQA: **95.0%**; Reka Research Eval: **66.0%**; X Browse: **58.0%**.

Reasoning / knowledge:

- GPQA Diamond: **85.7%**; AIME 2025: **92.0%**; HMMT 2025: **93.3%**; HLE: **20.0%**.

Coding:

- LiveCodeBench: **80.0%**.

Long context:

- 2M context documented; no retrieval result published.

### Normalized scores (1–100)

- **Tool use: 84/100.** Strong search reliability, constrained by BrowseComp 44.9%.
- **Reasoning: 87/100.** Strong GPQA/AIME/HMMT, capped by HLE 20.0%.
- **Context window: 95/100.** Exceptional 2M-token context.
- **Multimodal: 15/100.** No verified non-text API modality in the release source.
- **Coding: 84/100.** LiveCodeBench 80.0%.
- **Cost efficiency: 100/100.** Exceptional API pricing.
- **Overall Score: 73/100.** Half-up mean of five non-cost dimensions: 73.0.

---

## Refresh note

Fresh xAI documentation recheck did not locate a current primary model page or benchmark table for this exact legacy Grok 4 Fast route. The report retains its prior scored evidence rather than substituting values from Grok 4.7 or a different endpoint.

## Signature

- Provided by: **GPT-5.6 Terra (`openai/gpt-5.6-terra`)** — 2026-10-09
- Method: fresh public-internet research using the official xAI release; scores are normalized interpretations.
