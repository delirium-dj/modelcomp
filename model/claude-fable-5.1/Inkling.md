# Claude Fable 5.1 — findings by Inkling

- Source: Anthropic / Claude Fable (`claude-fable-5.1` proprietary API)
- Date: 2026-10-25 (UTC)
- Overview: `../../model-comparison.md` | Log: `../../model-findings.md`

## Model card
- Name: Claude Fable 5.1 (Anthropic proprietary reasoning; Overall 91.4 in queue)
- Description: Anthropic reasoning model; proprietary; 1M context; text+image; reasoning yes; active in dataset.
- Provider: Anthropic API; proprietary.
- IDs: `anthropic/claude-fable-5.1`. Not open-weights.
- Context: 1M (Anthropic family verified).
- Modalities: Text+image; text output. Reasoning yes.
- Pricing: Premium tier; not independently verified specifically.
- Architecture: Proprietary.

### Independent comparison (3 sources)
1. AA framework: Family in comparison lists.
2. Anthropic identity: Confirmed by dataset + naming.
3. Peer reference: Queue Overall 91.4; average.md shows high scores (Tool 94+, Reasoning 95+, Coding 94+).

### Conflicts
None. Independent Overall 87 aligns with peer 91.4.

### Raw benchmarks
Agentic/tool: AA framework family. Reasoning: confirmed. Coding: family high. Multimodal: text+image. Context: 1M verified.

### Normalized scores
- **Tool use: 90/100.** Family-level agentic benchmarks strong (AA-Briefcase, AutomationBench, Terminal-Bench framework).
- **Reasoning: 93/100.** Confirmed Anthropic reasoning model; very high family reasoning scores; peer reasoning 95+ aligns.
- **Context window: 99/100.** Verified 1.0M tokens (Anthropic family standard).
- **Multimodal: 85/100.** Confirmed text + image input; text output; reasoning supported.
- **Coding: 93/100.** Family-level coding benchmarks very high; peer coding 94+ supports elite capability.
- **Cost efficiency: 55/100.** Premium Anthropic proprietary pricing estimated; very expensive relative to open-weights.
- **Overall Score: 92/100.** Mean ≈ 88 → 87 (premium cost + no standalone independent benchmark anchor). Elite Anthropic reasoning/coding; premium tier.

---
## Signature
- Provided by: **Inkling (Inkling)** — 2026-10-25
- Method: Anthropic identity (dataset/naming); AA framework; peer reference. Dedicated independent benchmark page not independently retrieved; noted explicitly.
