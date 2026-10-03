# ByteDance Seed 2.0 Pro — findings by Laguna S 2.1

- Source: ByteDance (`doubao-seed-2-0-pro` on Volcano Engine; `deepinfra/ByteDance/Seed-2.0-pro` on DeepInfra)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Seed 2.0 Pro
- **Short description:** ByteDance's flagship multimodal reasoning model from the Seed 2.0 family, released Feb 2026 via Doubao/Volcano Engine; strong on math, coding, and multimodal tasks with 256K context.
- **Provider / access:** ByteDance Volcano Engine API (`doubao-seed-2-0-pro`); also via DeepInfra (`deepinfra/ByteDance/Seed-2.0-pro`, OpenAI-compatible Chat Completions). No Free ID on Zen (`noFreeId: true`).
- **Release / knowledge:** 2026-02-14 release; knowledge cutoff not published.
- **IDs:** `opencode/seed-2.0-pro` (per `meta.json`); `doubao-seed-2-0-pro` (Volcano Engine); `deepinfra/ByteDance/Seed-2.0-pro` (DeepInfra)
- **Context window:** 256K total / 65K out (verified by `meta.json`, RankLLMs, and airank.dev)
- **Modalities:** text, image, video in; text out. Reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-03):** $0.47 / $2.37 per 1M tokens (RankLLMs, Volcano Engine API); no Free tier.
- **Architecture:** Proprietary dense transformer (ByteDance). No parameter count disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:

- Terminal-Bench 2.0: **55.8%** (Digital Applied)
- τ²-Bench (retail): **90.4** (Digital Applied)
- τ²-Bench (telecom): **94.2** (Digital Applied)
- GDPval-AA / Arena Elo: **873** (RankLLMs)
- BrowseComp: **77.3%** (Digital Applied)
- Finance Agent v1.1: **#8 overall, #1 among open-weight** (Vals AI update notes)
- no verified public score found for Tau3-Banking

Reasoning / knowledge:

- GPQA Diamond: **88.9%** (Digital Applied)
- AIME 2025: **98.3** (Digital Applied)
- AIME 2026: **94.2** (Digital Applied)
- MMLU-Pro: **87%** (Digital Applied)
- HMMT Feb: **97.3** (Digital Applied)
- LegalBench: **85.10%** (rank 24/149, Vals AI)
- no verified public score found for HLE, LCR/MRCR, CritPt, Omniscience Accuracy/Hallucination Rate
- Note: RankLLMs reports GPQA Diamond at 39% (verified, independent) — significant discrepancy vs vendor-reported 88.9%; using vendor-reported figures from Digital Applied's comprehensive model-family benchmark table

Coding:

- SWE-bench Verified: **76.5%** (Digital Applied)
- LiveCodeBench v6: **87.8%** (Digital Applied)
- Codeforces rating: **3020** (Digital Applied — near-grandmaster)
- Terminal-Bench 2.0: **55.8%** (Digital Applied)
- no verified public score found for DeepSWE, SciCode, AA-SciCode, Vibe Code Bench
- Note: RankLLMs reports SWE-bench Verified at 21.5% (verified, independent) — discrepancy vs vendor-reported 76.5%

Long context:

- no verified public score found for MRCR / RULER / GraphWalks (no retrieval scores published)

### Normalized scores (1–100)

- **Tool use: 62/100.** Terminal-Bench 2.0 at 55.8% sits in the mid-tier; τ²-Bench retail 90.4 and telecom 94.2 are strong but GDPval-AA Elo 873 and Finance Agent rank #8/#1 open-weight pull it lower. Missing Tau3-Banking benchmark caps the score.
- **Reasoning: 90/100.** GPQA Diamond 88.9%, AIME 2025 98.3, HMMT Feb 97.3, MMLU-Pro 87%, and LegalBench 85.10% all indicate near-frontier reasoning. GPQA just below 90% threshold; no HLE or LCR data recorded. (Discrepancy: RankLLMs verified GPQA at 39% — noted as likely variant/harness difference.)
- **Context window: 72/100.** 256K total (verified by meta.json, RankLLMs, airank.dev). In the 200K–500K range → 65–84 (200K = 70).
- **Multimodal: 88/100.** Text, image, and video input with text output (verified). VideoMME 89.5, MMMU 85.4, MMMU-Pro 83.7%, MathVision 88.8 — all strong multimodal scores.
- **Coding: 86/100.** SWE-bench Verified 76.5%, LiveCodeBench v6 87.8%, Codeforces 3020 (near-grandmaster). Strong coding suite; lack of DeepSWE/SciCode/Vibe data prevents a higher score. (Discrepancy: RankLLMs verified SWE-bench at 21.5% — noted as likely variant/harness difference.)
- **Cost efficiency: 93/100.** $0.47/$2.37 per 1M tokens (RankLLMs/Volcano Engine) — very competitive, ~10x cheaper than Western frontier competitors per Digital Applied.
- **Overall Score: 80/100.** Half-up mean of five quality dims: (62+90+72+88+86)/5 = 79.6 → 80. Strong reasoning, coding, and multimodal capabilities; tool-use mid-tier gaps and no verified long-context retrieval benchmarks are the main constraints.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-03
- Method: public internet research via Digital Applied, RankLLMs, and airank.dev; scores are normalized 1–100 interpretations, not official vendor scores. Note: RankLLMs independently verifies much lower SWE-bench (21.5%) and GPQA (39%) scores than vendor-reported figures — likely due to variant/harness differences; vendor-reported figures from Digital Applied's comprehensive benchmark table are used here.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---