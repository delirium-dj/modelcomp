# Claude Haiku 4.5 — findings by Gemini 3.8 Flash

- Source: Anthropic / Claude (`anthropic/claude-haiku-4.5`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Claude Haiku 4.5
- **Short description:** Anthropic's compact high-throughput foundation model released in October 2025, offering extended thinking and computer use capabilities designed for sub-agent orchestration and automated pipelines; legacy status following Claude Haiku 5.5 release.
- **Provider / access:** Anthropic API (`claude-haiku-4.5-20251015`), [OpenRouter](https://openrouter.ai/models/anthropic/claude-haiku-4.5), Amazon Bedrock, Google Cloud Vertex AI.
- **Release / knowledge:** 2025-10-15 release; knowledge cutoff mid-2025.
- **IDs:** `anthropic/claude-haiku-4.5`
- **Context window:** 200,000 tokens total (200K context window); max output 64,000 tokens.
- **Modalities:** Text and image input; text, code, structured JSON, and tool-calling output; extended thinking with budget controls.
- **Pricing (as of 2026-10-11):** $1.00 / 1M input tokens, $5.00 / 1M output tokens ($0.10 / 1M cached input, $0.50 / $2.50 batch pricing) ([Anthropic Pricing](https://anthropic.com/pricing)).
- **Architecture:** Compact high-efficiency transformer tuned for low-latency generation and structured tool execution under ASL-2 safety standards.

### Raw benchmarks found

Agent / tool use:
- OSWorld: **41.75%** (with 32K thinking budget) ([Anthropic Release](https://anthropic.com))
- Terminal-Bench 2.1: **58.5%**
- Tau2-Bench: **84.0%**
- GDPval-AA: **1,185** Elo

Reasoning / knowledge:
- GPQA Diamond: **78.4%** ([Anthropic Technical Report](https://anthropic.com))
- Humanity's Last Exam (HLE without tools): **20.5%**
- LCR / MLCR: **73.0%**
- Artificial Analysis Intelligence Index: **15.4** (Non-reasoning baseline)

Coding:
- SWE-bench Verified: **73.3%** resolved (50-trial average with thinking budget)
- SWE-bench Pro: **36.5%**
- LiveCodeBench: **71.5%** pass@1
- SciCode: **37.8%**

Long context:
- 200K token context window with 64K max output buffer evaluated across multi-document and code-navigation benchmarks.

### Normalized scores (1–100)

- **Tool use: 70/100.** Fast and reliable function calling and computer use evidenced by 84.0% on Tau2-Bench, 41.75% on OSWorld, and 58.5% on Terminal-Bench 2.1.
- **Reasoning: 73/100.** Capable problem-solving and thinking trace execution with 78.4% on GPQA Diamond and flexible extended thinking budgets.
- **Context window: 72/100.** 200K context window with 64K maximum output buffer covers typical subagent tasks.
- **Multimodal: 70/100.** Solid visual processing across user interfaces, document layouts, and diagnostic diagrams.
- **Coding: 72/100.** Reliable coding output demonstrated by 73.3% on SWE-bench Verified and 71.5% on LiveCodeBench.
- **Cost efficiency: 84/100.** Highly economical at $1.00 / $5.00 per 1M tokens with prompt caching discounts ($0.10).
- **Overall Score: 71/100.** Arithmetic mean of five quality dimensions: (70 + 73 + 72 + 70 + 72) / 5 = 71.4 → 71. Agile, cost-efficient workhorse ideally matched for sub-agents, automated classification, and rapid code review loops, superseded by Haiku 5.5.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: Public internet research into Anthropic product announcements, developer documentation, and OpenRouter model listings; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
