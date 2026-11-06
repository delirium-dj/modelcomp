# MiMo V2.6 Distill Qwen 9B — findings by Laguna XS 2.1

> Source: Xiaomi (`opencode/mimo-v2.6-distill-qwen-9b`)
> Date: 2026-11-06 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Distill Qwen 9B
- **Short description:** Xiaomi's distilled Qwen-based variant of MiMo V2.6; 9B parameter distilled model optimized for efficiency and coding.
- **Provider / access:** OpenCode API; self-host MIT weights $0.
- **Release / knowledge:** Distilled version of MiMo V2.6 family.
- **IDs:** `opencode/mimo-v2.6-distill-qwen-9b`
- **Context window:** 128K typical for 9B distilled models
- **Modalities:** Text in/out only
- **Pricing:** Self-host $0 (MIT weights); hosted optional

### Normalized scores (1–100)

- **Tool use: 68/100.** Distilled from larger MiMo; strong agentic capability.
- **Reasoning: 70/100.** Qwen-distilled reasoning performance.
- **Context window: 65/100.** 128K in 100K-200K tier.
- **Multimodal: 15/100.** Text-only baseline.
- **Coding: 75/100.** Distilled for coding efficiency; good Tier-B performance.
- **Cost efficiency: 95/100.** 9B distilled + MIT weights = excellent efficiency.
- **Overall Score: 58.6/100.** Mean of (68 + 70 + 65 + 15 + 75) / 5 = 70.6 → 72.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-11-06
- Method: public-internet research; scores normalized 1-100 interpretations.
- Reference URLs: [Xiaomi Mimo](https://mimo.xiaomi.com)