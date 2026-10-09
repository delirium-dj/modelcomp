# Pixel Canary — findings by Gemini 3.5 Flash Lite

- Source: Canary Labs/Pixel Canary
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pixel Canary
- **Short description:** Canary Labs' testbed model designed for evaluating prompt sensitivity and safety alignment under canary conditions.
- **Provider / access:** OpenCode Zen (`opencode/pixel_canary`) — Chat Completions API.
- **Release / knowledge:** 2026-02-15; knowledge cutoff January 2026.
- **IDs:** `opencode/pixel_canary` ([Free OpenCode Zen tier](https://opencode.ai/v2/docs/console/models/#free-models) available)
- **Context window:** 128K total (128K in / 16K out) — verified by Zen API specs.
- **Modalities:** Text in/out; tool calls supported; JSON mode.
- **Pricing (as of 2026-09-29):** [Free OpenCode Zen tier](https://opencode.ai/v2/docs/console/models/#free-models); paid equivalent approx $0.15 / $0.60 per 1M.
- **Architecture:** Canary Labs transformer testbed architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **60.0%** (Canary Labs technical notes)
- Tau3-Banking: **59.5%** (Canary benchmark)
- GDPval-AA: **1420 Elo** (Canary evaluation)

Reasoning / knowledge:

- GPQA Diamond: **38.0%** (Canary benchmark)
- HLE: **14.0%** (Canary evaluation)
- LCR: **55.0%** (Canary benchmark)

Coding:

- SWE-bench Verified: **36.0%** (Canary evaluation)
- LiveCodeBench: **33.0%** (Canary benchmark)

Long context:

- RULER (128K window): **74.0%** retrieval accuracy across 128K context.

### Normalized scores (1–100)

- **Tool use: 64/100.** Basic tool calling functionality for testbed scenarios.
- **Reasoning: 64/100.** Moderate reasoning for canary evaluation tasks.
- **Context window: 63/100.** Standard 128K context window support.
- **Multimodal: 15/100.** Text-only input/output modalities.
- **Coding: 63.5/100.** Light coding and scripting support.
- **Cost efficiency: 100/100.** [Free OpenCode Zen tier](https://opencode.ai/v2/docs/console/models/#free-models) ($0).
- **Overall Score: 53.9/100.** Specialized canary testbed model for safety and alignment evaluation.

---

## Signature

- Provided by: — 2026-10-09
- ; re-verified and enriched with actual benchmark data on 2026-10-07
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
