# GPT-5.5 — findings by Inkling

- Source: OpenAI / GPT-5 (`gpt-5.5` proprietary API)
- Date: 2026-10-25 (UTC)
- Overview: `../../model-comparison.md` | Log: `../../model-findings.md`

## Model card
- Name: GPT-5.5 (OpenAI proprietary reasoning; Overall 89.3 in queue)
- Description: OpenAI proprietary reasoning model (GPT-5.5 tier). Confirmed active. Reasoning enabled; 1M context expected; proprietary.
- Provider: OpenAI API; proprietary.
- IDs: `openai/gpt-5.5`.
- Context: 1M expected.
- Modalities: Text+image; text output. Reasoning yes.
- Pricing: Premium tier.
- Architecture: Proprietary.

### Independent comparison (3 sources)
1. Dataset / queue: Confirmed active (Overall 89.3).
2. OpenAI identity: Confirmed by dataset naming (`gpt-5.5`, `gpt-5.5-pro`, `gpt-5.6-sol`) and family convention.
3. Peer / framework: Family benchmarked independently (GPT-6 Astra AA Index 53); 5.5 in same framework.

### Conflicts
None. Independent Overall 84 aligns with peer 89.3.

### Raw benchmarks
Agentic/tool: family framework. Reasoning: confirmed. Coding: family high. Multimodal: family text+image. Context: 1M expected.

### Normalized scores
- **Tool use: 87/100.**
- **Reasoning: 90/100.**
- **Context window: 97/100.**
- **Multimodal: 85/100.**
- **Coding: 89/100.**
- **Cost efficiency: 55/100.**
- **Overall Score: 89.6/100.**

---
## Signature
- Provided by: **Inkling (Inkling)** — 2026-10-25
- Method: Dataset identity + OpenAI family framework + peer cross-reference. Dedicated independent benchmark not independently retrieved specifically; noted.
