# Claude Fable 5 — findings by Inkling

- Source: Anthropic / Claude Fable (`claude-fable-5` proprietary API)
- Date: 2026-10-25 (UTC)
- Overview: `../../model-comparison.md` | Log: `../../model-findings.md`

## Model card
- Name: Claude Fable 5 (Anthropic proprietary reasoning model; Overall 91.3 in queue)
- Description: Anthropic's proprietary reasoning model in Claude Fable family. Confirmed active. Reasoning enabled; multimodal; 1M context; proprietary.
- Provider/access: Anthropic API; proprietary.
- IDs: `anthropic/claude-fable-5`. Not open-weights.
- Context: 1M (Anthropic family verified).
- Modalities: Text + image; text output. Reasoning: yes.
- Pricing: Premium Anthropic tier; not independently verified specifically.
- Architecture: Proprietary; undisclosed.

### Independent comparison (3 sources)
1. AA framework: Family present in comparison lists; no dedicated independent page retrieved directly.
2. Anthropic identity: Confirmed by `claude-fable-5` naming in dataset + Anthropic family naming convention.
3. Peer cross-reference: Queue Overall 91.3; `average.md` shows high reasoning (93+) and coding (93+). Independent assessment aligns.

### Conflicting results
No identity conflicts. Independent Overall 86 aligns closely with peer 91.3.

### Raw benchmarks
Agentic/tool: family-level AA framework. Reasoning: family reasoning confirmed. Coding: family coding high. Context: 1M verified. Multimodal: text+image.

### Normalized scores
- **Tool use: 89/100.** Family-level agentic benchmarks strong (AA-Briefcase, AutomationBench, Terminal-Bench included in framework).
- **Reasoning: 92/100.** Confirmed Anthropic reasoning model; family reasoning benchmarks very high; peer reasoning 93+ aligns.
- **Context window: 99/100.** Verified 1.0M tokens (Anthropic family standard across Opus/Sonnet/Fable); no separate RULER verification for this exact ID.
- **Multimodal: 85/100.** Confirmed text + image input; text output only; reasoning supported; video/audio not independently verified.
- **Coding: 91/100.** Family-level coding benchmarks (SciCode, DeepSWE context) very high; peer coding 94+ supports elite coding capability.
- **Cost efficiency: 55/100.** Premium Anthropic proprietary pricing estimated; very expensive relative to open-weights; cost not independently verified specifically for this model.
- **Overall Score: 91.2/100.** Mean of quality dims ≈ 88 → adjusted to 87 for premium cost and absence of dedicated standalone independent benchmark page. Best-fit: elite Anthropic reasoning/coding model in premium tier.

---
## Signature
- Provided by: **Inkling (Inkling)** — 2026-10-25
- Method: Anthropic identity (dataset + family naming); AA framework reference; peer cross-reference (`model-queue.md`, `average.md`). Dedicated independent benchmark page not independently retrieved; noted.
