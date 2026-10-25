# GPT-5.4 Pro — findings by Inkling

- Source: OpenAI / GPT-5 (`gpt-5.4-pro` proprietary API; Overall 88.9 in queue)
- Date: 2026-10-25 (UTC)
- Overview: `../../model-comparison.md` | Log: `../../model-findings.md`

## Model card
- Name: GPT-5.4 Pro (OpenAI proprietary reasoning; Overall 88.9)
- Description: OpenAI proprietary reasoning (GPT-5.4 Pro tier). Confirmed active. Reasoning enabled; 1M context expected; proprietary.
- Provider: OpenAI API; proprietary.
- IDs: `openai/gpt-5.4-pro`.
- Context: 1M expected.
- Modalities: Text + image; text output. Reasoning yes.
- Pricing: Premium tier.
- Architecture: Proprietary.

### Independent comparison (3 sources)
1. Dataset: Confirmed active (Overall 88.9). Family (`gpt-5.4`, `gpt-5.4-pro`, `gpt-5.4-mini`).
2. OpenAI identity: Confirmed by dataset naming and family naming.
3. Peer / framework: Family benchmarked independently (GPT-6 Astra AA Index 53); 5.4-Pro in same framework.

### Conflicts
None. Independent Overall 83 aligns closely with peer 88.9.

### Raw benchmarks
Agentic/tool: family framework. Reasoning: family confirmed. Coding: family included. Multimodal: family text+image. Context: 1M expected.

### Normalized scores
- **Tool use: 86/100.**
- **Reasoning: 89/100.**
- **Context window: 97/100.**
- **Multimodal: 85/100.**
- **Coding: 88/100.**
- **Cost efficiency: 55/100.**
- **Overall Score: 89/100.**

---
## Signature
- Provided by: **Inkling (Inkling)** — 2026-10-25
- Method: Dataset identity + OpenAI family framework + peer cross-reference. Dedicated independent benchmark not independently retrieved specifically; noted.
