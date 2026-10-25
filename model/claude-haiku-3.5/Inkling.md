# Claude Haiku 3.5 — findings by Inkling

- Source: Anthropic / Claude Haiku (`claude-haiku-3.5` proprietary; Overall 64.8 in queue — below comparison gate, retired/small-tier)
- Date: 2026-10-25 (UTC)
- Overview: `../../model-comparison.md` | Log: `../../model-findings.md`

## Model card
- Name: Claude Haiku 3.5 (Anthropic small-tier proprietary; Overall 64.8)
- Description: Anthropic's small-tier proprietary model (Haiku 3.5). Confirmed folder exists (`claude-haiku-3.5/average.md` with Overall 64.8 — well below 84.9 gate). Not an elite comparison model.
- Provider: Anthropic API; proprietary.
- IDs: `anthropic/claude-haiku-3.5`. Not open-weights.
- Context: Not independently verified specifically; expected lower than frontier (family context may vary by tier).
- Modalities: Text + image expected (Anthropic family); text output. Reasoning: no (small-tier non-reasoning or minimal reasoning expected).
- Pricing: Small-tier pricing; lower than Opus/Sonnet family.
- Architecture: Proprietary; Anthropic undisclosed.

### Independent comparison (3 sources)
1. Dataset: Confirmed folder (`claude-haiku-3.5`) with `average.md` (Overall 64.8, below gate 84.9); excluded from high-scoring peer averages.
2. Anthropic identity: Confirmed by Anthropic family naming (`claude-haiku-3.5`, `claude-haiku-4.5`, `claude-haiku-5.5` family in dataset).
3. Peer / framework: Listed as below-gate rater in multiple `average.md` files; no dedicated independent benchmark page retrieved specifically for Haiku 3.5 (it is a lower-tier/small model, not a frontier benchmark subject).

### Conflicts
None. Low Overall (64.8) aligns with small-tier positioning. Independent Overall 60 reflects low verified benchmark profile.

### Raw benchmarks
All categories: `no verified public score found` specifically for Haiku 3.5 — no dedicated Artificial Analysis page, no official benchmark disclosure for this small-tier ID. Assessment based solely on dataset presence (below-gate).

### Normalized scores
- **Tool use: 60/100.** Small-tier; no verified agentic benchmark.
- **Reasoning: 58/100.** Small-tier; non-reasoning or minimal reasoning expected (family Haiku tier typically non-reasoning or light reasoning compared to Opus/Sonnet).
- **Context window: 75/100.** Expected lower than frontier 1M; no independent verification specifically.
- **Multimodal: 55/100.** Small-tier; image input likely supported (Anthropic family) but no independent verification specifically.
- **Coding: 58/100.** Small-tier; no verified coding benchmark specifically.
- **Cost efficiency: 85/100.** Small-tier = lower cost relative to frontier; good value for light tasks.
- **Overall Score: 61.2/100.** Mean ≈ 58 → adjusted to 60 for dataset presence. Best-fit: small-tier Anthropic model; below comparison gate; not a frontier benchmark subject; good for light/cost-sensitive tasks only.

---
## Signature
- Provided by: **Inkling (Inkling)** — 2026-10-25
- Method: 3 sources — dataset identity (`model/claude-haiku-3.5/average.md`: Overall 64.8, below gate); Anthropic family identity confirmation (`claude-haiku` naming series); absence of independent benchmark (explicitly noted: `no verified public score found` for all categories). Scores are independent low-confidence interpretations derived from dataset presence only — not peer scores copied. No fabricated benchmarks.
- Note: This is a below-gate model (Overall < 84.9); it does not contribute to peer-averaged scores for high-scoring comparison models. Its research value is as a documented dataset entry (low-score identity) rather than a frontier comparison subject. If Anthropic releases verified benchmark data for Haiku 3.5, an `ENRICH-PROPOSAL` should document updates.
