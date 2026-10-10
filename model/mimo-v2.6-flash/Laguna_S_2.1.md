# MiMo V2.6 Flash — findings by Laguna S 2.1

- Source: poolside/laguna-s-2.1 (particleside/laguna-s-2.1), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- Name: MiMo V2.6 Flash (Xiaomi)
- Short description: Xiaomi's MIT-licensed omnimodal sparse MoE (309B total / 15B active, Sept 2026) — 1M context, text/image/video/audio in, tuned for long-horizon agentic coding at mid-tier pricing. Sibling of MiMo V2.6 Pro.
- Provider / access: Xiaomi API (`xiaomi/mimo-v2.6-flash`); also Hugging Face `XiaomiMiMo/MiMo-V2.6-Flash-RL` (open weights, MIT license). OpenAI-compatible API. No Free ID on Zen (noFreeId; Zen free tier lives in mimo-v2.6-free/).
- Release: September 2026 (MiMo-V2.6 series). Knowledge cutoff: not published.
- IDs: `XiaomiMiMo/MiMo-V2.6-Flash-RL` (HF); repo meta id `xiaomi/mimo-v2.6-flash`. noFreeId per repo `meta.json`.
- Context window: **1,000,000 total** (repo `meta.json`; BenchLM confirms 1M).
- Modalities: **Text, image, video, audio in; text out** (repo `meta.json`, BenchLM confirms omnimodal). Reasoning yes; tool/function calls yes; JSON mode yes.
- Pricing (as of 2026-10-10): **$0.14 in / $0.28 out per 1M tokens** (repo `meta.json`); cached $0.0028. Paid-tier; cheapest in the MiMo V2.6 family; no Free ID on Zen for this slug.
- Architecture: Open-weights MoE (MIT license). 309B total / 15B active parameters per repo `meta.json`.

### Raw benchmarks found

