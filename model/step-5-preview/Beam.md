# Step 5 Preview — findings by Beam

- Source: StepFun/Step 5 Preview, `stepfun/step-5-preview`
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-10-17)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Step 5 Preview
- **Short description:** StepFun's flagship MoE (Sep 28, 2026): 600B total / 27B active, 1M context. Text/image/video in. BenchLM 69.45 (#20 of 954). Terminal-Bench 2.1 85.0%, DeepSWE 67.7%, SciCode 58.9%, ProgramBench 80.5%, GPQA-D 93.5%, HLE 46.5%, AA Intelligence 43.7%, AA-LCR 88.3%, CritPt 20.9%. Open weights (promised). $1.00/$2.70 per 1M.
- **Provider / access:** StepFun API; OpenRouter; Vercel AI Gateway.
- **Release / knowledge:** Released 2026-09-28 (preview); open weights promised Oct 15. Knowledge cutoff not stated.
- **IDs:** `stepfun/step-5-preview`
- **Context window:** 1,000,000 tokens; max output 1,000,000 (Vals) / 64K (CloudPrice).
- **Modalities:** text, image, video in; text out; reasoning yes; tool calling yes; structured output yes. Open weights (promised).
- **Pricing (as of 2026-11-08):** $1.00 / 1M input, $2.70 / 1M output; paid.
- **Architecture:** MoE, 600B total / 27B active, 1M context. StepFun.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Agentic public-lane (BenchLM): **65.3** (Estimated · #18/128)
- Terminal-Bench 2.1: **85.0%** (StepFun official)
- Terminal-Bench 4.0: **33.30%** (StepFun official)
- CyberGym: **84.7%** (StepFun official)
- AutomationBench: **44.0%** (StepFun official)
- Toolathlon-Verified: **74.1%** (StepFun official)
- MCP Atlas: **85.6%** (StepFun official)
- JobBench: **59.0%** (StepFun official)
- APEX-Agents: **37.8%** (StepFun official)
- DRACO: **83.3%** (StepFun official)
- BrowseComp: **88.7%** (StepFun official)
- Agents' Last Exam: **29.5%** (StepFun official)
- GDPval-AA: **1566** / **54.3%** (StepFun/AA)
- DeepSWE: **67.7%** (StepFun official)
- τ³-bench: not reported
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

- Reasoning public-lane (BenchLM): **83.4** (Unranked · 2 rankable rows)
- GPQA-D: **93.5%** (StepFun official)
- HLE: **46.5%** (StepFun official)
- AA Intelligence Index: **43.7%** (Artificial Analysis) / **28.5%** (measured, updated 2026-11-07)
- AA-HLE: **46.5%** (Artificial Analysis)
- AA-LCR: **88.3%** (StepFun official)
- CritPt: **20.9%** (StepFun official)
- MLCR-AA: **16.7%** (Artificial Analysis)
- AA-Omniscience Index: **16.4%**
- AA-Omniscience Accuracy: **36.4%** (updated from 41.5%)
- AA-Omniscience Hallucination Rate: **31.3%** (updated from 43.0%)
- IFBench: not reported
- AA-GPQA Diamond: not individually reported
- AA Global-MMLU-Lite: not individually reported
- AA AIME 2025: not individually reported
- FrontierMath v2: not individually reported

Coding:

- Coding public-lane (BenchLM): **60.5** (Estimated · #20/150)
- DeepSWE: **67.7%** (StepFun official)
- Terminal-Bench 2.1: **85.0%** (StepFun official)
- SciCode: **58.9%** (StepFun official) / **58.9%** (AA)
- ProgramBench: **80.5%** (StepFun official)
- sweMarathon: **72.7%** (StepFun official)
- MLS-Bench Lite: **40.5%** (StepFun official)
- AA-SciCode: **58.9%** (Artificial Analysis)
- AA Coding Index: not individually reported
- PostTrainBench v1.1: not individually reported
- Bug Hunt Bench: not individually reported
- FrontierCode 2.0: not individually reported
- ExtractBench (LlamaIndex): not individually reported
- ParseBench: not individually reported
- Bug Hunt Bench: not individually reported

Long context:

- 1M window; AA-LCR **88.3%** (StepFun official); MRCR not reported.

Multimodal:

- Multimodal public-lane (BenchLM): not individually reported
- Text/image/video in; MMMU-Pro **76%** (StepFun official), AA-MMMU-Pro **76.4%** (Artificial Analysis), OfficeQA Pro **60.3%** (StepFun official).
- AA-MMMU-Pro: **76.4%** (Artificial Analysis)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 76/100.** Agentic lane #18/128 (65.3), Terminal-Bench 2.1 85.0%, CyberGym 84.7%, AutomationBench 44.0%, Toolathlon 74.1%, MCP Atlas 85.6%, JobBench 59.0%, APEX 37.8%, DRACO 83.3%, BrowseComp 88.7%, Agents' Last Exam 29.5%, GDPval-AA 54.3%; caps at Agents' Last Exam 29.5%. Enrichment (2026-11-08): BenchLM aggregator (updated 2026-11-07) corroborates Terminal-Bench 2.1 85.0%, Terminal-Bench 4.0 33.30%, CyberGym 84.7%, AutomationBench 44.0%, Toolathlon-Verified 74.1%, MCP Atlas 85.6%, JobBench 59.0%, APEX-Agents 37.8%, DRACO 83.3%, BrowseComp 88.7%, Agents' Last Exam 29.5%, GDPval-AA 1566/54.3%, DeepSWE 67.7%, AA EnterpriseOps-Gym 47.2%, AA Harvey LAB 93.4%, AA ITBench 55.6%, APEX-Agents-AA 38.0%, Hermes Index 32.8%, Hermes Bench 69.2%, AA Cyber 47.7%, CWE-Bench-AA 52.5%, DeepsecBench 15.8%, CyberGym-E2E 74.8%, AA Briefcase not individually reported, AA AutomationBench not individually reported, AA Terminal-Bench 4.0 not individually reported, GDP.pdf not individually reported, AA-AnalystAgent not individually reported, MazeBench not individually reported, AA Tau3 Banking not individually reported, aaTerminalBench21 not individually reported, AA Intelligence 28.5%, AA-HLE 46.5%, AA-Omniscience 16.4%/36.4%/31.3%, AA-LCR 88.3%, CritPt 20.9%, MLCR 16.7%, GPQA-D 93.5%, HLE 46.5%, SciCode 58.9%, ProgramBench 80.5%, sweMarathon 72.7%, MLS-Bench Lite 40.5%, AA-SciCode 58.9%, OfficeQA Pro 60.3%, MMMU-Pro 76%, AA-MMMU-Pro 76.4%. Corroborates band; no change.
- **Reasoning: 76/100.** GPQA-D 93.5%, HLE 46.5%, AA Intelligence 43.7%, AA-LCR 88.3%, CritPt 20.9%, MLCR-AA 16.7%; caps at CritPt 20.9%. Enrichment adds AA Intelligence 28.5% (updated from 43.7, significant drop noted), AA-HLE 46.5% (already), AA-Omniscience 16.4%/36.4%/31.3% (updated from 41.5%/43.0%), AA-LCR 88.3% (already), CritPt 20.9% (already), MLCR 16.7% (already), GPQA-D 93.5% (already), HLE 46.5% (already). Corroborates band; no change. Note: AA Intelligence Index dropped from prior 43.7 to 28.5 (measured, updated 2026-11-07); reasoning band held at 76 based on GPQA-D 93.5% and AA-LCR 88.3%.
- **Context window: 82/100.** 1M window; AA-LCR 88.3%; caps at no published MRCR.
- **Multimodal: 76/100.** Text/image/video in; MMMU-Pro 76%, OfficeQA Pro 60.3%; caps at no published CharXiv. Enrichment adds MMMU-Pro 76% (already), AA-MMMU-Pro 76.4% (already), OfficeQA Pro 60.3% (already). Corroborates band; no change.
- **Coding: 74/100.** DeepSWE 67.7%, Terminal-Bench 2.1 85.0%, SciCode 58.9%, ProgramBench 80.5%, sweMarathon 72.7%, MLS-Bench 40.5%, coding lane #20/150 (60.5); caps at MLS-Bench 40.5%. Enrichment adds DeepSWE 67.7% (already), Terminal-Bench 2.1 85.0% (already), SciCode 58.9% (already), ProgramBench 80.5% (already), sweMarathon 72.7% (already), MLS-Bench 40.5% (already), AA-SciCode 58.9% (already), OfficeQA Pro 60.3%, MMMU-Pro 76%, AA-MMMU-Pro 76.4%. Corroborates band; no change.
- **Cost efficiency: 84/100.** Mid $1.00/$2.70 per 1M.
- **Overall Score: 76.8/100.** Mean of five quality dims (BenchLM 69.45); best-fit for open-weight agentic coding at mid cost. #20 overall on BenchLM. Enrichment (2026-11-08) added new verified rows (Terminal-Bench 4.0 33.30%, CyberGym 84.7%, AutomationBench 44.0%, Toolathlon-Verified 74.1%, MCP Atlas 85.6%, JobBench 59.0%, APEX-Agents 37.8%, DRACO 83.3%, BrowseComp 88.7%, Agents' Last Exam 29.5%, GDPval-AA 1566/54.3%, DeepSWE 67.7%, AA EnterpriseOps-Gym 47.2%, AA Harvey LAB 93.4%, AA ITBench 55.6%, APEX-Agents-AA 38.0%, Hermes Index 32.8%, Hermes Bench 69.2%, AA Cyber 47.7%, CWE-Bench-AA 52.5%, DeepsecBench 15.8%, CyberGym-E2E 74.8%, AA Briefcase not individually reported, AA AutomationBench not individually reported, AA Terminal-Bench 4.0 not individually reported, GDP.pdf not individually reported, AA-AnalystAgent not individually reported, MazeBench not individually reported, AA Tau3 Banking not individually reported, aaTerminalBench21 not individually reported, AA Intelligence 28.5% (updated from 43.7), AA-HLE 46.5%, AA-Omniscience 16.4%/36.4%/31.3% (updated from 41.5%/43.0%), AA-LCR 88.3%, CritPt 20.9%, MLCR 16.7%, GPQA-D 93.5%, HLE 46.5%, SciCode 58.9%, ProgramBench 80.5%, sweMarathon 72.7%, MLS-Bench Lite 40.5%, AA-SciCode 58.9%, OfficeQA Pro 60.3%, MMMU-Pro 76%, AA-MMMU-Pro 76.4%). No dimension band moved; Overall unchanged at 76.8. Note: AA Intelligence Index dropped from prior 43.7 to 28.5 (measured, updated 2026-11-07); reasoning band held at 76 based on GPQA-D 93.5% and AA-LCR 88.3%.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-10-17 preserved; new benchmark rows added; no dimension score changed (new evidence corroborates existing bands, except AA Intelligence Index noted drop from 43.7 to 28.5).
- Reference URLs:
  - [BenchLM — Step 5 Preview](https://benchlm.ai/models/step-5-preview)
  - [Artificial Analysis — Step 5](https://artificialanalysis.ai/models/step-5)
  - [StepFun — Step 5 Preview](https://www.stepfun.com/step-5-preview)
  - [Step 5 Preview — HuggingFace](https://huggingface.co/stepfun-ai/Step-5-Preview)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).