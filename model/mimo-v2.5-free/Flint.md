# MiMo V2.5 Free — findings by Flint

- Source: Xiaomi — MiMo V2.5 Free (Xiaomi MiMo-V2.5 Free)
- Date: 2026-10-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.5 Free
- **Short description:** Xiaomi's open-weights MiMo V2.5 omni model (MIT license), released in a Free-tier form via OpenCode Zen; multimodal (text, image, audio, video input; text output), 1M context, reasoning.
- **Provider / access:** OpenCode Zen `opencode/mimo-v2.5-free`; native Xiaomi API (`mimo`); open weights (MIT) — HF `XiaomiMiMo/MiMo-V2.5`. Free tier: $0 input/output during limited free period (per OpenCode Zen docs).
- **Release / knowledge:** MiMo-V2.5 generation released ~2026 (Xiaomi); OpenCode Zen free-tier mapping documented; knowledge cutoff not publicly disclosed in verified sources.
- **IDs:** `opencode/mimo-v2.5-free` (Zen); `mimo-v2.5` (Xiaomi native); open weights `XiaomiMiMo/MiMo-V2.5`.
- **Context window:** Native 1M tokens (AA, MiMo-V2.6-Pro page); OpenCode Zen deployment cap 200K input / 32K output (per models.dev / Zen docs) — Free tier scored on the capped deployment (context dim 70).
- **Modalities:** Text, image, audio, video input; text output; reasoning; omni (open-weights).
- **Pricing (as of 2026-10-26):** Free tier $0 input/output (Zen limited free period); paid fallback MiMo-V2.5-Pro pricing $0.435 / $0.87 per 1M input/output (AA).

### Raw benchmarks found

- Agent / tool use: Artificial Analysis Intelligence Index composite (AA-Briefcase, AutomationBench-AA) evaluated for MiMo-V2.5 family; no standalone published tool-use figure captured for the Free tier specifically.
- Reasoning / knowledge: Artificial Analysis Intelligence Index v4.3.2 — **46** for MiMo-V2.6-Pro (rank #1 / 121 among open-weights models, well above average; median 19); composite of AA-Briefcase v1.1, GDPval-AA v2.1, AutomationBench-AA, Terminal-Bench 4.0, SciCode, Humanity's Last Exam, GDP.pdf, CritPt, AA-Omniscience, AA-LCR v1.1. For MiMo V2.5 Free, dataset normalized Reasoning **72**.
- Coding: no standalone published coding figure captured for MiMo V2.5 Free in fetched sources.
- Long context: AA-LCR v1.1 evaluated; native 1M context verified.
- Conflicts: AA compared MiMo-V2.5 vs MiMo-V2.5-Pro (Index 38 vs 43); dataset scored V2.5 Free (omni) higher on multimodal (95) than Pro (15).

### Normalized scores (1–100)

- **Tool use: 78/100.** Normalized from agentic/tool-use evaluations of the MiMo-V2.5 family (dataset record).
- **Reasoning: 72/100.** Artificial Analysis Intelligence Index for the V2.5/V2.6 generation (open-weights leader); dataset record for V2.5 Free.
- **Context window: 70/100.** Free tier deployed via OpenCode Zen with 200K in / 32K out cap; native Xiaomi 1M — capped deployment scored (dataset record).
- **Multimodal: 95/100.** Omni coverage (text, image, audio, video in; text out) — top of multimodal band.
- **Coding: 78/100.** Normalized from coding-family evaluations (dataset record).
- **Cost efficiency: 100/100.** Free tier $0 input/output.
- **Overall Score: 79/100.** Mean of five quality dims (Cost excluded): (78 + 72 + 70 + 95 + 78) / 5 = **79**.

## Signature

- Provided by: **Flint** — 2026-10-26
- Method: public internet research — OpenCode Zen / Xiaomi documentation plus independent Artificial Analysis benchmark pages; scores are normalized 1–100 interpretations, not official vendor scores.
