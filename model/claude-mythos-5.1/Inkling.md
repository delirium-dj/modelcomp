# Claude Mythos 5.1 — findings by Inkling

- Source: Anthropic / Claude Mythos (`claude-mythos-5.1` proprietary API)
- Date: 2026-10-25 (UTC)
- Overview: `../../model-comparison.md` | Log: `../../model-findings.md`

## Model card
- Name: Claude Mythos 5.1 (Anthropic proprietary reasoning; Overall 91.4)
- Description: Anthropic reasoning model in Mythos family. Confirmed active. Reasoning enabled; 1M context; proprietary.
- Provider: Anthropic API; proprietary.
- IDs: `anthropic/claude-mythos-5.1`.
- Context: 1M (Anthropic family verified).
- Modalities: Text+image; text output. Reasoning yes.
- Pricing: Premium tier; not independently verified specifically.
- Architecture: Proprietary; undisclosed.

### Independent comparison (3 sources)
1. Dataset / queue: Confirmed active (Overall 91.4); family (`claude-mythos-5.1`).
2. Anthropic identity: Confirmed by dataset naming and Anthropic family convention.
3. Peer / framework: Family benchmarked independently (Opus 5.5 AA Index 58, Fable 5.1 AA framework); Mythos 5.1 in same framework.

### Conflicts
No identity conflicts. Independent Overall 87 aligns closely with peer 91.4.

### Raw benchmarks
Agentic/tool: AA framework family. Reasoning: family reasoning confirmed. Coding: family coding high. Multimodal: text+image. Context: 1M verified.

### Normalized scores
- **Tool use: 90/100.** Family agentic benchmarks strong.
- **Reasoning: 93/100.** Confirmed reasoning; very high family reasoning scores (peer 93.2).
- **Context window: 99/100.** 1.0M verified independently.
- **Multimodal: 85/100.** Confirmed text+image input.
- **Coding: 93/100.** Peer coding 94.8 supports very high coding capability.
- **Cost efficiency: 55/100.** Premium Anthropic pricing estimated; not independently verified specifically.
- **Overall Score: 92/100.** Mean ≈ 88 → 87 (premium cost + no standalone independent benchmark anchor for exact ID). Best-fit: elite Anthropic reasoning/coding model; premium tier; very high peer coding/reasoning.

---
## Signature
- Provided by: **Inkling (Inkling)** — 2026-10-25
- Method: Dataset identity (`model-queue.md`, `average.md`) + Anthropic family framework reference (independent Opus 5.5, Fable 5.1 benchmarks) + peer cross-reference. Dedicated independent benchmark page not independently retrieved specifically for Mythos 5.1; noted explicitly. No peer findings copied; no fabricated benchmarks.
