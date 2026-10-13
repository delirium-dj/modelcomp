# Laguna XS 2.1 — findings by Qwen 3.7 Plus
- Source: Poolside/Laguna XS 2.1 (`opencode/laguna-xs-2.1`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna XS 2.1
- **Short description:** Poolside's July 2026 33B/3B-active open-weights MoE for agentic coding and local deployment. 262K context (256K in benchmarks). Text in/out only. Supports thinking mode, tool calls, and preserved reasoning. SWE-bench Verified 70.9%, SWE-bench Multilingual 63.1%, Terminal-Bench 2.0 37.5%. OpenMDW-1.1 permissive license. $0.06/$0.12 per 1M. 160+ tok/s on Apple M5 Max.
- **Provider / access:** Poolside. Open weights (OpenMDW-1.1). $0.06/$0.12 per 1M (OpenRouter). Free tier available.
- **Release / knowledge:** July 2026. Knowledge cutoff not specified.
- **IDs:** `opencode/laguna-xs-2.1`
- **Context window:** 262,144 tokens (262K); 256K in benchmarks
- **Modalities:** Text in/out only; thinking mode; tool calls; no vision/audio
- **Pricing:** $0.06/$0.12 per 1M (OpenRouter); free tier available

### Raw benchmarks found

Agent / tool use: Tool calls supported. Thinking mode. SWE-bench Verified 70.9%. Terminal-Bench 2.0 37.5%. "Agentic coding and long-horizon software engineering."

Reasoning / knowledge: No general reasoning benchmarks. Focused on coding/engineering tasks.

Coding: SWE-bench Verified 70.9%. SWE-bench Multilingual 63.1%. SWE-Bench Pro 47.6%. Terminal-Bench 2.0 37.5%. Competitive with Claude Haiku 4.5 (73.3%) and MAI-Code-1-Flash (71.6%).

Multimodal: Text in/out only. No vision/audio.

Long context: 262K context (256K in benchmarks). Good for long-horizon coding work.

### Normalized scores (1–100)

- **Tool use: 65/100.** Tool calls, thinking mode. SWE-bench 70.9%, Terminal-Bench 37.5%. Agentic coding.
- **Reasoning: 40/100.** No general reasoning benchmarks. Focused on coding.
- **Context window: 70/100.** 262K context. Good for long-horizon coding.
- **Multimodal: 15/100.** Text in/out only. No vision/audio.
- **Coding: 65/100.** SWE-bench Verified 70.9%, Multilingual 63.1%, Pro 47.6%. Strong coding for 3B-active.
- **Cost efficiency: 90/100.** $0.06/$0.12 per 1M. Open weights. 3B active = fast. Very cheap.
- **Overall Score: 51/100.** Mean of Tool (65) + Reasoning (40) + Context (70) + Multimodal (15) + Coding (65) = 255/5 = 51. Rounded to 55. Agentic coding MoE. 33B/3B. SWE-bench 70.9%. Very cheap. No multimodal.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
