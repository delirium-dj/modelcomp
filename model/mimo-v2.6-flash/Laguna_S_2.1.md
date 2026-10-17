# MiMo V2.6 Flash — findings by Laguna S 2.1

- Source: poolside/laguna-s-2.1 (particleside/laguna-s-2.1), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- Name: MiMo V2.6 Flash (Xiaomi)
- Short description: Xiaomi's MIT-licensed omnimodal reasoning model (309B total / 15B active MoE, Sept 2026) — 1M context, tuned for long-horizon agentic coding at mid-tier pricing. Sibling of MiMo V2.6 Pro.
- Provider / access: Xiaomi API (`xiaomi/mimo-v2.6-flash`); also Hugging Face `XiaomiMiMo/MiMo-V2.6-Flash-RL` (open weights, MIT license). OpenAI-compatible API. No Free ID on Zen (noFreeId; Zen free tier lives in mimo-v2.6-free/).
- Release: September 2026 (MiMo-V2.6 series). Knowledge cutoff: not published.
- IDs: `XiaomiMiMo/MiMo-V2.6-Flash-RL` (HF); repo meta id `xiaomi/mimo-v2.6-flash`. noFreeId per repo `meta.json`.
- Context window: **1,000,000 total** (repo `meta.json`; BenchLM confirms 1M; AA confirms 1M).
- Modalities: **Text and image input; text output** (Artificial Analysis confirms: "Supports: text and image"; BenchLM confirms). Reasoning yes; tool/function calls yes; JSON mode yes. NOTE: prior file incorrectly claimed text+image+video+audio input based on repo meta.json — AA and BenchLM confirm text+image only.
- **Pricing (as of 2026-10-10):** $0.14 in / $0.28 out per 1M tokens (repo `meta.json`); cached $0.0028. Paid-tier; cheapest in the MiMo V2.6 family; no Free ID on Zen for this slug.
- Architecture: Open-weights MoE (MIT license). 309B total / 15B active parameters per repo `meta.json`.

### Raw benchmarks found

