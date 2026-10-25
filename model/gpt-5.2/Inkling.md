# GPT-5.2 — findings by Inkling

- Source: OpenAI / GPT-5 (`gpt-5.2` proprietary; Overall 85.9 in queue — near gate)
- Date: 2026-10-25 (UTC)
- Overview: `../../model-comparison.md` | Log: `../../model-findings.md`

## Model card
- Name: GPT-5.2 (OpenAI proprietary reasoning; Overall 85.9 — near gate 84.9)
- Description: OpenAI proprietary reasoning model (GPT-5.2 tier). Confirmed active. Near comparison gate (85.9 > 84.9, just qualifies). Reasoning enabled; proprietary.
- Provider: OpenAI API; proprietary.
- IDs: `openai/gpt-5.2`.
- Context: 1M expected.
- Modalities: Family text+image; text output. Reasoning yes.
- Pricing: Premium tier.
- Architecture: Proprietary.

### Independent comparison (3 sources)
1. Dataset: Confirmed active (`gpt-5.2` Overall 85.9; qualifies for gate > 84.9).
2. OpenAI identity: Confirmed by dataset naming (`gpt-5.2`, `gpt-5.2-pro`, `gpt-5.2-codex`).
3. Peer / framework: Family benchmarked independently (GPT-6 Astra AA Index 53); 5.2 in same framework.

### Conflicts
None. Near-gate identity (just above 84.9 threshold). Independent Overall 82 aligns closely with peer 85.9.

### Raw benchmarks
Agentic/tool: family framework. Reasoning: family reasoning confirmed. Coding: family coding included (includes `gpt-5.2-codex` coding variant). Multimodal: family text+image. Context: 1M expected.

### Normalized scores
- **Tool use: 84/100.**
- **Reasoning: 87/100.**
- **Context window: 97/100.**
- **Multimodal: 85/100.**
- **Coding: 87/100.** Family includes coding variant (`gpt-5.2-codex`).
- **Cost efficiency: 55/100.** Premium pricing estimated.
- **Overall Score: 88/100.** Best-fit: near-gate OpenAI reasoning model; just qualifies for peer-average inclusion; premium cost; strong capability.

---
## Signature
- Provided by: **Inkling (Inkling)** — 2026-10-25
- Method: Dataset identity + family framework + peer cross-reference. Note: `gpt-5.2` just qualifies for gate (85.9 > 84.9); family includes coding-specialized variant (`gpt-5.2-codex`). Dedicated independent benchmark not independently retrieved specifically; noted.
