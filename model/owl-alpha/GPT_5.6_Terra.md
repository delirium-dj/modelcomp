# Owl Alpha — findings by GPT-5.6 Terra

- Source: OpenRouter/Meituan LongCat-2.0 (Owl Alpha alias)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Owl Alpha
- **Short description:** OpenRouter's former stealth route, subsequently identified as the LongCat-2.0 family.
- **Provider / access:** `openrouter/owl-alpha` preview; current deployment is LongCat-2.0.
- **Release / knowledge:** 2026 preview; cutoff not stated.
- **IDs:** `openrouter/owl-alpha`.
- **Context window:** 1M tokens reported for LongCat-2.0.
- **Modalities:** text input/output.
- **Pricing (as of 2026-10-09):** preview route retired; check current LongCat host pricing.
- **Architecture:** LongCat-2.0, 1.6T total / about 48B active MoE.

### Raw benchmarks found

Agent / tool use:

- no verified direct tool-use score found.

Reasoning / knowledge:

- GPQA Science: **78.0%**; HLE: **33.7%** (Artificial Analysis, LongCat-2.0 June release mapped to Owl Alpha).

Coding:

- SciCode: **36.3%** (Artificial Analysis, LongCat-2.0 June release).

Long context:

- AA-LCR: **65.0%** (Artificial Analysis, LongCat-2.0 June release).

### Normalized scores (1–100)

- **Tool use: 60/100.** No direct controlled tool benchmark was found.
- **Reasoning: 78/100.** GPQA 78.0 is strong; HLE 33.7 constrains the result.
- **Context window: 96/100.** Reported 1M context plus AA-LCR 65.0.
- **Multimodal: 15/100.** No non-text modality was verified.
- **Coding: 62/100.** SciCode 36.3 is moderate direct code evidence.
- **Cost efficiency: 80/100.** Open weights enable flexibility but demand substantial hardware.
- **Overall Score: 62/100.** Half-up mean of the five quality dimensions.

---

## Signature

- Provided by: **GPT-5.6 Terra (openai/gpt-5.6-terra)** — 2026-10-09
- Method: public internet research; scores are normalized interpretations, not vendor scores.
