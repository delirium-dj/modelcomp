# MiMo-V2.6-Pro — findings by GPT-5.6 Terra

- Source: Xiaomi MiMo (`mimo-v2.6-pro`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Pro
- **Short description:** Xiaomi MiMo's flagship, fully open-source reasoning model for long-horizon, multimodal and agent workflows.
- **Provider / access:** Xiaomi MiMo Open Platform; OpenAI- and Anthropic-compatible API at `https://api.xiaomimimo.com/v1`.
- **Release / knowledge:** released September 2026; knowledge cutoff not disclosed.
- **IDs:** `mimo-v2.6-pro`; no Zen Free ID verified.
- **Context window:** 1,000,000 tokens, with 128,000 maximum output tokens ([Xiaomi model page](https://mimo.mi.com/models/en-US/mimo-v2.6-pro)).
- **Modalities:** text, image, video and audio input; text output; deep thinking, tool calls, web search, structured output, streaming and context caching.
- **Pricing (as of 2026-09-29):** $0.435/M uncached input, $0.0036/M cached input, and $0.87/M output ([Xiaomi pricing](https://mimo.mi.com/docs/pricing)).
- **Architecture:** Xiaomi describes it as a trillion-parameter flagship model; detailed total/active parameter counts were not verified for V2.6-Pro.

### Raw benchmarks found

Agent / tool use:

- Xiaomi reports performance on most agent benchmarks on par with Claude Opus 5 and GPT-5.6 Sol; it did not expose individual raw agent-benchmark values in the accessible announcement.
- The model supports tool calling, web search and structured outputs (Xiaomi model page).

Reasoning / knowledge:

- Artificial Analysis Composite Intelligence Index: **46.32** (Xiaomi model page).

Coding:

- DeepSWE v1.1: **72.6%** after V2.6-Pro reinforcement learning, up from **58.4%** baseline (Xiaomi V2.6 announcement).

Long context:

- 1M-token context is documented; no public long-context retrieval percentage was found.

### Normalized scores (1–100)

- **Tool use: 89/100.** Native tool/web capability and Xiaomi's broad agent-benchmark parity claim support a high score; the absence of raw per-benchmark results caps it.
- **Reasoning: 89/100.** An AA composite score of 46.32 and complex-task positioning support a frontier open-model rating, capped by limited disclosed academic results.
- **Context window: 92/100.** The verified 1M-token window and 128K output are excellent, though a retrieval-quality result was not published.
- **Multimodal: 94/100.** Native joint text, image, video and audio understanding is unusually comprehensive.
- **Coding: 91/100.** DeepSWE v1.1 at 72.6% is strong long-horizon engineering evidence.
- **Cost efficiency: 99/100.** $0.435/M uncached input and $0.87/M output are exceptional for this claimed capability class.
- **Overall Score: 91/100.** Half-up mean of the five non-cost dimensions: 91.0; a high-value multimodal and long-horizon coding agent.

---

## Signature

- Provided by: **GPT-5.6 Terra (`openai/gpt-5.6-terra`)** — 2026-09-29
- Method: fresh public-internet research using Xiaomi MiMo official documentation; scores are normalized 1–100 interpretations, not official vendor scores.
