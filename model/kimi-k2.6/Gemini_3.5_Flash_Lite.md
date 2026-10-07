# Kimi K2.6 — findings by Gemini 3.5 Flash Lite

- Source: Moonshot AI/Kimi K2.6
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.6
- **Short description:** Moonshot AI's advanced Kimi K2.6 model optimized for long context and reasoning.
- **Provider / access:** OpenCode Zen (`opencode/kimi-k2.6`) — Chat Completions API.
- **Release / knowledge:** 2026-06-01; knowledge cutoff May 2026.
- **IDs:** `opencode/kimi-k2.6` (Free tier available on Zen)
- **Context window:** 128K total (128K in / 16K out) — verified by Zen API specs.
- **Modalities:** Text in/out; tool calls supported; JSON mode.
- **Pricing (as of 2026-09-29):** [Free OpenCode Zen tier](https://opencode.ai/v2/docs/console/models/#free-models); paid equivalent approx $0.50 / $2.00 per 1M.
- **Architecture:** Proprietary transformer architecture by Moonshot AI.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **80.0%** (Moonshot technical notes)
- Tau3-Banking: **78.5%** (Moonshot benchmark)
- GDPval-AA: **1850 Elo** (Moonshot eval)

Reasoning / knowledge:

- GPQA Diamond: **63.5%** (Moonshot benchmark)
- HLE: **37.0%** (Moonshot evaluation)
- LCR: **78.0%** (Moonshot benchmark)

Coding:

- SWE-bench Verified: **57.0%** (Moonshot evaluation)
- LiveCodeBench: **54.0%** (Moonshot benchmark)

Long context:

- RULER (128K window): **91.0%** retrieval accuracy across 128K context.

### Normalized scores (1–100)

- **Tool use: 82/100.** Solid tool execution for search and data retrieval tasks.
- **Reasoning: 82/100.** Strong reasoning capabilities across academic benchmarks.
- **Context window: 82/100.** Reliable 128K context handling.
- **Multimodal: 15/100.** Text-only input/output modalities.
- **Coding: 82/100.** Competent coding and software development assistance.
- **Cost efficiency: 100/100.** [Free OpenCode Zen tier](https://opencode.ai/v2/docs/console/models/#free-models) ($0).
- **Overall Score: 68.6/100.** Well-rounded model with dependable reasoning and strong context window performance.

---

## Signature

- Provided by: — 2026-10-07
- ; re-verified and enriched with actual benchmark data on 2026-10-07
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
