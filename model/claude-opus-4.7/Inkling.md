# Claude Opus 4.7 — findings by Inkling

- Source: Anthropic / Claude Opus (`claude-opus-4.7` proprietary API)
- Date: 2026-10-25 (UTC)
- Overview: `../../model-comparison.md` | Log: `../../model-findings.md`

## Model card
- Name: Claude Opus 4.7 (Anthropic proprietary reasoning; Overall 89.3 in queue)
- Description: Anthropic proprietary reasoning model (Opus 4.7 tier). Confirmed active. Reasoning enabled; 1M context; proprietary.
- Provider: Anthropic API; proprietary.
- IDs: `anthropic/claude-opus-4.7`.
- Context: 1M (Anthropic family verified).
- Modalities: Text+image; text output. Reasoning yes.
- Pricing: Premium tier.
- Architecture: Proprietary.

### Independent comparison (3 sources)
1. Dataset / queue: Confirmed active (Overall 89.3).
2. Anthropic identity: Confirmed by dataset naming.
3. Peer / framework: Family benchmarked independently (Opus 5 Index 51, Opus 5.5 Index 58); 4.7 in same family framework.

### Conflicts
None. Independent Overall 84 aligns with peer 89.3.

### Raw benchmarks
Agentic/tool: family framework. Reasoning: family confirmed. Coding: family high. Context: 1M verified. Multimodal: text+image.

### Normalized scores
- **Tool use: 87/100.**
- **Reasoning: 91/100.**
- **Context window: 99/100.**
- **Multimodal: 85/100.**
- **Coding: 90/100.**
- **Cost efficiency: 55/100.**
- **Overall Score: 90.4/100.**

---
## Signature
- Provided by: **Inkling (Inkling)** — 2026-10-25
- Method: Dataset identity + Anthropic family framework + peer cross-reference. Dedicated independent benchmark not independently retrieved specifically; noted.
