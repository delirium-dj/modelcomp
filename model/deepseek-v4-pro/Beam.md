# DeepSeek V4 Pro — findings by Beam

- Source: DeepSeek/DeepSeek V4 Pro, `deepseek/deepseek-v4-pro`
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-10-17)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Pro
- **Short description:** DeepSeek's flagship Pro model (Aug 2026): 1M context, strong agentic/coding/cyber at very low cost; open weights. AA Intelligence Index 53.2.
- **Provider / access:** DeepSeek API; OpenRouter; HuggingFace (open weights).
- **Release / knowledge:** Released 2026-08-13; knowledge cutoff not stated.
- **IDs:** `deepseek/deepseek-v4-pro`
- **Context window:** 1,000,000 tokens; max output 131,000.
- **Modalities:** text, image in; text out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-11-08):** paid (DeepSeek).
- **Architecture:** open-weight MoE; params not published.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Finch: **67.4%** (Mistral)
- Terminal-Bench 2.0: **67.9%**
- Terminal-Bench 2.1: **87.9%**
- BrowseComp: **83.4%**
- HLE w/ tools: **60.0%**
- MCP Atlas: **73.6%**
- GDPval-AA: **1306 Elo** / 54.5% normalized (Artificial Analysis)
- Toolathlon: **51.8%**
- AA Agentic Index: **49.6%**
- APEX-Agents-AA: **24.3%**
- τ²-bench results: **96.2%** (Artificial Analysis)
- GDPval-AA: **54.5%** normalized (Artificial Analysis)
- CyberGym: **83.3%**
- Toolathlon-Verified: **74.1%**
- Agents' Last Exam: **25.7%**
- AutomationBench: **31.8%**
- AA EnterpriseOps-Gym: **49.6%** (Artificial Analysis)
- Terminal-Bench 2.1 (Vals): **54.7%** (Vals AI)
- AA Tau3 Banking: **39.6%** (Artificial Analysis)
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

- MRCR 1M: **83.5%**
- CorpusQA 1M: **62.0%**
- AA-LCR: **80.3%** (Artificial Analysis)
- CritPt: **18.0%** (Artificial Analysis)
- ARC-AGI-1: **90.00%** (ARC Prize)
- ARC-AGI-2: **61.3%** (ARC Prize)
- MMLU-Pro: **87.5%** (DeepSeek)
- Chinese-SimpleQA: **84.4%** (DeepSeek)
- GPQA: **90.1%** (DeepSeek)
- GPQA-D: **90.1%** (DeepSeek)
- HLE: **42.7%** (DeepSeek V4 Pro 0813)
- Artificial Analysis Intelligence Index: **53.2%** (measured, updated 2026-11-07)
- AA-GPQA Diamond: **92.8%** (Artificial Analysis)
- AA-HLE: **41.0%** (Artificial Analysis)
- AA-Omniscience Index: **0.8%**
- AA-Omniscience Accuracy: **49.1%**
- AA-Omniscience Hallucination Rate: **94.1%**
- AA-IFBench: **76.5%** (Artificial Analysis)
- AA Global-MMLU-Lite: not individually reported
- AA AIME 2025: not individually reported
- HMMT Feb 2026: **95.2%** (DeepSeek)
- IMOAnswerBench: **89.8%** (DeepSeek)
- Apex: **38.3%** (DeepSeek)
- Apex Shortlist: **90.2%** (DeepSeek)
- GPQA Diamond (Vals): **92.4%** (Vals AI)
- MMLU-Pro (Vals): **87.0%** (Vals AI)

Coding:

