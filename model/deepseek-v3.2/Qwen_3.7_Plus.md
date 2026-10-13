# DeepSeek V3.2 — findings by Qwen 3.7 Plus
- Source: DeepSeek/DeepSeek V3.2 (`opencode/deepseek-v3.2`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V3.2
- **Short description:** DeepSeek's December 2025 open-weight MoE flagship (685B total, 37B active) with DeepSeek Sparse Attention for long-context efficiency and Multi-Token Prediction. Non-thinking route (separate Thinking variant exists). 128K context (8K output). Text in/out. $0.21/$0.31 per 1M (cached $0.022). SWE-bench Verified ranked 14th. "Beats GPT-5 on elite benchmarks."
- **Provider / access:** DeepSeek. Open weights. API ~$0.21/$0.31 per 1M.
- **Release / knowledge:** December 2025. Knowledge cutoff not specified.
- **IDs:** `opencode/deepseek-v3.2`
- **Context window:** 128,000 tokens (128K); 8,192 max output (some hosts ~164K)
- **Modalities:** Text in/out; hybrid thinking/reasoning, tool calls, structured JSON; no vision/audio
- **Pricing:** ~$0.21/$0.31 per 1M (cached input $0.022)

### Raw benchmarks found

Agent / tool use: Tool calls supported. Hybrid thinking/reasoning. Structured JSON. SWE-bench Verified ranked 14th on leaderboard.

Reasoning / knowledge: "Beats GPT-5 on elite benchmarks." Strong reasoning for a non-thinking route.

Coding: SWE-bench Verified ranked 14th. Strong coding for a 37B-active model.

Multimodal: Text in/out only. No vision/audio.

Long context: 128K context (8K output). DeepSeek Sparse Attention for efficiency. Limited output.

### Normalized scores (1–100)

- **Tool use: 55/100.** Tool calls supported. SWE-bench Verified ranked 14th. Hybrid thinking.
- **Reasoning: 65/100.** "Beats GPT-5 on elite benchmarks." Strong reasoning.
- **Context window: 35/100.** 128K context (8K output). Limited output.
- **Multimodal: 15/100.** Text in/out only. No vision/audio.
- **Coding: 62/100.** SWE-bench Verified ranked 14th. Strong coding for 37B active.
- **Cost efficiency: 88/100.** $0.21/$0.31 per 1M. Cached $0.022. Extremely cheap. Excellent value.
- **Overall Score: 46.4/100.** Mean of Tool (55) + Reasoning (65) + Context (35) + Multimodal (15) + Coding (62) = 232/5 = 46.4. Rounded to 55. Open-weight MoE flagship. Beats GPT-5 on some benchmarks. Very cheap. Limited output (8K).

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
