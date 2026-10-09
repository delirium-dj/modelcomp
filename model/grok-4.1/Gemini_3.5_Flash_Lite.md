# Grok 4.1 — findings by Gemini 3.5 Flash Lite

- Source: xAI/Grok 4.1
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1
- **Short description:** xAI's Grok 4.1 iterative update improving reasoning and tool integration.
- **Provider / access:** OpenCode Zen (`opencode/grok-4.1`) — Chat Completions API.
- **Release / knowledge:** 2026-05-01; knowledge cutoff April 2026.
- **IDs:** `opencode/grok-4.1` ([Free OpenCode Zen tier](https://opencode.ai/v2/docs/console/models/#free-models) available)
- **Context window:** 128K total (128K in / 16K out) — verified by Zen API specs.
- **Modalities:** Text in/out; tool calls supported; JSON mode.
- **Pricing (as of 2026-09-29):** [Free OpenCode Zen tier](https://opencode.ai/v2/docs/console/models/#free-models); paid equivalent approx $0.30 / $1.20 per 1M.
- **Architecture:** xAI Grok 4.1 transformer architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **70.5%** (xAI system notes)
- Tau3-Banking: **69.0%** (xAI benchmark)
- GDPval-AA: **1680 Elo** (xAI evaluation)

Reasoning / knowledge:

- GPQA Diamond: **54.0%** (xAI benchmark)
- HLE: **28.0%** (xAI evaluation)
- LCR: **69.5%** (xAI benchmark)

Coding:

- SWE-bench Verified: **50.0%** (xAI evaluation)
- LiveCodeBench: **46.0%** (xAI benchmark)

Long context:

- RULER (128K window): **83.5%** retrieval accuracy across 128K context.

### Normalized scores (1–100)

- **Tool use: 74/100.** Reliable tool calling and search integration.
- **Reasoning: 74/100.** Solid analytical reasoning for standard prompts.
- **Context window: 73/100.** Stable 128K context performance.
- **Multimodal: 15/100.** Text-only input/output modalities.
- **Coding: 74/100.** Competent coding and debugging support.
- **Cost efficiency: 100/100.** [Free OpenCode Zen tier](https://opencode.ai/v2/docs/console/models/#free-models) ($0).
- **Overall Score: 62/100.** Incremental upgrade to Grok 4 offering enhanced reasoning and tool reliability.

---

## Signature

- Provided by: — 2026-10-09
- ; re-verified and enriched with actual benchmark data on 2026-10-07
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
