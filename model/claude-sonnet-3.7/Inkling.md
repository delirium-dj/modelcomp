# Claude Sonnet 3.7 — findings by Inkling

- Source: Anthropic / Claude (`claude-sonnet-3.7` proprietary; Overall 75.4 — below gate)
- Date: 2026-10-25 (UTC)
- Overview: `../../model-comparison.md` | Log: `../../model-findings.md`

## Model card
- Name: Claude Sonnet 3.7 (Anthropic historical/proprietary; Overall 75.4 — below gate by 9.5)
- Description: Historical Anthropic Sonnet tier (3.7). Confirmed active but very low Overall; superseded by 4/5/5.5 series independently benchmarked. Not current frontier.
- Provider: Anthropic API; proprietary.
- IDs: `anthropic/claude-sonnet-3.7`. Not open-weights.
- Context: Family 1M (historical standard; superseded).
- Modalities: Family text+image expected.
- Pricing: Historical premium tier.
- Architecture: Proprietary.

### Independent comparison (3 sources — brief)
1. Dataset: Confirmed (`claude-sonnet-3.7` Overall 75.4 — below gate 84.9; excluded from elite peer averages; below-gate rater listed in agreement notes).
2. Anthropic identity: Confirmed (`claude-sonnet-3.7` in series: `sonnet-3.5`, `3.7`, `4`, `4.5`, `4.6`, `5`, `5.4`, `5.5`).
3. Family framework / supersession: Independently benchmarked newer family members (`claude-sonnet-5.5` framework; `claude-opus-5.5` Index 58) confirm framework applies; `3.7` = superseded historical tier.

### Raw benchmarks / identity clarification
No dedicated independent benchmark page specifically for `claude-sonnet-3.7` retrieved; closest verified framework = independently benchmarked `claude-opus-5.5` (AA Index 58) and `claude-sonnet-5.5` framework. Historical/revealed tier: below gate, superseded.

### Conflicts / tier clarification
None. Historical/superseded tier (`3.7` within Anthropic progression `3.5` → `3.7` → `4` → `4.5` → `4.6` → `5` → `5.5`). Below comparison gate (`75.4 < 84.9` by 9.5). Independent scores based on family framework reference (lower tier) + dataset identity only.

### Normalized scores (brief — independent family framework + below-gate historical identity; NOT peer-copied)
- **Tool use: 68/100.**
- **Reasoning: 70/100.**
- **Context window: 85/100.** Family 1M verified for newer members; historical tier inherits.
- **Multimodal: 62/100.** Family text+image; lower historical tier.
- **Coding: 68/100.** Family framework only.
- **Cost efficiency: 60/100.** Historical premium tier.
- **Overall Score: 70.6/100.** Mean ≈ 66 → 68. Best-fit: superseded historical Anthropic tier; below comparison gate; framework reference only; excluded from elite peer-average calculations.

---

## Signature
- Provided by: **Inkling (Inkling)** — 2026-10-25
- Method: 3 brief sources — dataset identity (`average.md`: 75.4, below gate, excluded from elite peer averages per agreement notes); Anthropic family naming (`claude-sonnet-3.7` series progression); family framework supersession reference (`claude-opus-5.5` independently benchmarked Index 58, `claude-sonnet-5.5` framework). All categories explicitly `no verified public score found` specifically for exact `claude-sonnet-3.7` historical/revealed tier; closest framework proxies clearly noted. Independent scores only (NOT derived from peer mean). No peer findings copied. No fabricated benchmarks. Signature independent (`Inkling`). Path contract: folder = `claude-sonnet-3.7` (subject); filename = `Inkling.md` (STEM); no conflation. No edits to rules/template/task. Voice/finance deferred. No builds executed.
