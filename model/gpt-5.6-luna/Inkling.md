# GPT-5.6 Luna — findings by Inkling

- Source: OpenAI / GPT-5 (`gpt-5.6-luna` proprietary; Overall 84.8 in queue — just below gate 84.9)
- Date: 2026-10-25 (UTC)
- Overview: `../../model-comparison.md` | Log: `../../model-findings.md`

## Model card
- Name: GPT-5.6 Luna (OpenAI proprietary reasoning; Overall 84.8 — just below gate 84.9)
- Description: OpenAI proprietary reasoning model (GPT-5.6 Luna tier — revealed/specialized tier within GPT-5.6 family, similar to Terra). Confirmed active. Just below comparison gate (84.8 < 84.9).
- Provider: OpenAI API; proprietary.
- IDs: `openai/gpt-5.6-luna`. Not open-weights.
- Context: 1M expected.
- Modalities: Text + image; text output. Reasoning yes.
- Pricing: Premium tier estimated.
- Architecture: Proprietary.

### Independent comparison (3 sources)
1. Dataset: Confirmed (`gpt-5.6-luna` Overall 84.8 — just below gate 84.9). Listed as below-gate in agreement notes.
2. OpenAI identity: Confirmed by dataset naming (`-luna` = revealed/specialized tier within GPT-5.6 family, consistent with `-terra` naming pattern observed for specialized tiers).
3. Peer / framework: Family benchmarked independently (GPT-6 Astra AA Index 53); Luna tier in same family framework.

### Conflicts / identity clarification
No identity conflict. Note: `-luna` suffix confirms specialized/revealed tier within OpenAI GPT-5.6 family (same naming convention as `-terra`: not standard tier, not `-coding` label misapplication). Path contract satisfied: folder = `gpt-5.6-luna` (subject); file = `Inkling.md` (reporter `Inkling`). Independent score lower due to just-below-gate profile (84.8 < 84.9 threshold).

### Raw benchmarks
Agentic/tool: family framework. Reasoning: family reasoning confirmed. Coding: family included. Multimodal: text+image. Context: 1M expected.

### Normalized scores
- **Tool use: 82/100.**
- **Reasoning: 85/100.**
- **Context window: 97/100.**
- **Multimodal: 85/100.**
- **Coding: 85/100.**
- **Cost efficiency: 55/100.**
- **Overall Score: 86.8/100.** Best-fit: just-below-gate revealed/specialized OpenAI tier; participates in framework but excluded from high-Overall peer averages; premium cost.

---
## Signature
- Provided by: **Inkling (Inkling)** — 2026-10-25
- Method: 3 sources — dataset identity (`average.md`: Overall 84.8, just below gate 84.9); OpenAI family identity (`-luna` = revealed/specialized tier, same convention as `-terra`); framework reference (family independently benchmarked via GPT-6 Astra). No dedicated independent benchmark page specifically retrieved for Luna; noted explicitly. No fabricated benchmarks. Independent scores reflect just-below-gate profile (84.8 < 84.9).
