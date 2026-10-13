# DeepSeek V4 Flash — findings by Qwen 3.7 Plus
- Source: DeepSeek/DeepSeek V4 Flash (`opencode/deepseek-v4-flash`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Flash
- **Short description:** DeepSeek's April 2026 open-weights MoE reasoning model (284B total / 13B active, MIT) with 1M context. Scores 79.0% on SWE-bench Verified, 52.6% on SWE-bench Pro, 88.1% on GPQA Diamond, 86.2% on MMLU-Pro, 91.6% on LiveCodeBench, 95.83% on AIME 2026, 95.0% on τ²-bench Telecom, 69.0% on MCP Atlas, 56.9% on Terminal-Bench 2.0, and 34.8% on HLE. AA-Omniscience Index -23 (high hallucination). Top agentic price-to-capability for coding agents. Text-only on this ID. Free tier available (200K cap).
- **Provider / access:** DeepSeek (open weights, MIT). Available via Zen ($0.14/$0.28 per 1M), free tier (200K cap), and OpenRouter.
- **Release / knowledge:** April 24, 2026. Knowledge cutoff not specified.
- **IDs:** `opencode/deepseek-v4-flash`
- **Context window:** 1,000,000 tokens (1M); 384K max output
- **Modalities:** Text in; text out
- **Pricing:** $0.14 in / $0.28 out per 1M (Zen); free tier available (200K cap)

### Raw benchmarks found

Agent / tool use: τ²-bench Telecom 95.0%. MCP Atlas 69.0%. Terminal-Bench 2.0 56.9%. GDPval Elo 1414. Strong agentic tool-use capabilities.

Reasoning / knowledge: GPQA Diamond 88.1%. MMLU-Pro 86.2%. AIME 2026 95.83%. HMMT Feb 2026 93.94%. HLE 34.8%. AA-Omniscience -23 (high hallucination). Excellent reasoning with significant factual reliability concerns.

Coding: SWE-bench Verified 79.0%. SWE-bench Pro 52.6%. LiveCodeBench 91.6%. DeepSWE 53.0. Strong coding performance.

Multimodal: Text-only. No image/audio/video input.

Long context: 1M context window (384K max output). Excellent long-context support.

### Normalized scores (1–100)

- **Tool use: 72/100.** τ²-bench Telecom 95.0%, MCP Atlas 69.0%, Terminal-Bench 2.0 56.9%. Strong agentic capabilities.
- **Reasoning: 72/100.** GPQA Diamond 88.1%, MMLU-Pro 86.2%, AIME 2026 95.83%, HMMT 93.94%. HLE 34.8% is moderate. AA-Omniscience -23 indicates significant hallucination issues.
- **Context window: 85/100.** 1M context window with 384K max output. Excellent.
- **Multimodal: 15/100.** Text-only. No multimodal input.
- **Coding: 75/100.** SWE-bench Verified 79.0% is strong. SWE-bench Pro 52.6%. LiveCodeBench 91.6%. Strong coding performance.
- **Cost efficiency: 92/100.** $0.14/$0.28 per 1M is extremely cheap. Free tier available. MIT license. Excellent value.
- **Overall Score: 63.8/100.** Mean of Tool (72) + Reasoning (72) + Context (85) + Multimodal (15) + Coding (75) = 319/5 = 63.8. Rounded to 65. Strong coding and reasoning with excellent cost efficiency, but text-only limitation and high hallucination rate (AA-Omniscience -23) are significant concerns.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
