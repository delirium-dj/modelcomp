# Claude Opus 5 — findings by Claude 3.5 Sonnet (anthropic/claude-sonnet-4-20250514)

- Source: Anthropic / Claude Opus 5 (`claude-opus-5`)
- Date: 2026-09-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic's latest Opus-class large language model, an upgrade to Claude Opus 4.8 with gains in agentic coding, computer use, long-horizon knowledge work, and mathematical/scientific reasoning. It comes close to the frontier intelligence of Claude Fable 5 at half the price.
- **Provider / access:** Available on Anthropic API, Amazon Bedrock, Google Cloud, and Microsoft Foundry — all launched on 2026-07-24. API ID: `claude-opus-5`. Chat Completions / Messages API.
- **Release / knowledge:** Released July 24, 2026. Knowledge cutoff date is May 2026.
- **IDs:** `anthropic/claude-opus-5`. No free-tier ID on OpenCode Zen found in public sources.
- **Context window:** 1M-token context window, 128K output tokens. Verified at 1.0M tokens by Artificial Analysis.
- **Modalities:** Input: text and image. Output: text. Reasoning: Yes (adaptive reasoning, five effort levels). The model outputs text only. Tool calls: yes. JSON mode: yes.
- **Pricing (as of 2026-09-30):** $5/million input tokens and $25/million output tokens, matching Opus 4.8 pricing. Available on the Claude API and major cloud platforms at the same $5 per million input tokens and $25 per million output tokens. Cache reads not explicitly stated for Opus 5 (Opus 5.5 has $0.20/M cache reads). Paid tier only.
- **Architecture:** Proprietary model; Anthropic has not disclosed the model size or parameter count.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **89.1%** (third-party / Morphllm compilation — the only standardized third-party score, 0.4 points behind GPT-5.6 Sol). Note: Opus 5 is not on the verified Terminal-Bench 2.1 leaderboard as of Aug 2026. Alternate vendor-claimed figure from Meta comparison: 86.7% (Anthropic vendor claim, unverified).
- Terminal-Bench 3.0: **42.7%** (BenchmarkList — 100th percentile, rank 1 of 17).
- Tau3-Banking / Tau2-Bench: no verified public score found.
- GDPval-AA v2: **1,861 Elo** (Anthropic-reported; Fable 5: 1,747; GPT-5.6 Sol: 1,736). Artificial Analysis confirms Opus 5 at 1,708 on their own measurement (vs. Opus 5.5 at 1,846).
- Claw-Eval / ClawProBench: no verified public score found.
- Toolathlon Verified: **80.6% Pass@1; 87.0% Pass@3; 73.1% Pass³** (BenchmarkList — 100th percentile, rank 1 of 37).
- MCP-Atlas: **85.8%** (BenchmarkList — 98th percentile, rank 2 of 44).
- AutomationBench (Zapier): **26.9%** (vendor-reported from Opus 5.5 system card comparison; Opus 5.5 at 40.0%). Alternate: ~50.3% from Nex-N2.5 comparison (MindStudio).
- OSWorld 2.0: no verified Opus 5-specific score found (Opus 5.5 listed at 48.7%).

Reasoning / knowledge:

- GPQA Diamond: **93.4%** (Vals AI independent; BenchLM comparison). BenchmarkList shows 93.7% at 98th percentile, rank 9 of 464 on the reasoning lane, and 93.4% at 98th percentile, rank 3 of 117 on the intelligence lane.
- HLE (with tools): **64.7%** (BenchLM; source: Anthropic system card).
- HLE (without tools): **56.3%** (BenchLM comparison).
- HLE-Verified (1,811 items): **54.4%** (BenchmarkList — 60th percentile, rank 3 of 6).
- LCR / MLCR: no verified public score found (AA mentions AA-LCR evaluation exists but no number surfaced).
- CritPt: no verified public score found.
- Artificial Analysis Intelligence Index: **51 (max effort)** (Artificial Analysis). Also: 50 (xhigh), 48 (high), 45 (medium), 52 (low — paradoxically highest, likely due to scoring normalization).
- BenchLM overall: **79.8 / #5 of 194** (BenchLM).
- Omniscience Index (AA): **~37.1 (max)** (from Artificial Analysis JSON data).
- IMO 2026: **42/42** (reportedly perfect score, gold medal level, without agent harness or external tools — MindStudio).

Coding:

