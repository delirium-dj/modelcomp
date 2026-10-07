# Claude Opus 5.5 — findings by Muse Spark 1.3

- Source: Anthropic/Claude Opus 5.5 (`anthropic/claude-opus-5-5`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** First model of Anthropic's Claude 5.5 family (released 2026-09-22); enterprise Opus workhorse at Fable-5.1-level-or-better performance for most work at 40% lower run cost than Opus 5, with adaptive thinking and 1M context. Holds #1 ranks on SWE-bench Pro, HLE, SciCode and FrontierCode leaderboards. Top use case: long-horizon agentic coding and professional knowledge work.
- **Provider / access:** Anthropic API (`claude-opus-5-5`); also on Amazon Bedrock, Google Cloud, Microsoft Azure. Chat Completions-style Messages API.
- **Release / knowledge:** 2026-09-22 release (Anthropic announcement; AWS Bedrock model card launch date 2026-09-22); system card 2026-09-28; knowledge cutoff not publicly disclosed.
- **IDs:** `anthropic/claude-opus-5-5` (no Free ID exists on Zen — paid only).
- **Context window:** 1M tokens total, 128K max output (AWS Bedrock model card — verified). No public MRCR/RULER retrieval-at-length numbers found.
- **Modalities:** Text + image in (PDF input supported); text out; reasoning yes (adaptive thinking always on, cannot be disabled per Bedrock card); tool calls yes; JSON mode supported.
- **Pricing (as of 2026-09-22):** Paid only: output $20/1M (vs $25/1M for Opus 5); ~40% lower run cost than Opus 5 (Anthropic/Reuters, 2026-09-22). No training-data-free-tier caveat applies (paid tier).
- **Architecture:** Proprietary (undisclosed).

### Raw benchmarks found

> Re-researched 2026-10-07: the 2026-09-28 system card plus BenchmarkList/BenchLM/AA third-party rows fill nearly every gap from the 2026-09-26 version. Vendor numbers are Anthropic-reported (max effort unless noted); leaderboard rows marked third-party.

Agent / tool use:

- Terminal-Bench 2.1: **87.6%** (thinking high, third-party leaderboard, rank 11/55)
- Terminal-Bench 4.0: **66.4%** (vendor, xhigh effort; AA public leaderboard: 59.6% max-default-fallback — harness/config differs, both listed)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **1846 Elo GDPval-AA v2.1** (vendor max; third-party rank 3/352); **1822 AA-Briefcase v1.1** (third-party, rank 2/145)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **77.8% Toolathon Pass@1** (third-party, rank 7/41); **40.0% AutomationBench** (vendor via Zapier; BenchmarkList row 42.5%, rank 14/48 — harness differs, both listed)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found** (system card omits GPQA entirely — noted by hokai.io cross-check; not proxied)
- HLE: **67.7% with tools** (vendor max; third-party #1 of 134)
- LCR / MLCR: **no verified public score found**
- CritPt: **31.7% CritPt Max no-tools** (third-party, rank 3/124); **95.0% FrontierMath Tier 4 v2, 91.2% FrontierMath v2, 100% ProofBench v1.1** (third-party)
- Artificial Analysis Intelligence Index / BenchLM overall: **58 AA Intelligence Index** (AA, cited 2026-09-23); **94.3% Global MMLU, 93.1% MILU** (third-party, both #1)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found** (Anthropic internal research-eval: 16/18 reports cleared a no-invented-figure bar — VentureBeat 2026-09-22; not a public rate)

Coding:

- SWE-bench Verified / SWE-Pro: **89.9% SWE-bench Pro** (system card; third-party #1 of 58–60); **93.9% Multilingual** (#1); **61.4% Multimodal** (#1); SWE-bench Verified proper still unpublished
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **66.9% SciCode** (third-party #1 of 296); **63.3% Terminal-Bench-Science** (rank 2/17–20)
- Vibe Code Bench: **90.3% Vibe v1.1** (third-party, rank 4/75)
- DeepSWE / Coding Index / other: **74.2% DeepSWE 1.1** (third-party, rank 4/52 — exactly the frontier bar); **62.3% FrontierSWE v2** (rank 2/20); **54.4% FrontierCode Main** (vendor) / **65.3% FrontierCode** (BenchmarkList #1/36 — suite slices differ); **57.8% CursorBench 4.0**; **74/160 SWE-Marathon trials**; **95.1% IOI (Vals v2)**

Long context:

- no long-context retrieval reported (no public MRCR/RULER/GraphWalks number for Opus 5.5; 1M window verified via Bedrock card only)

### Normalized scores (1–100)

- **Tool use: 95/100.** TB2.1 87.6 + TB4.0 66.4/59.6 + GDPval 1846 (rank 3) + Toolathlon 77.8 + AutomationBench ~40–42.5 form a frontier tool composite; capped at 95 by zero Tau3/Claw rows.
- **Reasoning: 94/100.** HLE 67.7 (#1/134) + CritPt 31.7 + FrontierMath 91–95 + Global MMLU 94.3 + AA Index 58; capped at 94 with GPQA Diamond still unpublished for this ID.
- **Context window: 97/100.** Verified 1M total / 128K out (Bedrock card) in the ≥1M tier; held below 100 for lack of any published ≥512K retrieval-fidelity measurement.
- **Multimodal: 68/100.** Text + image (+PDF/screenshots: SWE Multimodal 61.4 #1 proves visual-input strength), text-only out — top of the image-in band.
- **Coding: 97/100.** SWE-Pro 89.9 + Multilingual 93.9 + DeepSWE 74.2 (frontier bar) + TB2.1 87.6 + SciCode 66.9 (#1) + Vibe 90.3; capped at 97 with SWE-bench Verified proper and LiveCodeBench still unreported.
- **Cost efficiency: 62/100.** Paid-only at ~$3/$20-class pricing (~40% cheaper to run than Opus 5's $5/$25); near the $3/$15 ≈ 60 reference point, +2 for the generational price cut.
- **Overall Score: 90/100.** Mean of the five non-cost dims (95 + 94 + 97 + 68 + 97) / 5 = 90.2 → 90; best fit as the price-cut enterprise Opus for agentic coding/knowledge work — launch claims now confirmed by independent leaderboards.

---

## Signature

- Provided by: **Muse Spark 1.3 (meta/muse-spark-1.3)** — 2026-10-07
- Method: public internet research + 2026-10-07 re-research pass (Anthropic launch page + 2026-09-28 system card, AWS Bedrock card, Reuters/TechCrunch/VentureBeat coverage, BenchmarkList/BenchLM/AA/LLMLearner/hokai.io third-party leaderboards); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
