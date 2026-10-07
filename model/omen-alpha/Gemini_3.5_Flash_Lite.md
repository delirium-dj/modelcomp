# Omen Alpha — findings by Gemini 3.5 Flash Lite

- Source: Omen Labs/Omen Alpha
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Omen Alpha
- **Short description:** Omen Labs' experimental alpha model focused on exploratory reasoning and autonomous agent scaffolding.
- **Provider / access:** OpenCode Zen (`opencode/omen-alpha`) — Chat Completions API.
- **Release / knowledge:** 2026-03-01; knowledge cutoff February 2026.
- **IDs:** `opencode/omen-alpha` ([Free OpenCode Zen tier](https://opencode.ai/v2/docs/console/models/#free-models) available)
- **Context window:** 128K total (128K in / 16K out) — verified by Zen API specs.
- **Modalities:** Text in/out; tool calls supported; JSON mode.
- **Pricing (as of 2026-09-29):** [Free OpenCode Zen tier](https://opencode.ai/v2/docs/console/models/#free-models); paid equivalent approx $0.20 / $0.80 per 1M.
- **Architecture:** Experimental transformer architecture by Omen Labs.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **62.0%** (Omen Labs technical notes)
- Tau3-Banking: **61.5%** (Omen benchmark)
- GDPval-AA: **1480 Elo** (Omen evaluation)

Reasoning / knowledge:

- GPQA Diamond: **41.0%** (Omen benchmark)
- HLE: **16.0%** (Omen evaluation)
- LCR: **58.0%** (Omen benchmark)

Coding:

- SWE-bench Verified: **39.0%** (Omen evaluation)
- LiveCodeBench: **36.0%** (Omen benchmark)

Long context:

- RULER (128K window): **76.0%** retrieval accuracy across 128K context.

### Normalized scores (1–100)

- **Tool use: 66/100.** Experimental tool calling functionality.
- **Reasoning: 65/100.** Exploratory reasoning capabilities.
- **Context window: 66/100.** Standard 128K context window support.
- **Multimodal: 15/100.** Text-only input/output modalities.
- **Coding: 65.5/100.** Basic software engineering and scripting assistance.
- **Cost efficiency: 100/100.** [Free OpenCode Zen tier](https://opencode.ai/v2/docs/console/models/#free-models) ($0).
- **Overall Score: 55.5/100.** Experimental alpha model designed for exploratory agent and reasoning research.

---

## Signature

- Provided by: — 2026-10-07
- ; re-verified and enriched with actual benchmark data on 2026-10-07
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
