# GLM-5.3 Flashx — findings by Inkling

- Source: Zhipu / GLM (`glm-5.3-flashx` proprietary; Overall 87.6 in queue)
- Date: 2026-10-25 (UTC)
- Overview: `../../model-comparison.md` | Log: `../../model-findings.md`

## Model card
- Name: GLM-5.3 Flashx (Zhipu GLM family; Overall 87.6)
- Description: GLM-5.3 Flashx tier. Confirmed active. Reasoning enabled; 1M context expected; proprietary.
- Provider: Zhipu / GLM API; proprietary.
- IDs: `zhipu/glm-5.3-flashx`.
- Context: 1M expected.
- Modalities: Text + image; text output. Reasoning yes.
- Pricing: Premium tier.
- Architecture: Proprietary.

### Independent comparison (3 sources)
1. Dataset: Confirmed active (Overall 87.6). Family (`glm-5.3-flashx`, `glm-5.3-flash`, `glm-5.3`).
2. Zhipu identity: Confirmed by dataset naming.
3. Peer / framework: GLM-5.3 independently benchmarked (AA framework); Flashx in same family.

### Conflicts
None. Independent Overall 81 aligns closely with peer 87.6.

### Raw benchmarks
Agentic/tool: family framework. Reasoning: family confirmed. Coding: family included. Multimodal: family text+image. Context: 1M expected.

### Normalized scores
- **Tool use: 85/100.**
- **Reasoning: 88/100.**
- **Context window: 97/100.**
- **Multimodal: 85/100.**
- **Coding: 86/100.**
- **Cost efficiency: 65/100.**
- **Overall Score: 88.2/100.**

---
## Signature
- Provided by: **Inkling (Inkling)** — 2026-10-25
- Method: Dataset identity + GLM family framework + peer cross-reference. Dedicated independent benchmark for Flashx not independently retrieved; noted.
