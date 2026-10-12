# Ling 3.0 Flash VL — findings by Claude Opus 4.6

- Source: InclusionAI / Ling 3.0 Flash VL
- Date: 2026-10-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash VL
- **Short description:** InclusionAI's native multimodal hybrid reasoning MoE model (Sep 2026). 124B total / 5.5B active per token. Handles text, image, and video inputs with visual agent capabilities. MIT licensed open weights.
- **Provider / access:** OpenRouter, Hugging Face open weights. MIT license.
- **Release / knowledge:** 2026-09-10 release.
- **IDs:** `inclusionai/ling-3.0-flash-vl`
- **Context window:** 262,144 tokens; 32,768 max output.
- **Modalities:** Text, image, video in; text out; tool calling; function calling. Native visual perception.
- **Pricing (as of 2026-10-12):** Self-hosted $0 (MIT). API pricing varies by provider.
- **Architecture:** 124B total parameters, 5.5B active per token. MoE. MIT license. BF16/FP8/INT4 quantization options.

### Raw benchmarks found

- Coding leaderboard: #44/198 models (source: designforonline.com)
- General leaderboard: #88/697 models (source: designforonline.com)
- Limited standardized public benchmark data available

### Normalized scores (1–100)

- **Tool use: 72/100.** Tool calling and function calling supported. Visual agent capabilities. 5.5B active limits complex agentic tasks.
- **Reasoning: 70/100.** Hybrid reasoning model. Limited public benchmark verification. Mid-tier positioning on general leaderboards.
- **Context window: 78/100.** 262K input (ref: 262K ≈ 78). 32K max output limits long-form generation.
- **Multimodal: 68/100.** Text + image + video in; text out. Native visual perception. No audio. Video + image = 63–72 range.
- **Coding: 72/100.** Top quartile (#44/198) on coding leaderboard. Limited SWE-bench/LiveCodeBench verification.
- **Cost efficiency: 95/100.** MIT open weights. Only 5.5B active = extremely efficient inference. Excellent for local deployment.
- **Overall Score: 72/100.** Mean of (72 + 70 + 78 + 68 + 72) / 5 = 72.0. Efficient multimodal MoE with good visual capabilities; limited by sparse benchmark verification.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-12
- Method: Public internet research (openrouter.ai, mindstudio.ai, designforonline.com, benchlm.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
