# Muse Spark 1.2 — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-11 (UTC) — second-pass verification
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2 (Contributor / Free / Standard / Max are tiers of the same weights, not separate models)
- **Short description:** Meta Superintelligence Labs' coding-focused Muse Spark refresh (2026-08-05), co-trained with the Muse Code terminal agent; 1M context, multimodal in, and the launch's highest MCP Atlas score (90.3%). Succeeded by Muse Spark 1.3 (2026-09-01).
- **Provider / access:** Meta Model API, Muse Code, OpenRouter (`meta/muse-spark-1.2`); xhigh reasoning effort.
- **Release / knowledge:** 2026-08-05; knowledge cutoff not published.
- **IDs:** `muse-spark-1.2` (Meta Model API); `meta/muse-spark-1.2` (OpenRouter).
- **Context window:** 1,048,576 tokens; 131,072 max output.
- **Modalities:** text, image, video, PDF, speech in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing:** Standard $1.25 / $4.25 per 1M in/out, cached input $0.15.

### Raw benchmarks found

Agent / tool use:

- MCP Atlas (36 servers / 220 tools): **90.3%** (Meta launch; leads Opus 5's 85.8%)
- Terminal-Bench 2.1: **82.9%** (xhigh; 2nd behind Opus 5 86.7)
- GDPVal-AA v2: **1631 Elo** (Meta launch; AA-measured GDPval-AA **49.1%** xhigh)
- AA Agentic Index: **43.2 xhigh**
- OSWorld: **75-80%** (estimated)

Reasoning / knowledge:

- GPQA Diamond: **90.4%** xhigh (AA)
- HLE: **45.5%** xhigh (AA)
- AA Intelligence Index: **39.6 xhigh**
- CritPt: **17.7%** xhigh
- AA-Omniscience: accuracy **45.4%** / non-hallucination **66.7%** (excellent non-hallucination rate)

Coding:

- DeepSWE 1.1: **59.3%** (3rd behind Opus 5 65.0)
- Meta Internal Coding Bench (440 tasks): **70.6%** (2nd behind Opus 5 79.4)
- AA Coding Index: **72.2 xhigh**
- SciCode: **57.4%** xhigh
- SWE-bench Verified: no verified public score found

Multimodal: MMMU-Pro, Omniscience, etc. strong; native vision/video/speech/PDF.

### Normalized scores (1–100)

- **Tool use: 86/100.** MCP Atlas 90.3% is best in Meta's comparison; TB 2.1 82.9%; capped by AA Index 43.2.
- **Reasoning: 78/100.** GPQA 90.4% and HLE 45.5% are solid mid-frontier; capped by AA Index 39.6.
- **Context window: 95/100.** 1,048,576-token window with AA-LCR 79.0%; no ≥98%-at-512K+ evidence.
- **Multimodal: 92/100.** Text/image/video/PDF/speech in (audio-in tier 90–100) per AA.
- **Coding: 82/100.** TB 2.1 82.9%, Coding Index 72.2 and DeepSWE 59.3% strong; capped by no SWE-bench Verified.
- **Cost efficiency: 88/100.** Standard $1.25/$4.25 maps to ~88 anchor; Contributor tier would be ~98.
- **Overall Score: 86.6/100.** Mean of (86, 78, 95, 92, 82) = 86.6 — strong, cheap multimodal agent model.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-11
- Method: public internet research (Meta methodology, Artificial Analysis, BenchLM, AA); scores normalized 1-100 interpretations.