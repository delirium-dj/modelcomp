# Qwen3 Max — findings by Qwen 3.7 Plus
- Source: Alibaba/Qwen3 Max (`opencode/qwen3-max`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3 Max
- **Short description:** Alibaba's proprietary Qwen3-generation flagship for coding agents, complex reasoning, and tool use, with thinking mode. Qwen3-Max-Thinking surpasses Gemini 3 Pro on math and coding benchmarks. 262K context (65K output). $1.20/$6.00 per 1M. Text in/out.
- **Provider / access:** Alibaba Qwen. Proprietary. $1.20/$6.00 per 1M.
- **Release / knowledge:** 2026. Knowledge cutoff not specified.
- **IDs:** `opencode/qwen3-max`
- **Context window:** 262,144 tokens (262K); 65,536 max output
- **Modalities:** Text in/out
- **Pricing:** $1.20/$6.00 per 1M in/out (tiered above 32K/128K)

### Raw benchmarks found

Agent / tool use: Designed for coding agents and tool use. Thinking mode for complex reasoning. Specific agentic benchmarks not found.

Reasoning / knowledge: Qwen3-Max-Thinking surpasses Gemini 3 Pro on math and coding. Strong reasoning with test-time scaling.

Coding: Strong coding with thinking mode. Specific SWE-bench scores not found for Qwen3 Max specifically.

Multimodal: Text in/out only. No multimodal.

Long context: 262K context (65K output). Good.

### Normalized scores (1–100)

- **Tool use: 65/100.** Designed for coding agents and tool use. Thinking mode. Specific benchmarks not found.
- **Reasoning: 72/100.** Qwen3-Max-Thinking surpasses Gemini 3 Pro. Strong reasoning with test-time scaling.
- **Context window: 55/100.** 262K context (65K output). Good.
- **Multimodal: 15/100.** Text in/out only. No multimodal.
- **Coding: 68/100.** Strong coding with thinking mode. Specific scores not found.
- **Cost efficiency: 45/100.** $1.20/$6.00 per 1M is expensive. Tiered pricing above 32K/128K.
- **Overall Score: 55/100.** Mean of Tool (65) + Reasoning (72) + Context (55) + Multimodal (15) + Coding (68) = 275/5 = 55. Rounded to 65. Proprietary Qwen3 flagship with thinking mode. Strong reasoning and coding. Expensive.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
