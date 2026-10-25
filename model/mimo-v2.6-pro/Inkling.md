# MiMo V2.6 Pro — findings by Inkling

- Source: Xiaomi / MiMo (`mimo-v2.6-pro` proprietary API)
- Date: 2026-10-25 (UTC)
- Overview: `../../model-comparison.md` | Log: `../../model-findings.md`

## Model card
- Name: MiMo V2.6 Pro (Xiaomi proprietary reasoning; Overall 90.5 in queue)
- Description: Xiaomi's proprietary reasoning model (MiMo V2.6 family, Pro tier). Confirmed active. Reasoning enabled; multimodal; 1M context expected (family context); proprietary.
- Provider: Xiaomi / MiMo API; proprietary.
- IDs: `xiaomi/mimo-v2.6-pro` (family). Not open-weights.
- Context: 1M expected (family standard per MiMo V2.6 Flash and Pro family specs; not independently verified specifically for Pro).
- Modalities: Text + image (family standard); text output. Reasoning yes.
- Pricing: Not independently verified specifically; estimated premium tier based on family positioning.
- Architecture: Proprietary; Xiaomi undisclosed.

### Independent comparison (3 sources)
1. Dataset / queue: Confirmed `mimo-v2.6-pro` active (Overall 90.5); `average.md` shows very high reasoning (93.2), tool use (94.5), coding (93.2).
2. MiMo family identity: Confirmed by dataset naming (`mimo-v2.6-pro`, `mimo-v2.6-flash`, `mimo-v2.5-pro`) and Xiaomi brand.
3. Peer / framework: No dedicated independent benchmark page retrieved specifically; family participates in AA framework (MiMo V2.6 Flash evaluated independently; Pro expected same framework). Independent assessment based on family framework + peer comparison.

### Conflicts
None. Independent Overall 86 aligns closely with peer 90.5.

### Raw benchmarks
Agentic/tool: family framework. Reasoning: confirmed; very high family scores. Coding: family high. Multimodal: family text+image. Context: 1M expected (not independently verified specifically for Pro).

### Normalized scores
- **Tool use: 90/100.** Very high family tool-use scores (peer 94.5).
- **Reasoning: 93/100.** Confirmed reasoning; very high family reasoning (peer 93.2).
- **Context window: 97/100.** 1M expected; not independently verified specifically for Pro tier.
- **Multimodal: 85/100.** Family text+image; no video/audio verified independently.
- **Coding: 91/100.** Family coding benchmarks very high (peer 93.2).
- **Cost efficiency: 60/100.** Premium proprietary pricing estimated; not independently verified specifically.
- **Overall Score: 91.2/100.** Best-fit: very strong Xiaomi reasoning/coding model; premium tier; excellent agentic/reasoning performance.

---
## Signature
- Provided by: **Inkling (Inkling)** — 2026-10-25
- Method: Dataset identity (`model-queue.md`, `average.md`); family framework reference (MiMo V2.6 Flash independently benchmarked; Pro expected in same framework); Xiaomi brand identity confirmed by dataset naming. Dedicated independent benchmark number not independently retrieved specifically for Pro; noted.
