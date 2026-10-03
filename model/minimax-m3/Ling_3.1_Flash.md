# MiniMax M3 — findings by Ling 3.1 Flash

- Source: MiniMax (`minimax-ai/minimax-m3`, MINIMAX COMMUNITY LICENSE open weights; MiniMax API, OpenRouter)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3
- **Short description:** MiniMax's June-2026 open-weight flagship — MiniMax Sparse Attention (MSA) MoE with a 1M multimodal context at ~1/20 the per-token compute of its predecessor: BrowseComp 83.5% (beats Opus 4.7), τ²-Bench Telecom 88.9%, GPQA Diamond 92.9% (AA), SVG-Bench 63.7% (#1), at $0.30/$1.20 per 1M list ($0.23/$0.96 on OpenRouter); agentic coding (SWE-bench Pro 59.0%, TB2.1 66.0%) is its weaker half.
- **Provider / access:** MiniMax API (standard/priority tiers; ≤512K input at standard rates, 512K–1M at 2×), OpenRouter (~32 providers; cheapest DeepInfra $0.28/$1.10), Token Plans (Plus $20/mo ~1.7B tokens; Max $50 ~5.1B; Ultra $120 ~9.8B — text/image/speech/music share one pool); open weights (commercial use allowed). 179 tok/s, 1.07s TTFT; AA cost per task $0.51.
- **Release / knowledge:** 2026-06-01 (weights + technical report within 10 days of launch); knowledge cutoff not stated.
- **IDs:** `minimax-ai/minimax-m3` / `MiniMax-M3`. Parameter count disputed: AA lists 428B total / 23B active; the repo `meta.json` says ~230B / 9.8B active.
- **Context window:** 1,048,576 (1M) tokens, guaranteed minimum 512K; max output 262,144 per OpenRouter (meta.json says 512K out).
- **Modalities:** text, image, video in (desktop-computer operation claimed); text out.
- **Pricing (as of 2026-10-02):** MiniMax list $0.30/$1.20 per 1M (cached $0.06/M per AA); API tiers $0.60/$2.40 (≤512K input) and $1.20/$4.80 (512K–1M), cache reads $0.12/$0.24; OpenRouter $0.23/$0.96 (cached $0.05).
- **Architecture:** sparse MoE with MiniMax Sparse Attention (Index Branch scores KV blocks; Sparse Branch attends only selected blocks) — ~1/20 per-token compute at 1M vs the previous generation, >9× prefill and >15× decode speedups.

### Raw benchmarks found

Agent / tool use (MiniMax launch table vs Opus 4.7 / GPT-5.5 / Gemini 3.1 Pro; AA runs at high unless noted):

