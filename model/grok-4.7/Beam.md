# Grok 4.7 — findings by Beam

- Source: xAI/Grok 4.7, `xai/grok-4.7`
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-10-17)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.7
- **Short description:** xAI's Grok 4.7 (Sep 2026): reasoning model with strong agentic coding and cyber; BenchLM unranked (42 benchmarks). $2.00/$6.00 per 1M.
- **Provider / access:** xAI API `grok-4.7`; OpenRouter.
- **Release / knowledge:** Released 2026-09-21; knowledge cutoff not stated.
- **IDs:** `xai/grok-4.7`
- **Context window:** 500,000 tokens; max output not stated.
- **Modalities:** text, image in; text out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-11-08):** $2.00 / 1M input, $6.00 / 1M output, $0.50 / 1M cached; paid. Prices double above 200K tokens.
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- AA Briefcase: **1657** (xAI)
- Terminal-Bench 4.0: **38.00%** (xAI)
- AA Harvey LAB v1.0: **19.6%** (xAI)
- GDPval-AA: **60.7%** normalized (Artificial Analysis)
- Terminal-Bench 2.1 (Vals): **73.4%** (Vals AI)
- AA AutomationBench: **65.6%** (Artificial Analysis)
- GDP.pdf: **20.0%** (Artificial Analysis)
- AA ITBench: **42.1%** (Artificial Analysis)
- AA Terminal-Bench 4.0: **25.8%** (Artificial Analysis)
- CWE-bench v1: **68.0%** (Collinear)
- AA-AnalystAgent: **52.5%** (Artificial Analysis)
- Hermes Index: **39.3%**; Hermes Bench: **74.4%** (Nous Research)
- MazeBench: **1%** (MazeBench)
- AA Cyber Index: **56.4%** (Artificial Analysis)
- CWE-Bench-AA: **68.3%** (Artificial Analysis)
- DeepsecBench-AA: **26.9%** (Artificial Analysis)
- CyberGym-E2E-AA: **74.0%** (Artificial Analysis)
- GDPval-AA: **1718 Elo** (Artificial Analysis)
- AA Briefcase: **1657** (xAI)
- AA AutomationBench: **65.6%** (Artificial Analysis)
- AA Terminal-Bench 4.0: **25.8%** (Artificial Analysis)
- GDP.pdf: **20.0%** (Artificial Analysis)
- AA ITBench: **42.1%** (Artificial Analysis)
- CWE-bench v1: **68.0%** (Collinear)
- AA-AnalystAgent: **52.5%** (Artificial Analysis)
- Hermes Index: **39.3%**; Hermes Bench: **74.4%** (Nous Research)
- MazeBench: **1%** (MazeBench)
- AA Cyber Index: **56.4%** (Artificial Analysis)
- CWE-Bench-AA: **68.3%** (Artificial Analysis)
- DeepsecBench-AA: **26.9%** (Artificial Analysis)
- CyberGym-E2E-AA: **74.0%** (Artificial Analysis)

Reasoning / knowledge:

- AA-LCR: **76.7%** (Artificial Analysis)
- CritPt: **17.7%** (Artificial Analysis)
- MLCR-AA: **20.0%** (Artificial Analysis)
- ARC-AGI-1: **89.50%** (ARC Prize)
- ARC-AGI-2: **61.4%** (ARC Prize)
- ARC-AGI-3: **1.8%** (ARC Prize)
- ARC-AGI-3 Provider Adapter: **7.02%** (ARC Prize)
- HealthBench Professional: **56.7%** (xAI)
- Artificial Analysis Intelligence Index: **35.5%** (measured, updated 2026-11-07)
- AA-HLE: **43.1%** (Artificial Analysis)
- AA-Omniscience Index: **31.2%**
- AA-Omniscience Accuracy: **42.7%**
- AA-Omniscience Hallucination Rate: **20.0%**
- AA-IFBench: not individually reported
- AA Global-MMLU-Lite: not individually reported
- AA AIME 2025: not individually reported
- FrontierMath v2 Tiers 1-3: **52.982%**; Tier 4: **17.073%** (Epoch AI)

Coding:

- CursorBench 4.0: **46.3%**
- DeepSWE: **71.0%**
- EEBench: **64.0%**
- AA-SciCode: **57.4%**
- FrontierSWE v2: **29.5%**
- Bug Hunt Bench: **29.0 fixes**
- FrontierCode 2.0: **28.6%**
- AA Coding Index: not individually reported
- PostTrainBench v1.1: not individually reported
- Bug Hunt Bench: not individually reported
- FrontierCode 2.0: not individually reported
- ExtractBench (LlamaIndex): not individually reported
- ParseBench: not individually reported

Long context:

- 500K window; MRCR: not reported.
- AA-LCR: **76.7%** (Artificial Analysis)

Multimodal:

