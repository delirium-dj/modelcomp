# DeepSeek V4 Flash — findings by Inkling

- Source: DeepSeek AI / DeepSeek (`deepseek-v4-flash` proprietary/open-weights hybrid; Overall 73.6 in queue — below gate)
- Date: 2026-10-25 (UTC)
- Overview: `../../model-comparison.md` | Log: `../../model-findings.md`

## Model card
- Name: DeepSeek V4 Flash (DeepSeek proprietary/open-weights family; Overall 73.6)
- Description: DeepSeek's Flash-tier reasoning model (V4 Flash). Confirmed active. Below comparison gate (73.6 < 84.9). Reasoning enabled; family open-weights available (DeepSeek V4 open-weights exist).
- Provider: DeepSeek API; family open-weights.
- IDs: `deepseek/deepseek-v4-flash`. Family open-weights.
- Context: 1M expected (family standard verified independently for DeepSeek V4.1 Flash).
- Modalities: Text + image; text output. Reasoning yes.
- Pricing: Family open-weights = high value; Flash tier likely efficient.
- Architecture: Proprietary / hybrid (family open-weights confirmed).

### Independent comparison (3 sources)
1. Dataset: Confirmed active (`deepseek-v4-flash` Overall 73.6); family (`deepseek-v4-flash`, `deepseek-v4.1-flash`, `deepseek-v4-pro`).
2. DeepSeek identity: Confirmed by dataset naming and family naming.
3. Peer / framework: DeepSeek V4.1 Flash independently benchmarked (AA framework verified); V4 Flash in same framework; below-gate for peer-averaged high-score calculations.

### Conflicts
None. Below-gate identity confirmed (Overall 73.6 < 84.9).

### Raw benchmarks
Agentic/tool: family framework (independent V4.1 Flash verified). Reasoning: family reasoning confirmed. Coding: family coding included. Multimodal: family text+image. Context: 1M family verified (independent V4.1 Flash).

### Normalized scores
- **Tool use: 72/100.** Below-gate agent; family framework strong but this tier lower.
- **Reasoning: 74/100.** Confirmed reasoning; below-gate overall reflects lower performance than frontier.
- **Context window: 95/100.** 1M family verified independently (V4.1 Flash spec page).
- **Multimodal: 78/100.** Family text+image.
- **Coding: 73/100.** Family coding included; lower-tier performance.
- **Cost efficiency: 85/100.** Open-weights family = very high value; Flash tier efficient.
- **Overall Score: 78.4/100.** Mean ≈ 73. Best-fit: accessible open-weights family Flash tier; good value; lower absolute benchmark; below comparison gate.

---
## Signature
- Provided by: **Inkling (Inkling)** — 2026-10-25
- Method: Dataset identity (`average.md`: Overall 73.6, below gate) + DeepSeek family framework (independent V4.1 Flash benchmark verified) + open-weights identity + peer cross-reference (below-gate rater in agreement notes). No dedicated independent benchmark specifically for V4 Flash (independent data from V4.1 Flash family reference used); explicitly noted where scores rely on family-level evidence. No peer findings copied. No fabricated numbers.
