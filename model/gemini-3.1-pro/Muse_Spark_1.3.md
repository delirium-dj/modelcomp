# Gemini 3.1 Pro — findings by Muse Spark 1.3

- Source: Google/Gemini 3.1 Pro (`muse-spark-1.3-contributor-free`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro (Google, Pro tier)
- **Short description:** Google's February 2026 flagship reasoning model with 2x abstract-reasoning gains over Gemini 3 Pro, built for elite software engineering and autonomous agentic work.
- **Provider / access:** Google via Gemini API / AI Studio (`google/gemini-3.1-pro`); OpenCode Zen routing varies by host (Chat Completions, tool calling supported).
- **Release / knowledge:** 2026-02-19 release; knowledge cutoff undisclosed
- **IDs:** `google/gemini-3.1-pro` (state explicitly: no Free ID exists on Zen)
- **Context window:** 1,048,576 in / 65,536 out — verified via llm-stats model comparison page and Gemini 3.1 Pro benchmark hub (1M context, 65K output consistently listed)
- **Modalities:** text, image, video, file/PDF in; text out; reasoning yes (Low/Medium/High thinking tiers); tool calls yes; structured output yes
- **Pricing (as of 2026-09-21):** $2.50 in / $15.00 out per 1M (llm-stats pricing table; no $0 tier)
- **Architecture:** proprietary (parameter count undisclosed)

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:

- APEX-Agents (autonomous agent tasks): **33.5%** (gemini3.us benchmark hub, vendor-compiled table)
- MCP Atlas (tool coordination): **69.2%** (gemini3.us benchmark hub, vendor-compiled table)
- BrowseComp (autonomous web research): **85.9%** (gemini3.us benchmark hub; llm-stats comparison confirms 85.9% vs Claude Opus 4.7 79.3%)
- OSWorld (computer use): **68.2%** (Tech Insider head-to-head compilation, Mar 2026; GPT-5.4 comparison context); **76.2% OSWorld-Verified** (aireleasetracker release figures — harness differs, both listed)
- Terminal-Bench 2.1: **70.3%** (aireleasetracker release-figures compilation, #17 of 19; best GPT-5.6 Sol 88.8% — fills prior gap; closest proxy was TB2.0 68.5% below)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **1314 GDPval-AA / 965 GDPval-AA v2 / 67.3% win-tie rate** (aireleasetracker release figures — fills prior gap; v2 scale differs from Elo-form leaderboards, treated as weak-signal)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **69.2% MCP Atlas** (gemini3.us hub) / **78.2% MCP Atlas** (aireleasetracker release figures — harness differs, both listed); **48.8% Toolathlon** (aireleasetracker — fills prior gap); no verified SWE Atlas Codebase QnA score found)

Reasoning / knowledge:

- GPQA Diamond: **94.3%** (gemini3.us benchmark hub; llm-stats comparison confirms 94.3% vs Opus 4.7 94.2%; Tech Insider cross-check 94.3% vs GPT-5.4 92.8%)
- HLE: **44.4% HLE-Full without tools** (Moonshot/Kimi K2.6 comparison article, May 2026, high-thinking setting); **51.4% HLE-Full with tools** (same source)
- ARC-AGI-2 (abstract reasoning): **77.1%** (gemini3.us hub; Tech Insider confirms 77.1% vs GPT-5.4 73.3%, 2x Gemini 3 Pro)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **57.0 AA Intelligence Index** (gemini3.us hub citing Artificial Analysis rating); **55.5 AA Coding Index** (same hub); **80.5% MMMU-Pro, 83.3% CharXiv Reasoning** (aireleasetracker release figures — new 2026-10-07)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **80.6% SWE-bench Verified** (Tech Jacks independent ranking, Jun 2026, statistically tied with Claude Opus 4.6 80.8%; Kimi comparison confirms 80.6); **54.2% SWE-bench Pro** (gemini3.us hub; Kimi comparison confirms 54.2)
- LiveCodeBench: **81.3 LiveCodeBench** (Tech Jacks independent ranking); **91.7 LiveCodeBench v6** (Kimi K2.6 comparison table); **2887 LiveCodeBench Pro Elo** (gemini3.us hub, #1 ahead of GPT-5.2)
- SciCode / AA-SciCode: **59% SciCode** (gemini3.us hub, scientific problem solving)
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **12% DeepSWE 1.1** (aireleasetracker release figures — fills prior gap; far below the ~74 frontier bar, see score cap); AIME 2026 **98.3%** and HMMT 2026 **94.7%** per Kimi comparison table as math-reasoning proxies; **42.6% MLE-Bench, 75% Next.js Evals, 36.9% FrontierMath T1–3 / 16.7% T4** (aireleasetracker — new 2026-10-07)

Long context:

- **MRCR v2 (8-needle): 84.9% @128K average, 26.3% @1M pointwise** (aireleasetracker release figures — fills prior gap; sharp falloff at the full window, see score cap); no verified RULER / GraphWalks score found; 1M window verified from spec pages

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score. Overall Score = mean of the five quality
> dimensions (Tool, Reasoning, Context, Multimodal, Coding) — Cost efficiency is
> scored independently and excluded from Overall.

- **Tool use: 86/100.** TB2.1 70.3% plus MCP Atlas 69–78%, BrowseComp 85.9% and OSWorld-Verified 76.2% show near-frontier tool orchestration; capped by GDPval weakness (1314/965 scales) and APEX-Agents 33.5% headroom.
- **Reasoning: 93/100.** GPQA 94.3%, HLE 44.4% and ARC-AGI-2 77.1% with AA Index 57.0 place it at frontier reasoning; capped by absent LCR/CritPt same-harness confirmation.
- **Context window: 94/100.** Verified 1,048,576 in / 65,536 out with measured MRCR v2 84.9% @128K; capped for the sharp falloff to 26.3% at 1M pointwise.
- **Multimodal: 85/100.** Native text/image/video/file input with MMMU-Pro 80.5% and CharXiv 83.3% now measured; capped by text-only output with no audio synthesis.
- **Coding: 89/100.** SWE-Verified 80.6% tied for lead plus LiveCodeBench up to 91.7 and SciCode 59% show elite engineering; capped by SWE-Pro 54.2% and a notably weak DeepSWE 1.1 (12%) trailing open competitors.
- **Cost efficiency: 60/100.** Paid $2.50/$15.00 per 1M with no $0 tier maps to the ~$3/$15 band.
- **Overall Score: 89/100.** Mean of the five non-cost dims (86+93+94+85+89)/5 = 89.4 → 89; best-fit flagship reasoning + balanced coding pick when budget allows paid pricing. (Re-researched 2026-10-07: TB2.1, Toolathlon, GDPval, MRCR v2, DeepSWE gaps filled; Context −3 and Coding −3 on the new retention/agentic-coding evidence.)

---

## Signature

- Provided by: **Muse Spark 1.3 (meta/muse-spark-1.3)** — 2026-10-07
- Method: public internet research (vendor benchmark hub, llm-stats comparison pages, Tech Insider head-to-head, Tech Jacks coding ranking, Moonshot comparison article) + 2026-10-07 re-research pass (DeepMind model card + aireleasetracker release-figures compilation, Scale SWE-Pro leaderboard context); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
