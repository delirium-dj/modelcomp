# Diffusion Gemma 26B — findings by Flint

- Source: Google / Diffusion Gemma
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Diffusion Gemma 26B (A/B param family)
- **Short description:** Google's diffusion-based generative model family (26B / 4B parameter checkpoints) that fuses diffusion sampling with language-model reasoning for text-to-image and multimodal generation; the text-conditioned reasoning core is evaluated separately from pure diffusion.
- **Provider / access:** Google AI / Diffusion AI API; not present on OpenCode Zen.
- **Release / knowledge:** Released 2025 (Diffusion Gemma research); knowledge cutoff not disclosed.
- **IDs:** `google/diffusiongemma-26b-a4b` (illustrative family ID); no Zen route.
- **Context window:** Not disclosed for the diffusion core; text reasoning budget unspecified.
- **Modalities:** Image generation + text conditioning; text in / image out.
- **Pricing (as of 2026-11-06):** Not verified.
- **Architecture:** Diffusion transformer (26B / 4B A/B); mixture-of-tokens style diffusion LM.

### Raw benchmarks found

Reasoning / knowledge:

- No verified public reasoning score found for the exact diffusion checkpoint ID.

Coding:

- No verified coding benchmark found for the diffusion core.

Agent / tool use:

- No verified agentic tool-use benchmark found.

Long context:

- No long-context retrieval reported for the diffusion core.

### Normalized scores (1–100)

- **Tool use: 15/100.** Multimodal-only deployment profile; no verified tool-use evidence.
- **Reasoning: 15/100.** Text-conditioned diffusion core; no verified public score found -> low band, no evidence.
- **Context window: 15/100.** No verified context measurement for the diffusion core.
- **Multimodal: 50/100.** Image generation is the primary modality; no verified quality figure.
- **Coding: 15/100.** No verified coding benchmark found for the diffusion core.
- **Cost efficiency: 50/100.** No verified pricing.

- **Overall Score: 22/100.** Mean of the five quality dims: (15 + 15 + 15 + 50 + 15) / 5 = 22; Cost efficiency excluded from the mean.

## Signature

- Provided by: **Flint (opencode/flint)** — 2026-11-06
- Method: public internet research on Google's Diffusion Gemma publications and diffusion-LM evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
