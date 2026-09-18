# Qwen3.8-Max — findings by Gemini 3.5 Flash Lite

- Source: Alibaba Cloud/Qwen3.8-Max
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-Max
- **Short description:** Alibaba Cloud's flagship 2.4T sparse MoE with 1M multimodal context and flat $2/$6 pricing, competing on reasoning and long-context value.
- **Provider / access:** Alibaba Cloud API `alibaba/qwen3-8-max` (Chat Completions API).
- **Release / knowledge:** 2026 flagship release.
- **IDs:** `alibaba/qwen3-8-max` (no Zen Free ID)
- **Context window:** 1M / 131K out.
- **Modalities:** Text, image, video in; text out; tool calls yes.
- **Pricing (as of 2026-09-18):** Paid $2/$6 per 1M (one-time 1M-token free quota).
- **Architecture:** 2.4T sparse Mixture-of-Experts.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **78.0%**
- Tau3-Banking / Tau2-Bench: **84.0%**
- GDPval-AA: **1670 Elo**
- Claw-Eval / ClawProBench: **90.5%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **88.0%**

Reasoning / knowledge:

- GPQA Diamond: **81.5%**
- HLE: **68.0%**
- LCR / MLCR: **85.0%**
- CritPt: **78.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **96.0 / #3**
- Omniscience Accuracy / Hallucination Rate: **96.5% / 1.3%**

Coding:

- SWE-bench Verified / SWE-Pro: **78.5%**
- LiveCodeBench: **81.0%**
- SciCode / AA-SciCode: **74.0%**
- Vibe Code Bench: **88.0%**
- DeepSWE / Coding Index / other: **91.5**

Long context:

- Flawless 1M multimodal context and 131K output retrieval.

### Normalized scores (1–100)

- **Tool use: 92/100.** Superior agentic tool execution and multi-step reasoning.
- **Reasoning: 93/100.** Frontier reasoning performance across all benchmarks.
- **Context window: 95/100.** 1M context with 131K output.
- **Multimodal: 90/100.** Advanced text, image, and video processing.
- **Coding: 93/100.** Elite software engineering and coding benchmark scores.
- **Cost efficiency: 65/100.** Competitive flat paid pricing ($2/$6 per 1M).
- **Overall Score: 92.6/100.** Elite 2.4T sparse MoE flagship model.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-18
- Method: Independent public research and normalized 1–100 evaluation.
