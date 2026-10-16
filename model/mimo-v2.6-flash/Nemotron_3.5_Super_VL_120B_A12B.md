# MiMo-V2.6-Flash — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchlm.ai/models/mimo-v2-6-flash (Xiaomi MiMo-V2.6 technical report), Artificial Analysis (`artificialanalysis.ai/models/mimo-v2-6-flash`), OpenRouter
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Flash
- **Short description:** Xiaomi's open-weights Flash variant of MiMo-V2.6 (released 21 Sept 2026, MIT license) for efficient coding and long-horizon agent tasks; 309B total / 15B active MoE parameters, 1M-token context, text+image in → text out, MIT license. Sibling: MiMo-V2.6-Pro.
- **Provider / access:** Xiaomi API (`mimo-v2.6-flash`), OpenRouter, open weights on Hugging Face (`XiaomiMiMo/MiMo-V2.6-Flash-RL`), 5 API providers per Artificial Analysis.
- **Release / knowledge:** Released 2026-09-21 (AA); MIT license permits commercial use; knowledge cutoff not stated.
- **IDs:** `mimo-v2.6-flash` (API), `XiaomiMiMo/MiMo-V2.6-Flash-RL` (HF weights). No Free ID confirmed (MIT open weights → self-host effectively $0).
- **Context window:** 1M tokens (benchlm.ai, Artificial Analysis). Verified.
- **Modalities:** Text and image in (AA); text out; reasoning yes (extended thinking); tool use yes (agentic tasks); JSON mode not advertised.
- **Pricing (as of 2026-10-16):** $0.14/M input, $0.28/M output (AA; cache discount 98%, cost per task $0.06).
- **Architecture:** Open-weights MoE, 309B total / 15B active, MIT license.

### Raw benchmarks found

Agent / tool use:

- Toolathlon-Verified: **73.6%** (Xiaomi technical report)
- OSWorld-Verified: **80.8%** (Xiaomi technical report)
- AutomationBench: **52.3%** (Xiaomi technical report)
- Agents' Last Exam: **27.6%** (Xiaomi technical report)
- Terminal-Bench 4.0: **28.80%** (Xiaomi technical report)
- Terminal-Bench 2.1: **87.6%** (Xiaomi technical report)
- JobBench: **61.2%** (Xiaomi technical report)
- CyberGym: **95.1%** (Xiaomi technical report)
- ExploitGym: **6.0%** (Xiaomi technical report)
- GDPval-AA normalized: **55.4%** (Artificial Analysis)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **38** (#11 of 119 open-weights; median 19) (Artificial Analysis)
- AA-HLE: **35.1%** (Artificial Analysis)
- AA-LCR (long-context reasoning): **74.3%** (Artificial Analysis)
- CritPt: **12.0%** (Artificial Analysis)
- AA-Omniscience Index **-12.7%**; Accuracy **27.0%**; Hallucination rate **54.4%** (AA)

Coding:

- DeepSWE: **67.9%** (Xiaomi technical report)
- ProgramBench: **26.0%** (Xiaomi technical report)
- Terminal-Bench 2.1: **87.6%** (Xiaomi technical report)
- AA-SciCode: **51.3%** (Artificial Analysis)

Multimodal & grounded:

- AA-MMMU-Pro: **73.1%** (Artificial Analysis)
- Text+image in, text out per AA; no MMMU-Pro/Chartography breakdown beyond AA-MMMU-Pro.

Long context:

- AA-LCR: **74.3%** (Artificial Analysis); declared 1M context; no public full-depth needle-recall score beyond AA-LCR.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 77/100.** Toolathlon-Verified (73.6), OSWorld-Verified (80.8), Terminal-Bench 2.1 (87.6), CyberGym (95.1), JobBench (61.2); capped by weak Agents' Last Exam (27.6), Terminal-Bench 4.0 (28.8), ExploitGym (6.0). Top open-weights agent/cyber profile.
- **Reasoning: 70/100.** AA Intelligence Index 38 (#11 open-weights), AA-LCR 74.3%; capped by CritPt (12.0), HLE (35.1), AA-Omniscience accuracy (27.0%). Strong open-weights reasoning but weak on hardest open-ended problems.
- **Context window: 88/100.** Verified 1M tokens (all sources); capped because no public full-depth needle-recall score at 1M beyond AA-LCR.
- **Multimodal: 74/100.** Text + image in, text out per AA; AA-MMMU-Pro 73.1%; capped by thin vision benchmark coverage and text-only output.
- **Coding: 75/100.** DeepSWE 67.9%, Terminal-Bench 2.1 87.6%, AA-SciCode 51.3%; capped by ProgramBench (26.0). Strong agentic coding benchmark scores.
- **Cost efficiency: 96/100.** MIT open weights (self-host ~$0) plus cheapest hosted pricing ($0.14/$0.28, 98% cache discount, $0.06/task); not counted toward Overall.
- **Overall Score: 77/100.** Half-up mean of (77 + 70 + 88 + 74 + 75) / 5 = 76.8 → 77. Best-fit recommendation: strong open-weights agentic/cyber model at 1M context with outstanding value; verify on Terminal-Bench 4.0-class agentic tasks.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (benchlm.ai + Xiaomi technical report + Artificial Analysis + OpenRouter independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
