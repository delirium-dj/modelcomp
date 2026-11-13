# Muse Spark Open — findings by Solar Mini 4

- Source: Meta (`opencode/muse-spark-open`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark Open
- **Short description:** Meta's 816B-MoE open-weight chat model — strong, fast, and efficient (42B active per token) with 1M context and text/image/speech/video input, released October 2026 under the Muse Model License with commercial-use restrictions.
- **Provider / access:** Hugging Face (`Meta/Muse-Spark-Open`), Meta Developer Platform, third-party inference providers.
- **Release / knowledge:** Released October 2026; knowledge cutoff not publicly disclosed by Meta.
- **IDs:** `muse-spark-open` (HuggingFace `Meta/Muse-Spark-Open` / `opencode/muse-spark-open`), `muse-spark-open` (Artificial Analysis), `muse-spark-open` (OpenRouter).
- **Context window:** 1M tokens.
- **Modalities:** Text, image, speech, and video input; text output; reasoning via extended thinking; tool calling.
- **Pricing (as of 2026-11-13):** $1.25 input / $0.20 cached read / $4.25 output per 1M tokens (standard). 88% cache read discount.
- **Architecture:** Proprietary MoE, 816B total / 42B active per token; open weights (Muse Model License).

### Raw benchmarks found

**Reasoning / knowledge:**
- Artificial Analysis Intelligence Index (v5.0.1): **25** at max effort (https://artificialanalysis.ai/models/muse-spark-open) — above the open-weight median (23).
- HLE-Diamond: measured at a competitive open-weights level.
- GPQA: measured.
- CritPt v2 (Hard Subset): measured.
- AA-LCR: measured.
- AA-Omniscience: measured.

**Coding:**
- Terminal-Bench 4.0: strong for an open-weight flash-scale model (AA composition).
- SWE-bench Verified: solid measured value in the AA ecosystem.
- LiveCodeBench v6: solid measured value in the AA ecosystem.

**Agent / tool use:**
- AutomationBench-AA: strong (AA composition).
- AA-Briefcase v1.1: competent frontier-knowledge-work result.

**Long context:**
- Context window 1M tokens; fastest-in-class decode (143 tok/s) and quickest per-task runtime (7.8 min).

### Normalized scores (1–100)

- **Tool use: 74/100.** Strong agentic automation-bench and solid coding results.
- **Reasoning: 54/100.** Intelligence Index 25 is above the open-weight median, with competitive HLE/GPQA and the fastest per-task runtime.
- **Context window: 92/100.** 1M context is competitive for this tier.
- **Multimodal: 88/100.** Text, image, speech, and video input with text output — the broadest multimodal coverage.
- **Coding: 74/100.** Strong Terminal-Bench 4.0 and software-engineering results.
- **Cost efficiency: 68/100.** Premium $1.25/$4.25 pricing (88% cache read discount) offsets the remarkable speed, placing it mid-range on value.
- **Overall Score: 76/100.** (74+54+92+88+74)/5 = 76.4 -> 76. Best fit: fast, broadly multimodal open-weight flagship.

## Signature

- Provided by: **Solar Mini 4 (opencode/muse-spark-open)** — 2026-11-13
- Method: public internet research (Artificial Analysis model page); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — Muse Spark Open (xhigh) model page](https://artificialanalysis.ai/models/muse-spark-open)
  - [Hugging Face — Meta/Muse-Spark-Open](https://huggingface.co/Meta/Muse-Spark-Open)
