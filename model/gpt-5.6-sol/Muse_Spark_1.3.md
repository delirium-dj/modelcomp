# GPT-5.6 Sol — findings by Muse Spark 1.3

- Source: OpenAI/GPT-5.6 Sol (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Sol (OpenAI, Sol reasoning/coding tier)
- **Short description:** OpenAI's flagship reasoning and coding specialist in the July 2026 GPT-5.6 family, tuned for command-line, multi-step coding and agentic workflows.
- **Provider / access:** OpenAI via API (`openai/gpt-5.6-sol`); Chat Completions with tool calling, structured outputs and reasoning-effort controls.
- **Release / knowledge:** 2026-07-09 release; knowledge cutoff 2026-02-16
- **IDs:** `openai/gpt-5.6-sol` (state explicitly: no Free ID exists on Zen)
- **Context window:** 1.05M–1.1M total / 128K out — verified via BenchLM model page (1.05M) and llm-stats leaderboard (1.1M); curated repo metadata lists 1M / 128K out
- **Modalities:** text, image, file in; text out; reasoning yes; tool calls yes; structured outputs yes
- **Pricing (as of 2026-09-21):** $5.00 in / $30.00 out per 1M with $0.50 cached input (BenchLM pricing panel, Sep 2026; no $0 tier)
- **Architecture:** proprietary (parameter count undisclosed)

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> All BenchLM rows below are from the GPT-5.6 Sol model page (Sep 18, 2026 refresh, 74 benchmarks covered, overall 80.46 #5/491) unless noted.

Agent / tool use:

- Terminal-Bench 2.1 (Vals): **85.8%** (BenchLM agentic table)
- Terminal-Bench 2.0: **91.9%** (BenchLM agentic table)
- Terminal-Bench Hard: **65.9%** (BenchLM agentic table)
- Tau3-Banking (AA): **44.3%** (BenchLM agentic table)
- Tau2-bench: **85.1%** (BenchLM agentic table)
- GDPval-AA: **1735 Elo / 54.3% normalized** (BenchLM agentic table)
- AA-Briefcase: **1463 Elo** (BenchLM agentic table)
- OSWorld 2.0: **62.6%** (BenchLM agentic table)
- BrowseComp: **92.2%** (BenchLM agentic table)
- Toolathlon: **58%** (BenchLM agentic table)
- Claw-Eval / ClawProBench: **no verified public score found**
- SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **94.6%** (BenchLM knowledge table; llm-stats GPQA leaderboard confirms 0.946, tied #2 of 247 behind GPT-6 Astra)
- HLE: **54.5% HLE-Verified** (BenchLM knowledge table); **49.5% AA-HLE** (same page)
- LCR / MLCR: **84.0% AA-LCR** (BenchLM reasoning table); **26.1% MLCR-AA** (same page)
- CritPt: **32.3** (BenchLM reasoning table)
- ARC-AGI-2: **92.5%** (BenchLM reasoning table)
- Artificial Analysis Intelligence Index / BenchLM overall: **58.9% AA Intelligence Index** (BenchLM knowledge table); **80.46 BenchLM overall #5/491** (page header)
- Omniscience Accuracy / Hallucination Rate: **59.4% accuracy / 92.2% hallucination rate** (BenchLM AA-Omniscience rows)

Coding:

- SWE-bench Verified / SWE-Pro: **96.2% SWE-bench Vals** (BenchLM coding table); **64.6% SWE-bench Pro** (same page)
- LiveCodeBench: **82.6% LiveCodeBench Vals** (BenchLM coding table)
- SciCode / AA-SciCode: **57.1% AA-SciCode** (BenchLM coding table)
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **72.7% DeepSWE** (BenchLM coding table); **77.4% AA Coding Index** (same page); **67.2% CursorBench 3.2 / 41.7% CursorBench 4.0** (same page)

Long context:

- **26.1% MLCR-AA** (BenchLM reasoning table, multi-needle long-context rate); no verified MRCR v2 / RULER / GraphWalks percentage found

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score. Overall Score = mean of the five quality
> dimensions (Tool, Reasoning, Context, Multimodal, Coding) — Cost efficiency is
> scored independently and excluded from Overall.

- **Tool use: 93/100.** TB2.1 85.8%, TB2.0 91.9%, Tau2 85.1% and GDPval 1735 show frontier terminal/agent orchestration; capped by Toolathlon 58% and missing Claw-Eval same-harness numbers.
- **Reasoning: 94/100.** GPQA 94.6% (tied #2), ARC-AGI-2 92.5%, AA-LCR 84.0% and Index 58.9% place it at frontier reasoning; capped by CritPt 32.3 mid-pack and HLE-Verified 54.5% headroom.
- **Context window: 93/100.** Verified 1.05M+ maps to the top tier; capped by the weak 26.1% MLCR-AA long-context rate with no MRCR/RULER saturation proof.
- **Multimodal: 80/100.** Text/image/file input with MMMU-Pro 83–84.6% grounded strength; capped by text-only output with no video/audio in-or-out.
- **Coding: 93/100.** SWE Vals 96.2%, DeepSWE 72.7%, LiveCode 82.6% and Coding Index 77.4% show elite engineering; capped by SWE-Pro 64.6% trailing the Mythos tier.
- **Cost efficiency: 45/100.** Paid $5.00/$30.00 per 1M with no $0 tier sits between the ~$3/$15 and ~$10/$50 bands.
- **Overall Score: 91/100.** Mean of the five non-cost dims (93+94+93+80+93)/5 = 90.6; best-fit flagship reasoning + terminal-coding specialist where paid budget allows.

---

## Signature

- Provided by: **Muse Spark 1.3 (meta/muse-spark-1.3)** — 2026-09-21
- Method: public internet research (BenchLM GPT-5.6 Sol model page, llm-stats leaderboard and GPQA board, LMSpeed model card); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
