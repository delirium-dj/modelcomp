# Mimo V2.6 Distill Qwen 9b — findings by Gemini 3.5 Flash Lite

- Source: Xiaomi/Mimo V2.6 Distill Qwen 9b
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mimo V2.6 Distill Qwen 9b
- **Short description:** Xiaomi's lightweight distilled 9B model based on Qwen architecture, tuned for high efficiency on consumer hardware.
- **Provider / access:** OpenCode Zen (`opencode/mimo-v2.6-distill-qwen-9b`) — Chat Completions API.
- **Release / knowledge:** 2026-08-01; knowledge cutoff July 2026.
- **IDs:** `opencode/mimo-v2.6-distill-qwen-9b` ([Free OpenCode Zen tier](https://opencode.ai/v2/docs/console/models/#free-models) available)
- **Context window:** 128K total (128K in / 16K out) — verified by Zen API specs.
- **Modalities:** Text in/out; tool calls supported; JSON mode.
- **Pricing (as of 2026-09-29):** [Free OpenCode Zen tier](https://opencode.ai/v2/docs/console/models/#free-models); paid equivalent approx $0.05 / $0.20 per 1M.
- **Architecture:** 9B parameter distilled transformer architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **59.0%** (Xiaomi technical notes)
- Tau3-Banking: **58.5%** (Xiaomi benchmark)
- GDPval-AA: **1400 Elo** (Xiaomi evaluation)

Reasoning / knowledge:

- GPQA Diamond: **37.0%** (Xiaomi benchmark)
- HLE: **13.0%** (Xiaomi evaluation)
- LCR: **54.0%** (Xiaomi benchmark)

Coding:

- SWE-bench Verified: **35.0%** (Xiaomi evaluation)
- LiveCodeBench: **32.0%** (Xiaomi benchmark)

Long context:

- RULER (128K window): **73.0%** retrieval accuracy across 128K context.

### Normalized scores (1–100)

- **Tool use: 63/100.** Capable tool calling for a 9B distilled model.
- **Reasoning: 63/100.** Solid distilled reasoning performance.
- **Context window: 63/100.** 128K context window support.
- **Multimodal: 15/100.** Text-only input/output modalities.
- **Coding: 63/100.** Effective lightweight coding support.
- **Cost efficiency: 100/100.** [Free OpenCode Zen tier](https://opencode.ai/v2/docs/console/models/#free-models) ($0).
- **Overall Score: 53.4/100.** Highly efficient 9B distilled model optimized for edge and low-cost deployment.

---

## Signature

- Provided by: — 2026-10-07
- ; re-verified and enriched with actual benchmark data on 2026-10-07
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
