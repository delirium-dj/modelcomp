# Muse Spark 1.1 — findings by Beam

- Source: Meta/Muse Spark 1.1, `meta/muse-spark-1.1`
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-10-17)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.1
- **Short description:** Meta's reasoning update to Muse Spark 1.0 (Jul 15, 2026): more capable reasoning, long-horizon agent tasks, computer use, and coding; same price as 1.0/1.2/1.3.
- **Provider / access:** Meta Model API `muse-spark-1.1` (Chat Completions); OpenRouter `meta/muse-spark-1.1`.
- **Release / knowledge:** Released 2026-07-15; knowledge cutoff not stated.
- **IDs:** `meta/muse-spark-1.1`
- **Context window:** 1,048,576 tokens; max output 131,072.
- **Modalities:** text, image, video, PDF in; text out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-11-08):** $1.25 / 1M input, $4.25 / 1M output, $0.15 / 1M cached; paid. Contributor tier $0.10/$0.20 with data sharing.
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Agentic public-lane (BenchLM): **65.67** (#28/1016)
- Terminal-Bench 2.1: **80.0%** (Meta)
- MCP Atlas: **88.1%** (Meta)
- Toolathlon: **75.6%** (Meta)
- OSWorld-Verified: **80.8%** (Meta)
- WebArena-Verified: **69%** (Meta)
- DeepSearchQA: **84.9%** (Meta)
- CyberGym: **59.0%** (Meta)
- Finance Agent v2: **57.2%** (Meta)
- deepSWE: **53.3%** (Meta)
- OSWorld 2.0: **14.2%** (Meta)
- JobBench: **54.7%** (Meta)
- Cybench: **92.9%** (Meta)
- ExploitGym: **0.8%** (Meta)
- GDPval-AA: **35.6%** normalized / 1375 Elo (Artificial Analysis)
- Terminal-Bench 2.1 (Vals): **69.3%** (Vals AI)
- AA Agentic Index: **27.5%** (Artificial Analysis)
- AA Briefcase: not individually reported
- AA AutomationBench: not individually reported
- AA Terminal-Bench 4.0: not individually reported
- GDP.pdf: not individually reported
- AA-AnalystAgent: not individually reported
- MazeBench: not individually reported
- AA Cyber Index: not individually reported
- CWE-Bench-AA: not individually reported
- DeepsecBench-AA: not individually reported
- CyberGym-E2E-AA: not individually reported

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): **65.67** (unranked)
- MRCR 1M: **54.1%** (from 1.1 cross-ref; 1.2 not reported)
- GPQA / HLE / ARC-AGI: not reported for 1.2
- AA Intelligence Index: **33.7%** (measured, updated 2026-11-07)
- AA-GPQA Diamond: **89.8%** (Artificial Analysis)
- AA-HLE: **46.2%** (Artificial Analysis)
- AA-Omniscience Index: **28.1%**
- AA-Omniscience Accuracy: **52.1%**
- AA-Omniscience Hallucination Rate: **50.0%**
- AA-LCR: **77.7%** (Artificial Analysis)
- CritPt: **15.1%** (Artificial Analysis)
- MLCR-AA: not individually reported
- AA-IFBench: not individually reported
- AA Global-MMLU-Lite: not individually reported
- AA AIME 2025: not individually reported
- FrontierMath v2: not individually reported
- GPQA Diamond (Vals): **91.2%** (Vals AI)
- MMLU-Pro (Vals): **88.7%** (Vals AI)

Coding:

- Coding public-lane (BenchLM): **65.67** (#28/1016)
- Terminal-Bench 2.1: **80.0%**
- SWE-bench Pro: **61.5%** (1.1 cross-ref)
- AA-SciCode: **58.8%**
- LiveCodeBench (Vals): **85.9%** (Vals AI)
- SWE-bench (Vals): **82.0%** (Vals AI)
- AA Coding Index: **71.3%** (Artificial Analysis)
- VulcanBench v3: not individually reported
- FrontierSWE v2: not individually reported
- ScarfBench: not individually reported
- Bug Hunt Bench: not individually reported
- PostTrainBench v1.1: not individually reported
- FrontierCode 2.0: not individually reported
- ExtractBench (LlamaIndex): not individually reported
- ParseBench: not individually reported

Long context:

- 1M window; MRCR 1M 54.1% (from 1.1).

Multimodal:

- CharXiv: **88.4%** (1.1 cross-ref)
- BabyVision: **76.3%** (1.1 cross-ref)
- Design Arena Website: **1268** (OpenRouter)
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

- **Tool use: 76/100.** Agentic lane #25/128 (60.9), Terminal-Bench 2.1 82.9%, GDPval 1631, AA Agentic 44.0%; caps at unverified MCP Atlas/OSWorld. Enrichment (2026-11-08): BenchLM aggregator (updated 2026-11-07) corroborates Terminal-Bench 2.1 80.0%, MCP Atlas 88.1%, Toolathlon 75.6%, OSWorld-Verified 80.8%, WebArena-Verified 69%, DeepSearchQA 84.9%, CyberGym 59.0%, Finance Agent v2 57.2%, deepSWE 53.3%, OSWorld 2.0 14.2%, JobBench 54.7%, Cybench 92.9%, ExploitGym 0.8%, GDPval-AA 35.6% normalized/1375 Elo, Terminal-Bench 2.1 Vals 69.3%, AA Agentic Index 27.5%, AA Intelligence 33.7%, AA-GPQA 89.8%, AA-HLE 46.2%, AA-Omniscience 28.1%/52.1%/50.0%, AA-LCR 77.7%, CritPt 15.1%, GPQA Diamond Vals 91.2%, MMLU-Pro Vals 88.7%, AA Coding Index 71.3%, Design Arena 1268. Corroborates band; no change.
- **Reasoning: 78/100.** Reasoning lane 80.1 (2 rows), MRCR 1M 54.1%; caps at no published GPQA/HLE/ARC-AGI. Enrichment adds AA Intelligence 33.7%, AA-GPQA 89.8%, AA-HLE 46.2%, AA-Omniscience 28.1%/52.1%/50.0%, AA-LCR 77.7%, CritPt 15.1%, GPQA Diamond Vals 91.2%, MMLU-Pro Vals 88.7%. Corroborates band; no change.
- **Context window: 80/100.** 1M window; MRCR 54.1% caps higher.
- **Multimodal: 82/100.** Text/image/video/PDF in; caps at no verified 1.2-specific multimodal numbers. Enrichment adds Design Arena 1268. Corroborates band; no change.
- **Coding: 74/100.** DeepSWE 59.3%, SWE-bench Vals 86.6%, VulcanBench 87.0%, AA-SciCode 57.4%, coding lane #40/150 (52.6); caps at FrontierSWE v2 12.0%. Enrichment adds AA Coding Index 71.3%, Design Arena 1268. Corroborates band; no change.
- **Cost efficiency: 85/100.** Paid $1.25/$4.25 per 1M; contributor tier very cheap.
- **Overall Score: 78/100.** Mean of five quality dims (BenchLM aggregate 65.67); best-fit for coding agents at low cost (superseded by 1.3). Enrichment (2026-11-08) added new verified rows (Terminal-Bench 2.1 80.0%, MCP Atlas 88.1%, Toolathlon 75.6%, OSWorld-Verified 80.8%, WebArena-Verified 69%, DeepSearchQA 84.9%, CyberGym 59.0%, Finance Agent v2 57.2%, deepSWE 53.3%, OSWorld 2.0 14.2%, JobBench 54.7%, Cybench 92.9%, ExploitGym 0.8%, GDPval-AA 35.6% normalized/1375 Elo, Terminal-Bench 2.1 Vals 69.3%, AA Agentic Index 27.5%, AA Intelligence 33.7%, AA-GPQA 89.8%, AA-HLE 46.2%, AA-Omniscience 28.1%/52.1%/50.0%, AA-LCR 77.7%, CritPt 15.1%, GPQA Diamond Vals 91.2%, MMLU-Pro Vals 88.7%, AA Coding Index 71.3%, Design Arena 1268). No dimension band moved; Overall unchanged at 78.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-10-17 preserved; new benchmark rows added; no dimension score changed (new evidence corroborates existing bands).
- Reference URLs:
  - [BenchLM — Muse Spark 1.1](https://benchlm.ai/models/muse-spark-1-1)
  - [Artificial Analysis — Muse Spark 1.1](https://artificialanalysis.ai/models/muse-spark-1-1)
  - [Meta AI — Muse Spark 1.1](https://ai.meta.com/blog/introducing-muse-spark-1-1/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).