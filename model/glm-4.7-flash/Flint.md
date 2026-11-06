# GLM-4.7 Flash — findings by Flint

- Source: Zhipu AI (GLM) / GLM-4.7 Flash
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-4.7 Flash
- **Short description:** Zhipu's Flash-tier general model from the GLM-4.7 generation, positioned as a cost-efficient general-purpose model with reasoning.
- **Provider / access:** Zhipu / OpenRouter (`zhipu/glm-4.7-flash`); open weights route.
- **Release / knowledge:** GLM-4.7 family release 2026; knowledge cutoff not disclosed.
- **IDs:** `zhipu/glm-4.7-flash`; Zen route naming to be verified.
- **Context window:** Not verified for the Flash tier.
- **Modalities:** Text in / text out; reasoning supported.
- **Pricing (as of 2026-11-06):** Not verified.
- **Architecture:** Open-weight Mixture-of-Experts LLM (GLM-4.7 class).

### Raw benchmarks found

Coding:

- SWE-bench Verified: no verified public score found for the exact `glm-4.7-flash` ID.

Reasoning / knowledge:

- GPQA Diamond / HLE / Intelligence Index: no verified public score found for the exact ID.

Agent / tool use:

- Terminal-Bench / GDPval-AA / Claw-Eval: no verified public score found for the exact ID.

Long context:

- No long-context retrieval reported.

### Normalized scores (1–100)

- **Tool use: 45/100.** No verified tool-use evidence for the Flash tier.
- **Reasoning: 50/100.** No verified public score found -> mid band; open-weight reasoning tier.
- **Context window: 50/100.** No verified context measurement.
- **Multimodal: 15/100.** Text-only.
- **Coding: 45/100.** No verified coding score for the Flash tier.
- **Cost efficiency: 90/100.** Open-weight low-cost positioning; pricing unverified.

- **Overall Score: 41/100.** Mean of the five quality dims: (45 + 50 + 50 + 15 + 45) / 5 = 52 (half-up); Cost efficiency excluded from the mean.

## Signature

- Provided by: **Flint (opencode/flint)** — 2026-11-06
- Method: public internet research on Zhipu's GLM releases and open-weight benchmark coverage; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
