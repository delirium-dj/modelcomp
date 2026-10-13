# GLM 5.2 Coding — findings by Qwen 3.7 Plus
- Source: Z.ai/GLM-5.2 Coding (`opencode/glm-5.2-coding`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.2 Coding
- **Short description:** Zhipu Z.ai's June 2026 open-weights MoE flagship (744B/40B-active, MIT) as a coding-plane SKU. Scores 62.1% on SWE-bench Pro (surpassing GPT-5.5 58.6%), 81.0 on Terminal-Bench 2.1 (near Opus 4.8 85.0), 74.4 on FrontierSWE (near Opus 4.8 75.1), 99.2 on AIME 2026, and 91.2 on GPQA-Diamond. 128K context window on Zen coding tier (1M on base GLM-5.2). Text-only. Claude Code-compatible drop-in at ~1/6 closed-frontier cost. MIT license with no regional limits or usage caps.
- **Provider / access:** Z.ai / Zhipu AI (open weights, MIT license). Available via OpenCode, Featherless, and OpenAI-compatible APIs.
- **Release / knowledge:** June 16, 2026. Knowledge cutoff not specified.
- **IDs:** `opencode/glm-5.2-coding`
- **Context window:** 128,000 tokens (Zen coding tier); 1,000,000 tokens (base GLM-5.2)
- **Modalities:** Text in; text out
- **Pricing:** $1.40 in / $4.40 out per 1M ($0.26 cached input)

### Raw benchmarks found

Agent / tool use: SWE-bench Pro 62.1% (surpasses GPT-5.5 58.6%, Gemini 3.1 Pro 54.2%). Terminal-Bench 2.1 81.0 (near Opus 4.8 85.0, ahead of Gemini 3.1 Pro 74.0). FrontierSWE 74.4 (near Opus 4.8 75.1, edges out GPT-5.5 72.6). SWE-Marathon 13.0 (trails Opus 4.8 by 13 points). PostTrainBench: second only to Opus 4.8. Claude Code-compatible drop-in.

Reasoning / knowledge: AIME 2026 99.2 (up from 95.3 in GLM-5.1). GPQA-Diamond 91.2 (up from 86.2 in GLM-5.1). Exceptional reasoning scores.

Coding: SWE-bench Pro 62.1% (best open-weight model, surpasses GPT-5.5 58.6%). Terminal-Bench 2.1 81.0 (near Opus 4.8 85.0). FrontierSWE 74.4 (near Opus 4.8 75.1). SWE-Marathon 13.0. PostTrainBench: second only to Opus 4.8. Highest-ranked open-source model across long-horizon coding benchmarks.

Multimodal: Text-only. No image or audio input support.

Long context: 128K context window on Zen coding tier. 1M on base GLM-5.2. IndexShare architecture reduces per-token compute by 2.9x at long context lengths.

### Normalized scores (1–100)

- **Tool use: 78/100.** SWE-bench Pro 62.1%, Terminal-Bench 2.1 81.0, FrontierSWE 74.4 are outstanding for an open-weight model. Competitive with Claude Opus 4.8 on long-horizon coding. Claude Code-compatible.
- **Reasoning: 90/100.** AIME 2026 99.2 and GPQA-Diamond 91.2 are exceptional. Among the highest reasoning scores of any model.
- **Context window: 55/100.** 128K on Zen coding tier is moderate. 1M available on base GLM-5.2 but the coding SKU is limited to 128K.
- **Multimodal: 15/100.** Text-only. No image or audio input. Significant limitation vs multimodal frontier models.
- **Coding: 85/100.** Best open-weight coding model in mid-2026. SWE-bench Pro 62.1% surpasses GPT-5.5. Terminal-Bench 2.1 81.0 and FrontierSWE 74.4 are near Claude Opus 4.8. Only trails on SWE-Marathon (13.0 vs 26.0).
- **Cost efficiency: 75/100.** $1.40/$4.40 per 1M is ~1/6 closed-frontier cost. MIT license with no restrictions. Excellent value for coding performance.
- **Overall Score: 65/100.** Mean of Tool (78) + Reasoning (90) + Context (55) + Multimodal (15) + Coding (85) = 323/5 = 64.6. Rounded to 65. Best open-weight coding model with exceptional reasoning, but text-only limitation and moderate context window on the coding tier hold it back from frontier overall scores.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
