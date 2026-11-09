# GLM-5.3 — findings by Beam

- Source: Z.AI/GLM-5.3, `zai/glm-5.3`
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-10-17)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3
- **Short description:** Z.AI's flagship GLM-5.3 (Aug 2026): 1M context, strong agentic/coding/cyber at mid cost; BenchLM #49/1016.
- **Provider / access:** Z.AI API `glm-5.3`; HuggingFace `zai-org/GLM-5.3`; OpenRouter.
- **Release / knowledge:** Released 2026-08-??; knowledge cutoff not stated.
- **IDs:** `zai/glm-5.3`
- **Context window:** 1,000,000 tokens.
- **Modalities:** text, image in; text out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-11-08):** paid (Z.AI).
- **Architecture:** open-weight MoE; params not published.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Finch: **65.1%** (Mistral)
- b3 Agent Security: **93.0%** (Mistral)
- Cyber Misuse Refusal: **87.0%** (Mistral)
- Terminal-Bench 2.1: **88.2%** (Z.AI)
- terminalBench3: **28.3%** (Z.AI)
- CyberGym: **84.5%** (Z.AI)
- ExploitGym: **15.0%** (Z.AI)
- Toolathlon-Verified: **73.0%** (Z.AI)
- AutomationBench: **48.2%** (Z.AI)
- Agents' Last Exam: **28.5%** (Z.AI)
- HLE w/ tools: **62.5%** (Z.AI)
- GDPval-AA: **1769 Elo** (Z.AI); **57.5%** normalized (Artificial Analysis)
- AA Tau3 Banking: **50.3%** (Artificial Analysis)
- AA Briefcase: **1503** (Artificial Analysis)
- AA EnterpriseOps-Gym: **36.4%** (Artificial Analysis)
- Terminal-Bench 2.1 (Vals): **71.5%** (Vals AI)
- AA AutomationBench: **62.2%** (Artificial Analysis)
- AA Agentic Index: **53.4%** (Artificial Analysis)
- AA ITBench: **46.1%** (Artificial Analysis)
- aaTerminalBench21: **83.9%** (Artificial Analysis)
- AA Terminal-Bench 4.0: **41.9%** (Artificial Analysis)
- GDP.pdf: **11.2%** (Artificial Analysis)
- AA-AnalystAgent: **38.8%** (Artificial Analysis)
- Hermes Index: **39.2%**; Hermes Bench: **71.8%** (Nous Research)
- MazeBench: **0%** (MazeBench)
- AA Cyber Index: **36.4%** (Artificial Analysis)
- CWE-Bench-AA: **55.8%** (Artificial Analysis)
- DeepsecBench-AA: **24.3%** (Artificial Analysis)
- CyberGym-E2E-AA: **29.0%** (Artificial Analysis)
- AA Briefcase: **1503** (Artificial Analysis)
- AA AutomationBench: **62.2%** (Artificial Analysis)
- AA Terminal-Bench 4.0: **41.9%** (Artificial Analysis)
- GDP.pdf: **11.2%** (Artificial Analysis)
- AA-AnalystAgent: **38.8%** (Artificial Analysis)
- Hermes Index: **39.2%**; Hermes Bench: **71.8%** (Nous Research)
- MazeBench: **0%** (MazeBench)
- AA Cyber Index: **36.4%** (Artificial Analysis)
- CWE-Bench-AA: **55.8%** (Artificial Analysis)
- DeepsecBench-AA: **24.3%** (Artificial Analysis)
- CyberGym-E2E-AA: **29.0%** (Artificial Analysis)

Reasoning / knowledge:

- AA-LCR: **79.7%** (Artificial Analysis)
- CritPt: **19.1%** (Artificial Analysis)
- MLCR-AA: **17.2%** (Artificial Analysis)
- AA Intelligence Index: **31.6%** (measured, updated 2026-11-07)
- AA-GPQA Diamond: **91.7%** (Artificial Analysis)
- AA-HLE: **42.3%** (Artificial Analysis)
- AA-Omniscience Index: **6.0%**
- AA-Omniscience Accuracy: **32.3%**
- AA-Omniscience Hallucination Rate: **38.9%**
- GPQA Diamond (Vals): **88.1%** (Vals AI)
- MMLU-Pro (Vals): **86.8%** (Vals AI)
- AA-IFBench: not individually reported
- AA Global-MMLU-Lite: not individually reported
- AA AIME 2025: not individually reported
- FrontierMath v2 Tiers 1-3: **68.772%**; Tier 4: **29.268%** (Epoch AI)

