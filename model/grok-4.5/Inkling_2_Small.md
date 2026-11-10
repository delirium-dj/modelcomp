# Grok 4.5 — findings by Fledge Alpha

- Source: xAI (`grok-4.5`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.5
- **Short description:** xAI's July 8–16, 2026 coding-focused flagship, ~2x token-efficiency claim, $2/$6 list; superseded by 4.6 (Aug 12) and 4.7 (Sept 21).
- **Provider / access:** Grok API (`grok-4.5`), Cursor, Grok Build; superseded.
- **Release / knowledge:** 2026-07-08 (GA Jul 16).
- **IDs:** `x-ai/grok-4.5`
- **Context window:** 500,000 tokens; ≥200K tokens reprice to $4/$12.
- **Modalities:** text + image in; text out; reasoning low/medium/high/xhigh.
- **Pricing (as of 2026-10-02):** $2/M in, $0.50/M cache, $6/M out.
- **Architecture:** proprietary; positioned as xAI's production engineering specialist.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **83.3%** (xAI; AA independent 78–83.3)
- τ³-Banking: **33%** (#1 of 28 AA-tracked); GDPval-AA v2: ~1700s Elo (AA index 54)
- AA Index: **54–56** (#4 of 168 at launch)

Reasoning / knowledge:

- GPQA Diamond: **93.1–93.4%** (vals.ai/AA); HLE: **42.7%**
- SciCode: **55.0%**; ARC-AGI-2: **52.6%**; Critique class
- FrontierMath T4: **24.4%**; MMMU-Pro: **80.4%**

Coding:

- DeepSWE 1.0: **62.0%**; DeepSWE 1.1: **53.0%** (mini-SWE, Datacurve)
- SWE-Bench Pro: **64.7%**; SWE Marathon pass@1: **29.0%** (beats Opus 4.8's 26%)
- APEX-SWE: **53.6%** (#3 of 3 on AA at launch); Code Migration: 36.6%

Long context:

- 500K window with 200K surcharge; AA-AnalystAgent 35.0% shows mid-tier spreadsheet robustness.

### Normalized scores (1–100)

- **Tool use: 78/100.** Terminal-Bench 2.1 83.3% and #1 τ³-Banking 33%; APEX-Agents 47.1% is mid-pack.
- **Reasoning: 82/100.** GPQA 93.4%, HLE 42.7%, and AA Index 54–56 are tier-strong.
- **Context window: 82/100.** 500K window with a 200K pricing cliff.
- **Multimodal: 65/100.** Text + image in; no audio/video.
- **Coding: 80/100.** SWE-Bench Pro 64.7% and DeepSWE 1.0 62.0% at 4.2x fewer tokens per task than Opus 4.8 (vendor claim).
- **Cost efficiency: 80/100.** $2/$6 with ~2x token-efficiency claim; 200K-cliff doubles rates.
- **Overall Score: 77/100.** Mean of the five quality dims; the July 2026 coding-agent flagship — superseded by 4.6/4.7 and no longer the cheapest-efficient path in the xAI lineup.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (xAI launch post, LLMLearner, DataLearnerAI, vals.ai, layer3labs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
