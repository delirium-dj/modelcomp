# Beam 1.0 — findings by Mercury 3

- Source: Reflection AI (Beam 1.0)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Beam 1.0
- **Short description:** Reflection AI's first open-weight model (released October 2026): a sparse MoE reasoning model with 501.3B total / 23.4B active parameters (256 experts) and a 1M-token context, under plain Apache 2.0 (no revenue cap). Built for coding, reasoning, and long-horizon agent work.
- **Provider / access:** Open weights (Hugging Face; BF16 + FP8 + NVFP4 variants), Apache 2.0; API via providers (llm-stats price $0.40/$1.20, cache $0.04).
- **Release / knowledge:** Released 2026-10-05 (BenchLeader) / 2026-10-16 (standardcompute); knowledge cutoff not published.
- **IDs:** `reflection/beam-1.0-501b-a23b`.
- **Context window:** 1M tokens.
- **Modalities:** text in / text out (reasoning model; no vision/audio confirmed).
- **Pricing (as of 2026-11):** $0.40 in / $1.20 out per 1M (cached $0.04).
- **Architecture:** sparse MoE, 501.3B total / 23.4B active.

### Raw benchmarks found

Coding:

- SWE-bench Verified: **81.6%** (vendor-reported, BF16 numerics)
- BenchLM composite: 43.08/100 (#130/216, estimated)

Reasoning / knowledge:

- AIME 2026: **97.7%** (vendor, BF16)
- BenchLeader Index: best config 45.7 ±6.2 (#429/584, lower half)

Agent / tool use:

- Targets agentic software engineering, tool use, and long-context reasoning (vendor)

Long context:

- 1M verified; no independent long-context retrieval benchmark captured

### Normalized scores (1–100)

- **Tool use: 82/100.** Agentic/tool-use focus with 1M context; independent agent benchmarks pending.
- **Reasoning: 80/100.** AIME 97.7% (vendor) strong; BenchLeader lower-half placement tempers.
- **Context window: 92/100.** 1M verified.
- **Multimodal: 15/100.** Text-only in/out (no vision/audio confirmed).
- **Coding: 84/100.** SWE-bench Verified 81.6% (vendor) — frontier-adjacent for open weights.
- **Cost efficiency: 84/100.** $0.40/$1.20 with plain Apache 2.0 weights — excellent value.
- **Overall Score: 71/100.** Mean of the five non-cost dims (82+80+92+15+84)/5 = 70.6 → 71. Best-fit: a strong text-only open-weight coder/reasoner; multimodal needs rule it out.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-06
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [llm-stats: Beam 1.0](https://llm-stats.com/models/beam-1.0-501b-a23b)
  - [Artificial Analysis: Reflection Beam 1.0](https://artificialanalysis.ai/models/reflection-beam)
  - [Benchgen: Beam 1.0 501B-A23B](https://benchgen.com/models/reflection-ai/beam-1-0-501b-a23b)
  - [nAIvigate: Beam 1.0 overview](https://naivigate.com/en/model/beam-1-0)
  - [BenchLeader: Reflection Beam 1.0](https://www.benchleader.com/models/reflection-beam)
  - [Standard Compute: Beam 1.0 review](https://standardcompute.com/best-ai-model/beam-1-0)
  - [CloudPrice: Reflection Beam](https://cloudprice.net/models/reflection-beam)
- Future sources: add a new file next to this one using the same headings.
