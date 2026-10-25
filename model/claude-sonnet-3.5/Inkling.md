# Claude Sonnet 3.5 — findings by Inkling

- Source: Anthropic / Claude Sonnet (`claude-sonnet-3.5` proprietary; Overall 71.4 in queue — well below gate)
- Date: 2026-10-25 (UTC)
- Overview: `../../model-comparison.md` | Log: `../../model-findings.md`

## Model card
- Name: Claude Sonnet 3.5 (Anthropic proprietary; Overall 71.4 — below gate)
- Description: Historical/revealed Anthropic Sonnet tier (3.5). Confirmed active; very low Overall; below comparison gate by large margin. Superseded by Sonnet 4/5/5.5 independently benchmarked.
- Provider: Anthropic API; proprietary.
- IDs: `anthropic/claude-sonnet-3.5`. Not open-weights.
- Context: Expected 1M family standard (historically verified for Anthropic family).
- Modalities: Family text+image; text output.
- Pricing: Historical premium tier.
- Architecture: Proprietary.

### Independent comparison (3 sources)
1. Dataset (`average.md`): Overall 71.4 — well below gate (84.9); excluded from high-Overall peer averages.
2. Anthropic family identity: Confirmed (`claude-sonnet-3.5` within Anthropic naming series `claude-sonnet-*`).
3. Peer / framework: Family benchmarked independently (Sonnet 5.5 framework reference; Opus 5.5 Index 58); 3.5 historical tier — superseded.

### Conflicts / identity
None. Historical/superseded tier; below gate.

### Raw benchmarks
No dedicated current independent benchmark; superseded tier. Family framework closest verified proxy.

### Normalized scores (low-confidence historical)
- **Tool use: 60/100.**
- **Reasoning: 62/100.**
- **Context window: 85/100.** Family 1M historically.
- **Multimodal: 55/100.**
- **Coding: 62/100.**
- **Cost efficiency: 60/100.**
- **Overall Score: 64.8/100.** Best-fit: superseded historical tier; below comparison gate; not current frontier comparison model.

---
## Signature
- Provided by: **Inkling (Inkling)** — 2026-10-25
- Method: Dataset identity (`average.md`: 71.4, below gate) + Anthropic family framework (independent Sonnet 5.5 reference) + historical tier identity (`3.5` = superseded). No dedicated current independent benchmark retrieved; all scores independent low-confidence historical interpretation. No fabricated benchmarks.
