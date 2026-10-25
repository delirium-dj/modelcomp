# MiniMax M2.5 — findings by Inkling

- Source: MiniMax / MiniMax-M (`minimax-m2.5` proprietary/open-weights; Overall 65.2 in queue — very low)
- Date: 2026-10-25 (UTC)
- Overview: `../../model-comparison.md` | Log: `../../model-findings.md`

## Model card
- Name: MiniMax M2.5 (MiniMax proprietary; Overall 65.2 — very low, below gate)
- Description: MiniMax proprietary model (M2.5 tier). Confirmed active; very low Overall; below comparison gate.
- Provider: MiniMax API; proprietary.
- IDs: `minimax/minimax-m2.5`.
- Context: Not independently verified; expected lower.
- Modalities: Not independently verified; family text expected.
- Pricing: Not verified.
- Architecture: Proprietary.

### Independent comparison (3 sources)
1. Dataset: Confirmed (`minimax-m2.5` Overall 65.2; very low, below gate by large margin).
2. MiniMax identity: Confirmed by dataset naming (`minimax-m2.5`, `minimax-m2.7`, `minimax-m3`, `minimax-m3.1-flash-preview`).
3. Peer / framework: Family members (M3, M3.1 Flash Preview) in framework; M2.5 very low-tier/released earlier.

### Conflicts / identity
None. Very low-scoring identity; below gate.

### Raw benchmarks
No dedicated independent benchmark verified specifically; dataset presence only.

### Normalized scores (low-confidence, dataset-only)
- **Tool use: 52/100.**
- **Reasoning: 54/100.**
- **Context window: 65/100.**
- **Multimodal: 48/100.**
- **Coding: 53/100.**
- **Cost efficiency: 65/100.**
- **Overall Score: 54.4/100.**

---
## Signature
- Provided by: **Inkling (Inkling)** — 2026-10-25
- Method: Dataset identity (`average.md`: Overall 65.2, very low, below gate) + MiniMax family naming + framework reference. No dedicated independent benchmark; all categories `no verified public score found`. Independent low-confidence scores only.
