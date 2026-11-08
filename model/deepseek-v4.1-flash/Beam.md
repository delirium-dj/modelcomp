# DeepSeek V4.1 Flash — findings by Beam

- Source: DeepSeek/DeepSeek V4.1 Flash, `deepseek/deepseek-v4.1-flash`
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-10-17)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash
- **Short description:** DeepSeek's cost-efficient Flash variant (Sep 2026) of V4.1 with strong agentic/coding/cyber at very low price; open weights.
- **Provider / access:** DeepSeek API; OpenRouter; HuggingFace.
- **Release / knowledge:** Released 2026-09-??; knowledge cutoff not stated.
- **IDs:** `deepseek/deepseek-v4.1-flash`
- **Context window:** 1,000,000 tokens.
- **Modalities:** text, image in; text out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-11-08):** paid (DeepSeek).
- **Architecture:** open-weight MoE; params not published.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1: **90.6%** (DeepSeek)
- Terminal-Bench 3.0: **30%** (DeepSeek)
- Terminal-Bench 4.0: **42.30%** (DeepSeek V4.1 Flash 1017)
- CyberGym: **88.1%** (DeepSeek)
- ExploitGym: **15.3%** (DeepSeek)
- HLE w/ tools: **63.9%** (DeepSeek)
- AutomationBench: **60.5%** (DeepSeek V4.1 Flash 1017)
- Agents' Last Exam: **35.4%** (DeepSeek V4.1 Flash 1017)
- GDPval-AA: **55.0%** normalized (Artificial Analysis)
- Terminal-Bench 2.1 (Vals): **74.5%** (Vals AI)
- AA ITBench: **46.9%** (Artificial Analysis)
- CWE-bench v1: **55.0%** (Collinear)
- MazeBench: **1%** (MazeBench)
- AA Cyber Index: **40.8%** (Artificial Analysis)
- CWE-Bench-AA: **68.3%** (Artificial Analysis)
- DeepsecBench-AA: **31.2%** (Artificial Analysis)
- CyberGym-E2E-AA: **22.9%** (Artificial Analysis)
- AA Briefcase: not individually reported
- AA AutomationBench: not individually reported
- AA Terminal-Bench 4.0: not individually reported
- GDP.pdf: not individually reported
- AA-AnalystAgent: not individually reported
- AA Tau3 Banking: not individually reported
- aaTerminalBench21: not individually reported

Reasoning / knowledge:

- GPQA: **90.9%** (DeepSeek)
- GPQA-D: **90.9%** (DeepSeek)
- HLE: **42.6%** (DeepSeek V4.1 Flash 1017)
- Artificial Analysis Intelligence Index: **39.5%** (measured, updated 2026-11-07)
- AA-HLE: **39.2%** (Artificial Analysis)
- AA-Omniscience Index: **-5.3%**
- AA-Omniscience Accuracy: **46.4%**
- AA-Omniscience Hallucination Rate: **96.5%**
- AA-LCR: **84.0%** (Artificial Analysis)
- CritPt: **14.3%** (Artificial Analysis)
- MLCR-AA: not individually reported
- AA-IFBench: not individually reported
- AA Global-MMLU-Lite: not individually reported
- AA AIME 2025: not individually reported
- FrontierMath v2 Tiers 1-3: **67.368%**; Tier 4: **26.829%** (Epoch AI)
- STEMBench: **2.54** (STEMBench120)
- JevBench 1.4: **4.77**; JevBench 1.5: **6.65** (JevBench)
- Apex: **65.6%** (DeepSeek)

Coding:

