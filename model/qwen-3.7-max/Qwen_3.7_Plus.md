# Qwen 3.7 Max — findings by Qwen 3.7 Plus
- Source: Alibaba/Qwen 3.7 Max (`opencode/qwen-3.7-max`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 Max
- **Short description:** Alibaba's proprietary Qwen3.7 flagship agent model (May 2026) for long-horizon coding, office automation, and multi-agent workflows. Achieved 80.4% on SWE-bench Verified, 69.7% on Terminal-Bench 2.0, 60.6% on SWE-bench Pro, 87.0% on SpreadSheetBench, and 60.8% on MCP-Mark. Demonstrated 35-hour autonomous kernel optimization (10.1x speedup, 1,158 tool calls) on custom silicon never seen during training. AA Intelligence Index 56 (vs. Claude Opus 4.7's 57.3) at one-sixth the price. 1M context window with 131K output. Text-only modality. Uses "Environment Scaling" training methodology for agent generalization.
- **Provider / access:** Alibaba Cloud (Model Studio, OpenRouter). Proprietary.
- **Release / knowledge:** May 19-20, 2026. Knowledge cutoff not specified.
- **IDs:** `opencode/qwen-3.7-max`
- **Context window:** 1,000,000 tokens (1M); 131,072 output
- **Modalities:** Text in/out; reasoning and tool calls
- **Pricing:** $1.25-$1.48/$3.75-$4.43 per 1M; $0.25 cached

### Raw benchmarks found

Agent / tool use: Terminal-Bench 2.0 69.7 · MCP-Mark 60.8 · SkillsBench 59.2 · SpreadSheetBench 87.0.

Reasoning / knowledge: AA Intelligence Index 56 (estimated, vs. Claude Opus 4.7's 57.3).

Coding: SWE-bench Verified 80.4 · SWE-bench Pro 60.6 · SciCode 53.5 · Terminal-Bench 2.0 69.7.

Multimodal: Text-only. No multimodal benchmarks.

Long context: 1M native context window. 35-hour autonomous execution demonstrated (1,158 tool calls).

### Normalized scores (1–100)

- **Tool use: 65/100.** Terminal-Bench 2.0 69.7, MCP-Mark 60.8, SkillsBench 59.2, and SpreadSheetBench 87.0 show strong agentic capability. 35-hour autonomous kernel optimization with 1,158 tool calls demonstrates exceptional long-horizon autonomy.
- **Reasoning: 55/100.** AA Intelligence Index 56 (estimated) is strong, approaching Claude Opus 4.7's 57.3. Limited traditional reasoning benchmarks published (no GPQA, HLE, AIME data). Score reflects strong but incompletely documented reasoning capability.
- **Context window: 90/100.** 1M context with 131K output is excellent. 35-hour autonomous execution demonstrates effective long-horizon context utilization.
- **Multimodal: 15/100.** Text-only modality. No image, audio, or video support. Severely limited for multimodal use cases.
- **Coding: 70/100.** SWE-bench Verified 80.4%, SWE-bench Pro 60.6%, and Terminal-Bench 2.0 69.7 are strong. SciCode 53.5 is solid. Competitive with Claude Opus 4.6 (80.8% SWE-bench) and DeepSeek V4 Pro (80.6% SWE-bench).
- **Cost efficiency: 55/100.** $1.25-$1.48/$3.75-$4.43 per 1M is moderate. One-sixth the price of Claude Opus 4.7 at comparable Intelligence Index. No free tier.
- **Overall Score: 59/100.** Mean of Tool (65) + Reasoning (55) + Context (90) + Multimodal (15) + Coding (70) = 295/5 = 59.0.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
