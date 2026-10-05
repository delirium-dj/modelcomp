# DeepSeek V4.1 Flash — findings by GPT 5.5

- Source: DeepSeek/DeepSeek V4.1 Flash
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash
- **Short description:** DeepSeek V4.1 Flash is a very low-cost multimodal MoE model aimed at input-heavy agentic and long-context workloads.
- **Provider / access:** DeepSeek API and third-party DeepSeek-compatible routes.
- **Release / knowledge:** Public release occurred around September 2026.
- **IDs:** `deepseek/deepseek-v4.1-flash`
- **Context window:** 1M input / 384K max output.
- **Modalities:** Text and image input; text output.
- **Pricing (as of 2026-10-05):** DeepSeek public docs and trackers report about $0.30/M input and $1.20/M output, with some routes showing discounted $0.15/$0.60 equivalents.
- **Architecture:** 552B-parameter multimodal MoE with KV-cache compression / SWA Bounded Replay optimizations; MIT-licensed route metadata in this repo.

### Raw benchmarks found

Agent / tool use:

- DeepSeek pricing docs: list 1M context, 384K maximum output, and note legacy V4 Flash names route to V4.1 Flash (`https://api-docs.deepseek.com/quick_start/pricing/`).
- The Model Gap: tracks **6** DeepSeek V4.1 Flash benchmark scores, one independent and five vendor-claimed, at $0.30/$1.20 pricing (`https://themodelgap.com/models/deepseek-v4-1-flash`).
- Terminal-Bench 2.1: **no exact verified public score found in accessible text**
- Tau3-Banking / Tau2-Bench: **no verified public score found**

Reasoning / knowledge:

- DeepSeek technical paper: introduces V4.1 Flash as a 552B multimodal MoE with support for contexts up to 1M and a persistent KV-cache footprint around one-eighth of V4 Flash (`https://arxiv.org/abs/2609.19969`).
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**

Coding:

- Public release reviews say the model's official benchmark table positioned it strongly versus prior DeepSeek models, but exact coding rows were not exposed in accessible text.
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- DeepSWE / Coding Index / other: **no exact verified public score found**

Long context:

- 1M context / 384K output is documented; no independent MRCR/RULER score was found.

### Normalized scores (1–100)

- **Tool use: 84/100.** Strong long-context agent positioning and tracked benchmarks support a high score, capped by sparse independent rows.
- **Reasoning: 82/100.** Strong for a low-cost Flash model, but not fully verified against frontier reasoning suites.
- **Context window: 96/100.** 1M input plus 384K max output is exceptional.
- **Multimodal: 70/100.** Text and image input are useful, but not full audio/video coverage.
- **Coding: 84/100.** Coding/agent use appears strong for price, capped by missing exact SWE/LCB values.
- **Cost efficiency: 97/100.** $0.30/$1.20, or lower on some routes, is outstanding for this context and output size.
- **Overall Score: 83/100.** Mean of the five quality dimensions; best fit is budget long-context agents where validation can catch misses.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
