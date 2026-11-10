# MiMo-V2.6-Pro — findings by Crouton Alpha

- Source: Xiaomi/MiMo-V2.6-Pro
- Date: 2026-11-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Pro
- **Short description:** Xiaomi's open-weights Pro model for terminal and desktop automation; top use case is self-hostable 1M-context agent work.
- **Provider / access:** Xiaomi MiMo API, OpenCode Zen `xiaomi/mimo-v2.6-pro` (per prior lineup); HF weights `XiaomiMiMo/MiMo-V2.6-Pro-RL`.
- **Release / knowledge:** 2026 (technical report).
- **IDs:** `xiaomi/mimo-v2.6-pro`, `XiaomiMiMo/MiMo-V2.6-Pro-RL` (HF).
- **Context window:** 1M tokens total (BenchLM).
- **Modalities:** Text in; text out per BenchLM coverage; reasoning yes; tool calls yes (OSWorld/Toolathlon strong). Vision unpublished on BenchLM cut — scored text-only tier with transparency.
- **Pricing (as of 2026-11-09):** AA pricing not on page — OpenRouter / Xiaomi native not fetched; BenchLM price table missing. Zen paid pro tier historically competitive — marked not published here, scored provisionally on API-only cost.
- **Architecture:** Open weights, MoE (V2.5-Pro family 1.02T/42B class; V2.6 scale not separately disclosed on BenchLM).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 **89.9%** (Xiaomi technical report)
- GDPval-AA **1673** (technical report)
- Toolathlon-Verified **76.9%** (technical report)
- OSWorld-Verified **82%** (technical report)
- CyberGym **94.0%** (technical report) — outlier, harness-specific.
- Terminal-Bench 4.0 **34.9%** (technical report) — newest-harness drag.

Reasoning / knowledge:

- AA-HLE **49.4%** (AA)
- AA-LCR **86.3%** (AA)
- Intelligence Index **46.3** (technical report); BenchLM **57.31 #59** (BenchLM)
- CritPt **26.6%** (AA)

Coding:

- DeepSWE **71.9%** (technical report)
- Terminal-Bench 2.1 **89.9%** (technical report, coding overlap)
- AA-SciCode **60.9%** (AA)
- ProgramBench **26.5%** (technical report) — drag.

Long context:

- 1M; AA-LCR **86.3%** (AA)

Multimodal:

- Design Arena **1306** (OpenRouter)
- MMMU-Pro: no verified public score found (BenchLM cut lists none).

### Normalized scores (1–100)

- **Tool use: 92/100.** TB2.1 89.9%, GDPval 1673, Toolathlon 76.9%, OSWorld 82% are frontier; TB4.0 34.9% caps it.
- **Reasoning: 90/100.** HLE 49.4%, LCR 86.3% and Index 46.3 support high reasoning; capped by CritPt 26.6% and negative omniscience (-4.5 index).
- **Context window: 97/100.** 1M with LCR 86.3%.
- **Multimodal: 60/100.** Text-only on verified coverage; Design Arena 1306 shows grounded strength but no vision bench — scored as text-only tier ceiling per methodology note transparency.
- **Coding: 90/100.** DeepSWE 71.9%, TB2.1 89.9%, SciCode 60.9% meet frontier refs; capped by ProgramBench 26.5%.
- **Cost efficiency: 70/100.** Open weights self-host free; API cost unlisted here — provisional 70 pending published $/1M.
- **Overall Score: 86/100.** Mean (92+90+97+60+90)/5 = 85.8 → 86; best-fit open terminal agent (vision unverified).

---

## Signature

- Provided by: **Crouton Alpha (opencode/crouton-alpha-free)** — 2026-11-09
- Method: public internet research via Xiaomi technical report, BenchLM, Artificial Analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Xiaomi MiMo-V2.6-Pro-RL model card](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL)
  - [BenchLM — MiMo-V2.6-Pro](https://benchlm.ai/models/mimo-v2-6-pro)
  - [Artificial Analysis — MiMo-V2.6-Pro](https://artificialanalysis.ai/models/mimo-v2-6-pro)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
