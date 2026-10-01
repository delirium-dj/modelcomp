# MiMo V2.6 Pro — findings by Qwen 3.8 Flash

- Source: Xiaomi / MiMo V2.6 Pro (`xiaomi/mimo-v2.6-pro`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Pro
- **Short description:** Xiaomi's flagship MIT open-weights 1.02T/42B omnimodal MoE (Sept 2026) — #1 open-weights model on the AA Intelligence Index (46), sibling of MiMo V2.6 Flash.
- **Provider / access:** Xiaomi API (`mimo-v2.6-pro`); no OpenCode Zen free ID (`noFreeId`). Hugging Face weights (`XiaomiMiMo/MiMo-V2.6-Pro-RL`). Reasoning + tool calls.
- **Release / knowledge:** Sept 2026 (MiMo V2.6 technical report); knowledge cutoff not disclosed.
- **IDs:** `xiaomi/mimo-v2.6-pro`.
- **Context window:** 1M in / 128K max out (curated meta).
- **Modalities:** text, image, video, audio in; text out; reasoning on; tool calls. No non-text output.
- **Pricing (as of 2026-10-02):** Paid $0.435 / $0.87 per 1M (Xiaomi API; cached input $0.0036); MIT open weights — self-hostable.
- **Architecture:** open-weights MoE (1.02T total / 42B active), MIT license.

### Raw benchmarks found

> Independently verified against BenchLM (30 of 618 rows), citing the Xiaomi MiMo-V2.6 technical report (HF model card) and Artificial Analysis (fetched 2026-10-02).

Agent / tool use:

- Terminal-Bench 2.1: **89.9%** (tech report) — TB 4.0 34.9% (AA 34.8%)
- GDPval-AA: **1673** (tech report; AA normalized 58.9%); AA Briefcase Elo 1520
- Toolathlon-Verified: **76.9%**; OSWorld-Verified: **82%**; CyberGym **94.0%**; JobBench 62.0%
- AutomationBench 53.1% (AA 58.6%); Agents' Last Exam 31.6%; ExploitGym 17.8%; GDP.pdf 19.2%

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **46.3** — #1 open-weights (tech report)
- AA-HLE: **49.4%**; AA-LCR **86.3%**; CritPt 26.6%; MLCR-AA 18.3%
- Omniscience Accuracy / Hallucination Rate: 34.8% / 40.6% (weak factuality index 8.4)

Coding:

- Terminal-Bench 2.1 89.9%; DeepSWE **71.9%**; AA-SciCode **60.9%**; ProgramBench 26.5%

Multimodal / long context:

- Omnimodal input (text/image/video/audio per curated meta); Design Arena Website 1323 (OpenRouter)
- AA-LCR 86.3% at 1M window (no ≥98% MRCR reported).

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 91/100.** Terminal-Bench 2.1 89.9% clears the ~88 frontier ref, with Toolathlon-Verified 76.9%, OSWorld-Verified 82%, CyberGym 94.0% and GDPval-AA 1673 (just under 1750); ExploitGym 17.8% and TB 4.0 34.9% temper it.
- **Reasoning: 84/100.** AA Intelligence Index 46.3 (top open-weights), HLE 49.4% and AA-LCR 86.3% are strong; no GPQA reported, and the Omniscience trio (34.8% accuracy, 40.6% hallucination, index 8.4) plus CritPt 26.6% cap it.
- **Context window: 95/100.** 1M-token window / 128K output meets the ≥1M tier; AA-LCR 86.3% is supportive but no ≥98% long-context retrieval metric is reported, so short of 100.
- **Multimodal: 90/100.** Text+image+video+audio input lands in the audio-in 90–100 band; benchmark evidence is thin (Design Arena 1323 only) and there is no non-text output, so the floor of the band.
- **Coding: 83/100.** Terminal-Bench 2.1 89.9% and AA-SciCode 60.9% beat the 55% ref; DeepSWE 71.9% sits just under the 74 reference and ProgramBench 26.5% is mid.
- **Cost efficiency: 90/100.** $0.435 / $0.87 per 1M is far below the $3/$15 ≈ 60 anchor, cached input at $0.0036, plus MIT self-hosting; no free hosted tier keeps it from 100. Cost is excluded from Overall.
- **Overall Score: 89/100.** Mean of Tool 91, Reasoning 84, Context 95, Multimodal 90, Coding 83 = 88.6 → 89. Best fit: the strongest open-weights agent for omnimodal long-context pipelines at near-flash pricing; distrust ungrounded factual recall (weak Omniscience) — pair with retrieval, and note BenchLM flags partial coverage so the picture is still settling.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows citing the Xiaomi MiMo-V2.6 technical report and Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
