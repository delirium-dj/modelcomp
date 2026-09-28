# Claude Fable 5.1 — findings by Muse Spark 1.3 Contributor

- Source: Anthropic/Claude Fable 5.1, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-18 (UTC), amended 2026-09-27 (UTC, user-signed-off exception: launch + Vals absolutes added, scores recomputed 89 → 90)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1 (Anthropic Mythos-class, above Opus 5)
- **Short description:** Anthropic's Mythos-class model above Opus 5 for the most demanding reasoning and long-horizon agentic work, with 1M context and 128K output.
- **Provider / access:** Anthropic via API + Claude Code / Cowork; no Zen Free ID (Messages API, max effort with fallback, MCP).
- **Release / knowledge:** 2026-09-01 release (Fable 5.1 + Mythos 5.1 joint launch); knowledge cutoff Jun 2026 (platform docs, amended 2026-09-27).
- **IDs:** `anthropic/claude-fable-5.1` (state explicitly: no Free ID exists on Zen)
- **Context window:** 1M / 128K out — verified via curated repo metadata + BenchmarkList comparison leader tags
- **Modalities:** text, image, PDF in; text out; reasoning yes (max); tool calls yes; computer use yes
- **Pricing (as of 2026-09-18, re-verified 2026-09-27):** Paid $10/$50 per 1M, cache reads $0.25 (75% cut); 1M/128K (no Zen Free ID)
- **Architecture:** proprietary (undisclosed)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **55.8%** (Anthropic launch, vs Fable 5 42.0%; AA lane read 52% — different harness)
- Terminal-Bench-Science 0.1: **52.6%** (Anthropic launch, vs Fable 5 24.7% and Sol 22.4%)
- Terminal-Bench 2.1: **85.02% Vals lane** (Vals suite, #2 behind Sol 85.77%, up from Fable 5 80.52%)
- AutomationBench: **31.4%** (Anthropic launch, vs Sol 19.6%; AA lane differs)
- GDPval-AA v2: **1853 Elo** (Anthropic launch, vs Sol 1711)
- OSWorld 2.0: **77.9% partial / 41.7% strict** (Anthropic launch table)
- CursorBench 3.2.0: **73.4%** (Anthropic launch, vs Sol 67.2%)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **60.9% without tools / 65.0% with tools** (Anthropic launch, both ahead of Opus 5)
- ProofBench v1.1: **100.00%** (Vals suite, up from Fable 5 95.00%)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **66 AA Index (max)** (heise/AA, outright #1 ahead of Fable 5 62, Opus 5 63, Sol 61); **67.87% Vals Index #1** (Vals suite, ahead of Opus 5 67.21%)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **81.2% SWE-bench Pro** (BenchLM leaderboard #1 of 70); no labeled SWE-Verified absolute found (family: Fable 5 95% headline)
- LiveCodeBench: **90.52% Vals lane** (Vals suite, #1)
- SciCode: **top value** (AA, highest to date per heise)
- Vibe Code Bench: **90.26%** (Vals suite, within noise of Fable 5 90.35%)
- DeepSWE / Coding Index / other: **67.4% DeepSWE 1.1** (shared Fable/Mythos table); **62 Coding Agent Index in Claude Code, tied #1 with Astra** (AA Astra article); **35.03% RSI Index #1** (Vals, ahead of Opus 5 32.10%)

Long context:

- **1M window verified; no MRCR/RULER number found — no long-context retrieval reported**

### Normalized scores (1–100)

- **Tool use: 94/100.** TB2.1 85.02% (#2) plus TB4.0 55.8%, TB-Science 52.6%, GDPval 1853 and OSWorld 77.9% lead most lanes; capped below 96 with no Tau3/Claw-Eval absolute.
- **Reasoning: 96/100.** AA Index 66 (outright #1) plus HLE 65.0%/60.9% and ProofBench 100% show frontier reasoning; capped below 98 with no GPQA absolute.
- **Context window: 100/100.** 1M / 128K out verified; top tier.
- **Multimodal: 65/100.** Text/image/PDF in, text out; capped below video/audio omni models.
- **Coding: 97/100.** SWE-Pro 81.2% (#1) plus LiveCode 90.52% (#1), Vibe 90.26%, ProofBench 100% and CursorBench 73.4% show best-in-class engineering; capped below 99 with no labeled SWE-Verified absolute.
- **Cost efficiency: 30/100.** Paid $10/$50 is the most premium tier; value only for Mythos-class demand.
- **Overall Score: 90/100.** Mean of the five non-cost dims (94+96+100+65+97)/5 = 90.4; best-fit most-demanding reasoning and long-horizon premium pick.

---

## Signature

- Provided by: **Muse Spark 1.3 Contributor (meta/muse-spark-1.3)** — 2026-09-18
- Method: public internet research (Artificial Analysis Astra benchmarking article, BenchmarkList leader tags); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
