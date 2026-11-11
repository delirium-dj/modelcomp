# Muse Spark 1.1 — findings by Ernie 5.5 Flash

- Source: Meta/Muse Spark 1.1 (`muse-spark-1.1`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.1
- **Short description:** Meta's natively multimodal Muse Spark reasoning model (released 2026-04-08) with tool use, visual chain of thought and multi-agent orchestration. The first public Muse Spark release, superseded by 1.2 and 1.3.
- **Provider / access:** Meta Model API (`muse-spark-1.1`), OpenRouter, LLM Gateway, Vercel, AI/ML API, Empirio Labs, plus ~13 routes.
- **Release / knowledge:** 2026-04-08 (models.dev); knowledge cutoff not published.
- **IDs:** `muse-spark-1.1`, `meta/muse-spark-1.1`, `opencode/muse-spark-1.1`.
- **Context window:** 1,048,576 tokens (1M); max output 131,072.
- **Modalities:** text, image, PDF and video in; text out; reasoning and tool calls.
- **Pricing (as of 2026-11-11):** $1.25 / $4.25 per 1M input/output; cache read $0.15 (BenchLM notes no comparable first-party rate at publication).
- **Architecture:** proprietary multimodal MoE (undisclosed).

### Raw benchmarks found

Agent / tool use:

- MCP Atlas: **88.1%**; Toolathlon: **75.6%**; OSWorld-Verified: **80.8%**; Terminal-Bench 2.1: **80.0%** (Vals **69.3%**)
- DeepSearchQA: **84.9%**; JobBench: **54.7%**; Finance Agent v2: **57.2%**; WebArena-Verified: **69%**
- OSWorld 2.0: **14.2%**; ExploitGym: **0.8%** (near-floor); Cybench: **92.9%**; CyberGym: **59.0%**

Reasoning / knowledge:

- Humanity's Last Exam: **62.1%** with tools, **52.2%** without tools
- MRCR 1M (8-needle retrieval): **54.1%**; CharXiv Reasoning: **88.4%**; BabyVision: **76.3%**
- GPQA Diamond / ARC-AGI / FrontierMath: no verified public rows published

Coding:

- LiveCodeBench (Vals AI): **85.9%**; SWE-bench (Vals AI): **82.0%**; SWE-bench Pro: **61.5%**
- DeepSWE: **53.3%**; no FrontierSWE/FrontierCode row published
- VulcanBench / ProgramBench: no verified public rows published

Long context:

- MRCR 1M: **54.1%** — the only verified million-token retrieval figure in this comparison; mid-pack quality at 1M

### Normalized scores (1–100)

- **Tool use: 82/100.** MCP Atlas 88.1%, OSWorld-Verified 80.8% and Toolathlon 75.6% are strong for an April-2026 model; OSWorld 2.0 14.2% and ExploitGym 0.8% show the newer harnesses are out of reach.
- **Reasoning: 78/100.** HLE 62.1% with tools and CharXiv 88.4% are solid; MRCR 1M 54.1% is mid-pack for the headline context claim.
- **Context window: 100/100.** 1,048,576 tokens with 131,072 max output.
- **Multimodal: 85/100.** Text, image, PDF and video in with visual chain-of-thought; CharXiv 88.4% and BabyVision 76.3% confirm real visual reasoning.
- **Coding: 75/100.** LiveCodeBench 85.9% and SWE-bench (Vals) 82.0% are decent, but DeepSWE 53.3% and SWE-bench Pro 61.5% are mid-pack.
- **Cost efficiency: 90/100.** $1.25/$4.25 per 1M with $0.15 cache reads — the same price as 1.2/1.3, which are strictly better.
- **Overall Score: 84.0/100.** Best fit for legacy Muse pipelines needing visual chain-of-thought; choose 1.3 instead for anything new.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (Meta Muse Spark model card, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Muse Spark 1.1 — Meta Model API](https://dev.meta.ai/models/muse-spark)
  - [Muse Spark 1.1 benchmarks & sources — BenchLM](https://benchlm.ai/models/muse-spark-1-1)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.1_v2.md`, using the same headings.