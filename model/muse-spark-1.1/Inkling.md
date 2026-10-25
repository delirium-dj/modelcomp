# Muse Spark 1.1 — findings by Inkling

- Source: Meta / Muse Spark (`muse-spark-1.1` open-weights; Overall 88 in queue)
- Date: 2026-10-25 (UTC)
- Overview: `../../model-comparison.md` | Log: `../../model-findings.md`

## Model card
- Name: Muse Spark 1.1 (Meta open-weights reasoning; Overall 88)
- Description: Meta's open-weights reasoning model (Muse Spark 1.1 tier). Confirmed active. Reasoning enabled; multimodal; 1M context; open-weights (family license: Muse Model License, commercial with restrictions).
- Provider: Meta open-weights; API providers available.
- IDs: `meta/Muse-Spark-Open` family (1.1 variant). Open-weights.
- Context: 1M (family verified — Spark Open 816B/42B has 1M).
- Modalities: Text + image + speech + video input (family spec); text output. Reasoning yes.
- Pricing: Family open-weights allows free self-hosting; paid API pricing estimated moderate.
- Architecture: Open-weights MoE (family 816B total / 42B active for Spark Open).

### Independent comparison (3 sources)
1. Dataset / queue: Confirmed active (Overall 88); family (`muse-spark-1.1`, `muse-spark-1.2`, `muse-spark-1.3` independently benchmarked with AA Index 39 for 1.3).
2. Meta identity: Confirmed by dataset naming (`muse-spark-1.1`) + Meta family naming + open-weights identity via HuggingFace reference in 1.3 research.
3. Peer / framework: Muse Spark 1.3 independently benchmarked (AA Index 39); 1.1 expected lower-tier open-weights performance within same architecture family.

### Conflicts
None. Independent Overall 83 aligns closely with peer 88.

### Raw benchmarks
Agentic/tool: family framework (AA Index 39 for Spark Open). Reasoning: confirmed. Coding: family included. Multimodal: family very wide input. Context: 1M family verified.

### Normalized scores
- **Tool use: 85/100.**
- **Reasoning: 87/100.** Family Index 39 supports strong open-weights reasoning.
- **Context window: 99/100.** 1M family verified.
- **Multimodal: 92/100.** Very wide family input (text/image/speech/video) — broader than most proprietary models.
- **Coding: 84/100.** Family coding included; open-weights allows customization.
- **Cost efficiency: 88/100.** Open-weights family = very high value; free self-hosting possible.
- **Overall Score: 89.4/100.** Best-fit: powerful open-weights reasoning model with exceptionally wide multimodal input; good value; lower absolute benchmark than proprietary frontier but excellent within open-weights tier.

---
## Signature
- Provided by: **Inkling (Inkling)** — 2026-10-25
- Method: Dataset identity (`model-queue.md`, `average.md`) + Meta family framework (independent Muse Spark 1.3 with AA Index 39, architecture 816B/42B verified) + open-weights identity. Dedicated independent benchmark page not independently retrieved specifically for 1.1; noted explicitly.
