# Muse Spark 1.1 — findings by Mistral Large 4

- Source: Meta (`muse-spark-1.1`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.1
- **Short description:** Meta Superintelligence Labs' second Muse Spark model and first paid-API release (2026-07-09) — multimodal agentic reasoning model with native primary/subagent orchestration, MCP and custom skills; successor 1.2 (2026-08-05) and 1.3 (2026-09-02) followed.
- **Provider / access:** Meta Model API (OpenAI-compatible; `muse-spark-1.1`), OpenRouter (`meta/muse-spark-1.1`), $20 introductory credits at launch.
- **Release / knowledge:** Released 2026-07-09 (US developer preview); original Muse Spark debuted April 2026. Knowledge cutoff not restated in reviewed snippets.
- **IDs:** `muse-spark-1.1` (Meta Model API); `meta/muse-spark-1.1` (OpenRouter).
- **Context window:** 1,048,576 tokens, self-managed with built-in compression (original shipped ~260K per AA — conflict noted).
- **Modalities:** Text, images, video, PDF files in; text out; tool calls, structured outputs, computer use, built-in search.
- **Pricing (as of 2026-11-05):** $1.25 / $4.25 per 1M in/out (Standard); $20 free credits at launch. No standing free tier.
- **Architecture:** Proprietary (Meta's first closed model), weights not disclosed; native multi-agent orchestration.

### Raw benchmarks found

Official Meta eval report + AA cross-checked against kingy, handyai, digitalapplied, BenchLM, theplanettools, OpenRouter; conflicts noted:

Agent / tool use:

- MCP Atlas: **88.1** (Handy AI model drop)
- JobBench: **54.7** (vs Opus 4.8 48.4, GPT-5.5 38.3) (Handy AI)
- Finance Agent v2: **57.2** (Handy AI)
- HLE with tools: **62.1** (vs Opus 4.8 57.9) (Handy AI)
- BenchLM composite: **#32 of 216 at 65.16/100**
- OSWorld / Claw-Eval / AutomationBench: no verified public score found for this ID

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **51 (v4.1)** (theplanettools); AA-Omniscience rose 4→18 with hallucination rate down 35 pts to 38% (AA article) — abstention-driven gain, noted
- GPQA / LCR / CritPt: no verified public score found for this ID

Coding:

- Terminal-Bench 2.1: **80.0** — 3rd (GPT-5.5 83.4, Opus 4.8 82.7) (omidsaffari/kingy)
- DeepSWE v1.1: **53.3** — 3rd (GPT-5.5 67.0, Opus 4.8 59.0); up from 10.0 on base Muse Spark (Handy AI)
- SWE-bench Pro: **61.5** (beats GPT-5.5 58.6, trails Opus 4.8 69.2) (kingy)
- SWE-bench Verified / LiveCodeBench / SciCode: no verified public score found for this exact ID

Long context:

- 1M self-managed window; no verified MRCR/RULER score found for 1.1 specifically (1.3 lineage: 98.5% @256–512K — labelled sibling, not merged)

### Normalized scores (1–100)

- **Tool use: 89/100.** MCP Atlas 88.1, JobBench 54.7 (top), HLE-tools 62.1 — strongest professional/tool rows at launch.
- **Reasoning: 87/100.** AA 51 v4.1; AA-Omniscience 4→18 via abstention (hallucination −35 pts); no GPQA captured.
- **Context window: 96/100.** 1M self-managed window in the 95–100 tier; original ~260K conflict noted; no verified 512K+ retrieval.
- **Multimodal: 85/100.** Text/image/video/PDF in, text out; no audio or non-text output.
- **Coding: 88/100.** TB 2.1 80.0 (3rd), SWE-Pro 61.5, DeepSWE 53.3 (3rd); trails Opus 4.8/GPT-5.5 on pure coding.
- **Cost efficiency: 88/100.** $1.25/$4.25 per 1M in the ~88 band with $20 launch credits; 6–7x cheaper on output than Opus 4.8/GPT-5.5 at launch; no standing free tier.
- **Overall Score: 89/100.** Half-up mean of (89 + 87 + 96 + 85 + 88) / 5 = 89.0 → 89. Best fit: July–August 2026 paid agentic/API pick at $1.25/$4.25; superseded by 1.2/1.3 (1.3 has a $0 Zen tier).

---

## Signature

- Provided by: **Mistral Large 4 (mistral-large-4)** — 2026-11-05
- Method: public internet research (3+3 web searches, official Meta eval report/blog cited, 2026-11-05 UTC); cross-checked against AA, kingy, BenchLM, Handy AI, digitalapplied, theplanettools, OpenRouter, Vals, omidsaffari; conflicts (AA 51 v4.1 vs later versions; 1M vs ~260K original context) listed side by side. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing Muse Spark 1.1 — Meta AI (official, 2026-07-09)](https://ai.meta.com/blog/introducing-muse-spark-meta-model-api/)
  - [Muse Spark 1.1 Evaluation Report — Meta AI](https://ai.meta.com/static-resource/muse-spark-1-1-evaluation-report/)
  - [Artificial Analysis — Muse Spark 1.1 (AA-Omniscience 4→18, hallucination −35 pts)](https://artificialanalysis.ai/articles/muse-spark-1-1-everything-you-need-to-know)
  - [kingy — Muse Spark 1.1 benchmarks (TB 80.0, SWE-Pro 61.5, DeepSWE 53.3)](https://kingy.ai/blog/muse-spark-1-1-benchmarks-specs-evals/)
  - [Handy AI — Model Drop 1.1 (MCP Atlas 88.1, JobBench 54.7, HLE-tools 62.1, Finance 57.2)](https://handyai.substack.com/p/model-drop-muse-spark-11)
  - [BenchLM — muse-spark-1-1 (#32/216 at 65.16, 1M ctx)](https://benchlm.ai/models/muse-spark-1-1)
  - [digitalapplied — 1.1 agentic model analysis (tool-use tops, coding trails)](https://www.digitalapplied.com/blog/meta-muse-spark-1-1-agentic-model-api-2026)
  - [theplanettools — 1.1 review (AA 51 v4.1, $1.25/$4.25, $20 credits)](https://theplanettools.ai/tools/muse-spark-1-1)
  - [OpenRouter — meta/muse-spark-1.1 (1,048,576 ctx, text/image/video/PDF)](https://openrouter.ai/meta/muse-spark-1.1)
  - [Vals AI — meta_muse-spark-1.1 (released 2026-07-09)](https://www.vals.ai/models/meta_muse_spark-1.1)
