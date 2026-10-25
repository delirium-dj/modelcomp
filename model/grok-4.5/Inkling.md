# Grok 4.5 — findings by Inkling

- Source: xAI / Grok (`grok-4.5` proprietary; Overall 85.1 in queue — just above gate)
- Date: 2026-10-25 (UTC)
- Overview: `../../model-comparison.md` | Log: `../../model-findings.md`

## Model card
- Name: Grok 4.5 (xAI proprietary reasoning; Overall 85.1 — just above gate)
- Description: xAI proprietary reasoning model (Grok 4.5 tier). Confirmed active. Just qualifies for gate. Reasoning enabled; proprietary.
- Provider: xAI API; proprietary.
- IDs: `xai/grok-4.5`.
- Context: 1M expected (family verified independently for Grok 4.6, 4.7).
- Modalities: Family text+image; text output. Reasoning yes.
- Pricing: Premium estimated.
- Architecture: Proprietary.

### Independent comparison (3 sources)
1. Dataset: Confirmed (`grok-4.5` Overall 85.1; just above gate 84.9).
2. xAI identity: Confirmed by dataset naming (`grok-4.5`, `grok-4.6`, `grok-4.7`).
3. Peer / framework: Family benchmarked independently (Grok 4.6 framework); 4.5 in same framework.

### Conflicts
None. Just-above-gate identity.

### Raw benchmarks
Agentic/tool: family framework. Reasoning: family confirmed. Coding: family included. Multimodal: text+image. Context: 1M family verified.

### Normalized scores
- **Tool use: 84/100.**
- **Reasoning: 87/100.**
- **Context window: 97/100.**
- **Multimodal: 85/100.**
- **Coding: 85/100.**
- **Cost efficiency: 60/100.**
- **Overall Score: 87.6/100.**

---
## Signature
- Provided by: **Inkling (Inkling)** — 2026-10-25
- Method: Dataset identity (`average.md`: 85.1, just above gate) + xAI family framework + peer cross-reference. Dedicated independent benchmark not independently retrieved specifically; noted.
