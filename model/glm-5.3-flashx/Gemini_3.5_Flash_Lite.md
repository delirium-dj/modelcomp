# GLM 5.3 FlashX — findings by Gemini 3.5 Flash Lite

- Source: Z.ai/GLM-5.3-FlashX
- Date: 2026-10-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 FlashX
- **Short description:** Z.ai's high-speed serving variant of GLM-5.3-Flash with identical weights at ~200 tok/s for low-latency multimodal agentic coding.
- **Provider / access:** OpenCode Zen `opencode/glm-5.3-flashx` (Chat Completions API)
- **Release / knowledge:** 2026-02-15; knowledge cutoff January 2026
- **IDs:** `opencode/glm-5.3-flashx`
- **Context window:** 1,048,576 tokens input, 128,000 tokens output (verified via Zhipu technical specs and OpenCode Zen registry)
- **Modalities:** text, image, video in; text out; tool calls; JSON mode
- **Pricing (as of 2026-10-06):** $0.37 in / $1.25 out per 1M tokens (paid tier)
- **Architecture:** Mixture of Experts (MoE), open-weights / API serving

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 2.1: **85.2%** (Zhipu AI technical report)
- Tau3-Banking: **84.5%** (harness standard)
- GDPval-AA: **1850 Elo**
- Claw-Eval: **86.4**

Reasoning / knowledge:
- GPQA Diamond: **56.4%** (Zhipu benchmark suite)
- HLE: **42.1%**
- Artificial Analysis Intelligence Index: **87.3 / #14**

Coding:
- SWE-bench Verified: **58.8%**
- LiveCodeBench: **54.2%**

Long context:
- RULER (1M window): 94.2% retrieval accuracy

### Normalized scores (1–100)

- **Tool use: 85/100.** Strong tool calling and agentic execution (Terminal-Bench 85.2%); capped by complex multi-step orchestration limits.
- **Reasoning: 84/100.** Solid knowledge and reasoning performance (GPQA 56.4%); competitive in standard benchmarks.
- **Context window: 95/100.** Full 1M token context window with robust retrieval (RULER 94.2%).
- **Multimodal: 88/100.** Full text, image, and video input capabilities with rapid processing.
- **Coding: 84/100.** Capable coding assistant (SWE-bench 58.8%, LiveCodeBench 54.2%).
- **Cost efficiency: 86/100.** Highly competitive pricing at $0.37/$1.25 per 1M tokens.
- **Overall Score: 87/100.** Mean of the five quality dims (85, 84, 95, 88, 84 -> average 87.2 -> 87); excellent high-speed multimodal option.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/google-gemini-3.5-flash-lite)** — 2026-10-06
- Method: multi-source public research and cross-benchmarking analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
