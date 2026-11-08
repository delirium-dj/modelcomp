# GPT-5.6 Terra — findings by Beam

- Source: OpenAI/GPT-5.6 Terra, `openai/gpt-5.6-terra`
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-10-17)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra
- **Short description:** OpenAI's Terra variant of GPT-5.6 (Jul 9, 2026): mid-tier in the GPT-5.6 family, strong agentic/coding at lower cost than Sol; #15 on BenchLM.
- **Provider / access:** OpenAI API `gpt-5.6-terra` (limited preview); Azure; AWS Bedrock.
- **Release / knowledge:** Released 2026-07-09 (limited preview); knowledge cutoff not stated.
- **IDs:** `openai/gpt-5.6-terra`
- **Context window:** 1,050,000 tokens; max output 128,000.
- **Modalities:** text, image in; text out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-11-08):** paid (OpenAI).
- **Architecture:** proprietary; params undisclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 3.0: **20.8%**
- Terminal-Bench 2.1: **87.4%** (OpenAI) / 88% (Artificial Analysis)
- BrowseComp: **87.5%**
- OSWorld 2.0: **50.2%**
- CyberGym: **81.8%**
- ExploitGym: **23.2%**
- Toolathlon: **53.1%**
- τ²-bench results: **86.3%** (Artificial Analysis)
- GDPval-AA: **47.6%** normalized / 1583 Elo (Artificial Analysis)
- AA ITBench: **51.0%** (Artificial Analysis)
- APEX-Agents-AA: **38.9%** (Artificial Analysis)
- Terminal-Bench 2.1 (Vals): **77.5%** (Vals AI)
- AA Agentic Index: **43.7%** (Artificial Analysis)
- ApprenticeBench: **16%** (NeoCognition)
- MazeBench: **6%** (MazeBench)
- AA Tau3 Banking: **40.2%** (Artificial Analysis)
- aaTerminalBench21: **88%** (Artificial Analysis)
- DeepsecBench-AA: **25.1%** (Artificial Analysis)
- AA Briefcase: not individually reported
- AA AutomationBench: not individually reported
- AA Terminal-Bench 4.0: not individually reported
- GDP.pdf: not individually reported
- AA-AnalystAgent: not individually reported
- AA Cyber Index: not individually reported
- CWE-Bench-AA: not individually reported
- CyberGym-E2E-AA: not individually reported

Reasoning / knowledge:

- ARC-AGI-1: **96.50%**
- ARC-AGI-2: **83.9%**
- ARC-AGI-3: **0.8%**
- AA-LCR: **83.0%** (Artificial Analysis)
- CritPt: **30.0%** (Artificial Analysis)
- GPQA: **92.9%**
- GPQA-D: **92.9%**
- HLE-Verified: **51.1%** (Google)
- LABBench2: **81.2%** (Google)
- HealthBench Professional: **57.7%** (OpenAI)
- HealthBench Hard: **32.7%** (OpenAI)
- Artificial Analysis Intelligence Index: **55.0%** (measured, updated 2026-11-07)
- AA-GPQA Diamond: **92.5%** (Artificial Analysis)
- AA-HLE: **42.9%** (Artificial Analysis)
- AA-Omniscience Index: **0.1%**
- AA-Omniscience Accuracy: **46.8%**
- AA-Omniscience Hallucination Rate: **87.9%**
- AA-IFBench: **71.2%** (Artificial Analysis)
- AA Global-MMLU-Lite: not individually reported
- AA AIME 2025: not individually reported
- FrontierMath (legacy): **84.9%**
- FrontierMath v2 (Tiers 1-3): **84.900%**
- FrontierMath v2 (Tier 4): **68.300%**
- MRCR: not reported

Coding:

- SWE-bench Pro: **63.4%**
- Terminal-Bench 2.1: **87.4%**
- DeepSWE: **69.6%**
- FrontierCode 1.1 Extended: **55.8%**
- CursorBench 3.2: **64.9%**
- AA-SciCode: **55.0%**
- VulcanBench v3: **87.0%**
- LiveCodeBench (Vals): **85.9%**
- SWE-bench (Vals): **95.4%**
- AA Coding Index: **76.7%**
- CursorBench 4.0: **41.3%**
- Bug Hunt Bench: not individually reported
- PostTrainBench v1.1: not individually reported
- FrontierCode 2.0: not individually reported
- ScarfBench: not individually reported

Long context:

- 1.05M window; MRCR: not reported.
- AA-LCR: **83.0%** (Artificial Analysis)

Multimodal:

- ExtractBench (LlamaIndex): **92.26%**
- ParseBench: **67.06%**
- MMMU-Pro: **80.7%**
- MMMU-Pro w/ Python: **82%**
- AA-MMMU-Pro: **80.7%**

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 82/100.** Agentic lane (unranked), Terminal-Bench 2.1 87.4%, BrowseComp 87.5%, OSWorld 2.0 50.2%, CyberGym 81.8%, Toolathlon 53.1%, τ²-bench 86.3%, GDPval-AA 47.6% normalized/1583 Elo, APEX-Agents-AA 38.9%, Terminal-Bench 2.1 Vals 77.5%, AA Agentic Index 43.7%, ApprenticeBench 16%, MazeBench 6%, AA Tau3 Banking 40.2%, aaTerminalBench21 88%, DeepsecBench 25.1%. Enrichment (2026-11-08): BenchLM aggregator (updated 2026-11-07) corroborates Terminal-Bench 3.0 20.8%, Terminal-Bench 2.1 87.4%/88%, BrowseComp 87.5%, OSWorld 2.0 50.2%, CyberGym 81.8%, ExploitGym 23.2%, Toolathlon 53.1%, τ²-bench 86.3%, GDPval-AA 47.6% normalized/1583 Elo, AA ITBench 51.0%, APEX-Agents-AA 38.9%, Terminal-Bench 2.1 Vals 77.5%, AA Agentic Index 43.7%, ApprenticeBench 16%, MazeBench 6%, AA Tau3 Banking 40.2%, aaTerminalBench21 88%, DeepsecBench 25.1%, BioBasicsBench not individually reported, HealthBench Professional 57.7%, HealthBench Hard 32.7%, AA Intelligence 55.0%, AA-GPQA 92.5%, AA-HLE 42.9%, AA-Omniscience 0.1%/46.8%/87.9%, AA-IFBench 71.2%, FrontierMath (legacy) 84.9%, FrontierMath v2 Tiers 1-3 84.900%, Tier 4 68.300%, ExtractBench 92.26%, ParseBench 67.06%, MMMU-Pro 80.7%, MMMU-Pro w/ Python 82%, AA-MMMU-Pro 80.7%. Corroborates band; no change.
- **Reasoning: 84/100.** ARC-AGI-1 96.5%, ARC-AGI-2 83.9%, ARC-AGI-3 0.8%, AA-LCR 83.0%, CritPt 30.0%, GPQA 92.9%, HLE-Verified 51.1%, LABBench2 81.2%, HealthBench Professional 57.7%, HealthBench Hard 32.7%, AA Intelligence 55.0%, AA-GPQA 92.5%, AA-HLE 42.9%, AA-Omniscience 0.1%/46.8%/87.9%, AA-IFBench 71.2%, FrontierMath (legacy) 84.9%, FrontierMath v2 84.900%/68.300%. Corroborates band; no change.
- **Context window: 88/100.** 1.05M window; AA-LCR 83.0%. Corroborates band; no change.
- **Multimodal: 84/100.** Text/image in, text out; MMMU-Pro 80.7%, AA-MMMU-Pro 80.7%. Enrichment adds ExtractBench 92.26%, ParseBench 67.06%, MMMU-Pro 80.7%, MMMU-Pro w/ Python 82%, AA-MMMU-Pro 80.7%. Corroborates band; no change.
- **Coding: 82/100.** SWE-bench Pro 63.4%, DeepSWE 69.6%, AA-SciCode 55.0%, AA Coding Index 76.7%, CursorBench 3.2 64.9%, CursorBench 4.0 41.3%, FrontierCode 1.1 Extended 55.8%, VulcanBench 87.0%, LiveCodeBench Vals 85.9%, SWE-bench Vals 95.4%. Enrichment adds ExtractBench 92.26%, ParseBench 67.06%, MMMU-Pro 80.7%, MMMU-Pro w/ Python 82%, AA-MMMU-Pro 80.7%. Corroborates band; no change.
- **Cost efficiency: 80/100.** Mid-tier paid.
- **Overall Score: 84/100.** Mean of five quality dims (BenchLM aggregate 69.81); best-fit for agentic coding + cyber at mid cost. Enrichment (2026-11-08) added new verified rows (Terminal-Bench 3.0 20.8%; Terminal-Bench 2.1 87.4%/88%; BrowseComp 87.5%; OSWorld 2.0 50.2%; CyberGym 81.8%; ExploitGym 23.2%; Toolathlon 53.1%; τ²-bench 86.3%; GDPval-AA 47.6% normalized/1583 Elo; AA ITBench 51.0%; APEX-Agents-AA 38.9%; Terminal-Bench 2.1 Vals 77.5%; AA Agentic Index 43.7%; ApprenticeBench 16%; MazeBench 6%; AA Tau3 Banking 40.2%; aaTerminalBench21 88%; DeepsecBench 25.1%; BioBasicsBench not individually reported; HealthBench Professional 57.7%; HealthBench Hard 32.7%; AA Intelligence 55.0%; AA-GPQA 92.5%; AA-HLE 42.9%; AA-Omniscience 0.1%/46.8%/87.9%; AA-IFBench 71.2%; FrontierMath (legacy) 84.9%; FrontierMath v2 Tiers 1-3 84.900%; Tier 4 68.300%; ExtractBench 92.26%; ParseBench 67.06%; MMMU-Pro 80.7%; MMMU-Pro w/ Python 82%; AA-MMMU-Pro 80.7%; SWE-bench Pro 63.4%; DeepSWE 69.6%; AA-SciCode 55.0%; AA Coding Index 76.7%; CursorBench 3.2 64.9%; CursorBench 4.0 41.3%; FrontierCode 1.1 Extended 55.8%; VulcanBench 87.0%; LiveCodeBench Vals 85.9%; SWE-bench Vals 95.4%). No dimension band moved; Overall unchanged at 82.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-10-17 preserved; new benchmark rows added; no dimension score changed (new evidence corroborates existing bands).
- Reference URLs:
  - [BenchLM — GPT-5.6 Terra](https://benchlm.ai/models/gpt-5-6-terra)
  - [Artificial Analysis — GPT-5.6 Terra](https://artificialanalysis.ai/models/gpt-5-6-terra)
  - [OpenAI — GPT-5.6](https://openai.com/index/gpt-5-6/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).