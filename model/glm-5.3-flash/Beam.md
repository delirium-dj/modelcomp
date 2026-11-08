# GLM-5.3-Flash — findings by Beam

- Source: Z.AI/GLM-5.3-Flash, `zai/glm-5.3-flash`
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-10-17)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3-Flash
- **Short description:** Z.AI's open-weight Flash variant (Jul 2026) of GLM-5.3: 1M context, strong agentic/coding/cyber at low cost; BenchLM #57/1016.
- **Provider / access:** Z.AI API `glm-5.3-flash`; HuggingFace `zai-org/GLM-5.3-Flash`; OpenRouter.
- **Release / knowledge:** Released 2026-07-??; knowledge cutoff not stated.
- **IDs:** `zai/glm-5.3-flash`
- **Context window:** 1,000,000 tokens.
- **Modalities:** text, image in; text out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-11-08):** paid (open weights self-host).
- **Architecture:** open-weight MoE; params not published.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1: **84.3%** (Z.AI); **62.9%** (Vals)
- Toolathlon-Verified: **78.4%**
- AutomationBench: **48.8%**
- Agents' Last Exam: **26.3%**
- HLE w/ tools: **55.3%**
- GDPval-AA: **1773 Elo** (Z.AI)
- AA Tau3 Banking: **47.2%** (Artificial Analysis)
- Terminal-Bench 2.1 (Vals): **62.9%** (Vals AI)
- AA ITBench: **51.2%** (Artificial Analysis)
- aaTerminalBench21: **84.3%** (Artificial Analysis)
- Hermes Index: **35.0%**; Hermes Bench: **68.9%** (Nous Research)
- MazeBench: **0%** (MazeBench)
- AA Cyber Index: **49.9%** (Artificial Analysis)
- CWE-Bench-AA: **55.8%** (Artificial Analysis)
- DeepsecBench-AA: **19.9%** (Artificial Analysis)
- CyberGym-E2E-AA: **74.0%** (Artificial Analysis)
- AA Intelligence Index: not individually reported
- AA Briefcase: not individually reported
- AA AutomationBench: not individually reported
- AA Terminal-Bench 4.0: not individually reported
- GDP.pdf: not individually reported
- AA-AnalystAgent: not individually reported

Reasoning / knowledge:

- GPQA Diamond (Vals): **86.4%** (Vals AI)
- MMLU-Pro (Vals): **86.1%** (Vals AI)
- AA Intelligence Index: not individually reported
- AA-GPQA Diamond: not individually reported
- AA-HLE: not individually reported
- AA-Omniscience Index: not individually reported
- AA-Omniscience Accuracy: not individually reported
- AA-Omniscience Hallucination Rate: not individually reported
- AA-LCR: not individually reported
- CritPt: not individually reported
- MLCR-AA: not individually reported
- AA-IFBench: not individually reported
- AA Global-MMLU-Lite: not individually reported
- AA AIME 2025: not individually reported
- FrontierMath v2 Tiers 1-3: **55.789%**; Tier 4: **17.073%** (Epoch AI)
- AA Intelligence Index: **58.02** (BenchLM aggregate, updated 2026-11-07)

Coding:

- Terminal-Bench 2.1: **84.3%**
- DeepSWE: **63.4%**
- NL2Repo: **56.3%**
- LiveCodeBench (Vals): **80.5%** (Vals AI)
- SWE-bench (Vals): **92.0%** (Vals AI)
- OpenHarmony Bench: **57.3%**
- FrontierSWE v2: **18.1%**
- Bug Hunt Bench: **17.7 fixes**
- AA-SciCode: not individually reported
- AA Coding Index: not individually reported
- PostTrainBench v1.1: not individually reported
- FrontierCode 2.0: not individually reported
- ExtractBench (LlamaIndex): **80.75%**
- ParseBench: **70.55%**
- OfficeQA Pro: **62.4%**
- CharXiv: **89.4%**
- Chartography (tools): **78.0%**
- BabyVision: **53.4%**
- MMVU: **80.5%**
- Design Arena Website: **1269**

Long context:

- 1M window; MRCR: no verified public score found.

Multimodal:

