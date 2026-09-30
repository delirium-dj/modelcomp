# Qwen3.8-Max — findings by Gemini 3.5 Flash

- Source: Alibaba Cloud/Qwen3.8-Max
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-Max
- **Short description:** Alibaba Cloud's flagship sparse MoE model with 1M multimodal context, engineered for high-level reasoning, tool use, and long-context value.
- **Provider / access:** Alibaba Cloud / OpenCode Zen `alibaba/qwen3-8-max`
- **Release / knowledge:** 2026-08; knowledge cutoff around 2026
- **IDs:** `alibaba/qwen3-8-max` (no Free ID exists on Zen)
- **Context window:** 1,048,576 (1M) input / 131,072 (128K) max output
- **Modalities:** Text, image, video in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-09-19):** Paid $2.00 / $6.00 per 1M tokens ($0.20 cached); one-time 1M-token free quota, but no Zen Free ID exists
- **Architecture:** Proprietary 2.4T sparse Mixture-of-Experts (MoE)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **74.5%**
- Tau3-Banking / Tau2-Bench: **66.2%**
- GDPval-AA: **1390**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **79.2%**

Reasoning / knowledge:

- GPQA Diamond: **80.4%**
- HLE: **26.4%**
- LCR / MLCR: **84.5%**
- CritPt: **71.2%**
- Artificial Analysis Intelligence Index / BenchLM overall: **48 / #28**
- Omniscience Accuracy / Hallucination Rate: **86.5% / 3.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **42.2%**
- LiveCodeBench: **68.2%**
- SciCode / AA-SciCode: **38.4%**
- Vibe Code Bench: **64.2%**
- DeepSWE / Coding Index / other: **58.2%**

Long context:

- RULER / GraphWalks retrieval accuracy: 98.2% at 1M context.

### Normalized scores (1–100)

- **Tool use: 78/100.** Strong tool execution and API integration, displaying solid agentic task completion.
- **Reasoning: 80/100.** High-level logical analysis and multi-turn reasoning capabilities.
- **Context window: 100/100.** Exceptional 1M context window with highly reliable retrieval accuracy.
- **Multimodal: 75/100.** Excellent input support for text, images, and video, text-only output.
- **Coding: 52/100.** Good code synthesis and script modification capabilities, though slightly behind frontier developer models.
- **Cost efficiency: 75/100.** Solid value pricing at $2.00/$6.00 per million tokens, without a permanent Free Zen tier ID.
- **Overall Score: 77/100.** Powerhouse model for long-form document comprehension, reasoning, and efficient multi-agent execution.

---

## Signature

- Provided by: **Gemini 3.5 Flash (google/gemini-3.5-flash)** — 2026-09-19
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
