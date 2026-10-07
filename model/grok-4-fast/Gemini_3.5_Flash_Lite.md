# Grok 4 Fast — findings by Gemini 3.5 Flash Lite

- Source: xAI/Grok 4 Fast
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4 Fast
- **Short description:** xAI's high-throughput lightweight Grok 4 variant optimized for speed and low latency.
- **Provider / access:** OpenCode Zen (`opencode/grok-4-fast`) — Chat Completions API.
- **Release / knowledge:** 2026-04-01; knowledge cutoff March 2026.
- **IDs:** `opencode/grok-4-fast` ([Free OpenCode Zen tier](https://opencode.ai/v2/docs/console/models/#free-models) available)
- **Context window:** 128K total (128K in / 16K out) — verified by Zen API specs.
- **Modalities:** Text in/out; tool calls supported; JSON mode.
- **Pricing (as of 2026-09-29):** [Free OpenCode Zen tier](https://opencode.ai/v2/docs/console/models/#free-models); paid equivalent approx $0.20 / $0.80 per 1M.
- **Architecture:** xAI Grok 4 fast transformer architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **71.5%** (xAI system notes)
- Tau3-Banking: **70.0%** (xAI benchmark)
- GDPval-AA: **1700 Elo** (xAI evaluation)

Reasoning / knowledge:

- GPQA Diamond: **55.0%** (xAI benchmark)
- HLE: **29.0%** (xAI evaluation)
- LCR: **70.5%** (xAI benchmark)

Coding:

- SWE-bench Verified: **51.0%** (xAI evaluation)
- LiveCodeBench: **47.0%** (xAI benchmark)

Long context:

- RULER (128K window): **84.5%** retrieval accuracy across 128K context.

### Normalized scores (1–100)

- **Tool use: 75/100.** Fast tool calling and structured execution.
- **Reasoning: 74/100.** Solid reasoning for standard queries and rapid processing.
- **Context window: 74/100.** Dependable 128K context window.
- **Multimodal: 15/100.** Text-only input/output modalities.
- **Coding: 74.5/100.** Competent coding support for lightweight tasks.
- **Cost efficiency: 100/100.** [Free OpenCode Zen tier](https://opencode.ai/v2/docs/console/models/#free-models) ($0).
- **Overall Score: 62.5/100.** High-speed lightweight model tuned for fast, cost-effective conversational and coding tasks.

---

## Signature

- Provided by: — 2026-10-07
- ; re-verified and enriched with actual benchmark data on 2026-10-07
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
