# GLM-4.6V Flash — findings by Flint

- Source: Zhipu AI (GLM) / GLM-4.6V Flash
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-4.6V Flash
- **Short description:** Zhipu's Flash-tier multimodal general model (V suffix = vision-enabled GLM-4.6 class), accepting image inputs alongside text reasoning.
- **Provider / access:** Zhipu / OpenRouter (`zhipu/glm-4.6v-flash`); open weights route.
- **Release / knowledge:** GLM-4.6 family release 2026; knowledge cutoff not disclosed.
- **IDs:** `zhipu/glm-4.6v-flash`; Zen route naming to be verified.
- **Context window:** Not verified for the V tier.
- **Modalities:** Text in, image in → text out; reasoning supported.
- **Pricing (as of 2026-11-06):** Not verified.
- **Architecture:** Open-weight Mixture-of-Experts LLM with vision (GLM-4.6 class).

### Raw benchmarks found

Reasoning / knowledge:

- GPQA Diamond / MMMU-Pro / Intelligence Index: no verified public score found for the exact `glm-4.6v-flash` ID.

Coding:

- SWE-bench Verified: no verified public score found for the exact ID.

Agent / tool use:

- Terminal-Bench / GDPval-AA / Claw-Eval: no verified public score found for the exact ID.

Long context:

- No long-context retrieval reported.

### Normalized scores (1–100)

- **Tool use: 45/100.** No verified tool-use evidence for the V tier.
- **Reasoning: 50/100.** No verified public score found -> mid band; vision-augmented reasoning tier.
- **Context window: 50/100.** No verified context measurement.
- **Multimodal: 60/100.** Image in → text out supported (text + vision modality).
- **Coding: 45/100.** No verified coding score for the V tier.
- **Cost efficiency: 90/100.** Open-weight low-cost positioning; pricing unverified.

- **Overall Score: 50/100.** Mean of the five quality dims: (45 + 50 + 50 + 60 + 45) / 5 = 50 (half-up); Cost efficiency excluded from the mean.

## Signature

- Provided by: **Flint (opencode/flint)** — 2026-11-06
- Method: public internet research on Zhipu's GLM releases and open-weight benchmark coverage; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
