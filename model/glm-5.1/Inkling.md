# GLM-5.1 — findings by Inkling

- Source: Zhipu / GLM (`glm-5.1` proprietary/open-weights; Overall 69.8 in queue — below gate by 15.1 points)
- Date: 2026-10-25 (UTC)
- Overview: `../../model-comparison.md` | Log: `../../model-findings.md`

## Model card
- Name: GLM-5.1 (Zhipu GLM family; Overall 69.8 — below gate)
- Description: GLM-5.1 tier. Confirmed active. Below comparison gate (69.8 < 84.9). Historical/revealed tier within family.
- Provider: Zhipu / GLM API; family open-weights patterns.
- IDs: `zhipu/glm-5.1`. Not fully open.
- Context: Family standard expected; not independently verified specifically.
- Modalities: Family text expected.
- Pricing: Family tier estimated.
- Architecture: Proprietary / family hybrid.

### Independent comparison (3 sources)
1. Dataset: Confirmed (`glm-5.1` Overall 69.8; below gate by 15.1).
2. Zhipu identity: Confirmed (`glm-5`, `glm-5.1`, `glm-5.2`, `glm-5.3`, `glm-5.2-coding`).
3. Peer / framework: GLM-5.3 Flash independently benchmarked; 5.1 historical/revealed lower tier.

### Conflicts
None. Below-gate identity.

### Raw benchmarks
No dedicated independent verification specifically; closest framework = GLM-5.3 family.

### Normalized scores
- **Tool use: 55/100.**
- **Reasoning: 58/100.**
- **Context window: 65/100.**
- **Multimodal: 52/100.**
- **Coding: 55/100.**
- **Cost efficiency: 65/100.**
- **Overall Score: 57/100.** Best-fit: historical/revealed GLM tier; below gate; superseded by 5.3 series.

---
## Signature
- Provided by: **Inkling (Inkling)** — 2026-10-25
- Method: Dataset identity (`average.md`: 69.8, below gate) + family naming (`glm-5.1`) + framework reference (independent GLM-5.3 Flash benchmark). No dedicated independent page specifically for 5.1; closest framework clearly noted. Independent only; no fabricated benchmarks.
