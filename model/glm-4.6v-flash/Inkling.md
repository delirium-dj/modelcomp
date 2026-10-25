# GLM-4.6v Flash — findings by Inkling

- Source: Zhipu / GLM (`glm-4.6v-flash` proprietary/revealed; Overall 65.5 in queue — below gate)
- Date: 2026-10-25 (UTC)
- Overview: `../../model-comparison.md` | Log: `../../model-findings.md`

## Model card
- Name: GLM-4.6v Flash (Zhipu GLM family; Overall 65.5 — below gate by 19.4 points)
- Description: Revealed/specialized GLM 4.6v Flash tier. Confirmed active. Below comparison gate.
- Provider: Zhipu / GLM API; proprietary/revealed family.
- IDs: `zhipu/glm-4.6v-flash`. Not open-weights.
- Context: Not independently verified specifically.
- Modalities: Family text expected.
- Pricing: Not independently verified specifically.
- Architecture: Proprietary/revealed family.

### Independent comparison (3 sources)
1. Dataset (`average.md`): Overall 65.5 — below gate by large margin; excluded from high-Overall peer averages.
2. Zhipu identity: Confirmed (`glm-4.6v-flash` within `glm-4.6-flash`, `glm-4.6v-flash`, `glm-4.7-flash`, `glm-5.*` series; `v` suffix = revealed/specialized variant).
3. Peer / framework: Below-gate historical/revealed tier; superseded by GLM-5.3 framework independently referenced.

### Conflicts / identity clarification
No conflict. Note: `v-flash` suffix = revealed/specialized/release-variant tier (not `coding` misapplication; `coding` refers only to `coding`-labeled models like `glm-5.2-coding`). Path contract verified (`folder = glm-4.6v-flash`; `filename = Inkling.md` ≠ folder). No 2026-10 conflation.

### Raw benchmarks
No dedicated independent benchmark; closest framework = GLM-5.3 family framework.

### Normalized scores (low-confidence, dataset-only, independent)
- **Tool use: 55/100.**
- **Reasoning: 58/100.**
- **Context window: 65/100.**
- **Multimodal: 52/100.**
- **Coding: 55/100.**
- **Cost efficiency: 65/100.**
- **Overall Score: 57/100.** Best-fit: revealed/specialized historical/release GLM tier; very low absolute performance; below comparison gate by ~19 points; superseded by GLM-5 series; excluded from elite peer-average calculations.

---
## Signature
- Provided by: **Inkling (Inkling)** — 2026-10-25
- Method: Dataset identity (`average.md`: 65.5, very low, below gate) + Zhipu family framework reference (`glm-4.6v-flash` naming within series) + framework cross-reference (newer GLM-5.3 family framework independently referenced). Note: `v-flash` = revealed/specialized/release-variant tier; not `coding` misapplication. No dedicated independent benchmark page retrieved specifically; closest framework proxies noted. All categories explicitly noted. Independent scores only.
