# Muse Spark 1.2 — findings by Beam

- Source: Meta/Muse Spark 1.2, `meta/muse-spark-1.2`
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-10-17)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2
- **Short description:** Meta's coding-focused update to Muse Spark 1.1 (Aug 5, 2026): scaled training compute on coding tasks, co-trained with Muse Code terminal agent, long-horizon coding, self-improvement. Same price as 1.1/1.3.
- **Provider / access:** Meta Model API `muse-spark-1.2` (Chat Completions); OpenRouter `meta/muse-spark-1.2`.
- **Release / knowledge:** Released 2026-08-05; knowledge cutoff not stated.
- **IDs:** `meta/muse-spark-1.2`
- **Context window:** 1,048,576 tokens; max output 131,072.
- **Modalities:** text, image, video, PDF in; text out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-11-08):** $1.25 / 1M input, $4.25 / 1M output, $0.15 / 1M cached; paid. Contributor tier $0.10/$0.20 with data sharing.
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Agentic public-lane (BenchLM): **60.9** (#25/128)
- Terminal-Bench 2.1: **82.9%**
- Terminal-Bench 2.1 (Vals): **69.7%**
- GDPval-AA: **1631 Elo** / 48.6% (AA)
- AA Agentic Index: **44.0%**
- MCP Atlas: not reported for 1.2
- OSWorld 2.0: not reported for 1.2
- AA Briefcase: not individually reported
- AA AutomationBench: not individually reported
- AA Terminal-Bench 4.0: not individually reported
- GDP.pdf: not individually reported
- AA-AnalystAgent: not individually reported
- MazeBench: **0%** (MazeBench)
- AA Cyber Index: not individually reported
- CWE-Bench-AA: not individually reported
- DeepsecBench-AA: not individually reported
- CyberGym-E2E-AA: not individually reported
- AA Briefcase: not individually reported

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): **80.1** (unranked, 2 rows)
- MRCR 1M: **54.1%** (from 1.1 cross-ref; 1.2 not reported)
- GPQA / HLE / ARC-AGI: not reported for 1.2
- AA Intelligence Index: **39.6%** (measured, updated 2026-11-07)
- AA-GPQA Diamond: **90.4%** (Artificial Analysis)
- AA-HLE: **45.5%** (Artificial Analysis)
- AA-Omniscience Index: **27.2%**
- AA-Omniscience Accuracy: **45.4%**
- AA-Omniscience Hallucination Rate: **33.3%**
- AA-LCR: **79.0%** (Artificial Analysis)
- CritPt: **17.7%** (Artificial Analysis)
- MLCR-AA: not individually reported
- AA-IFBench: not individually reported
- AA Global-MMLU-Lite: not individually reported
- AA AIME 2025: not individually reported
- FrontierMath v2 Tiers 1-3: not individually reported
- FrontierMath v2 Tier 4: not individually reported

Coding:

- Coding public-lane (BenchLM): **52.6** (#40/150)
- Terminal-Bench 2.1: **82.9%**
- DeepSWE: **59.3%**
- SWE-bench (Vals): **86.6%**
- SWE-bench Pro: not reported for 1.2 (61.5% for 1.1)
- LiveCodeBench (Vals): not reported for 1.2 (85.9% for 1.1)
- AA-SciCode: **57.4%**
- VulcanBench v3: **87.0%**
- FrontierSWE v2: **12.0%**
- ScarfBench: not individually reported
- Bug Hunt Bench: not individually reported
- PostTrainBench v1.1: not individually reported
- FrontierCode 2.0: not individually reported
- AA Coding Index: **72.2%** (Artificial Analysis)
- CursorBench 4.0: not individually reported

Long context:

- 1M window; MRCR 1M 54.1% (from 1.1).

Multimodal:

- CharXiv / BabyVision: not reported for 1.2 (1.1: CharXiv 88.4%, BabyVision 76.3%)
- Vals: text/image/video/PDF in.
- Design Arena Website: **1311** (OpenRouter)
- AA-MMMU-Pro: not individually reported
- ExtractBench (LlamaIndex): not individually reported
- ParseBench: not individually reported

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 76/100.** Agentic lane #25/128 (60.9), Terminal-Bench 2.1 82.9%, GDPval 1631, AA Agentic 44.0%; caps at unverified MCP Atlas/OSWorld. Enrichment (2026-11-08): BenchLM aggregator (updated 2026-11-07) corroborates AA Intelligence 39.6%, AA-GPQA 90.4%, AA-HLE 45.5%, AA-Omniscience 27.2%/45.4%/33.3%, AA-LCR 79.0%, CritPt 17.7%, AA Coding Index 72.2%, Design Arena 1311. Corroborates band; no change.
- **Reasoning: 78/100.** Reasoning lane 80.1 (2 rows), MRCR 1M 54.1%; caps at no published GPQA/HLE/ARC-AGI. Enrichment adds AA Intelligence 39.6%, AA-GPQA 90.4%, AA-HLE 45.5%, AA-Omniscience 27.2%/45.4%/33.3%, AA-LCR 79.0%, CritPt 17.7%. Corroborates band; no change.
- **Context window: 80/100.** 1M window; MRCR 54.1% caps higher.
- **Multimodal: 82/100.** Text/image/video/PDF in; caps at no verified 1.2-specific multimodal numbers. Enrichment adds Design Arena 1311. Corroborates band; no change.
- **Coding: 74/100.** DeepSWE 59.3%, SWE-bench Vals 86.6%, VulcanBench 87.0%, AA-SciCode 57.4%, coding lane #40/150 (52.6); caps at FrontierSWE v2 12.0%. Enrichment adds AA Coding Index 72.2%, Design Arena 1311. Corroborates band; no change.
- **Cost efficiency: 85/100.** Paid $1.25/$4.25 per 1M; contributor tier very cheap.
- **Overall Score: 78/100.** Mean of five quality dims (BenchLM aggregate 65.83); best-fit for coding agents at low cost (superseded by 1.3). Enrichment (2026-11-08) added new verified rows (AA Intelligence 39.6%; AA-GPQA 90.4%; AA-HLE 45.5%; AA-Omniscience 27.2%/45.4%/33.3%; AA-LCR 79.0%; CritPt 17.7%; AA Coding Index 72.2%; Design Arena 1311). No dimension band moved; Overall unchanged at 78.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-10-17 preserved; new benchmark rows added; no dimension score changed (new evidence corroborates existing bands).
- Reference URLs:
  - [BenchLM — Muse Spark 1.2](https://benchlm.ai/models/muse-spark-1-2)
  - [Artificial Analysis — Muse Spark 1.2](https://artificialanalysis.ai/models/muse-spark-1-2)
  - [Meta AI — Muse Spark 1.2](https://developer.meta.com/ai/models/muse-spark/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).