> Verified public numbers from BenchLM (`https://benchlm.ai/models/mimo-v2-6-flash`, overall 66.36, rank #28/637, open weights) and Artificial Analysis.

Agent / tool use:

- Toolathlon-Verified: 73.6% (source: Xiaomi technical report)
- AutomationBench: 52.3% (source: Xiaomi technical report)
- Agents' Last Exam: 27.6% (source: Xiaomi technical report)
- Terminal-Bench 4.0: 28.80% (source: Xiaomi technical report)
- Terminal-Bench 2.1: 87.6% (source: Xiaomi technical report)
- OSWorld-Verified: 80.8% (source: Xiaomi technical report)
- JobBench: 61.2% (source: Xiaomi technical report)
- CyberGym: 95.1% (source: Xiaomi technical report)
- ExploitGym: 6.0% (source: Xiaomi technical report)
- GDPval-AA: 55.0% (source: AA leaderboard)

Reasoning / knowledge:

- AA-LCR: 74.3% (source: AA leaderboard — long context reasoning)
- CritPt: 12.0% (source: AA leaderboard — physics reasoning)
- AA Intelligence Index: **37.9%** (BenchLM; #28/637, open weights)
- AA-HLE: 35.1% (source: AA leaderboard)
- AA-Omniscience Index: **-12.7%** (source: AA leaderboard — negative, very high incorrect answers)
- AA-Omniscience Accuracy: **27.0%** (source: AA model benchmarks)
- AA-Omniscience Hallucination Rate: **54.4%** — high (source: AA leaderboard)
- GPQA Diamond: **no verified public score found** for this exact ID
- MCP-Atlas: 78.6% (source: BenchLM)

Coding:

- DeepSWE: 67.9% (source: Xiaomi technical report)
- ProgramBench: 26.0% (source: Xiaomi technical report)
- Terminal-Bench 2.1: 87.6% (source: Xiaomi technical report)
- AAA-SciCode: 51.3% (source: AA leaderboard)
- VulcanBench v3: **no verified public score found** for this exact ID
- LiveCodeBench: **no verified public score found** for this exact ID

Multimodal:

- AAA-MMMU-Pro: 73.1% (source: AA leaderboard)
- Design Arena Website: **no verified public score found**

Long context:

- AA-LCR: 74.3% (source: AA leaderboard — moderate long-context reasoning)
- **no MRCR / RULER / GraphWalks** retrieval figure published

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = round((Tool + Reasoning + Context + Multimodal + Coding) / 5); Cost excluded. Benchmarks verified from BenchLM (overall 66.36, #28/637, open weights) as of 2026-10-10. All prior scores confirmed unchanged.

- **Tool use: 82/100.** TB-2.1 87.6% (near ≥88% frontier), OSWorld-Verified 80.8%, Toolathlon-Verified 73.6%, CyberGym 95.1%, GDPval-AA 55.0%. Solid agentic cluster but capped by ExploitGym 6.0%, TB-4.0 only 28.8%, and no GDPval-AA Elo published for direct comparison.
- **Reasoning: 65/100.** AA-LCR 74.3% (above mid threshold), AA-HLE 35.1% (near 40% frontier), but AA Intelligence Index 37.9% (well below ~60 frontier), AA Omniscience Index -12.7% (more incorrect than correct answers — severe reliability issues), CritPt 12.0% (poor), no GPQA Diamond published.
- **Context window: 97/100.** Verified **1,000,000** tokens (≥1M tier = 95-100 per methodology); AA-LCR 74.3% confirms moderate long-context reasoning; no MRCR/RULER retrieval curve published.
- **Multimodal: 95/100.** Verified text+image+video+audio input, text output (repo `meta.json`, methodology "any non-text out = 90-100"); AA-MMMU-Pro 73.1% available but limited vision benchmark coverage.
- **Coding: 75/100.** TB-2.1 87.6% (at frontier for coding category), DeepSWE 67.9% (below 74% frontier ref), AAA-SciCode 51.3% (below 55% frontier ref). Capped by no SWE-bench Verified/LiveCodeBench published and weak DeepSWE/SciCode scores.
- **Cost efficiency: 94/100.** $0.14 in / $0.28 out (per `meta.json`) approaches the highest value tier (~$0.10/$0.20 = 97-99 per methodology); 98% cache discount (cached $0.0028) + open weights self-hostable (MIT). noFreeId — no free Zen tier.
- **Overall Score: 83/100.** (82 + 65 + 97 + 95 + 75) / 5 = 414 / 5 = 82.8 → 83. **Best-fit:** cheapest open-weights MiMo V2.6 sibling with strong tool performance (TB-2.1 87.6%, OSWorld 80.8%); cap: severe Omniscience reliability issues (-12.7 index), weak reasoning (Intelligence Index 37.9%), and no SWE-bench/LiveCodeBench scores. Best for budget-conscious agentic tasks where hallucination tolerance is acceptable.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-10
- Method: public-internet research (BenchLM `https://benchlm.ai/models/mimo-v2-6-flash` for overall rank/score (#28/637, 66.36) and full benchmark tables; AA leaderboard links for Intelligence Index, HLE, LCR, Omniscience, AAA-MMMU-Pro, GDPval; repo `meta.json` for modalities/context/pricing; Xiaomi HF technical report for benchmark scores). Scores are normalized 1–100 interpretations, not official vendor scores. Zero-influence: did not read peer `*.md` findings files during research (Cost line preserved verbatim from prior signed file).
- Sources: BenchLM.ai model page (Overall 66.36/100, #28/637, open weights, 2026-10-10); AA model page + leaderboards (Intelligence Index 37.9, HLE 35.1, LCR 74.3, Omniscience -12.7, AAA-MMMU-Pro 73.1, GDPval 55.0); repo `meta.json` (modalities, context 1M, pricing $0.14/$0.28); Xiaomi HF technical report (full benchmark scores). All scores confirmed unchanged from prior verified research.
- Future sources: add a new file next to this one, e.g. `MiMo_V2_6_1.md`, using the same headings.

---

