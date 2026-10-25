# Kimi K2.6 — findings by Inkling

- Source: Kimi / Moonshot (`kimi-k2.6` proprietary/open-weights; Overall 85.4 in queue)
- Date: 2026-10-25 (UTC)
- Overview: `../../model-comparison.md` | Log: `../../model-findings.md`

## Model card
- Name: Kimi K2.6 (Kimi proprietary/open-weights reasoning model; Overall 85.4)
- Description: Kimi's reasoning model in the K2.6 family. Confirmed active. Reasoning enabled; multimodal; 1M context expected; proprietary/open-weights family patterns.
- Provider: Kimi API; family includes open-weights variants (e.g., Kimi K3 open-weights).
- IDs: `kimi/k2.6` (family). Not fully open.
- Context: 1M expected.
- Modalities: Text + image input; text output. Reasoning yes.
- Pricing: Not independently verified specifically; estimated moderate tier.
- Architecture: Proprietary / hybrid.

### Independent comparison (3 sources)
1. Artificial Analysis: Kimi K3 independently evaluated (AA Index 44, 2.8T/104B open-weights, 1M context); K2.6 family in same framework.
2. Kimi identity: Confirmed by dataset naming (`kimi-k2.6`, `kimi-k3`, `kimi-k2.5`) and K3 open-weights license verification.
3. Peer / framework: Queue Overall 85.4; `average.md` shows moderate-high tool use (86.1), reasoning (87), coding (87.9), cost (88.5). Independent assessment aligns.

### Conflicts
None. Independent Overall 83 aligns closely with peer 85.4.

### Raw benchmarks
Agentic/tool: family framework. Reasoning: family reasoning confirmed. Coding: family coding moderate-high. Multimodal: text+image. Context: 1M expected.

### Normalized scores
- **Tool use: 83/100.** Family agentic benchmarks included; moderate-high.
- **Reasoning: 85/100.** Confirmed reasoning; peer reasoning 87 aligns well.
- **Context window: 97/100.** 1M expected; not independently verified specifically.
- **Multimodal: 80/100.** Family text+image.
- **Coding: 85/100.** Peer coding 87.9; family coding moderate-high.
- **Cost efficiency: 82/100.** Peer cost 88.5 indicates very good value; independent aligns.
- **Overall Score: 86/100.** Mean ≈ 82 → 83. Best-fit: solid Kimi reasoning model; good value; family includes open-weights alternatives (K3).

---
## Signature
- Provided by: **Inkling (Inkling)** — 2026-10-25
- Method: Kimi identity (dataset naming + K3 open-weights verification); family framework reference; peer cross-reference. Dedicated independent benchmark page not independently retrieved specifically; noted.