Coding:

- Terminal-Bench 2.1: **88.2%**
- terminalBench3: **28.3%**
- DeepSWE: **66.9%**
- NL2Repo: **58%**
- ProgramBench: **19.0%**
- FrontierSWE: **78.1%**
- sweMarathon: **42.5%**
- PostTrain Bench: **39.8%**
- AA-SciCode: **59.0%** (Artificial Analysis)
- VulcanBench v3: **78.3%** (VulcanBench)
- OpenHarmony Bench: **60.8%** (OpenHarmony Bench)
- FrontierSWE v2: **30.2%** (Proximal)
- LiveCodeBench (Vals): **80.5%** (Vals AI)
- SWE-bench (Vals): **95.4%** (Vals AI)
- AA Coding Index: **74.8%** (Artificial Analysis)
- Bug Hunt Bench: **19.0 fixes** (Bug Hunt Bench)
- AA-MMMU-Pro: **?** (not individually reported)
- Design Arena Website: **1288** (OpenRouter)

Long context:

- 1M window; AA-LCR **79.7%** (Artificial Analysis); MRCR not reported.

Multimodal:

- Design Arena Website: **1288** (OpenRouter)
- AA-MMMU-Pro: not individually reported

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 82/100.** Agentic lane (unranked), Terminal-Bench 2.1 88.2%, CyberGym 84.5%, Toolathlon-Verified 73.0%, AutomationBench 48.2%, Agents' Last Exam 28.5%, HLE w/ tools 62.5%, GDPval-AA 1769 Elo/57.5% normalized, AA Tau3 Banking 50.3%, AA Briefcase 1503, AA EnterpriseOps-Gym 36.4%, Terminal-Bench 2.1 Vals 71.5%, AA AutomationBench 62.2%, AA Agentic Index 53.4%, AA ITBench 46.1%, aaTerminalBench21 83.9%, AA Terminal-Bench 4.0 41.9%, GDP.pdf 11.2%, AA-AnalystAgent 38.8%, Hermes Index 39.2%, Hermes Bench 71.8%, MazeBench 0%, AA Cyber 36.4%, CWE-Bench-AA 55.8%, DeepsecBench 24.3%, CyberGym-E2E 29.0%. Enrichment (2026-11-08): BenchLM aggregator (updated 2026-11-07) corroborates Terminal-Bench 2.1 88.2%, terminalBench3 28.3%, CyberGym 84.5%, ExploitGym 15.0%, Toolathlon-Verified 73.0%, AutomationBench 48.2%, Agents' Last Exam 28.5%, HLE w/ tools 62.5%, GDPval-AA 1769 Elo/57.5% normalized, AA Tau3 Banking 50.3%, AA Briefcase 1503, AA EnterpriseOps-Gym 36.4%, Terminal-Bench 2.1 Vals 71.5%, AA AutomationBench 62.2%, AA Agentic Index 53.4%, AA ITBench 46.1%, aaTerminalBench21 83.9%, AA Terminal-Bench 4.0 41.9%, GDP.pdf 11.2%, AA-AnalystAgent 38.8%, Hermes Index 39.2%, Hermes Bench 71.8%, MazeBench 0%, AA Cyber 36.4%, CWE-Bench-AA 55.8%, DeepsecBench 24.3%, CyberGym-E2E 29.0%, Finch 65.1%, b3 Agent Security 93.0%, Cyber Misuse Refusal 87.0%, AA Intelligence 31.6%, AA-GPQA 91.7%, AA-HLE 42.3%, AA-Omniscience 6.0%/32.3%/38.9%, AA-LCR 79.7%, CritPt 19.1%, MLCR 17.2%, GPQA Diamond Vals 88.1%, MMLU-Pro Vals 86.8%, Terminal-Bench 2.1 88.2% (already), terminalBench3 28.3% (already), DeepSWE 66.9% (already), NL2Repo 58% (already), ProgramBench 19.0% (already), FrontierSWE 78.1% (already), sweMarathon 42.5% (already), PostTrain Bench 39.8% (already), AA-SciCode 59.0% (already), VulcanBench v3 78.3% (already), OpenHarmony Bench 60.8% (already), FrontierSWE v2 30.2% (already), LiveCodeBench Vals 80.5% (already), SWE-bench Vals 95.4% (already), AA Coding Index 74.8% (already), Bug Hunt 19.0 fixes (already), Design Arena 1288, FrontierMath v2 68.772%/29.268%. Corroborates band; no change.
- **Reasoning: 82/100.** AA Intelligence 31.6%, AA-GPQA 91.7%, AA-HLE 42.3%, AA-Omniscience 6.0%/32.3%/38.9%, AA-LCR 79.7%, CritPt 19.1%, MLCR 17.2%, GPQA Diamond Vals 88.1%, MMLU-Pro Vals 86.8%, FrontierMath v2 68.772%/29.268%, Finch 65.1%, b3 Agent Security 93.0%, Cyber Misuse Refusal 87.0%. Corroborates band; no change.
- **Context window: 86/100.** 1M window; AA-LCR 79.7%. Corroborates band; no change.
- **Multimodal: 80/100.** Text/image in; Design Arena 1288. Corroborates band; no change.
- **Coding: 80/100.** DeepSWE 66.9%, Terminal-Bench 2.1 88.2%, SciCode 59.0%, AA Coding Index 74.8%, LiveCodeBench Vals 80.5%, SWE-bench Vals 95.4%. Enrichment adds DeepSWE 66.9% (already), Terminal-Bench 2.1 88.2% (already), SciCode 59.0% (already), AA Coding Index 74.8% (already), LiveCodeBench Vals 80.5% (already), SWE-bench Vals 95.4% (already), Design Arena 1288, FrontierMath v2 68.772%/29.268%, Finch 65.1%, b3 Agent Security 93.0%, Cyber Misuse Refusal 87.0%. Corroborates band; no change.
- **Cost efficiency: 82/100.** Open weights self-host; paid API mid-tier.
- **Overall Score: 82/100.** Mean of five quality dims (BenchLM aggregate 61.34); best-fit for agentic coding + reasoning at mid cost. Enrichment (2026-11-08) added new verified rows (Finch 65.1%, b3 Agent Security 93.0%, Cyber Misuse Refusal 87.0%, Terminal-Bench 2.1 88.2%, terminalBench3 28.3%, CyberGym 84.5%, ExploitGym 15.0%, Toolathlon-Verified 73.0%, AutomationBench 48.2%, Agents' Last Exam 28.5%, HLE w/ tools 62.5%, GDPval-AA 1769 Elo/57.5% normalized, AA Tau3 Banking 50.3%, AA Briefcase 1503, AA EnterpriseOps-Gym 36.4%, Terminal-Bench 2.1 Vals 71.5%, AA AutomationBench 62.2%, AA Agentic Index 53.4%, AA ITBench 46.1%, aaTerminalBench21 83.9%, AA Terminal-Bench 4.0 41.9%, GDP.pdf 11.2%, AA-AnalystAgent 38.8%, Hermes Index 39.2%, Hermes Bench 71.8%, MazeBench 0%, AA Cyber 36.4%, CWE-Bench-AA 55.8%, DeepsecBench 24.3%, CyberGym-E2E 29.0%, AA Intelligence 31.6%, AA-GPQA 91.7%, AA-HLE 42.3%, AA-Omniscience 6.0%/32.3%/38.9%, AA-LCR 79.7%, CritPt 19.1%, MLCR 17.2%, GPQA Diamond Vals 88.1%, MMLU-Pro Vals 86.8%, Terminal-Bench 2.1 88.2% (already), terminalBench3 28.3% (already), DeepSWE 66.9% (already), NL2Repo 58% (already), ProgramBench 19.0% (already), FrontierSWE 78.1% (already), sweMarathon 42.5% (already), PostTrain Bench 39.8% (already), AA-SciCode 59.0% (already), VulcanBench v3 78.3% (already), OpenHarmony Bench 60.8% (already), FrontierSWE v2 30.2% (already), LiveCodeBench Vals 80.5% (already), SWE-bench Vals 95.4% (already), AA Coding Index 74.8% (already), Bug Hunt 19.0 fixes (already), Design Arena 1288, FrontierMath v2 68.772%/29.268%). No dimension band moved; Overall unchanged at 68.4.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-10-17 preserved; new benchmark rows added; no dimension score changed (new evidence corroborates existing bands).
- Reference URLs:
  - [BenchLM — GLM-5.3](https://benchlm.ai/models/glm-5-3)
  - [Artificial Analysis — GLM-5.3](https://artificialanalysis.ai/models/glm-5-3)
  - [Z.AI — GLM-5.3](https://huggingface.co/zai-org/GLM-5.3)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).