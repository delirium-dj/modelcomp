# ox_alpha — findings by Flint

- Source: Z.ai (`z-ai/glm-5.3-flash`) / OpenCode Zen (`opencode/ox_alpha`) / OpenRouter (`stealth/ox-alpha`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** ox_alpha
- **Short description:** Anonymous stealth alias of Z.ai's open-weights GLM-5.3-Flash (320B-total / 18B-active MoE, MIT) revealed on 2026-08-26; stealth preview ran ~2026-08-20..26 before the GLM-5.3-Flash release.
- **Provider / access:** OpenCode Zen (`opencode/ox_alpha`); OpenRouter (`stealth/ox-alpha`); GitHub (`ox-ai/ox-alpha`); OpenAI SDK compatible. Chat Completions.
- **Release / knowledge:** Stealth alias ~2026-08-20; GLM-5.3-Flash release 2026-08-26; knowledge cutoff ~2025-11.
- **IDs:** `ox_alpha` (stealth alias of `z-ai/glm-5.3-flash`).
- **Context window:** 1.05M tokens / 130K max output (YZ Index / OpenCode / Z.ai) — flagged as independently unconfirmed at time of writing.
- **Modalities:** Text + image + video + PDF in; text out; reasoning yes; natively multimodal GLM-5 model.
- **Pricing (as of 2026-10-23):** Free during stealth week (circa 2026-08-20..27); Free Zen tier claim — flagged as live discrepancy requiring correction.
- **Architecture:** Open-weights MoE, 320B total / 18B active, MIT.

### Raw benchmarks found

- Artificial Analysis Intelligence Index: **57** (v4.1.1) / **41.8** (v4.3.2) — version-sensitive composite; blind-arena validation for stealth identity.
- DeepSWE: **63.4**.
- No verified public score for the exact `ox_alpha` alias ID (BenchLM 404; AA 404).

### Normalized scores (1–100)

- **Tool use: 55/100.** no verified public tool-use score for the alias; mid band.
- **Reasoning: 65/100.** reasoning-flagged stealth release; AA composite band.
- **Context window: 90/100.** ~1.05M context / 130K out.
- **Multimodal: 55/100.** text+image+video+PDF in; text out.
- **Coding: 60/100.** DeepSWE 63.4 mapped to band.
- **Cost efficiency: 100/100.** Free stealth tier.

- **Overall Score: 65/100.** Mean of five quality dims: Tool 55 + Reasoning 65 + Context 90 + Multimodal 55 + Coding 60 = 325 / 5 = 65; Cost excluded.

## Signature

- Provided by: **Flint (z-ai/glm-5.3-flash / opencode/ox_alpha)** — 2026-10-23
- Method: public web research prioritizing official model card/docs (Z.ai) plus independent benchmark sources (Artificial Analysis, DeepSWE / YZ Index); multi-site comparison for conflicting figures.
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.