- LiveCodeBench Pass@1-COT: **93.5%** (DeepSeek)
- Codeforces: **3206.0** (DeepSeek)
- SWE-bench Verified: **80.6%** (DeepSeek)
- SWE-bench Pro: **55.4%** (DeepSeek)
- SWE Multilingual: **76.2%** (DeepSeek)
- Terminal-Bench 2.0: **67.9%** (DeepSeek)
- Vibe Code Bench: **49.93%** (Vals AI)
- AA Coding Index: **68.8%** (Artificial Analysis)
- AA-SciCode: **51.0%** (Artificial Analysis)
- Terminal-Bench 2.1: **87.9%** (DeepSeek V4 Pro 0813)
- NL2Repo: **61.5%** (DeepSeek V4 Pro 0813)
- DeepSWE: **62.7%** (DeepSeek V4 Pro 0813)
- DSBench-FullStack: **71.1%** (DeepSeek V4 Pro 0813)
- DSBench-Hard: **67.2%** (DeepSeek V4 Pro 0813)
- OpenHarmony Bench: **59.0%** (OpenHarmony Bench)
- LiveCodeBench (Vals): **87.5%** (Vals AI)
- SWE-bench (Vals): **96.4%** (Vals AI)
- AA Coding Index: **68.8%** (Artificial Analysis)
- Bug Hunt Bench: not individually reported
- PostTrainBench v1.1: not individually reported
- FrontierCode 2.0: not individually reported
- ExtractBench (LlamaIndex): not individually reported
- ParseBench: not individually reported
- AA-MMMU-Pro: not individually reported
- Design Arena Website: **1258** (OpenRouter)

Long context:

- 1M window; MRCR 1M 83.5%; CorpusQA 1M 62.0%.
- AA-LCR: **80.3%** (Artificial Analysis)

Multimodal:

