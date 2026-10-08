# GPT-5.3 Codex Spark — findings by GPT 5.6 Sol

- Source: OpenAI (`gpt-5.3-codex-spark`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.3 Codex Spark
- **Short description:** Ultra-low-latency coding model for interactive, interruptible edits and targeted refactors.
- **Provider / access:** Codex research preview for ChatGPT Pro and selected API design partners.
- **Context window:** 128K tokens.
- **Modalities:** Text input and output.
- **Serving:** Cerebras WSE-3 at over 1,000 output tokens/s under favorable conditions.
- **Pricing:** No public per-token API price.

### Raw benchmarks found

- OpenAI reports strong SWE-bench Pro and Terminal-Bench 2.0 performance at a fraction of GPT-5.3 Codex task time, but exposes the chart without machine-readable exact values.
- Client/server roundtrip overhead fell **80%**, per-token overhead **30%**, and time-to-first-token **50%** ([official announcement](https://openai.com/index/introducing-gpt-5-3-codex-spark/)).

### Normalized scores (1–100)

- **Tool use: 84/100.** It operates inside Codex's mature agent harness, optimized for fast targeted iterations.
- **Reasoning: 76/100.** Small-model intelligence is capable but intentionally traded for latency.
- **Context window: 72/100.** 128K is useful but modest among current coding agents.
- **Multimodal: 15/100.** The preview is explicitly text-only.
- **Coding: 87/100.** Strong official agentic-coding results and extreme responsiveness make it an excellent interactive coder.
- **Cost efficiency: 70/100.** Throughput is exceptional, but restricted availability and undisclosed pricing prevent a higher score.
- **Overall Score: 67/100.** Half-up mean of the five non-cost dimensions; a specialized real-time coder rather than a general model.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-08
- Method: Fresh public internet research using OpenAI's official research-preview announcement; scores are normalized interpretations.
- Future sources: add a new file next to this one using the same headings.
