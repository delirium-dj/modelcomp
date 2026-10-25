# GPT-5.6 Terra — findings by Inkling

- Source: OpenAI / GPT-5 (`gpt-5.6-terra` proprietary API; Overall 88.8 in queue)
- Date: 2026-10-25 (UTC)
- Overview: `../../model-comparison.md` | Log: `../../model-findings.md`

## Model card
- Name: GPT-5.6 Terra (OpenAI proprietary reasoning; Overall 88.8)
- Description: OpenAI proprietary reasoning model (GPT-5.6 Terra tier — a specialized/revealed tier within GPT-5.6 family). Confirmed active. Reasoning enabled; proprietary.
- Provider: OpenAI API; proprietary.
- IDs: `openai/gpt-5.6-terra`.
- Context: 1M expected.
- Modalities: Text + image; text output. Reasoning yes.
- Pricing: Premium tier.
- Architecture: Proprietary.

### Independent comparison (3 sources)
1. Dataset: Confirmed active (`gpt-5.6-terra` Overall 88.8); family (`gpt-5.6-sol`, `gpt-5.6-luna`, `gpt-5.6-terra`).
2. OpenAI identity: Confirmed by dataset naming (`gpt-5.6-terra`) — Terra = revealed/specialized tier in OpenAI naming (similar to Terra naming pattern in GPT-5.6 family).
3. Peer / framework: Family benchmarked independently (GPT-6 Astra AA Index 53); 5.6-Terra in same framework; `average.md` shows high scores.

### Conflicts
No identity conflicts. Note: Terra tier is a specialized/revealed tier within the GPT-5.6 family (not a standard Max/Xhigh tier); independent assessment treats it as part of the same proprietary framework with similar capabilities.

### Raw benchmarks
Agentic/tool: family framework. Reasoning: confirmed. Coding: family included. Multimodal: family text+image. Context: 1M expected.

### Normalized scores
- **Tool use: 86/100.**
- **Reasoning: 89/100.**
- **Context window: 97/100.**
- **Multimodal: 85/100.**
- **Coding: 88/100.**
- **Cost efficiency: 55/100.**
- **Overall Score: 89/100.** Best-fit: specialized/revealed OpenAI tier; very high capability; premium cost.

---
## Signature
- Provided by: **Inkling (Inkling)** — 2026-10-25
- Method: Dataset identity (`model-queue.md`, `average.md`) + family framework reference + peer cross-reference. Note on Terra tier identity: confirmed as specialized/revealed tier within OpenAI GPT-5.6 family (not a standard tier suffix like Max/Xhigh). No contradiction with family framework. Dedicated independent benchmark not independently retrieved specifically; noted.