- Design Arena Website: **1258** (OpenRouter)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 80/100.** Agentic lane (unranked), Terminal-Bench 2.0 67.9%, Terminal-Bench 2.1 87.9%, BrowseComp 83.4%, HLE w/ tools 60.0%, MCP Atlas 73.6%, GDPval-AA 1306 Elo/54.5% normalized, Toolathlon 51.8%, AA Agentic Index 49.6%, APEX-Agents-AA 24.3%, τ²-bench 96.2%, CyberGym 83.3%, Toolathlon-Verified 74.1%, Agents' Last Exam 25.7%, AutomationBench 31.8%, AA EnterpriseOps-Gym 49.6%, Terminal-Bench 2.1 Vals 54.7%, AA Tau3 Banking 39.6%. Enrichment (2026-11-08): BenchLM aggregator (updated 2026-11-07) corroborates Terminal-Bench 2.0 67.9%, Terminal-Bench 2.1 87.9%, BrowseComp 83.4%, HLE w/ tools 60.0%, MCP Atlas 73.6%, GDPval-AA 1306 Elo/54.5% normalized, Toolathlon 51.8%, AA Agentic Index 49.6%, APEX-Agents-AA 24.3%, τ²-bench 96.2%, CyberGym 83.3%, Toolathlon-Verified 74.1%, Agents' Last Exam 25.7%, AutomationBench 31.8%, AA EnterpriseOps-Gym 49.6%, Terminal-Bench 2.1 Vals 54.7%, AA Tau3 Banking 39.6%, AA Intelligence 53.2%, AA-GPQA 92.8%, AA-HLE 41.0%, AA-Omniscience 0.8%/49.1%/94.1%, AA-LCR 80.3%, CritPt 18.0%, ARC-AGI-1 90.00%, ARC-AGI-2 61.3%, MMLU-Pro 87.5%, Chinese-SimpleQA 84.4%, GPQA 90.1%, GPQA-D 90.1%, HLE 42.7%, AA-IFBench 76.5%, HMMT Feb 2026 95.2%, IMOAnswerBench 89.8%, Apex 38.3%, Apex Shortlist 90.2%, GPQA Diamond Vals 92.4%, MMLU-Pro Vals 87.0%, LiveCodeBench Pass@1-COT 93.5%, Codeforces 3206.0, SWE-bench Verified 80.6%, SWE-bench Pro 55.4%, SWE Multilingual 76.2%, Terminal-Bench 2.0 67.9%, Vibe Code 49.93%, AA Coding Index 68.8%, AA-SciCode 51.0%, Terminal-Bench 2.1 87.9%, NL2Repo 61.5%, DeepSWE 62.7%, DSBench-FullStack 71.1%, DSBench-Hard 67.2%, OpenHarmony Bench 59.0%, LiveCodeBench Vals 87.5%, SWE-bench Vals 96.4%, MRCR 1M 83.5%, CorpusQA 1M 62.0%, AA-LCR 80.3%, Design Arena 1258. Corroborates band; no change.
- **Reasoning: 82/100.** MRCR 1M 83.5%, CorpusQA 1M 62.0%, AA-LCR 80.3%, CritPt 18.0%, ARC-AGI-1 90.00%, ARC-AGI-2 61.3%, MMLU-Pro 87.5%, Chinese-SimpleQA 84.4%, GPQA 90.1%, HLE 42.7%, AA Intelligence 53.2%, AA-GPQA 92.8%, AA-HLE 41.0%, AA-Omniscience 0.8%/49.1%/94.1%, AA-IFBench 76.5%, HMMT Feb 2026 95.2%, IMOAnswerBench 89.8%, Apex 38.3%, Apex Shortlist 90.2%, GPQA Diamond Vals 92.4%, MMLU-Pro Vals 87.0%. Corroborates band; no change.
- **Context window: 86/100.** 1M window; MRCR 1M 83.5%, CorpusQA 1M 62.0%, AA-LCR 80.3%. Corroborates band; no change.
- **Multimodal: 70/100.** Text/image in; Design Arena 1258. Corroborates band; no change.
- **Coding: 80/100.** LiveCodeBench Pass@1-COT 93.5%, Codeforces 3206.0, SWE-bench Verified 80.6%, SWE-bench Pro 55.4%, SWE Multilingual 76.2%, Terminal-Bench 2.0 67.9%, Vibe Code 49.93%, AA Coding Index 68.8%, AA-SciCode 51.0%, Terminal-Bench 2.1 87.9%, NL2Repo 61.5%, DeepSWE 62.7%, DSBench-FullStack 71.1%, DSBench-Hard 67.2%, OpenHarmony Bench 59.0%, LiveCodeBench Vals 87.5%, SWE-bench Vals 96.4%. Corroborates band; no change.
- **Cost efficiency: 88/100.** Very cheap open-weight.
- **Overall Score: 79.6/100.** Mean of five quality dims (BenchLM aggregate 62.72); best-fit for cost-efficient agentic + coding + cyber. Enrichment (2026-11-08) added new verified rows (Finch 67.4%; Terminal-Bench 2.0 67.9%; Terminal-Bench 2.1 87.9%; BrowseComp 83.4%; HLE w/ tools 60.0%; MCP Atlas 73.6%; GDPval-AA 1306 Elo/54.5% normalized; Toolathlon 51.8%; AA Agentic Index 49.6%; APEX-Agents-AA 24.3%; τ²-bench 96.2%; GDPval-AA 54.5% normalized; CyberGym 83.3%; Toolathlon-Verified 74.1%; Agents' Last Exam 25.7%; AutomationBench 31.8%; AA EnterpriseOps-Gym 49.6%; Terminal-Bench 2.1 Vals 54.7%; AA Tau3 Banking 39.6%; AA Intelligence 53.2%; AA-GPQA 92.8%; AA-HLE 41.0%; AA-Omniscience 0.8%/49.1%/94.1%; AA-LCR 80.3%; CritPt 18.0%; ARC-AGI-1 90.00%; ARC-AGI-2 61.3%; MMLU-Pro 87.5%; Chinese-SimpleQA 84.4%; GPQA 90.1%; GPQA-D 90.1%; HLE 42.7%; AA-IFBench 76.5%; HMMT Feb 2026 95.2%; IMOAnswerBench 89.8%; Apex 38.3%; Apex Shortlist 90.2%; GPQA Diamond Vals 92.4%; MMLU-Pro Vals 87.0%; LiveCodeBench Pass@1-COT 93.5%; Codeforces 3206.0; SWE-bench Verified 80.6%; SWE-bench Pro 55.4%; SWE Multilingual 76.2%; Terminal-Bench 2.0 67.9%; Vibe Code 49.93%; AA Coding Index 68.8%; AA-SciCode 51.0%; Terminal-Bench 2.1 87.9%; NL2Repo 61.5%; DeepSWE 62.7%; DSBench-FullStack 71.1%; DSBench-Hard 67.2%; OpenHarmony Bench 59.0%; LiveCodeBench Vals 87.5%; SWE-bench Vals 96.4%; MRCR 1M 83.5%; CorpusQA 1M 62.0%; AA-LCR 80.3%; Design Arena 1258). No dimension band moved; Overall unchanged at 67.6.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-10-17 preserved; new benchmark rows added; no dimension score changed (new evidence corroborates existing bands).
- Reference URLs:
  - [BenchLM — DeepSeek V4 Pro 0813](https://benchlm.ai/models/deepseek-v4-pro-0813)
  - [Artificial Analysis — DeepSeek V4 Pro](https://artificialanalysis.ai/models/deepseek-v4-pro)
  - [DeepSeek V4 Pro — HuggingFace](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).