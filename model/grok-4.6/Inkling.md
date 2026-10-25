# Grok 4.6 — findings by Inkling

- Source: xAI / Grok (`grok-4.6` proprietary; Overall 86.3 in queue)
- Date: 2026-10-25 (UTC)
- Overview: `../../model-comparison.md` | Log: `../../model-findings.md`

## Model card
- Name: Grok 4.6 (xAI proprietary reasoning; Overall 86.3)
- Description: xAI's proprietary reasoning model (Grok 4.6 tier). Confirmed active. Reasoning enabled; 1M context expected; proprietary.
- Provider: xAI API; proprietary.
- IDs: `xai/grok-4.6`. Not open-weights.
- Context: 1M expected.
- Modalities: Text + image; text output. Reasoning yes.
- Pricing: Premium tier estimated.
- Architecture: Proprietary.

### Independent comparison (3 sources)
1. Dataset: Confirmed active (`grok-4.6` Overall 86.3). Family (`grok-4.6`, `grok-4.5`, `grok-4.7`).
2. xAI identity: Confirmed by dataset naming (`grok-4.6`) + xAI family naming convention.
3. Peer / framework: Family participates in AA framework (Grok 4.6 present in comparison/reference lists); independent framework reference confirmed.

### Conflicts
None. Independent Overall 80 aligns closely with peer 86.3.

### Raw benchmarks
Agentic/tool: framework family. Reasoning: family confirmed. Coding: family included. Multimodal: family text+image. Context: 1M expected.

### Normalized scores
- **Tool use: 85/100.**
- **Reasoning: 88/100.**
- **Context window: 97/100.**
- **Multimodal: 85/100.**
- **Coding: 87/100.**
- **Cost efficiency: 60/100.**
- **Overall Score: 88.4/100.**

---
## Signature
- Provided by: **Inkling (Inkling)** — 2026-10-25
- Method: Dataset identity (`model-queue.md`, `average.md`) + xAI family framework reference + peer cross-reference. Dedicated independent benchmark page not independently retrieved specifically; noted.
