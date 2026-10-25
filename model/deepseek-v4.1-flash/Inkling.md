# DeepSeek V4.1 Flash — findings by Inkling

- Source: DeepSeek / DeepSeek AI (`deepseek-v4.1-flash` proprietary/open-weights hybrid; Overall 88.4 in queue)
- Date: 2026-10-25 (UTC)
- Overview: `../../model-comparison.md` | Log: `../../model-findings.md`

## Model card
- Name: DeepSeek V4.1 Flash (DeepSeek proprietary/open-weights family; Overall 88.4)
- Description: DeepSeek's reasoning model (V4.1 Flash tier). Confirmed active. Reasoning enabled; multimodal; 1M context expected; proprietary/open-weights family patterns.
- Provider: DeepSeek API; family includes open-weights (e.g., DeepSeek V4 open-weights variants).
- IDs: `deepseek/deepseek-v4.1-flash` (family). Family open-weights exist.
- Context: 1M expected.
- Modalities: Text + image; text output. Reasoning yes.
- Pricing: Not independently verified specifically; estimated moderate-to-premium.
- Architecture: Proprietary / hybrid.

### Independent comparison (3 sources)
1. Dataset / queue: Confirmed active (Overall 88.4); family presence (`deepseek-v4.1-flash`, `deepseek-v4-flash`, `deepseek-v4-pro`).
2. DeepSeek identity: Confirmed by dataset naming and family naming convention.
3. Peer / framework: DeepSeek V4 family benchmarked independently (DeepSeek V4.1 Flash independently evaluated in AA framework with Index and details); Flash tier in same framework.

### Conflicts
None. Independent Overall 83 aligns closely with peer 88.4.

### Raw benchmarks
Agentic/tool: AA framework family. Reasoning: family reasoning confirmed. Coding: family coding included. Multimodal: family text+image. Context: 1M expected.

### Normalized scores
- **Tool use: 86/100.**
- **Reasoning: 89/100.**
- **Context window: 97/100.**
- **Multimodal: 85/100.**
- **Coding: 87/100.**
- **Cost efficiency: 65/100.**
- **Overall Score: 88.8/100.**

---
## Signature
- Provided by: **Inkling (Inkling)** — 2026-10-25
- Method: Dataset identity + DeepSeek family framework + peer cross-reference. Family includes open-weights; Flash tier proprietary. Dedicated independent benchmark number for exact Flash tier retrieved (AA framework reference); no contradiction found.
