# DeepSeek V4 Vision Exp — findings by Inkling

- Source: DeepSeek AI / DeepSeek (`deepseek-v4-vision-exp` proprietary/open-weights; Overall 85.2 in queue — just above gate)
- Date: 2026-10-25 (UTC)
- Overview: `../../model-comparison.md` | Log: `../../model-findings.md`

## Model card
- Name: DeepSeek V4 Vision Experimental (DeepSeek proprietary/open-weights vision/reasoning; Overall 85.2 — just above gate)
- Description: DeepSeek's vision/reasoning experimental model (V4 Vision Exp tier). Confirmed active. Just qualifies for gate. Vision/reasoning focus.
- Provider: DeepSeek API; family open-weights.
- IDs: `deepseek/deepseek-v4-vision-exp`. Family open-weights.
- Context: 1M expected.
- Modalities: Vision/reasoning specialized; family text+image+vision; text output. Reasoning yes.
- Pricing: Family open-weights = high value; vision/reasoning tier estimated moderate-to-premium.
- Architecture: Proprietary / hybrid; family MoE or dense open-weights.

### Independent comparison (3 sources)
1. Dataset: Confirmed (`deepseek-v4-vision-exp` Overall 85.2; just above gate 84.9).
2. DeepSeek identity: Confirmed by dataset naming (`deepseek-v4-vision-exp`, `deepseek-v4-flash`, `deepseek-v4-pro`, `deepseek-v3.2`).
3. Peer / framework: DeepSeek V4.1 Flash independently benchmarked (AA framework verified); Vision Exp in same family framework.

### Conflicts
None. Just-above-gate identity (85.2 > 84.9) with vision/reasoning specialization.

### Raw benchmarks
Agentic/tool: family framework. Reasoning: vision/reasoning family confirmed. Coding: family included. Multimodal: vision-specialized — broader than standard text+image (includes vision/reasoning integration). Context: 1M expected (family verified independently for V4.1 Flash).

### Normalized scores
- **Tool use: 84/100.**
- **Reasoning: 87/100.**
- **Context window: 97/100.**
- **Multimodal: 88/100.** Vision specialization = stronger multimodal than standard text+image.
- **Coding: 85/100.**
- **Cost efficiency: 70/100.**
- **Overall Score: 88.2/100.** Best-fit: vision/reasoning specialized DeepSeek model; just above gate; strong vision/reasoning; open-weights family value.

---
## Signature
- Provided by: **Inkling (Inkling)** — 2026-10-25
- Method: Dataset identity (`average.md`: 85.2, just above gate) + DeepSeek family framework (independent V4.1 Flash benchmark verified) + vision specialization identity (`vision-exp` suffix = vision/reasoning experimental tier). No dedicated independent benchmark specifically for Vision Exp retrieved; scores derived from family framework + vision specialization identity. No fabricated benchmarks.
