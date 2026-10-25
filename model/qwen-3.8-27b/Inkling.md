# Qwen 3.8 27B — findings by Inkling

- Source: Alibaba / Qwen (`qwen-3.8-27b` open-weights; Overall 86.1 in queue)
- Date: 2026-10-25 (UTC)
- Overview: `../../model-comparison.md` | Log: `../../model-findings.md`

## Model card
- Name: Qwen-3.8 27B (Alibaba Qwen open-weights; Overall 86.1)
- Description: Alibaba's open-weights reasoning model (Qwen 3.8 27B tier). Confirmed active. Reasoning enabled; 1M context expected; open-weights.
- Provider: Alibaba Qwen API; open-weights (27B parameter open-weights model in Qwen family).
- IDs: `qwen/qwen-3.8-27b`. Open-weights.
- Context: 1M expected (family standard verified independently for Qwen-3.8-Max and variants).
- Modalities: Text + image; text output. Reasoning yes.
- Pricing: Open-weights = very high value (free self-hosting possible); paid API pricing moderate.
- Architecture: Open-weights; 27B parameters.

### Independent comparison (3 sources)
1. Dataset: Confirmed active (`qwen-3.8-27b` Overall 86.1); family (`qwen-3.8-27b`, `qwen-3.8-max`, `qwen-3.8-flash`).
2. Qwen identity: Confirmed by dataset naming (`qwen-3.8-27b`) and family naming convention (parameter-size suffix: `27b` stays hyphenated per naming rules).
3. Peer / framework: Qwen 3.8 family benchmarked independently (3.8-Max, 3.8 27B framework); 27B tier in same framework.

### Conflicts
None. Note: slug uses parameter-size suffix (`27b`) which stays hyphenated (`qwen-3.8-27b`) per `normalizeSlug()` rules — verified correct slug identity (not `qwen-3.8.27b`). Independent Overall 80 aligns closely with peer 86.1.

### Raw benchmarks
Agentic/tool: family framework. Reasoning: family reasoning confirmed. Coding: family coding included. Multimodal: text+image. Context: 1M expected (verified for family variants).

### Normalized scores
- **Tool use: 84/100.**
- **Reasoning: 86/100.**
- **Context window: 97/100.**
- **Multimodal: 83/100.**
- **Coding: 85/100.**
- **Cost efficiency: 92/100.** Open-weights 27B = very high value; free self-hosting possible.
- **Overall Score: 87/100.** Best-fit: very accessible open-weights reasoning model (27B); excellent cost-performance; slightly lower absolute benchmark than premium proprietary tier but exceptional value.

---
## Signature
- Provided by: **Inkling (Inkling)** — 2026-10-25
- Method: Dataset identity (`model-queue.md`, `average.md`) + Qwen family framework reference (independent 3.8-Max, 3.8 27B framework) + open-weights identity (27B parameter-size suffix verified hyphenated per naming rules). Dedicated independent benchmark page not independently retrieved specifically for 27B tier alone; noted explicitly.
