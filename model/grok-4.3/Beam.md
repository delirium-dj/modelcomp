# Grok 4.3 — findings by Beam

- Source: xAI/Grok 4.3, `xai/grok-4.3`
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-10-17)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.3
- **Short description:** xAI's Grok 4.3 (Sep 2026): reasoning model with strong agentic coding; BenchLM #86/1016. $2.00/$6.00 per 1M.
- **Provider / access:** xAI API; OpenRouter.
- **Release / knowledge:** Released 2026-09-??; knowledge cutoff not stated.
- **IDs:** `xai/grok-4.3`
- **Context window:** 1,000,000 tokens.
- **Modalities:** text, image in; text out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-11-08):** $2.00 / 1M input, $6.00 / 1M output; paid.
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- τ²-bench results: **97.7%** (Artificial Analysis)
- GDPval-AA: **29.2%** normalized / 1018 Elo (Artificial Analysis)
- APEX-Agents-AA: **17.0%** (Artificial Analysis)
- Gert Labs: **43.86%** (Gert Labs)
- ResearchClawBench: **12.4%** (ResearchClawBench)
- Terminal-Bench 2.1 (Vals): **41.9%** (Vals AI)
- AA Agentic Index: **17.2%** (Artificial Analysis)
- GDPval-AA: **1018 Elo** (Artificial Analysis)
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
- AA Tau3 Banking: not individually reported
- aaTerminalBench21: not individually reported

Reasoning / knowledge:

- AA Intelligence Index: **37.6%** (measured, updated 2026-11-07)
- GPQA: **90.1%** (Artificial Analysis)
- HLE: **35%** (Artificial Analysis)
- AA-Omniscience Accuracy: **34.6%** (OpenRouter)
- AA-Omniscience Hallucination Rate: **25.0%** (OpenRouter)
- AA-GPQA Diamond: **90.1%** (Artificial Analysis)
- AA-HLE: **37.2%** (Artificial Analysis)
- AA-Omniscience Index: **18.0%** (Artificial Analysis)
- GPQA Diamond (Vals): **91.4%** (Vals AI)
- MMLU-Pro (Vals): **85.8%** (Vals AI)
- AA-LCR: **64.3%** (OpenRouter)
- CritPt: **8.0%** (OpenRouter)
- AA-IFBench: **81.3%** (Artificial Analysis)
- AA Global-MMLU-Lite: not individually reported
- AA AIME 2025: not individually reported
- FrontierMath v2 Tiers 1-3: **42.807%**; Tier 4: **14.634%** (Epoch AI)

Coding:

- SciCode: **47.3%** (Artificial Analysis)
- AA-SciCode: **48.3%** (Artificial Analysis)
- LiveCodeBench (Vals): **84.5%** (Vals AI)
- SWE-bench (Vals): **71.4%** (Vals AI)
- AA Coding Index: **42.3%** (Artificial Analysis)
- AA-SciCode: **48.3%** (Artificial Analysis)
- AA Coding Index: **42.3%** (Artificial Analysis)
- PostTrainBench v1.1: not individually reported
- Bug Hunt Bench: not individually reported
- FrontierCode 2.0: not individually reported
- ExtractBench (LlamaIndex): not individually reported
- ParseBench: not individually reported
- AA-MMMU-Pro: **78.1%** (Artificial Analysis)
- Design Arena Website: **1193** (OpenRouter)

Long context:

- 1M window; AA-LCR **64.3%** (OpenRouter); MRCR not reported.

Multimodal:

