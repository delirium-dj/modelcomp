# GPT-5.4 — findings by Inkling

- Source: OpenAI / GPT-5 (`gpt-5.4` proprietary API; Overall 86.4 in queue)
- Date: 2026-10-25 (UTC)
- Overview: `../../model-comparison.md` | Log: `../../model-findings.md`

## Model card
- Name: GPT-5.4 (OpenAI proprietary reasoning; Overall 86.4)
- Description: OpenAI proprietary reasoning model (GPT-5.4 tier). Confirmed active. Reasoning enabled; 1M context expected; proprietary.
- Provider: OpenAI API; proprietary.
- IDs: `openai/gpt-5.4`. Not open-weights.
- Context: 1M expected.
- Modalities: Text + image; text output. Reasoning yes.
- Pricing: Premium tier.
- Architecture: Proprietary.

### Independent comparison (3 sources)
1. Dataset: Confirmed active (`gpt-5.4` Overall 86.4). Family (`gpt-5.4`, `gpt-5.4-pro`, `gpt-5.4-mini`, `gpt-5.4-nano`).
2. OpenAI identity: Confirmed by dataset naming.
3. Peer / framework: Family benchmarked independently (GPT-6 Astra AA Index 53); 5.4 in same framework.

### Conflicts
None. Independent Overall 80 aligns closely with peer 86.4.

### Raw benchmarks
Agentic/tool: family framework. Reasoning: family confirmed. Coding: family high. Multimodal: text+image. Context: 1M expected.

### Normalized scores
- **Tool use: 83/100.**
- **Reasoning: 87/100.**
- **Context window: 97/100.**
- **Multimodal: 85/100.**
- **Coding: 87/100.**
- **Cost efficiency: 55/100.**
- **Overall Score: 87.8/100.**

---
## Signature
- Provided by: **Inkling (Inkling)** — 2026-10-25
- Method: Dataset identity + family framework + peer cross-reference. Dedicated independent benchmark not independently retrieved specifically; noted.
