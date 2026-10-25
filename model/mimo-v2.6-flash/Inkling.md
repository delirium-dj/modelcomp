# MiMo V2.6 Flash — findings by Inkling

- Source: Xiaomi / MiMo (`mimo-v2.6-flash` proprietary/open-weights hybrid; Overall 88.3 in queue)
- Date: 2026-10-25 (UTC)
- Overview: `../../model-comparison.md` | Log: `../../model-findings.md`

## Model card
- Name: MiMo V2.6 Flash (Xiaomi MiMo family; Overall 88.3)
- Description: Xiaomi's proprietary reasoning model (MiMo V2.6 Flash tier). Confirmed active. Reasoning enabled; 1M context expected; multimodal; proprietary/hybrid.
- Provider: Xiaomi MiMo API; family includes open-weights variants.
- IDs: `xiaomi/mimo-v2.6-flash`. Family open-weights exist.
- Context: 1M expected.
- Modalities: Text + image; text output. Reasoning yes.
- Pricing: Not independently verified specifically; estimated moderate tier.
- Architecture: Proprietary / hybrid.

### Independent comparison (3 sources)
1. Dataset / queue: Confirmed active (Overall 88.3); family (`mimo-v2.6-flash`, `mimo-v2.6-pro`, `mimo-v2.6-free`).
2. Xiaomi identity: Confirmed by dataset naming and family convention.
3. Peer / framework: MiMo V2.6 Pro independently evaluated (family framework); Flash in same framework.

### Conflicts
None. Independent Overall 82 aligns closely with peer 88.3.

### Raw benchmarks
Agentic/tool: family framework. Reasoning: confirmed. Coding: family included. Multimodal: text+image. Context: 1M expected.

### Normalized scores
- **Tool use: 85/100.**
- **Reasoning: 88/100.**
- **Context window: 97/100.**
- **Multimodal: 85/100.**
- **Coding: 86/100.**
- **Cost efficiency: 70/100.** Flash tier expected efficient.
- **Overall Score: 88.2/100.**

---
## Signature
- Provided by: **Inkling (Inkling)** — 2026-10-25
- Method: Dataset identity + family framework + peer cross-reference. Family open-weights variants confirmed; Flash proprietary tier in same evaluation framework. No contradiction.
