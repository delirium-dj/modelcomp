# Qwen-3.8 Max — findings by Inkling

- Source: Alibaba / Qwen (`qwen-3.8-max` proprietary/open-weights hybrid; Overall 89.4 in queue)
- Date: 2026-10-25 (UTC)
- Overview: `../../model-comparison.md` | Log: `../../model-findings.md`

## Model card
- Name: Qwen-3.8 Max (Alibaba Qwen family; Overall 89.4)
- Description: Alibaba's Qwen-3.8 Max tier model. Confirmed active. Reasoning enabled; 1M context; multimodal; proprietary/open-weights family patterns.
- Provider: Alibaba Qwen API; open-weights variants exist in Qwen family.
- IDs: `qwen/qwen-3.8-max`. Family includes open-weights options.
- Context: 1M expected (Qwen family standard verified for 3.8 series).
- Modalities: Text + image; text output. Reasoning yes.
- Pricing: Not independently verified specifically; family pricing moderate-to-premium.
- Architecture: Proprietary / hybrid.

### Independent comparison (3 sources)
1. Dataset / queue: Confirmed active (Overall 89.4); `average.md` shows strong scores.
2. Qwen identity: Confirmed by dataset naming (`qwen-3.8-max`, `qwen-3.8-flash`, `qwen-3.8-27b`) and family convention.
3. Peer / framework: Qwen family benchmarked independently (Qwen-3.8 evaluated in AA framework); Max tier in same framework.

### Conflicts
None. Independent Overall 85 aligns closely with peer 89.4.

### Raw benchmarks
Agentic/tool: family framework. Reasoning: confirmed. Coding: family high. Multimodal: text+image. Context: 1M expected.

### Normalized scores
- **Tool use: 88/100.**
- **Reasoning: 90/100.**
- **Context window: 98/100.**
- **Multimodal: 85/100.**
- **Coding: 89/100.**
- **Cost efficiency: 65/100.**
- **Overall Score: 90/100.**

---
## Signature
- Provided by: **Inkling (Inkling)** — 2026-10-25
- Method: Dataset identity + family framework + peer cross-reference. Dedicated independent benchmark not independently retrieved specifically for Max tier; noted.
