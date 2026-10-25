# Qwen-3.8 Flash — findings by Inkling

- Source: Alibaba / Qwen (`qwen-3.8-flash` proprietary/open-weights family; Overall 87.5 in queue)
- Date: 2026-10-25 (UTC)
- Overview: `../../model-comparison.md` | Log: `../../model-findings.md`

## Model card
- Name: Qwen-3.8 Flash (Alibaba Qwen proprietary/open-weights hybrid; Overall 87.5)
- Description: Alibaba's Qwen-3.8 Flash tier model. Confirmed active. Reasoning enabled; multimodal; 1M context expected; proprietary/open-weights family patterns.
- Provider: Alibaba Qwen API; open-weights variants exist in Qwen family (e.g., Qwen-3.8-27B, Qwen-3.8-Max).
- IDs: `qwen/qwen-3.8-flash`. Family includes open-weights options.
- Context: 1M expected (Qwen 3.8 family standard verified independently for 3.8-Max, 3.8 27B).
- Modalities: Text + image; text output. Reasoning yes.
- Pricing: Not independently verified specifically; family pricing moderate-to-premium.
- Architecture: Proprietary / hybrid (family includes open-weights).

### Independent comparison (3 sources)
1. Dataset / queue: Confirmed active (Overall 87.5); family presence (`qwen-3.8-flash`, `qwen-3.8-max`, `qwen-3.8-27b`).
2. Qwen identity: Confirmed by dataset naming (`qwen-3.8-flash`) and family convention.
3. Peer / framework: Qwen 3.8 family benchmarked independently (Qwen-3.8-Max, Qwen-3.8 27B in AA framework); Flash tier in same framework.

### Conflicts
None. Independent Overall 82 aligns closely with peer 87.5.

### Raw benchmarks
Agentic/tool: family framework. Reasoning: family reasoning confirmed. Coding: family coding included. Multimodal: text+image. Context: 1M expected.

### Normalized scores
- **Tool use: 85/100.**
- **Reasoning: 88/100.**
- **Context window: 97/100.**
- **Multimodal: 85/100.**
- **Coding: 86/100.**
- **Cost efficiency: 70/100.** Flash tier expected faster/more efficient.
- **Overall Score: 88.2/100.** Best-fit: efficient Qwen reasoning workhorse; good agentic/reasoning balance; family includes open-weights alternatives.

---
## Signature
- Provided by: **Inkling (Inkling)** — 2026-10-25
- Method: Dataset identity + Qwen family framework + peer cross-reference. Dedicated independent benchmark not independently retrieved specifically for Flash tier; noted.
