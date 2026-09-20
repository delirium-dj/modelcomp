# Claude Fable 5.1 — findings by Big Pickle

- Source: Anthropic (`claude-fable-5.1`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** Anthropic's Sep 2026 flagship multidisciplinary reasoning model — the Fable 5 successor that leads LiveCodeBench, MMMU-Pro, and the RSI autonomous R&D index. Handles multi-stage enterprise workflows and ambitious coding projects with autonomous task delegation.
- **Provider / access:** Claude API (`claude-fable-5.1`), claude.ai, Claude Code; Anthropic Messages API + Agents SDK.
- **Release / knowledge:** 2026-09-01 (aireleasetracker, vals.ai).
- **IDs:** `claude-fable-5.1` (Anthropic; proprietary).
- **Context window:** 1,000,000 total / 128,000 max output (vals.ai; bkrsna.dev lists 1M / 128K).
- **Modalities:** text + image input; text output; vision-native (rebuild web apps from screenshots per Fable 5 launch reports); tool calls; reasoning on by default with effort control.
- **Pricing (as of 2026-09-20):** $10.00 in / $50.00 out per 1M; **$0.25 cached input** — a 75% cache-read price cut vs Opus 5's $0.50 (bkrsna.dev). Premium tier, no free API tier.
- **Architecture:** Proprietary, undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85.02%** (#2/63 on Vals, behind GPT-5.6 Sol 85.77%; up from Fable 5's 80.52%). Counting fallback assists as failures: 79.03%.
- RSI Index (autonomous R&D): **#1 at 35.03%**, ahead of Opus 5 (32.10%), at ~21% lower cost (Vals, 2026-09-04).
- ProgramBench: **#1/45** (Vals); SkillsBench #5/33; SRE Bench #2/7.
- Vibe Code Bench v1.1: **90.26%** (#2/93, within noise of Fable 5's 90.35%) (Vals).
- Finance Agent v2: #6/58; MedScribe: **#1/92**; Tax Agent Bench: **#1/18** (Vals — agentic professional rows).
- Frontier-Bench (agentic code): **58.2%** (bkrsna.dev head-to-head vs Opus 5 61.4%).
- Tau3-Banking / Claw-Eval / MCP-Atlas: **no verified public score found**.

Reasoning / knowledge:

- MMLU-Pro: **92.38%** (#1/138) (Vals).
- GPQA Diamond: **#9/138** (Vals); bkrsna.dev head-to-head lists 79.4% (conservative harness) — take Vals rank as primary signal, treat both as high-80s-class evidence.
- HLE: Fable 5 system card 59.0%; Fable 5.1 ~38.4% on bkrsna's conservative eval (missing on Vals page) — treat HLE as ~40-59 band across harnesses.
- Legal Research Bench: **#3/58**; EMB: **76.67%** (#1/55) (Vals).
- RSI / GDPval-AA dual strong (RSI #1).

Coding:

- LiveCodeBench: **90.52%** (#1/143) (Vals).
- Terminal-Bench 2.1: **85.02%** (#2/63) (Vals).
- Vibe Code Bench: **90.26%** (#2/93); Code Migration #4/57 (Vals).
- SWE-bench Verified: **67.8%** (bkrsna.dev head-to-head; Opus 5 72.1%) — Vals row pending; Fable 5's own card reported 95.0% on its harness, so treat Verified as 68-95 band depending on harness.
- SWE-bench Pro: Fable 5 reported **80.3%** (launch card, 11 points ahead of Opus 4.8).

Long context:

- 1M window advertised (vale.ai spec); MRCR / RULER / GraphWalks: **no verified public retrieval score found**.

Multimodal:

- MMMU-Pro: **90.64%** (#1/93) (Vals); vision-native capabilities flagged in press (completed Pokémon FireRed with vision-only per Fable 5 launch reporting).

### Normalized scores (1–100)

- **Tool use: 90/100.** Terminal-Bench 2.1 85%, RSI-Index #1, and #1 rows across professional agentic benches (MedScribe, Tax Agent) make it elite; Frontier-Bench 58.2% trails Opus 5, capping it.
- **Reasoning: 90/100.** MMLU-Pro #1 and GPQA Diamond top-10 rank confirm top-tier reasoning; the wide HLE harness spread (40–59%) keeps it below perfect.
- **Context window: 85/100.** 1M / 128K tier with no published long-context retrieval eval — spec is there, verification is pending.
- **Multimodal: 86/100.** MMMU-Pro #1 (90.64%) and strong vision-native reporting; text+image only, no audio/video — just short of omni models.
- **Coding: 92/100.** LiveCodeBench #1 (90.52%) and Vibe Code #2 (90.26%) are elite; SWE-bench Verified on conservative harness lags Opus 5, which keeps it short of 95+.
- **Cost efficiency: 60/100.** $10/$50 with $0.25 cache reads is premium-tier; the 75% cache discount helps long agents but headline pricing is steep.
- **Overall Score: 89/100.** Mean of the five quality dims (90+90+85+86+92)/5 = 88.6 → 89. Anthropic's best-rounded multidisciplinary flagship — ideal when top-end quality, vision, and professional-domain agent work justify premium pricing.

---

## Signature

- Provided by: **Big Pickle (`opencode/big-pickle`)** — 2026-09-20
- Method: public web research (vals.ai, Anthropic Fable 5 system card reporting, lmmarketcap, aireleasetracker, bkrsna.dev head-to-head); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.