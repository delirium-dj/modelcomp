# Pareto 26.10 Preview — findings by Laguna S 2.1

- Source: BenchLM (`https://benchlm.ai/models/pareto-26-10-preview`), Artificial Analysis (`https://artificialanalysis.ai/evaluations/terminalbench-4-0`), Unbiased AI (`https://unbiased.ai/`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pareto 26.10 Preview
- **Short description:** Unbiased's composite/blended multimodal reasoning model for research, coding, and agentic workloads. Preview release with limited public benchmark coverage (3 of 623 benchmarks on BenchLM).
- **Provider / access:** Unbiased AI API; OpenCode Zen: `opencode/pareto-26.10-preview` (per `meta.json`, `noFreeId: true`); 27 API providers
- **Release / knowledge:** Released October 2026 (preview); knowledge cutoff not published
- **IDs:** `opencode/pareto-26.10-preview` (Zen, per `meta.json`); Unbiased model card: `https://unbiased.ai/model-card/`
- **Context window:** 1,000,000 input / 131,000 max output (per `meta.json`)
- **Modalities:** Text and image input; text output; reasoning yes (chain-of-thought)
- **Pricing (as of 2026-10-08):** $0.80 input / $3.20 output per 1M tokens (Unbiased API, per `meta.json`); cached input $0.03 per 1M
- **Architecture:** Composite/blended multimodal architecture (per `meta.json` short description); proprietary
- **License:** Proprietary (Unbiased)
- **Reasoning:** Yes (extended thinking / chain-of-thought)
- **Speed:** Not reported
- **TTFT:** Not reported

### Raw benchmarks found

> Sources: BenchLM (`https://benchlm.ai/models/pareto-26-10-preview`), Artificial Analysis (`https://artificialanalysis.ai/evaluations/terminalbench-v4-0`), Unbiased AI (`https://unbiased.ai/`). Only 3 benchmarks are publicly available (BenchLM covers 3 of 623). Confidence: low — scores are based on very limited data.

Agent / tool use:

- **Terminal-Bench 4.0:** **50.80%** — (Unbiased: Pareto 26.10 Preview preliminary results via BenchLM)
- **GDPval-AA:** no verified public score found
- **AA Agentic Index:** no verified public score found
- **AA Tau3 Banking:** no verified public score found
- **OSWorld-Verified:** no verified public score found
- **τ²-bench:** no verified public score found
- **Claw-Eval:** no verified public score found

Reasoning / knowledge:

- **GPQA Diamond:** **92.4%** — (Unbiased: Pareto 26.10 Preview preliminary results via BenchLM)
- **HLE:** no verified public score found
- **AA-LCR:** no verified public score found
- **CritPt:** no verified public score found
- **AA-Omniscience:** no verified public score found
- **Artificial Analysis Intelligence Index:** not computed (unranked on AA)

Coding:

- **DeepSWE:** **69.9%** — (Unbiased: Pareto 26.10 Preview preliminary results via BenchLM)
- **SWE-bench Verified:** no verified public score found
- **LiveCodeBench:** no verified public score found
- **SciCode:** no verified public score found
- **AA-SciCode:** no verified public score found
- **AA Coding Index:** no verified public score found
- **Terminal-Bench 2.1:** no verified public score found

Long context:

- **MRCR / RULER / LCR:** no verified public score found

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of the five quality dims (see `RULES.md`). Cost excluded.
> Confidence: low — only 3 public benchmarks found across 1 source (BenchLM). Scores are conservative estimates based on limited data. The `meta.json` short description states "no verified public benchmark scores yet."

- **Tool use: 50/100.** Only Terminal-Bench 4.0 at 50.80% is available (note: TB4.0 is a different harness from TB2.1). 50.80% is moderate (frontier TB is ~88%+). No GDPval-AA, OSWorld, or other agentic benchmarks available. Cannot compute a reliable tool-use score; 50 is a conservative midpoint estimate for moderate agentic performance.

- **Reasoning: 65/100.** GPQA Diamond at 92.4% is excellent (above 90% frontier). No AA Intelligence Index (unranked), no HLE, no LCR, no CritPt, no Omniscience to cross-validate. Using the methodology's frontier reference: GPQA 92.4% qualifies as near-frontier (90%+). However, with only one reasoning/knowledge benchmark, the score is uncertain. Estimated at 65 — strong GPQA but no other reasoning signals to confirm.

- **Context window: 95/100.** 1,000,000 input tokens per `meta.json` (≥1M tier → 95). 131,000 max output (strong). No verified ≥98% retrieval at 512K+ to reach 100.

- **Multimodal: 65/100.** Text and image input; text output (per `meta.json` and BenchLM). Per methodology: "+image in = 60–70". 65 at the midpoint. No video input or audio input or non-text output verified.

- **Coding: 55/100.** DeepSWE at 69.9% is moderate (below 74% frontier). No SWE-bench, LiveCodeBench, or SciCode benchmarks available. With only DeepSWE, the score is uncertain. 55 estimated — moderate DeepSWE, but no other coding signals.

- **Cost efficiency: 68/100.** $0.80 input / $3.20 output per 1M tokens (per `meta.json`, `noFreeId: true`). In the "$1–2 / $4–5 tier ≈ 65" range from the scoring methodology. Slightly below $1/$4, so ~68. Cached input at $0.03/1M is very cheap. Not open weights (proprietary); no free tier on Zen.

- **Overall Score: 66/100.** Mean of five non-cost dimensions: (50 + 65 + 95 + 65 + 55) / 5 = 330 / 5 = 66. Very strong context (1M) and good reasoning (GPQA 92.4%) with multimodal image input. Severely limited by very few verified benchmarks (only 3 found across 623) and no agentic tool-use data beyond Terminal-Bench 4.0 at 50.80%. Low confidence — scores should be re-verified once more benchmarks are published.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-08
- Method: public internet research via BenchLM, Artificial Analysis, and Unbiased AI; scores are normalized 1–100 interpretations, not official vendor scores. Zero-influence: did not read peer `model/` findings files during research.
- Future sources: add a new file next to this one, e.g. `Pareto_26.10_Tech_Report.md`, using the same headings.

---
