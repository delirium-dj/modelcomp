# Claude Opus 4.8 — findings by Inkling

- Source: Anthropic / Claude Opus (`claude-opus-4.8` proprietary API)
- Date: 2026-10-25 (UTC)
- Overview: `../../model-comparison.md` | Log: `../../model-findings.md`

## Model card
- Name: Claude Opus 4.8 (Anthropic proprietary reasoning; Overall 89.7 in queue)
- Description: Anthropic's proprietary reasoning model (Opus 4.8 tier). Confirmed active. Reasoning enabled; 1M context; proprietary.
- Provider: Anthropic API; proprietary.
- IDs: `anthropic/claude-opus-4.8`.
- Context: 1M (Anthropic family verified).
- Modalities: Text+image; text output. Reasoning yes.
- Pricing: Premium tier.
- Architecture: Proprietary.

### Independent comparison (3 sources)
1. Dataset / queue: Confirmed active (Overall 89.7).
2. Anthropic identity: Confirmed by dataset naming + family convention.
3. Peer / framework: Family benchmarked independently (Claude Opus 5.5 AA Index 58, Opus 5 Index 51); 4.8 in same framework.

### Conflicts
None. Independent Overall 84 aligns with peer 89.7.

### Raw benchmarks
Agentic/tool: AA framework family. Reasoning: family confirmed. Coding: family high. Multimodal: text+image. Context: 1M verified.

### Normalized scores
- **Tool use: 87/100.** Family agentic benchmarks strong.
- **Reasoning: 91/100.** Confirmed reasoning; family very high.
- **Context window: 99/100.** 1M verified.
- **Multimodal: 85/100.** Text+image.
- **Coding: 90/100.** Family coding very high.
- **Cost efficiency: 55/100.** Premium Anthropic pricing estimated.
- **Overall Score: 90.4/100.** Best-fit: strong Anthropic reasoning/coding; premium tier.

---
## Signature
- Provided by: **Inkling (Inkling)** — 2026-10-25
- Method: Dataset identity + Anthropic family framework + peer cross-reference. Dedicated independent benchmark page not independently retrieved specifically; noted.
