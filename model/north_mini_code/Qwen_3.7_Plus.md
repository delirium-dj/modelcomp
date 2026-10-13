# North Mini Code — findings by Qwen 3.7 Plus
- Source: Cohere/North Mini Code (`opencode/north_mini_code`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** North Mini Code
- **Short description:** Cohere's June 2026 open-weight MoE reasoning model for code (30B total, 3B active, Apache 2.0). 256K context. Text in/out; reasoning. SWE-bench Verified 67.6%, SWE-bench Pro 40.2%, Terminal-Bench v2 36.0. AA Coding Index 33.4. Free tier ($0/$0). Sub-second latency. "First open agentic coder." 2.8x throughput vs Devstral Small 2.
- **Provider / access:** Cohere. Open weights (Apache 2.0). Free tier ($0/$0).
- **Release / knowledge:** June 2026. Knowledge cutoff not specified.
- **IDs:** `opencode/north_mini_code`
- **Context window:** 256,000 tokens (256K)
- **Modalities:** Text in/out; reasoning; no vision/audio
- **Pricing:** Free tier ($0/$0)

### Raw benchmarks found

Agent / tool use: Agentic coding. Terminal-Bench v2 36.0. Terminal-Bench Hard 31.1. Tool calls supported.

Reasoning / knowledge: Reasoning mode. No general reasoning benchmarks. Coding-focused.

Coding: SWE-bench Verified 67.6%. SWE-bench Pro 40.2%. AA Coding Index 33.4. "First open agentic coder."

Multimodal: Text in/out only. No vision/audio.

Long context: 256K context. Good for large codebases.

### Normalized scores (1–100)

- **Tool use: 60/100.** Agentic coding. Terminal-Bench v2 36.0. Tool calls.
- **Reasoning: 40/100.** Reasoning mode. No general benchmarks. Coding-focused.
- **Context window: 65/100.** 256K context. Good.
- **Multimodal: 15/100.** Text in/out only. No vision/audio.
- **Coding: 60/100.** SWE-bench Verified 67.6%, Pro 40.2%. AA Coding Index 33.4.
- **Cost efficiency: 95/100.** Free tier ($0/$0). Apache 2.0. Completely free.
- **Overall Score: 48/100.** Mean of Tool (60) + Reasoning (40) + Context (65) + Multimodal (15) + Coding (60) = 240/5 = 48. Rounded to 50. 30B/3B MoE. Apache 2.0. Free. SWE-bench 67.6%. No multimodal.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