- MMMU-Pro: **78.1%** (Artificial Analysis)
- AA-MMMU-Pro: **78.1%** (Artificial Analysis)
- Design Arena Website: **1193** (OpenRouter)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 70/100.** Agentic lane (unranked), τ²-bench 97.7%, GDPval-AA 29.2% normalized/1018 Elo, APEX-Agents-AA 17.0%, Gert Labs 43.86%, ResearchClawBench 12.4%, Terminal-Bench 2.1 Vals 41.9%, AA Agentic Index 17.2%, GDPval-AA 1018 Elo, AA EnterpriseOps-Gym not individually reported, AA Tau3 Banking not individually reported, aaTerminalBench21 not individually reported, AA ITBench not individually reported, AA Terminal-Bench 4.0 not individually reported, GDP.pdf not individually reported, AA-AnalystAgent not individually reported, MazeBench not individually reported, AA Cyber Index not individually reported, CWE-Bench-AA not individually reported, DeepsecBench-AA not individually reported, CyberGym-E2E-AA not individually reported. Enrichment (2026-11-08): BenchLM aggregator (updated 2026-11-07) corroborates τ²-bench 97.7%, GDPval-AA 29.2% normalized/1018 Elo, APEX-Agents-AA 17.0%, Gert Labs 43.86%, ResearchClawBench 12.4%, Terminal-Bench 2.1 Vals 41.9%, AA Agentic Index 17.2%, GDPval-AA 1018 Elo, AA Intelligence 37.6%, GPQA 90.1%, HLE 35%, AA-Omniscience Accuracy 34.6%, AA-Omniscience Hallucination Rate 25.0%, AA-GPQA 90.1%, AA-HLE 37.2%, AA-Omniscience Index 18.0%, GPQA Diamond Vals 91.4%, MMLU-Pro Vals 85.8%, AA-SciCode 48.3%, LiveCodeBench Vals 84.5%, SWE-bench Vals 71.4%, AA Coding Index 42.3%, AA-MMMU-Pro 78.1%, Design Arena 1193, AA-LCR 64.3%, CritPt 8.0%, AA-IFBench 81.3%, FrontierMath v2 42.807%/14.634%. Corroborates band; no change.
- **Reasoning: 72/100.** GPQA 90.1%, HLE 35%, AA Intelligence 37.6%, AA-GPQA 90.1%, AA-HLE 37.2%, AA-Omniscience Accuracy 34.6%, AA-Omniscience Hallucination Rate 25.0%, AA-Omniscience Index 18.0%, AA-LCR 64.3%, CritPt 8.0%, AA-IFBench 81.3%, GPQA Diamond Vals 91.4%, MMLU-Pro Vals 85.8%, FrontierMath v2 42.807%/14.634%. Corroborates band; no change.
- **Context window: 78/100.** 1M window; AA-LCR 64.3%. Corroborates band; no change.
- **Multimodal: 78/100.** Text/image in; MMMU-Pro 78.1%, AA-MMMU-Pro 78.1%. Enrichment adds MMMU-Pro 78.1% (already), AA-MMMU-Pro 78.1% (already), Design Arena 1193. Corroborates band; no change.
- **Coding: 68/100.** SciCode 47.3%, AA-SciCode 48.3%, LiveCodeBench Vals 84.5%, SWE-bench Vals 71.4%, AA Coding Index 42.3%. Enrichment adds SciCode 47.3% (already), AA-SciCode 48.3% (already), LiveCodeBench Vals 84.5% (already), SWE-bench Vals 71.4% (already), AA Coding Index 42.3% (already), AA-MMMU-Pro 78.1%, Design Arena 1193. Corroborates band; no change.
- **Cost efficiency: 84/100.** Mid $2/$6 per 1M.
- **Overall Score: 73.2/100.** Mean of five quality dims (BenchLM aggregate 52.94); best-fit for mid-cost agentic coding. Enrichment (2026-11-08) added new verified rows (τ²-bench 97.7%, GDPval-AA 29.2% normalized/1018 Elo, APEX-Agents-AA 17.0%, Gert Labs 43.86%, ResearchClawBench 12.4%, Terminal-Bench 2.1 Vals 41.9%, AA Agentic Index 17.2%, GDPval-AA 1018 Elo, AA Intelligence 37.6%, GPQA 90.1%, HLE 35%, AA-Omniscience Accuracy 34.6%, AA-Omniscience Hallucination Rate 25.0%, AA-GPQA 90.1%, AA-HLE 37.2%, AA-Omniscience Index 18.0%, GPQA Diamond Vals 91.4%, MMLU-Pro Vals 85.8%, AA-SciCode 48.3%, LiveCodeBench Vals 84.5%, SWE-bench Vals 71.4%, AA Coding Index 42.3%, AA-MMMU-Pro 78.1%, Design Arena 1193, AA-LCR 64.3%, CritPt 8.0%, AA-IFBench 81.3%, FrontierMath v2 42.807%/14.634%). No dimension band moved; Overall unchanged at 74.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-10-17 preserved; new benchmark rows added; no dimension score changed (new evidence corroborates existing bands).
- Reference URLs:
  - [BenchLM — Grok 4.3](https://benchlm.ai/models/grok-4-3)
  - [Artificial Analysis — Grok 4.3](https://artificialanalysis.ai/models/grok-4-3)
  - [xAI — Grok 4.3](https://x.ai/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).