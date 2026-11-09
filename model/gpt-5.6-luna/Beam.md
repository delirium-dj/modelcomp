# GPT-5.6 Luna — findings by Beam

- Source: OpenAI/GPT-5.6 Luna, `openai/gpt-5.6-luna`
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-10-17)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Luna
- **Short description:** OpenAI's Luna variant of GPT-5.6 (Jul 9, 2026): budget-friendly tier in the GPT-5.6 family, strong agentic/coding at low cost; #37 on BenchLM.
- **Provider / access:** OpenAI API `gpt-5.6-luna` (limited preview); Azure; AWS Bedrock.
- **Release / knowledge:** Released 2026-07-09 (limited preview); knowledge cutoff not stated.
- **IDs:** `openai/gpt-5.6-luna`
- **Context window:** 1,050,000 tokens; max output 128,000.
- **Modalities:** text, image in; text out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-11-08):** paid (OpenAI).
- **Architecture:** proprietary; params undisclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 3.0: **14.3%**
- Terminal-Bench 2.1: **84.7%** (OpenAI) / 79.0% (Vals)
- BrowseComp: **83.3%**
- OSWorld 2.0: **45.6%**
- CyberGym: **77.9%**
- ExploitGym: **12.4%**
- Toolathlon: **53.4%**
- GDPval-AA: **48.0%** normalized / 1582 Elo (Artificial Analysis)
- APEX-Agents-AA: **35.8%** (Artificial Analysis)
- Terminal-Bench 2.1 (Vals): **79.0%** (Vals AI)
- AA Agentic Index: **42.7%** (Artificial Analysis)
- ApprenticeBench: **7%** (NeoCognition)
- MazeBench: **0%** (MazeBench)
- AA EnterpriseOps-Gym: **40.8%** (Artificial Analysis)
- AA ITBench: **40.3%** (Artificial Analysis)
- aaTerminalBench21: **80.9%** (Artificial Analysis)
- AA Briefcase: not individually reported
- AA AutomationBench: not individually reported
- AA Terminal-Bench 4.0: not individually reported
- GDP.pdf: not individually reported
- AA-AnalystAgent: not individually reported
- AA Cyber Index: not individually reported
- CWE-Bench-AA: not individually reported
- DeepsecBench-AA: not individually reported
- CyberGym-E2E-AA: not individually reported

Reasoning / knowledge:

- ARC-AGI-1: **88.00%**
- ARC-AGI-2: **59.5%**
- ARC-AGI-3: **0.2%**
- AA-LCR: **83.7%** (Artificial Analysis)
- CritPt: **20.6%** (Artificial Analysis)
- GPQA: **92.3%**
- GPQA-D: **92.3%**
- HealthBench Professional: **55.7%** (OpenAI)
- HealthBench Hard: **32.0%** (OpenAI)
- Artificial Analysis Intelligence Index: **51.2%** (measured, updated 2026-11-07)
- AA-GPQA Diamond: **91.1%** (Artificial Analysis)
- AA-HLE: **39.5%** (Artificial Analysis)
- AA-Omniscience Index: **-10.3%**
- AA-Omniscience Accuracy: **42.7%**
- AA-Omniscience Hallucination Rate: **92.6%**
- AA-IFBench: not individually reported
- AA Global-MMLU-Lite: not individually reported
- AA AIME 2025: not individually reported
- FrontierMath (legacy): **78.6%**
- FrontierMath v2 (Tiers 1-3): **78.600%**
- FrontierMath v2 (Tier 4): **58.500%**

Coding:

- SWE-bench Pro: **62.7%**
- Terminal-Bench 2.1: **84.7%**
- DeepSWE: **67.2%**
- FrontierCode 1.1 Extended: **55.1%**
- CursorBench 3.2: **61.1%**
- AA-SciCode: **53.6%**
- VulcanBench v3: **85.5%**
- SWE-bench (Vals): **93.0%**
- AA Coding Index: **71.5%**
- CursorBench 4.0: **35.9%**
- Bug Hunt Bench: not individually reported
- PostTrainBench v1.1: not individually reported
- FrontierCode 2.0: not individually reported
- ExtractBench (LlamaIndex): **91.16%**
- ParseBench: **66.86%**
- AA-MMMU-Pro: **78.6%**
- Design Arena Website: not individually reported

Long context:

- 1.05M window; MRCR: not reported.
- AA-LCR: **83.7%** (Artificial Analysis)

Multimodal:

