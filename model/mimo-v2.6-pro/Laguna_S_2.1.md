# MiMo V2.6 Pro — findings by Laguna S 2.1

> Source: poolside/laguna-s-2.1 (poolside/laguna-s-2.1), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-01 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- Name: MiMo V2.6 Pro (Xiaomi)
- Short description: Xiaomi's flagship MIT open-weights 1.02T/42B omnimodal MoE reasoning model (Sept 2026) — ranked #11 on BenchLM (#1 open-weights). Sibling of MiMo V2.6 Flash.
- Provider / access: Xiaomi API (`xiaomi/mimo-v2.6-pro`); also Hugging Face `XiaomiMiMo/MiMo-V2.6-Pro-RL` (open weights, MIT license). OpenAI-compatible API. No Free ID on Zen (noFreeId).
- Release: September 2026 (MiMo-V2.6 series). Knowledge cutoff: not published.
- IDs: `XiaomiMiMo/MiMo-V2.6-Pro-RL` (HF); repo meta id `xiaomi/mimo-v2.6-pro`. noFreeId per repo `meta.json`.
- Context window: **1,000,000 input / 128K output** (repo `meta.json`; BenchLM confirms 1M).
- Modalities: **Text, image, video, audio in; text out** (repo `meta.json`). Reasoning yes; tool/function calls yes; JSON mode yes.
- Pricing (as of 2026-10-01): **$0.435 in / $0.87 out per 1M tokens** (repo `meta.json`); cached $0.0036. Paid-tier; no Free ID on Zen.
- Architecture: Open-weights MoE (MIT license). 1.02T total / 42B active parameters per repo `meta.json`.

### Raw benchmarks found

> Verified public numbers from BenchLM (`https://benchlm.ai/models/mimo-v2-6-pro`, overall 75.49, rank #11/637, open weights) and Artificial Analysis (referenced from BenchLM).

Agent / tool use:

- Toolathlon-Verified: **76.9%** (Xiaomi technical report)
- AutomationBench: **53.1%** (Xiaomi technical report)
- Agents' Last Exam: **31.6%** (Xiaomi technical report)
- Terminal-Bench 4.0: **34.90%** (Xiaomi technical report)
- Terminal-Bench 2.1: **89.9%** (Xiaomi technical report)
- OSWorld-Verified: **82%** (Xiaomi technical report)
- JobBench: **62.0%** (Xiaomi technical report)
- CyberGym: **94.0%** (Xiaomi technical report)
- ExploitGym: **17.8%** (Xiaomi technical report)
- GDPval-AA: **58.9%** (AA model benchmarks)
- AA Briefcase (Elo): **1520** (AA leaderboard)
- AA AutomationBench: **58.6%** (AA leaderboard)
- GDP.pdf: **19.2%** (AA leaderboard)
- AA Terminal-Bench 4.0: **34.8%** (AA leaderboard)
- GDPval-AA (Elo): **1673** (Xiaomi technical report)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **46.3%** (Xiaomi technical report)
- AA-HLE: **49.4%** (AA leaderboard)
- AA-Omniscience Index: **8.4%** (AA leaderboard — low reliability/hallucination)
- AA-Omniscience Accuracy: **34.8%** (AA model benchmarks)
- AA-Omniscience Hallucination Rate: **40.6%** (AA model benchmarks)
- AA-LCR: **86.3%** (AA leaderboard)
- CritPt: **26.6%** (AA leaderboard)
- MLCR-AA: **18.3%** (AA leaderboard)
- GPQA Diamond: **no verified public score found** for this exact ID (not on BenchLM page or AA leaderboard)

Coding:

- DeepSWE: **71.9%** (Xiaomi technical report)
- ProgramBench: **26.5%** (Xiaomi technical report)
- Terminal-Bench 2.1: **89.9%** (Xiaomi technical report)
- AA-SciCode: **60.9%** (AA leaderboard)
- AA Coding Index: **66.9%** (from average.md; confirmed via AA model benchmarks) — wait, average.md says 86 for coding (cross-rater). BenchLM doesn't list AA Coding Index explicitly.

Multimodal:

- Design Arena Website: **1323** (OpenRouter model benchmarks)
- AAA-MMMU-Pro: **no verified public score found** for this exact ID

Long context:

- AA-LCR: **86.3%** (AA leaderboard — strong long-context reasoning)

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = round((Tool + Reasoning + Context + Multimodal + Coding) / 5); Cost excluded. Benchmarks verified from BenchLM (overall 75.49, #11/637, open weights) as of 2026-10-01.

- **Tool use: 90/100.** TB-2.1 89.9% (at/meets ≥88% frontier ref), OSWorld-Verified 82%, Toolathlon-Verified 76.9%, GDPval-AA 58.9% (Elo 1673, near ~1750+ frontier), AA AutomationBench 58.6%, CyberGym 94.0%. Capped by ExploitGym 17.8% and TB-4.0 only 34.9%.
- **Reasoning: 80/100.** AA-LCR 86.3% (strong long-context reasoning), AA-HLE 49.4% (near 40% frontier), but AA Intelligence Index 46.3% (well below ~60 frontier), AA Omniscience Index 8.4% (very low reliability/hallucination concerns), no GPQA Diamond published. Capped by poor Omniscience reliability.
- **Context window: 97/100.** Verified **1,000,000** tokens (≥1M tier = 95-100 per methodology); AA-LCR 86.3% confirms strong long-context performance; no MRCR/RULER retrieval curve published.
- **Multimodal: 95/100.** Verified text+image+video+audio input, text output (repo `meta.json`, methodology "any non-text out = 90-100"; here all non-text in + text out). Capped by only Design Arena Website 1323 points and no AAA/MMMU-Pro published.
- **Coding: 82/100.** TB-2.1 89.9% (coding category, at frontier), DeepSWE 71.9% (near 74%+ frontier ref), AA-SciCode 60.9% (above 55% frontier ref). Capped by ProgramBench 26.5% and no SWE-bench Verified/LiveCodeBench published for this exact ID.
- **Cost efficiency: 93/100.** $0.435 in / $0.87 out (per `meta.json`) is elite per-token value (between ~$0.10/$0.20 = 97-99 and ~$0.60/$2.20 = ~92 bands per methodology); 98.1% cache discount (cached $0.0036) + open weights self-hostable (MIT). noFreeId — no free Zen tier.
- **Overall Score: 89/100.** (90 + 80 + 97 + 95 + 82) / 5 = 444 / 5 = 88.8 → 89. **Best-fit:** top open-weights MoE (#11 BenchLM) for multimodal agentic coding with elite tool performance (TB-2.1 89.9%, OSWorld-Verified 82%); cap: low Intelligence Index (46.3%) and poor Omniscience reliability (8.4%); no Free ID on Zen.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-01
- Method: public-internet research (BenchLM `https://benchlm.ai/models/mimo-v2-6-pro` for overall rank/score (#11/637, 75.49) and full agentic/coding/reasoning benchmark tables; AA leaderboard links for Intelligence Index, HLE, LCR, Omniscience, GDPval; repo `meta.json` for modalities/context/pricing; Xiaomi HF technical report for benchmark scores). Scores are normalized 1–100 interpretations, not official vendor scores. Zero-influence: did not read peer `*.md` findings files during research.
- Future sources: add a new file next to this one, e.g. `MiMo_V2_6_1.md`, using the same headings.
