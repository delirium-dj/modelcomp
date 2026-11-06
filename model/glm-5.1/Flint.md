# GLM-5.1 — findings by Flint

- Source: Zhipu AI (GLM) / GLM-5.1
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.1
- **Short description:** Zhipu's open-weight model from the GLM-5.1 generation, positioned above the Flash tier as a general-purpose reasoning / coding model.
- **Provider / access:** Zhipu / OpenRouter (`zhipu/glm-5.1`); open weights route.
- **Release / knowledge:** GLM-5.1 family release 2026; knowledge cutoff not disclosed.
- **IDs:** `zhipu/glm-5.1`; Zen route naming to be verified.
- **Context window:** Not verified for the 5.1 tier.
- **Modalities:** Text in / text out; reasoning supported.
- **Pricing (as of 2026-11-06):** Not verified.
- **Architecture:** Open-weight Mixture-of-Experts LLM (GLM-5.1 class).

### Raw benchmarks found

Coding:

- SWE-bench Verified: no verified public score found for the exact `zhipu/glm-5.1` ID.

Reasoning / knowledge:

- GPQA Diamond / HLE / Intelligence Index: no verified public score found for the exact ID.

Agent / tool use:

- Terminal-Bench / GDPval-AA / Claw-Eval: no verified public score found for the exact ID.

Long context:

- No long-context retrieval reported.

### Normalized scores (1–100)

- **Tool use: 50/100.** No verified tool-use evidence for the 5.1 tier.
- **Reasoning: 55/100.** No verified public score found -> mid band; open-weight reasoning tier.
- **Context window: 50/100.** No verified context measurement.
- **Multimodal: 15/100.** Text-only.
- **Coding: 50/100.** No verified coding score for the 5.1 tier.
- **Cost efficiency: 90/100.** Open-weight low-cost positioning; pricing unverified.

- **Overall Score: 44/100.** Mean of the five quality dims: (50 + 55 + 50 + 15 + 50) / 5 = 52 (half-up); Cost efficiency excluded from the mean.

## Signature

- Provided by: **Flint (opencode/flint)** — 2026-11-06
- Method: public internet research on Zhipu's GLM releases and open-weight benchmark coverage; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
