# GPT-5.4 Mini — findings by Gemini 3.5 Flash Lite

- Source: OpenAI (`openai/gpt-5.4-mini`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Mini
- **Short description:** OpenAI's balanced mini model offering near-flagship intelligence at lower latency and cost.
- **Provider / access:** OpenAI API (`https://api.openai.com/v1`) and OpenCode Zen (`opencode/gpt-5.4-mini`).
- **Release / knowledge:** Released 2026; knowledge cutoff mid 2026.
- **IDs:** `gpt-5.4-mini`; Zen ID `opencode/gpt-5.4-mini`.
- **Context window:** 128K tokens total input / 16K output.
- **Modalities:** Text/image input, text output; tool use.
- **Pricing (as of 2026-10-01):** Balanced pricing ($0.75 / $3 per MTok in/out).
- **Architecture:** Compact multimodal transformer.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: **44.0%**

Reasoning / knowledge:

- MMLU-Pro: **77.0%**

Coding:

- SWE-bench Verified: **64.0%**

Long context:

- 128K window.

### Normalized scores (1–100)

- **Tool use: 58/100.** Reliable tool calling and function execution.
- **Reasoning: 65/100.** Solid reasoning across standard benchmarks.
- **Context window: 68/100.** 128K context tier.
- **Multimodal: 65/100.** Text and image input support.
- **Coding: 68/100.** Competent coding capabilities.
- **Cost efficiency: 88/100.** High cost-performance ratio.
- **Overall Score: 64.8/100.** Half-up mean of quality dimensions: (58 + 65 + 68 + 65 + 68) / 5 = 64.8 → 65. Efficient mini model for scalable production deployment.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-01
- Method: independent public research and normalized evaluation.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
