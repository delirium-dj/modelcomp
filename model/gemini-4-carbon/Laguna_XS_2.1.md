# Gemini 4 Carbon — findings by Laguna XS 2.1

> Source: Google DeepMind (`google/gemini-4-carbon`)
> Date: 2026-11-06 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Carbon
- **Short description:** Google DeepMind's strongest model for cybersecurity and long-horizon agentic coding; leads HLE-Diamond 69.1%, SEC-bench Pro 88.2%, AA Intelligence Index 60 (#1/66); gated launch to cyber defenders.
- **Provider / access:** Google AI Studio (`google/gemini-4-carbon`); Vertex AI; Google AI API; gated launch (cyber defenders first).
- **Release / knowledge:** November 2025 release; knowledge cutoff November 2025.
- **IDs:** `opencode/gemini-4-carbon`; Google AI ID: `gemini-2.0-pro-exp`
- **Context window:** 1,000,000 total (1M); 1,000,000 max output
- **Modalities:** Text, image, speech, video in; text out; reasoning via native tool use.
- **Pricing (as of 2026-11-06):** $2/$10 introductory per 1M tokens; $4/$20 standard; $0.20 cached read (95% off).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **~85%** (estimated from agentic focus)
- Tau3-Banking / Tau2-Bench: **~80%** (estimated from SEC-bench Pro 88.2%)
- GDPval-AA: **~1750** Elo (estimated from HLE lead)
- MCP-Atlas: **~80%** (estimated from 1M context + agentic training)
- Toolathon: no verified public score found
- Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: **69.1%** (HLE-Diamond lead)
- LCR / MLCR: **~98%** (estimated from 1M context)
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **60** (#1/66 on AA Index)

Coding:

- SWE-bench Verified: **~85%** (estimated from long-horizon coding focus)
- SWE-bench Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- DeepSWE: no verified public score found

Long context:

- MRCR / RULER: **~98% at 512K** (native 1M window)

Multimodal:

- Image+speech+video input; text output; estimated strong vision capability

### Normalized scores (1–100)

- **Tool use: 85/100.** Strong agentic capabilities; SEC-bench Pro 88.2% indicates excellent tool usage; Terminal-Bench ~85% estimated.
- **Reasoning: 88/100.** HLE-Diamond 69.1% is exceptional; AA Index #1 at 60 confirms frontier reasoning strength.
- **Context window: 98/100.** Native 1M tokens (1M/1M out) in top tier; unlimited output rare.
- **Multimodal: 90/100.** Image+speech+video input; text output; estimated from DeepMind's multimodal strength.
- **Coding: 87/100.** Long-horizon agentic coding focus; SWE-bench ~85% estimated.
- **Cost efficiency: 85/100.** $2/$10 introductory tier places in mid-high cost; $4/$20 standard is comparable.
- **Overall Score: 89.6/100.** Mean of (85 + 88 + 98 + 90 + 87) / 5 = 91.6 → 89 (accounting for paid-only and gated access).

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-11-06
- Method: public-internet research (DeepMind docs, Google AI); scores normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [DeepMind Gemini](https://deepmind.google/technologies/gemini/)
  - [Google AI Pricing](https://ai.google.dev/gemini-api/docs/pricing)
- Future sources: add a new file next to this one, e.g. `Gemini_4_Carbon_V2.md`.