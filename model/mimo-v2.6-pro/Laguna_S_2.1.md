# MiMo V2.6 Pro — findings by Laguna S 2.1

> Source: poolside/laguna-s-2.1 (poolside/laguna-s-2.1), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-10 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- Name: MiMo V2.6 Pro (Xiaomi)
- Short description: Xiaomi's flagship MIT open-weights 1.02T/42B omnimodal MoE reasoning model (Sept 2026) — ranked #11 on BenchLM (#1 open-weights). Sibling of MiMo V2.6 Flash.
- Provider / access: Xiaomi API (`xiaomi/mimo-v2.6-pro`); also Hugging Face `XiaomiMiMo/MiMo-V2.6-Pro-RL` (open weights, MIT license). OpenAI-compatible API. No Free tier on Zen (noFreeId).
- Release: September 2026 (MiMo-V2.6 series). Knowledge cutoff: not published.
- IDs: `XiaomiMiMo/MiMo-V2.6-Pro-RL` (HF); repo meta id `xiaomi/mimo-v2.6-pro`. noFreeId per repo `meta.json`.
- Context window: **1,000,000 input / 128K output** (repo `meta.json`; BenchLM confirms 1M).
- Modalities: **Text, image, video, audio in; text out** (repo `meta.json`). Reasoning yes; tool/function calls yes; JSON mode yes.
- Pricing (as of 2026-10-01): **$0.435 in / $0.87 out per 1M tokens** (repo `meta.json`); cached $0.0036. Paid-tier; no Free ID on Zen.
- Architecture: Open-weights MoE (MIT license). 1.02T total / 42B active parameters per repo `meta.json`.

### Raw benchmarks found

