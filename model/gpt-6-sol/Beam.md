# GPT-6 Sol — findings by Beam

- Source: OpenAI/GPT-6 Sol, `openai/gpt-6-sol`
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-10-17)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Sol
- **Short description:** OpenAI's Sol variant of GPT-6 (Jul 9, 2026): flagship-grade reasoning at mid-tier price; strong on Terminal-Bench 2.1, SWE-bench Verified, Agents' Last Exam; cyber competitive with Mythos Preview at 1/3 tokens.
- **Provider / access:** OpenAI API `gpt-6-sol` (limited preview); Azure; AWS Bedrock.
- **Release / knowledge:** Released 2026-07-09 (limited preview); knowledge cutoff not stated.
- **IDs:** `openai/gpt-6-sol`
- **Context window:** 1,050,000 tokens; max output 128,000.
- **Modalities:** text, image in; text out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-11-08):** paid (OpenAI).
- **Architecture:** proprietary; params undisclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Agents' Last Exam: **56.4%**
- AutomationBench: **33.2%**
- OSWorld 2.0: **60.5%**
- ExploitGym: **22.1%**
- GDPval-AA: **50.4%** normalized (Artificial Analysis)
- AA ITBench: **49.4%** (Artificial Analysis)
- CWE-bench v1: **52.0%** (Collinear)
- Hermes Index: **44.1%**; Hermes Bench: **73.5%** (Nous Research)
- MazeBench: **7%** (MazeBench)
- AA Cyber Index: **36.8%** (Artificial Analysis)
- CWE-Bench-AA: **64.2%** (Artificial Analysis)
- DeepsecBench-AA: **46.3%** (Artificial Analysis)
- CyberGym-E2E-AA: **0.0%** (Artificial Analysis)
- AA Briefcase: not individually reported
- AA AutomationBench: not individually reported
- AA Terminal-Bench 4.0: not individually reported
- GDP.pdf: not individually reported
- AA-AnalystAgent: not individually reported
- AA Tau3 Banking: not individually reported
- aaTerminalBench21: not individually reported

Reasoning / knowledge:

- AA Intelligence Index: **47.6%** (measured, updated 2026-11-07)
- AA-HLE: **47.9%** (Artificial Analysis)
- AA-Omniscience Index: **27.1%**
- AA-Omniscience Accuracy: **54.5%**
- AA-Omniscience Hallucination Rate: **60.1%**
- AA-LCR: **83.7%** (Artificial Analysis)
- CritPt: **30.9%** (Artificial Analysis)
- MLCR-AA: **33.9%** (Artificial Analysis)
- AA-IFBench: not individually reported
- AA Global-MMLU-Lite: not individually reported
- AA AIME 2025: not individually reported
- FrontierMath v2 Tiers 1-3: **89.825%**; Tier 4: **90.000%** (Epoch AI)
- ARC-AGI-1: **95.50%** (ARC Prize)
- ARC-AGI-2: **89.6%** (ARC Prize)
- ARC-AGI-3: **4.6%** (ARC Prize)
- ARC-AGI-3 Provider Adapter: **23.03%** (ARC Prize)
- HealthBench (raw): **47.1%** (OpenAI)
- HealthBench (length-adjusted): **53.2%** (OpenAI)
- HealthBench Professional: **60.8%** (OpenAI)
- HealthBench Professional (raw): **59.5%** (OpenAI)
- HealthBench Hard: **30.1%** (OpenAI)
- AA-GPQA Diamond: not individually reported
- GPQA Diamond (Vals): not individually reported
- MMLU-Pro (Vals): not individually reported

Coding:

- DeepSWE: **68.8%**
- AA-SciCode: **57.6%**
- FrontierCode 2.0: **34.3%**
- ScarfBench: not individually reported
- Bug Hunt Bench: not individually reported
- PostTrainBench v1.1: not individually reported
- FrontierCode 1.1: not individually reported
- ExtractBench (LlamaIndex): **94.57%**
- ParseBench: **68.85%**
- AA-MMMU-Pro: **82.9%**
- Design Arena Website: not individually reported

Long context:

- 1.05M window; MRCR: not reported.
- AA-LCR: **83.7%** (Artificial Analysis)

Multimodal:

