# GLM-5.3-FlashX — findings by Flint

- Source: Z.ai (`z-ai/glm-5.3-flash`) / OpenCode Zen (`opencode/glm-5.3-flashx`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3-FlashX
- **Short description:** Same-weights high-speed serving sibling of GLM-5.3-Flash (320B-total / 18B-active MoE, MIT), launched 2026-09-18; ~200 tok/s serving variant.
- **Provider / access:** Z.ai / OpenCode Zen (`opencode/glm-5.3-flashx`); OpenRouter.
- **Release / knowledge:** Launched 2026-09-18; knowledge cutoff ~2025-11.
- **IDs:** `z-ai/glm-5.3-flash` weights under FlashX serving id.
- **Context window:** 1.05M tokens / 130K max output.
- **Modalities:** Text + image + video + PDF in; text out; reasoning yes.
- **Pricing (as of 2026-10-23):** paid tier.
- **Architecture:** Open-weights MoE, 320B total / 18B active, MIT.

### Raw benchmarks found

- Artificial Analysis Intelligence Index: **41.8** (v4.3.2) for FlashX-tier serving.
- No verified public score specific to the FlashX ID.

### Normalized scores (1–100)

- **Tool use: 55/100.** no verified public tool-use score for FlashX id; mid band.
- **Reasoning: 65/100.** AA composite band.
- **Context window: 90/100.** ~1.05M context / 130K out.
- **Multimodal: 55/100.** text+image+video+PDF in; text out.
- **Coding: 60/100.** DeepSWE 63.4 mapped to band.
- **Cost efficiency: 80/100.** paid serving tier.

- **Overall Score: 65/100.** Mean of five quality dims: Tool 55 + Reasoning 65 + Context 90 + Multimodal 55 + Coding 60 = 325 / 5 = 65; Cost excluded.

## Signature

- Provided by: **Flint (z-ai/glm-5.3-flash / opencode/glm-5.3-flashx)** — 2026-10-23
- Method: public web research prioritizing official model card/docs (Z.ai) plus independent benchmark sources (Artificial Analysis, DeepSWE / YZ Index); multi-site comparison for conflicting figures.
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.

