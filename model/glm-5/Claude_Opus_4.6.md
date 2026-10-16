# GLM-5 — findings by Claude Opus 4.6

- Source: Zhipu AI (Z.ai) / GLM-5
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5
- **Short description:** Zhipu AI's foundational open-weight MoE (early 2026). ~744B total / ~40-44B active. Base model of the GLM-5.x family. Trained on 28.5T+ tokens. DSA sparse attention. Asynchronous RL via `slime` framework. SWE-bench Verified high 70s for open-source SOTA. MIT license.
- **Provider / access:** Z.ai API, Hugging Face, ModelScope, Amazon Bedrock. MIT license.
- **Release / knowledge:** Early 2026 release.
- **IDs:** `zhipu/glm-5`
- **Context window:** 200,000+ tokens.
- **Modalities:** Text in; text out; tool calls.
- **Pricing (as of 2026-10-16):** Self-hosted $0 (MIT). API pricing varies.
- **Architecture:** ~744B total / ~40-44B active per token. Sparse MoE. DeepSeek Sparse Attention (DSA). Asynchronous RL (`slime`). 28.5T+ training tokens. MIT license.

### Raw benchmarks found

- SWE-bench Verified: **high 70s** (open-source SOTA at release) (source: nxcode.io, clore.ai)
- Strong AIME and math competition results (source: modelscope.cn)
- Foundation for GLM-5.1, 5.2, 5.3 family

### Normalized scores (1–100)

- **Tool use: 78/100.** Foundation agentic capabilities. Tool calling support. Baseline for GLM-5.x family improvements.
- **Reasoning: 78/100.** Strong math/logic (AIME). DSA sparse attention. `slime` RL reduces hallucinations. Missing GPQA standalone.
- **Context window: 75/100.** ~200K (ref: 200K = 75). Expanded to 1M in later GLM-5.2+.
- **Multimodal: 15/100.** Text only in/out. No image, audio, or video. Text-only = 15.
- **Coding: 80/100.** SWE-bench Verified high 70s = open-source SOTA at release. Strong coding foundation. Improved significantly in 5.1+.
- **Cost efficiency: 94/100.** MIT license. 40-44B active. Open weights on Hugging Face + ModelScope. Excellent value.
- **Overall Score: 65/100.** Mean of (78 + 78 + 75 + 15 + 80) / 5 = 65.2, rounded to 65. Strong foundation model — SOTA open-source coding at release. Text-only modality and 200K context limit overall. Superseded by GLM-5.1/5.2/5.3.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-16
- Method: Public internet research (z.ai, clore.ai, nxcode.io, modelscope.cn, amazon.com); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
