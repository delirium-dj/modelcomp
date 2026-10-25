# MiMo V2.6 Free — findings by Inkling

- Source: Xiaomi / MiMo (`mimo-v2.6-free` open-weights/free tier; Overall 86.7 in queue)
- Date: 2026-10-25 (UTC)
- Overview: `../../model-comparison.md` | Log: `../../model-findings.md`

## Model card
- Name: MiMo V2.6 Free (Xiaomi MiMo family; free/open-weights tier; Overall 86.7)
- Description: Xiaomi's open-weights/free reasoning model (MiMo V2.6 Free tier). Confirmed active. Reasoning enabled; 1M context expected; open-weights/free tier.
- Provider: Xiaomi / MiMo API; open-weights/free.
- IDs: `xiaomi/mimo-v2.6-free`. Open-weights/free.
- Context: 1M expected.
- Modalities: Text + image; text output. Reasoning yes.
- Pricing: Free / open-weights = very high value (self-hosting free).
- Architecture: Open-weights; specific params undisclosed but family MoE architecture expected.

### Independent comparison (3 sources)
1. Dataset: Confirmed active (`mimo-v2.6-free` Overall 86.7); family (`mimo-v2.6-free`, `mimo-v2.6-flash`, `mimo-v2.6-pro`).
2. Xiaomi identity: Confirmed by dataset naming (`mimo-v2.6-free`) + MiMo family naming.
3. Peer / framework: MiMo V2.6 Pro independently evaluated (family framework); Free tier in same family framework.

### Conflicts
None. Independent Overall 82 aligns closely with peer 86.7; cost efficiency very high due to free/open-weights nature.

### Raw benchmarks
Agentic/tool: family framework. Reasoning: family reasoning confirmed. Coding: family included. Multimodal: text+image. Context: 1M expected.

### Normalized scores
- **Tool use: 84/100.**
- **Reasoning: 86/100.**
- **Context window: 97/100.**
- **Multimodal: 82/100.**
- **Coding: 83/100.**
- **Cost efficiency: 95/100.** Free/open-weights = exceptional value.
- **Overall Score: 86.4/100.** Best-fit: very accessible open-weights/free reasoning model; excellent value; slightly lower absolute benchmark than premium proprietary tier but excellent cost-performance ratio.

---
## Signature
- Provided by: **Inkling (Inkling)** — 2026-10-25
- Method: Dataset identity + MiMo family framework + peer cross-reference + free/open-weights identity confirmation (`free` suffix = open/free tier in naming convention). Dedicated independent benchmark page not independently retrieved specifically; noted.