- BrowseComp: **83.5%** (Gemini 3.1 Pro 85.9, GPT-5.5 84.4, Opus 4.7 79.3) — beats Opus 4.7
- τ²-Bench Telecom (AA): **88.9%** — at the frontier bar
- MCP Atlas: **74.2%** (Opus 4.7 77.0, GPT-5.5 75.3, Gemini 3.1 Pro 69.2)
- Banker ToolBench: **76.1%** (Opus 4.7 81.3, GPT-5.5 70.0, Gemini 3.1 Pro 67.0)
- OSWorld-Verified: **70.0%** (Opus 4.7 82.8, GPT-5.5 78.7, Gemini 3.1 Pro 76.2)
- AutomationBench-AA: **21%**; Terminal-Bench 4.0: **2%** (new benchmark, unanchored)
- AA Agentic Index: **29.5** (themodelbeat: 54.0, 54th percentile — version-dependent); AA-Briefcase v1.1: **1090**
- GDPval-AA v2.1: **1230 Elo** (AA); GDPval Rubrics: **74.7%** (GPT-5.5 80.6, Opus 4.7 79.8, Gemini 3.1 Pro 57.8)
- Long-running demos: 12-hour ICLR-paper reproduction (18 commits, 23 figures); ~24-hour CUDA FP8-GEMM optimization (147 submissions, 1,959 tool calls, 7.6%→71.3% utilization, 9.4× speedup); autonomous pretraining pipeline scored 37.1 (#3, behind Opus 4.7's 42.4 and GPT-5.5's 39.3)
- Claw-Eval / ClawProBench / Agents' Last Exam: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **92.9%** (AA) / **90.9%** (Epoch) — clears the 90%+ frontier band
- Humanity's Last Exam: **39.0%** — just under the 40%+ bar
- IFBench: **82.9%**; CritPt: **3.7%**
- AA Intelligence Index: **29.2** (v4.3.x — dragged by TB4.0 2%, AutomationBench 21%, CritPt 3.7%; Gemini 3 Pro Preview high: 28)
- AA-Omniscience: accuracy **16.7%**, non-hallucination rate **81.6%**

Coding:

- SWE-bench Pro: **59.0%** (Opus 4.7 64.3, GPT-5.5 58.6, Gemini 3.1 Pro 54.2) — edges GPT-5.5, mid-tier
- Terminal-Bench 2.1: **66.0%** (Opus 4.7 66.1, Gemini 3.1 Pro 70.0, GPT-5.5 78.2) — under the 85% bar
- SciCode: **47.1%** (AA) — under the 55% reference
- AA Coding Index: **58.6** — under the 70% reference
- Terminal-Bench Hard: **42.4%**; KernelBench Hard: **28.8%** (Opus 4.7 30.7, GPT-5.5 20.9); VIBE V2: **50.1%**; SVG-Bench: **63.7%** — #1 in its table; WebDev Arena: **1488** (Epoch)
- DeepSWE / SWE-bench Verified / LiveCodeBench: no verified public score found

Long context / multimodal:

- 1M window (MSA); AA-LCR: **83.0%**; no MRCR/RULER/GraphWalks score published
- SVG-Bench 63.7% (#1) and VIBE V2 50.1% are the visual-code/data points; no MMMU/Video-MMMU figure captured

### Normalized scores (1–100)

- **Tool use: 76/100.** τ²-Bench Telecom 88.9% (AA) sits at the frontier bar, BrowseComp 83.5% beats Opus 4.7, and MCP Atlas 74.2% and Banker ToolBench 76.1% are strong; OSWorld-Verified 70.0% is mid, AutomationBench 21% and the AA Agentic Index of 29.5 are weak, and TB4.0's 2% is an unanchored new benchmark.
- **Reasoning: 78/100.** GPQA Diamond 92.9% (AA) clears the 90%+ frontier band and IFBench 82.9% supports, but HLE 39.0% sits just under the 40%+ bar, CritPt 3.7% and AA-Omniscience (16.7% accuracy) are very weak, and the AA Intelligence Index of 29.2 is dragged down by the new agentic evals.
- **Context window: 95/100.** 1M-token window (MSA sparse attention at ~1/20 the per-token compute) with AA-LCR 83.0%; no ≥98%-at-512K+ retrieval figure, so 100 is not justified.
- **Multimodal: 80/100.** text/image/video in with text out — the +video/PDF band (75–90), with SVG-Bench 63.7% (#1) and VIBE V2 50.1% supporting; no MMMU or video-suite figure captured.
- **Coding: 70/100.** SWE-bench Pro 59.0% (edging GPT-5.5) and SVG-Bench 63.7% (#1) are solid, but Terminal-Bench 2.1 66.0% is under the 85% bar, SciCode 47.1% is under the 55% reference, the AA Coding Index of 58.6 is under the 70% bar, and Terminal-Bench Hard 42.4% is weak; DeepSWE and SWE-bench Verified are unpublished.
- **Cost efficiency: 93/100.** $0.30/$1.20 per 1M list ($0.23/$0.96 OpenRouter, $0.28/$1.10 DeepInfra, AA blended $0.222/M) sits between the ~97–99 ($0.10/$0.20) and ~88 ($1.25/$4.25) anchors; the 512K–1M API tier ($1.20/$4.80) is the premium.
- **Overall Score: 80/100.** (76+78+95+80+70)/5 = 79.8 → 80 — a cheap open-weight 1M multimodal model with frontier GPQA (92.9%), τ²-Bench 88.9% and BrowseComp 83.5%; the agentic-coding half (TB2.1 66.0%, SWE-bench Pro 59.0%, SciCode 47.1%, Coding Index 58.6) and the AA Intelligence Index of 29.2 are the gaps.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02
- Method: public internet research (MiniMax M3 model page, Artificial Analysis, OpenRouter, themodelbeat, Epoch AI, binaryverseai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiniMax_M3.md`, using the same headings.
