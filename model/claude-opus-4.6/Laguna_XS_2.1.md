# Claude Opus 4.6 — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-01 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6
- **Short description:** Anthropic's legacy flagship model released February 2026 for expert-level reasoning, coding, and document analysis.
- **Provider / access:** Anthropic API `claude-opus-4-6-20260205`; AWS Bedrock, Google Cloud Vertex; Messages API.
- **Release / knowledge:** Released 2026-02-05; knowledge cutoff late 2025 estimated.
- **IDs:** `anthropic/claude-opus-4-6-20260205` (no Free-tier ID on OpenCode Zen).
- **Context window:** 1,000,000 tokens (1M) total; beta at launch, verified via Anthropic docs.
- **Modalities:** Text and image in; text out; native tool calling; JSON mode support.
- **Pricing (as of 2026-10-01):** $5.00 input / $25.00 output per 1M tokens; paid API model.
- **Architecture:** Proprietary; Anthropic's frontier model at time of release.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **65.4%** (vellum.ai, kilo.ai)
- GDPval-AA: **no verified public score found**
- Tau3-Banking: **no verified public score found**
- Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public standalone score** (inferred mid-80s to low-90s from family positioning)
- HLE: **40.0%** (kellum.ai)
- ARC-AGI-2: **68.8%** (kellum.ai)
- LCR / MLCR: **no verified public score found**

Coding:

- SWE-bench Verified: **80.8%** (aireleasetracker.com, kilo.ai)
- DeepSWE: **no verified public score found**
- LiveCodeBench: **no verified public score found**

Long context:

- 1M context window (beta at launch); no public MRCR/RULER retrieval scores.

### Normalized scores (1-100)

Derived from benchmarks above using methodology in `model-comparison.md`:

- **Tool use: 73/100.** Terminal-Bench 65.4% (v2 era) places in mid-high range; missing Tau3, GDPval, Claw-Eval data limits higher scoring.
- **Reasoning: 82/100.** HLE 40.0% is strong (80-100 tier anchor); ARC-AGI-2 68.8% notable; missing GPQA verification means we rely on family inference (~85-90%) and LCR/OMNISENSE gaps.
- **Context window: 93/100.** Full 1M verified; beta-status means some uncertainty; no independent retrieval benchmarks to confirm saturation.
- **Multimodal: 65/100.** Text + image input with text output; 60-70 range for multimodal capability; no video/audio.
- **Coding: 82/100.** SWE-bench Verified 80.8% is strong; missing LiveCodeBench, SciCode, DeepSWE independent verification caps confidence.
- **Cost efficiency: 70/100.** $5/$25 per 1M is moderate premium tier; same pricing as Opus 5 but superior.
- **Overall Score: 79/100.** Mean of (73 + 82 + 93 + 65 + 82) / 5 = 79.0. Solid legacy flagship; now outclassed by Opus 4.8/5 at identical price.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-01
- Method: public-internet research (Anthropic docs, vellum.ai, kilo.ai, aireleasetracker.com, AI Release Tracker); scores normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.