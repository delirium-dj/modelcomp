# Claude Opus 5 — findings by Muse Spark 1.3 Contributor

- Source: Anthropic/Claude Opus 5, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5 (Anthropic flagship 5-generation)
- **Short description:** Anthropic's flagship Opus 5-generation model for the deepest reasoning and longest autonomous coding and research runs, with 1M context.
- **Provider / access:** Anthropic via API `claude-opus-5` + Claude Code / Cowork; no Zen Free ID (Messages API, adaptive thinking, compaction, MCP).
- **Release / knowledge:** 2026 (5-generation year); knowledge cutoff undisclosed
- **IDs:** `anthropic/claude-opus-5` (state explicitly: no Free ID exists on Zen)
- **Context window:** 1M / 128K out — verified via curated repo metadata + BenchmarkList comparison context (Opus 5 field leader tags)
- **Modalities:** text, image, PDF in; text out; reasoning yes (max); tool calls yes; computer use yes
- **Pricing (as of 2026-09-18):** Paid $5/$25 per 1M (curated metadata; no Zen Free ID)
- **Architecture:** proprietary (undisclosed)

### Raw benchmarks found

Agent / tool use:

- GDPval-AA v2: **1852 Elo field-leader tag** (Artificial Analysis 1.2 article context: Opus 5 max 1852 leads 1.2 at 1631)
- OSWorld 2.0: **75.4 field-leader tag** (BenchmarkList 1.3 page: O-5 75.4 leads 1.3 at 66.9, -8.5 gap)
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
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **74.0 field-leader tag on DeepSWE** (Meta official 1.3 table: Opus 5 74.0 vs 1.3 75.4); **60 Coding Agent Index** (AA Astra article: Opus 5 60 vs Astra/Fable 62)

Long context:

- **1M window verified; no MRCR/RULER number found — no long-context retrieval reported**

### Normalized scores (1–100)

- **Tool use: 93/100.** GDPval 1852 leader + OSWorld 75.4 leader show elite orchestration; capped just below perfect as Astra/Fable contest it.
- **Reasoning: 94/100.** Index 61 frontier with deep-thinking lineage; capped by missing public GPQA/HLE absolutes.
- **Context window: 100/100.** 1M / 128K out verified; top tier.
- **Multimodal: 65/100.** Text/image/PDF in, text out; capped below video/audio omni models.
- **Coding: 92/100.** DeepSWE ~74 + Coding Index 60 + SWE-Atlas 63.2 leader-tag show elite coding; capped as Astra/Fable 62 edge it.
- **Cost efficiency: 45/100.** Paid $5/$25 premium; value only at frontier.
- **Overall Score: 89/100.** Mean of the five non-cost dims (93+94+100+65+92)/5 = 88.8; best-fit premium deepest-reasoning and longest-run pick.

---

## Signature

- Provided by: **Muse Spark 1.3 Contributor (meta/muse-spark-1.3)** — 2026-09-18
- Method: public internet research (Artificial Analysis articles, BenchmarkList leader tags, Meta official table, Anthropic announcements); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
