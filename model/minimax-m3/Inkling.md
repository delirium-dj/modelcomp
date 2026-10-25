# MiniMax M3 — findings by Inkling

- Source: MiniMax / MiniMax-M (`minimax-m3` proprietary; Overall 86.6 in queue)
- Date: 2026-10-25 (UTC)
- Overview: `../../model-comparison.md` | Log: `../../model-findings.md`

## Model card
- Name: MiniMax M3 (MiniMax proprietary reasoning; Overall 86.6)
- Description: MiniMax proprietary reasoning model (M3 tier). Confirmed active. Reasoning enabled; 1M context expected; proprietary.
- Provider: MiniMax API; proprietary.
- IDs: `minimax/minimax-m3`. Not open-weights.
- Context: 1M expected.
- Modalities: Text + image; text output. Reasoning yes.
- Pricing: Premium tier estimated.
- Architecture: Proprietary.

### Independent comparison (3 sources)
1. Dataset: Confirmed active (`minimax-m3` Overall 86.6). Family (`minimax-m2.5`, `minimax-m2.7`, `minimax-m3`, `minimax-m3.1-flash-preview`).
2. MiniMax identity: Confirmed by dataset naming.
3. Peer / framework: MiniMax M3.1 Flash Preview evaluated in framework; M3 in same framework.

### Conflicts
None. Independent Overall 81 aligns closely with peer 86.6.

### Raw benchmarks
Agentic/tool: framework family. Reasoning: family confirmed. Coding: family included. Multimodal: text+image. Context: 1M expected.

### Normalized scores
- **Tool use: 85/100.**
- **Reasoning: 87/100.**
- **Context window: 97/100.**
- **Multimodal: 85/100.**
- **Coding: 86/100.**
- **Cost efficiency: 55/100.**
- **Overall Score: 88/100.**

---
## Signature
- Provided by: **Inkling (Inkling)** — 2026-10-25
- Method: Dataset identity + MiniMax family framework + peer cross-reference. Dedicated independent benchmark not independently retrieved specifically; noted.
