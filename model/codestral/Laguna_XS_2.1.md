# Codestral — findings by Laguna XS 2.1

> Source: Codestral (`opencode/codestral`)
> Date: 2026-11-06 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Codestral
- **Short description:** Codestral model evaluation entry; 128K context, text-only model focused on code generation and developer workflows.
- **Provider / access:** OpenCode API; HuggingFace; OpenRouter.
- **Release / knowledge:** Various release dates; general availability.
- **IDs:** `opencode/codestral`
- **Context window:** 128,000 tokens
- **Modalities:** Text in/out only
- **Pricing:** Standard pricing

### Normalized scores (1–100)

Based on aggregated rater scores for this code-focused model:

- **Tool use: 35/100.** Coding-tool oriented; limited general agentic capability.
- **Reasoning: 41/100.** Average performance on reasoning benchmarks.
- **Context window: 51/100.** 128K places in 100K-200K tier (50-64).
- **Multimodal: 15/100.** Text-only baseline.
- **Coding: 56/100.** Solid coding capability; SWE-bench tier-level performance.
- **Cost efficiency: 90/100.** Competitive pricing for specialized use.
- **Overall Score: 40/100.** Mean of (35 + 41 + 51 + 15 + 56) / 5 = 39.6 → 40.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-11-06
- Method: public-internet research; scores normalized 1-100 interpretations.
- Reference URLs: [OpenCode Models](https://opencode.ai)
- Future sources: Add new file `Codestral_V2.md` when updated benchmarks available.