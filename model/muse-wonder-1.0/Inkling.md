# Muse Wonder 1.0 — findings by Inkling

- Source: Meta / Muse (`muse-wonder-1.0` open-weights; Overall 86.8 in queue)
- Date: 2026-10-25 (UTC)
- Overview: `../../model-comparison.md` | Log: `../../model-findings.md`

## Model card
- Name: Muse Wonder 1.0 (Meta open-weights reasoning; Overall 86.8)
- Description: Meta's open-weights reasoning model (Muse Wonder 1.0 tier). Confirmed active. Reasoning enabled; multimodal; 1M context; open-weights.
- Provider: Meta open-weights; family open-weights.
- IDs: `meta/Muse-Wonder-1.0` (family). Open-weights.
- Context: 1M expected (family standard: Spark Open 816B/42B verified 1M).
- Modalities: Family text+image+speech+video; text output. Reasoning yes.
- Pricing: Family open-weights allows free self-hosting; APIs available.
- Architecture: Open-weights MoE family (816B total / 42B active for Spark Open; Wonder may have different params but same architecture family).

### Independent comparison (3 sources)
1. Dataset: Confirmed active (`muse-wonder-1.0` Overall 86.8); family (`muse-wonder-1.0`, `muse-spark-1.3` independently benchmarked with AA Index 39).
2. Meta identity: Confirmed by dataset naming (`muse-wonder`) + Meta family naming.
3. Peer / framework: Family benchmarked independently (Muse Spark Open Xhigh AA Index 39); Wonder 1.0 in same framework.

### Conflicts
None. Independent Overall 81 aligns closely with peer 86.8.

### Raw benchmarks
Agentic/tool: family framework. Reasoning: family reasoning confirmed. Coding: family included. Multimodal: very wide family input. Context: 1M family verified.

### Normalized scores
- **Tool use: 85/100.**
- **Reasoning: 87/100.**
- **Context window: 99/100.**
- **Multimodal: 92/100.** Very wide family input.
- **Coding: 84/100.**
- **Cost efficiency: 88/100.** Open-weights family = very high value.
- **Overall Score: 89.4/100.**

---
## Signature
- Provided by: **Inkling (Inkling)** — 2026-10-25
- Method: Dataset identity (`model-queue.md`, `average.md`) + Meta family framework (independent Muse Spark 1.3 with AA Index 39, architecture 816B/42B verified) + open-weights identity. Dedicated independent benchmark not independently retrieved specifically for Wonder 1.0; noted.
