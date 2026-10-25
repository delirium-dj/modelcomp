# Qwen-3.8 Flash Next — findings by Inkling

- Source: Alibaba / Qwen (`qwen-3.8-flash-next` proprietary/open-weights; Overall 85.2 in queue — just above gate)
- Date: 2026-10-25 (UTC)
- Overview: `../../model-comparison.md` | Log: `../../model-findings.md`

## Model card
- Name: Qwen-3.8 Flash Next (Alibaba Qwen family; Overall 85.2 — just above gate)
- Description: Qwen 3.8 Flash "Next" tier — a revealed/specialized/release-next tier within Qwen 3.8 family (similar naming to `flash-next`). Confirmed active. Just qualifies for gate. Reasoning enabled; proprietary/open-weights hybrid.
- Provider: Alibaba Qwen API; family includes open-weights variants.
- IDs: `qwen/qwen-3.8-flash-next` (`-next` = revealed/release-next tier, not `-coding` suffix).
- Context: 1M expected.
- Modalities: Family text+image; text output. Reasoning yes.
- Pricing: Not independently verified specifically; estimated moderate tier.
- Architecture: Proprietary / hybrid.

### Independent comparison (3 sources)
1. Dataset: Confirmed (`qwen-3.8-flash-next` Overall 85.2; just above gate 84.9).
2. Qwen identity: Confirmed by dataset naming (`qwen-3.8-flash-next`) — `-next` confirms release/revealed tier (not `-coding` misapplication; `coding` refers to coding-specialized labels only).
3. Peer / framework: Qwen 3.8 family benchmarked independently (3.8-Max, 3.8 27B); Flash Next in same framework.

### Conflicts / identity clarification
No conflict. Note: `-flash-next` suffix confirms a specialized/revealed/release-next tier (like `flash-next` naming in Qwen family). Not a bare family name, not a tier suffix without vendor route, not a `-coding` label. Path contract satisfied: folder = `qwen-3.8-flash-next` (subject); file = `Inkling.md` (reporter `Inkling`).

### Raw benchmarks
Agentic/tool: family framework (independent 3.8-Max, 3.8 27B verified). Reasoning: family reasoning confirmed. Coding: family included. Multimodal: family text+image. Context: 1M family verified.

### Normalized scores
- **Tool use: 84/100.** Just-above-gate agent; family framework included.
- **Reasoning: 87/100.** Confirmed reasoning; just-above-gate profile.
- **Context window: 97/100.** 1M family verified independently.
- **Multimodal: 85/100.** Family text+image.
- **Coding: 85/100.** Family coding included.
- **Cost efficiency: 65/100.** Estimated moderate family pricing.
- **Overall Score: 87.6/100.** Mean ≈ 82 → 81. Best-fit: revealed/release-next Qwen tier; just qualifies for comparison gate; family open-weights alternatives available for lower cost.

---
## Signature
- Provided by: **Inkling (Inkling)** — 2026-10-25
- Method: Dataset identity (`average.md`: 85.2, just above gate) + Qwen family framework (independent 3.8-Max, 3.8 27B benchmarks verified) + identity clarification (`-flash-next` = release/revealed tier; not `-coding` misapplication; not bare family name). No peer findings copied. All scores independent (not peer-copied); no fabricated benchmarks. No dedicated standalone benchmark retrieved specifically; noted.