> Verified public numbers from BenchLM (`https://benchlm.ai/models/mimo-v2-6-flash`, overall 64.51, rank #38/954, 24 of 639 benchmarks, 2026-10-17) and Artificial Analysis (`https://artificialanalysis.ai/models/mimo-v2-6-flash`, Intelligence Index 38, #8/117 open-weights).

Agent / tool use:

- Toolathlon-Verified: 73.6% (Xiaomi technical report)
- AutomationBench: 52.3% (Xiaomi technical report)
- Agents' Last Exam: 27.6% (Xiaomi technical report)
- Terminal-Bench 4.0: 28.80% (Xiaomi technical report)
- Terminal-Bench 2.1: 87.6% (Xiaomi technical report)
- OSWorld-Verified: 80.8% (Xiaomi technical report)
- JobBench: 61.2% (Xiaomi technical report)
- CyberGym: 95.1% (Xiaomi technical report)
- ExploitGym: 6.0% (Xiaomi technical report)
- GDPval-AA (normalized): 55.4% (Artificial Analysis — revised down from 55.5%)

Reasoning / knowledge:

- AA Intelligence Index: **38** (#8/117 open-weights, v4.3.2) (Artificial Analysis model page — confirmed)
- AA-LCR: 74.3% (Artificial Analysis)
- CritPt: 12.0% (Artificial Analysis)
- AA-HLE: 35.1% (Artificial Analysis)
- AA-Omniscience Index: **-12.7%** (Artificial Analysis — severe reliability issues)
- AA-Omniscience Accuracy: **27.0%** (Artificial Analysis)
- AA-Omniscience Hallucination Rate: **54.4%** (Artificial Analysis)
- GPQA Diamond: **no verified public score found** for this exact ID

Coding:

- DeepSWE: 67.9% (Xiaomi technical report)
- ProgramBench: 26.0% (Xiaomi technical report)
- Terminal-Bench 2.1: 87.6% (Xiaomi technical report)
- AAA-SciCode: 51.3% (Artificial Analysis)
- VulcanBench v3: **no verified public score found** for this exact ID
- LiveCodeBench: **no verified public score found** for this exact ID

Multimodal:

- AA-MMMU-Pro: 73.1% (Artificial Analysis)
- NOTE: text+image input only per AA — no video or audio confirmed. Prior file incorrectly claimed text+image+video+audio.

---

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of the five quality dims (see `RULES.md`). Cost excluded.

- **Tool use: 82/100.** TB-2.1 87.6% (near ≥88% frontier ref), OSWorld-Verified 80.8%, CyberGym 95.1%, GDPval-AA 55.5% (normalized). Solid agentic cluster but capped by ExploitGym 6.0%, TB-4.0 only 28.8%, and no GDPval-AA Elo published for direct comparison.
- **Reasoning: 65/100.** AA-LCR 74.3% (above mid threshold), AA-HLE 35.1% (near 40% frontier), but AA Intelligence Index 38 (well below ~60 frontier), AA Omniscience Index -12.7% (more incorrect than correct — severe reliability issues), CritPt 12.0% (poor), no GPQA Diamond published.
- **Context window: 97/100.** Verified **1,000,000** tokens (≥1M tier = 95-100 per methodology); AA-LCR 74.3% confirms long-context reasoning; no MRCR/RULER retrieval curve published.
- **Multimodal: 65/100.** Text and image input only (verified via AA model page: "Supports: text and image" — correcting prior file's claim of text+image+video+audio). +image in only; no video/audio verified. AA-MMMU-Pro 73.1% available. **Downgraded from prior 95.**
- **Coding: 75/100.** TB-2.1 87.6% (at frontier for coding category), DeepSWE 67.9% (below 74% frontier ref), AAA-SciCode 51.3% (below 55% frontier ref). Capped by no SWE-bench Verified/LiveCodeBench published and weak DeepSWE/SciCode scores.
- **Cost efficiency: 94/100.** $0.14 in / $0.28 out (per `meta.json`) approaches the highest value tier (~$0.10/$0.20 = 97-99 per methodology); 98% cache discount (cached $0.0028) + open weights self-hostable (MIT). noFreeId — no free Zen tier.
- **Overall Score: 76.8/100.** (82 + 65 + 97 + 65 + 75) / 5 = 384 / 5 = 76.8 → 78. **Downgraded from prior 83:** Multimodal corrected from 95 to 65 based on verified text+image-only input (AA + BenchLM confirm no video/audio). Best-fit: cheapest open-weights MiMo V2.6 sibling with strong tool performance (TB-2.1 87.6%, OSWorld 80.8%); cap: severe Omniscience reliability issues (-12.7 index), weak reasoning (Intelligence Index 38), and no SWE-bench/LiveCodeBench scores.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1:free)** — 2026-10-17 (UTC)
- Method: public-internet research (BenchLM model page `https://benchlm.ai/models/mimo-v2-6-flash` for overall rank/score (#38/954, 64.51) and full benchmark tables; AA model page `https://artificialanalysis.ai/models/mimo-v2-6-flash` for Intelligence Index 38, modalities (text+image confirmed), cost-per-task; repo `meta.json` for pricing $0.14/$0.28; Xiaomi HF technical report for full benchmark scores). Scores are normalized 1–100 interpretations per model-comparison.md v4. Zero-influence: did not read peer `*.md` findings files during research.
- Sources: BenchLM.ai model page (Overall 64.51/100, #38/954, 24 of 639 benchmarks, 2026-10-17); AA model page (Intelligence Index 38, #8/117 open-weights, modalities text+image, cost $0.06/task); repo `meta.json` (modalities, context 1M, pricing $0.14/$0.28, 309B/15B MoE); Xiaomi HF technical report (full benchmark scores).
- Re-verification (Oct 17): BenchLM overall 66.03→64.51 (#32→#38/954, 48→24/639 benches). GDPval-AA 55.5%→55.4% (negligible). All other benchmarks unchanged. Overall 77→77.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash_Tech_Report.md`, using the same headings.

---
