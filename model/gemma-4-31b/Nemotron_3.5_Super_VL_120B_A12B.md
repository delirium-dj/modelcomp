# Gemma 4 31B — findings by Nemotron 3.5 Super VL 120B A12B

- Source: google/gemma-4-31B-it (Hugging Face), Artificial Analysis, benchgap
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 31B (Gemma 4 31B-IT)
- **Short description:** Google's 30.7B dense open-weight model for local reasoning and coding; Apache 2.0 license; reasoning model with thinking mode; multimodal (text, image, video in per AA; HF card shows video processing).
- **Provider / access:** Hugging Face checkpoint `google/gemma-4-31B-it` (Apache 2.0); available via 12 API providers per Artificial Analysis; self-host $0 (open weights).
- **Release / knowledge:** Released April 2026 (Artificial Analysis); HF chat template published 2026-07-09.
- **IDs:** `google/gemma-4-31B-it` (HF checkpoint, Apache 2.0).
- **Context window:** 256K tokens (Artificial Analysis); meta.json claims 128K — conflict.
- **Modalities:** Text, image, and video in; text out (Artificial Analysis); HF card includes video processing code with AutoProcessor/AutoModelForMultimodalLM. meta.json claims "Text in/out only" — conflict.
- **Pricing (as of 2026-10-17):** $0.00/$0.00 per 1M (Artificial Analysis — open weights, self-host free); standard API hosting rates vary by provider. Apache 2.0 license — commercial use allowed.
- **Architecture:** 30.7B dense parameters (not MoE); reasoning model with `<|think|>` token control; standard system/assistant/user roles; thinking mode enabled by including `<|think|>` token at start of system prompt.

### Raw benchmarks found

Agent / tool use:
- SWE-bench Verified: **78.1% estimated ±3.6 pp** (benchgap, medium confidence)
- SWE-bench Pro: **38.9% estimated ±6.0 pp** (benchgap, medium confidence)
- Toolathlon-Verified: **22.4% estimated ±2.3 pp** (benchgap, low confidence)
- BFCL v4: **64.1% estimated ±2.7 pp** (benchgap, high confidence)
- CyberGym: **50.7% estimated ±5.3 pp** (benchgap, low confidence)
- BrowseComp: **58.7% estimated ±6.2 pp** (benchgap, medium confidence)

Reasoning / knowledge:
- GPQA Diamond: **84.3% estimated ±0.4 pp** (benchgap, high confidence); AA-GPQA Diamond **85.7% measured**
- HLE: **26.5% measured** (benchgap); AA-HLE **23.6% measured**
- HLE-Verified: **15.2% estimated ±6.0 pp** (benchgap, low confidence)
- MMLU: **89.4% estimated ±1.8 pp** (benchgap, medium confidence)
- MMLU-Pro: **85.2% measured** (benchgap)
- BBH: **98.9% estimated ±2.8 pp** (benchgap, medium confidence)
- AA Intelligence Index: **15** (Artificial Analysis, #19/141); **14.7% measured** (benchgap)
- CritPt: **1.4% measured** (benchgap)

Coding:
- LiveCodeBench v6: **80.0% measured** (benchgap)
- DeepSWE: **57.3% estimated ±7.2 pp** (benchgap, low confidence)
- HumanEval: not reported independently (meta.json claims Codeforces 2150 Elo — unverified)
- SWE-bench Pro: **38.9% estimated ±6.0 pp** (benchgap)

Long context:
- AA-LCR: **69.7% measured** (benchgap)
- LongBench v2: **60.8% estimated ±5.8 pp** (benchgap, low confidence)
- 256K context (AA); meta.json claims 128K — conflict

- Video-MME (with subtitle): **86.0% estimated ±2.4 pp** (benchgap)

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. **NEVER include Cost efficiency** — scored independently.

- **Tool use: 72/100.** Strong on SWE-bench Verified (78.1 est), BFCL v4 (64.1 est), LiveCodeBench v6 (80.0 measured). Capped by weaker SWE-bench Pro (38.9 est), Toolathlon-Verified (22.4 est), CyberGym (50.7 est).
- **Reasoning: 75/100.** Strong on GPQA Diamond (84.3 est / 85.7 AA), MMLU (89.4 est), BBH (98.9 est). Capped by weak HLE (26.5 measured), HLE-Verified (15.2 est), CritPt (1.4 measured). Spiky profile — strong knowledge, weak on hard open-ended reasoning.
- **Context window: 80/100.** 256K context per Artificial Analysis; meta.json claims 128K — conflict. Capped because no public retrieval score measured at full 256K window.
- **Multimodal: 78/100.** Text/image/video in, text out per AA + HF card video processing code; MMMU 83.9 est, MathVision 85.6 est, CharXiv 79.4 est, Video-MME 83.9/86.0 est. Capped by lack of audio support and limited verified multimodal benchmarks.
- **Coding: 73/100.** Strong on LiveCodeBench v6 (80.0 measured), SWE-bench Verified (78.1 est). Capped by weaker SWE-bench Pro (38.9 est), DeepSWE (57.3 est).
- **Cost efficiency: 100/100.** Open weights Apache 2.0 — self-host $0; AA lists $0.00/$0.00 per 1M. Not counted toward Overall.
- **Overall Score: 76/100.** Half-up mean of (72 + 75 + 80 + 78 + 73) / 5 = 75.6 → 76. Best-fit recommendation: a capable open-weights reasoning model for local deployment at zero inference cost; verify on HLE-class and agentic coding before production reliance.

### Conflicts vs existing meta.json / queued average

- meta.json claims AIME 89.2% and Codeforces 2150 Elo — neither appears in benchgap or Artificial Analysis data; unverified independently
- meta.json claims MMMU-Pro 76.9% — matches benchgap measured 76.9% ✓
- meta.json contextWindow "128K context" — Artificial Analysis reports 256K; conflict unresolved
- meta.json modalities "Text in/out only" — Artificial Analysis reports text/image/video input; HF card includes video processing code; conflict — modalities likely under-reported in meta.json
- meta.json name "Gemma 4 31B" — HF checkpoint is "gemma-4-31B-it"; consistent ✓

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-17
- Method: public internet research (Hugging Face model card + Artificial Analysis + benchgap aggregator); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Nemotron_3.5_Super_VL_120B_A12B.md`, using the same headings.
Multimodal:
- MMMU: **83.9% estimated ±1.0 pp** (benchgap, high confidence)
- MMMU-Pro: **76.9% measured** (benchgap) — matches meta.json's 76.9%
- MathVision: **85.6% estimated ±3.3 pp** (benchgap, high confidence)
- CharXiv: **79.4% estimated ±5.2 pp** (benchgap, medium confidence)
- Video-MME (w/o subtitle): **83.9% estimated ±1.8 pp** (benchgap)
- Video-MME (with subtitle): **86.0% estimated ±2.4 pp** (benchgap)