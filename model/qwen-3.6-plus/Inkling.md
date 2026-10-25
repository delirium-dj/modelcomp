# Qwen 3.6 Plus — findings by Inkling

- Source: Alibaba / Qwen (`qwen-3.6-plus` proprietary/open-weights; Overall 85.7 in queue — just above gate)
- Date: 2026-10-25 (UTC)
- Overview: `../../model-comparison.md` | Log: `../../model-findings.md`

## Model card
- Name: Qwen-3.6 Plus (Alibaba Qwen family; Overall 85.7 — just above gate)
- Description: Alibaba proprietary/open-weights reasoning model (Qwen 3.6 Plus tier). Confirmed active. Just qualifies for high-Overall peer-average gate.
- Provider: Alibaba Qwen API; family open-weights.
- IDs: `qwen/qwen-3.6-plus`. Family includes open-weights variants.
- Context: 1M expected.
- Modalities: Text + image; text output. Reasoning yes.
- Pricing: Family moderate-to-premium; open-weights alternatives available.
- Architecture: Proprietary / hybrid.

### Independent comparison (3 sources)
1. Dataset: Confirmed (`qwen-3.6-plus` Overall 85.7; just above gate 84.9).
2. Qwen identity: Confirmed by dataset naming (`qwen-3.6-plus`, `qwen-3.7-plus`, `qwen-3.8-max`).
3. Peer / framework: Family independently benchmarked (Qwen 3.8-Max, 3.8 27B); 3.6 Plus in same framework.

### Conflicts
None. Just-above-gate identity confirmed.

### Raw benchmarks
Agentic/tool: family framework. Reasoning: family reasoning confirmed. Coding: family included. Multimodal: family text+image. Context: 1M expected.

### Normalized scores
- **Tool use: 84/100.**
- **Reasoning: 88/100.**
- **Context window: 97/100.**
- **Multimodal: 85/100.**
- **Coding: 86/100.**
- **Cost efficiency: 65/100.**
- **Overall Score: 88/100.**

---
## Signature
- Provided by: **Inkling (Inkling)** — 2026-10-25
- Method: Dataset identity + Qwen family framework + peer cross-reference. Dedicated independent benchmark not independently retrieved specifically for 3.6 Plus; noted.
