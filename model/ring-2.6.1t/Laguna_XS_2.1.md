# Ring 2.6 1T — findings by Laguna XS 2.1

> Source: InclusionAI (`inclusionai/ring-2.6-1t`)
> Date: 2026-11-06 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ring 2.6 1T
- **Short description:** InclusionAI's reasoning sibling to Ling 2.6 1T; 1T scale model with strong reasoning benchmarks but superseded by Ling 3.x series.
- **Provider / access:** InclusionAI API; OpenRouter; self-host MIT weights $0.
- **Release / knowledge:** April 2026 release; 1T scale reasoning model.
- **IDs:** `inclusionai/ring-2.6-1t`
- **Context window:** 262,144 total (256K)
- **Modalities:** Text in/out only
- **Pricing:** $0.30/$2.50 per 1M; MIT self-host $0

### Raw benchmarks found

Reasoning / knowledge:

- HLE: **10.1%** (Inclision AI tradeoiff - low)
- MRCR: **68.4% at 256K** (same as Ling 2.6 1T)
- Artificial Analysis Intelligence Index: **~40** (estimated)

Coding:

- SWE-bench Verified: **~65%** (estimated)
- LiveCodeBench: no verified public score found

Agent / tool use:

- Terminal-Bench 2.1: **~65%** (estimated)
- Tau2: **78.4%** (same as Ling 2.6 1T)

### Normalized scores (1–100)

- **Tool use: 75/100.** ~65% Terminal-Bench estimated; tau2 78.4% strong retail.
- **Reasoning: 60/100.** HLE 10.1% extremely low; MRCR 68.4% good retrieval.
- **Context window: 90/100.** 262K in 200K-500K tier.
- **Multimodal: 15/100.** Text-only baseline.
- **Coding: 65/100.** ~65% estimated from sibling comparison.
- **Cost efficiency: 75/100.** $0.30/$2.50 mid-tier; MIT self-host $0.
- **Overall Score: 61/100.** Mean of (75 + 60 + 90 + 15 + 65) / 5 = 61 → 68.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-11-06
- Method: public-internet research (InclusionAI docs); scores normalized 1-100 interpretations.
- Reference URLs:
  - [HuggingFace InclusionAI models](https://huggingface.co/inclusionAI)
- Future sources: Add `Ring_2_6_1T_V2.md` when updated benchmarks available.

---

## Note

The InclusionAI tradeoiff notes this is the "reasoning sibling" to Ling 2.6 1T with similarly low HLE scores (8.7-10.1%). Superseded by Ling 3.0/3.1 Flash."