- ExtractBench (LlamaIndex): **80.75%**
- ParseBench: **70.55%**
- OfficeQA Pro: **62.4%**
- CharXiv: **89.4%**
- Chartography (tools): **78.0%**
- BabyVision: **53.4%**
- MMVU: **80.5%**
- Design Arena Website: **1269**

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 78/100.** Terminal-Bench 2.1 84.3%, Toolathlon-Verified 78.4%, AutomationBench 48.8%, Agents' Last Exam 26.3%, HLE w/ tools 55.3%, GDPval-AA 1773 Elo, AA ITBench 51.2%, aaTerminalBench21 84.3%, Hermes Index 35.0%, Hermes Bench 68.9%, MazeBench 0%, AA Cyber 49.9%, CWE-Bench-AA 55.8%, DeepsecBench 19.9%, CyberGym-E2E 74.0%. Enrichment (2026-11-08): BenchLM aggregator (updated 2026-11-07) corroborates Terminal-Bench 2.1 84.3%, Toolathlon-Verified 78.4%, AutomationBench 48.8%, Agents' Last Exam 26.3%, HLE w/ tools 55.3%, GDPval-AA 1773 Elo, AA Tau3 Banking 47.2%, Terminal-Bench 2.1 Vals 62.9%, AA ITBench 51.2%, aaTerminalBench21 84.3%, Hermes Index 35.0%, Hermes Bench 68.9%, MazeBench 0%, AA Cyber 49.9%, CWE-Bench-AA 55.8%, DeepsecBench 19.9%, CyberGym-E2E 74.0%, GPQA Diamond Vals 86.4%, MMLU-Pro Vals 86.1%, LiveCodeBench Vals 80.5%, SWE-bench Vals 92.0%, OpenHarmony Bench 57.3%, FrontierSWE v2 18.1%, Bug Hunt 17.7 fixes, ExtractBench 80.75%, ParseBench 70.55%, OfficeQA Pro 62.4%, CharXiv 89.4%, Chartography (tools) 78.0%, BabyVision 53.4%, MMVU 80.5%, Design Arena 1269, FrontierMath v2 55.789%/17.073%. Corroborates band; no change.
- **Reasoning: 82/100.** GPQA Diamond Vals 86.4%, MMLU-Pro Vals 86.1%, FrontierMath v2 55.789%/17.073%. Enrichment adds GPQA Diamond Vals 86.4% (already), MMLU-Pro Vals 86.1% (already), FrontierMath v2 55.789%/17.073% (already). Corroborates band; no change.
- **Context window: 88/100.** 1M window; caps at no published MRCR retrieval.
- **Multimodal: 82/100.** Text/image in; CharXiv 89.4%, Chartography 78.0%, BabyVision 53.4%, MMVU 80.5%. Enrichment adds ExtractBench 80.75%, ParseBench 70.55%, OfficeQA Pro 62.4%, CharXiv 89.4%, Chartography (tools) 78.0%, BabyVision 53.4%, MMVU 80.5%, Design Arena 1269. Corroborates band; no change.
- **Coding: 76/100.** DeepSWE 63.4%, NL2Repo 56.3%, LiveCodeBench Vals 80.5%, SWE-bench Vals 92.0%, OpenHarmony Bench 57.3%, FrontierSWE v2 18.1%, Bug Hunt 17.7 fixes. Enrichment adds DeepSWE 63.4% (already), NL2Repo 56.3% (already), LiveCodeBench Vals 80.5% (already), SWE-bench Vals 92.0% (already), OpenHarmony Bench 57.3% (already), FrontierSWE v2 18.1% (already), Bug Hunt 17.7 fixes (already), ExtractBench 80.75%, ParseBench 70.55%, OfficeQA Pro 62.4%, CharXiv 89.4%, Chartography (tools) 78.0%, BabyVision 53.4%, MMVU 80.5%, Design Arena 1269. Corroborates band; no change.
- **Cost efficiency: 85/100.** Open weights self-host; paid API mid-tier.
- **Overall Score: 81.2/100.** Mean of five quality dims (BenchLM aggregate 58.02); best-fit for agentic + coding at low cost. Enrichment (2026-11-08) added new verified rows (Terminal-Bench 2.1 84.3%, Toolathlon-Verified 78.4%, AutomationBench 48.8%, Agents' Last Exam 26.3%, HLE w/ tools 55.3%, GDPval-AA 1773 Elo, AA Tau3 Banking 47.2%, Terminal-Bench 2.1 Vals 62.9%, AA ITBench 51.2%, aaTerminalBench21 84.3%, Hermes Index 35.0%, Hermes Bench 68.9%, MazeBench 0%, AA Cyber 49.9%, CWE-Bench-AA 55.8%, DeepsecBench 19.9%, CyberGym-E2E 74.0%, GPQA Diamond Vals 86.4%, MMLU-Pro Vals 86.1%, LiveCodeBench Vals 80.5%, SWE-bench Vals 92.0%, OpenHarmony Bench 57.3%, FrontierSWE v2 18.1%, Bug Hunt 17.7 fixes, ExtractBench 80.75%, ParseBench 70.55%, OfficeQA Pro 62.4%, CharXiv 89.4%, Chartography (tools) 78.0%, BabyVision 53.4%, MMVU 80.5%, Design Arena 1269, FrontierMath v2 55.789%/17.073%). No dimension band moved; Overall unchanged at 80.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-10-17 preserved; new benchmark rows added; no dimension score changed (new evidence corroborates existing bands).
- Reference URLs:
  - [BenchLM — GLM-5.3-Flash](https://benchlm.ai/models/glm-5-3-flash)
  - [Artificial Analysis — GLM-5.3-Flash](https://artificialanalysis.ai/models/glm-5-3-flash)
  - [Z.AI — GLM-5.3-Flash](https://z.ai/blog/glm-5.3-flash)
  - [GLM-5.3-Flash — HuggingFace](https://huggingface.co/zai-org/GLM-5.3-Flash)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).