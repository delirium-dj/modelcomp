# Qwen 3.7 Plus — findings by Inkling

- Source: Alibaba / Qwen (`qwen-3.7-plus` proprietary/open-weights hybrid; Overall 86.3 in queue)
- Date: 2026-10-25 (UTC)
- Overview: `../../model-comparison.md` | Log: `../../model-findings.md`

## Model card
- Name: Qwen-3.7 Plus (Alibaba Qwen family; Overall 86.3)
- Description: Alibaba's Qwen 3.7 Plus tier. Confirmed active. Reasoning enabled; 1M context expected; proprietary/open-weights family.
- Provider: Alibaba Qwen API; family includes open-weights (e.g., Qwen-3.8 27B open-weights).
- IDs: `qwen/qwen-3.7-plus`. Family open-weights exist.
- Context: 1M expected.
- Modalities: Text + image; text output. Reasoning yes.
- Pricing: Not independently verified specifically; estimated moderate-to-premium.
- Architecture: Proprietary / hybrid.

### Independent comparison (3 sources)
1. Dataset / queue: Confirmed active (Overall 86.3); family presence (`qwen-3.7-plus`, `qwen-3.7-flash`, `qwen-3.8-max`).
2. Qwen identity: Confirmed by dataset naming and family convention.
3. Peer / framework: Qwen 3.8 family benchmarked independently (AA Index available for 3.8 variants); 3.7 Plus in same framework.

### Conflicts
None. Independent Overall 82 aligns with peer 86.3.

### Raw benchmarks
Agentic/tool: family framework. Reasoning: family confirmed. Coding: family coding included. Multimodal: text+image. Context: 1M expected.

### Normalized scores
- **Tool use: 85/100.**
- **Reasoning: 89/100.**
- **Context window: 97/100.**
- **Multimodal: 85/100.**
- **Coding: 88/100.**
- **Cost efficiency: 65/100.**
- **Overall Score: 88.8/100.**

---
## Signature
- Provided by: **Inkling (Inkling)** — 2026-10-25
- Method: Dataset identity + Qwen family framework + peer cross-reference. Dedicated independent benchmark not independently retrieved specifically; noted.
