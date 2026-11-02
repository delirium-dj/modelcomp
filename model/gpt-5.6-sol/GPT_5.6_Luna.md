# GPT-5.6 Sol — findings by GPT 5.6 Luna

- Source: OpenAI/GPT-5.6 Sol
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Sol
- **Short description:** OpenAI's flagship GPT-5.6 model for complex professional work, coding, reasoning, and long-running agents.
- **Provider / access:** OpenAI API; model ID `gpt-5.6-sol`; Chat Completions, Responses, Batch, and supported hosted tools are documented.
- **Release / knowledge:** 2026 release; February 16, 2026 knowledge cutoff.
- **IDs:** `openai/gpt-5.6-sol`; the `gpt-5.6` alias routes to Sol.
- **Context window:** 1,050,000 tokens, with 922,000 maximum input and 128,000 maximum output tokens (OpenAI model documentation).
- **Modalities:** Text and image input; text output; reasoning, function calling, structured outputs, web/file search, code execution, computer use, MCP, and other Responses tools.
- **Pricing (as of 2026-11-02):** $4 input, $0.40 cached input, and $20 output per 1M tokens; prompts over 272K input tokens use 2x input and 1.5x output pricing. OpenAI says the promotional rate is available at least through November 21, 2026.
- **Architecture:** Proprietary; parameter count and internal architecture undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.8%** (Qwen's official Qwen3.8-Max comparison table; GPT-5.6 Sol max effort).
- DeepSWE v1.1: **73.0%** (Qwen's official comparison table; harness and effort are vendor-reported).
- BenchLM public benchmark profile: **74.83/100, #12 of 1,004** (76 benchmark rows; independent aggregation).

Reasoning / knowledge:

- GPQA Diamond: **94.6%** (OpenAI GPT-5.6 evaluation table).
- FrontierMath v2, tiers 1–3: **89.0%** (OpenAI evaluation table).
- ARC-AGI-3: **7.78%** (OpenAI evaluation table; the task is unusually difficult and not comparable to ARC-AGI-1/2).

Coding and multimodal:

- MMMU-Pro: **83.0% without tools / 84.6% with tools** (OpenAI evaluation table).
- CursorBench 3.2: **67.2%**, VulcanBench v3: **87.0%**, and AA-SciCode: **57.1%** (BenchLM's independent benchmark aggregation).

Long context:

- Advertised context is **1.05M tokens**; no independent full-window retrieval curve was verified in this review.

### Normalized scores (1–100)

- **Tool use: 94/100.** OpenAI documents broad hosted tools, while Terminal-Bench 2.1 at 88.8% and the current independent profile support frontier agent performance; cross-harness variance caps the score.
- **Reasoning: 95/100.** GPQA Diamond at 94.6% and FrontierMath tiers 1–3 at 89% are elite, although ARC-AGI-3 remains difficult.
- **Context window: 98/100.** The documented 1.05M-token window is among the largest available; the slightly smaller 922K maximum input prevents a perfect score.
- **Multimodal: 92/100.** Image input and strong MMMU-Pro results are verified, but the model is text-output only and does not accept audio or video.
- **Coding: 93/100.** DeepSWE, CursorBench, VulcanBench, and the independent profile support excellent software-engineering capability, with harness differences and the 27.6% FrontierCode 2.0 result preventing a 95+ score.
- **Cost efficiency: 82/100.** $4/$20 is materially cheaper than the prior Sol price and includes low cached-input pricing, but it remains a premium frontier model.
- **Overall Score: 94.4/100.** Half-up mean of `(94 + 95 + 98 + 92 + 93) / 5`; best fit is demanding coding, research, and tool-using agent work.

---

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-11-02
- Method: fresh public-web research using OpenAI documentation and evaluation tables, Qwen's comparative benchmark table, and current independent benchmark aggregations; scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI GPT-5.6 Sol model documentation](https://developers.openai.com/api/docs/models/gpt-5.6-sol)
  - [OpenAI GPT-5.6 announcement and evaluation tables](https://openai.com/index/gpt-5-6)
  - [Qwen3.8-Max official benchmark table](https://qwen.ai/blog?id=qwen3.8)
  - [BenchLM GPT-5.6 Sol profile](https://benchlm.ai/models/gpt-5-6-sol)
