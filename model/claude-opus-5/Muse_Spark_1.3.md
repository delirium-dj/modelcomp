# Claude Opus 5 — findings by Muse Spark 1.3 Contributor

- Source: Anthropic/Claude Opus 5, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-18 (UTC), amended 2026-09-27 (UTC, user-signed-off exception: launch absolutes added, scores recomputed 89 → 90)
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
- OSWorld 2.0: **75.4 field-leader tag** (BenchmarkList 1.3 page: O-5 75.4 leads 1.3 at 66.9, -8.5 gap)
- Terminal-Bench 4.0: **53.9%** (tbench.ai leaderboard, xhigh effort via Claude Code, rank #3)
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- BrowseComp: **86.8% with multi-agent harness** (Anthropic Opus 4.6 announcement footnotes context for Opus-class harness; Opus 5 absolute unverified — closest proxy as provisional)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **63.2 field-leader tag on SWE Atlas QnA** (BenchmarkList 1.3 page: O-5 63.2 leads 1.3 at 59.4, -3.8 gap)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **61 AA Index (max)** (Artificial Analysis Astra article: Opus 5 max 61 leads cluster)
- ARC-AGI-3 (novel-problem solving): **30.2%** (Anthropic launch, roughly 3x the next-best model)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **96.0% SWE-bench Verified** (Anthropic launch); **79.2% SWE-bench Pro** (BenchLM leaderboard #4, within a point of Mythos 5 80.3% and Fable 5 80.0%)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **74.0 field-leader tag on DeepSWE** (Meta official 1.3 table: Opus 5 74.0 vs 1.3 75.4); **60 Coding Agent Index** (AA Astra article: Opus 5 60 vs Astra/Fable 62); **43.3% Frontier-Bench v0.1** (Anthropic launch, ahead of Fable 5 33.7%); CursorBench 3.2 within 0.5% of Fable 5 peak at half task cost (Anthropic launch)

Long context:

- **1M window verified; no MRCR/RULER number found — no long-context retrieval reported**

### Normalized scores (1–100)

- **Tool use: 94/100.** GDPval 1852/1861 leader plus OSWorld 75.4 leader and Terminal-Bench 4.0 53.9% (#3) show elite orchestration; capped below 95 with no public Terminal-Bench 2.1 / Tau3 number.
- **Reasoning: 95/100.** Index 61 (world-best, +1 over Fable 5) plus ARC-AGI-3 30.2% (~3x next-best) show frontier reasoning; capped below 97 by missing public GPQA/HLE absolutes.
- **Context window: 100/100.** 1M / 128K out verified; top tier.
- **Multimodal: 65/100.** Text/image/PDF in, text out; capped below video/audio omni models.
- **Coding: 96/100.** SWE-bench Verified 96.0% (leader) plus SWE-Pro 79.2% and Frontier-Bench v0.1 43.3% (ahead of Fable 5) show best-in-class engineering; capped below 98 with no 5-specific LiveCodeBench/DeepSWE absolute.
- **Cost efficiency: 45/100.** Paid $5/$25 premium; value only at frontier.
- **Overall Score: 90/100.** Mean of the five non-cost dims (94+95+100+65+96)/5 = 90.0; best-fit premium deepest-reasoning and longest-run pick — launch absolutes now confirm the leader tags.

---

## Signature

- Provided by: **Muse Spark 1.3 Contributor (meta/muse-spark-1.3)** — 2026-09-18
- Method: public internet research (Artificial Analysis articles, BenchmarkList leader tags, Meta official table, Anthropic announcements); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
