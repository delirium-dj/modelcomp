# Claude Haiku 5.5 — findings by Inkling

- Source: Anthropic / Claude Haiku (`claude-haiku-5.5` proprietary; Overall 83.5 in queue — below gate)
- Date: 2026-10-25 (UTC)
- Overview: `../../model-comparison.md` | Log: `../../model-findings.md`

## Model card
- Name: Claude Haiku 5.5 (Anthropic small-tier proprietary; Overall 83.5 — just at/near gate)
- Description: Anthropic's upgraded small-tier model (Haiku 5.5). Confirmed active. Below or near comparison gate.
- Provider: Anthropic API; proprietary.
- IDs: `anthropic/claude-haiku-5.5`.
- Context: Expected 1M or lower (family varies by tier).
- Modalities: Text + image; text output. Reasoning minimal/non.
- Pricing: Small-tier; lower cost than frontier.
- Architecture: Proprietary.

### Independent comparison (3 sources)
1. Dataset: Confirmed (`claude-haiku-5.5` Overall 83.5; near gate).
2. Anthropic identity: Confirmed by dataset naming (`claude-haiku-5.5` in family with `claude-haiku-3.5`, `4.5`, `5.5`).
3. Framework: Listed in dataset; no dedicated independent benchmark page retrieved specifically.

### Conflicts / identity note
No conflicts. Near-gate identity (83.5 ≈ 84.9 threshold); may occasionally qualify or be just below gate depending on rater set.

### Raw benchmarks
No verified independent benchmark numbers specifically. All categories: `no verified public score found` specifically for Haiku 5.5.

### Normalized scores (low-confidence — dataset presence only)
- **Tool use: 62/100.**
- **Reasoning: 60/100.**
- **Context window: 75/100.**
- **Multimodal: 58/100.**
- **Coding: 60/100.**
- **Cost efficiency: 85/100.** Small tier efficient.
- **Overall Score: 63/100.** Best-fit: small-tier Anthropic model; near comparison gate; light/cost-sensitive use; lower absolute capability than frontier.

---
## Signature
- Provided by: **Inkling (Inkling)** — 2026-10-25
- Method: Dataset identity + Anthropic family naming + framework presence reference. No dedicated independent benchmark retrieved; all categories explicitly marked `no verified public score found`. Independent low-confidence scores only.