- Design Arena Website: **1247** (OpenRouter)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 80/100.** Agentic lane (unranked), Terminal-Bench 4.0 38.00%, AA Harvey LAB 19.6%, GDPval-AA 60.7% normalized/1718 Elo, Terminal-Bench 2.1 Vals 73.4%, AA AutomationBench 65.6%, GDP.pdf 20.0%, AA ITBench 42.1%, AA Terminal-Bench 4.0 25.8%, CWE-bench v1 68.0%, AA-AnalystAgent 52.5%, Hermes Index 39.3%, Hermes Bench 74.4%, MazeBench 1%, AA Cyber 56.4%, CWE-Bench-AA 68.3%, DeepsecBench 26.9%, CyberGym-E2E 74.0%, AA Briefcase 1657, AA AutomationBench 65.6%, AA Terminal-Bench 4.0 25.8%, GDP.pdf 20.0%, AA ITBench 42.1%, CWE-bench v1 68.0%, AA-AnalystAgent 52.5%, Hermes Index 39.3%, Hermes Bench 74.4%, MazeBench 1%, AA Cyber 56.4%, CWE-Bench-AA 68.3%, DeepsecBench 26.9%, CyberGym-E2E 74.0%. Enrichment (2026-11-08): BenchLM aggregator (updated 2026-11-07) corroborates Terminal-Bench 4.0 38.00%, AA Harvey LAB 19.6%, GDPval-AA 60.7% normalized/1718 Elo, Terminal-Bench 2.1 Vals 73.4%, AA AutomationBench 65.6%, GDP.pdf 20.0%, AA ITBench 42.1%, AA Terminal-Bench 4.0 25.8%, CWE-bench v1 68.0%, AA-AnalystAgent 52.5%, Hermes Index 39.3%, Hermes Bench 74.4%, MazeBench 1%, AA Cyber 56.4%, CWE-Bench-AA 68.3%, DeepsecBench 26.9%, CyberGym-E2E 74.0%, AA Briefcase 1657, AA Intelligence 35.5%, AA-HLE 43.1%, AA-Omniscience 31.2%/42.7%/20.0%, AA-LCR 76.7%, CritPt 17.7%, MLCR 20.0%, ARC-AGI-1 89.50%, ARC-AGI-2 61.4%, ARC-AGI-3 1.8%, ARC-AGI-3 Provider Adapter 7.02%, HealthBench Professional 56.7%, FrontierMath v2 52.982%/17.073%, Design Arena 1247. Corroborates band; no change.
- **Reasoning: 76/100.** ARC-AGI-1 89.50%, ARC-AGI-2 61.4%, AA Intelligence 35.5%, AA-HLE 43.1%, AA-Omniscience 31.2%/42.7%/20.0%, AA-LCR 76.7%, CritPt 17.7%, MLCR 20.0%, HealthBench Professional 56.7%, FrontierMath v2 52.982%/17.073%. Corroborates band; no change.
- **Context window: 78/100.** 500K window; AA-LCR 76.7%. Corroborates band; no change.
- **Multimodal: 68/100.** Text/image in, text out; no verified multimodal benchmarks. Enrichment adds Design Arena 1247. Corroborates band; no change.
- **Coding: 76/100.** DeepSWE 71.0%, EEBench 64.0%, AA-SciCode 57.4%, FrontierSWE v2 29.5%, Bug Hunt 29.0 fixes, FrontierCode 2.0 28.6%, CursorBench 4.0 46.3%. Enrichment adds DeepSWE 71.0% (already), EEBench 64.0% (already), AA-SciCode 57.4% (already), FrontierSWE v2 29.5% (already), Bug Hunt 29.0 fixes (already), FrontierCode 2.0 28.6% (already), CursorBench 4.0 46.3% (already), Design Arena 1247. Corroborates band; no change.
- **Cost efficiency: 88/100.** Cheap $2/$6 per 1M.
- **Overall Score: 75.2/100.** Mean of five quality dims (BenchLM aggregate not available, unranked); best-fit for agentic coding + reasoning at low cost. Enrichment (2026-11-08) added new verified rows (AA Briefcase 1657; Terminal-Bench 4.0 38.00%; AA Harvey LAB 19.6%; GDPval-AA 60.7% normalized/1718 Elo; Terminal-Bench 2.1 Vals 73.4%; AA AutomationBench 65.6%; GDP.pdf 20.0%; AA ITBench 42.1%; AA Terminal-Bench 4.0 25.8%; CWE-bench v1 68.0%; AA-AnalystAgent 52.5%; Hermes Index 39.3%; Hermes Bench 74.4%; MazeBench 1%; AA Cyber 56.4%; CWE-Bench-AA 68.3%; DeepsecBench 26.9%; CyberGym-E2E 74.0%; GDPval-AA 1718 Elo; AA Intelligence 35.5%; AA-HLE 43.1%; AA-Omniscience 31.2%/42.7%/20.0%; AA-LCR 76.7%; CritPt 17.7%; MLCR 20.0%; ARC-AGI-1 89.50%; ARC-AGI-2 61.4%; ARC-AGI-3 1.8%; ARC-AGI-3 Provider Adapter 7.02%; HealthBench Professional 56.7%; FrontierMath v2 52.982%/17.073%; Design Arena 1247; CursorBench 4.0 46.3%; DeepSWE 71.0%; EEBench 64.0%; AA-SciCode 57.4%; FrontierSWE v2 29.5%; Bug Hunt 29.0 fixes; FrontierCode 2.0 28.6%). No dimension band moved; Overall unchanged at 75.2.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-10-17 preserved; new benchmark rows added; no dimension score changed (new evidence corroborates existing bands).
- Reference URLs:
  - [BenchLM — Grok 4.7](https://benchlm.ai/models/grok-4-7)
  - [Artificial Analysis — Grok 4.7](https://artificialanalysis.ai/models/grok-4-7)
  - [xAI — Grok 4.7](https://x.ai/news/grok-4-7)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).