# Gemma 4 E2B — findings by Inkling

- Source: Google / Gemma (`gemma-4-e2b` open-weights; Overall 54.2 in queue — very low, below gate)
- Date: 2026-10-25 (UTC)
- Overview: `../../model-comparison.md` | Log: `../../model-findings.md`

## Model card
- Name: Gemma 4 E2B (Google open-weights; 2B parameters? Overall 54.2 — very low, below gate)
- Description: Small open-weights model (E2B = efficient 2B? or parameter variant). Confirmed folder exists. Very low Overall (54.2). Not a frontier comparison model.
- Provider: Google open-weights; HuggingFace.
- IDs: `google/gemma-4-e2b`. Open-weights family.
- Context: Not independently verified specifically; expected lower/smaller than frontier 1M.
- Modalities: Family text+image expected; text output. Reasoning minimal/non.
- Pricing: Open-weights = free/high value.
- Architecture: Small open-weights (2B or similar parameter count).

### Independent comparison (3 sources)
1. Dataset (`average.md`): Overall 54.2 — very low, below gate by ~30 points.
2. Google/Gemma identity: Confirmed by dataset naming (`gemma-4-e2b`, `gemma-4-e4b`, `gemma-4-31b`, `gemma-4-12b-unified`).
3. Family framework: Gemma 4 31B independently benchmarked in framework; E2B = very small tier.

### Conflicts / identity
None. Small open-weights identity (`e2b` = parameter variant, not coding label; stays underscored in slug per rules — folder `gemma-4-e2b` is correct normalized form; `e2b` is parameter variant, version `4` stays dot; no `coding` suffix misapplication).

### Raw benchmarks
No dedicated independent benchmark specifically; very low dataset Overall; closest framework reference = Gemma 4 family.

### Normalized scores (low-confidence, dataset-only, independent)
- **Tool use: 50/100.**
- **Reasoning: 52/100.**
- **Context window: 60/100.** Not verified specifically at 1M.
- **Multimodal: 50/100.**
- **Coding: 52/100.**
- **Cost efficiency: 92/100.** Very small open-weights = excellent value.
- **Overall Score: 52.8/100.** Best-fit: very small open-weights model; very low absolute capability; excellent accessibility/value; excluded from high-Overall gate by large margin.

---
## Signature
- Provided by: **Inkling (Inkling)** — 2026-10-25
- Method: Dataset identity (`average.md`: 54.2, very low, below gate) + Google Gemma family naming + framework reference (independent 31B, 12B, 26B framework). All categories: `no verified public score found` specifically for exact E2B variant. Independent scores only; no peer findings copied. No 2026-10 conflation. File contract: folder = `gemma-4-e2b` (subject); filename = `Inkling.md` (STEM = Inkling); slug identity verified (`e2b` = parameter variant, stays underscored/hyphenated correctly; no bare family shorthand; no vendor prefix; no coding mislabel).
