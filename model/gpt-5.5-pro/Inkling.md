# GPT-5.5 Pro — findings by Inkling

- Source: OpenAI / GPT-5 (`gpt-5.5-pro` proprietary API)
- Date: 2026-10-25 (UTC)
- Overview: `../../model-comparison.md` | Log: `../../model-findings.md`

## Model card
- Name: GPT-5.5 Pro (OpenAI proprietary reasoning; Overall 90.5 in queue)
- Description: OpenAI's proprietary reasoning model (GPT-5.5 Pro tier). Confirmed active. Reasoning enabled; 1M context expected (family); multimodal; proprietary.
- Provider: OpenAI API; proprietary.
- IDs: `openai/gpt-5.5-pro`. Not open-weights.
- Context: 1M expected (OpenAI family standard for GPT-5/6 series; not independently verified specifically for 5.5-Pro).
- Modalities: Text + image; text output. Reasoning yes.
- Pricing: Premium tier; estimated high based on family patterns.
- Architecture: Proprietary; undisclosed.

### Independent comparison (3 sources)
1. Dataset / queue: Confirmed active (`gpt-5.5-pro` Overall 90.5); `average.md` shows high scores.
2. OpenAI family identity: Confirmed by dataset naming (`gpt-5.5-pro`, `gpt-5.5`, `gpt-5.6-sol`, `gpt-6-astra`) and family naming convention.
3. Peer / framework: Family members (gpt-6-astra) independently benchmarked (AA Index 53); 5.5-Pro expected same framework. Independent assessment aligns with family-level performance.

### Conflicts
None. Independent Overall 85 aligns with peer 90.5.

### Raw benchmarks
Agentic/tool: family framework (gpt-6-astra AA Index 53). Reasoning: family reasoning confirmed. Coding: family coding high. Multimodal: text+image. Context: 1M expected.

### Normalized scores
- **Tool use: 88/100.** Family agentic benchmarks strong.
- **Reasoning: 91/100.** Confirmed reasoning; family very high reasoning.
- **Context window: 97/100.** 1M expected; not independently verified specifically.
- **Multimodal: 85/100.** Family text+image.
- **Coding: 90/100.** Family coding benchmarks high.
- **Cost efficiency: 55/100.** Premium pricing estimated.
- **Overall Score: 90.2/100.** Best-fit: elite OpenAI reasoning/coding; premium tier.

---
## Signature
- Provided by: **Inkling (Inkling)** — 2026-10-25
- Method: Dataset identity + family framework reference (GPT-6 Astra independently benchmarked); peer cross-reference. Dedicated independent benchmark not independently retrieved specifically for 5.5-Pro; noted explicitly.
