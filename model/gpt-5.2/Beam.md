# GPT-5.2 — findings by Beam

- Source: OpenAI/GPT-5.2, `openai/gpt-5.2`
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-10-17)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2
- **Short description:** OpenAI's reasoning model (Dec 2025) with 400K context; strong agentic coding and multimodal; mid-tier pricing.
- **Provider / access:** OpenAI API `gpt-5.2` (Chat/Responses); Azure; AWS Bedrock.
- **Release / knowledge:** Released 2025-12-??; knowledge cutoff not stated.
- **IDs:** `openai/gpt-5.2`
- **Context window:** 400,000 tokens; max output 128,000.
- **Modalities:** text, image in; text out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-11-08):** paid (OpenAI).
- **Architecture:** proprietary; params undisclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- LifeVal: **49.3%**
- BrowseComp: **65.8%**
- OSWorld-Verified: **47.3%**
- τ²-bench results: **84.8%** (Artificial Analysis)
- Gert Labs: **46.54%**
- JobBench: **34.3%**
- terminalBenchHard: **47%** (Artificial Analysis)
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

- BioBasicsBench: **31.2%**
- ARC-AGI-2: **52.9%**
- AA-LCR: **82.7%** (Artificial Analysis)
- CritPt: **11.6%** (Artificial Analysis)
- ARC-AGI-1: **86.17%** (ARC Prize)
- GPQA: not individually reported
- Artificial Analysis Intelligence Index: **30.4%** (measured, updated 2026-11-07)
- AA-GPQA Diamond: **90.3%** (Artificial Analysis)
- AA-HLE: **37.7%** (Artificial Analysis)
- AA-Omniscience Index: **-0.9%**
- AA-Omniscience Accuracy: **44.3%**
- AA-Omniscience Hallucination Rate: **81.2%**
- AA-IFBench: **75.4%** (Artificial Analysis)
- AA Global-MMLU-Lite: not individually reported
- AA AIME 2025: **99.0%** (Artificial Analysis)
- FrontierMath v2 Tiers 1-3: **67.400%**; Tier 4: **31.700%** (Epoch AI)
- AA MMLU-Pro: **87.4%** (Artificial Analysis)

Coding:

- SWE-bench Verified: **80%**
- SWE-bench Pro: **55.6%**
- Vibe Code Bench: **53.50%**
- AA-SciCode: not individually reported
- AA Coding Index: not individually reported
- PostTrainBench v1.1: not individually reported
- Bug Hunt Bench: not individually reported
- FrontierCode 2.0: not individually reported
- ExtractBench (LlamaIndex): not individually reported
- ParseBench: not individually reported
- Bug Hunt Bench: not individually reported

Long context:

- 400K window; MRCR: not reported.
- AA-LCR: **82.7%** (Artificial Analysis)

Multimodal:

- MMMU: **86.7%**
- MMMU-Pro: **79.5%**
- RealWorldQA: **83.3%**
- OmniDocBench 1.5: **85.7%**
- Video-MME (with subtitle): **86.0%**
- Video-MME (w/o subtitle): **85.8%**
- MathVision: **83.0%**
- We-Math: **79.0%**
- DynaMath: **86.8%**
- SimpleVQA: **55.8%**
- CC-OCR: **70.3%**
- AI2D_TEST: **92.2%**
- CountBench: **91.9%**
- ERQA: **59.8%**
- VideoMMMU: **85.9%**
- MLVU (M-Avg): **85.6%**
- CharXiv: **82.1%**
- V*: **75.9%**
- Design Arena Website: **1193**
- AA-MMMU-Pro: not individually reported

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 74/100.** Agentic lane (unranked), BrowseComp 65.8%, OSWorld-Verified 47.3%, τ²-bench 84.8%, Gert Labs 46.54%, JobBench 34.3%, terminalBenchHard 47%. Enrichment (2026-11-08): BenchLM aggregator (updated 2026-11-07) corroborates LifeVal 49.3%, BrowseComp 65.8%, OSWorld-Verified 47.3%, τ²-bench 84.8%, Gert Labs 46.54%, JobBench 34.3%, terminalBenchHard 47%, BioBasicsBench 31.2%, ARC-AGI-2 52.9%, AA-LCR 82.7%, CritPt 11.6%, ARC-AGI-1 86.17%, AA Intelligence 30.4%, AA-GPQA 90.3%, AA-HLE 37.7%, AA-Omniscience -0.9%/44.3%/81.2%, AA-IFBench 75.4%, AA AIME 2025 99.0%, FrontierMath v2 67.400%/31.700%, AA MMLU-Pro 87.4%, SWE-bench Verified 80%, SWE-bench Pro 55.6%, Vibe Code 53.50%, MMMU 86.7%, MMMU-Pro 79.5%, RealWorldQA 83.3%, OmniDocBench 1.5 85.7%, Video-MME rows, MathVision 83.0%, We-Math 79.0%, DynaMath 86.8%, SimpleVQA 55.8%, CC-OCR 70.3%, AI2D_TEST 92.2%, CountBench 91.9%, ERQA 59.8%, VideoMMMU 85.9%, MLVU 85.6%, CharXiv 82.1%, V* 75.9%, Design Arena 1193. Corroborates band; no change.
- **Reasoning: 76/100.** ARC-AGI-2 52.9%, BioBasicsBench 31.2%, AA-LCR 82.7%, CritPt 11.6%, ARC-AGI-1 86.17%, AA Intelligence 30.4%, AA-GPQA 90.3%, AA-HLE 37.7%, AA-Omniscience -0.9%/44.3%/81.2%, AA-IFBench 75.4%, AA AIME 2025 99.0%, FrontierMath v2 67.400%/31.700%, AA MMLU-Pro 87.4%. Corroborates band; no change.
- **Context window: 78/100.** 400K window; AA-LCR 82.7%. Corroborates band; no change.
- **Multimodal: 82/100.** Text/image in, text out; MMMU 86.7%, MMMU-Pro 79.5%. Enrichment adds MMMU 86.7% (already), MMMU-Pro 79.5% (already), RealWorldQA 83.3% (already), OmniDocBench 1.5 85.7% (already), Video-MME rows (already), MathVision 83.0% (already), We-Math 79.0% (already), DynaMath 86.8% (already), SimpleVQA 55.8% (already), CC-OCR 70.3% (already), AI2D_TEST 92.2% (already), CountBench 91.9% (already), ERQA 59.8% (already), VideoMMMU 85.9% (already), MLVU 85.6% (already), CharXiv 82.1% (already), V* 75.9% (already), Design Arena 1193. Corroborates band; no change.
- **Coding: 74/100.** SWE-bench Verified 80%, SWE-bench Pro 55.6%, Vibe Code 53.50%. Enrichment adds SWE-bench Verified 80% (already), SWE-bench Pro 55.6% (already), Vibe Code 53.50% (already). Corroborates band; no change.
- **Cost efficiency: 80/100.** Mid-tier paid.
- **Overall Score: 77/100.** Mean of five quality dims (BenchLM aggregate 59.72); best-fit for agentic coding + reasoning at mid cost. Enrichment (2026-11-08) added new verified rows (LifeVal 49.3%; BrowseComp 65.8%; OSWorld-Verified 47.3%; τ²-bench 84.8%; Gert Labs 46.54%; JobBench 34.3%; terminalBenchHard 47%; BioBasicsBench 31.2%; ARC-AGI-2 52.9%; AA-LCR 82.7%; CritPt 11.6%; ARC-AGI-1 86.17%; AA Intelligence 30.4%; AA-GPQA 90.3%; AA-HLE 37.7%; AA-Omniscience -0.9%/44.3%/81.2%; AA-IFBench 75.4%; AA AIME 2025 99.0%; FrontierMath v2 67.400%/31.700%; AA MMLU-Pro 87.4%; SWE-bench Verified 80%; SWE-bench Pro 55.6%; Vibe Code 53.50%; MMMU 86.7%; MMMU-Pro 79.5%; RealWorldQA 83.3%; OmniDocBench 1.5 85.7%; Video-MME rows; MathVision 83.0%; We-Math 79.0%; DynaMath 86.8%; SimpleVQA 55.8%; CC-OCR 70.3%; AI2D_TEST 92.2%; CountBench 91.9%; ERQA 59.8%; VideoMMMU 85.9%; MLVU 85.6%; CharXiv 82.1%; V* 75.9%; Design Arena 1193). No dimension band moved; Overall unchanged at 77.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-10-17 preserved; new benchmark rows added; no dimension score changed (new evidence corroborates existing bands).
- Reference URLs:
  - [BenchLM — GPT-5.2](https://benchlm.ai/models/gpt-5-2)
  - [Artificial Analysis — GPT-5.2](https://artificialanalysis.ai/models/gpt-5-2)
  - [OpenAI — GPT-5.2](https://openai.com/index/introducing-gpt-5-2/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).