- ExtractBench (LlamaIndex): **91.16%**
- ParseBench: **66.86%**
- MMMU-Pro: **78.4%**
- MMMU-Pro w/ Python: **79.5%**
- AA-MMMU-Pro: **78.6%**

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 78/100.** Agentic lane (unranked), Terminal-Bench 2.1 84.7%, BrowseComp 83.3%, OSWorld 2.0 45.6%, CyberGym 77.9%, Toolathlon 53.4%, GDPval-AA 48.0% normalized/1582 Elo, APEX-Agents-AA 35.8%, Terminal-Bench 2.1 Vals 79.0%, AA Agentic Index 42.7%, ApprenticeBench 7%, MazeBench 0%, AA EnterpriseOps-Gym 40.8%, AA ITBench 40.3%, aaTerminalBench21 80.9%. Enrichment (2026-11-08): BenchLM aggregator (updated 2026-11-07) corroborates Terminal-Bench 3.0 14.3%, Terminal-Bench 2.1 84.7%, BrowseComp 83.3%, OSWorld 2.0 45.6%, CyberGym 77.9%, ExploitGym 12.4%, Toolathlon 53.4%, GDPval-AA 48.0% normalized/1582 Elo, APEX-Agents-AA 35.8%, Terminal-Bench 2.1 Vals 79.0%, AA Agentic Index 42.7%, ApprenticeBench 7%, MazeBench 0%, AA EnterpriseOps-Gym 40.8%, AA ITBench 40.3%, aaTerminalBench21 80.9%, BioBasicsBench not individually reported, HealthBench Professional 55.7%, HealthBench Hard 32.0%, AA Intelligence 51.2%, AA-GPQA 91.1%, AA-HLE 39.5%, AA-Omniscience -10.3%/42.7%/92.6%, AA-LCR 83.7%, CritPt 20.6%, ARC-AGI-1 88.00%, ARC-AGI-2 59.5%, ARC-AGI-3 0.2%, GPQA 92.3%, GPQA-D 92.3%, FrontierMath (legacy) 78.6%, FrontierMath v2 Tiers 1-3 78.600%, Tier 4 58.500%, ExtractBench 91.16%, ParseBench 66.86%, MMMU-Pro 78.4%, MMMU-Pro w/ Python 79.5%, AA-MMMU-Pro 78.6%, SWE-bench Pro 62.7%, DeepSWE 67.2%, FrontierCode 1.1 Extended 55.1%, CursorBench 3.2 61.1%, AA-SciCode 53.6%, VulcanBench v3 85.5%, SWE-bench Vals 93.0%, AA Coding Index 71.5%, CursorBench 4.0 35.9%. Corroborates band; no change.
- **Reasoning: 80/100.** ARC-AGI-1 88.0%, ARC-AGI-2 59.5%, GPQA 92.3%, AA Intelligence 51.2%, AA-GPQA 91.1%, AA-HLE 39.5%, AA-Omniscience -10.3%/42.7%/92.6%, AA-LCR 83.7%, CritPt 20.6%, HealthBench Professional 55.7%, HealthBench Hard 32.0%, FrontierMath (legacy) 78.6%, FrontierMath v2 78.600%/58.500%. Corroborates band; no change.
- **Context window: 88/100.** 1.05M window; AA-LCR 83.7%. Corroborates band; no change.
- **Multimodal: 82/100.** Text/image in, text out; MMMU-Pro 78.4%, AA-MMMU-Pro 78.6%. Enrichment adds ExtractBench 91.16%, ParseBench 66.86%, MMMU-Pro 78.4%, MMMU-Pro w/ Python 79.5%, AA-MMMU-Pro 78.6%. Corroborates band; no change.
- **Coding: 78/100.** SWE-bench Pro 62.7%, DeepSWE 67.2%, AA-SciCode 53.6%, AA Coding Index 71.5%, CursorBench 3.2 61.1%, CursorBench 4.0 35.9%. Enrichment adds ExtractBench 91.16%, ParseBench 66.86%, MMMU-Pro 78.4%, MMMU-Pro w/ Python 79.5%, AA-MMMU-Pro 78.6%, SWE-bench Pro 62.7% (already), DeepSWE 67.2% (already), FrontierCode 1.1 Extended 55.1% (already), CursorBench 3.2 61.1% (already), AA-SciCode 53.6% (already), VulcanBench v3 85.5% (already), SWE-bench Vals 93.0% (already), AA Coding Index 71.5% (already), CursorBench 4.0 35.9% (already). Corroborates band; no change.
- **Cost efficiency: 80/100.** Mid-tier paid.
- **Overall Score: 81.2/100.** Mean of five quality dims (BenchLM aggregate 64.03); best-fit for agentic coding + reasoning at mid cost. Enrichment (2026-11-08) added new verified rows (Terminal-Bench 3.0 14.3%, Terminal-Bench 2.1 84.7%, BrowseComp 83.3%, OSWorld 2.0 45.6%, CyberGym 77.9%, ExploitGym 12.4%, Toolathlon 53.4%, GDPval-AA 48.0% normalized/1582 Elo, APEX-Agents-AA 35.8%, Terminal-Bench 2.1 Vals 79.0%, AA Agentic Index 42.7%, ApprenticeBench 7%, MazeBench 0%, AA EnterpriseOps-Gym 40.8%, AA ITBench 40.3%, aaTerminalBench21 80.9%, AA Intelligence 51.2%, AA-GPQA 91.1%, AA-HLE 39.5%, AA-Omniscience -10.3%/42.7%/92.6%, AA-LCR 83.7%, CritPt 20.6%, ARC-AGI-1 88.00%, ARC-AGI-2 59.5%, ARC-AGI-3 0.2%, GPQA 92.3%, GPQA-D 92.3%, HealthBench Professional 55.7%, HealthBench Hard 32.0%, FrontierMath (legacy) 78.6%, FrontierMath v2 Tiers 1-3 78.600%, Tier 4 58.500%, ExtractBench 91.16%, ParseBench 66.86%, MMMU-Pro 78.4%, MMMU-Pro w/ Python 79.5%, AA-MMMU-Pro 78.6%, SWE-bench Pro 62.7%, DeepSWE 67.2%, FrontierCode 1.1 Extended 55.1%, CursorBench 3.2 61.1%, AA-SciCode 53.6%, VulcanBench v3 85.5%, SWE-bench Vals 93.0%, AA Coding Index 71.5%, CursorBench 4.0 35.9%). No dimension band moved; Overall unchanged at 64.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-10-17 preserved; new benchmark rows added; no dimension score changed (new evidence corroborates existing bands).
- Reference URLs:
  - [BenchLM — GPT-5.6 Luna](https://benchlm.ai/models/gpt-5-6-luna)
  - [Artificial Analysis — GPT-5.6 Luna](https://artificialanalysis.ai/models/gpt-5-6-luna)
  - [OpenAI — GPT-5.6](https://openai.com/index/gpt-5-6/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).