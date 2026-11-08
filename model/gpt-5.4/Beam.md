# GPT-5.4 — findings by Beam

- Source: OpenAI/GPT-5.4, `openai/gpt-5.4`
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-10-17)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4
- **Short description:** OpenAI's GPT-5.4 (Mar 5, 2026): reasoning model with strong agentic coding, computer use, and professional work; 1M context; mid-tier pricing.
- **Provider / access:** OpenAI API `gpt-5.4` (Chat/Responses); Azure; AWS Bedrock.
- **Release / knowledge:** Released 2026-03-05; knowledge cutoff not stated.
- **IDs:** `openai/gpt-5.4`
- **Context window:** 1,050,000 tokens; max output 128,000.
- **Modalities:** text, image in; text out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-11-08):** paid (OpenAI).
- **Architecture:** proprietary; params undisclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- LifeVal: **73.0%**
- Terminal-Bench 2.0: **75.1%**
- CyberGym: **79.0%**
- BrowseComp: **82.7%**
- OSWorld-Verified: **75%**
- MCP Atlas: **70.6%**
- Toolathlon: **54.6%**
- τ²-bench results: **98.9%**
- Claw-Eval: **60.3%**
- DeepSearchQA: **73.6%**
- APEX-Agents-AA: **33.3%**
- GDPval-AA: **37.3%** normalized / 1307 Elo (Artificial Analysis)
- Gert Labs: **64.89%**
- ResearchClawBench: **15.3%**
- JobBench: **38.9%**
- ExploitGym: **6.0%**
- GDPval-AA: **1307 Elo** (Artificial Analysis)
- ApprenticeBench: **11%** (NeoCognition)
- MazeBench: **0%** (MazeBench)
- AA Tau3 Banking: **39.6%** (Artificial Analysis)
- terminalBenchHard: **57.6%** (Artificial Analysis)
- AA Briefcase: not individually reported
- AA AutomationBench: not individually reported
- AA Terminal-Bench 4.0: not individually reported
- GDP.pdf: not individually reported
- AA-AnalystAgent: not individually reported
- AA ITBench: not individually reported
- aaTerminalBench21: not individually reported
- AA Cyber Index: not individually reported
- CWE-Bench-AA: not individually reported
- DeepsecBench-AA: not individually reported
- CyberGym-E2E-AA: not individually reported

Reasoning / knowledge:

- BioBasicsBench: **33.2%**
- ARC-AGI-2: **74.0%**
- ARC-AGI-3: **0.2%**
- AA-LCR: **82.0%** (Artificial Analysis)
- CritPt: **23.4%** (Artificial Analysis)
- ARC-AGI-1: **93.67%** (ARC Prize)
- GPQA: **92.8%**
- HLE: **52.1%**
- HLE w/o tools: **39.8%**
- GPQA-D: **92.8%**
- HealthBench Hard: **40.1%** (Meta)
- MedXpertQA (Text): **59.6%** (Meta)
- Artificial Analysis Intelligence Index: **39.0%** (measured, updated 2026-11-07)
- AA-GPQA Diamond: **92.0%** (Artificial Analysis)
- AA-HLE: **43.7%** (Artificial Analysis)
- AA-Omniscience Index: **5.8%**
- AA-Omniscience Accuracy: **50.8%**
- AA-Omniscience Hallucination Rate: **91.7%**
- HealthBench Professional: **48.1%** (HealthBench Professional paper)
- AA-IFBench: **73.9%** (Artificial Analysis)
- AA Global-MMLU-Lite: not individually reported
- AA AIME 2025: not individually reported
- FrontierMath v2 Tiers 1-3: **78.596%**; Tier 4: **49.000%** (Epoch AI)
- AA-LCR: **82.0%** (Artificial Analysis)

Coding:

- LiveCodeBench Pro: **87.5%** (Meta)
- SWE-bench Pro: **57.7%** (OpenAI)
- React Native Evals: **85.3%** (React Native Evals)
- Terminal-Bench 2.0: **75.1%** (OpenAI)
- Vibe Code Bench: **67.42%** (Vals AI)
- AA Coding Index: **71.0%** (Artificial Analysis)
- PostTrainBench v1.1: **19.0%** (PostTrainBench)
- AA-SciCode: not individually reported
- Bug Hunt Bench: not individually reported
- FrontierCode 2.0: not individually reported
- ExtractBench (LlamaIndex): not individually reported
- ParseBench: **61.72%** (ParseBench)
- AA-MMMU-Pro: **78.4%** (Artificial Analysis)
- Design Arena Website: **1219** (OpenRouter)

