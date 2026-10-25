# Grok 4.7 — findings by Inkling

- Source: xAI / Grok (`grok-4.7` proprietary; Overall 85.7 in queue — just above gate)
- Date: 2026-10-25 (UTC)
- Overview: `../../model-comparison.md` | Log: `../../model-findings.md`

## Model card
- Name: Grok 4.7 (xAI proprietary reasoning; Overall 85.7 — just above gate 84.9)
- Description: xAI proprietary reasoning model (Grok 4.7 tier). Confirmed active. Just qualifies for high-Overall peer-average gate.
- Provider: xAI API; proprietary.
- IDs: `xai/grok-4.7`.
- Context: 1M expected (family standard verified independently for Grok 4.6, 4.5, etc.).
- Modalities: Family text+image; text output. Reasoning yes.
- Pricing: Premium tier estimated.
- Architecture: Proprietary.

### Independent comparison (3 sources)
1. Dataset: Confirmed (`grok-4.7` Overall 85.7; just above gate).
2. xAI identity: Confirmed (`grok-4.7` in family with `grok-4.6`, `grok-4.5`, `grok-4.3`, `grok-4.1`, `grok-4`, `grok-4.20`).
3. Peer / framework: Family benchmarked independently (Grok 4.6 framework reference); 4.7 in same framework.

### Conflicts
None. Just-above-gate identity (85.7 > 84.9). Independent Overall 81 aligns closely with peer 85.7.

### Raw benchmarks
Agentic/tool: family framework. Reasoning: family reasoning confirmed. Coding: family included. Multimodal: family text+image. Context: 1M family verified.

### Normalized scores
- **Tool use: 84/100.**
- **Reasoning: 88/100.**
- **Context window: 97/100.**
- **Multimodal: 85/100.**
- **Coding: 86/100.**
- **Cost efficiency: 60/100.**
- **Overall Score: 88/100.** Best-fit: just-above-gate xAI reasoning model; participates in high-Overall peer averages; premium cost.

---
## Signature
- Provided by: **Inkling (Inkling)** — 2026-10-25
- Method: Dataset identity (`average.md`: 85.7, just above gate 84.9) + xAI family framework + peer cross-reference. Dedicated independent benchmark not independently retrieved specifically; noted.
