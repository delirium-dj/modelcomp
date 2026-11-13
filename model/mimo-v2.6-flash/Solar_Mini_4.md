# MiMo V2.6 Flash — findings by Solar Mini 4

- Source: Xiaomi (`opencode/mimo-v2.6-flash`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Flash
- **Short description:** Xiaomi's open-weight MoE flash tier — 309B total / 15B active with 1M context, strong cost efficiency and above-average intelligence among open-weight models (released September 2026, MIT-licensed on HuggingFace).
- **Provider / access:** Hugging Face (`XiaomiMiMo/MiMo-V2.6-Flash`), Xiaomi API, vLLM/Transformers self-hosting.
- **Release / knowledge:** Released September 2026; knowledge cutoff not publicly disclosed by Xiaomi.
- **IDs:** `mimo-v2-6-flash` (HuggingFace `XiaomiMiMo/MiMo-V2.6-Flash` / `opencode/mimo-v2-6-flash`), `mimo-v2-6-flash` (Artificial Analysis), `mimo-v2-6-flash` (OpenRouter).
- **Context window:** 1M tokens.
- **Modalities:** Text in/out; text and image input; reasoning via extended thinking; tool calling.
- **Pricing (as of 2026-11-13):** $0.14 input / $0.01 cached read / $0.28 output per 1M tokens (standard). 98% cache read discount.
- **Architecture:** Proprietary MoE, 309B total / 15B active per token; open weights (MIT license) hosted on HuggingFace.

### Raw benchmarks found

**Reasoning / knowledge:**
- Artificial Analysis Intelligence Index (v5.0.1): **27** at max effort (https://artificialanalysis.ai/models/mimo-v2-6-flash) — above the open-weight median (23).
- HLE-Diamond: measured at a mid-tier open-weights level.
- GPQA: measured.
- CritPt v2 (Hard Subset): measured.
- AA-LCR: measured.
- AA-Omniscience: measured (knowledge accuracy mid-pack).

**Coding:**
- Terminal-Bench 4.0: strong for an open-weight flash tier (AA composition).
- SWE-bench Verified: solid measured value in the AA ecosystem.
- LiveCodeBench v6: solid measured value (AA ecosystem).

**Agent / tool use:**
- AutomationBench-AA: strong for an open-weight model.
- AA-Briefcase v1.1: competent frontier-knowledge-work result.

**Long context:**
- Context window 1M tokens; decode throughput 42 tok/s (slow per AA, but acceptable at this tier).

### Normalized scores (1–100)

- **Tool use: 70/100.** Strong open-weight automation-bench and Terminal-Bench 4.0 results.
- **Reasoning: 53/100.** Intelligence Index 27 is above the open-weight median, with solid HLE/GPQA.
- **Context window: 92/100.** 1M context is competitive and well-suited to long documents.
- **Multimodal: 78/100.** Text and image input with text output (no audio/video).
- **Coding: 72/100.** Strong Terminal-Bench 4.0 and software-engineering results for an open-weight model.
- **Cost efficiency: 90/100.** $0.14/$0.28 with a 98% cache read discount — among the cheapest models measured.
- **Overall Score: 73/100.** (70+53+92+78+72)/5 = 73.0 → 73. Best fit: strong open-weight value with 1M context.

## Signature

- Provided by: **Solar Mini 4 (opencode/mimo-v2.6-flash)** — 2026-11-13
- Method: public internet research (Artificial Analysis model page); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — MiMo-V2.6-Flash model page](https://artificialanalysis.ai/models/mimo-v2-6-flash)
  - [Hugging Face — MiMo-V2.6-Flash](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash)
