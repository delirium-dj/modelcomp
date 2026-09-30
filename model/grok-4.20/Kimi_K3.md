# Grok 4.20 — findings by Kimi K3

- Source: xAI / Grok 4.20 (`grok-4.20`, incl. `grok-4.20-0309-reasoning` HF artifact)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.20
- **Short description:** xAI's mid-2026 flagship reasoning model — a four-agent parallel system where specialized agents debate in real time (per launch coverage). Beta 2026-02-17, full release with API access in March 2026; since superseded in xAI's lineup by the 4.5/4.6/4.7 line. Broad assistant positioning rather than a narrow coding checkpoint.
- **Provider / access:** xAI API (Chat Completions-compatible); SuperGrok (~$30/mo) and X Premium+ subscriptions. BenchmarkList lists it API-only. **Not on OpenCode Zen** (Zen carries grok-4.5/4.6/4.7/grok-build-0.1, no 4.20 ID).
- **Release / knowledge:** beta 2026-02-17 (nextbigfuture, aireleasetracker); model card 2026-04-07 (`data.x.ai/2026-04-07-grok-4-20-model-card.pdf`, cited by BenchmarkList).
- **IDs:** `xai/grok-4.20` (xAI API); HF artifact `xai/grok-4.20-0309-reasoning` exists as an eval source. No Zen ID.
- **Context window:** 2,000,000 tokens (Gert Labs ranking metadata; digitalapplied full-release coverage).
- **Modalities:** text + image in (verified via MMMU-Pro 83.5%, Design Arena 1249, JMed48k vision-language eval); text out; tool calls; reasoning (multi-agent "Heavy"-style mode).
- **Pricing (as of 2026-09-25):** $1.25/1M input, $2.50/1M output (BenchmarkList model page). Launch coverage noted ~60% price cuts vs the preceding tier.
- **Architecture:** proprietary; four-agent parallel inference system (natural20/aimlapi launch coverage); parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Tau2-Bench Telecom: **96.5%** (Artificial Analysis, rank 11/332, 97th pct)
- Terminal-Bench Hard (AA subset): **40.9%** (91st pct)
- GDPval-AA: **1171 Elo** (AA, rank 66/340, 81st pct)
- Terminal-Bench 2.1: **44.2%** (vals.ai, rank 76/182)
- APEX-Agents-AA: **14.2% Pass@1** (rank 26/33) — weak long-horizon professional tasks
- ClawProBench: **43.04** (rank 44/48, 9th pct) / WildClawBench: **19.3%** (36/36) / Long-Horizon Terminal-Bench: **0.1** (21/21) — sustained agentic loops are a weakness
- Claw Bench: **92 points** (rank 16/37)

Reasoning / knowledge:

- GPQA Diamond: **88.6%** (vals.ai) / **91.1%** (Epoch run, 95th pct)
- HLE: **34.5%** (90th pct of 466)
- AIME: **96.5%** (94th pct)
- MMLU-Pro: **86.3%**
- Artificial Analysis Intelligence Index: **38** (rank 69/418, 84th pct)
- ARC-AGI-2: **65.1%** ($0.92/task); ARC-AGI-1: 89.5%
- LiveBench: **69.0%** (12th pct — weak vs current mid-2026 peers)

Coding:

- SWE-bench Verified: **72.2%** (vals.ai, rank 42/72)
- LiveCodeBench: **84.3%** (vals.ai, 75th pct)
- SciCode: **45.6%** (AA verified, 88th pct)
- IOI: **30.2%** (70th pct); ALE-Bench: 1150.28 (82nd pct); BLXBench: 79.1%
- Vibe Code Bench v1.1: **4.1%** (13th pct — weak)

Long context:

- AA-LCR: **62.3%** (67th pct); Context Arena: 28.8% / 14.5% (weak); 2M window verified by tracker metadata.

Multimodal:

- MMMU-Pro: **83.5%** (69th pct); Design Arena: 1249 Elo (72nd pct); Vals Multimodal Index: 39.1% (4th pct — weak)

### Normalized scores (1–100)

> Methodology: `../../model-comparison.md`. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 68/100.** Tau2 Telecom 96.5% (97th pct) and GDPval 1171 are strong-to-mid; dragged down hard by sustained-agent benchmarks (APEX 14.2%, WildClaw 19.3%, LH-TB 0.1, ClawPro 9th pct) — short tool calls good, long agentic loops bad.
- **Reasoning: 82/100.** GPQA ~88.6–91.1% and AIME 96.5% approach frontier; HLE 34.5% is below the 40%+ frontier reference and AA Index 38 is only upper-mid → high-mid, not 90s.
- **Context window: 95/100.** Verified 2M-token tier (95–100 band); AA-LCR 62.3% is decent but far from the ≥98% retrieval bar needed for 100.
- **Multimodal: 68/100.** Image input verified across three independent evals (60–70 band); no audio/video input, no non-text output; the 4th-percentile Vals Multimodal Index blocks a higher score.
- **Coding: 75/100.** SWE-bench Verified 72.2% + LiveCodeBench 84.3% + SciCode 45.6% (88th pct) sit just under the frontier reference set; Vibe Code Bench 4.1% and TB2.1 44.2% cap it below 80.
- **Cost efficiency: 91/100.** $1.25/$2.50 per 1M — between the $0.60/$2.20 (≈92) and $1.25/$4.25 (≈88) reference points, with unusually cheap output tokens.
- **Overall Score: 77.6/100.** Mean of (68 + 82 + 95 + 68 + 75)/5 = 77.6. Best fit: cheap, reasoning-strong API workhorse with a huge 2M window for Q&A/batch analysis; avoid for long-horizon autonomous agent loops and multimodal-heavy work.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-25
- Method: public internet research (BenchmarkList model page aggregating vals.ai, Artificial Analysis, Epoch, ARC Prize, ClawBench, LMArena and other public eval sources; grokipedia / nextbigfuture / digitalapplied coverage for release facts). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
