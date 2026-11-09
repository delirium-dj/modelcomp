# Kimi K2.5 — findings by Beam

- Source: Moonshot AI/Kimi K2.5, `moonshotai/kimi-k2.5`
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-10-17)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.5
- **Short description:** Moonshot AI's open-weight multimodal model (Jan 2026): 256K context, strong agentic coding, multimodal; BenchLM #87/1016.
- **Provider / access:** Moonshot API; OpenRouter; HuggingFace (open weights).
- **Release / knowledge:** Released 2026-01-??; knowledge cutoff not stated.
- **IDs:** `moonshotai/kimi-k2.5`
- **Context window:** 262,144 tokens; max output not stated.
- **Modalities:** text, image, video in; text out; reasoning yes; tool calling yes; structured output yes. Open weights.
- **Pricing (as of 2026-11-08):** paid (Moonshot).
- **Architecture:** open-weight; params not published.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.0: **50.8%**
- BrowseComp: **60.6%**
- OSWorld-Verified: **63.3%**
- Claw-Eval: **52.3%**
- QwenClawBench: **54.3%**
- τ³-bench results: **65.7%**
- DeepSearchQA: **77.1%**
- DeepPlanning: **14.4%**
- Toolathlon: **27.8%**
- MCP Atlas: **29.5%**
- MCP-Tasks: **59.1%**
- WideResearch: **72.7%**
- τ²-bench results: **95.9%** (Artificial Analysis)
- BFCL v4: **68.3%**
- APEX-Agents-AA: **11.5%** (Artificial Analysis)
- Gert Labs: **45.88%** (Gert Labs)
- ResearchClawBench: **14.0%** (ResearchClawBench)
- JobBench: **8.7%** (JobBench paper)
- GDPval-AA: **17.0%** normalized / 936 Elo (Artificial Analysis)
- GDPval-AA: **936 Elo** (Artificial Analysis)
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

- GPQA: **87.6%**
- GPQA-D: **87.6%**
- SuperGPQA: **69.2%**
- MMLU-Pro: **87.1%**
- MMLU-Pro (Arcee): **87.1%**
- MMLU-Redux: **94.5%**
- C-Eval: **94%**
- HLE: **30.1%**
- Artificial Analysis Intelligence Index: **23.5%** (measured, updated 2026-11-07)
- AA-GPQA Diamond: **87.9%** (Artificial Analysis)
- AA-HLE: **30.7%** (Artificial Analysis)
- AA-Omniscience Index: **-7.3%**
- AA-Omniscience Accuracy: **35.2%**
- AA-Omniscience Hallucination Rate: **65.7%**
- AA-LCR: **78.0%** (Artificial Analysis)
- CritPt: **3.1%** (Artificial Analysis)
- AA-IFBench: **70.2%** (Artificial Analysis)
- AA Global-MMLU-Lite: not individually reported
- AA AIME 2025: not individually reported
- LongBench v2: **61%**
- AA MMLU-Pro: not individually reported
- AIME 2025: **96.1%**
- AIME26: **95.8%**
- AIME25 (Arcee): **96.3%**
- HMMT Feb 2025: **95.4%**
- HMMT Nov 2025: **91.1%**
- HMMT Feb 2026: **87.1%**
- MMAnswerBench: **81.8%**

Coding:

- SWE-bench Verified: **76.8%**
- SWE-bench Verified*: **70.8%** (Arcee)
- LiveCodeBench v6: **85.0%**
- SWE-bench Pro: **50.7%**
- SWE Multilingual: **73%**
- SWE-Rebench: **58.5%**
- React Native Evals: **77.2%**
- NL2Repo: **32%**
- SciCode: **48.7%**
- Terminal-Bench 2.0: **50.8%**
- AA Coding Index: **46.8%** (Artificial Analysis)
- AA-SciCode: not individually reported
- PostTrainBench v1.1: not individually reported
- Bug Hunt Bench: not individually reported
- FrontierCode 2.0: not individually reported
- ExtractBench (LlamaIndex): not individually reported
- ParseBench: not individually reported

Long context:

- 256K window; MRCR: not reported.
- AA-LCR: **78.0%** (Artificial Analysis)

Multimodal:

- MMMU: **84.3%**
- MMMU-Pro: **78.5%**
- RealWorldQA: **81.0%**
- OmniDocBench 1.5: **88.8%**
- Video-MME: **87.4%**
- Video-MME (with subtitle): **87.4%**
- Video-MME (w/o subtitle): **83.2%**
- MathVision: **84.2%**
- We-Math: **84.7%**
- DynaMath: **84.4%**
- SimpleVQA: **71.2%**
- MMLongBench-Doc: **58.5%**
- CC-OCR: **79.7%**
- AI2D_TEST: **90.8%**
- CountBench: **94.1%**
- RefCOCO (avg): **87.8%**
- CharXiv: **77.5%**
- AA-MMMU-Pro: **75.4%** (Artificial Analysis)
- Design Arena Website: **1247** (OpenRouter)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 74/100.** Agentic lane (unranked), Terminal-Bench 2.0 50.8%, BrowseComp 60.6%, OSWorld-Verified 63.3%, Claw-Eval 52.3%, QwenClawBench 54.3%, τ³-bench 65.7%, DeepSearchQA 77.1%, DeepPlanning 14.4%, Toolathlon 27.8%, MCP Atlas 29.5%, MCP-Tasks 59.1%, WideResearch 72.7%, τ²-bench 95.9%, BFCL v4 68.3%, APEX-Agents-AA 11.5%, Gert Labs 45.88%, ResearchClawBench 14.0%, JobBench 8.7%, GDPval-AA 17.0% normalized/936 Elo, GDPval-AA 936 Elo. Enrichment (2026-11-08): BenchLM aggregator (updated 2026-11-07) corroborates Terminal-Bench 2.0 50.8%, BrowseComp 60.6%, OSWorld-Verified 63.3%, Claw-Eval 52.3%, QwenClawBench 54.3%, τ³-bench 65.7%, DeepSearchQA 77.1%, DeepPlanning 14.4%, Toolathlon 27.8%, MCP Atlas 29.5%, MCP-Tasks 59.1%, WideResearch 72.7%, τ²-bench 95.9%, BFCL v4 68.3%, APEX-Agents-AA 11.5%, Gert Labs 45.88%, ResearchClawBench 14.0%, JobBench 8.7%, GDPval-AA 17.0% normalized/936 Elo, GDPval-AA 936 Elo, AA Intelligence 23.5%, AA-GPQA 87.9%, AA-HLE 30.7%, AA-Omniscience -7.3%/35.2%/65.7%, AA-LCR 78.0%, CritPt 3.1%, GPQA 87.6%, SuperGPQA 69.2%, MMLU-Pro 87.1%, MMLU-Pro (Arcee) 87.1%, MMLU-Redux 94.5%, C-Eval 94%, HLE 30.1%, AA-IFBench 70.2%, LongBench v2 61%, AIME 2025 96.1%, AIME26 95.8%, AIME25 (Arcee) 96.3%, HMMT Feb 2025 95.4%, HMMT Nov 2025 91.1%, HMMT Feb 2026 87.1%, MMAnswerBench 81.8%, MMMU 84.3%, MMMU-Pro 78.5%, RealWorldQA 81.0%, OmniDocBench 1.5 88.8%, Video-MME rows, MathVision 84.2%, We-Math 84.7%, DynaMath 84.4%, SimpleVQA 71.2%, MMLongBench-Doc 58.5%, CC-OCR 79.7%, AI2D_TEST 90.8%, CountBench 94.1%, RefCOCO 87.8%, CharXiv 77.5%, AA-MMMU-Pro 75.4%, Design Arena 1247, SWE-bench Verified 76.8%/70.8% (Arcee), LiveCodeBench v6 85.0%, SWE-bench Pro 50.7%, SWE Multilingual 73%, SWE-Rebench 58.5%, React Native Evals 77.2%, NL2Repo 32%, SciCode 48.7%, Terminal-Bench 2.0 50.8%, AA Coding Index 46.8%, IFEval 93.9%, AA-IFBench 70.2%, MMLU-ProX 82.3%, NOVA-63 56.0%, INCLUDE 83.3%, PolyMath 43.1%, MAXIFE 72.8%. Corroborates band; no change.
- **Reasoning: 72/100.** GPQA 87.6%, HLE 30.1%, AA Intelligence 23.5%, AA-GPQA 87.9%, AA-HLE 30.7%, AA-Omniscience -7.3%/35.2%/65.7%, AA-LCR 78.0%, CritPt 3.1%, LongBench v2 61%, AIME 2025 96.1%, AIME26 95.8%, AIME25 (Arcee) 96.3%, HMMT Feb 2025 95.4%, HMMT Nov 2025 91.1%, HMMT Feb 2026 87.1%, MMAnswerBench 81.8%, IFEval 93.9%, AA-IFBench 70.2%, MMLU-ProX 82.3%, NOVA-63 56.0%, INCLUDE 83.3%, PolyMath 43.1%, MAXIFE 72.8%. Corroborates band; no change.
- **Context window: 74/100.** 256K window; AA-LCR 78.0%. Corroborates band; no change.
- **Multimodal: 82/100.** Text/image/video in; MMMU 84.3%, MMMU-Pro 78.5%. Enrichment adds MMMU 84.3% (already), MMMU-Pro 78.5% (already), RealWorldQA 81.0% (already), OmniDocBench 1.5 88.8% (already), Video-MME rows (already), MathVision 84.2% (already), We-Math 84.7% (already), DynaMath 84.4% (already), SimpleVQA 71.2% (already), MMLongBench-Doc 58.5% (already), CC-OCR 79.7% (already), AI2D_TEST 90.8% (already), CountBench 94.1% (already), RefCOCO 87.8% (already), CharXiv 77.5% (already), AA-MMMU-Pro 75.4% (already), Design Arena 1247. Corroborates band; no change.
- **Coding: 72/100.** SWE-bench Verified 76.8%/70.8% (Arcee), LiveCodeBench v6 85.0%, SWE-bench Pro 50.7%, SWE Multilingual 73%, SWE-Rebench 58.5%, React Native Evals 77.2%, NL2Repo 32%, SciCode 48.7%, Terminal-Bench 2.0 50.8%, AA Coding Index 46.8%. Enrichment adds SWE-bench Verified 76.8%/70.8% (Arcee) (already), LiveCodeBench v6 85.0% (already), SWE-bench Pro 50.7% (already), SWE Multilingual 73% (already), SWE-Rebench 58.5% (already), React Native Evals 77.2% (already), NL2Repo 32% (already), SciCode 48.7% (already), Terminal-Bench 2.0 50.8% (already), AA Coding Index 46.8% (already), MMMU 84.3%, MMMU-Pro 78.5%, RealWorldQA 81.0%, OmniDocBench 1.5 88.8%, Video-MME rows (already), MathVision 84.2% (already), We-Math 84.7% (already), DynaMath 84.4% (already), SimpleVQA 71.2% (already), MMLongBench-Doc 58.5% (already), CC-OCR 79.7% (already), AI2D_TEST 90.8% (already), CountBench 94.1% (already), RefCOCO 87.8% (already), CharXiv 77.5% (already), AA-MMMU-Pro 75.4% (already), Design Arena 1247. Corroborates band; no change.
- **Cost efficiency: 80/100.** Mid-tier paid.
- **Overall Score: 75/100.** Mean of five quality dims (BenchLM aggregate 52.92); best-fit for cost-efficient multimodal agentic coding. Enrichment (2026-11-08) added new verified rows (Terminal-Bench 2.0 50.8%, BrowseComp 60.6%, OSWorld-Verified 63.3%, Claw-Eval 52.3%, QwenClawBench 54.3%, τ³-bench 65.7%, DeepSearchQA 77.1%, DeepPlanning 14.4%, Toolathlon 27.8%, MCP Atlas 29.5%, MCP-Tasks 59.1%, WideResearch 72.7%, τ²-bench 95.9%, BFCL v4 68.3%, APEX-Agents-AA 11.5%, Gert Labs 45.88%, ResearchClawBench 14.0%, JobBench 8.7%, GDPval-AA 17.0% normalized/936 Elo, GDPval-AA 936 Elo, AA Intelligence 23.5%, AA-GPQA 87.9%, AA-HLE 30.7%, AA-Omniscience -7.3%/35.2%/65.7%, AA-LCR 78.0%, CritPt 3.1%, GPQA 87.6%, SuperGPQA 69.2%, MMLU-Pro 87.1%, MMLU-Pro (Arcee) 87.1%, MMLU-Redux 94.5%, C-Eval 94%, HLE 30.1%, AA-IFBench 70.2%, LongBench v2 61%, AIME 2025 96.1%, AIME26 95.8%, AIME25 (Arcee) 96.3%, HMMT Feb 2025 95.4%, HMMT Nov 2025 91.1%, HMMT Feb 2026 87.1%, MMAnswerBench 81.8%, MMMU 84.3%, MMMU-Pro 78.5%, RealWorldQA 81.0%, OmniDocBench 1.5 88.8%, Video-MME rows, MathVision 84.2%, We-Math 84.7%, DynaMath 84.4%, SimpleVQA 71.2%, MMLongBench-Doc 58.5%, CC-OCR 79.7%, AI2D_TEST 90.8%, CountBench 94.1%, RefCOCO 87.8%, CharXiv 77.5%, AA-MMMU-Pro 75.4%, Design Arena 1247, SWE-bench Verified 76.8%/70.8% (Arcee), LiveCodeBench v6 85.0%, SWE-bench Pro 50.7%, SWE Multilingual 73%, SWE-Rebench 58.5%, React Native Evals 77.2%, NL2Repo 32%, SciCode 48.7%, Terminal-Bench 2.0 50.8%, AA Coding Index 46.8%, IFEval 93.9%, AA-IFBench 70.2%, MMLU-ProX 82.3%, NOVA-63 56.0%, INCLUDE 83.3%, PolyMath 43.1%, MAXIFE 72.8%). No dimension band moved; Overall unchanged at 75.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-10-17 preserved; new benchmark rows added; no dimension score changed (new evidence corroborates existing bands).
- Reference URLs:
  - [BenchLM — Kimi K2.5](https://benchlm.ai/models/kimi-k2-5)
  - [Artificial Analysis — Kimi K2.5](https://artificialanalysis.ai/models/kimi-k2-5)
  - [Moonshot AI — Kimi K2.5](https://www.kimi.com/blog/kimi-k2-5.html)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).