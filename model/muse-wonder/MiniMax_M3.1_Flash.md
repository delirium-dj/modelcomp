# Muse Wonder — findings by MiniMax M3.1 Flash

- Source: Meta (`muse-wonder-1.0`)
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder (Muse Wonder 1.0) — Meta's frontier agent model that *is* callable via API; the larger sibling is Muse Wonder Full (separate folder). Not a tier alias of the Full model: Meta ships two distinct weights with separate benchmark columns.
- **Short description:** Meta Superintelligence Labs' first-party frontier model for personal and professional agents (Active Memory + Active Focus) and long-horizon coding, released 2026-10-12. Available pay-per-token on the Meta Model API, on OpenRouter and on OpenCode Zen.
- **Provider / access:** Meta Model API (`muse-wonder-1.0`, OpenAI-SDK-compatible Chat Completions); OpenRouter (`meta/muse-wonder`); OpenCode Zen (`opencode/muse-wonder-1.0`, listed at $4/$20 with 1.0M context); models.dev entry `meta/muse-wonder-1.0`. Chat Completions (not the Responses API).
- **Release / knowledge:** 2026-10-12; knowledge cutoff not published by Meta.
- **IDs:** `muse-wonder-1.0` (Meta Model API), `meta/muse-wonder` (OpenRouter), `opencode/muse-wonder-1.0` (OpenCode Zen). No free/Contributor ID: Meta states Contributor mode **is not available** for Muse Wonder on the Model API (only Muse Spark 1.3/1.2 have it).
- **Context window:** 1M tokens (models.dev: 1,048,576; Artificial Analysis: 1.0M ≈ 1,573 A4 pages; Meta model card lists 1M). Max output not published.
- **Modalities:** input text, image, speech/audio, video; output text; reasoning model (all cited runs use max reasoning effort); tool calls, parallel sub-agents, computer use. No non-text output modality.
- **Pricing (as of 2026-10-30):** Standard mode $4.00 input / $0.20 cached input / $20.00 output per 1M tokens (Meta Model API pricing page; identical to Claude Opus 5.5). Web-search grounding $2.50 per 1,000 queries on top of token cost; no long-context premium. Rate limits 3,000 RPM / 4,000,000 TPM per team. Muse Code subscriptions default to Contributor mode (content may be used to train future Meta models).
- **Architecture:** proprietary; parameter count not disclosed by Meta or models.dev; trained at Meta's Prometheus datacenter, with post-training focused on agentic, memory and long-horizon coding behaviour.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0-AA: **52.0%** (Meta model card, max effort; Artificial Analysis launch article: 33% → 52% vs Muse Spark 1.3 max — level with Claude Fable 5.1 at 52.0%, behind GPT-6 Astra 59.1% and Opus 5.5 59.6%)
- AutomationBench-AA: **68%** (Artificial Analysis — the independent run; Meta's own model card lists a different AutomationBench figure of 39.1 for this model, a harness/scale difference, see agreement notes)
- OSWorld V2.1: **72.6%** partial (Meta model card) — behind Opus 5.5 81.8%, Fable 5.1 80.7%, GPT-6 Astra 75.8%
- Harvey LAB-AA (legal agent work): **10.0%** (Meta model card) vs Opus 5.5 4.2% — the absolute level is low for every model in that row (best is Muse Wonder Full at 13.1%)
- MemoryBench: **85.6%** (Meta-internal, LLM-judged) vs Opus 5.5 81.5%, GPT-6 Astra 81.4%
- Artificial Analysis Coding Agent Index: **63** (max effort, measured in Muse Code) vs Muse Wonder Full 68, Sonnet 5.5 max 68, Opus 5.5 max 66; Muse Spark 1.3 scored 54
- Vals Finance Agent V2: **56.6%** (Meta model card) vs Opus 5.5 58.6%, GPT-6 Astra 53.5%
- JobBench: **70.5%** (Meta model card) vs Opus 5.5 75.4%, GPT-6 Astra 66.1%
- GDPval-AA v2.1 / AA-Briefcase Elo: no verified public score found for this model at launch (the 1857 / 1729 Elo figures in circulation belong to Muse Wonder Full)
- Tau3-Banking / Tau2-Bench: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **52 (v4.3, max, at launch — rank #9 of 219)** / **43 (v5.0 on the current model page, class median 38)**. The v5.0 methodology (published 2026-10-27, largely private datasets) is the live number; launch-day articles quote the v4.3 value
- AA-Omniscience: **25** with **hallucination rate 27%** (Artificial Analysis) — among the lowest hallucination rates measured; knowledge recall is the weak spot (Opus 5.5 scores 46)
- LiveBench 2.0: **74.2** (livebench.ai leaderboard — Muse Wonder 1.0, behind GPT-6.1 Terra 77.8, ahead of DeepSeek V4.1 Flash 1017 at 74.0)
- Personal Superintelligence Index (Meta-authored composite): **54.3%** vs Opus 5.5 55.2%, Muse Wonder Full 59.1%, Fable 5.1 49.9%, GPT-6 Astra 45.6%
- HealthBench Pro: **60.5%** (Meta model card) vs Opus 5.5 65.6%, GPT-6 Astra 65.3%
- CritPt / SciCode / HLE / GPQA Diamond: no verified public score found for this exact model (the SciCode 63% and CritPt 33% figures in Artificial Analysis's launch coverage belong to Muse Wonder Full)

Coding:

- DeepSWE 1.1 (long-horizon coding): **78.8%** (Meta model card, max — measured by third party Datacurve per Meta's footnote) vs Opus 5.5 74.2%, GPT-6 Astra 74.1%, Fable 5.1 67.4%
- SWE-Marathon (ultra-long-horizon engineering): **53.1%** (Meta model card, source Abundant AI; Meta warns the competitor rows ran in different harnesses — Codex / Claude Code — so it is not a common-harness comparison) vs Opus 5.5 46.3%
- ProgramBench (from-scratch programming): **50.0%** (Meta model card) vs Opus 5.5 70.5% — the widest gap on Meta's card (−20.5)
- Terminal-Bench 4.0-AA: **52.0%** (see agentic section)
- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode: no verified public score found for this exact model (a modelled "Vals SWE-bench" estimate ≈52–59% with ±5.7 CI published by benchgap is an extrapolation, not a measurement, and is not treated as a score)

Long context:

- 1M context window is vendor-documented (Meta card, models.dev 1,048,576, AA 1.0M), but **no long-context retrieval benchmark (MRCR / RULER / GraphWalks) was published for Muse Wonder** — no verified long-context retrieval figure found.

### Normalized scores (1–100)

- **Tool use: 87/100.** Frontier-adjacent agent profile: Terminal-Bench 4.0 52.0% (up 19 points over Muse Spark 1.3), AutomationBench-AA 68% on Artificial Analysis's harness, AA Coding Agent Index 63 (level with the Claude Code + Sonnet 5.5 group), MemoryBench 85.6%, Harvey LAB-AA 10.0% vs Opus 5.5's 4.2%. Capped below the 90–100 band by no published Tau3/Tau2 or GDPval Elo for this model, OSWorld at 72.6% (9.2 points behind Opus 5.5), and Meta's own card showing 9 losses to Opus 5.5 out of 14 rows.
- **Reasoning: 78/100.** AA Intelligence Index 52 at max on v4.3 (#9 of 219 at launch) and 43 on the current v5.0 methodology; LiveBench 2.0 74.2; HealthBench Pro 60.5% and Personal Superintelligence Index 54.3% both trail Opus 5.5. Capped by knowledge recall — AA-Omniscience 25 vs Opus 5.5 46 — mitigated by a low 27% hallucination rate.
- **Context window: 95/100.** 1M tokens confirmed by three sources (Meta pricing table, models.dev 1,048,576, Artificial Analysis 1.0M ≈ 1,573 A4 pages) — top of the ≥1M tier band. Not 100 because no ≥98% retrieval-at-512K+ measurement exists for this model.
- **Multimodal: 92/100.** Input covers text, image, audio/speech and video with text output (Meta docs + Artificial Analysis) — audio-in puts it in the 90–100 band; capped below the ceiling by the absence of any published vision/audio benchmark and of non-text output.
- **Coding: 88/100.** DeepSWE 1.1 78.8% clears the ≥74% frontier reference and beats Opus 5.5 (74.2) on a third-party run, SWE-Marathon 53.1% is ahead of Opus 5.5 (46.3), Terminal-Bench 4.0 52.0% and LiveBench 2.0 74.2% are solid. Capped by ProgramBench at 50.0% (vs Opus 5.5 70.5%) and the absence of any public SWE-bench Verified / LiveCodeBench figure.
- **Cost efficiency: 58/100.** $4 input / $20 output per 1M is the same list price as Claude Opus 5.5 and about double GPT-6.1 Sol ($2/$10); Artificial Analysis measures $4.52 per Intelligence Index task on v4.3 (and $6.95 on the current v5.0 mix), mid-range among frontier models. Mitigating factors: 146.6 output tokens/second (rank #31/196 in class) and no long-context premium; penalising factors: no free or Contributor tier (Meta does not offer Contributor mode for Muse Wonder), premium price with no cheaper route, and a verbose 110M output tokens across the index run.
- **Overall Score: 88/100.** Half-up mean of the five quality dims (87 + 78 + 95 + 92 + 88) / 5 = 88. Best fit: long-horizon coding agents and long-running professional workflows where DeepSWE/SWE-Marathon strength pays off; weaker fit for knowledge-heavy retrieval, computer use, or budget-sensitive workloads where Claude Opus 5.5 / GPT-6.1 Sol dominate at equal or lower cost.

### Agreement notes (conflicting readings)

- **Index version drift:** Artificial Analysis scored Muse Wonder 52 on Intelligence Index v4.3 at launch (#9 of 219) and shows 43 on the current v5.0 model page (class median 38). Both are cited; the v5 figure is the live one.
- **AutomationBench:** Artificial Analysis reports 68% for this model, while Meta's model card carries 39.1 on its own AutomationBench row (Muse Wonder Full 45.4, Opus 5.5 41.2) — different harnesses/scales, not reconciled by either party.
- **Cost per task:** $4.52 (v4.3 launch article) vs $6.95 (current v5.0 model page) for the same model — the index redefinition changed the task mix.
- **Vendor-authored rows:** MemoryBench (LLM-judged), Personal Superintelligence Index and the OSWorld "partial" variant are Meta-internal; Meta's limitations section concedes competitor runs are "best-effort" and that prompts/tools/runtime may favour the headline model. The DeepSWE row is the cleanest (third-party Datacurve run for both models); SWE-Marathon mixes harnesses.
- **Early reception:** Hacker News and independent testers report real-world gaps versus Opus 5.5 (image-to-HTML quality, rendering artifacts) — anecdotal, not benchmark evidence.
- **Access caveats:** OpenCode Zen lists only the paid $4/$20 route; Meta does not offer Contributor mode for Muse Wonder, so there is no free/cheap path to this model.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax-m3.1-flash-preview)** — 2026-10-30
- Method: public internet research (Meta dev model page and Model API pricing/rate-limits docs, Meta Research blog, Artificial Analysis model page + launch article, livebench.ai leaderboard, models.dev, Mastra/Zen model listings, MindStudio benchmark analysis, DEV Community model-card row-by-row); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Wonder.md`, using the same headings.
