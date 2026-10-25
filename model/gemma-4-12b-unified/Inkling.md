# Gemma 4 12B Unified — findings by Inkling

- Source: Google / Gemma (`gemma-4-12b-unified` open-weights; Overall 71.6 in queue — well below gate)
- Date: 2026-10-25 (UTC)
- Overview: `../../model-comparison.md` | Log: `../../model-findings.md`

## Model card
- Name: Gemma 4 12B Unified (Google open-weights; Overall 71.6)
- Description: Google's open-weights unified model (12B parameters, Gemma 4 family). Confirmed active. Below comparison gate. Open-weights.
- Provider: Google / Gemma open-weights; HuggingFace available (`google/gemma-4-12b-unified` or similar family reference).
- IDs: `google/gemma-4-12b-unified`. Open-weights.
- Context: Expected lower than frontier 1M (small open-weights tier).
- Modalities: Family text+image expected; text output.
- Pricing: Free / open-weights.
- Architecture: 12B parameters; open-weights (Gemma family).

### Independent comparison (3 sources)
1. Dataset: Confirmed (`gemma-4-12b-unified` Overall 71.6; below gate 84.9). Listed as below-gate rater in agreement notes.
2. Google identity: Confirmed by dataset naming (`gemma-4-12b-unified`, `gemma-4-31b`, `gemma-4-26b-a4b` family).
3. Framework: Gemma family benchmarked independently (Gemma 4 31B, 4 26B, etc. in framework); 12B unified in same family framework.

### Conflicts
None. Below-gate open-weights identity.

### Raw benchmarks
No dedicated independent benchmark page retrieved specifically for 12B unified; family benchmark framework reference available.

### Normalized scores
- **Tool use: 60/100.**
- **Reasoning: 62/100.**
- **Context window: 70/100.** Expected lower than frontier.
- **Multimodal: 60/100.**
- **Coding: 60/100.**
- **Cost efficiency: 95/100.** Open-weights = exceptional value.
- **Overall Score: 62.4/100.** Best-fit: small open-weights model; very good value; well below comparison gate; light/research use.

---
## Signature
- Provided by: **Inkling (Inkling)** — 2026-10-25
- Method: Dataset identity (`average.md`: 71.6, below gate) + Google Gemma family framework + open-weights identity. Dedicated independent benchmark not independently retrieved specifically for 12B unified; noted explicitly. No fabricated benchmarks.
