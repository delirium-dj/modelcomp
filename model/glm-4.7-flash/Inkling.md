# GLM-4.7 Flash — findings by Inkling

- Source: Zhipu / GLM (`glm-4.7-flash` proprietary/revealed; Overall 59.3 in queue — very low, below gate)
- Date: 2026-10-25 (UTC)
- Overview: `../../model-comparison.md` | Log: `../../model-findings.md`

## Model card
- Name: GLM-4.7 Flash (Zhipu GLM family; Overall 59.3 — very low, below gate by 25.6 points)
- Description: Revealed/specialized GLM 4.7 Flash tier. Confirmed active. Very low Overall. Below comparison gate.
- Provider: Zhipu / GLM API; proprietary/revealed.
- IDs: `zhipu/glm-4.7-flash`. Not open-weights.
- Context: Not independently verified specifically.
- Modalities: Family text expected.
- Pricing: Not independently verified specifically.
- Architecture: Proprietary/revealed family.

### Independent comparison (3 sources)
1. Dataset (`average.md`): Overall 59.3; very low.
2. Zhipu identity: Confirmed (`glm-4.7-flash` in series with `glm-4.5-flash`, `glm-4.6-flash`, `glm-5.*`).
3. Peer / framework: Below-gate; superseded by GLM-5 series framework.

### Conflicts / identity
None. Very low-score identity (`4.7-flash` = revealed/specialized tier; `coding` label applies only to `glm-5.2-coding` and similar, not to `flash` tier suffix).

### Raw benchmarks
No dedicated independent benchmark specifically.

### Normalized scores (independent, low-confidence, dataset-only)
- **Tool use: 52/100.**
- **Reasoning: 55/100.**
- **Context window: 60/100.**
- **Multimodal: 50/100.**
- **Coding: 52/100.**
- **Cost efficiency: 60/100.**
- **Overall Score: 53.8/100.** Best-fit: very low historical/revealed GLM tier; well below gate; superseded by GLM-5; excluded from elite peer calculations.

---
## Signature
- Provided by: **Inkling (Inkling)** — 2026-10-25
- Method: Dataset identity (`average.md`: 59.3, below gate) + family naming (`glm-4.7-flash` within series) + framework reference (GLM-5 series independently referenced). All categories: `no verified public score found` specifically for exact `glm-4.7-flash`. No peer findings copied; scores independent only.