- ExtractBench (LlamaIndex): **94.57%**
- ParseBench: **68.85%**
- AA-MMMU-Pro: **82.9%**

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 82/100.** Agentic lane (unranked), Agents' Last Exam 56.4%, AutomationBench 33.2%, OSWorld 2.0 60.5%, ExploitGym 22.1%, GDPval-AA 50.4% normalized, AA ITBench 49.4%, CWE-bench v1 52.0%, Hermes Index 44.1%, Hermes Bench 73.5%, MazeBench 7%, AA Cyber 36.8%, CWE-Bench-AA 64.2%, DeepsecBench 46.3%, CyberGym-E2E 0.0%. Enrichment (2026-11-08): BenchLM aggregator (updated 2026-11-07) corroborates Agents' Last Exam 56.4%, AutomationBench 33.2%, OSWorld 2.0 60.5%, ExploitGym 22.1%, GDPval-AA 50.4% normalized, AA ITBench 49.4%, CWE-bench v1 52.0%, Hermes Index 44.1%, Hermes Bench 73.5%, MazeBench 7%, AA Cyber 36.8%, CWE-Bench-AA 64.2%, DeepsecBench 46.3%, CyberGym-E2E 0.0%, AA Intelligence 47.6%, AA-HLE 47.9%, AA-Omniscience 27.1%/54.5%/60.1%, AA-LCR 83.7%, CritPt 30.9%, MLCR 33.9%, ARC-AGI-1 95.50%, ARC-AGI-2 89.6%, ARC-AGI-3 4.6%, ARC-AGI-3 Provider Adapter 23.03%, HealthBench (raw) 47.1%, (length-adjusted) 53.2%, HealthBench Professional 60.8%, Professional (raw) 59.5%, HealthBench Hard 30.1%, FrontierMath v2 Tiers 1-3 89.825%, Tier 4 90.000%, ExtractBench 94.57%, ParseBench 68.85%, AA-MMMU-Pro 82.9%. Corroborates band; no change.
- **Reasoning: 86/100.** ARC-AGI-1 95.50%, ARC-AGI-2 89.6%, ARC-AGI-3 4.6%, AA-LCR 83.7%, CritPt 30.9%, MLCR 33.9%, AA Intelligence 47.6%, AA-HLE 47.9%, AA-Omniscience 27.1%/54.5%/60.1%, HealthBench (raw) 47.1%, (length-adjusted) 53.2%, HealthBench Professional 60.8%, Professional (raw) 59.5%, HealthBench Hard 30.1%, FrontierMath v2 Tiers 1-3 89.825%, Tier 4 90.000%, ARC-AGI-3 Provider Adapter 23.03%. Corroborates band; no change.
- **Context window: 88/100.** 1.05M window; AA-LCR 83.7%. Corroborates band; no change.
- **Multimodal: 84/100.** Text/image in, text out; AA-MMMU-Pro 82.9%. Enrichment adds ExtractBench 94.57%, ParseBench 68.85%, AA-MMMU-Pro 82.9%. Corroborates band; no change.
- **Coding: 80/100.** DeepSWE 68.8%, AA-SciCode 57.6%, FrontierCode 2.0 34.3%. Enrichment adds ExtractBench 94.57%, ParseBench 68.85%, AA-MMMU-Pro 82.9%. Corroborates band; no change.
- **Cost efficiency: 80/100.** Mid-tier paid.
- **Overall Score: 84/100.** Mean of five quality dims (BenchLM aggregate 78.09); best-fit for agentic coding + reasoning at mid cost. Enrichment (2026-11-08) added new verified rows (Agents' Last Exam 56.4%; AutomationBench 33.2%; OSWorld 2.0 60.5%; ExploitGym 22.1%; GDPval-AA 50.4% normalized; AA ITBench 49.4%; CWE-bench v1 52.0%; Hermes Index 44.1%; Hermes Bench 73.5%; MazeBench 7%; AA Cyber 36.8%; CWE-Bench-AA 64.2%; DeepsecBench 46.3%; CyberGym-E2E 0.0%; AA Intelligence 47.6%; AA-HLE 47.9%; AA-Omniscience 27.1%/54.5%/60.1%; AA-LCR 83.7%; CritPt 30.9%; MLCR 33.9%; ARC-AGI-1 95.50%; ARC-AGI-2 89.6%; ARC-AGI-3 4.6%; ARC-AGI-3 Provider Adapter 23.03%; HealthBench (raw) 47.1%; (length-adjusted) 53.2%; HealthBench Professional 60.8%; Professional (raw) 59.5%; HealthBench Hard 30.1%; FrontierMath v2 Tiers 1-3 89.825%; Tier 4 90.000%; ExtractBench 94.57%; ParseBench 68.85%; AA-MMMU-Pro 82.9%). No dimension band moved; Overall unchanged at 81.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-10-17 preserved; new benchmark rows added; no dimension score changed (new evidence corroborates existing bands).
- Reference URLs:
  - [BenchLM — GPT-6 Sol](https://benchlm.ai/models/gpt-6-sol)
  - [Artificial Analysis — GPT-6 Sol](https://artificialanalysis.ai/models/gpt-6-sol)
  - [OpenAI — GPT-6 Sol](https://openai.com/index/introducing-gpt-6-sol-and-luna/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).