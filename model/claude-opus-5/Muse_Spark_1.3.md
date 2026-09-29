# Claude Opus 5 — findings by Muse Spark 1.3 Contributor

- Source: Anthropic/Claude Opus 5, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-18 (UTC), amended 2026-09-27 (UTC, user-signed-off exception: launch absolutes added, scores recomputed 89 → 90); re-verified 2026-09-29 (UTC, user-signed-off re-research: BrowseComp 90.8 absolute replaces proxy, HLE 56.3/64.7 + DeepSWE 68.8 + Automation 26.0 + Briefcase 1720 + ARC-AGI-2 added, Index rebased — scores unchanged)
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

- GDPval-AA v2: **1852 Elo field-leader tag** (Artificial Analysis 1.2 article context: Opus 5 max 1852 leads 1.2 at 1631); corroborated by 1861 knowledge-work Elo (launch coverage, amended 2026-09-27)
- OSWorld 2.0: **70.6%** (Anthropic launch table; vs 4.8 55.7 — re-verified 2026-09-29); 75.4 field-leader tag retained (BenchmarkList 1.3 page, different harness/scale)
- Terminal-Bench 4.0: **53.9%** (tbench.ai leaderboard, xhigh effort via Claude Code, rank #3)
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- BrowseComp: **90.8%** (Anthropic launch table; vs 4.8 84.3, Fable 5 87.4, Sol 90.4 — replaces 86.8% provisional proxy, re-verified 2026-09-29)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **63.2 field-leader tag on SWE Atlas QnA** (BenchmarkList 1.3 page: O-5 63.2 leads 1.3 at 59.4, -3.8 gap)
- AutomationBench: **26.0%** (Anthropic launch table; vs 4.8 17.0 — re-verified 2026-09-29)
- AA-Briefcase: **1720 Elo** (Anthropic launch table; vs 4.8 1346 — re-verified 2026-09-29)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **56.3% without tools / 64.7% with tools** (Anthropic launch; +6.5/+6.8 over 4.8 — re-verified 2026-09-29)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **63 AA Index launch-scale** (theairankings 2026-09-11; filed 61 per AA Astra article — scale variance noted); **51 on re-based v4.3** (vs Fable 5.1 53 — re-verified 2026-09-29)
- ARC-AGI-3 (novel-problem solving): **30.2%** (Anthropic launch, roughly 3x the next-best model); **ARC-AGI-2: 90.4%** (launch table — re-verified 2026-09-29)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **96.0% SWE-bench Verified** (Anthropic launch); **79.2% SWE-bench Pro** (BenchLM leaderboard #4, within a point of Mythos 5 80.3% and Fable 5 80.0%)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **74.0 field-leader tag on DeepSWE** (Meta official 1.3 table: Opus 5 74.0 vs 1.3 75.4); **68.8% DeepSWE v1.1** (launch table; vs Fable 5 69.7 — re-verified 2026-09-29); **89.5% SWE Multilingual / 59.4% SWE Multimodal** (launch table — re-verified 2026-09-29); **60 Coding Agent Index** (AA Astra article: Opus 5 60 vs Astra/Fable 62); **43.3% Frontier-Bench v0.1** (Anthropic launch, ahead of Fable 5 33.7%); CursorBench 3.2 within 0.5% of Fable 5 peak at half task cost (Anthropic launch)

Long context:

- **1M window verified; no MRCR/RULER number found — no long-context retrieval reported**

### Normalized scores (1–100)

- **Tool use: 94/100.** GDPval 1861 leader plus BrowseComp 90.8%, OSWorld 2.0 70.6% and Terminal-Bench 4.0 53.9% (#3) show elite orchestration; capped below 95 with no public Terminal-Bench 2.1 / Tau3 number.
- **Reasoning: 95/100.** Index 63 launch-scale (51 on v4.3) plus HLE 56.3%/64.7%, ARC-AGI-2 90.4% and ARC-AGI-3 30.2% (~3x next-best) show frontier reasoning; capped below 97 by missing public GPQA absolutes.
- **Context window: 100/100.** 1M / 128K out verified; top tier.
- **Multimodal: 65/100.** Text/image/PDF in, text out; capped below video/audio omni models.
- **Coding: 96/100.** SWE-bench Verified 96.0% (leader) plus SWE-Pro 79.2%, DeepSWE v1.1 68.8%, SWE Multilingual 89.5% and Frontier-Bench v0.1 43.3% (ahead of Fable 5) show best-in-class engineering; capped below 98 with no 5-specific LiveCodeBench absolute.
- **Cost efficiency: 45/100.** Paid $5/$25 premium; value only at frontier.
- **Overall Score: 90/100.** Mean of the five non-cost dims (94+95+100+65+96)/5 = 90.0; best-fit premium deepest-reasoning and longest-run pick — launch absolutes now confirm the leader tags.

---

## Signature

- Provided by: **Muse Spark 1.3 Contributor (meta/muse-spark-1.3)** — 2026-09-18
- Method: public internet research (Artificial Analysis articles, BenchmarkList leader tags, Meta official table, Anthropic announcements); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
