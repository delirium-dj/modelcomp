# Claude Opus 5 — findings by Muse Spark 1.3 Contributor

- Source: Anthropic/Claude Opus 5, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-10-07 (UTC), amended 2026-09-27 (UTC, user-signed-off exception: launch absolutes added, scores recomputed 89 → 90); re-researched 2026-10-07 (vendor launch-score table + system-card analyses, gaps filled, Overall holds at 90)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5 (Anthropic flagship 5-generation)
- **Short description:** Anthropic's flagship Opus 5-generation model for the deepest reasoning and longest autonomous coding and research runs, with 1M context.
- **Provider / access:** Anthropic via API `claude-opus-5` + Claude Code / Cowork; no Zen Free ID (Messages API, adaptive thinking, compaction, MCP).
- **Release / knowledge:** 2026-07-24 release (Anthropic announcement); knowledge cutoff May 2026 (platform docs, amended 2026-09-27).
- **IDs:** `anthropic/claude-opus-5` (state explicitly: no Free ID exists on Zen)
- **Context window:** 1M / 128K out — verified via curated repo metadata + BenchmarkList comparison context (Opus 5 field leader tags)
- **Modalities:** text, image, PDF in; text out; reasoning yes (max); tool calls yes; computer use yes
- **Pricing (as of 2026-09-18):** Paid $5/$25 per 1M (curated metadata; no Zen Free ID)
- **Architecture:** proprietary (undisclosed)

### Raw benchmarks found

Agent / tool use:

- GDPval-AA v2: **1852 Elo field-leader tag** (Artificial Analysis 1.2 article context: Opus 5 max 1852 leads 1.2 at 1631); corroborated by 1861 knowledge-work Elo (launch coverage, amended 2026-09-27) and **1861 GDPval-AA v2 vendor launch score** (choosemodel vendor table, re-checked 2026-10-07); **1720 AA-Briefcase** (vendor launch table — new)
- OSWorld 2.0: **75.4 field-leader tag** (BenchmarkList 1.3 page: O-5 75.4 leads 1.3 at 66.9, -8.5 gap); **70.6% vendor launch score** (choosemodel — harness differs, both listed)
- Terminal-Bench 4.0: **53.9%** (tbench.ai leaderboard, xhigh effort via Claude Code, rank #3)
- Terminal-Bench 2.1: **no verified public score found** (explicitly dropped from the Opus 5 system card per jessemoraga.com card analysis — vendor chose Frontier-Bench instead; Fable 5 84.3 / Sonnet 5 80.4 / Opus 4.8 82.7 sibling rows are different models, not counted)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- BrowseComp: **90.8% vendor launch score with multi-agent harness** (choosemodel; supersedes the earlier 86.8% proxy)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **63.2 field-leader tag on SWE Atlas QnA** (BenchmarkList 1.3 page: O-5 63.2 leads 1.3 at 59.4, -3.8 gap); **80.6% Toolathlon Verified** (vendor launch table — fills prior gap); **26.0% AutomationBench** (vendor launch table — new)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found** (system card omits GPQA entirely per hokai.io cross-check — same omission as Opus 5.5; not proxied)
- HLE: **64.7% HLE w/ Tools** (vendor launch table — fills prior gap)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **61 AA Index (max)** (Artificial Analysis Astra article: Opus 5 max 61 leads cluster)
- ARC-AGI-3 (novel-problem solving): **30.2%** (Anthropic launch, roughly 3x the next-best model)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **96.0% SWE-bench Verified** (Anthropic launch, 5-trial mean per card analysis); **79.2% SWE-bench Pro** (BenchLM leaderboard #4, within a point of Mythos 5 80.3% and Fable 5 80.0%); **89.5% SWE-bench Multilingual** (vendor launch table — new)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **74.0 field-leader tag on DeepSWE** (Meta official 1.3 table: Opus 5 74.0 vs 1.3 75.4); **68.8% DeepSWE v1.1 vendor launch score** (choosemodel — harness differs from the field-leader tag run, both listed; below the ~74 frontier bar, see score cap); **60 Coding Agent Index** (AA Astra article: Opus 5 60 vs Astra/Fable 62); **43.3% Frontier-Bench v0.1** (Anthropic launch table; 44.4% in card prose — same-doc harness-note variance, both listed; ahead of Fable 5 33.7%); **53.4% FrontierCode 1.1 Main at medium effort** (vendor launch table — new); CursorBench 3.2 within 0.5% of Fable 5 peak at half task cost (Anthropic launch)

Long context:

- **1M window verified; no MRCR/RULER number found — no long-context retrieval reported**

### Normalized scores (1–100)

- **Tool use: 94/100.** GDPval 1852/1861 leader plus OSWorld 70–75 and Toolathlon Verified 80.6 with BrowseComp 90.8 show elite orchestration; capped below 95 with Terminal-Bench 2.1 vendor-dropped and no public Tau3 number.
- **Reasoning: 96/100.** Index 61 (world-best cluster) plus ARC-AGI-3 30.2% (~3x next-best) with HLE w/ Tools 64.7% now confirmed; capped below 97 by missing public GPQA absolutes.
- **Context window: 100/100.** 1M / 128K out verified; top tier.
- **Multimodal: 65/100.** Text/image/PDF in, text out; capped below video/audio omni models.
- **Coding: 96/100.** SWE-bench Verified 96.0% (leader) plus SWE-Pro 79.2%, Multilingual 89.5% and Frontier-Bench v0.1 43.3% (ahead of Fable 5) show best-in-class engineering; capped below 98 with the vendor DeepSWE run at 68.8 and no LiveCodeBench absolute.
- **Cost efficiency: 45/100.** Paid $5/$25 premium; value only at frontier.
- **Overall Score: 90/100.** Mean of the five non-cost dims (94+96+100+65+96)/5 = 90.2 → 90; best-fit premium deepest-reasoning and longest-run pick — launch absolutes now confirmed by card-level analyses. (Re-researched 2026-10-07: HLE, Toolathlon, AutomationBench, DeepSWE-vendor, FrontierCode, Multilingual, AA-Briefcase gaps filled; Reasoning +1.)

---

## Signature

- Provided by: **Muse Spark 1.3 Contributor (meta/muse-spark-1.3)** — 2026-10-07
- Method: public internet research (Artificial Analysis articles, BenchmarkList leader tags, Meta official table, Anthropic announcements) + 2026-10-07 re-research pass (Opus 5 system-card PDF analyses via jessemoraga.com/alphaxiv, choosemodel vendor launch-score table, VectorWire/AA leaderboard cross-checks); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
