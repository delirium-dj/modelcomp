# Muse Wonder Full — findings by Crouton Alpha

- Source: Meta/Muse Wonder Full
- Date: 2026-11-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder Full
- **Short description:** Meta's proprietary full-access Wonder model for multimodal enterprise agent work; top use case is 1M-context tool use with speech/video inputs.
- **Provider / access:** Meta API (Wonder family), OpenCode Zen `opencode/muse-wonder-1.0` covers Wonder 1.0 ($4/$20); Full Max is the Max-effort config of the same weights — distinct tracked folder `model/muse-wonder-full/`.
- **Release / knowledge:** 2026-10-12 (AA; Meta model card).
- **IDs:** `meta/muse-wonder-full` (AA model page), Zero-day family; `opencode/muse-wonder-1.0` for base Wonder.
- **Context window:** 1M tokens total (AA; BenchLM).
- **Modalities:** Text, image, speech, video in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-11-09):** AA lists price as '-' (not published); Zen lists Wonder 1.0 $4/$20, so Full provisional tier same $4/$20 — not independently verified for Full Max config.
- **Architecture:** Proprietary, parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA **1857** (Artificial Analysis leaderboard)
- Terminal-Bench 4.0: **57.1%** (Meta: Muse Wonder model card)
- OSWorld 2.1 **78.4%** (model card)
- JobBench **75.3%**, Finance Agent v2 **59.1%** (model card)
- AA AutomationBench **45.4%** (model card)

Reasoning / knowledge:

- HLE **53.6%** (AA)
- Intelligence Index **50.1 / 50 (#17/112)** (AA; BenchLM 69.44 #18)
- AA-LCR **83.7%**, CritPt **32.9%**, MLCR **22.2%** (AA)

Coding:

- DeepSWE **79.0%** (model card)
- ProgramBench **59.0%**, sweMarathon **57.5%** (model card)
- AA-SciCode **62.6%** (AA)
- Bug Hunt **42 fixes** (Bug Hunt)

Long context:

- 1M context; AA-LCR **83.7%** (AA)

Multimodal:

- AA: text/image/speech/video in (model card)
- No MMMU-Pro row published on BenchLM for Full — vision proven by modality + GDP.pdf **32.6%** doc reasoning.

### Normalized scores (1–100)

- **Tool use: 92/100.** GDPval-AA 1857 (best seen), OSWorld 78.4%, TB4.0 57.1%, JobBench 75.3% are frontier; capped by AutomationBench 45.4%.
- **Reasoning: 92/100.** HLE 53.6%, LCR 83.7%, Index 50 (#17/112, median 30) are strong; capped by CritPt 32.9%.
- **Context window: 97/100.** 1M native with LCR 83.7% — top-tier; capped slightly for MLCR 22.2%.
- **Multimodal: 81/100.** Widest inputs (text/image/speech/video), text out; broad omni inputs push above image-only, text-only output caps it.
- **Coding: 92/100.** DeepSWE 79% exceeds frontier ref, SciCode 62.6%, ProgramBench 59% solid; capped by sweMarathon 57.5%.
- **Cost efficiency: 55/100.** Provisional $4/$20 family tier (Wonder 1.0 Zen) — premium anchor ~55; Full Max pricing not published, so score is provisional.
- **Overall Score: 91/100.** Mean (92+92+97+81+92)/5 = 90.8 → 91; best-fit full-modality enterprise agent.

---

## Signature

- Provided by: **Crouton Alpha (opencode/crouton-alpha-free)** — 2026-11-09
- Method: public internet research via Meta model card, BenchLM, Artificial Analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Meta — Muse Wonder model card](https://research.meta.ai/static/muse-wonder-model-card)
  - [Artificial Analysis — Muse Wonder Full (Max)](https://artificialanalysis.ai/models/muse-wonder-full)
  - [BenchLM — Muse Wonder Full](https://benchlm.ai/models/muse-wonder-full)
  - [Artificial Analysis Intelligence Index Leaderboard](https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index)
  - [OpenCode Zen Model Catalog](https://opencode.ai/docs/zen)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
