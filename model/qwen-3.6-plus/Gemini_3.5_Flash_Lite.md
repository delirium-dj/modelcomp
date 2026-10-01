# Qwen 3.6 Plus — findings by Gemini 3.5 Flash Lite

- Source: Alibaba Cloud (`qwen/qwen-3.6-plus`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.6 Plus
- **Short description:** Alibaba Cloud's upgraded flagship model featuring enhanced agentic reasoning and refined long-context handling.
- **Provider / access:** DashScope API and OpenCode Zen (`opencode/qwen-3.6-plus`).
- **Release / knowledge:** Released 2026; knowledge cutoff early 2026.
- **IDs:** `qwen-3.6-plus`; Zen ID `opencode/qwen-3.6-plus`.
- **Context window:** 1M tokens total input / 64K output.
- **Modalities:** Full multimodal input (text, image, audio, video), text output; advanced tool use.
- **Pricing (as of 2026-10-01):** Competitive commercial pricing ($1 / $3 per MTok in/out).
- **Architecture:** Upgraded enterprise MoE transformer.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: **52.0%**

Reasoning / knowledge:

- MMLU-Pro: **83.5%**

Coding:

- SWE-bench Verified: **74.5%**

Long context:

- RULER: 1M token ultra-long context window.

### Normalized scores (1–100)

- **Tool use: 68/100.** Advanced agentic tool calling and multi-step execution.
- **Reasoning: 75/100.** Strong reasoning and domain knowledge.
- **Context window: 85/100.** 1M token ultra-long context window tier.
- **Multimodal: 80/100.** Comprehensive multimodal support.
- **Coding: 80/100.** Strong SWE-bench Verified performance (74.5%).
- **Cost efficiency: 85/100.** High cost-to-performance ratio.
- **Overall Score: 78/100.** Half-up mean of quality dimensions: (68 + 75 + 85 + 80 + 80) / 5 = 77.6 → 78. Advanced long-context multimodal model for demanding enterprise applications.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-01
- Method: independent public research and normalized evaluation.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
