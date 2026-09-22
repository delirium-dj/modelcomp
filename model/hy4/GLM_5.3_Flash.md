# Hy4 — findings by GLM 5.3 Flash

- Source: Tencent / Hunyuan (`tencent/Hy4-preview`)
- Date: 2026-09-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy4 preview (Tencent Hunyuan Hy4)
- **Short description:** Tencent's August 2026 open-weights flagship from the Hunyuan ("Hy") team — a 770B/49B-active MoE with 1M context built for long-horizon coding, office productivity, game development, and scientific research. Co-designed with Tencent's CodeBuddy/WorkBuddy products; self-described "preview" with admitted over-long reasoning chains and over-verification.
- **Provider / access:** Open weights on Hugging Face, ModelScope, GitCode, CNB (Apache 2.0); hosted API endpoints (e.g. third-party hosted pricing ~$0.834/$2.501 per 1M, eesel 2026-08-30). No Zen Free ID exists — scored on hosted paid pricing. Chat Completions-compatible via hosters; day-one vLLM + SGLang recipes.
- **Release / knowledge:** 2026-08-28 release (open weights day one). Knowledge cutoff: not published in the sources reviewed.
- **IDs:** `tencent/Hy4-preview` (Hugging Face; FP8 build `Hy4-preview-FP8`). No Zen Free ID.
- **Context window:** 1,000,000 tokens (Hugging Face model card; eesel/mindstudio tables agree). Hosted input/output split (960K in / 64K out) appears in hosted listings — output cap is the practical caveat.
- **Modalities:** text in / text out only (coding/office/research text model; no image/audio/video input evidenced in the model card or benchmark map). Tool calls: yes (agentic benchmarks, MCP Atlas, toolathlon). JSON mode: not documented in reviewed sources.
- **Pricing (as of 2026-09-21):** hosted ~$0.834 in / $2.501 out per 1M tokens (eesel pricing comparison, 2026-08-30 — "cheapest of the flagship-tier open models"); BenchmarkList shows "price not published", so treat as hosted-route pricing. Self-hosting is theoretically free but needs ~924 GB even quantized — data-center class only.
- **Architecture:** MoE, 770B total / 49B active per token, 78 layers (1 dense + 77 MoE), 256 routed + 1 shared experts (top-8), Gated DeepSeek Sparse Attention (Gated DSA) with IndexCache, Identity Hyper-Connections (iHC, 4-path residual), native MTP layer (~10B/0.7B active, speculative decoding); Apache 2.0; BF16 instruct + official FP8 build.

### Raw benchmarks found

> Mostly independent-leaderboard numbers (BenchmarkList aggregation, fetched 2026-09-21) plus Tencent's blind internal eval. Internal Tencent-only benches (Hy-*, E-Bench) noted but not scored.

Agent / tool use:

- GDPval-AA: **1678** (BenchmarkList, 97th percentile, rank 12/340)
- MCP Atlas: **83.7%** (BenchmarkList, 91st percentile, rank 5/44)
- Toolathlon: **74.1%** (BenchmarkList, 67th percentile, rank 13/37)
- AutomationBench: **32.1%** (BenchmarkList, 63rd percentile, rank 16/42)
- WideSearch: **83.9%** (BenchmarkList, #1 of 10)
- JobBench 61.7% / Workspace-Bench 60.2% / DRACO 77.2% / PostTrainBench 35.6% / APEX-Agents 37.1% / Agents' Last Exam 22.8% (BenchmarkList)
- Terminal-Bench 2.1: **85.4%** (BenchmarkList, 93rd percentile, rank 14/182)
- Tau3-Banking / Tau2-Bench: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Blind engineering eval: **2.99 avg** vs GLM-5.3 2.92 and Kimi K3 2.94 across 203 tasks / 163 Tencent experts, win rates ~47–51% (vendor-run — Tencent launch eval via MindStudio, 2026-08-31)

Reasoning / knowledge:

- GPQA Diamond: **92.3%** (BenchmarkList, 96th percentile, rank 18/464)
- HLE (text-only): **43.4%** (BenchmarkList, 97th percentile, rank 3/64)
- HLE w/ tools: **55.4%** (BenchmarkList, rank 9/27)
- MathArena Apex: **74.2%** (BenchmarkList, 98th percentile, rank 2/45)
- ArxivMath: **66.6%** (BenchmarkList, 59th percentile)
- CritPt: **16.9%** (BenchmarkList, 50th percentile — clearly mid-tier on research physics)
- $OneMillion-Bench: 65.4% / OfficeQA Pro: 66.2% (BenchmarkList)
- LCR / MLCR: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found

Coding:

- SWE Atlas Codebase QnA: **64.0%** (BenchmarkList, 96th percentile, rank 2/28)
- SWE Atlas Test Writing: **57.8%** (rank 2/24); Refactoring: **53.3%** (rank 2/18)
- SWE-bench Pro: **65.7%** (BenchmarkList, 88th percentile, rank 7/49)
- SWE-bench Multilingual: **82.9%** (rank 5/46)
- DeepSWE: **64.3%** (BenchmarkList, 83rd percentile, rank 5/24)
- WebDev Arena: **1625.78** (BenchmarkList, rank 8/105)
- NL2Repo 58.9% / Convex Coding 70.0% / SkillsBench 62.9% / SWE-Marathon 31.9% (BenchmarkList)
- SWE-bench Verified: no verified public score found (Pro/Multilingual reported instead)
- LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found

Long context:

- no long-context retrieval reported (no MRCR / RULER / GraphWalks at 1M found — the 1M window is card-claimed, retrieval quality unmeasured publicly)

### Normalized scores (1–100)

- **Tool use: 87/100.** GDPval 1678 (97th pct) + MCP Atlas 83.7% (91st pct) + WideSearch #1 put it just under the GDPval ~1750 frontier band, and TB2.1 85.4% is close behind; AutomationBench 32.1% and missing Tau3/Claw rows cap it below 90.
- **Reasoning: 89/100.** GPQA 92.3% and HLE text-only 43.4% (rank 3/64) both clear the frontier reference bands (90%+ / 40%+), with MathArena Apex 74.2% (98th pct) corroborating; CritPt 16.9% and ArxivMath 66.6% are mid-band and cap it just under 90.
- **Context window: 95/100.** Card-claimed 1M tokens puts it in the ≥1M = 95–100 tier; the full 100 needs ≥98% retrieval at 512K+ which no public MRCR/RULER run demonstrates — so 95, with the 64K hosted output cap noted.
- **Multimodal: 15/100.** Text in/out only; no image/audio/video input in the model card or benchmark map.
- **Coding: 87/100.** SWE Atlas trio at 96th percentile (rank 2/28), SWE-Pro 65.7% and SWE-Multilingual 82.9% are near-frontier, and TB2.1 85.4% touches the 85%+ band; DeepSWE 64.3% sits well under the 74% frontier reference and LiveCodeBench/SciCode are unmeasured — capped in the high 80s.
- **Cost efficiency: 91/100.** Hosted $0.834/$2.501 per 1M sits between the ~92 band ($0.60/$2.20) and ~88 band ($1.25/$4.25); Apache 2.0 weights make self-hosting possible (if data-center-scale), which supports the score.
- **Overall Score: 75/100.** (87 + 89 + 95 + 15 + 87) / 5 = 74.6 → 75. Best fit: top-tier open-weights agentic coder for long-horizon work where a 1M window and self-hosting matter; text-only and preview-rough edges (over-verification) are the trade.

---

## Signature

- Provided by: **GLM 5.3 Flash (zai/glm-5.3-flash)** — 2026-09-21
- Method: public internet research (BenchmarkList aggregation, Hugging Face model card, eesel and MindStudio write-ups, Tencent launch eval as vendor-claimed); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

