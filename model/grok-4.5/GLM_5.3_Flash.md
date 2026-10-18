# Grok 4.5 — findings by GLM 5.3 Flash

- Source: xAI / SpaceXAI (`grok-4.5`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.5
- **Short description:** xAI/SpaceXAI's July 2026 coding-focused flagship, jointly trained with Cursor and repositioned around agentic coding and knowledge work; superseded by Grok 4.6 in August 2026 but still API-available. Its clearest wins are price and token efficiency (~4.2x fewer output tokens than Opus 4.8 on SWE-Bench Pro). BenchLM ranks it #38 of 889 (64.22).
- **Provider / access:** SpaceXAI API (`grok-4.5`, OpenAI-compatible endpoint at `https://api.x.ai/v1`, Chat Completions); launched inside Cursor on all plans and in Grok Build; apps via SuperGrok Lite $10/mo and above. Not available in the EU at launch. No Free ID on OpenCode Zen.
- **Release / knowledge:** Released 2026-07-08; superseded 2026-08-12 by Grok 4.6; knowledge cutoff not disclosed.
- **IDs:** `grok-4.5` (xAI API). No Free ID on Zen.
- **Context window:** 500,000 total tokens (BenchLM concurs; down from Grok 4.3's 1M); higher rate applies above 200K input tokens.
- **Modalities:** text and image input; text output; native video input dropped (regression vs Grok 4.3); reasoning yes at "high" effort by default and cannot be disabled; tool calls; JSON mode via API.
- **Pricing (as of 2026-10-11):** $2.00 / $6.00 per 1M in/out; cached input $0.50 per 1M (75% discount). Paid only — no free API tier.
- **Architecture:** ~1.5 trillion parameters (Musk-reported, not officially confirmed); proprietary.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: **1430** (AA, independent — fills the gap; normalized **44.5%**)
- Terminal-Bench 2.1: **83.3%** (xAI launch post via benchlm.ai); Vals independent: **67.8%** (−15.5 vendor gap)
- AA Agentic Index: **42.1%** (AA); Terminal-Bench 3.0: **15.7%** (frontierbench.ai — very weak)
- Tau3-Banking / MCPAtlas / Claw-Eval: no verified public score found
- Artificial Analysis agentic components: ~14,000 output tokens per Intelligence Index task (~60% fewer than Opus 4.8), corroborating token-efficiency

Reasoning / knowledge:

- GPQA Diamond: **93.1%** (AA — corroborates the 2026-10-05 read); Vals: **92.9%** — three-source agreement
- HLE: **42.7%** (AA — corroborated)
- ARC-AGI-2: **52.6%** (ARC Prize leaderboard — fills the gap); ARC-AGI-1: **85.67%** (ARC Prize verified, Grok 4.5 High); ARC-AGI-3: **0.3%**
- AA-LCR v1.1: **79.3%** (AA — fills the long-context gap); CritPt: **15.4%** (AA — weak)
- Artificial Analysis Intelligence Index: **38.8** (AA current board — corroborates the 39 re-based reading; the launch-era "~54, ranked 5th" is historical)
- MMLU-Pro: **89.2%** (Vals)
- AA-Omniscience: **51.6% accuracy / 54.1% non-hallucination row / 25.3 index** (AA)
- FrontierMath v2 (Epoch AI re-score): **57.2%** Tiers 1–3 / **24.4%** Tier 4 (epoch.ai, added 2026-10-16 — documented inline per repo convention, not averaged; no vendor FrontierMath row exists)

Coding:

- SWE-bench Pro: **64.7%** (xAI launch post — corroborated by benchlm); SWE Multilingual: **78%** (Cursor launch post — fills the gap)
- SWE-bench (Vals): **86.6%**; LiveCodeBench (Vals): **87.4%** (Vals, independent — fill the gaps)
- AA Coding Index: **72.5%** (AA); AA-SciCode: **55.0%** (AA — fills the gap); VulcanBench v3: **89.9%** (VulcanBench)
- CursorBench 3.2: **66.7%** (Cursor); DeepSWE 1.1: **53%** (xAI); PostTrainBench v1.1: **23.4%**
- SWE-bench Verified: no verified public score found (not disclosed by xAI)
- Output efficiency: average **15,954 output tokens** per SWE-Bench Pro task vs Opus 4.8's 67,020 — about 4.2x fewer (SpaceXAI)

Long context:

- AA-LCR 79.3% is the first measured long-context number (solid); 500K window; no MRCR/RULER value found

Multimodal:

- AA-MMMU-Pro: **80.4%** (AA — first measured vision evidence, strong for the image-in band); Design Arena Website: **1287** (OpenRouter)

### Normalized scores (1–100)

- **Tool use: 81/100.** (Was 85 on the prior pass.) GDPval 1430 (44.5% normalized), the Vals TB2.1 gap (67.8 vs 83.3), AA Agentic Index 42.1% and TB3.0 15.7% document the mid-band reality behind the vendor's TB2.1 headline; token efficiency remains the genuine differentiator.
- **Reasoning: 85/100.** (Was 87 on the prior pass.) GPQA 93.1%/92.9% (three sources) and HLE 42.7% stay elite-class and AA-LCR 79.3% fills the gap — but ARC-AGI-2 52.6% (verified), AA Index 38.8 and CritPt 15.4% hold it under the 2026 frontier class.
- **Context window: 88/100.** 500K tokens maps to the 500K–1M tier (85–94); AA-LCR 79.3% is the first measured retrieval-adjacent evidence (solid); the 200K cost cliff keeps it below the 1M models.
- **Multimodal: 65/100.** Text + image input only (AA-MMMU-Pro 80.4% is strong measured vision for the band), text output, no video (dropped vs Grok 4.3) — the image-in band caps at 70.
- **Coding: 84/100.** Vals SWE-bench 86.6% and LiveCodeBench 87.4% corroborate the vendor story, SWE-ML 78% and AA Coding Index 72.5% fill gaps; DeepSWE 1.1 53% and the undisclosed SWE-bench Verified prevent 90+.
- **Cost efficiency: 90/100.** $2/$6 per 1M with 75% cache discount and ~4.2x fewer output tokens per resolved coding task than Opus 4.8 — above the $1.25/$4.25 = ~88 methodology reference on quality-per-dollar.
- **Overall Score: 80.6/100.** (Was 81.8 on the prior pass.) Mean of the five quality dims per `RULES.md` (Cost excluded): (81 + 85 + 88 + 65 + 84) / 5 = 403/5 = 80.6 — lowered slightly on the 2026-10-11 second pass as the independent AA/Vals/ARC rows correct the vendor-led agentic framing while corroborating the reasoning story. Best-fit: cheap, token-efficient high-volume agentic coding with verified frontier-tier science reasoning — where peak agentic capability is not the priority.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-16
- Method: public internet research, second pass 2026-10-11 (≥3 independent sources: benchlm.ai updated 2026-10-10 citing the xAI launch post + Cursor blog, Artificial Analysis model benchmarks, Vals AI leaderboards, ARC Prize verified results via benchlm.ai, plus the prior 2026-09-24/10-05 passes; 2026-10-16 re-check: BenchLM 34-row refresh corroborates all rows (Epoch FrontierMath v2 57.2/24.4% added; Design Arena 1287 → 1283 flagged) — no score changes); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.md`, using the same headings.
