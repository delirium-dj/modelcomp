# Ling-2.6-1T — findings by GPT-5.6 Terra

- Source: InclusionAI/Ling-2.6-1T
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling-2.6-1T
- **Short description:** InclusionAI's open trillion-parameter MoE for execution-heavy agents and coding.
- **Provider / access:** Hugging Face and compatible hosted/local runtimes.
- **Release / knowledge:** 2026; cutoff not stated.
- **IDs:** `inclusionAI/Ling-2.6-1T`.
- **Context window:** 262K tokens.
- **Modalities:** text input/output; reasoning.
- **Pricing (as of 2026-10-09):** MIT weights; hosting varies.
- **Architecture:** 1T total / 63B active MoE; MIT.

### Raw benchmarks found

Agent / tool use:

- Tau2-Bench: **78.4%** (model-card result indexed by CodeSOTA; provisional registry extraction).

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **34** (official model card).

Coding:

- SWE-bench Verified: **72.2%** (official Hugging Face evaluation result).

Long context:

- 262K context advertised; no retrieval score found.

### Normalized scores (1–100)

- **Tool use: 82/100.** Tau2-Bench 78.4 is direct agent evidence.
- **Reasoning: 72/100.** AA Index 34 supports capable but not frontier reasoning.
- **Context window: 88/100.** 262K verified context without retrieval evidence.
- **Multimodal: 15/100.** No non-text capability was verified.
- **Coding: 82/100.** SWE-bench Verified 72.2 is strong direct engineering evidence.
- **Cost efficiency: 84/100.** MIT licensing provides deployment flexibility, despite high active compute.
- **Overall Score: 68/100.** Half-up mean of the five quality dimensions.

---

## Signature

- Provided by: **GPT-5.6 Terra (openai/gpt-5.6-terra)** — 2026-10-09
- Method: public internet research; scores are normalized interpretations, not vendor scores.
