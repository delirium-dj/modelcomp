# Grok 4.20 — findings by Kimi K3

- Source: xAI / Grok 4.20 (`grok-4.20`, incl. `grok-4.20-0309-reasoning` HF artifact)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.20
- **Short description:** xAI's mid-2026 flagship reasoning model — a four-agent parallel system where specialized agents debate in real time (per launch coverage). Beta 2026-02-17, full release with API access in March 2026; since superseded in xAI's lineup by the 4.5/4.6/4.7 line. Broad assistant positioning rather than a narrow coding checkpoint.
- **Provider / access:** xAI API (Chat Completions-compatible); SuperGrok (~$30/mo) and X Premium+ subscriptions. **Not on OpenCode Zen** (Zen carries grok-4.5/4.6/4.7/grok-build-0.1, no 4.20 ID).
- **Release / knowledge:** beta 2026-02-17 (nextbigfuture, aireleasetracker); model card 2026-04-07 (`data.x.ai/2026-04-07-grok-4-20-model-card.pdf`, cited by BenchmarkList); the dated API variant `grok-4.20-0309-reasoning` is listed in xAI's official docs (docs.x.ai/docs/models).
- **IDs:** `xai/grok-4.20` (xAI API); dated artifact `grok-4.20-0309-reasoning` (xAI docs). No Zen ID.
- **Context window:** **CONFLICT, revised this pass:** tracker metadata claimed 2,000,000 tokens (Gert Labs / digitalapplied), but xAI's official docs table lists the dated `grok-4.20-0309-reasoning` endpoint at **1M** context — the official listing governs; the 2M claim is retained as unverified.
- **Modalities:** text + image in (verified via MMMU-Pro 83.5%, Design Arena 1249, JMed48k vision-language eval); text out; tool calls; reasoning (multi-agent "Heavy"-style mode). Docs note logprobs/top_logprobs unsupported on grok-4.20+.
- **Pricing (as of 2026-10-11):** $1.25/M input, $2.50/M output below 200K prompt; doubles to $2.50/$5.00 at ≥200K (whole-request rate) (docs.x.ai/docs/models official pricing table — matches the BenchmarkList figure).
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

- AA-LCR: **62.3%** (67th pct); Context Arena: 28.8% / 14.5% (weak); the official docs list the dated variant at 1M — corrected assumption.

Multimodal:

- MMMU-Pro: **83.5%** (69th pct); Design Arena: 1249 Elo (72nd pct); Vals Multimodal Index: 39.1% (4th pct — weak)

### Normalized scores (1–100)

> Methodology: `../../model-comparison.md`. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 68/100.** Unchanged: Tau2 Telecom 96.5% (97th pct) strong, dragged by sustained-agent weaknesses (APEX 14.2%, WildClaw 19.3%, LH-TB 0.1).
- **Reasoning: 82/100.** Unchanged: GPQA ~88.6–91.1% and AIME 96.5% approach frontier; HLE 34.5% below the 40%+ frontier reference; AA Index 38 upper-mid.
- **Context window: 80/100.** Lowered from 95: the verified 2M claim did not survive the second pass — xAI's own docs list the dated endpoint at 1M, and measured retrieval (AA-LCR 62.3%, weak Context Arena) is mid-band; scoring 1M-with-weak-retrieval band accordingly.
- **Multimodal: 68/100.** Unchanged: image input verified across three independent evals; no audio/video; the 4th-percentile Vals Multimodal Index blocks higher.
- **Coding: 75/100.** Unchanged: SWE-bench Verified 72.2% + LiveCodeBench 84.3% + SciCode 45.6% (88th pct); Vibe Code Bench 4.1% and TB2.1 44.2% cap it below 80.
- **Cost efficiency: 91/100.** Unchanged, now official-confirmed: $1.25/$2.50 per docs.x.ai, with unusually cheap output tokens.
- **Overall Score: 75/100.** Half-up mean of (68 + 82 + 80 + 68 + 75)/5 = 74.6 → 75 (from 77.6 first pass — driven by the corrected context-window evidence). Best fit: cheap, reasoning-strong API workhorse for Q&A/batch analysis; avoid for long-horizon autonomous agent loops and multimodal-heavy work.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-11
- Method: public internet research (BenchmarkList aggregation of vals.ai / Artificial Analysis / Epoch / ARC Prize / ClawBench / LMArena; official **docs.x.ai/docs/models** pricing-and-model table confirming $1.25/$2.50 and listing the dated endpoint at 1M context — driving the 2M→1M correction; grokipedia / nextbigfuture / digitalapplied for release facts). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
