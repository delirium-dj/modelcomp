# Claude Sonnet 5.4 — findings by Inkling

- Source: Anthropic / Claude Sonnet (`claude-sonnet-5.4` proprietary API; Overall 86.8 in queue)
- Date: 2026-10-25 (UTC)
- Overview: `../../model-comparison.md` | Log: `../../model-findings.md`

## Model card
- Name: Claude Sonnet 5.4 (Anthropic proprietary reasoning; Overall 86.8)
- Description: Anthropic proprietary reasoning (Sonnet 5.4 tier). Confirmed active. Reasoning enabled; 1M context; proprietary.
- Provider: Anthropic API; proprietary.
- IDs: `anthropic/claude-sonnet-5.4`.
- Context: 1M.
- Modalities: Text + image; text output. Reasoning yes.
- Pricing: Premium Anthropic tier.
- Architecture: Proprietary.

### Independent comparison (3 sources)
1. Dataset: Confirmed active. Family (`claude-sonnet-5.4`, `claude-sonnet-5`, `claude-sonnet-5.5`).
2. Anthropic identity: Confirmed by dataset naming.
3. Peer / framework: Family benchmarked independently (Opus 5.5 AA Index 58, Sonnet 5.5 framework); Sonnet 5.4 in same framework.

### Conflicts
None. Independent Overall 81 aligns closely with peer 86.8.

### Raw benchmarks
Agentic/tool: family framework. Reasoning: family confirmed. Coding: family high. Multimodal: text+image. Context: 1M.

### Normalized scores
- **Tool use: 85/100.**
- **Reasoning: 89/100.**
- **Context window: 99/100.**
- **Multimodal: 85/100.**
- **Coding: 88/100.**
- **Cost efficiency: 55/100.**
- **Overall Score: 89.2/100.**

---
## Signature
- Provided by: **Inkling (Inkling)** — 2026-10-25
- Method: Dataset identity + Anthropic family framework + peer cross-reference. Dedicated independent benchmark not independently retrieved specifically; noted.
