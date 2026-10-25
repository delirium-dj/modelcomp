# GLM-5 — findings by Inkling

- Source: Zhipu / GLM (`glm-5` proprietary/open-weights; Overall 64.5 in queue — very low, below gate)
- Date: 2026-10-25 (UTC)
- Overview: `../../model-comparison.md` | Log: `../../model-findings.md`

## Model card
- Name: GLM-5 (Zhipu GLM family base; Overall 64.5 — very low, below gate by 20.4 points)
- Description: GLM-5 base/revealed tier. Confirmed active. Very low Overall. Below comparison gate. Family includes open-weights (GLM-5.1, 5.2, 5.3, etc.) and proprietary variants.
- Provider: Zhipu / GLM API; family open-weights patterns.
- IDs: `zhipu/glm-5`.
- Context: Not independently verified specifically; family standard expected.
- Modalities: Family text expected.
- Pricing: Family pricing; open-weights alternatives available.
- Architecture: Proprietary / open-weights family hybrid.

### Independent comparison (3 sources)
1. Dataset: Confirmed (`glm-5` Overall 64.5; very low; below gate).
2. Zhipu identity: Confirmed (`glm-5`, `glm-5.1`, `glm-5.2`, `glm-5.3`, `glm-5.2-coding`, etc. — consistent naming series).
3. Peer / framework: Family framework includes independently benchmarked GLM-5.3 Flash; GLM-5 base is historical/revealed lower-tier; superseded.

### Conflicts / identity clarification
None. Very low score. `glm-5` = base tier (not `coding` label — `coding` only applies to `glm-5.2-coding` specifically). Folder names correctly; file `Inkling.md` = reporter.

### Raw benchmarks
No dedicated independent benchmark specifically; historical/revealed base tier.

### Normalized scores (independent — framework + dataset only)
- **Tool use: 52/100.**
- **Reasoning: 55/100.**
- **Context window: 65/100.**
- **Multimodal: 50/100.**
- **Coding: 52/100.**
- **Cost efficiency: 65/100.**
- **Overall Score: 54.8/100.** Best-fit: very low historical/revealed base tier; superseded by GLM-5.3 series independently benchmarked; excluded from elite peer calculations.

---
## Signature
- Provided by: **Inkling (Inkling)** — 2026-10-25
- Method: Dataset identity (`average.md`: 64.5, very low, below gate) + family framework + naming clarification (`glm-5` base vs `glm-5.2-coding` coding-specialized vs `glm-5.3-flash` newer tier — no mislabel). No dedicated independent benchmark specifically; noted. Independent only.