> Verified public numbers from BenchLM (`https://benchlm.ai/models/mimo-v2-6-pro`, overall 74.15, rank #12/887, open weights) and Artificial Analysis (referenced from BenchLM). AA page returned 404 for `mimo-v2.6-pro` — using BenchLM primary + Xiaomi tech report.

Agent / tool use:

- Terminal-Bench 2.1: **89.9%** (Xiaomi technical report / BenchLM)
- OSWorld-Verified: **82%** (Xiaomi technical report)
- Toolathlon-Verified: **76.9%** (Xiaomi technical report)
- CyberGym: **94.0%** (Xiaomi technical report)
- GDPval-AA: **58.9%** (BenchLM model page)
- GDPval-AA (Elo): **1673** (Xiaomi technical report)
- BBriefcase: **1520** (BenchLM model page)
- AA AutomationBench: **58.6%** (BenchLM)
- GDP.pdf: **19.2%** (BenchLM)
- Terminal-Bench 4.0: **34.90%** (Xiaomi technical report)
- AA Terminal-Bench 4.0: **34.8%** (BenchLM)
- AutomationBench: **52.3%** (BenchLM)
- JobBench: **62.0%** (Xiaomi technical report)
- ExploitGym: **17.8%** (Xiaomi technical report)
- Program Bench: **77.8%** (Xiaomi technical report)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **46.3%** (BenchLM model page / Xiaomi tech report)
- AA-HLE: **49.4%** (BenchLM model page)
- AA-LCR: **86.3%** (BenchLM model page)
- AA-Omniscience Accuracy: **34.8%** (BenchLM model page)
- AA-Omniscience Hallucination Rate: **40.6%** (BenchLM model page)
- CritPt: **26.6%** (BenchLM model page)
- MLCR-AA: **18.3%** (BenchLM model page)
- GPQA Diamond: **no verified public score found** for this exact ID (not on BenchLM page or AA leaderboard per repo note)

Coding:

- DeepSWE: **71.9%** (Xiaomi technical report)
- ProgramBench: **26.5%** (Xiaomi technical report)
- TB-2.1: **91.0%** (coding category, BenchLM)
- AA-SciCode: **60.9%** (BenchLM model page)
- AA Coding Index: **66.9%** (BenchLM model page)
- SWE-bench Verified: **72.8%** (BenchLM model page)
- LiveCodeBench: **65.6%** (BenchLM model page)

Multimodal:

- Design Arena Website: **1323** (OpenRouter model benchmarks)
- AAA-MMMU-Pro: **no verified public score found** for this exact ID

Long context:

- Context window: 1,000,000 tokens; AA-LCR 86.3% confirms strong long-context reasoning.

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of 5 quality dims (cost excluded), tolerance 0.51. Benchmarks verified from BenchLM (overall 74.15, #12/887, open weights) and Xiaomi tech report as of 2026-10-10.

- **Tool use: 90/100.** TB-2.1 89.9% (meets ≥88% frontier ref), OSWorld-Verified 82%, Toolathlon-Verified 76.9%, GDPval-AA 58.9% (Elo 1673, below ~1750 frontier threshold), AA AutomationBench 58.6%, CyberGym 94.0%, GDP.pdf 19.2%. Capped by TB-4.0 34.9%, ExploitGym 17.8%, no GDPval-AA ≥1750 Elo.
- **Reasoning: 80/100.** AA-LCR 86.3% (strong long-context reasoning), AA-HLE 49.4% (near 40% frontier), but AA Intelligence Index 46.3% (well below ~60 frontier), AA Omniscience Accuracy 34.8% (low, 40.6% hallucination rate). GPQA not published. Capped by poor Omniscience reliability and low Intelligence Index.
- **Context window: 97/100.** Verified **1,000,000** tokens (≥1M tier = 95-100 per methodology); AA-LCR 86.3% confirms strong long-context performance. No MRCR/RULER retrieval curve ≥98% at 512K+ for perfect 100.
- **Multimodal: 95/100.** Verified text+image+video+audio input, text output (repo `meta.json`, methodology "any non-text in + text out = 90-100"); strong vision (Design Arena 1323). Capped by AAA-MMMU-Pro not published.
- **Coding: 82/100.** TB-2.1 91.0% (coding category, at frontier), DeepSWE 71.9% (near 74% frontier ref), AA Coding Index 66.9%, SWE-bench Verified 72.8%, LiveCodeBench 65.6%, AA-SciCode 60.9%, ProgramBench 26.5%. Capped by SWE-bench Pro below threshold and no SWE-bench Verified ≥74%.
- **Cost efficiency: 93/100.** $0.435 in / $0.87 out (per `meta.json`) is elite per-token value; 98.1% cache discount (cached $0.0036) + open weights self-hostable (MIT). noFreeId — no free Zen tier.
- **Overall Score: 89/100.** Half-up mean: (90+80+97+95+82)/5 = 444/5 = 88.8 → 89. **Best-fit:** top open-weights MoE (#12 BenchLM) for multimodal agentic coding with elite tool performance (TB-2.1 89.9%, OSWorld-Verified 82%); cap: low Intelligence Index (46.3%), poor Omniscience reliability (34.8%), no GPQA Diamond published for exact ID; no Free ID on Zen.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-10
- Method: public-internet research (BenchLM `https://benchlm.ai/models/mimo-v2-6-pro` for overall rank/score (#12/887, 74.15) and full benchmark tables including TB-2.1 89.9%, GDPval 58.9%, AA-HLE 49.4%, AA-LCR 86.3%, TB-4.0 34.9%; Xiaomi HF technical report for benchmark scores: TB-2.1 89.9%, OSWorld 82%, SWE-bench Verified 72.8%, DeepSWE 71.9%, GDPval Elo 1673, TB-4.0 34.9%; repo `meta.json` for modalities/context/pricing). AA page for `mimo-v2.6-pro` returned 404 — relied on BenchLM primary + Xiaomi tech report. Scores are normalized 1–100 interpretations per model-comparison.md v4.
- Sources: BenchLM.ai model page (Overall 74.15/100, rank #12/887, open weights); Xiaomi HF technical report; repo `meta.json`.
- Future sources: add a new file next to this one, e.g. `MiMo_V2_6_1.md`, using the same headings.

---
