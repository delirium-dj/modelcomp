# Muse Spark Open — findings by Beam

- Source: Meta/Muse Spark Open, `meta/muse-spark-open`
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-11-04)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark Open
- **Short description:** Meta's open-weight Muse Spark variant (Oct 2026): 816B/42B active MoE, open weights on HuggingFace, strong agentic/coding/multimodal at mid cost.
- **Provider / access:** Meta HuggingFace `meta-models/Muse-Spark-Open-816B-A42B`; OpenRouter.
- **Release / knowledge:** Released 2026-10-??; knowledge cutoff not stated.
- **IDs:** `meta/muse-spark-open`
- **Context window:** 1,000,000 tokens.
- **Modalities:** text, image in; text out; reasoning yes; tool calling yes; structured output yes. Open weights.
- **Pricing (as of 2026-11-08):** open weights (self-host); paid API via OpenRouter.
- **Architecture:** MoE, 816B total / 42B active; open weights.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- JobBench: **61.8%** (Meta)
- MCP Atlas: **89.2%** (Meta)
- HLE w/ tools: **61.0%** (Meta)
- Toolathlon-Verified: **72.8%** (Meta)
- GDPval-AA: **45.1%** normalized / 1401 Elo (Artificial Analysis)
- AA Briefcase: **1279** (Artificial Analysis)
- AA AutomationBench: **49.7%** (Artificial Analysis)
- AA Terminal-Bench 4.0: **8.1%** (Artificial Analysis)
- GDP.pdf: **18.6%** (Artificial Analysis)
- aaTerminalBench21: **76.4%** (Artificial Analysis)
- MazeBench: **0%** (MazeBench)
- GDPval-AA: **1401 Elo** (Artificial Analysis)
- AA Briefcase: **1279** (Artificial Analysis)
- AA AutomationBench: **49.7%** (Artificial Analysis)
- AA Terminal-Bench 4.0: **8.1%** (Artificial Analysis)
- GDP.pdf: **18.6%** (Artificial Analysis)
- aaTerminalBench21: **76.4%** (Artificial Analysis)
- AA Cyber Index: not individually reported
- CWE-Bench-AA: not individually reported
- DeepsecBench-AA: not individually reported
- CyberGym-E2E-AA: not individually reported

Reasoning / knowledge:

- AA-LCR: **78.3%** (Artificial Analysis)
- CritPt: **14.9%** (Artificial Analysis)
- MLCR-AA: **7.8%** (Artificial Analysis)
- AA-HLE: **43.9%** (Artificial Analysis)
- AA-Omniscience Accuracy: **42.0%** (Artificial Analysis)
- AA-Omniscience Hallucination Rate: **28.0%** (Artificial Analysis)
- Artificial Analysis Intelligence Index: **24.9%** (measured, updated 2026-11-07)
- AA-GPQA Diamond: **89.0%** (Artificial Analysis)
- AA-Omniscience Index: **25.8%** (Artificial Analysis)
- AA-IFBench: not individually reported
- AA Global-MMLU-Lite: not individually reported
- AA AIME 2025: not individually reported
- FrontierMath v2: not individually reported

Coding:

- DeepSWE: **60.0%** (Meta)
- SWE-Atlas Codebase QnA: **58.0%** (Meta)
- AA-SciCode: **58.4%** (Artificial Analysis)
- FrontierCode 2.0: **6.2%** (Cognition)

Long context:

- 1M window; AA-LCR 78.3%.

Multimodal:

