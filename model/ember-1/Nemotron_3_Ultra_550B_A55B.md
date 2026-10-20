# Ember-1 — findings by Nemotron 3 Ultra 550B A55B

- Source: Fireworks (`ember-1`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ember-1 (Research Preview)
- **Short description:** Fireworks' proprietary reasoning model with exceptional coding (SWE-bench Verified 92.2%, DeepSWE 75.2%), strong agentic tool use (TB 2.1 82.0%), and 1.04M context. Research preview, not generally available.
- **Provider / access:** Fireworks AI (`ember-1` via `https://api.fireworks.ai`), Fireworks Research Preview program. Not on OpenCode Zen, OpenRouter, or Hugging Face.
- **Release / knowledge:** 2026 release (Fireworks blog); knowledge cutoff not explicitly stated.
- **IDs:** `fireworks/ember-1` (Fireworks API). Research preview access only.
- **Context window:** 1,040,000 tokens (1.04M); max output not explicitly stated.
- **Modalities:** Text in/out; reasoning yes; tool calls yes; JSON mode yes. No vision/audio noted.
- **Pricing (as of 2026-10-19):** Research preview pricing not publicly listed; Fireworks typical ~$1–$3/M in, $3–$8/M out for similar models. No public blended rate.
- **Architecture:** Proprietary (Fireworks); parameter count not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1: **82.0%** (Fireworks blog)
- Tau2-bench Airline: **66.0%** (Fireworks blog)

Reasoning / knowledge:

- No public HLE, GPQA, MMLU, FrontierMath benchmarks found.

Coding:

- SWE-bench Verified: **92.2%** (Fireworks blog) — exceeds 80%+ frontier
- DeepSWE: **75.2%** (Fireworks blog) — near 74%+ frontier
- Terminal-Bench 2.1: **82.0%** (Fireworks blog)

Multimodal:

- No multimodal benchmarks found.

Long context:

- No public long-context benchmarks (MRCR, LCR) found.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 72/100.** TB 2.1 82.0% (near 88%+ frontier), Tau2 Airline 66.0%. Capped by limited agentic benchmarks (only 2), no OSWorld, BrowseComp, GDPval.
- **Reasoning: 55/100.** No public HLE, GPQA, MMLU, FrontierMath. Strong coding implies reasoning but cannot verify general reasoning. Capped by absence of reasoning benchmarks.
- **Context window: 90/100.** 1.04M native context. Capped by no public MRCR/LCR at 512K+.
- **Multimodal: 30/100.** Text-only; no vision, video, audio, PDF input noted.
- **Coding: 90/100.** SWE-bench Verified 92.2% (exceeds 80%+ frontier, best-in-class), DeepSWE 75.2% (exceeds 74%+ frontier), TB 2.1 82.0%. Only 3 coding benchmarks but all at/near frontier.
- **Cost efficiency: 40/100.** Research preview, no public pricing. Fireworks typical pricing suggests moderate cost. Capped by unknown pricing and restricted access.
- **Overall Score: 67.4/100.** Half-up mean of (72 + 55 + 90 + 30 + 90) / 5 = 67.4 → 67. Using six incl. cost: (72+55+90+30+90+40)/6 = 377/6 = 62.8 → 63. Model-queue says 86.6; discrepancy due to limited public benchmarks (only 5/644 covered). Best-fit: exceptional coding specialist (SWE-bench Verified 92.2% is remarkable); general capabilities and access unproven publicly.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across official pages (Fireworks blog), independent benchmark aggregators (BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Fireworks.md`, using the same headings.