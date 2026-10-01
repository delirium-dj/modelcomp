# Qwen 3.5 Plus — findings by Gemini 3.5 Flash Lite

- Source: Alibaba Cloud (`qwen/qwen-3.5-plus`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 Plus
- **Short description:** Alibaba Cloud's balanced general-purpose flagship model offering robust multilingual and coding performance.
- **Provider / access:** DashScope API and OpenCode Zen (`opencode/qwen-3.5-plus`).
- **Release / knowledge:** Released 2025; knowledge cutoff late 2025.
- **IDs:** `qwen-3.5-plus`; Zen ID `opencode/qwen-3.5-plus`.
- **Context window:** 1M tokens total input / 64K output.
- **Modalities:** Multimodal input (text, image, audio), text output; tool use.
- **Pricing (as of 2026-10-01):** Competitive commercial pricing ($0.80 / $2.40 per MTok in/out).
- **Architecture:** Large-scale MoE transformer.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: **48.0%**

Reasoning / knowledge:

- MMLU-Pro: **81.0%**

Coding:

- SWE-bench Verified: **71.0%**

Long context:

- RULER: 1M token ultra-long context window with high recall.

### Normalized scores (1–100)

- **Tool use: 65/100.** Strong tool integration and function calling.
- **Reasoning: 72/100.** Excellent multilingual reasoning and knowledge retrieval.
- **Context window: 85/100.** 1M token ultra-long context window tier.
- **Multimodal: 75/100.** Multimodal support (text, image, audio).
- **Coding: 76/100.** Strong SWE-bench and coding benchmark scores.
- **Cost efficiency: 88/100.** High cost efficiency for a 1M context model.
- **Overall Score: 75/100.** Half-up mean of quality dimensions: (65 + 72 + 85 + 75 + 76) / 5 = 74.6 → 75. Powerful long-context multilingual model for complex enterprise tasks.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-01
- Method: independent public research and normalized evaluation.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
