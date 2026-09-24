# Seed 2.0 Pro — findings by Big Pickle

- Source: ByteDance (Seed / Doubao) Seed 2.0 Pro (`bytedance-doubao-seed-2-0-pro`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** ByteDance Seed 2.0 Pro (Doubao Seed 2.0 Pro)
- **Short description:** ByteDance's 2026 frontier flagship (launched 2026-02-14 via Volcano Engine, Seed 2.0 blog): multimodal reasoning model with 256K context, strong math/visual-reasoning and long-context claims, at roughly 3–6× cheaper pricing than comparable frontier models.
- **Provider / access:** Volcengine (official; $0.47/$2.37), DeepInfra (`deepinfra/ByteDance/Seed-2.0-pro`; $0.50/$3.00); Safe/Doubao app + TRAE; OpenCode Zen `opencode/bytedance-doubao-seed-2-0-pro` (proprietary.model, conditionally multimodal).
- **Release / knowledge:** 2026-02-14; knowledge cutoff not disclosed.
- **IDs:** `deepinfra/ByteDance/Seed-2.0-pro`, `opencode/bytedance-doubao-seed-2-0-pro`
- **Context window:** 256,000 input; 65,536 output.
- **Modalities:** text, image, and video input; text output.
- **Pricing (as of 2026-09-24):** $0.50 / $3.00 per 1M input/output on DeepInfra ($0.47/$2.37 on Volcengine); cache reads $0.10/1M. Paid only.
- **Architecture:** proprietary reasoning model; parameters not disclosed.

### Raw benchmarks found

General / reasoning / knowledge:

- GPQA Diamond: **88.9**
- MMLU-Pro: **87.0** (thinking mode; rank 14/133 per DataLearner)
- AIME 2025: **98.3**; AIME 2026: **94.2**
- BrowseComp: **77.3**
- MMMU: **85.4** (rank 2/28 per DataLearner)

Coding:

- SWE-bench Verified: **76.5** (thinking + tools; rank ~32/114 per DataLearner)
- LiveCodeBench v6: **87.8** (rank 8/55 per llmreference)
- SWE-bench Multilingual: **71.7**
- SWE-bench Pro (Public set): **46.9** (thinking + tools)

Agent / long context:

- Long-horizon / RAG: no verified Terminal-Bench, OSWorld, or GDPval row found; vendor claims strong long-context and video understanding (Seed 2.0 launch post)
- MRCR/RULER at 256K: no verified independent retrieval score found

### Normalized scores (1–100)

- **Tool use: 48/100.** BrowseComp 77.3 shows real web/tool grounding, but no Terminal-Bench/OSWorld agentic row exists and SWE-bench Pro Public 46.9 caps deep agentic tool loops (BrowseComp ~75 tier per methodology).
- **Reasoning: 78/100.** GPQA-D 88.9, AIME 2026 94.2 and MMLU-Pro 87.0 are strong mid-frontier math/science numbers (GPQA 88–89 ≈ 78 per methodology).
- **Context window: 80/100.** 256K window with new-gen long-context positioning; not higher because the 1M tier is now the frontier and no independently verified ≥90% 256K retrieval row was found.
- **Multimodal: 78/100.** Text + image + video input with MMMU 85.4 at rank 2/28 (video-in tier per methodology); text-only output.
- **Coding: 72/100.** SWE-bench Verified 76.5 and LiveCodeBench 87.8 are credible mid-frontier scores; SWE-bench Pro 46.9 keeps it below the top coding tier.
- **Cost efficiency: 88/100.** ~$0.875 blended (3:1) per 1M with $0.10 cache reads — roughly 3–6× cheaper than comparable frontier models (methodology: <~$1.20 blended ≈ 90, adjusted to 88 for 256K ceiling on some tiers).
- **Overall Score: 71/100.** Mean of five quality dims (48+78+80+78+72)/5 = 71.2 → 71. Best fit: budget-conscious multimodal reasoning, math, and general coding where 1M context is not required.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-24
- Method: public internet research (ByteDance Seed 2.0 launch, llmreference, DataLearner, llm-stats, CloudPrice); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.