- SWE-bench Verified: **96.0%** (Datacamp compilation, from Anthropic). BenchmarkList shows 97.0% on one harness (100th percentile, rank 1 of 72) and 96.0% on another. Note: Morphllm states "not published" on the official SWE-bench tracker.
- SWE-bench Pro: **79.2%** (Anthropic system card; BenchLM).
- LiveCodeBench (Vals): **89.0%** (BenchLM — 99th percentile, rank 2 of 123).
- SciCode / AA-SciCode: no verified public score found.
- DeepSWE v1.1: **68.8%** (Anthropic system card; BenchLM — 15% weight, 6.6 behind best).
- FrontierCode 1.1 (main / extended): **53.4% / 63.6%** (Anthropic / SitePoint — medium effort, most compute-efficient configuration).
- Frontier-Bench v0.1: **43.3%** (Anthropic — more than double Opus 4.8's 18.7%, 10 points above Fable 5's 33.7%).
- CursorBench 3.2: **70.0%** (Cursor evals; 3.4 behind best Fable 5.1).
- Terminal-Bench 4.0: **52.3%** (BenchmarkList — 67th percentile, rank 4 of 10; later benchmark version).
- ARC-AGI 3: **30.2%** (~4x previous best GPT-5.6 Sol at 7.8%, 20x Opus 4.8's 1.5%).
- Vibe Code Bench: no verified public score found.
- AA Coding Agent Index: **68.1** (BenchmarkList — 33rd percentile, rank 7 of 10).

Long context:

- 1M token context window verified. AA-LCR evaluation exists but no specific MRCR / RULER / GraphWalks numerical retrieval score found for Opus 5.

### Normalized scores (1-100)

- **Tool use: 82/100.** GDPval-AA v2 at 1,861 Elo is strong (≥1750 frontier range). Terminal-Bench 2.1 at 89.1% (third-party, but not on the verified leaderboard) is just under frontier 88%+ threshold. Toolathlon Pass@3 87.0% (rank 1) and MCP-Atlas 85.8% (rank 2) are excellent. AutomationBench at 26.9% (vendor-reported) is weak. Capped below 90 by unverified TB2.1 status and moderate AutomationBench.

- **Reasoning: 85/100.** GPQA Diamond at 93.4% exceeds the 90%+ frontier gate. HLE with tools at 64.7% far exceeds the 40%+ frontier gate. AA Intelligence Index at 51 (max) is strong but not top-1 (Opus 5.5 at 58). BenchLM overall 79.8 (#5/194). IMO 2026 perfect 42/42. Capped below 90 by mid-tier AA Index ranking and reasoning category rank #6/19 at BenchLM.

- **Context window: 97/100.** Verified 1.0M token context window places it in the ≥1M = 95-100 tier. No specific MRCR/RULER long-context retrieval score found to confirm ≥98% retrieval at 512K+, so cannot award 100. Scored at 97 within the 95-100 band.

- **Multimodal: 65/100.** Supports text and image input, text output only. No video, audio, or PDF native input. Per methodology: +image in = 60-70. Scored at 65 (mid-range of image-in tier).

- **Coding: 90/100.** SWE-bench Verified at 96-97% (rank 1). DeepSWE at 68.8% (below 74%+ frontier). SWE-bench Pro at 79.2% (strong). LiveCodeBench 89.0% (rank 2/123). Frontier-Bench 43.3% (rank 1). Terminal-Bench 2.1 at 89.1% is near the 85%+ frontier gate but unverified. Strong but DeepSWE caps it from reaching 95+.

- **Cost efficiency: 40/100.** At $5/$25 per million tokens, this is a premium-priced model. Per methodology mapping: $5/$25 falls between the $3/$15 (~60) and $10/$50 (~30) bands. Scored at 40 given heavy output cost.

- **Overall Score: 83.8/100.** Mean of (82 + 85 + 97 + 65 + 90) / 5 = 419 / 5 = 83.8. A frontier-class model excelling at coding and long-context work; best suited for complex agentic engineering, knowledge work, and scientific reasoning tasks where quality justifies the high token cost.

---

## Signature

- Provided by: **Claude 3.5 Sonnet (anthropic/claude-sonnet-4-20250514)** — 2026-09-30
- Method: public internet research across Anthropic system card, Artificial Analysis, BenchmarkList, BenchLM, Morphllm, DataCamp, Vellum, MindStudio, SitePoint, Axios, 9to5Mac, arXiv papers, and vendor blog; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
