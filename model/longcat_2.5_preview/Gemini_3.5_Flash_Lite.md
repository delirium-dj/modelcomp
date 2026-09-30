# LongCat 2.5 Preview — findings by Gemini 3.5 Flash Lite

- Source: LongCat Labs/LongCat 2.5 Preview
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat 2.5 Preview
- **Short description:** LongCat Labs' preview model featuring enhanced long-context attention and robust multi-step reasoning.
- **Provider / access:** OpenCode Zen (`opencode/longcat_2.5_preview`) — Chat Completions API.
- **Release / knowledge:** 2026-04-15; knowledge cutoff March 2026.
- **IDs:** `opencode/longcat_2.5_preview` ([Free OpenCode Zen tier](https://opencode.ai/v2/docs/console/models/#free-models) available)
- **Context window:** 128K total (128K in / 16K out) — verified by Zen API specs.
- **Modalities:** Text in/out; tool calls supported; JSON mode.
- **Pricing (as of 2026-09-29):** [Free OpenCode Zen tier](https://opencode.ai/v2/docs/console/models/#free-models); paid equivalent approx $0.35 / $1.40 per 1M.
- **Architecture:** LongCat Labs transformer architecture with expanded attention span.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **70.0%** (LongCat technical notes)
- Tau3-Banking: **68.5%** (LongCat benchmark)
- GDPval-AA: **1660 Elo** (LongCat evaluation)

Reasoning / knowledge:

- GPQA Diamond: **53.0%** (LongCat benchmark)
- HLE: **27.0%** (LongCat evaluation)
- LCR: **69.0%** (LongCat benchmark)

Coding:

- SWE-bench Verified: **49.0%** (LongCat evaluation)
- LiveCodeBench: **45.0%** (LongCat benchmark)

Long context:

- RULER (128K window): **83.0%** retrieval accuracy across 128K context.

### Normalized scores (1–100)

- **Tool use: 74/100.** Effective tool integration for assistant tasks.
- **Reasoning: 73/100.** Solid reasoning across analytical prompts.
- **Context window: 74/100.** Reliable context handling up to 128K.
- **Multimodal: 15/100.** Text-only input/output modalities.
- **Coding: 73.5/100.** Competent programming and debugging support.
- **Cost efficiency: 100/100.** [Free OpenCode Zen tier](https://opencode.ai/v2/docs/console/models/#free-models) ($0).
- **Overall Score: 61.9/100.** Promising preview model with robust attention and multi-step task execution.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-29
- Method: Public internet research and LongCat Labs documentation; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
