# Grok 4.7 — findings by GLM 5.2 Coding

- Source: xAI (`grok-4.7`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.7
- **Short description:** xAI's flagship (2026-09-21), "most capable model for coding and knowledge work" — new, larger base model vs 4.6, longer RL run weighted toward many-hour tasks, better self-verification and long-context management; natively trained on the Grok Bot harness. Same $2/$6 price and speed as Grok 4.6. Musk's own yardstick: "roughly on par with Opus 5.0, not 5.1. Better in some ways, worse in others. We need to fix multimodal performance." ~2.1T parameters (Musk, July + Sept 14 posts).
- **Provider / access:** xAI Grok API (console.x.ai), Cursor, Grok Build (free tier at x.ai/build), third-party coding harnesses, model routers and clouds. Consumer Grok app / SuperGrok availability NOT confirmed in launch post.
- **Release / knowledge:** 2026-09-21 (after repeated slips: "4 weeks" Jul 24 → "3–4 weeks" Aug 12 → "10 days" Sep 1 → "few more days" Sep 11). Knowledge cutoff not stated in launch post.
- **IDs:** `xai/grok-4.7`; fast variant = same ID class with 2x speed at 2x price. Queue context: Grok 4.8 (2.5T, new C++ stack) finishing training, 4.9 planned, Grok 5 behind both.
- **Context window:** 500K tokens (xAI model docs per Geotoolbox — same as 4.6; not restated in launch post). Max output not re-verified this session.
- **Modalities:** text in / text out (launch post is coding/knowledge-work focused; Musk: "need to fix multimodal performance" — no native vision claims). Tool/harness: Grok Bot native, Cursor, Grok Build.
- **Pricing (as of 2026-10-09):** $2 / $6 per 1M in/out (same as 4.5/4.6); fast variant 2x output speed at 2x price ($4/$12 effective). Cheaper than Sol ($4/$20), Fable 5.1 ($10/$50).
- **Architecture:** new larger base (rumored ~2.1T MoE), trained partly on SpaceX engineering data (Musk claims); best-calibrated safeguards to date; invite-only red-team access for cyber partners.

### Raw benchmarks found

> Primary: xAI launch post 2026-09-21 (vendor table: Grok 4.7 xHigh vs Grok 4.6 High vs GPT-5.6 Sol Max vs Fable 5.1 Max). Effort levels differ across columns — noted per row.

Agent / tool use:

- Terminal-Bench 4.0 (multi-hour terminal): **37.6%** (xHigh) vs 4.6's 20.3%, Sol Max's 37.3%, Fable 5.1 Max's 57.9% — near-doubles predecessor, ties Sol, far below Fable.
- AA Briefcase v1.1 (multi-hour office work, Elo): **1,657** (xHigh) vs 4.6's 1,546, Sol's 1,487, Fable 5.1's 1,678.
- GDPval (professional knowledge work, Elo): **1,695** (xHigh) vs 4.6's 1,605; Fable 5.1 Max 1,735 leads, GPT-6 Astra Max 1,542 trails.
- EEBench (electrical engineering): **64.0%** — field leader vs 4.6's 53.0%, Sol's 39.4%, Fable 5.1's 56.4%.
- Harvey Legal Agent Benchmark: **19.6%** — huge lead vs 4.6's 15.8%, Sol's 2.5%, Fable 5.1's 6.7% (Gemini 3.8 Flash's 10.0% was the prior published leader).
- Claw-Eval / Toolathon / MCP-Atlas: no verified public score found.

Reasoning / knowledge:

- HealthBench Professional (clinical reasoning): **56.7%** vs 4.6's 48.5%, Sol's 60.5%, Fable 5.1's 62.1%.
- AA Intelligence Index: no verified 4.7 score found this session (4.5 was 4th at launch per Geotoolbox).
- GPQA / HLE / CritPt: no verified public score found for 4.7.

Coding:

- CursorBench 4.0 (longer-running coding): **46.3%** (xHigh) vs 4.6's 40.4%, Sol Max's 41.7%, Fable 5.1 Max's 51.8% — "at the frontier in price-performance" per xAI.
- DeepSWE v1.1: **71.0%** (high effort) vs 4.6's 65.2%, Sol Max's 72.7%, Fable 5.1 Max's 70.0%; frontier cluster context: Muse 1.3 75.4, Astra 74.1, 3.8 Flash 73.7.

Safety (secondary, xAI-run):

- HackerBench v0.3: only **3.3%** of risky dual-use prompts pass while rarely blocking legitimate security work — "highest safety" claim.
- LatchBio biosafety benchmark: **62.4%** — tops the benchmark.
- Strongest xAI model tested on refusals and jailbreak resistance.

Long context:

- 500K window (docs). Better long-context management claimed (qualitative). No MRCR/RULER score — no retrieval score found.

### Normalized scores (1–100)

> Derivation per `../../model-comparison.md` v4. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 89/100.** TB 4.0 37.6% (2x gen-jump, ties Sol at 1/3 its price), AA Briefcase 1,657 within 21 Elo of Fable 5.1 Max, GDPval 1,695 beats Astra Max's 1,542, Harvey Legal 19.6% nearly doubles the prior field leader — elite professional-agent tier; capped by Fable 5.1's clear TB 4.0 lead (57.9%) and no OSWorld/computer-use row.
- **Reasoning: 84/100.** HealthBench 56.7% (between Sol and Fable), EEBench 64.0% field leader, GDPval knowledge-work Elo near Fable; no GPQA/HLE/AA Index confirmations for 4.7 — strong upper-mid proof points, no flagship single-shot reasoning row.
- **Context window: 85/100.** 500K — half the 1M frontier tier; better long-context management is claimed but unscored; no retrieval benchmark.
- **Multimodal: 20/100.** Text-in/text-out per launch-post scope; Musk concedes multimodal needs fixing. Baseline score.
- **Coding: 88/100.** CursorBench 4.0 46.3% at $2/$6 = best published price-performance on that bench; DeepSWE 71.0% sits at the edge of the 71–75 frontier cluster; capped by Fable/Sol edges on both benches and no SWE-bench Verified/TB 2.1 rows.
- **Cost efficiency: 92/100.** $2/$6 with a free Grok Build entry point — the cheapest model in its own comparison table by 3x on output; only Gemini 3.8 Flash ($0.75/$3.75) and Luna-class models undercut it; fast variant 2x is fair priced; docked for no cached-input rate published this session.
- **Overall Score: 73/100.** (89 + 84 + 85 + 20 + 88) / 5 = 73.2 → 73. Best-fit: the price-performance pick for long-running coding and professional office/legal agent work when 500K context and text-only input suffice; Fable 5.1/Astra remain the ceiling for the hardest multi-hour terminal agency.

---

## Signature

- Provided by: **GLM 5.2 Coding (zai-org/glm-5.2-coding)** — 2026-10-09
- Method: independent public internet research (xAI launch post grok-4-7 primary; Geotoolbox dated timeline for release/params/roadmap context; Musk Sept 14 roadmap posts via TeslaNorth); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.