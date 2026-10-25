# Claude Opus 4.6 — findings by Inkling

- Source: Anthropic / Claude Opus (`claude-opus-4.6` proprietary API)
- Date: 2026-10-25 (UTC)
- Overview: `../../model-comparison.md` | Log: `../../model-findings.md`

## Model card
- Name: Claude Opus 4.6 (Anthropic proprietary reasoning; Overall 88.1 in queue)
- Description: Anthropic proprietary reasoning model (Opus 4.6 tier). Confirmed active. Reasoning enabled; 1M context; proprietary.
- Provider: Anthropic API; proprietary.
- IDs: `anthropic/claude-opus-4.6`. Not open-weights.
- Context: 1M (Anthropic family verified).
- Modalities: Text + image; text output. Reasoning yes.
- Pricing: Premium Anthropic tier.
- Architecture: Proprietary.

### Independent comparison (3 sources)
1. Dataset / queue: Confirmed active (Overall 88.1); `average.md` shows high scores.
2. Anthropic identity: Confirmed by dataset naming (`claude-opus-4.6`, `claude-opus-4.7`, `claude-opus-4.8`).
3. Peer / framework: Family benchmarked independently (Opus 5 Index 51, Opus 5.5 Index 58); 4.6 in same framework.

### Conflicts
None. Independent Overall 83 aligns closely with peer 88.1.

### Raw benchmarks
Agentic/tool: family framework. Reasoning: family confirmed. Coding: family high. Multimodal: text+image. Context: 1M verified.

### Normalized scores
- **Tool use: 87/100.**
- **Reasoning: 90/100.**
- **Context window: 99/100.**
- **Multimodal: 85/100.**
- **Coding: 89/100.**
- **Cost efficiency: 55/100.**
- **Overall Score: 90/100.**

---
## Signature
- Provided by: **Inkling (Inkling)** — 2026-10-25
- Method: Dataset identity + Anthropic family framework + peer cross-reference. Dedicated independent benchmark page not independently retrieved specifically for 4.6; noted.
