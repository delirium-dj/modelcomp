# MiniMax M3 — findings by DeepSeek 4.1 Flash

- Source: MiniMax/MiniMax M3 (`minimax-ai/minimax-m3`, API string `MiniMax-M3`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3
- **Short description:** MiniMax's flagship open-weight MoE: a **natively multimodal** (text/image/video in) long-context model with MiniMax Sparse Attention (MSA), a 1M-token window (512K guaranteed) and frontier-class coding/agentic training. It is the first openly released model combining frontier coding, million-token context and native multimodality in one checkpoint.
- **Provider / access:** MiniMax API (`https://api.minimax.io/v1/text/chatcompletion_v2`, Chat Completions), MiniMax Code / Token Plan, Open Platform integration, and — per MiniMax's own page — "soon fully open-sourced on HuggingFace and GitHub" for private-cluster deployment and fine-tuning. **No OpenCode Zen Free ID.** Available through 15 API providers per Artificial Analysis.
- **Release / knowledge:** **2026-06-01** (last updated 2026-08-27). Knowledge cutoff not published.
- **IDs:** `MiniMax-M3` (API), `minimax-ai/minimax-m3` (this repo's ID), M3 (v2.1 API). No Zen Free ID observed.
- **Context window:** **1,048,576 tokens (1M)**; MiniMax guarantees a **minimum of 512K** usable tokens through the API. Traictory lists max output at **131.1K**. Verified from MiniMax's model page plus Artificial Analysis (1M) and Traictory.
- **Modalities:** **text, image and video in → text out**; multimodal training from step zero (not a bolt-on VLM); function calling, structured output, code execution, web search, batch inference, fine-tuning. Reasoning: Artificial Analysis classifies M3 as a reasoning model while BenchLM files it as non-reasoning — MiniMax's own page emphasises agentic multi-step reasoning, so treat "hybrid/optional thinking" as the honest reading.
- **Pricing (as of 2026-09-18):** **$0.30 / 1M in, $1.20 / 1M out**, cached input **$0.06**, cache discount **80%**, blended 7:2:1 rate **$0.22 / 1M**; $0.51 per AA Intelligence Index task. Paid only (no $0 tier).
- **Architecture:** MoE with MiniMax Sparse Attention; **428B total / 23B active** per Artificial Analysis and Traictory (the repo's `meta.json` still says ~230B/9.8B — that figure matches the M2.x generation and should be refreshed by the maintainer; I did not modify it). Licence: **MIT** per Traictory's metadata vs **MiniMax Community License** per Artificial Analysis — the two sources disagree on the licence file name, so verify before commercial redistribution.
- **Notable demonstrations (vendor):** ~12-hour autonomous reproduction of an ICLR 2025 outstanding paper (18 commits, 23 reproduced figures) and a ~24-hour CUDA FP8-GEMM optimisation run (147 submissions, 1,959 tool calls, 9.4× speedup, 7.6% → 71.3% of hardware peak) with no human intervention.

### Raw benchmarks found

> Vendor figures are self-reported through MiniMax's model page as compiled by Traictory, except where a source is marked "Verified" or "independent". Independent rows (RankLLMs, BenchLM, AA) are listed next to them because the harness gap is large.

Agent / tool use:

- Terminal-Bench 2.1: **66.0%** (self-reported) — vs **34.4%** independent (RankLLMs)
- Claw-Eval Pass^3: **74.5%** (self-reported)
- MCP Atlas: **74.2%** (self-reported)
- OSWorld-Verified (max steps 200): **70.1%** (self-reported) — vs **27.8%** independent (RankLLMs)
- BrowseComp: **83.5%** (self-reported; MiniMax claims it beats Claude Opus 4.7 at 79.3) — vs **27.8%** independent (RankLLMs)
- APEX-Agents: **27.7%** (self-reported); PaperBench **52.6%**; PostTrainBench **37.1** (vendor ranks it #3 behind Opus 4.7 42.4 and GPT-5.5 39.3)
- SWE Atlas Codebase QnA **37.9%**; SWE Atlas Test Writing **30.8%**; Finance Agent v2 **48.3% (verified)**; GDPval-Rubrics **74.8%**; GDPval-AA / Code Arena Elo **1056** (independent, RankLLMs)
- Tau3-Banking / Tau2: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found** (RankLLMs' independent GPQA proxy prints **41.8%**)
- HLE / CritPt / LCR: **no verified public score found**
- Math: IMO 2025 **83.3%**; USAMO 2026 **85.7%**; MATH-500 **41.8%** (independent, RankLLMs)
- Artificial Analysis Intelligence Index: **30 / rank 15 of 113** (AA v4.3) — top-quintile and the best-placed open-weight entry in this repo's set at research time
- BenchLM overall: **61.3 / 100, rank 54 of 230**, strongest eligible category Multimodal & Grounded at #34; RankLLMs composite **41.9 / 100, rank #51 of 80**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified: **80.5%** (self-reported) — vs **34.4%** independent (RankLLMs)
- SWE-Bench Pro: **59.0%** (self-reported; matches the 59% recorded in this repo's metadata)
- Terminal-Bench 2.1: **66.0%** (self-reported; matches the repo's 66%)
- LiveBench (2026-01-08): **70.0% (verified)**; VIBE-V2 **50.1%**; NL2Repo **42.1%**; SWE-fficiency **34.8%**; KernelBench Hard **28.8%**; FrontierCode 1.1 mergeability **14.7% (verified)**; LiveSQLBench **40.2%** (all remaining rows self-reported)
- LiveCodeBench / SciCode / DeepSWE / Coding Index: **no verified public score found**

Multimodal:

- MMMU-Pro **78.1%**; Video-MME (with subtitles) **85.4%**; VideoMMMU **84.6%**; OmniDocBench 1.5 **92.0%**; SpreadSheetBench-v1 **89.3%**; SVG-Bench **63.7%**; OfficeQA Pro **45.1%** (all self-reported)

Long context:

- The 1M window (512K guaranteed) is vendor-verified via MSA; the only long-context benchmark found is **LOCA-Bench (256k) 49.3%** (self-reported). **No MRCR / RULER / GraphWalks / AA-LCR value was published**, so retrieval-at-depth above 256K remains unproven publicly.

### Normalized scores (1–100)

> Derived from the raw numbers above using the methodology in `../../model-comparison.md`; Overall = arithmetic mean of the six. Vendor self-reported values are discounted where independent harnesses disagree substantially.

- **Tool use: 74/100.** Vendor rows are strong — Claw-Eval 74.5%, MCP Atlas 74.2%, OSWorld-Verified 70.1%, TB 2.1 66.0%, BrowseComp 83.5% — which lands above the mid band (TB 45–60%, GDPval ~900–1200 where Code Arena Elo is 1056), but the frontier bar (TB2.1 ~88%+, Tau3 ~50%+, GDPval ~1750+) is not reached, independent RankLLMs prints TB 2.1 34.4% / OSWorld 27.8%, APEX-Agents is only 27.7% and no Tau3 row exists.
- **Reasoning: 80/100.** The AA Intelligence Index of 30 at rank 15/113 is the strongest open-weight placement researched here, and math is genuinely frontier-adjacent (USAMO 2026 85.7%, IMO 2025 83.3%); capped below 85 by the complete absence of a vendor GPQA Diamond / HLE / CritPt number and by RankLLMs' 41.8% independent GPQA proxy.
- **Context window: 95/100.** 1M tokens with a guaranteed 512K minimum sits in the ≥1M tier (95–100); it takes the tier floor because the only depth-restricted long-context number (LOCA-Bench at 256K, 49.3%) is not the ≥512K/98%-recall evidence the rubric requires for 100.
- **Multimodal: 85/100.** Native text + image + video input (trained multimodal from step zero) with MMMU-Pro 78.1%, Video-MME 85.4% and OmniDocBench 92.0% puts it in the +video/PDF band (75–90); held below 90 because there is no audio input and no non-text output.
- **Coding: 77/100.** SWE-bench Verified 80.5% and SWE-bench Pro 59.0% with TB 2.1 66.0%, LiveBench verified 70.0% and VIBE-V2 50.1% clear the mid band (65–75) and beat HY3's profile, but DeepSWE 74%+, TB2.1 85%+, SciCode 55%+ and Coding Index 70%+ frontier references are unmet, and the independent SWE-bench Verified row (34.4%) is a sharp disagreement.
- **Cost efficiency: 90/100.** $0.30/$1.20 is the same price point the methodology anchors at ~90 (MiniMax M2.7) while delivering far more capability, and an 80% cache discount ($0.06 cached, $0.22 blended) plus 161 tok/s throughput sweeten it; capped by being paid-only with no $0 tier and well above the $0.10/$0.20 = 97–99 band.
- **Overall Score: 82/100.** (74 + 80 + 95 + 85 + 77 + 90) / 6 = 83.5 → **84**. Best fit: a single open-weight checkpoint that must do long-context, multimodal document/video work *and* serious agentic coding at a mid-market price — the equal-weight rubric rewards that breadth over HY4's text-only frontier-agent profile (76), which is a deliberate trade-off, not a claim that M3 wins every head-to-head.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-09-18
- Method: Public internet research from zero — MiniMax M3 official model page (MSA, 1M/512K, vendor demos), Traictory catalogue (harness-tagged self-reported and verified rows, pricing, licence, max output), Artificial Analysis (Intelligence Index, speed, cache discount, params, modalities), RankLLMs and BenchLM independent leaderboards. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Solar_Pro_4.md`, using the same headings.