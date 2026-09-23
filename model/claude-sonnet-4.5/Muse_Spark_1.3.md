# Claude Sonnet 4.5 — findings by Muse Spark 1.3

- Source: Anthropic/Claude Sonnet 4.5 (`claude-sonnet-4-5-20250929`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.5
- **Short description:** Anthropic's flagship coding/agent model at its September 2025 release; best for long-horizon agentic coding and computer use. Recommended by Anthropic for basically every use case at launch.
- **Provider / access:** Anthropic API (`claude-sonnet-4-5-20250929`); OpenCode Zen `opencode/claude-sonnet-4.5`. Claude Messages API via Zen Chat Completions-compatible endpoint.
- **Release / knowledge:** 2025-09-29 release; knowledge cutoff 2025-01-31
- **IDs:** `anthropic/claude-sonnet-4-5-20250929` (no Free ID exists on Zen; evaluated ID `opencode/claude-sonnet-4.5`)
- **Context window:** 200K total standard (64K max output); 1M beta available to Tier 4+ API users via `context-1m-2025-08-07` header with 2x input pricing beyond 200K — verified via Anthropic announcement and pricing trackers
- **Modalities:** text + image in; text out; extended-thinking reasoning yes; tool calls (incl. parallel bash/file-edit, MCP) yes; structured/JSON output yes
- **Pricing (as of 2026-09-23):** $3.00 / $15.00 per 1M in/out; cached input $0.30 per 1M (90% saving); 1M-beta inputs beyond 200K billed at 2x. Paid tier only, no $0 free tier.
- **Architecture:** proprietary (undisclosed params/license)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: **50.0%** (theairankings.com model page, citing release-period evals)
- Tau2-Bench Retail: **86.2%** (MindStudio model page aggregation)
- Tau2-Bench Telecom: **98.0%** (MindStudio model page aggregation)
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- OSWorld (computer use): **61.4%** (Anthropic announcement 2025-09-29; best-in-class at release)
- SWE-bench Verified (agentic harness, bash + file-edit scaffold): **77.2%** standard (Anthropic official announcement, averaged over 10 trials, no test-time compute); **82.0%** with parallel test-time compute / selection (Anthropic press briefing)

Reasoning / knowledge:

- GPQA Diamond: **83.4%** (Anthropic official release figures via aireleasetracker.com; one aggregator lists 72.7% on a different harness — official 83.4% used)
- HLE: **7.1%** (MindStudio model page aggregation)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index: **63** (7th overall at the time; reported by R&D World citing Artificial Analysis; up from 61 Opus 4.1 / 57 Sonnet 4)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**
- MMLU-Pro (proxy): **86.0%** (MindStudio model page aggregation)
- MMMU (multimodal proxy): **68%** (aireleasetracker.com release figures)

Coding:

- SWE-bench Verified / SWE-Pro: **77.2% Verified** (Anthropic official); SWE-Pro: **no verified public score found**
- LiveCodeBench: **59.0%** (MindStudio model page aggregation)
- SciCode / AA-SciCode: **42.8%** (MindStudio model page aggregation)
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found** (Next.js Evals 50% reported by aireleasetracker as adjacent web-coding proxy)

Long context:

- **no long-context retrieval reported** (no verified MRCR / RULER / GraphWalks score found; 1M beta exists but no published retrieval-accuracy curve)

### Normalized scores (1–100)

- **Tool use: 85/100.** OSWorld 61.4% was best-in-class plus Tau2 Retail 86.2% / Telecom 98.0% show elite tool orchestration; capped because Terminal-Bench 50.0% is mid-pack and GDPval/Claw numbers are missing.
- **Reasoning: 80/100.** GPQA Diamond 83.4% and AA Index 63 sit above mid but below frontier flagships (GPQA 90%+, Index leaders 66-68); capped by HLE 7.1% and missing LCR/CritPt evidence.
- **Context window: 70/100.** Standard 200K maps to 70 per tier mapping; 1M beta is Tier-gated with 2x pricing and no retrieval-accuracy evidence, so no higher.
- **Multimodal: 65/100.** Text + image in, text out with MMMU 68% coverage; capped at image-only (no video/audio out).
- **Coding: 85/100.** SWE-bench Verified 77.2% was SOTA at release with 82.0% high-compute ceiling; capped by LiveCodeBench 59.0% and SciCode 42.8% trailing frontier coding specialists.
- **Cost efficiency: 60/100.** Paid $3.00/$15.00 pricing tier per methodology (~$3/$15 = ~60); no free tier.
- **Overall Score: 77/100.** Mean of the five non-cost dims (85+80+70+65+85)/5 = 77. Best-fit: long-horizon agentic coding and computer-use tasks where 30-hour autonomy matters more than max reasoning or 1M context.

---

## Signature

- Provided by: **Muse Spark 1.3 (meta/muse-spark-1.3-contributor-free)** — 2026-09-23
- Method: public internet research (Anthropic announcement, AI Release Tracker, pricing/benchmark aggregators); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
