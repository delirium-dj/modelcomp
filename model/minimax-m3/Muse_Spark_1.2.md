# MiniMax M3 — findings by Muse Spark 1.2

- Source: Meta (opencode/muse-spark-1.2-contributor-free)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3
- **Short description:** MiniMax open-weight flagship MoE (2026-06-01) with MSA sparse attention, 1M native multimodal context, frontier coding/agentic at $0.30/$1.20.
- **Provider / access:** MiniMax API `minimax-ai/minimax-m3` via MiniMax and OpenCode Zen `minimax-ai/minimax-m3` (Chat Completions via adapter)
- **Release / knowledge:** 2026-06-01; knowledge cutoff 2026-03 (training data cutoff per MiniMax blog)
- **IDs:** `minimax-ai/minimax-m3` (no Free tier; also MiniRouter `minimax/MiniMax-M3`)
- **Context window:** 1,048,576 total (1M in / 512K out) — verified via MiniMax blog and GitHub README (9× prefill, 15× decode vs M2 via MSA)
- **Modalities:** Text, image, video in; text out; reasoning yes (interleaved thinking on by default); tool calls yes; JSON mode yes; desktop computer use (OSWorld)
- **Pricing (as of 2026-09-23):** $0.30 / $1.20 per 1M in/out (MiniMax direct; MiniRouter $0.40/$1.60 variant) — no Zen $0 Free ID
- **Architecture:** MoE 428B params / 23B activated (GitHub) — also listed as 230B/9.8B active in Model Studio; Sparse Attention MSA

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **66.0%** (MiniMax blog — vs GPT-5.5 78.2%, Opus 74.6%)
- Terminal Bench 3.0: **31.5%** (MiniRouter publisher-reported — vs MiniMax blog TB2.1 66%)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found** (no GDPval in MiniMax tables; AA Intelligence Index 29-45 variant below)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **74.2% MCP Atlas** (MiniMax blog — vs Opus 59.5-82.2% range)
- OSWorld-Verified: **70.06% at 200 steps (68.7% at 100 steps)** (MiniMax blog — vs Opus 83.4%)
- BankerToolBench / SWE-Atlas QnA internal: **SWE-Atlas Codebase QnA evaluated via Mini-SWE-Agent** (MiniMax internal, no public numeric isolation)

Reasoning / knowledge:

- GPQA Diamond: **85.1%** (MiniRouter publisher — below flagship 92%+)
- HLE: **no verified public score found** (no HLE disclosed by MiniMax)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **29 (Artificial Analysis June) / 45.4 (llm.ing mirror)** — composite; AA Agentic 36.1, Coding 58.6 (llm.ing)
- OmniDocBench 1.5: **strong** (MiniMax reports edge vs Gemini/GPT, no numeric isolation in excerpt)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **59.0% Pro** (MiniMax blog — vs Opus 69.2, Sol 64.6; SWE-fficiency 34.8% also)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found** (VIBE-V2 internal front-end/full-stack, no public numeric)
- DeepSWE v1.1: **61.2%** (MiniRouter publisher — vs DeepSWE 1.1 65.9% Grok)
- KernelBench Hard: **28.8%** (MiniMax blog — 71.3% hardware peak utilization after optimization from 7.6%)
- PaperBench / PostTrainBench: **PaperBench via Ralph-Loop 12h** (no numeric isolation)
- SWE Atlas Test Writing / LiveSQLBench / YC-Bench internal (awaiting rubrics)

Long context:

- 1M via MSA (1/20 compute); LOCA-Bench 256K (react mode), no MRCR/RULER at 1M published beyond 1M context claim

### Normalized scores (1–100)

- **Tool use: 82/100.** MCP Atlas 74.2% + TB2.1 66.0% + TB3.0 31.5% + OSWorld 70% mid; capped by no Tau3/Claw/GDPval and OSWorld trailing Opus 83.4%.
- **Reasoning: 76/100.** GPQA 85.1% moderate + AA Index 29-45 low vs frontier 60+ + AA Agentic 36.1; capped by no HLE and low Intelligence Index.
- **Context window: 96/100.** 1,048,576 total via MSA; 9× prefill/15× decode gain at 1M justifies 95-100 tier for ≥1M, 1/20 compute.
- **Multimodal: 82/100.** Text/image/video in → text out via MSA native multimodal; VideoMMMU/Video-MME strong but capped below 90 without audio in.
- **Coding: 82/100.** SWE-Pro 59.0% + DeepSWE 61.2% + SWE-fficiency 34.8% + KernelBench 28.8% frontier-level for open-weight but trails Opus 69.2%/Fable 80%.
- **Cost efficiency: 85/100.** $0.30/$1.20 paid (very cheap open-weight; 1/10 of GPT-5.5 $5/$30) but no $0 Free ID so 85 not 100.
- **Overall Score: 84/100.** Mean of five non-cost dims (82+76+96+82+82)/5=83.6 → 84; best-fit for open-weight 1M coding/agentic at sparse-attention efficiency when frontier reasoning not required.

---

## Signature

- Provided by: **Muse Spark 1.2 (opencode/muse-spark-1.2-contributor-free)** — 2026-09-23
- Method: public internet research (MiniMax M3 blog 2026-06-01, GitHub README, Artificial Analysis, MiniRouter, llm.ing); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
