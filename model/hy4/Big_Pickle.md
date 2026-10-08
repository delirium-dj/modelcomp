# Hy4 — findings by Big Pickle

- Source: Tencent (`tencent/hy4`, weights `Hy4-preview`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy4 (Hunyuan Hy4 preview)
- **Short description:** Tencent's August 2026 open-weights flagship (770B/49B-active MoE, 1M context) for long-horizon coding, office analysis, game development, and scientific reasoning; the release Tencent compares to Kimi K3 at roughly a third of the size. Top use case: self-hosted long-context agentic coding.
- **Provider / access:** Tencent Hy Team; IDs `tencent/hy4`; weights `tencent/Hy4-preview` (+FP8) on Hugging Face / ModelScope / GitCode / CNB, Apache 2.0. Chat-style API via Tencent products (CodeBuddy / WorkBuddy); no Zen Free ID.
- **Release / knowledge:** Released 2026-08-28 (preview); reasoning model with `high` / `no_think` modes.
- **IDs:** `tencent/hy4` (open weights `tencent/Hy4-preview`).
- **Context window:** 1M total (960K in / 64K out per repo meta); native MTP decoder layer.
- **Modalities:** text in/out only; tool calls; no vision/audio input.
- **Pricing (as of 2026-09-23):** Apache 2.0 open weights — self-hosted; no confirmed per-token public API rate; no Zen Free ID.
- **Architecture:** 770B total / 49B active MoE (78 layers, 256 routed experts + 1 shared, top-8 active) with Gated DSA attention, IndexCache, iHC, plus one 10B native MTP layer for speculative decoding.

### Raw benchmarks found

Agent / tool use (Tencent vendor testing plus community-typed HF eval results):

- Terminal-Bench 2.1: **85.4%** (Tencent; +14.6 vs Hy3's 70.8; Kimi K3 88.3)
- Toolathlon-Verified: **74.1%** (Tencent; Hy3 56.2)
- APEX-Agents: **37.1%** (Tencent; Hy3 24.4; ~tie with Kimi K3's 37.2)
- OneMillionBench +tools: **65.4%** (Tencent; 1M-context agentic row, Hy3 51.6)
- GDPval-AA v2: **1678** (DataLearner tracker; rank 7/107)
- SWE Atlas Refactoring: **53.3%** (Tencent)

Reasoning / knowledge:

- GPQA Diamond: **92.3%** (HF eval result; rank ~28/254, 48/463 per DataLearner; Kimi K3 93.5)
- HLE (with tools): **55.4%** (DataLearner/HF; rank 16/218, 24/565; Kimi K3 59.8)
- CritPt (Thinking High, no tools): **16.9** (rank 23/118) — the notable weak row
- SkillsBench V1: **62.9%** (HF eval result)

Coding:

- DeepSWE v1.1: **64.3%** (HF eval result / LLMBoard rank 5/13, Sep 17 2026; Kimi K3 68.5)
- SWE-bench Pro: **65.7%** (Tencent + HF; beats Kimi K3 63.3)
- SWE-bench Multilingual: **82.9%** resolved (LLMBoard rank 3/45, 95th pct)
- Terminal-Bench 2.1: **85.4%** (above)
- ProgramBench: **17.5** (LLMLearner tracker) — weak long-agent row
- NL2Repo-Bench: **58.9%** (rank 5/16); PostTrain-Bench ML: **35.6%** (rank 4/5)

Long context:

- 1M window (960K in / 64K out) with a measured 1M-context agentic row (OneMillionBench +tools 65.4%); no MRCR / RULER / GraphWalks value found in this research.

### Normalized scores (1–100)

- **Tool use: 80/100.** TB2.1 85.4%, Toolathlon 74.1%, GDPval 1678 place it near the agentic frontier; APEX-Agents 37.1% and no-tools CritPt weakness cap it below the 90s.
- **Reasoning: 84/100.** GPQA 92.3%, HLE-with-tools 55.4%, GDPval 1678 are strong; CritPt 16.9 is the clearest ceiling.
- **Context window: 95/100.** Full 1M window in the ≥1M band with a measured 1M-context agentic benchmark; no classic long-context retrieval value published yet.
- **Multimodal: 15/100.** Text-only (per repo meta): no image/audio/video input.
- **Coding: 82/100.** DeepSWE 64.3%, SWE-bench Pro 65.7% (leads Kimi K3), SWE Multilingual 82.9%, TB2.1 85.4%; ProgramBench 17.5% is the long-horizon weak row.
- **Cost efficiency: 85/100.** Apache 2.0 open weights are free to self-host with no per-token fee; effectively paid only in the substantial 770B-class hardware required (no Zen Free ID).
- **Overall Score: 71/100.** (80 + 84 + 95 + 15 + 82) / 5 = 71.2 → **71**. Best-fit: self-hosted long-horizon coding/agentic workloads where open weights and 1M context justify the GPU cost.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-23
- Method: public internet research (Tencent GitHub/HF model card, The Elec, DataLearner, LLMLearner, LLMBoard, HF eval results); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.