# Claude Fable 5 — findings by GLM 5.3 Flash

- Source: Anthropic (`claude-fable-5`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5
- **Short description:** Anthropic's June 2026 Mythos-class flagship for long-running, complex and asynchronous knowledge work and coding — the first Fable generation, now legacy to Fable 5.1 (released 2026-09-01). It shares its underlying weights with the access-restricted Claude Mythos 5, and routes a small slice of risk-flagged prompts to Opus 4.8 (fallback).
- **Provider / access:** Anthropic Claude API `claude-fable-5` (Messages API, adaptive thinking always on); also Amazon Bedrock (`anthropic.claude-fable-5`), Google Cloud, Microsoft Foundry. OpenCode Zen lists `opencode/claude-fable-5` (standard pricing).
- **Release / knowledge:** Released 2026-06-09; reliable knowledge cutoff Jan 2026 (verified via platform.claude.com model overview).
- **IDs:** `claude-fable-5` (Claude API); Zen `opencode/claude-fable-5` (no Free ID confirmed — standard pricing).
- **Context window:** 1M tokens total; 128K max output (sync Messages API). Verified via platform.claude.com/docs/en/models/fable-5/overview.
- **Modalities:** Text and images in → text out; reasoning yes (adaptive, always on, default effort `high`); tool calls yes; JSON/structured output supported via API features.
- **Pricing (as of 2026-10-08):** $10 / MTok in, $50 / MTok out; cache write $12.50 (5m) / $20 (1h); cache read $1 / MTok; Batch API 50% off both directions. Paid only.
- **Architecture:** Proprietary, closed weights; Mythos-class — same weights as Claude Mythos 5 (verification-program-only), with classifier routing of cyber/bio/chem/distillation-flagged prompts to Opus 4.8 (~2% of tasks per Artificial Analysis, <5% per session per Anthropic).

### Raw benchmarks found

Agent / tool use:

- GDPval-AA (**AA composite**): Elo **1932**, rank **#1** (Artificial Analysis; described as a significant jump over previous leader Opus 4.8)
- Terminal-Bench 2.1: no verified public score found (named as an index input but no standalone value published)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA (vendor claims): largest lead grows with task length/complexity (Anthropic launch materials)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **92.6%** (Artificial Analysis; behind Opus 4.8 93.6%, GPT-5.5 93.5%, Gemini 3.1 Pro 94.3%)
- HLE: **53.3%** (Artificial Analysis; >7 points ahead of the next-best model)
- LCR / MLCR: no verified public score found (AA-LCR named as index input, no standalone value)
- CritPt: no verified public score found (index input only)
- Artificial Analysis Intelligence Index: **60 / #1** on v4.1 scale (prior-scale value 64.9 at launch — not interchangeable; revised methodology dropped SWE-bench/AIME weighting)
- Omniscience Accuracy / Hallucination Rate: AA-Omniscience **40** (new high score, +7 over prior leader Gemini 3.1 Pro Preview; penalizes confident wrong answers — reflects fewer hallucinated claims; separate hallucination rate not published)

Coding:

- SWE-bench Verified: **~95%** (runfreetools.com 2026 scorecard; secondary aggregator, treated provisional)
- SWE-Bench Pro: **80.3%** (Anthropic launch materials, run on Anthropic's own agent scaffolding — independent evaluators contest direct comparability; Opus 4.8 69.2%, GPT-5.5 58.6%, Gemini 3.1 Pro 54.2%; not listed on Artificial Analysis's model page)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found (index input only)
- DeepSWE / Coding Index / other: CursorBench — top of the leaderboard alongside Opus 5 (Cursor docs, qualitative)

Long context:

- no long-context retrieval reported (1M window documented; MRCR/RULER/GraphWalks values not found)

### Normalized scores (1–100)

- **Tool use: 93/100.** GDPval-AA Elo 1932 is the #1 result on the composite's agentic-work benchmark (frontier ref ~1750+ → 90–100); capped slightly below the ceiling because no Terminal-Bench 2.1 or Tau3 standalone value is published, so coverage of the tool dimension rests on one benchmark.
- **Reasoning: 94/100.** HLE 53.3% (>7 pts clear) and AA-Omniscience 40 (new high) are frontier-best; AA Index 60 is #1; GPQA 92.6% trails three rivals, which caps it just under 95.
- **Context window: 95/100.** Documented 1M tokens (tier ≥1M = 95–100); capped at 95 because no MRCR/RULER retrieval percentage at length is published to confirm the ≥98%-retrieval 100 tier.
- **Multimodal: 65/100.** Text and image input with text output (docs: "Text and images → text") maps to the +image-in 60–70 band; no video/PDF/audio input documented.
- **Coding: 92/100.** SWE-Bench Pro 80.3% is the strongest agentic-coding result in the family (vs Opus 4.8 69.2%) and CursorBench-top qualitative placement; capped because the 80.3% number is Anthropic-harness and contested, the ~95% Verified figure is a secondary aggregator, and no LiveCodeBench/SciCode standalone values exist.
- **Cost efficiency: 30/100.** $10/$50 per MTok — methodology maps $10/$50 ≈ 30; roughly double Opus 4.8's $5/$25, justified mainly on long-horizon agentic work.
- **Overall Score: 87.8/100.** Mean of the five quality dims (93+94+95+65+92)/5 = 87.8; best fit: long-horizon agentic knowledge work (legal, research, multi-step engineering) where GDPval-AA and AA-Omniscience leads matter — at $10/$50 it is a premium tool, not a volume workhorse.

---

## Signature

- Provided by: **GLM 5.3 Flash (zai-org/glm-5.3-flash)** — 2026-10-08
- Method: public internet research (vendor model docs, Artificial Analysis via SiliconReport scorecard, independent aggregators); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
