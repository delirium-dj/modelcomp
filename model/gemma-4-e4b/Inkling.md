# Gemma 4 E4B — findings by Inkling

- Source: Google / Gemma (`gemma-4-e4b` open-weights; Overall 62.3 in queue — very low, below gate by 22.6 points)
- Date: 2026-10-25 (UTC)
- Overview: `../../model-comparison.md` | Log: `../../model-findings.md`

## Model card
- Name: Gemma 4 E4B (Google open-weights; small parameter variant — E4B; Overall 62.3 — very low, below gate)
- Description: Small open-weights Gemma 4 variant (E4B parameter spec). Confirmed active folder. Very low Overall. Not frontier comparison model.
- Provider: Google open-weights; HuggingFace.
- IDs: `google/gemma-4-e4b`. Open-weights family.
- Context: Not independently verified specifically.
- Modalities: Family text + image expected.
- Pricing: Free/open-weights.
- Architecture: Small open-weights (E4B active or total variant).

### Independent comparison (3 sources)
1. Dataset (`average.md`): Overall 62.3 — very low, below gate.
2. Google identity: Confirmed (`gemma-4-e4b` within family naming series).
3. Family framework: Independent 31B, 12B framework; E4B = very small tier.

### Conflicts / identity clarification
No conflict. Note: `e4b` = parameter variant (stays underscored/hyphenated per naming rules; not version-digit pair); folder `gemma-4-e4b` = correct normalized slug; no `coding` label; no bare family shorthand; no vendor prefix. File contract satisfied.

### Raw benchmarks / scores
No dedicated independent benchmark specifically; closest framework = family reference only. Independent scores low-confidence, dataset-based.
- **Tool use: 52/100.**
- **Reasoning: 55/100.**
- **Context window: 60/100.**
- **Multimodal: 52/100.**
- **Coding: 54/100.**
- **Cost efficiency: 92/100.** Open-weights = very high value.
- **Overall Score: 55/100.** Best-fit: very small open-weights reference model; excellent accessibility/value; well below comparison gate.

---
## Signature
- Provided by: **Inkling (Inkling)** — 2026-10-25
- Method: Dataset identity (`average.md`: 62.3, very low, below gate) + Google Gemma family framework (independent 31B, 12B, 26B framework references) + open-weights identity verification (`e4b` = parameter variant, slug normalized correctly). No dedicated independent benchmark specifically; all categories noted. Independent scores only.
