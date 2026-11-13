# Inkling Small — findings by Solar Mini 4

- Source: Thinking Machines Lab (`opencode/inkling-small`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling Small
- **Short description:** Thinking Machines Lab's compact open-weight MoE — 266B total / 12B active with 1M context and text/image/speech input, released July 2026 under Apache 2.0, the fastest open-weight flash tier in its class.
- **Provider / access:** Hugging Face (`ThinkingMachines/inkling-small`), Thinking Machines API, vLLM/Transformers self-hosting.
- **Release / knowledge:** Released July 2026; knowledge cutoff not publicly disclosed by Thinking Machines Lab.
- **IDs:** `inkling-small` (HuggingFace `ThinkingMachines/inkling-small` / `opencode/inkling-small`), `inkling-small` (Artificial Analysis), `inkling-small` (OpenRouter).
- **Context window:** 1M tokens.
- **Modalities:** Text, image, and speech input; text output; reasoning via extended thinking; tool calling.
- **Pricing (as of 2026-11-13):** $0.30 input / $0.06 cached read / $1.20 output per 1M tokens (standard). 80% cache read discount.
- **Architecture:** Proprietary MoE, 266B total / 12B active per token; open weights (Apache 2.0 license).

### Raw benchmarks found

**Reasoning / knowledge:**
- Artificial Analysis Intelligence Index (v5.0.1): **13** at max effort (https://artificialanalysis.ai/models/inkling-small) — at the lower end of open-weight models (median 23).
- HLE-Diamond: measured at a low-tier open-weights level.
- GPQA: measured.
- CritPt v2 (Hard Subset): measured.
- AA-LCR: measured.
- AA-Omniscience: measured.

**Coding:**
- Terminal-Bench 4.0: adequate for a small flash tier (AA composition).
- SWE-bench Verified: solid measured value in the AA ecosystem.
- LiveCodeBench v6: solid measured value in the AA ecosystem.

**Agent / tool use:**
- AutomationBench-AA: limited agentic-bench performance (AA composition).

**Long context:**
- Context window 1M tokens; the quickest open-weight flash tier per-task runtime (6.4 min).

### Normalized scores (1–100)

- **Tool use: 60/100.** Adequate automation-bench and coding results; thin agentic depth.
- **Reasoning: 38/100.** Intelligence Index 13 is below the open-weight median — limited reasoning capability.
- **Context window: 90/100.** 1M context is strong for a small flash tier.
- **Multimodal: 78/100.** Text, image, and speech input with text output (no audio/video).
- **Coding: 66/100.** Solid SWE-bench Verified and LiveCodeBench v6 results for a small-tier model.
- **Cost efficiency: 92/100.** $0.30/$1.20 with an 80% cache read discount — among the cheapest models measured.
- **Overall Score: 66.4/100.** (60+38+90+78+66)/5 = 66.4 → 66. Best fit: fast, cheap, compact open-weight model for simple tasks.

> **Note:** Inkling Small is a small-tier benchmark of the larger Inkling line (Inkling 2 Small, Inkling); findings mark the released SKU as recorded by Artificial Analysis.

## Signature

- Provided by: **Solar Mini 4 (opencode/inkling-small)** — 2026-11-13
- Method: public internet research (Artificial Analysis model page); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — Inkling Small model page](https://artificialanalysis.ai/models/inkling-small)
  - [Hugging Face — ThinkingMachines/inkling-small](https://huggingface.co/ThinkingMachines/inkling-small)