- ScarfBench: **69.0%** (Kaggle)
- Codeforces: **3471.0** (DeepSeek)
- Terminal-Bench 2.1: **90.6%** (DeepSeek)
- Terminal-Bench 3.0: **30%** (DeepSeek)
- DeepSWE: **77.0%** (DeepSeek V4.1 Flash 1017)
- ProgramBench: **29.1%** (DeepSeek V4.1 Flash 1017)
- NL2Repo: **68.2%** (DeepSeek V4.1 Flash 1017)
- AA-SciCode: **51.9%** (Artificial Analysis)
- OpenHarmony Bench: **60.3%** (OpenHarmony Bench)
- Bug Hunt Bench: **39.1 fixes** (Bug Hunt Bench)
- FrontierCode 2.0: **19.3%** (Cognition)
- ExtractBench (LlamaIndex): **87.11%**
- ParseBench: **64.38%**
- Chartography (tools): **83.0%** (DeepSeek V4.1 Flash 1017)
- BabyVision w/ Python: **92.5%** (DeepSeek V4.1 Flash 1017)
- ZeroBench w/ Python: **51.0%** (DeepSeek V4.1 Flash 1017)
- AA-MMMU-Pro: **77.0%** (Artificial Analysis)
- Design Arena Website: **1295** (OpenRouter)

Long context:

- 1M window; MRCR: no verified public score found.
- AA-LCR: **84.0%** (Artificial Analysis)

Multimodal:

