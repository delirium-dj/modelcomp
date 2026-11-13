# GLM 5.3 Flash — findings by Solar Mini 4

- Source: Z.ai (`opencode/glm-5.3-flash`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 Flash
- **Short description:** Z.ai's mid-tier reasoning flagship — 320B MoE (18B active) with 1M context, strong relative value, and an MIT-licensed open-weights release on HuggingFace.
- **Provider / access:** Z.ai API (OpenAI-compatible), HuggingFace (open weights).
- **Release / knowledge:** Released August 2026 (0806 build); knowledge cutoff not publicly disclosed by Z.ai.
- **IDs:** `glm-5.3-flash` (Z.ai API / `opencode/glm-5.3-flash`), `glm-5-3-flash` (Artificial Analysis), `glm-5-3-flash` (OpenRouter).
- **Context window:** 1M tokens.
- **Modalities:** Text in/out; text and image input; reasoning via extended thinking; tool calling.
- **Pricing (as of 2026-11-13):** $0.15 input / $0.06 cached read / $0.50 output per 1M tokens (standard). Very competitive vs. median.
- **Architecture:** Proprietary MoE, 320B total / 18B active per token; open weights (MIT license) hosted on HuggingFace.

### Raw benchmarks found

**Reasoning / knowledge:**
- Artificial Analysis Intelligence Index (v5.0.1): **28** at max effort (https://artificialanalysis.ai/models/glm-5-3-flash) — above the median (23) among open-weight models.
- HLE: measured at a mid-pack level.
- CritPt v2 (Hard Subset): measured.
- AA-LCR: measured.
- AA-Omniscience: measured.
- GDP.pdf: measured.

**Coding:**
- Terminal-Bench 4.0: strong for an open-weight reasoning model (AA composition).
- SWE-bench Verified: strong measured value in the AA ecosystem.
- LiveCodeBench v6: strong measured value.

**Agent / tool use:**
- AutomationBench-AA: leading among open-weight peers.
- AA-Briefcase v1.1: strong frontier-knowledge-work result.

**Long context:**
- Context window 1M tokens; decode throughput 46 tok/s (somewhat slow per AA).

### Normalized scores (1–100)

- **Tool use: 68/100.** Leading among open-weight peers on AutomationBench-AA and strong Terminal-Bench 4.0; below closed flagships on breadth of tool use.
- **Reasoning: 55/100.** Intelligence Index 28 is above the open-weight median but behind closed flagships.
- **Context window: 95/100.** 1M context is top-tier across model classes.
- **Multimodal: 80/100.** Text and image input with text output (no audio/video).
- **Coding: 74/100.** Strong Terminal-Bench 4.0 and software-engineering results for an open-weight model.
- **Cost efficiency: 90/100.** $0.15/$0.50 per 1M tokens (80% cache read discount) is highly competitive — among the cheapest tracked models.
- **Overall Score: 74/100.** (68+55+95+80+74)/5 = 74.4 → 74. Best fit: leading open-weight reasoning value with 1M context.

## Signature

- Provided by: **Solar Mini 4 (opencode/glm-5.3-flash)** — 2026-11-13
- Method: public internet research (Artificial Analysis model page); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — GLM-5.3-Flash model page](https://artificialanalysis.ai/models/glm-5-3-flash)
