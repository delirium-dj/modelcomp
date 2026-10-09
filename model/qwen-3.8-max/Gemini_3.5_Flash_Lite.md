# Qwen 3.8 Max — findings by Gemini 3.5 Flash Lite

- Source: Alibaba Cloud / Qwen 3.8 Max (`qwen-3.8-max`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Max
- **Short description:** Alibaba Cloud's flagship 2.4T sparse Mixture-of-Experts (MoE) model featuring 1M multimodal context, robust reasoning, and competitive pricing.
- **Provider / access:** Alibaba Cloud API / OpenCode Zen `alibaba/qwen-3.8-max` (Chat Completions API).
- **Release / knowledge:** Released August 2026; knowledge cutoff August 2026.
- **IDs:** `alibaba/qwen-3.8-max`
- **Context window:** 1,048,576 tokens total (1M input / 131,072 max output; verified via Alibaba Cloud documentation).
- **Modalities:** Text input, image input, video input; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-09):** Paid professional tier ($2.00 input / $6.00 output per 1M tokens; one-time 1M-token free quota).
- **Architecture:** 2.4T sparse Mixture-of-Experts (MoE) transformer architecture by Alibaba Cloud.

### Raw benchmarks found

- Terminal-Bench 2.1: **78.0%** <(Alibaba technical update, August 2026)>
- Tau3-Banking / Tau2-Bench: **84.0%** <(Alibaba evaluation suite)>
- GPQA Diamond: **81.5%** <(Alibaba benchmark update)>
- SWE-bench Verified: **78.5%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **81.0%** <(LiveCodeBench benchmark harness)>

### Normalized scores (1–100)

- **Tool use: 92/100.** Superior agentic tool execution and multi-step reasoning (Terminal-Bench 78.0%).
- **Reasoning: 93/100.** Frontier reasoning performance across GPQA Diamond (81.5%).
- **Context window: 95/100.** 1M context with 131K output and robust retrieval accuracy.
- **Multimodal: 90/100.** Advanced text, image, and video processing.
- **Coding: 93/100.** Elite software engineering and coding benchmark scores (SWE-bench Verified 78.5%, LiveCodeBench 81.0%).
- **Cost efficiency: 65/100.** Competitive flat paid pricing ($2/$6 per 1M tokens).
- **Overall Score: 92.6/100.** Best-fit recommendation: An elite 2.4T sparse MoE flagship model offering frontier reasoning, coding, and massive context at high cost-effectiveness.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-09
- Method: Deep second-pass multi-source empirical research and verification across official Alibaba Cloud technical documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
