# Claude Fable 5.1 — findings by Claude Sonnet 5

- Source: Anthropic/Claude Fable 5.1 (`claude-fable-5-1`)
- Date: 2026-09-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1 (no free tier; paid API model — not to be confused with Claude Mythos 5.1, the trusted-access-only variant built on the same underlying weights with safeguards loosened)
- **Short description:** Anthropic's generally available "Mythos-class" model for long-horizon agentic coding, scientific research, and computer use; it runs the same underlying weights as Claude Mythos 5.1 but with Anthropic's production safety safeguards enabled. Top use case: long-running coding/research agents needing large context.
- **Provider / access:** Anthropic first-party API, model ID `claude-fable-5-1`, via the Messages API. Also resold through several third-party routers/aggregators (OpenRouter-style platforms, Requesty, OrcaRouter, CometAPI) under the same model ID.
- **Release / knowledge:** Released 2026-09-01. Knowledge cutoff date: no verified public date found in sources checked (one aggregator lists cutoff as "~3 months before release" without an exact date).
- **IDs:** `anthropic/claude-fable-5-1` (no separate Free-tier ID exists on record)
- **Context window:** 1M input tokens / 128K max output tokens, stated consistently across Anthropic-sourced pricing pages and third-party trackers (llm-stats.com, CometAPI, BenchLM).
- **Modalities:** Text and image/PDF input; text-only output; reasoning (always-on "thinking," with selectable effort levels low/medium/high/xhigh/max); function/tool calling with parallel calls; structured/JSON outputs supported. No audio or video input/output found.
- **Pricing (as of 2026-09-01 launch):** $10.00 / M input tokens, $0.25 / M cached input tokens (down 75% from Fable 5's $1/M), $50.00 / M output tokens. No free tier.
- **Architecture:** Proprietary, closed-weights; parameter count, active-parameter count, and MoE/dense structure not disclosed publicly.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85.0%** (Vals AI leaderboard, #2 of field behind GPT-5.6 Sol at 85.77%; drops to 79.03% if fallback-assisted tasks are counted as failures)
- Tau3-Banking / Tau2-Bench: no verified public score found for Fable 5.1 specifically (only a Fable 5 Tau3-Banking figure of 26.8% and a Fable 5 τ²-bench figure of 98.5% were found, which do not apply to 5.1)
- GDPval-AA: **1,853** Elo (Anthropic-reported GDPval-AA v2, launch benchmark table); a separate third-party aggregator (BenchLM) lists a different-vintage GDPval-AA score of 1,735 for Fable 5.1, so treat the exact figure as version-dependent
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: Toolathlon Verified Pass³: **73.1%** (tied #1 with Claude Opus 5, per Anthropic system card as reported by BenchLM/Vellum)

Reasoning / knowledge:

- GPQA Diamond: **93.4%** (Vals AI run, ±1.86); a separate launch-blog figure gives 92.6%, and BenchLM's Vals-sourced figure gives 93.7% — sources cluster at 92.6–93.7%
- HLE: **65%** with tools (BenchLM, #1 of tracked models); **60.9%** without tools
- LCR / MLCR: AA-LCR **80.0%** (Artificial Analysis Long Context Reasoning benchmark; 98th percentile, rank 9 of 409 tracked models)
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: AA Intelligence Index **66** points (Anthropic-reported as "highest to date" at launch, ahead of Opus 5 at 63 and Fable 5 at 60); BenchLM's own aggregate overall score is **83.34/100, rank #3 of 505** tracked models
- Omniscience Accuracy / Hallucination Rate: AA-Omniscience **43.45** (rank 1 of 28 tracked models); hallucination-rate figure not found

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public Anthropic score for SWE-bench Verified found** — a widely circulated "95.0%" figure traces to third-party leaderboard aggregation, not to Anthropic; one specialist tracker (computingforgeeks) explicitly states Anthropic published no SWE-bench Verified number for Fable 5.1 or Fable 5, only **SWE-bench Pro: 81.2%** (Anthropic system card)
- LiveCodeBench: **90.52%**, #1 ranked (Vals AI)
- SciCode / AA-SciCode: **63.1%** (BenchLM/Artificial Analysis)
- Vibe Code Bench: **90.26%** (Vals AI; within noise of Fable 5's leading 90.35%)
- DeepSWE / Coding Index / other: DeepSWE **67.4%**; BenchLM AA Coding Index **81.6%** (BenchLM)

Long context:

- AA-LCR (Artificial Analysis Long Context Reasoning): **80.0%**, 98th percentile, rank 9 of 409 models tracked. No MRCR/RULER/GraphWalks retrieval-at-length figure was found in the sources checked.

### Normalized scores (1-100)

- **Tool use: 88/100.** Terminal-Bench 2.1 at 85.0% sits just under the ~88%+ frontier line, and GDPval-AA v2 at 1,853 clears the ~1,750+ frontier threshold, but no Tau3-Banking figure exists for this exact model to corroborate breadth; capped just below frontier on evidence gaps rather than weak results.
- **Reasoning: 96/100.** GPQA Diamond (92.6–93.7%), HLE (65% with tools), and AA Intelligence Index (66) all clear the stated frontier thresholds (GPQA 90%+, HLE 40%+, Index 60+), placing this solidly in the 90-100 band.
- **Context window: 96/100.** Verified 1M-token window (>=1M tier = 95-100), but no MRCR/RULER-style ≥98% retrieval-at-512K+ figure was found to justify the top of the band, so scored near the low end of the top tier using AA-LCR (80.0%, 98th percentile) as partial corroboration.
- **Multimodal: 80/100.** Text + image + PDF input confirmed, text-only output; no audio or video input/output found, placing it in the "+video/PDF in" 75-90 band rather than the top tier.
- **Coding: 89/100.** LiveCodeBench (90.52%, #1) and SciCode (63.1%, above the 55%+ frontier line) are strong, but DeepSWE (67.4%) falls short of the 74%+ frontier threshold and no first-party SWE-bench Verified figure could be verified, so scored just under frontier.
- **Cost efficiency: 30/100.** $10/M input, $50/M output maps directly to the stated $10/$50 = ~30 tier; among the most expensive tracked tiers in the mapping.
- **Overall Score: 89.8/100.** Mean of (88 + 96 + 96 + 80 + 89) / 5 = 89.8. Best fit: long-horizon agentic coding and research workloads that can absorb the $10/$50 price point and benefit from the 1M-token window — not a fit for cost-sensitive or high-volume simple tasks.

---

## Signature

- Provided by: **Claude Sonnet 5 (anthropic/claude-sonnet-5)** — 2026-09-30
- Method: Public web research via search across Vals AI, BenchLM, Artificial Analysis-sourced aggregations, Anthropic's own launch post and system card (as relayed by third-party trackers), and independent tech-press coverage (VentureBeat, Heise, Handy AI, Vellum, DataCamp, Data Science Dojo, computingforgeeks, llm-stats.com, CometAPI, cloudprice.net); scores are normalized 1-100 interpretations, not official vendor scores. Several raw figures (SWE-bench Verified, GDPval-AA vintage, GPQA Diamond) showed source-to-source disagreement and are reported as ranges or flagged as disputed rather than resolved by guesswork.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