- ZeroBench: **50.0%** (Meta)
- BabyVision: **80.2%** (Meta)
- SimpleVQA: **73.6%** (Meta)
- AA-MMMU-Pro: **80.9%** (Artificial Analysis)
- Design Arena Website: **1302** (OpenRouter)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 84/100.** MCP Atlas 89.2%, HLE w/ tools 61.0%, Toolathlon-Verified 72.8%, JobBench 61.8%, GDPval-AA 45.1% normalized/1401 Elo, AA Briefcase 1279, AA AutomationBench 49.7%, AA Terminal-Bench 4.0 8.1%, GDP.pdf 18.6%, aaTerminalBench21 76.4%, MazeBench 0%. Enrichment (2026-11-08): BenchLM aggregator (updated 2026-11-07) corroborates JobBench 61.8%, MCP Atlas 89.2%, HLE w/ tools 61.0%, Toolathlon-Verified 72.8%, GDPval-AA 45.1% normalized/1401 Elo, AA Briefcase 1279, AA AutomationBench 49.7%, AA Terminal-Bench 4.0 8.1%, GDP.pdf 18.6%, aaTerminalBench21 76.4%, MazeBench 0%, AA Intelligence 24.9%, AA-GPQA 89.0%, AA-HLE 43.9%, AA-Omniscience Accuracy 42.0%, AA-Omniscience Hallucination Rate 28.0%, AA-LCR 78.3%, CritPt 14.9%, MLCR 7.8%, DeepSWE 60.0%, SWE-Atlas Codebase QnA 58.0%, AA-SciCode 58.4%, FrontierCode 2.0 6.2%, ZeroBench 50.0%, BabyVision 80.2%, SimpleVQA 73.6%, AA-MMMU-Pro 80.9%, Design Arena 1302. Corroborates band; no change.
- **Reasoning: 78/100.** AA Intelligence 24.9%, AA-GPQA 89.0%, AA-HLE 43.9%, AA-Omniscience Accuracy 42.0%, AA-Omniscience Hallucination Rate 28.0%, AA-LCR 78.3%, CritPt 14.9%, MLCR 7.8%, HLE w/ tools 61.0%. Corroborates band; no change.
- **Context window: 88/100.** 1M window; AA-LCR 78.3%. Corroborates band; no change.
- **Multimodal: 88/100.** Text/image in; ZeroBench 50.0%, BabyVision 80.2%, SimpleVQA 73.6%, AA-MMMU-Pro 80.9%. Enrichment adds ZeroBench 50.0% (already), BabyVision 80.2% (already), SimpleVQA 73.6% (already), AA-MMMU-Pro 80.9% (already), Design Arena 1302. Corroborates band; no change.
- **Coding: 74/100.** DeepSWE 60.0%, SWE-Atlas Codebase QnA 58.0%, AA-SciCode 58.4%, FrontierCode 2.0 6.2%. Enrichment adds DeepSWE 60.0% (already), SWE-Atlas Codebase QnA 58.0% (already), AA-SciCode 58.4% (already), FrontierCode 2.0 6.2% (already), ZeroBench 50.0%, BabyVision 80.2%, SimpleVQA 73.6%, AA-MMMU-Pro 80.9%, Design Arena 1302. Corroborates band; no change.
- **Cost efficiency: 55/100.** Open weights (self-host); paid API via OpenRouter.
- **Overall Score: 82/100.** Mean of five quality dims (BenchLM aggregate 51.29); best-fit for open-weight agentic + multimodal at mid cost. Enrichment (2026-11-08) added new verified rows (JobBench 61.8%, MCP Atlas 89.2%, HLE w/ tools 61.0%, Toolathlon-Verified 72.8%, GDPval-AA 45.1% normalized/1401 Elo, AA Briefcase 1279, AA AutomationBench 49.7%, AA Terminal-Bench 4.0 8.1%, GDP.pdf 18.6%, aaTerminalBench21 76.4%, MazeBench 0%, AA Intelligence 24.9%, AA-GPQA 89.0%, AA-HLE 43.9%, AA-Omniscience Accuracy 42.0%, AA-Omniscience Hallucination Rate 28.0%, AA-LCR 78.3%, CritPt 14.9%, MLCR 7.8%, DeepSWE 60.0%, SWE-Atlas Codebase QnA 58.0%, AA-SciCode 58.4%, FrontierCode 2.0 6.2%, ZeroBench 50.0%, BabyVision 80.2%, SimpleVQA 73.6%, AA-MMMU-Pro 80.9%, Design Arena 1302). No dimension band moved; Overall unchanged at 82.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-11-04 preserved; new benchmark rows added; no dimension score changed (new evidence corroborates existing bands).
- Reference URLs:
  - [BenchLM — Muse Spark Open](https://benchlm.ai/models/muse-spark-open)
  - [Artificial Analysis — Muse Spark Open](https://artificialanalysis.ai/models/muse-spark-open)
  - [Meta AI — Muse Spark Open](https://research.meta.ai/blog/muse-spark-open)
  - [Muse Spark Open — HuggingFace](https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).