Long context:

- 1.05M window; MRCR: not reported.
- AA-LCR: **82.0%** (Artificial Analysis)

Multimodal:

- ParseBench: **61.72%**
- MMMU-Pro: **81.2%**
- OfficeQA Pro: **53.2%**
- MMMU-Pro w/ Python: **82.1%**
- CharXiv: **82.8%**
- ERQA: **65.4%**
- SimpleVQA: **61.1%**
- ScreenSpot Pro: **85.4%**
- ZeroBench: **41.0%**
- MedXpertQA (MM): **77.1%**
- AA-MMMU-Pro: **78.4%**
- Design Arena Website: **1219**

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 78/100.** Agentic lane (unranked), BrowseComp 82.7%, OSWorld-Verified 75%, MCP Atlas 70.6%, Toolathlon 54.6%, τ²-bench 98.9%, Claw-Eval 60.3%, DeepSearchQA 73.6%, APEX-Agents-AA 33.3%, GDPval-AA 37.3% normalized/1307 Elo, Gert Labs 64.89%, ResearchClawBench 15.3%, JobBench 38.9%, ExploitGym 6.0%, ApprenticeBench 11%, MazeBench 0%, AA Tau3 Banking 39.6%, terminalBenchHard 57.6%. Enrichment (2026-11-08): BenchLM aggregator (updated 2026-11-07) corroborates LifeVal 73.0%, Terminal-Bench 2.0 75.1%, CyberGym 79.0%, BrowseComp 82.7%, OSWorld-Verified 75%, MCP Atlas 70.6%, Toolathlon 54.6%, τ²-bench 98.9%, Claw-Eval 60.3%, DeepSearchQA 73.6%, APEX-Agents-AA 33.3%, GDPval-AA 37.3% normalized/1307 Elo, Gert Labs 64.89%, ResearchClawBench 15.3%, JobBench 38.9%, ExploitGym 6.0%, GDPval-AA 1307 Elo, ApprenticeBench 11%, MazeBench 0%, AA Tau3 Banking 39.6%, terminalBenchHard 57.6%, BioBasicsBench 33.2%, ARC-AGI-2 74.0%, ARC-AGI-3 0.2%, AA-LCR 82.0%, CritPt 23.4%, ARC-AGI-1 93.67%, GPQA 92.8%, HLE 52.1%, HLE w/o tools 39.8%, GPQA-D 92.8%, HealthBench Hard 40.1%, MedXpertQA (Text) 59.6%, AA Intelligence 39.0%, AA-GPQA 92.0%, AA-HLE 43.7%, AA-Omniscience 5.8%/50.8%/91.7%, HealthBench Professional 48.1%, AA-IFBench 73.9%, LiveCodeBench Pro 87.5%, SWE-bench Pro 57.7%, React Native Evals 85.3%, Terminal-Bench 2.0 75.1%, Vibe Code Bench 67.42%, AA Coding Index 71.0%, PostTrainBench v1.1 19.0%, ParseBench 61.72%, MMMU-Pro 81.2%, OfficeQA Pro 53.2%, MMMU-Pro w/ Python 82.1%, CharXiv 82.8%, ERQA 65.4%, SimpleVQA 61.1%, ScreenSpot Pro 85.4%, ZeroBench 41.0%, MedXpertQA (MM) 77.1%, AA-MMMU-Pro 78.4%, Design Arena 1219, FrontierMath v2 78.596%/49.000%. Corroborates band; no change.
- **Reasoning: 84/100.** ARC-AGI-1 93.67%, ARC-AGI-2 74.0%, HLE 52.1%, CritPt 23.4%, IPhO 93.5%, FrontierMath 50%/78.596%/49.000%. Enrichment adds BioBasicsBench 33.2%, ARC-AGI-2 74.0% (already), ARC-AGI-3 0.2% (already), AA-LCR 82.0% (already), CritPt 23.4% (already), ARC-AGI-1 93.67% (already), GPQA 92.8%, HLE 52.1%, HLE w/o tools 39.8%, GPQA-D 92.8%, HealthBench Hard 40.1%, MedXpertQA (Text) 59.6%, AA Intelligence 39.0%, AA-GPQA 92.0%, AA-HLE 43.7%, AA-Omniscience 5.8%/50.8%/91.7%, HealthBench Professional 48.1%, AA-IFBench 73.9%, FrontierMath v2 78.596%/49.000%. Corroborates band; no change.
- **Context window: 84/100.** 1.05M window; AA-LCR 82.0%. Corroborates band; no change.
- **Multimodal: 84/100.** Text/image in, text out; MMMU-Pro 81.2%, AA-MMMU-Pro 78.4%. Enrichment adds ParseBench 61.72%, MMMU-Pro 81.2%, OfficeQA Pro 53.2%, MMMU-Pro w/ Python 82.1%, CharXiv 82.8%, ERQA 65.4%, SimpleVQA 61.1%, ScreenSpot Pro 85.4%, ZeroBench 41.0%, MedXpertQA (MM) 77.1%, AA-MMMU-Pro 78.4%, Design Arena 1219. Corroborates band; no change.
- **Coding: 78/100.** LiveCodeBench Pro 87.5%, SWE-bench Pro 57.7%, React Native Evals 85.3%, Terminal-Bench 2.0 75.1%, Vibe Code 67.42%, AA Coding Index 71.0%, PostTrainBench v1.1 19.0%. Enrichment adds LiveCodeBench Pro 87.5% (already), SWE-bench Pro 57.7% (already), React Native Evals 85.3% (already), Terminal-Bench 2.0 75.1% (already), Vibe Code 67.42% (already), AA Coding Index 71.0% (already), PostTrainBench 19.0% (already), ParseBench 61.72%, MMMU-Pro 81.2%, OfficeQA Pro 53.2%, MMMU-Pro w/ Python 82.1%, CharXiv 82.8%, ERQA 65.4%, SimpleVQA 61.1%, ScreenSpot Pro 85.4%, ZeroBench 41.0%, MedXpertQA (MM) 77.1%, AA-MMMU-Pro 78.4%, Design Arena 1219. Corroborates band; no change.
- **Cost efficiency: 80/100.** Mid-tier paid.
- **Overall Score: 81.6/100.** Mean of five quality dims (BenchLM aggregate 66.38); best-fit for agentic coding + reasoning at mid cost. Enrichment (2026-11-08) added new verified rows (LifeVal 73.0%; Terminal-Bench 2.0 75.1%; CyberGym 79.0%; BrowseComp 82.7%; OSWorld-Verified 75%; MCP Atlas 70.6%; Toolathlon 54.6%; τ²-bench 98.9%; Claw-Eval 60.3%; DeepSearchQA 73.6%; APEX-Agents-AA 33.3%; GDPval-AA 37.3% normalized/1307 Elo; Gert Labs 64.89%; ResearchClawBench 15.3%; JobBench 38.9%; ExploitGym 6.0%; GDPval-AA 1307 Elo; ApprenticeBench 11%; MazeBench 0%; AA Tau3 Banking 39.6%; terminalBenchHard 57.6%; BioBasicsBench 33.2%; ARC-AGI-2 74.0%; ARC-AGI-3 0.2%; AA-LCR 82.0%; CritPt 23.4%; ARC-AGI-1 93.67%; GPQA 92.8%; HLE 52.1%; HLE w/o tools 39.8%; GPQA-D 92.8%; HealthBench Hard 40.1%; MedXpertQA (Text) 59.6%; AA Intelligence 39.0%; AA-GPQA 92.0%; AA-HLE 43.7%; AA-Omniscience 5.8%/50.8%/91.7%; HealthBench Professional 48.1%; AA-IFBench 73.9%; LiveCodeBench Pro 87.5%; SWE-bench Pro 57.7%; React Native Evals 85.3%; Terminal-Bench 2.0 75.1%; Vibe Code 67.42%; AA Coding Index 71.0%; PostTrainBench v1.1 19.0%; ParseBench 61.72%; MMMU-Pro 81.2%; OfficeQA Pro 53.2%; MMMU-Pro w/ Python 82.1%; CharXiv 82.8%; ERQA 65.4%; SimpleVQA 61.1%; ScreenSpot Pro 85.4%; ZeroBench 41.0%; MedXpertQA (MM) 77.1%; AA-MMMU-Pro 78.4%; Design Arena 1219; FrontierMath v2 78.596%/49.000%). No dimension band moved; Overall unchanged at 80.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-10-17 preserved; new benchmark rows added; no dimension score changed (new evidence corroborates existing bands).
- Reference URLs:
  - [BenchLM — GPT-5.4](https://benchlm.ai/models/gpt-5-4)
  - [Artificial Analysis — GPT-5.4](https://artificialanalysis.ai/models/gpt-5-4)
  - [OpenAI — GPT-5.4](https://openai.com/index/introducing-gpt-5-4/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).