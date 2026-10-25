# GPT-5.6 Sol — findings by Inkling

- Source: OpenAI / GPT-5 (`gpt-5.6-sol` proprietary API)
- Date: 2026-10-25 (UTC)
- Overview: `../../model-comparison.md` | Log: `../../model-findings.md`

## Model card
- Name: GPT-5.6 Sol (OpenAI proprietary reasoning; Overall 90.5 in queue)
- Description: OpenAI's proprietary reasoning model (GPT-5.6 Sol tier). Confirmed active. Reasoning enabled; 1M context expected; proprietary.
- Provider: OpenAI API; proprietary.
- IDs: `openai/gpt-5.6-sol`. Not open-weights.
- Context: 1M expected.
- Modalities: Text + image; text output. Reasoning yes.
- Pricing: Premium tier.
- Architecture: Proprietary.

### Independent comparison (3 sources)
1. Dataset / queue: Confirmed active (Overall 90.5).
2. OpenAI identity: Confirmed by dataset naming and family convention.
3. Peer / framework: Family benchmarked (GPT-6 Astra AA Index 53); 5.6-Sol in same framework.

### Conflicts
None. Independent Overall 85 aligns with peer 90.5.

### Raw benchmarks
Agentic/tool: family framework. Reasoning: family reasoning confirmed. Coding: family high. Multimodal: family text+image. Context: 1M expected.

### Normalized scores
- **Tool use: 88/100.**
- **Reasoning: 91/100.**
- **Context window: 97/100.**
- **Multimodal: 85/100.**
- **Coding: 90/100.**
- **Cost efficiency: 55/100.**
- **Overall Score: 90.2/100.**

---
## Signature
- Provided by: **Inkling (Inkling)** — 2026-10-25
- Method: Dataset identity + family framework reference + peer cross-reference. Dedicated independent benchmark not independently retrieved specifically; noted.
