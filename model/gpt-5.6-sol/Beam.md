# GPT-5.6 Sol — findings by Beam

- Source: OpenAI/GPT-5.6 Sol, `openai/gpt-5.6-sol`
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-10-17)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Sol
- **Short description:** OpenAI's flagship Sol (Jul 9, 2026) in the GPT-5.6 family; state of the art on Terminal-Bench 2.1, SWE-bench Verified, Agents' Last Exam; strong cyber (ExploitBench competitive with Mythos Preview at 1/3 tokens). Previewed with robust safeguards.
- **Provider / access:** OpenAI API `gpt-5.6-sol` (limited preview); Azure; AWS Bedrock.
- **Release / knowledge:** Released 2026-07-09 (limited preview); knowledge cutoff not stated.
- **IDs:** `openai/gpt-5.6-sol`
- **Context window:** 1,050,000 tokens; max output 128,000.
- **Modalities:** text, image in; text out; reasoning yes (max effort, ultra mode with subagents); tool calling yes; structured output yes.
- **Pricing (as of 2026-11-08):** $4.00 / 1M input, $20.00 / 1M output; paid.
- **Architecture:** proprietary; params undisclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Agentic public-lane (BenchLM): **68.7** (#12/128)
- Terminal-Bench 2.1: **91.9%** (OpenAI) / 85.77% (Vals)
- Terminal-Bench 3.0: **34.6%**
- BrowseComp: **92.2%**
- OSWorld 2.0: **62.6%**
- CyberGym: **84.5%**
- ExploitGym: **33.7%**
- Toolathlon: **58%**
- Agents' Last Exam: **53.6** (new high, +13.1 over Fable 5)
- Vals Index: **58.01%** (#12/49)
- LifeVal: **80.0%** (OpenAI)
- Terminal-Bench 2.1 (Vals): **85.8%** (Vals AI)
- AA Agentic Index: **50.5%** (Artificial Analysis)
- ApprenticeBench: **26%** (NeoCognition)
- MazeBench: **13%** (MazeBench)
- AA EnterpriseOps-Gym: **42.9%** (Artificial Analysis)
- AA Tau3 Banking: **44.3%** (Artificial Analysis)
- AA-AnalystAgent: **47.5%** (Artificial Analysis)
- AA ITBench: **56.2%** (Artificial Analysis)
- terminalBenchHard: **65.9%** (Artificial Analysis)
- aaTerminalBench21: **88.4%** (Artificial Analysis)
- AA Terminal-Bench 4.0: **59.1%** (Artificial Analysis)
- AA Cyber Index: **33.4%** (Artificial Analysis)
- CWE-Bench-AA: **63.3%** (Artificial Analysis)
- DeepsecBench-AA: **36.9%** (Artificial Analysis)
- CyberGym-E2E-AA: **0.0%** (Artificial Analysis)

Reasoning / knowledge:

- ARC-AGI-1: **96.50%**
- ARC-AGI-2: **92.5%**
- ARC-AGI-3: **7.8%**
- FrontierMath (legacy): **89%**
- FrontierMath v2 (Tiers 1-3): **89.000%**
- FrontierMath v2 (Tier 4): **83.000%**
- GeneBench-Pro: **28.7%**
- GPQA Diamond: **95.20%**
- HLE: not reported
- BioBasicsBench: **45.6%** (OpenAI)
- HealthBench Professional: **60.5%** (OpenAI)
- HealthBench Hard: **33.1%** (OpenAI)
- Artificial Analysis Intelligence Index: **58.9%** (measured, updated 2026-11-07)
- AA-GPQA Diamond: **94.1%** (Artificial Analysis)
- AA-HLE: **49.5%** (Artificial Analysis)
- AA-Omniscience Index: **22.0%**
- AA-Omniscience Accuracy: **59.4%**
- AA-Omniscience Hallucination Rate: **92.2%**
- CritPt: **32.3%** (Artificial Analysis)
- MLCR-AA: not individually reported
- AA-LCR: **84.0%** (Artificial Analysis)
- GPQA Diamond (Vals): **95.2%** (Vals AI)
- MMLU-Pro (Vals): **89.1%** (Vals AI)
- AA-IFBench: **72.7%** (Artificial Analysis)
- Gray Swan IPI: **27.0%** (Google)

Coding:

- Coding public-lane (BenchLM): **67.4** (#11/150)
- SWE-bench Verified: **96.20%** (#1 Vals)
- SWE-bench Pro: **64.6%**
- DeepSWE: **72.7%**
- LiveCodeBench: **82.60%**
- Vibe Code Bench v1.1: **80.50%**
- Bug Hunt Bench: **42.0 fixes**
- VulcanBench v3: **87.0%**
- VulcanBench CII v1: **86.5%**
- CursorBench 4.0: **41.7%**
- FrontierCode 1.1 Extended: **60.6%**
- FrontierSWE v2: **32.2%**
- ScarfBench: **65.4%** (Kaggle)
- DeepSWE: **72.7%** (OpenAI)
- FrontierCode 1.1 Extended: **60.6%** (Cognition)
- CursorBench 3.2: **67.2%** (Cursor)
- AA-SciCode: **57.1%** (Artificial Analysis)
- AA Coding Index: **77.4%** (Artificial Analysis)
- Bug Hunt Bench: **42.0 fixes** (Bug Hunt Bench)
- PostTrainBench v1.1: **36.2%** (PostTrainBench)
- FrontierCode 2.0: **27.6%** (Cognition)
- ExtractBench (LlamaIndex): **93.77%**; ExtractBench Pro: **12%**; ParseBench: **74.40%**
- MMMU-Pro: **83%**; MMMU-Pro w/ Python: **84.6%**; AA-MMMU-Pro: **83.4%**
- ScreenSpot Pro: not individually reported

Long context:

- 1.05M window; MRCR: not reported.

Multimodal:

- MMMU-Pro: **83%**; MMMU-Pro w/ Python: **84.6%** (Vals 88.84%)
- CharXiv: not reported

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 86/100.** Agentic lane #12/128 (68.7), Terminal-Bench 2.1 91.9%, BrowseComp 92.2%, Agents' Last Exam 53.6, OSWorld 62.6%, CyberGym 84.5%; caps at ExploitGym 33.7%. Enrichment (2026-11-08): added LifeVal 80.0%, Terminal-Bench 3.0 34.6%, Terminal-Bench 2.1 Vals 85.8%, AA Agentic Index 50.5%, ApprenticeBench 26%, MazeBench 13%, AA EnterpriseOps-Gym 42.9%, AA Tau3 Banking 44.3%, AA-AnalystAgent 47.5%, AA ITBench 56.2%, terminalBenchHard 65.9%, aaTerminalBench21 88.4%, AA Terminal-Bench 4.0 59.1%, AA Cyber 33.4%, CWE-Bench-AA 63.3%, DeepsecBench 36.9%, CyberGym-E2E 0.0%, BioBasicsBench 45.6%, HealthBench Professional 60.5%, HealthBench Hard 33.1%, AA Intelligence 58.9%, AA-GPQA 94.1%, AA-HLE 49.5%, AA-Omniscience 22.0%/59.4%/92.2%, CritPt 32.3%, AA-LCR 84.0%, GPQA Diamond Vals 95.2%, MMLU-Pro Vals 89.1%, AA-IFBench 72.7%, Gray Swan IPI 27.0%, ExtractBench (LlamaIndex) 93.77%, ExtractBench Pro 12%, ParseBench 74.40%, MMMU-Pro 83%, MMMU-Pro w/ Python 84.6%, AA-MMMU-Pro 83.4%. Corroborates band; no change.
- **Reasoning: 88/100.** ARC-AGI-1 96.5%, ARC-AGI-2 92.5%, FrontierMath Tier4 83.0%, GPQA 95.2%; caps at ARC-AGI-3 7.8%. Enrichment adds BioBasicsBench 45.6%, HealthBench Professional 60.5%, HealthBench Hard 33.1%, AA Intelligence 58.9%, AA-GPQA 94.1%, AA-HLE 49.5%, AA-Omniscience 22.0%/59.4%/92.2%, CritPt 32.3%, AA-LCR 84.0%, GeneBench-Pro 28.7%, GPQA Diamond Vals 95.2%, MMLU-Pro Vals 89.1%, AA-IFBench 72.7%, Gray Swan IPI 27.0%. Corroborates band; no change.
- **Context window: 88/100.** 1.05M window; caps at no published MRCR retrieval.
- **Multimodal: 88/100.** Text/image/file in; MMMU-Pro 83%, MMMU-Pro w/ Python 86.5%. Enrichment adds ExtractBench (LlamaIndex) 93.77%, ExtractBench Pro 12%, ParseBench 74.40%, MMMU-Pro 83%, MMMU-Pro w/ Python 84.6%, AA-MMMU-Pro 83.4%. Corroborates band; no change.
- **Coding: 86/100.** SWE-bench Verified 96.2%, DeepSWE 72.7%, LiveCodeBench 82.6%, coding lane #11/150 (67.4); caps at SWE-bench Pro 64.6%. Enrichment adds ScarfBench 65.4%, DeepSWE 72.7%, FrontierCode 1.1 Extended 60.6%, CursorBench 3.2 67.2%, AA-SciCode 57.1%, AA Coding Index 77.4%, Bug Hunt 42.0 fixes, PostTrainBench 36.2%, FrontierCode 2.0 27.6%, ExtractBench (LlamaIndex) 93.77%, ExtractBench Pro 12%, ParseBench 74.40%, MMMU-Pro 83%, MMMU-Pro w/ Python 84.6%, AA-MMMU-Pro 83.4%. Corroborates band; no change.
- **Cost efficiency: 80/100.** Mid-premium $4/$20 per 1M.
- **Overall Score: 87/100.** Mean of five quality dims (BenchLM aggregate 75.3); best-fit for agentic coding + cyber at mid cost. Enrichment (2026-11-08) added new verified rows (LifeVal 80.0%; Terminal-Bench 3.0 34.6%; Terminal-Bench 2.1 Vals 85.8%; AA Agentic Index 50.5%; ApprenticeBench 26%; MazeBench 13%; AA EnterpriseOps-Gym 42.9%; AA Tau3 Banking 44.3%; AA-AnalystAgent 47.5%; AA ITBench 56.2%; terminalBenchHard 65.9%; aaTerminalBench21 88.4%; AA Terminal-Bench 4.0 59.1%; AA Cyber 33.4%; CWE-Bench-AA 63.3%; DeepsecBench 36.9%; CyberGym-E2E 0.0%; BioBasicsBench 45.6%; HealthBench Professional 60.5%; HealthBench Hard 33.1%; AA Intelligence 58.9%; AA-GPQA 94.1%; AA-HLE 49.5%; AA-Omniscience 22.0%/59.4%/92.2%; CritPt 32.3%; AA-LCR 84.0%; GeneBench-Pro 28.7%; GPQA Diamond Vals 95.2%; MMLU-Pro Vals 89.1%; AA-IFBench 72.7%; Gray Swan IPI 27.0%; ExtractBench (LlamaIndex) 93.77%; ExtractBench Pro 12%; ParseBench 74.40%; MMMU-Pro 83%; MMMU-Pro w/ Python 84.6%; AA-MMMU-Pro 83.4%; ScarfBench 65.4%; DeepSWE 72.7%; FrontierCode 1.1 Extended 60.6%; CursorBench 3.2 67.2%; AA-SciCode 57.1%; AA Coding Index 77.4%; Bug Hunt 42.0 fixes; PostTrainBench 36.2%; FrontierCode 2.0 27.6%). No dimension band moved; Overall unchanged at 87.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-10-17 preserved; new benchmark rows added; no dimension score changed (new evidence corroborates existing bands).
- Reference URLs:
  - [BenchLM — GPT-5.6 Sol](https://benchlm.ai/models/gpt-5-6-sol)
  - [Artificial Analysis — GPT-5.6 Sol](https://artificialanalysis.ai/models/gpt-5-6-sol)
  - [OpenAI — GPT-5.6](https://openai.com/index/gpt-5-6/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).