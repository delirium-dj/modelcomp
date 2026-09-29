# Gemini 3.1 Pro — findings by Muse Spark 1.3

- Source: Google/Gemini 3.1 Pro (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-21 (UTC); re-verified 2026-09-29 (UTC, user-signed-off re-research: card reconfirmed + MRCR 84.9/26.3 + Tau2 90.8/99.3 + GDPval 1317 + MMMLU 92.6 + MMMU 80.5 added, pricing corrected $2.50/$15 → $2/$12 official; Tool 86 → 88, Cost 60 → 65 — Overall holds 91)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro (Google, Pro tier)
- **Short description:** Google's February 2026 flagship reasoning model with 2x abstract-reasoning gains over Gemini 3 Pro, built for elite software engineering and autonomous agentic work.
- **Provider / access:** Google via Gemini API / AI Studio (`google/gemini-3.1-pro`); OpenCode Zen routing varies by host (Chat Completions, tool calling supported).
- **Release / knowledge:** 2026-02-19 preview release (GA-pending per myclaw — re-verified 2026-09-29); knowledge cutoff undisclosed
- **IDs:** `google/gemini-3.1-pro` (state explicitly: no Free ID exists on Zen)
- **Context window:** 1,048,576 in / 65,536 out — verified via llm-stats model comparison page and Gemini 3.1 Pro benchmark hub (1M context, 65K output consistently listed)
- **Modalities:** text, image, video, file/PDF in; text out; reasoning yes (Low/Medium/High thinking tiers); tool calls yes; structured output yes
- **Pricing (as of 2026-09-21):** $2 in / $12 out per 1M official (corrected from filed $2.50/$15 — llmboard/myclaw/digitalapplied consensus; >200K tier $4/$18; Kilo $1/$6 — re-verified 2026-09-29; no $0 tier)
- **Architecture:** proprietary (parameter count undisclosed)

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:

- APEX-Agents (autonomous agent tasks): **33.5%** (gemini3.us benchmark hub, vendor-compiled table)
- MCP Atlas (tool coordination): **69.2%** (gemini3.us benchmark hub, vendor-compiled table)
- BrowseComp (autonomous web research): **85.9%** (gemini3.us benchmark hub; llm-stats comparison confirms 85.9% vs Claude Opus 4.7 79.3%)
- OSWorld (computer use): **68.2%** (Tech Insider head-to-head compilation, Mar 2026; GPT-5.4 comparison context)
- Terminal-Bench 2.1: **no verified public score found** (closest proxy: Terminal-Bench 2.0 **68.5%**, Tech Jacks independent coding ranking, Jun 2026)
- Tau2 Retail: **90.8%** / Telecom: **99.3%** (digitalapplied guide — re-verified 2026-09-29); Tau3-Banking: **no verified public score found**
- GDPval-AA: **1317 Elo** (digitalapplied guide — re-verified 2026-09-29)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **69.2% MCP Atlas** (gemini3.us hub, as above; no verified SWE Atlas Codebase QnA score found)

Reasoning / knowledge:

- GPQA Diamond: **94.3%** (gemini3.us benchmark hub; llm-stats comparison confirms 94.3% vs Opus 4.7 94.2%; Tech Insider cross-check 94.3% vs GPT-5.4 92.8%)
- HLE: **44.4% HLE-Full without tools** (Moonshot/Kimi K2.6 comparison article, May 2026, high-thinking setting); **51.4% HLE-Full with tools** (same source)
- ARC-AGI-2 (abstract reasoning): **77.1%** (gemini3.us hub; Tech Insider confirms 77.1% vs GPT-5.4 73.3%, 2x Gemini 3 Pro)
- MMMLU: **92.6%**; MMMU Pro: **80.5%** (digitalapplied guide — re-verified 2026-09-29)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **57.0 AA Intelligence Index** (gemini3.us hub citing Artificial Analysis rating); **55.5 AA Coding Index** (same hub)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **80.6% SWE-bench Verified** (Tech Jacks independent ranking, Jun 2026, statistically tied with Claude Opus 4.6 80.8%; Kimi comparison confirms 80.6); **54.2% SWE-bench Pro** (gemini3.us hub; Kimi comparison confirms 54.2)
- LiveCodeBench: **81.3 LiveCodeBench** (Tech Jacks independent ranking); **91.7 LiveCodeBench v6** (Kimi K2.6 comparison table); **2887 LiveCodeBench Pro Elo** (gemini3.us hub, #1 ahead of GPT-5.2)
- SciCode / AA-SciCode: **59% SciCode** (gemini3.us hub, scientific problem solving)
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public DeepSWE score found** (closest proxy: 55.5 AA Coding Index above; AIME 2026 **98.3%** and HMMT 2026 **94.7%** per Kimi comparison table as math-reasoning proxies)

Long context:

- **MRCR v2 8-needle 84.9% @128k avg / 26.3% @1M pointwise** (model card; llmboard corroborates 26.3% — re-verified 2026-09-29)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score. Overall Score = mean of the five quality
> dimensions (Tool, Reasoning, Context, Multimodal, Coding) — Cost efficiency is
> scored independently and excluded from Overall.

- **Tool use: 88/100.** Tau2 90.8%/99.3% plus MCP Atlas 69.2%, TB2.0 68.5%, BrowseComp 85.9% and GDPval 1317 show near-frontier orchestration; capped by missing TB2.1 same-harness numbers and APEX-Agents 33.5% headroom.
- **Reasoning: 93/100.** GPQA 94.3%, HLE 44.4% and ARC-AGI-2 77.1% with AA Index 57.0 place it at frontier reasoning; capped by absent LCR/CritPt same-harness confirmation.
- **Context window: 97/100.** Verified 1,048,576 in / 65,536 out maps to the top tier; capped below 100 for lack of published 512K+ retrieval saturation proof.
- **Multimodal: 85/100.** Native text/image/video/file input with MMMU Pro 80.5% measured and strong visual-logic (ARC-AGI) evidence; capped by text-only output with no audio synthesis.
- **Coding: 92/100.** SWE-Verified 80.6% tied for lead plus LiveCodeBench up to 91.7 and SciCode 59% show elite engineering; capped by SWE-Pro 54.2% trailing open competitors.
- **Cost efficiency: 65/100.** Paid $2/$12 official per 1M with no $0 tier maps below the ~$3/$15 band.
- **Overall Score: 91/100.** Mean of the five non-cost dims (88+93+97+85+92)/5 = 91.0 → 91; best-fit flagship reasoning + balanced coding pick when budget allows paid pricing.

---

## Signature

- Provided by: **Muse Spark 1.3 (meta/muse-spark-1.3)** — 2026-09-21
- Method: public internet research (vendor benchmark hub, llm-stats comparison pages, Tech Insider head-to-head, Tech Jacks coding ranking, Moonshot comparison article); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
