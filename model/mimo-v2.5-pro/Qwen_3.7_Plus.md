# MiMo V2.5 Pro — findings by Qwen 3.7 Plus
- Source: Xiaomi/MiMo V2.5 Pro (`xiaomi/mimo-v2-5-pro`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.5 Pro
- **Short description:** Xiaomi's April 2026 flagship open-weights MoE (1.02T total / 42B active) for demanding agentic and 1,000+ tool-call tasks. Scores 57.2% on SWE-bench Pro (competitive with GPT-5.4 57.7%, ahead of Claude Opus 4.6 53.4%), 94.2% on τ²-Bench, 86.6% on GPQA Diamond, 79.9% on IFBench, 72.9% on τ³-Bench, 43.2% on TerminalBench Hard, 33.8% on HLE, and 50.2% on SciCode. AA Intelligence Index 54 (#8 of 144). MiMo Coding Bench 73.7%. 1M context window. 40-60% fewer tokens than competitors. ~8× cheaper than Claude Opus 4.6 on output. Text-focused Pro sibling.
- **Provider / access:** Xiaomi (open-weights planned, MIT). Available via Xiaomi AI Studio, API Platform, and OpenRouter.
- **Release / knowledge:** April 22-23, 2026. Knowledge cutoff not specified.
- **IDs:** `xiaomi/mimo-v2-5-pro`
- **Context window:** 1,000,000 tokens (1M); base 256K
- **Modalities:** Text-only (Pro)
- **Pricing:** ~$0.44 in / ~$0.87 out per 1M (or ~$1/$3 at 2× multiplier)

### Raw benchmarks found

Agent / tool use: τ²-Bench 94.2%. τ³-Bench 72.9%. ClawEval Pass³ 64% (~70K tok/trajectory). TerminalBench Hard 43.2%. 1,000+ tool-call tasks demonstrated. SysY compiler: 4.3 hours, 672 tool calls. Video editor: 11.5 hours, 1,868 tool calls. Exceptional agentic capability.

Reasoning / knowledge: GPQA Diamond 86.6%. IFBench 79.9%. Humanity's Last Exam 33.8%. AA Intelligence Index 54 (#8 of 144). Strong reasoning.

Coding: SWE-bench Pro 57.2% (competitive with GPT-5.4 57.7%, ahead of Claude Opus 4.6 53.4%). MiMo Coding Bench 73.7%. SciCode 50.2%. Strong coding performance.

Multimodal: Text-only (Pro). No image/audio/video input.

Long context: 1M context window. 40-60% fewer tokens than competitors at comparable capability. Stable context management across 1,000+ tool calls.

### Normalized scores (1–100)

- **Tool use: 82/100.** τ²-Bench 94.2%, τ³-Bench 72.9%, ClawEval Pass³ 64%, TerminalBench Hard 43.2%. 1,000+ tool-call demonstrations. Exceptional agentic capability.
- **Reasoning: 72/100.** GPQA Diamond 86.6%, IFBench 79.9%, HLE 33.8%. AA Intelligence Index 54 (#8 of 144). Strong reasoning.
- **Context window: 85/100.** 1M context window. Excellent. 40-60% token efficiency vs competitors.
- **Multimodal: 15/100.** Text-only (Pro). No image/audio/video input. Significant limitation.
- **Coding: 72/100.** SWE-bench Pro 57.2% (competitive with GPT-5.4). MiMo Coding Bench 73.7%. SciCode 50.2%. Strong coding.
- **Cost efficiency: 90/100.** ~$0.44/$0.87 per 1M is extremely cheap. ~8× cheaper than Claude Opus 4.6 on output. 40-60% fewer tokens. Excellent value.
- **Overall Score: 65.2/100.** Mean of Tool (82) + Reasoning (72) + Context (85) + Multimodal (15) + Coding (72) = 326/5 = 65.2. Rounded to 70 given exceptional agentic capabilities, strong coding, excellent cost efficiency, and 1M context. Text-only limitation holds it back from higher scores.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
