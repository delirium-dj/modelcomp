# Muse Wonder Full — findings by Ling 3.2 Flash

- Source: Meta (`muse-wonder-full-1.0`)
- Date: 2026-11-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder Full — subscription-only tier (Muse Code Power/Maximum); no free-tier wording applies, no free API ID exists for this variant
- **Short description:** Meta's top proprietary "frontier" reasoning model of the Muse Wonder series (Meta Superintelligence Labs, codename Watermelon), built for long-running agentic coding and professional/personal agent work; strongest verified rows are DeepSWE 1.1 and SWE-Marathon. Flag: "Full" is the larger variant of Muse Wonder 1.0 (`muse-wonder-1.0`); max reasoning effort does not convert the standard API model into Full.
- **Provider / access:** Meta Muse Code subscription only (catalog ID `muse-wonder-full-1.0`); NOT on Meta Model API, OpenRouter, OpenCode Zen/Console (Zen lists only paid `muse-wonder-1.0`), models.dev, or HuggingFace. No Chat Completions/Responses API surface exists for this ID (the standard `muse-wonder-1.0` supports Responses/Chat Completions/Messages formats).
- **Release / knowledge:** 2026-10-12 release (Meta launch); knowledge cutoff not disclosed by Meta
- **IDs:** `meta/muse-wonder-full-1.0` (Meta developer catalog only; **no Free ID exists on Zen** — OpenCode/Console's Meta rows are `muse-wonder-1.0` paid and Spark rows; no `-free` variant for Full)
- **Context window:** 1M total (1,048,576 tokens verified via Meta developer docs for the series + AA model page + BenchLM + kingy.ai; max output tokens not disclosed by Meta for this ID; aggregator rows show 943,718 out for the sibling standard ID only)
- **Modalities:** text/image/audio(speech)/video in (AA model page; Meta model card), PDF in per Meta developer docs (verified for the API sibling); text out only; reasoning yes (minimal→max efforts; Full rows reported at max, SWE-Marathon at xhigh); tool calls yes (Muse Code agent, coding-agent index); JSON/structured output verified on `muse-wonder-1.0` (models.dev/Requesty row), Full's own API surface unpublished
- **Pricing (as of 2026-11-07):** no per-token price published for this ID; access only via Muse Code Power Usage $50/mo or Maximum Usage $200/mo (Meta dev page, rechecked 2026-11-06 via kingy.ai); Free: none. Privacy caveat: Muse Code subscriptions default to Contributor mode (prompts/code/files/responses may train future Meta models; opt-out is forward-only); no per-token Standard-mode API for Full; Muse Confidential VM announced but not released; standard-ID context is not surcharged.
- **Architecture:** proprietary, closed weights; params total/active, dense-vs-MoE and license: not disclosed (BenchLM/DataLearner/kingy.ai); trained at Meta's gigawatt-scale Prometheus data center (Ohio) with fresh large-scale pretraining + RL

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found** (only Terminal-Bench 4.0 exists for this ID: 57.1% max on Meta launch card; ~57% AA v4.3 run)
- Tau3-Banking / Tau2-Bench: **no verified public score found** (τ³-Banking 52% exists only for the different ID Muse Spark 1.3 (max), AA — excluded)
- GDPval-AA: **1857 Elo** (AA GDPval-AA v2.1, max effort; #2; +176 Elo vs Spark 1.3's 1681, AA launch article)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
  Reasoning / knowledge:
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found** (HLE is inside the AA Index composite only; no standalone row for this ID)
- LCR / MLCR: **no verified public score found**
- CritPt: **33%** (AA CritPt leaderboard at max effort, #1; AA launch article via The Decoder/aihot mirrors; AA page flags CritPt/SciCode "under review" per secondary coverage)
- Artificial Analysis Intelligence Index / BenchLM overall: AA Intelligence Index v4.3 **56** (55.8 v4.3.2 snapshot, max effort; AA page rank 4 of 699, OfficeChai reported #3 at launch, DataLearner cohort 2/32; AA v5.0 page now shows 50 vs median 30) / BenchLM **68.96–69.4 / #18 of 216 (Estimated)** on profile, **#1 of 11 Meta models** on BenchLM Meta leaderboard at 69.4 (BenchAlign v5.8, 2026-11-05); a BenchLM compare page shows 74.95/#12 Estimated — version conflict noted
- Omniscience Accuracy / Hallucination Rate: **30 / 23%** (AA-Omniscience, AA v4.3 launch article; hallucination 23% = 2nd-lowest among index≥45 models, behind only Gemini 4 Argon (high) 15%)
  Coding:
- SWE-bench Verified / SWE-Pro: **no verified public score found** for this ID (an unverified secondary snippet mentions SWE-bench Multimodal 47.29% without harness/rank — excluded)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **63%** (AA SciCode run, max; #3, AA launch article)
- Vibe Code Bench: **no verified public score found** (Vibe Code Bench rows exist only for the standard `muse-wonder-1.0` ID — excluded)
- DeepSWE / Coding Index / other: DeepSWE 1.1 **79.0%** (#1/99 DataLearner; BenchLM best-verified row; Meta card; independent third-party runs per Meta dev page); SWE-Marathon **57.5%** (xhigh, #2/9); ProgramBench **59.0** (#1/2 DataLearner, vs Opus 5.5 70.5); Bug Hunt Bench **42.0 fixes** (BenchLM); AA Coding Agents Index **68** (Muse Code + Full at max, ties Claude Code+Sonnet 5.5, above Opus 5.5 66); Terminal-Bench 4.0-AA **57.1%** (#11/104 DataLearner)
  Long context:
- no long-context retrieval reported (no MRCR/RULER/GraphWalks row for this ID; Meta's MemoryBench 85.5% is internal, ~64K–100K-token conversations per kingy.ai, not a 512K+ retrieval proof)

### Normalized scores (1-100)

- **Tool use: 75/100.** Evidence: GDPval-AA 1857 Elo ≥1750 frontier marker (#2), AA AutomationBench-AA 71% #3 and AA-Briefcase 1729 Elo #3 (AA v4.3), vendor AutomationBench-AA 45.4%, OSWorld V2.1 78.4 partial / 39.4 binary, JobBench 75.3 #1/2, TB4.0 57.1%. Capped by: no verified TB2.1 or Tau3-Banking row, vendor AutomationBench-AA only 45.4%, OSWorld binary 39.4%, MemoryBench is Meta-internal.
- **Reasoning: 60/100.** Evidence: AA Index 56 max (rank 4/699; #3 at launch cut), CritPt 33% #1, SciCode 63% #3, ProofBench 94/100 of 100 (Vals AI via press), Vals Index 66.79% / 64.57 #5 (vals.ai home 2026-11-05; launch press), BenchLM #1-of-Meta 69.4. Capped by: index <60 frontier marker, AA-Omniscience accuracy only 30, and zero verified GPQA/HLE/LCR standalone rows.
- **Context window: 95/100.** >=1M verified tier (95–100): 1,048,576 confirmed across Meta dev docs, AA, BenchLM, DataLearner, kingy.ai; 100 withheld because no >=98% retrieval-at-512K+ evidence (no MRCR/RULER/GraphWalks).
- **Multimodal: 90/100.** +video/PDF +audio(speech) +image input all verified, text-only output (90–100 band floor); no image/audio/video generation out, no audio-out.
- **Coding: 84/100.** Frontier-band DeepSWE 1.1 79.0% (≥74, #1/99), SciCode 63% (≥55), SWE-Marathon 57.5% leading, AA Coding Agents Index 68 tied-best, Bug Hunt 42 fixes. Capped by: TB4.0 57.1% mid-band, ProgramBench 59.0 well behind Opus 5.5 70.5, no SWE-bench Verified/SWE-Pro/LiveCodeBench/Vibe Code Bench rows for this exact ID.
- **Cost efficiency: 60/100.** Evaluated tier is subscription-only ($50/$200 per month, no public $/1M token rate for this ID), so the $-anchors ($0=100 … $3/$15≈60) cannot be applied directly; 60 = mid-band proxy on the $3/$15 anchor, capped by zero per-token transparency, AA "cost per Intelligence Index task unknown", BenchLM "API rate not published", and Contributor-mode training default on subscriptions.
- **Overall Score: 80.8/100.** Mean of the five non-cost dims (75+60+95+90+84)/5, half-up at 1 decimal; cost efficiency excluded per v4 formula. Best fit: Muse Code Power/Maximum subscribers running long-horizon repo work (DeepSWE/SWE-Marathon leaders) who accept subscription-only access, no API, and Contributor-mode data terms; API-integration teams must use the standard `muse-wonder-1.0` instead.

---

## Signature

- Provided by: **Ling 3.2 Flash (ling-3.2-flash)** — 2026-11-07
- Method: fresh public web research only — Meta dev.meta.ai models/pricing pages and launch model card (verbatim via kingy.ai), Artificial Analysis model page + Intelligence Index v4.3 launch article (via The Decoder/aihot/Virxact mirrors, OfficeChai, TechBytes), BenchLM Muse Wonder Full profile + Meta leaderboard, DataLearner Full analysis, vals.ai home, Vals AI ProofBench via press, OpenCode Console model docs, models.dev and OpenRouter APIs, HuggingFace API; every raw number carries source + rank/harness where available, harness/version conflicts are flagged inline; normalized 1–100 scores are my interpretations under the v4 formula, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
