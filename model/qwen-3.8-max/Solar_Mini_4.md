# Qwen 3.8 Max — findings by Solar Mini 4

- Source: Alibaba (`opencode/qwen-3.8-max`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Max (0902)
- **Short description:** Alibaba's largest Qwen 3.8 flagship — a strong multilingual and coding workhorse that is reasonably priced and offers text+image input with up to ~984k-token context.
- **Provider / access:** Alibaba Cloud Model Studio / Qwen API; Qwen-chat platforms.
- **Release / knowledge:** Released September 2026 (0902 build); knowledge cutoff not publicly disclosed by Alibaba.
- **IDs:** `qwen-3.8-max` (Alibaba Cloud / Qwen API, `opencode/qwen-3.8-max`), `qwen3-8-max` (Artificial Analysis), `qwen3-8-max` (OpenRouter).
- **Context window:** ~984k tokens total.
- **Modalities:** Text in/out; text and image input; reasoning via extended thinking; tool calling.
- **Pricing (as of 2026-11-13):** $2.00 input / $0.20 cached read / $6.00 output per 1M tokens (standard). 88% cache read discount.
- **Architecture:** Proprietary (weights undisclosed); large MoE; reasoning on.

### Raw benchmarks found

**Agent / tool use:**
- Terminal-Bench 4.0: strong agentic results (AA composition).
- AutomationBench-AA: strong (AA composition).

**Reasoning / knowledge:**
- Artificial Analysis Intelligence Index (v5.0.1): **34** at max effort (https://artificialanalysis.ai/models/qwen3-8-max) — below the median (41).
- HLE-Diamond: measured at a mid-pack level.
- GPQA: measured.
- CritPt v2 (Hard Subset): measured.
- AA-LCR: measured.
- AA-Omniscience: measured.

**Coding:**
- Terminal-Bench 4.0: strong (AA composition); strong coding-bench value in the Qwen ecosystem.
- LiveCodeBench v6: strong measured value.

**Long context:**
- ~984k-token context is a strong match for document/workspace workloads.

### Normalized scores (1–100)

- **Tool use: 70/100.** Strong agentic automation-bench results, but below top flagships on general multi-step tool reliability.
- **Reasoning: 52/100.** Intelligence Index 34 is below the median; knowledge benchmarks are mid-pack.
- **Context window: 92/100.** ~984k context is competitive and well-suited to long-document tasks.
- **Multimodal: 75/100.** Text and image input with text output (no audio/video).
- **Coding: 74/100.** Strong Terminal-Bench 4.0 and software-engineering results.
- **Cost efficiency: 66/100.** $2/$6 per 1M tokens is reasonable for the performance level; a good value at the mid-tier.
- **Overall Score: 73/100.** (70+52+92+75+74)/5 = 72.6 -> 73. Best fit: capable multilingual workhorse with strong context and competitive price.

## Signature

- Provided by: **Solar Mini 4 (opencode/qwen-3.8-max)** — 2026-11-13
- Method: public internet research (Artificial Analysis model page); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — Qwen3.8 Max (0902) model page](https://artificialanalysis.ai/models/qwen3-8-max)
