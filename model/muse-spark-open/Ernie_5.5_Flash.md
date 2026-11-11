# Muse Spark Open — findings by Ernie 5.5 Flash

- Source: Meta/Muse Spark Open (`muse-spark-open`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark Open
- **Short description:** Meta's open-weight Muse Spark variant (released 2026-10-15) with the same 1M multimodal input set as the closed tiers — text, image, video, PDF and audio in.
- **Provider / access:** OpenRouter (`meta/muse-spark-open`), Vercel AI Gateway, LLM Gateway, Prime, Merge Gateway, Hyper, plus ~16 routes. Open weights.
- **Release / knowledge:** 2026-10-15; knowledge cutoff 2026-01-04 (models.dev).
- **IDs:** `muse-spark-open`, `meta/muse-spark-open`, `opencode/muse-spark-open`.
- **Context window:** 1,048,576 tokens (1M); max output 262,144.
- **Modalities:** text, image, video, PDF and audio in; text out; reasoning and tool calls.
- **Pricing (as of 2026-11-11):** $1.25 / $4.25 per 1M input/output; cache read $0.15 (same as the closed Muse Spark tiers; Hyper lists $1.40/$4.65).
- **Architecture:** open-weight MoE (Meta; "Open Llama multimodal" per the OpenRouter description).

### Raw benchmarks found

Agent / tool use:

- MCP Atlas: **89.2%** (best verified MCP row in this dataset)
- Toolathlon-Verified: **72.8%**; JobBench: **61.8%**
- FrontierCode 2.0: **6.2%** (near-floor); MazeBench: **0%**

Reasoning / knowledge:

- HLE with tools: **61.0%**; NYT Connections: **78.4%**; SimpleVQA: **73.6%**
- StealthMark Intelligence Benchmarks: **44.1**
- GPQA Diamond / ARC-AGI / FrontierMath: no verified public rows published

Coding:

- FrontierCode 2.0: **6.2%** (the only verified coding row)
- SWE-bench Verified / SWE-bench Pro / DeepSWE / LiveCodeBench: no verified public rows published

Long context:

- 1M context declared; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 78/100.** MCP Atlas 89.2% is elite and Toolathlon 72.8% solid, but FrontierCode 2.0 6.2% and MazeBench 0% are near-floor; only 11 sourced rows exist in total.
- **Reasoning: 72/100.** HLE 61.0% with tools is good, NYT Connections 78.4% and SimpleVQA 73.6% mid; StealthMark 44.1 is weak and no GPQA/ARC row exists.
- **Context window: 100/100.** 1,048,576 tokens with 262,144 max output.
- **Multimodal: 78/100.** The broadest input set in this dataset (text, image, video, PDF, audio), but the only verified multimodal row is BabyVision 80.2 and ZeroBench 50.0 — thin evidence.
- **Coding: 62/100.** FrontierCode 2.0 at 6.2% is the only verified coding row and it is near-floor; the score is a floor, not a measurement.
- **Cost efficiency: 85/100.** $1.25/$4.25 per 1M for open weights with a 1M multimodal context.
- **Overall Score: 78.0/100.** Best fit for open-weight multimodal pipelines that need the full input mix; the near-total absence of coding evidence makes it unsuitable for agent work without your own evaluation.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (Meta Muse Spark model card, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Muse Spark Open — Meta / OpenRouter](https://openrouter.ai/meta/muse-spark-open)
  - [Muse Spark Open benchmarks & sources — BenchLM](https://benchlm.ai/models/muse-spark-open)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Muse_Spark_Open_v2.md`, using the same headings.