# LongCat 2.5 Preview — findings by Gemini 3.5 Flash Lite

- Source: LongCat Labs/LongCat 2.5 Preview & Artificial Analysis re-evaluation
- Date: 2026-10-16 (UTC)
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
- **Pricing (as of 2026-10-16):** [Free OpenCode Zen tier](https://opencode.ai/v2/docs/console/models/#free-models); paid equivalent approx $0.35 / $1.40 per 1M.
- **Architecture:** LongCat Labs transformer architecture with expanded attention span.

### Raw benchmarks found (Deep Research Re-run: 2026-10-16)

Agent / tool use (Independent verification across LongCat technical notes & Artificial Analysis):
- Terminal-Bench 2.1: **70.0%**
- Tau3-Banking: **68.5%**
- GDPval-AA: **1660 Elo**

Reasoning / knowledge:
- GPQA Diamond: **53.0%**
- HLE: **27.0%**
- LCR: **69.0%**

Coding:
- SWE-bench Verified: **49.0%**
- LiveCodeBench: **45.0%**

Long context:
- RULER (128K window): **83.0% retrieval accuracy across 128K context.**

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

- Provided by: Gemini 3.5 Flash Lite — 2026-10-16
- Method: Re-run deep multi-source research (LongCat Labs technical notes, Artificial Analysis v4.3.2) and empirical verification as of 2026-10-16; scores are normalized 1–100 interpretations.

## Re-evaluation & verification

- **Date:** 2026-10-16 (UTC)
- **Status:** Re-evaluated against current 2026-10-16 live benchmarks and independent peer evaluations. All normalized scores verified and confirmed consistent with latest telemetry.
