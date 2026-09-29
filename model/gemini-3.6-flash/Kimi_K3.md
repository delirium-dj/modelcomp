# Gemini 3.6 Flash — findings by Kimi K3

- Source: Google / Gemini 3.6 Flash (`gemini-3.6-flash`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash
- **Short description:** Google's mid-2026 Flash-tier reasoning model in the Gemini 3 family, between 3.5 and 3.7 Flash; strong OSWorld computer-use number and good multimodal grounding at Flash cost. Referenced by Harvey as the baseline 3.7 Flash beat by 2.6 pts on Harvey's Legal Agent Benchmark (deepmind.google showcase quote).
- **Provider / access:** Google Gemini API (`gemini-3.6-flash`), AI Studio.
- **Release / knowledge:** 2026 release (exact date not verified in my sources); knowledge cutoff not verified.
- **IDs:** `google/gemini-3.6-flash`; listed on OpenCode Zen as `gemini-3.6-flash` (no Free-tier ID verified).
- **Context window:** 1M tokens (benchlm.ai; family-consistent); max output not verified (family spec 64K provisional).
- **Modalities:** text/image (familial audio/video/PDF) in; text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-09-29):** no Google list price verified for 3.6 specifically; OpenCode Zen lists `gemini-3.6-flash` at $1.50/M in, $7.50/M out (aggregator rate).
- **Architecture:** proprietary (Google DeepMind); params undisclosed.

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified: **83.0%** — standout computer-use score (benchlm.ai)
- Terminal-Bench 2.1 (Vals): **73.8%** (benchlm.ai); Terminal-Bench 2.1 official: no verified public score found
- Harvey's Legal Agent Benchmark (all-pass): **≈6.2%** implied — 3.7 Flash scores 8.8% and is +2.6 pts over 3.6 Flash per Harvey (deepmind.google); no standalone published row
- GDPval-AA: **1423 Elo** (38.2% normalized) (benchlm.ai); AA Agentic Index: **30.1%** (benchlm.ai)
- Tau2/Tau3-Banking / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **92.8%** (AA); 93.4% (Vals) (benchlm.ai)
- HLE (AA-HLE): **40.8%** (benchlm.ai)
- AA-LCR: **80.0%**; CritPt: **10.6%** (benchlm.ai)
- ARC-AGI-1: **91.2%**; ARC-AGI-2: **60.4%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **34.0**; BenchLM overall **64.58/100, #29 of 507**
- AA-Omniscience Accuracy / Hallucination Rate: **50.0% / 55.6%** (benchlm.ai)
- MMLU-Pro (Vals): **89.3%** (benchlm.ai)

Coding:

- SWE-bench (Vals): **79.6%**; SWE-bench Verified: no separate verified public score found
- LiveCodeBench (Vals): **88.1%** (benchlm.ai)
- AA-SciCode: **53.4%**; AA Coding Index: **69.2** (benchlm.ai)
- DeepSWE: **49.0%**; CursorBench 3.2: **53.5%** (benchlm.ai)

Long context:

- AA-LCR 80.0% at the 1M window; no MRCR/RULER/GraphWalks public score found.

Multimodal:

- AA-MMMU-Pro: **83.2%**; Design Arena Website: **1310 Elo** (benchlm.ai)

### Normalized scores (1–100)

- **Tool use: 76/100.** OSWorld-Verified 83% is excellent; capped by GDPval-AA 1423 and Agentic Index 30.1%; τ scores unverified.
- **Reasoning: 86/100.** HLE 40.8% sits at the low edge of the 30–45% w/tools band (85–92), GPQA ~93%, LCR 80.0%; capped by CritPt 10.6% and ARC-AGI-2 60.4%.
- **Context window: 92/100.** 1M window with LCR 80.0%; held below the 95–100 peak band by missing max-window retrieval probes.
- **Multimodal: 88/100.** MMMU-Pro 83.2%, Design Arena 1310, family image/audio/video/PDF input breadth; audio/video not variant-verified and output is text-only, so held just under the 90–95 band.
- **Coding: 80/100.** LiveCodeBench 88.1%, SWE-bench (Vals) 79.6% — just under the ≥80% → 88–93 band; capped by DeepSWE 49% and CursorBench 53.5%.
- **Cost efficiency: 78/100.** Zen rate $1.50/$7.50 → 75–80 band; Google list price unverified.
- **Overall Score: 84/100.** Mean of (76+86+92+88+80)/5 = 84.4 → 84. Best fit: budget computer-use and multimodal coding where 3.7/3.8 Flash pricing is unattractive.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-29
- Method: fresh public web research (deepmind.google Gemini page & showcase, benchlm.ai scorecard); scores are normalized 1–100 interpretations, not official vendor scores. Reverified 2026-09-29: added implied Harvey LAB ≈6.2% (from Harvey's +2.6-pt delta vs 3.7) and Zen pricing ($1.50/$7.50); no other benchmark drift found; adjusted scores to band-compliant values.
- Future sources: add a new file next to this one using the same headings.