- ExtractBench (LlamaIndex): **87.11%**
- ParseBench: **64.38%**
- Chartography (tools): **83.0%**
- BabyVision w/ Python: **92.5%**
- ZeroBench w/ Python: **51.0%**
- AA-MMMU-Pro: **77.0%**
- Design Arena Website: **1295**

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 82/100.** Terminal-Bench 2.1 90.6%, agentic lane not individually reported, OSWorld not reported, AutomationBench 60.5%, Agents' Last Exam 35.4%, CyberGym 88.1%, ExploitGym 15.3%, HLE w/ tools 63.9%, GDPval-AA 55.0% normalized, Terminal-Bench 2.1 Vals 74.5%, AA ITBench 46.9%, CWE-bench v1 55.0%, MazeBench 1%, AA Cyber 40.8%, CWE-Bench-AA 68.3%, DeepsecBench 31.2%, CyberGym-E2E 22.9%. Enrichment (2026-11-08): BenchLM aggregator (updated 2026-11-07) corroborates Terminal-Bench 2.1 90.6%, Terminal-Bench 3.0 30%, Terminal-Bench 4.0 42.30%, CyberGym 88.1%, ExploitGym 15.3%, HLE w/ tools 63.9%, AutomationBench 60.5%, Agents' Last Exam 35.4%, GDPval-AA 55.0% normalized, Terminal-Bench 2.1 Vals 74.5%, AA ITBench 46.9%, CWE-bench v1 55.0%, MazeBench 1%, AA Cyber 40.8%, CWE-Bench-AA 68.3%, DeepsecBench 31.2%, CyberGym-E2E 22.9%, GPQA 90.9%, GPQA-D 90.9%, HLE 42.6%, AA Intelligence 39.5%, AA-HLE 39.2%, AA-Omniscience -5.3%/46.4%/96.5%, AA-LCR 84.0%, CritPt 14.3%, Apex 65.6%, FrontierMath v2 67.368%/26.829%, STEMBench 2.54, JevBench 4.77/6.65, ScarfBench 69.0%, Codeforces 3471.0, Terminal-Bench 2.1 90.6%, Terminal-Bench 3.0 30%, DeepSWE 77.0%, ProgramBench 29.1%, NL2Repo 68.2%, AA-SciCode 51.9%, OpenHarmony Bench 60.3%, Bug Hunt 39.1 fixes, FrontierCode 2.0 19.3%, ExtractBench 87.11%, ParseBench 64.38%, Chartography (tools) 83.0%, BabyVision w/ Python 92.5%, ZeroBench w/ Python 51.0%, AA-MMMU-Pro 77.0%, Design Arena 1295. Corroborates band; no change.
- **Reasoning: 84/100.** GPQA 90.9%, HLE 42.6%, AA Intelligence 39.5%, AA-GPQA not individually reported, AA-HLE 39.2%, AA-Omniscience -5.3%/46.4%/96.5%, AA-LCR 84.0%, CritPt 14.3%, Apex 65.6%, FrontierMath v2 67.368%/26.829%, STEMBench 2.54, JevBench 4.77/6.65. Corroborates band; no change.
- **Context window: 88/100.** 1M window; AA-LCR 84.0%. Corroborates band; no change.
- **Multimodal: 82/100.** Text/image in; AA-MMMU-Pro 77.0%. Enrichment adds ExtractBench 87.11%, ParseBench 64.38%, Chartography (tools) 83.0%, BabyVision w/ Python 92.5%, ZeroBench w/ Python 51.0%, AA-MMMU-Pro 77.0%, Design Arena 1295. Corroborates band; no change.
- **Coding: 84/100.** DeepSWE 77.0%, ProgramBench 29.1%, NL2Repo 68.2%, AA-SciCode 51.9%, OpenHarmony Bench 60.3%, Bug Hunt 39.1 fixes, FrontierCode 2.0 19.3%. Enrichment adds ScarfBench 69.0%, Codeforces 3471.0, Terminal-Bench 2.1 90.6%, Terminal-Bench 3.0 30%, DeepSWE 77.0%, ProgramBench 29.1%, NL2Repo 68.2%, AA-SciCode 51.9%, OpenHarmony Bench 60.3%, Bug Hunt 39.1 fixes, FrontierCode 2.0 19.3%, ExtractBench 87.11%, ParseBench 64.38%, Chartography (tools) 83.0%, BabyVision w/ Python 92.5%, ZeroBench w/ Python 51.0%, AA-MMMU-Pro 77.0%, Design Arena 1295. Corroborates band; no change.
- **Cost efficiency: 90/100.** Very cheap open-weight.
- **Overall Score: 84/100.** Mean of five quality dims (BenchLM aggregate 65.41); best-fit for cost-efficient agentic + coding + cyber. Enrichment (2026-11-08) added new verified rows (Terminal-Bench 2.1 90.6%; Terminal-Bench 3.0 30%; Terminal-Bench 4.0 42.30%; CyberGym 88.1%; ExploitGym 15.3%; HLE w/ tools 63.9%; AutomationBench 60.5%; Agents' Last Exam 35.4%; GDPval-AA 55.0% normalized; Terminal-Bench 2.1 Vals 74.5%; AA ITBench 46.9%; CWE-bench v1 55.0%; MazeBench 1%; AA Cyber 40.8%; CWE-Bench-AA 68.3%; DeepsecBench 31.2%; CyberGym-E2E 22.9%; GPQA 90.9%; GPQA-D 90.9%; HLE 42.6%; AA Intelligence 39.5%; AA-HLE 39.2%; AA-Omniscience -5.3%/46.4%/96.5%; AA-LCR 84.0%; CritPt 14.3%; Apex 65.6%; FrontierMath v2 67.368%/26.829%; STEMBench 2.54; JevBench 4.77/6.65; ScarfBench 69.0%; Codeforces 3471.0; Terminal-Bench 2.1 90.6%; Terminal-Bench 3.0 30%; DeepSWE 77.0%; ProgramBench 29.1%; NL2Repo 68.2%; AA-SciCode 51.9%; OpenHarmony Bench 60.3%; Bug Hunt 39.1 fixes; FrontierCode 2.0 19.3%; ExtractBench 87.11%; ParseBench 64.38%; Chartography (tools) 83.0%; BabyVision w/ Python 92.5%; ZeroBench w/ Python 51.0%; AA-MMMU-Pro 77.0%; Design Arena 1295). No dimension band moved; Overall unchanged at 83.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-10-17 preserved; new benchmark rows added; no dimension score changed (new evidence corroborates existing bands).
- Reference URLs:
  - [BenchLM — DeepSeek V4.1 Flash](https://benchlm.ai/models/deepseek-v4-1-flash)
  - [Artificial Analysis — DeepSeek V4.1 Flash](https://artificialanalysis.ai/models/deepseek-v4-1-flash)
  - [DeepSeek V4.1 Flash — HuggingFace](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).