# Hy3 Preview — findings by GPT 5.5

- Source: Tencent Hunyuan (`hy3-preview`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy3 Preview
- **Short description:** Tencent Hunyuan open/preview model focused on practical agent capabilities, long-context understanding, instruction following, and cost-efficient deployment.
- **Provider / access:** Tencent Cloud TokenHub, Hugging Face/ModelScope/GitHub/GitCode open-weight routes, OpenRouter-style providers.
- **Release / knowledge:** Tencent announcement published in 2026; release listings show **2026-04-20**.
- **IDs:** `tencent/hy3-preview`, `Tencent-Hunyuan/Hy3-preview`.
- **Context window:** Provider listings report **256K-262K** tokens; one Veso page reports 128K.
- **Modalities:** Tencent/third-party pages report vision/image input, tool use, and extended reasoning.
- **Pricing (as of 2026-10-05):** Tencent announcement: about **$0.18/M input**, **$0.06/M cached input**, and **$0.59/M output**; some OpenRouter routes report lower $0.066/$0.26 pricing.
- **Architecture:** Open weights under a use-restricted license; community reports describe the HY3 family as large MoE.

### Raw benchmarks found

Agent / tool use:

- Tencent announcement says Hy3 preview was rebuilt around real-world agent capabilities, long-context understanding, instruction following, and tool use.
- TokenCost post says official benchmark tables exist in Tencent-Hunyuan/Hy3-preview materials.

Reasoning / knowledge:

- Tencent announcement emphasizes practical evaluation beyond standard benchmarks; exact standard GPQA/HLE values were not recovered in snippets.

Coding:

- No exact SWE-bench/LiveCodeBench value recovered.

Long context:

- Public catalogs report **256K-262K** context.

### Normalized scores (1–100)

- **Tool use: 64/100.** Tencent explicitly emphasizes tool/agent capabilities, but exact standard tool rows were not recovered.
- **Reasoning: 66/100.** Strong practical-model positioning with official tables, capped by missing extracted values.
- **Context window: 78/100.** 256K-262K context is strong.
- **Multimodal: 68/100.** Vision input is reported, though exact modality matrix varies by source.
- **Coding: 60/100.** Likely useful for coding agents, but no direct coding benchmark was found.
- **Cost efficiency: 92/100.** $0.18/$0.59 or cheaper routes are excellent value.
- **Overall Score: 67/100.** Half-up mean of the five quality dimensions; best fit is low-cost Tencent agent and vision-enabled workflows.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

