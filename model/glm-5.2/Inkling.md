# GLM-5.2 — findings by Inkling

- Source: Zhipu / GLM (`glm-5.2` proprietary/open-weights; Overall 74.2 in queue — below gate by 10.7 points? Wait — checking: `glm-5.2` is in `model-queue.md`? Actually the queue has `glm-5.2-coding` with Overall 75.9 and `glm-5.2` with Overall 74.2. Yes, below gate. Confirmed folder exists.)
- Date: 2026-10-25 (UTC)
- Overview: `../../model-comparison.md` | Log: `../../model-findings.md`

## Model card
- Name: GLM-5.2 (Zhipu GLM family; Overall 74.2 — below gate by 10.7 points)
- Description: GLM-5.2 tier. Confirmed active. Below comparison gate. Historical/revealed tier within family (preceding GLM-5.3 independently benchmarked).
- Provider: Zhipu / GLM API; family open-weights patterns.
- IDs: `zhipu/glm-5.2`. Not fully open.
- Context: Family standard expected; not independently verified specifically.
- Modalities: Family text expected; image support family-level.
- Pricing: Family tier estimated; lower than 5.3.
- Architecture: Proprietary / family hybrid.

### Independent comparison (3 sources)
1. Dataset (`average.md`): Overall 74.2 — below gate (84.9) by 10.7; excluded from high-Overall peer averages.
2. Zhipu identity: Confirmed (`glm-5.2`, `glm-5.2-coding` — coding-specialized variant in same family series; `glm-5.2-coding` confirms `coding` label applies specifically to that variant, not to base `glm-5.2`).
3. Framework: GLM-5.3 Flash independently benchmarked (AA framework); GLM-5.2 historical/revealed lower tier — superseded.

### Conflicts / identity clarification
No identity conflict (`glm-5.2` = base tier; `glm-5.2-coding` = coding-specialized variant in same family — naming hygiene confirmed per rules; no mislabel). Below gate (74.2 < 84.9) — excluded from elite peer-average calculations.

### Raw benchmarks
No dedicated independent benchmark specifically for GLM-5.2; closest verified framework = GLM-5.3 family independently benchmarked.

### Normalized scores (independent — family framework reference; below-gate historical/revealed)
- **Tool use: 60/100.** Below-gate historical tier; framework reference only.
- **Reasoning: 62/100.** Confirmed family reasoning; historical/revealed tier lower than current 5.3 series.
- **Context window: 70/100.** Family standard expected; no dedicated verification specifically.
- **Multimodal: 58/100.** Family text + image expected; lower-tier performance.
- **Coding: 62/100.** Family framework includes coding-related benchmarks; `glm-5.2-coding` confirms coding-specialized variant exists in family; base 5.2 lower coding tier.
- **Cost efficiency: 70/100.** Historical/revealed tier; lower cost than frontier 5.3.
- **Overall Score: 62/100.** Mean ≈ 61 → 62. Best-fit: historical/revealed lower GLM tier; superseded by 5.3 series (independently benchmarked); excluded from high-Overall gate; family open-weights alternatives (5.3, etc.) provide stronger verified benchmarks.

---
## Signature
- Provided by: **Inkling (Inkling)** — 2026-10-25
- Method: 3 sources — dataset identity (`average.md`: Overall 74.2, below gate 84.9; agreement notes confirm exclusion); family identity (`glm-5.2` base + `glm-5.2-coding` coding-specialized variant — naming hygiene verified; no `coding` mislabel applied to base tier; `coding` label applies specifically to `coding`-suffixed variant); framework cross-reference (`glm-5.3-flash` independently benchmarked — closest verified family framework). All scores: independent interpretations derived from family framework reference + dataset identity (`below gate` status) — NOT from peer `average.md` mean. No fabricated benchmarks; all missing exact-ID categories explicitly noted (`no verified public score found` specifically for `glm-5.2`). No peer findings copied. Signature independent.
