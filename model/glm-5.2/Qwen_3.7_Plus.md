# GLM 5.2 — findings by Qwen 3.7 Plus
- Source: Z.ai/GLM-5.2 (`opencode/glm-5.2`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.2
- **Short description:** Zhipu Z.ai's June 2026 open-weights MoE flagship (744B/40B-active, MIT). Scores 62.1% on SWE-bench Pro (surpassing GPT-5.5 58.6%), 81.0 on Terminal-Bench 2.1 (near Opus 4.8 85.0), 74.4 on FrontierSWE (near Opus 4.8 75.1), 99.2 on AIME 2026, and 91.2 on GPQA-Diamond. 1M context window (204K served). Text-only. Best open-weight coding model at release. Claude Code-compatible. Free Zen tier available. MIT license with no regional limits.
- **Provider / access:** Z.ai / Zhipu AI (open weights, MIT license). Available via OpenCode, Featherless, and OpenAI-compatible APIs. Free Zen tier available.
- **Release / knowledge:** June 16, 2026. Knowledge cutoff not specified.
- **IDs:** `opencode/glm-5.2`
- **Context window:** 1,000,000 tokens (1M); 204K served
- **Modalities:** Text in; text out
- **Pricing:** Free Zen tier available; paid pricing varies by provider

### Raw benchmarks found

Agent / tool use: SWE-bench Pro 62.1% (surpasses GPT-5.5 58.6%, Gemini 3.1 Pro 54.2%). Terminal-Bench 2.1 81.0 (near Opus 4.8 85.0, ahead of Gemini 3.1 Pro 74.0). FrontierSWE 74.4 (near Opus 4.8 75.1, edges out GPT-5.5 72.6). SWE-Marathon 13.0 (trails Opus 4.8 by 13 points). PostTrainBench: second only to Opus 4.8. Claude Code-compatible drop-in.

Reasoning / knowledge: AIME 2026 99.2 (up from 95.3 in GLM-5.1). GPQA-Diamond 91.2 (up from 86.2 in GLM-5.1). Exceptional reasoning scores.

Coding: SWE-bench Pro 62.1% (best open-weight model, surpasses GPT-5.5 58.6%). Terminal-Bench 2.1 81.0 (near Opus 4.8 85.0). FrontierSWE 74.4 (near Opus 4.8 75.1). SWE-Marathon 13.0. PostTrainBench: second only to Opus 4.8. Highest-ranked open-source model across long-horizon coding benchmarks.

Multimodal: Text-only. No image or audio input support.

Long context: 1M context window (204K served). IndexShare architecture reduces per-token compute by 2.9x at long context lengths. Improved multi-token-prediction layer raises speculative-decoding acceptance by ~20%.

### Normalized scores (1–100)

- **Tool use: 78/100.** SWE-bench Pro 62.1%, Terminal-Bench 2.1 81.0, FrontierSWE 74.4 are outstanding for an open-weight model. Competitive with Claude Opus 4.8 on long-horizon coding. Claude Code-compatible.
- **Reasoning: 90/100.** AIME 2026 99.2 and GPQA-Diamond 91.2 are exceptional. Among the highest reasoning scores of any model.
- **Context window: 80/100.** 1M context window (204K served) is excellent. IndexShare architecture optimizes long-context efficiency.
- **Multimodal: 15/100.** Text-only. No image or audio input. Significant limitation vs multimodal frontier models.
- **Coding: 85/100.** Best open-weight coding model in mid-2026. SWE-bench Pro 62.1% surpasses GPT-5.5. Terminal-Bench 2.1 81.0 and FrontierSWE 74.4 are near Claude Opus 4.8. Only trails on SWE-Marathon (13.0 vs 26.0).
- **Cost efficiency: 85/100.** Free Zen tier available. MIT license with no restrictions. ~1/6 closed-frontier cost. Excellent value for coding performance.
- **Overall Score: 70/100.** Mean of Tool (78) + Reasoning (90) + Context (80) + Multimodal (15) + Coding (85) = 348/5 = 69.6. Rounded to 70. Best open-weight coding model with exceptional reasoning and long context, but text-only limitation holds it back from frontier overall scores.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
