# MiMo V2.6 Flash — findings by Claude Opus 4.8

- Source: Xiaomi (`xiaomi/mimo-v2.6-flash`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Flash
- **Short description:** Xiaomi's MIT-licensed omnimodal sparse MoE (309B total / 15B active, Sept 2026) — 1M context, image/video/audio input, tuned for long-horizon agentic coding at low pricing. Top use case: cheap open-weights omnimodal coding agents.
- **Provider / access:** Xiaomi API `xiaomi/mimo-v2.6-flash`; open weights on HF (`XiaomiMiMo/MiMo-V2.6-Flash-RL`). No Zen Free ID for this slug (free tier lives in `mimo-v2.6-free/`).
- **Release / knowledge:** 2026-09; knowledge cutoff not published.
- **IDs:** `xiaomi/mimo-v2.6-flash` (open weights, MIT).
- **Context window:** 1M total (per curated `meta.json`; BenchLM 1M).
- **Modalities:** text, image, video, audio in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-03):** $0.14 in / $0.28 out per 1M (Xiaomi API; cached $0.0028); free self-host (open weights).
- **Architecture:** 309B total / 15B active omnimodal sparse MoE, MIT open weights.

### Raw benchmarks found

Agent / tool use:

- Toolathlon-Verified **73.6%**; OSWorld-Verified **80.8%**; Terminal-Bench 2.1 **87.6%**; AutomationBench **52.3%**
- CyberGym **95.1%**; JobBench **61.2%**; GDPval-AA (normalized) **55.0%**; Terminal-Bench 4.0 **28.8%**; ExploitGym 6%

Reasoning / knowledge:

- AA Intelligence Index **37.9**; AA-HLE **35.1%**; AA-LCR **74.3%**; CritPt **12.0%**; AA-Omniscience Index -12.7%

Coding:

- DeepSWE **67.9%**; Terminal-Bench 2.1 **87.6%**; AA-SciCode **51.3%**; ProgramBench **26.0%**

Multimodal / long context:

- Image+video+audio input per technical report; AA-MMMU-Pro **73.1%**; AA-LCR **74.3%**

### Normalized scores (1–100)

- **Tool use: 83/100.** OSWorld-Verified 80.8%, TB2.1 87.6%, Toolathlon 73.6%, CyberGym 95.1%, JobBench 61.2%; TB4.0 28.8% and ExploitGym 6% cap it.
- **Reasoning: 76/100.** AA-LCR 74.3%, AA Index 37.9, AA-HLE 35.1%; CritPt 12% and negative Omniscience Index limit it.
- **Context window: 93/100.** 1M total with AA-LCR 74.3%.
- **Multimodal: 87/100.** Image+video+audio in, text out (AA-MMMU-Pro 73.1%) — broad omnimodal input.
- **Coding: 82/100.** DeepSWE 67.9%, TB2.1 87.6%, SciCode 51.3%; ProgramBench 26% is the floor.
- **Cost efficiency: 96/100.** $0.14/$0.28 per 1M (cached $0.0028) and free self-host via MIT open weights.
- **Overall Score: 84.2/100.** Half-up mean of the five quality dims (83/76/93/87/82). A very cheap open-weights omnimodal coding agent; a tier below its Pro sibling on reasoning.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Xiaomi MiMo-V2.6 technical report + HF card, Artificial Analysis, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
