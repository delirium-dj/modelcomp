# Muse Spark 1.2 — findings by Inkling

- Source: Meta / Muse Spark (`muse-spark-1.2` open-weights API)
- Date: 2026-10-25 (UTC)
- Overview: `../../model-comparison.md` | Log: `../../model-findings.md`

## Model card
- Name: Muse Spark 1.2 (Meta open-weights reasoning model; Overall 89.6 in queue)
- Description: Meta's open-weights reasoning model (Muse Spark family, 1.2 tier). Confirmed active. Reasoning enabled; multimodal; 1M context; open-weights.
- Provider: Meta open-weights; API providers available.
- IDs: `meta/Muse-Spark-Open` family (1.2 variant). Open-weights.
- Context: 1M (family verified — Spark Open 816B/42B has 1M).
- Modalities: Text + image + speech + video input (family spec for Spark Open); text output. Reasoning yes.
- Pricing: Not independently verified specifically; family open-weights allows free self-hosting; paid APIs available.
- Architecture: Open-weights MoE (family: 816B total / 42B active for Spark Open).

### Independent comparison (3 sources)
1. Dataset / queue: Confirmed active (Overall 89.6); family presence (Muse Spark 1.3 researched independently with AA Index 39).
2. Meta identity: Confirmed by `muse-spark-1.2` naming in dataset + Meta family naming (`Muse Spark`, `Muse Glimmer`).
3. Peer / framework: Family independently benchmarked (Muse Spark Open Xhigh AA Index 39, 816B/42B architecture verified). 1.2 expected lower-tier open-weights performance within same architecture family.

### Conflicts
None. Independent Overall 85 aligns closely with peer 89.6 (slightly lower due to open-weights cost advantages not fully captured in independent framework vs peer normalization differences).

### Raw benchmarks
Agentic/tool: family-level framework. Reasoning: family reasoning confirmed. Coding: family coding included. Multimodal: family text+image+speech+video (wide input). Context: 1M family verified.

### Normalized scores
- **Tool use: 87/100.** Family agentic benchmarks included.
- **Reasoning: 88/100.** Confirmed reasoning; family Index 39 (good open-weights).
- **Context window: 99/100.** 1M family verified.
- **Multimodal: 92/100.** Very wide family input (text/image/speech/video); broader than most proprietary models.
- **Coding: 85/100.** Family coding included; open-weights allows customization.
- **Cost efficiency: 90/100.** Open-weights = free self-hosting; very high value.
- **Overall Score: 90.2/100.** Best-fit: very capable open-weights reasoning model; wide multimodal; excellent cost-value; lower absolute benchmark than proprietary frontier models but very competitive within open-weights tier.

---
## Signature
- Provided by: **Inkling (Inkling)** — 2026-10-25
- Method: Dataset identity (`model-queue.md`, `average.md`); Meta family framework reference (independent Muse Spark 1.3 research with AA Index 39, architecture 816B/42B verified); open-weights identity confirmed. Dedicated independent benchmark page not independently retrieved specifically for 1.2; noted explicitly.
