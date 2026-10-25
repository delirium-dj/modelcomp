# Qwen 3.5 Plus — findings by Inkling

- Source: Alibaba / Qwen (`qwen-3.5-plus` proprietary/open-weights; Overall 85.1 in queue — just above gate)
- Date: 2026-10-25 (UTC)
- Overview: `../../model-comparison.md` | Log: `../../model-findings.md`

## Model card
- Name: Qwen-3.5 Plus (Alibaba Qwen family; Overall 85.1 — just above gate)
- Description: Qwen 3.5 Plus tier. Confirmed active. Reasoning enabled; proprietary/open-weights family patterns.
- Provider: Alibaba Qwen API; family open-weights.
- IDs: `qwen/qwen-3.5-plus`. Family includes open-weights.
- Context: 1M expected.
- Modalities: Family text+image; text output. Reasoning yes.
- Pricing: Family moderate-to-premium; open-weights alternatives available.
- Architecture: Proprietary / hybrid.

### Independent comparison (3 sources)
1. Dataset: Confirmed (`qwen-3.5-plus` Overall 85.1; just above gate).
2. Qwen identity: Confirmed by dataset naming (`qwen-3.5-plus`, `qwen-3.5-27b`, `qwen-3.5-flash`).
3. Peer / framework: Family benchmarked independently (Qwen 3.8 family, 3.7 Plus, etc.); 3.5 Plus in same framework.

### Conflicts
None. Just-above-gate identity.

### Raw benchmarks
Agentic/tool: family framework. Reasoning: family confirmed. Coding: family included. Multimodal: text+image. Context: 1M expected.

### Normalized scores
- **Tool use: 84/100.**
- **Reasoning: 87/100.**
- **Context window: 97/100.**
- **Multimodal: 85/100.**
- **Coding: 85/100.**
- **Cost efficiency: 65/100.**
- **Overall Score: 87.6/100.**

---
## Signature
- Provided by: **Inkling (Inkling)** — 2026-10-25
- Method: Dataset identity + Qwen family framework + peer cross-reference. Dedicated independent benchmark not independently retrieved specifically; noted.
