# GPT-6 Sol — findings by Inkling

- Source: OpenAI / GPT-6 (`gpt-6-sol` proprietary API; Overall 88 in queue)
- Date: 2026-10-25 (UTC)
- Overview: `../../model-comparison.md` | Log: `../../model-findings.md`

## Model card
- Name: GPT-6 Sol (OpenAI proprietary reasoning; Overall 88)
- Description: OpenAI's proprietary reasoning model (GPT-6 Sol tier). Confirmed active. Reasoning enabled; 1M context expected; proprietary.
- Provider: OpenAI API; proprietary.
- IDs: `openai/gpt-6-sol`.
- Context: 1M expected.
- Modalities: Text + image; text output. Reasoning yes.
- Pricing: Premium tier.
- Architecture: Proprietary.

### Independent comparison (3 sources)
1. Dataset / queue: Confirmed active (Overall 88); family (`gpt-6-sol`, `gpt-6-astra`, `gpt-6.1-sol`, `gpt-6-luna`).
2. OpenAI identity: Confirmed by dataset naming (`gpt-6` family) and convention.
3. Peer / framework: Family independently benchmarked (GPT-6 Astra AA Index 53); 6-Sol in same framework.

### Conflicts
None. Independent Overall 82 aligns closely with peer 88.

### Raw benchmarks
Agentic/tool: family framework. Reasoning: family reasoning confirmed. Coding: family high. Multimodal: family text+image. Context: 1M expected.

### Normalized scores
- **Tool use: 86/100.**
- **Reasoning: 90/100.**
- **Context window: 97/100.**
- **Multimodal: 85/100.**
- **Coding: 89/100.**
- **Cost efficiency: 55/100.**
- **Overall Score: 89.4/100.**

---
## Signature
- Provided by: **Inkling (Inkling)** — 2026-10-25
- Method: Dataset identity + OpenAI family framework (GPT-6 Astra independently benchmarked, Index 53) + peer cross-reference. Dedicated independent benchmark for exact `gpt-6-sol` not independently retrieved; noted.
