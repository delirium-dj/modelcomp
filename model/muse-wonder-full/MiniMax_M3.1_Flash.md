# Muse Wonder Full — findings by MiniMax M3.1 Flash

- Source: Meta (`muse-wonder-full`)
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder Full (Meta's frontier tier of the Muse Wonder series; the API-served sibling is `muse-wonder-1.0` = "Muse Wonder"). Distinct model from Muse Wonder — separate weights, separate benchmark column in Meta's own model card, separate folder here.
- **Short description:** Meta Superintelligence Labs' most capable agent model, released 2026-10-12 alongside Muse Wonder. Built for long-running personal/professional agents (Active Memory + Active Focus) and frontier long-horizon coding; it is the only tier with no pay-per-token API — access is a Muse Code subscription.
- **Provider / access:** Meta Model API (`muse-wonder-full-1.0`, OpenAI-SDK-compatible Chat Completions) — **subscription-gated, no public per-token price**; Muse Code CLI/agent (Power $50/mo, Maximum $200/mo plans only). `meta/muse-wonder-full` in models.dev; `muse@muse-wonder-full-1.0` as a provider-prefixed route. No `opencode/<id>` Zen route found for the Full tier (Zen lists Muse Wonder 1.0 at $4/$20).
- **Release / knowledge:** 2026-10-12 (Meta blog + dev.meta.ai model page); knowledge cutoff not published.
- **IDs:** `meta/muse-wonder-full`, `muse-wonder-full-1.0` (Meta Model API / Muse Code). No free ID on any platform.
- **Context window:** 1M tokens (~1,000,000; Meta pricing table + Artificial Analysis model page both state 1.0M ≈ 1,500 A4 pages). Max output not published.
- **Modalities:** input text, image, **audio/speech**, video; output text; reasoning model (max effort used in every cited benchmark run); tool calls / parallel sub-agent delegation and computer use are the headline use cases; no non-text output modality.
- **Pricing (as of 2026-10-30):** no per-token price (Meta's own pricing table lists `muse-wonder-full-1.0` with "—" for input/cached/output); bundled into Muse Code subscriptions — Power $50/month, Maximum $200/month. Therefore no Artificial Analysis "cost per task" figure exists for this model ("Muse Wonder Full is not priced per token"). Sibling Muse Wonder 1.0 = $4 / $0.20 cached / $20 per 1M tokens ($4.52 per Intelligence Index task).
- **Architecture:** proprietary; Meta has not disclosed parameter counts, active-parameter split or MoE topology. Trained at Meta's gigawatt-scale Prometheus datacenter; post-training focused on agentic, memory and long-horizon coding tasks (Active Memory / Active Focus design).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0-AA: **57%** (Artificial Analysis, all 66 tasks, mini-swe-agent harness, max effort — level with Gemini 4 Argon high; up from 33% for Muse Spark 1.3 max)
- GDPval-AA v2.1: **1857 Elo** (Artificial Analysis, **#2**; within CI of Claude Opus 5.5 1866 and Sonnet 5.5 1838)
- AA-Briefcase v1.1: **1729 Elo** (Artificial Analysis, **#3**)
- AutomationBench-AA: **71%** (Artificial Analysis, **#3**)
- OSWorld V2.1: **78.4%** (partial; Meta model card — below Opus 5.5 81% and Fable 5.1 80%, above GPT-6 Astra 75%)
- Harvey LAB-AA (legal agent work): **13.1%** (Meta model card; Opus 5.5 4.2% — Grok 4.7 19.6% per a third-party report, i.e. third-party ranking does not confirm Meta's lead)
- Artificial Analysis Coding Agent Index: **68** (max effort, measured in Muse Code — level with Claude Code + Sonnet 5.5 max at 68, above Opus 5.5 max at 66; Muse Spark 1.3 scored 54)
- MemoryBench (context retention): **85.5%** (Meta model card; third-party report cites ~85.1% for the Full tier vs ~81% for competitors)
- Tau3-Banking / Tau2-Bench: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **56 (v4.3, max, at release)** / **50 (v5.0, current model page, rank #15/86 in class)** — the two index versions disagree in absolute value because v5 (published 2026-10-27) added 2 benchmarks and 3 upgrades and moved to mostly private datasets
- CritPt (physics reasoning): **33%** — **#1** (Artificial Analysis; nearest rivals 31–32%)
- GDP.pdf (professional document reasoning): **33%** — **#1**
- SciCode: **63%** — **#3** (Artificial Analysis)
- AA-Omniscience: **30** accuracy index, **hallucination rate 23%** (second-lowest among models scoring ≥45 on the index; Gemini 4 Argon high 15%). Knowledge is the acknowledged weak spot (Opus 5.5 scores 46)
- HLE / GPQA Diamond / LCR / MLCR: no verified public score found for this exact model
- Personal Superintelligence Index (Meta-authored composite): **59.1%** — ahead of Opus 5.5 55.2%, GPT-6 Astra 54.5%, Fable 5.1 49.9% (Meta-authored benchmark → directional only)
- Val index (professional tasks): **5th overall, 64.57%** (independent)

Coding:

- DeepSWE 1.1 (long-horizon coding): **79%** (Meta model card, max) — ahead of Opus 5.5 74.2%, GPT-6 Astra 74.1%; Muse Wonder 78.8%, Fable 5.1 67%
- SWE-Marathon (ultra-long-horizon engineering): **57.5%** (Meta model card, max) vs Opus 5.5 46.3%
- ProgramBench (from-scratch programming): **59.0%** (Meta model card, max)
- SWE-bench Verified / SWE-Pro / LiveCodeBench: no verified public score found for this exact model

Long context:

- 1M context window is vendor-documented, but **no long-context retrieval benchmark (MRCR / RULER / GraphWalks) was published for Muse Wonder Full** — no verified long-context retrieval figure found.

### Normalized scores (1–100)

- **Tool use: 90/100.** Frontier-tier agentic profile: GDPval-AA v2.1 1857 Elo (#2), AA-Briefcase 1729 (#3), AutomationBench-AA 71% (#3), AA Coding Agent Index 68 (level with Sonnet 5.5), Terminal-Bench 4.0 57% and OSWorld 78.4%. Capped below the 90–100 frontier band by no public Tau3/Tau2 tool-use numbers, OSWorld still behind Opus 5.5 (81%) and Fable 5.1 (80%), and a weak Harvey LAB-AA result (13.1%) whose third-party ranking is not reproduced by Meta's own chart.
- **Reasoning: 82/100.** AA Intelligence Index 56 at max on v4.3 (Opus 5.5 58) and 50 on the current v5.0 methodology (#15/86 in class); strong science reasoning (CritPt #1 at 33%, SciCode #3 at 63%). Capped by knowledge recall: AA-Omniscience 30 vs Opus 5.5 46, and no public GPQA Diamond / HLE for this model.
- **Context window: 95/100.** 1M tokens documented by Meta (pricing table) and confirmed by Artificial Analysis (1.0M ≈ 1,500 A4 pages) — top of the ≥1M tier band. Not scored 100 because no ≥98% retrieval-at-512K+ measurement (MRCR/RULER) exists for this model.
- **Multimodal: 92/100.** Input covers text, image, audio/speech and video with text output (Artifical Analysis + Meta docs) — audio-in pushes it into the 90–100 band; capped slightly below the ceiling because no non-text output modality and no measured vision/audio benchmark was published.
- **Coding: 91/100.** DeepSWE 1.1 79% clears the ≥74% frontier reference, SWE-Marathon 57.5% is well ahead of Opus 5.5 (46.3%), ProgramBench 59.0%, and AA Coding Agent Index 68 is at the top of the leaderboard group. Capped by the absence of any public SWE-bench Verified / LiveCodeBench figure and by Terminal-Bench 4.0 (57%) trailing Opus 5.5-class terminal agents on that single harness.
- **Cost efficiency: 55/100.** No per-token price at all — access only through Muse Code at $50/month (Power) or $200/month (Maximum), so the usual inverse-pricing scale cannot be applied directly and no AA cost-per-task figure exists. Scored mid-range for a frontier model: heavy subscription is affordable relative to per-token frontier APIs for sustained agent work, but there is no free or pay-per-token entry point, and the sibling Muse Wonder 1.0 already costs $4.52 per Intelligence Index task (mid-range among frontier models).
- **Overall Score: 90/100.** Half-up mean of the five quality dims (90 + 82 + 95 + 92 + 91) / 5 = 90. Best fit: long-horizon coding and personal/professional agent work inside Muse Code (its only access path), where it beats Opus 5.5 on DeepSWE and SWE-Marathon; less attractive when knowledge recall, multimodal breadth or open per-token pricing matter.

### Agreement notes (conflicting readings)

- **Index version drift:** Artificial Analysis scored the model 56 on Intelligence Index v4.3 at launch (2026-10-12) and 50 on v5.0 on the current model page (v5 published 2026-10-27, mostly private datasets). Both are cited; the v5 figure is the live one and is the reason for the #15/86 class rank, the v4.3 figure is what every launch-day article repeats.
- **Terminal-Bench:** Meta's own chart and AA's evaluation agree on ~57% for the Full tier at max effort, but Meta's launch table row for Terminal-Bench 4.0 cannot be reproduced outside Meta (the blog says "see our report"); the AA run is the citable independent number.
- **Legal agents:** Meta's chart shows the Full tier at 13.1% on Harvey's LAB vs 4.2% for Opus 5.5; a third-party report places Grok 4.7 higher (19.6%), and Meta's chart does not include that competitor — the lead is therefore not independently confirmed.
- **Demo quality:** independent testers reported visible rendering artifacts (flicker, clipping, shadow errors) in Muse Wonder output, and one unprompted refusal to discuss model lineage — no benchmark evidence either way, but it weakens confidence in the authoring-quality implication of the agentic scores.
- **Open access:** AA lists the model as "no publicly available API"; models.dev lists `meta/muse-wonder-full`; Meta's Model API pricing table lists `muse-wonder-full-1.0` without prices. Treated here as subscription-only with no pay-per-token route.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax-m3.1-flash-preview)** — 2026-10-30
- Method: public internet research (Meta dev model page, Meta Research blog, Artificial Analysis model page + launch article + Terminal-Bench 4.0 evaluation page, MindStudio benchmark analysis, DEV Community benchmark roundup, models.dev, Muse Code pricing page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Wonder.md`, using the same headings.
