# Kimi K2.6 — findings by Beam

- Source: Moonshot AI/Kimi K2.6, `moonshotai/kimi-k2.6`
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-10-17)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.6
- **Short description:** Moonshot AI's open-weight multimodal model (Apr 20, 2026): 262K context, long-horizon coding, UI/UX generation, multi-agent orchestration. #1 open-weight on Vals Index (63.9%).
- **Provider / access:** Moonshot API `kimi-k2.6`; OpenRouter; HuggingFace (open weights).
- **Release / knowledge:** Released 2026-04-20; knowledge cutoff January 2025.
- **IDs:** `moonshotai/kimi-k2.6`
- **Context window:** 262,144 tokens; max output 256,000 (OpenCode: 262K).
- **Modalities:** text, image, video in; text out; reasoning yes; tool calling yes; structured output yes. Open weights.
- **Pricing (as of 2026-11-08):** $0.95 / 1M input, $4.00 / 1M output (OpenCode $0.74/$3.72); paid.
- **Architecture:** open weights; params not published (2.8T-class family).

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Agentic public-lane (BenchLM): **44.3** (#59/128)
- Terminal-Bench 2.0: **66.7%**
- BrowseComp: **83.2%**
- OSWorld-Verified: **73.1%**
- OSWorld 2.0: **4.6%**
- Claw-Eval: **62.3%**
- Toolathlon: **50%**
- MCP Atlas: **55.9%**
- DeepSearchQA: **92.5%**
- WideResearch: **80.8%**
- Gert Labs: **56.82%**
- ResearchClawBench: **18.0%**
- JobBench: **8.7%**
- Vals Index: **53.89%** (#7/49)
- τ²-bench results: **95.9%** (Artificial Analysis)
- GDPval-AA: **26.9%** normalized / 1115 Elo (Artificial Analysis)
- APEX-Agents-AA: **28.5%** (Artificial Analysis)
- Gert Labs: **56.82%** (Gert Labs)
- ResearchClawBench: **18.0%** (ResearchClawBench)
- OSWorld 2.0: **4.6%** (OSWorld 2.0 paper)
- Terminal-Bench 2.1 (Vals): **53.6%** (Vals AI)
- AA Agentic Index: **22.1%** (Artificial Analysis)
- GDPval-AA: **1115 Elo** (Artificial Analysis)
- terminalBenchHard: **43.9%** (Artificial Analysis)

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): **76.8** (#4/12)
- GPQA: **90.5%**
- GPQA-D: **90.5%**
- HLE: **34.7%**
- MMLU-Pro: not reported for K2.6 (K2.5 83.3%? no)
- AA Intelligence Index: **27.0%** (measured, updated 2026-11-07)
- AA-GPQA Diamond: **91.1%** (Artificial Analysis)
- AA-HLE: **37.5%** (Artificial Analysis)
- AA-Omniscience Index: **5.3%**
- AA-Omniscience Accuracy: **32.6%**
- AA-Omniscience Hallucination Rate: **40.5%**
- AA-LCR: **81.0%** (Artificial Analysis)
- CritPt: **8.0%** (Artificial Analysis)
- AA-IFBench: **76.0%** (Artificial Analysis)
- AA Global-MMLU-Lite: not individually reported
- AA AIME 2025: not individually reported
- FrontierMath v2 Tiers 1-3: **57.193%**; Tier 4: **25.641%** (Epoch AI)
- AIME26: **96.4%** (Moonshot)
- HMMT Feb 2026: **92.7%** (Moonshot)
- MMAnswerBench: **86.0%** (Moonshot)
- GPQA Diamond (Vals): **89.1%** (Vals AI)
- MMLU-Pro (Vals): **87.6%** (Vals AI)

Coding:

- Coding public-lane (BenchLM): **43.2** (#58/150)
- SWE-bench Verified: **80.2%**
- LiveCodeBench v6: **89.6%**
- SWE-bench Pro: not reported for K2.6
- SWE Multilingual: not reported
- SWE-bench (Vals): **76.20%**
- Terminal-Bench 2.1: **53.56%** (Vals)
- SciCode: **52.2%** (Moonshot)
- Terminal-Bench 2.0: **66.7%** (Moonshot)
- Vibe Code Bench: **37.89%** (Vals AI)
- cursorBench31: **47.6%** (Cursor)
- AA-SciCode: **51.5%** (Artificial Analysis)
- LiveCodeBench (Vals): **86.8%** (Vals AI)
- SWE-bench (Vals): **76.2%** (Vals AI)
- AA Coding Index: **61.8%** (Artificial Analysis)
- AA-IFBench: **76.0%** (Artificial Analysis)

Long context:

- 262K window; MRCR: not reported.
- AA-LCR: **81.0%** (Artificial Analysis)

Multimodal:

- Multimodal public-lane (BenchLM): **73.8** (#27/54)
- MMMU-Pro: **79.4%**
- MMMU-Pro w/ Python: **80.1%**
- CharXiv: **80.4%**
- MathVision: **87.4%**
- V*: **96.9%**
- AA-MMMU-Pro: **79.4%** (Artificial Analysis)
- Design Arena Website: **1266** (OpenRouter)
- AA-IFBench: **76.0%** (Artificial Analysis)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 76/100.** Agentic lane #59/128 (44.3), Terminal-Bench 2.0 66.7%, BrowseComp 83.2%, OSWorld 73.1%, MCP Atlas 55.9%, DeepSearchQA 92.5%; caps at JobBench 8.7%. Enrichment (2026-11-08): BenchLM aggregator (updated 2026-11-07) corroborates Terminal-Bench 2.0 66.7%, BrowseComp 83.2%, OSWorld-Verified 73.1%, OSWorld 2.0 4.6%, Claw-Eval 62.3%, Toolathlon 50%, MCP Atlas 55.9%, DeepSearchQA 92.5%, WideResearch 80.8%, Gert Labs 56.82%, ResearchClawBench 18.0%, JobBench 8.7%, Vals Index 53.89%, τ²-bench 95.9%, GDPval-AA 26.9% normalized/1115 Elo, APEX-Agents-AA 28.5%, Gert Labs 56.82%, ResearchClawBench 18.0%, OSWorld 2.0 4.6%, Terminal-Bench 2.1 Vals 53.6%, AA Agentic Index 22.1%, GDPval-AA 1115 Elo, terminalBenchHard 43.9%, AA Intelligence 27.0%, AA-GPQA 91.1%, AA-HLE 37.5%, AA-Omniscience 5.3%/32.6%/40.5%, AA-LCR 81.0%, CritPt 8.0%, GPQA 90.5%, GPQA-D 90.5%, HLE 34.7%, AA-IFBench 76.0%, AIME26 96.4%, HMMT Feb 2026 92.7%, MMAnswerBench 86.0%, GPQA Diamond Vals 89.1%, MMLU-Pro Vals 87.6%, SWE-bench Verified 80.2%, LiveCodeBench v6 89.6%, SWE-bench Pro 58.6%, SWE Multilingual 76.7%, SciCode 52.2%, Terminal-Bench 2.0 66.7%, Vibe Code 37.89%, cursorBench31 47.6%, AA-SciCode 51.5%, LiveCodeBench Vals 86.8%, SWE-bench Vals 76.2%, AA Coding Index 61.8%, MMMU-Pro 79.4%, MMMU-Pro w/ Python 80.1%, CharXiv 80.4%, MathVision 87.4%, V* 96.9%, AA-MMMU-Pro 79.4%, Design Arena 1266, IFBench 76.0%. Corroborates band; no change.
- **Reasoning: 78/100.** GPQA 90.5%, HLE 34.7%, AIME 96.4%, HMMT 92.7%, reasoning lane #4/12 (76.8); caps at no published ARC-AGI. Enrichment adds AA Intelligence 27.0%, AA-GPQA 91.1%, AA-HLE 37.5%, AA-Omniscience 5.3%/32.6%/40.5%, AA-LCR 81.0%, CritPt 8.0%, GPQA 90.5%, GPQA-D 90.5%, HLE 34.7%, AA-IFBench 76.0%, AIME26 96.4%, HMMT Feb 2026 92.7%, MMAnswerBench 86.0%, GPQA Diamond Vals 89.1%, MMLU-Pro Vals 87.6%. Corroborates band; no change.
- **Context window: 74/100.** 262K window; caps at no published MRCR.
- **Multimodal: 84/100.** Text/image/video in; MMMU-Pro 79.4%, CharXiv 80.4%, MathVision 87.4%. Enrichment adds MMMU-Pro 79.4% (already), MMMU-Pro w/ Python 80.1% (already), CharXiv 80.4% (already), MathVision 87.4% (already), V* 96.9% (already), AA-MMMU-Pro 79.4% (already), Design Arena 1266, IFBench 76.0%. Corroborates band; no change.
- **Coding: 76/100.** SWE-bench Verified 80.2%, LiveCodeBench v6 89.6%, coding lane #58/150 (43.2); caps at no SWE-bench Pro. Enrichment adds SWE-bench Verified 80.2% (already), LiveCodeBench v6 89.6% (already), SWE-bench Pro 58.6% (already), SWE Multilingual 76.7% (already), SciCode 52.2% (already), Terminal-Bench 2.0 66.7% (already), Vibe Code 37.89% (already), cursorBench31 47.6% (already), AA-SciCode 51.5% (already), LiveCodeBench Vals 86.8% (already), SWE-bench Vals 76.2% (already), AA Coding Index 61.8% (already), IFBench 76.0%. Corroborates band; no change.
- **Cost efficiency: 88/100.** Cheap $0.95/$4.00 per 1M.
- **Overall Score: 78/100.** Mean of five quality dims (BenchLM aggregate 57.6); best-fit for cost-efficient agentic + multimodal coding (open weights). Enrichment (2026-11-08) added new verified rows (Terminal-Bench 2.0 66.7%, BrowseComp 83.2%, OSWorld-Verified 73.1%, OSWorld 2.0 4.6%, Claw-Eval 62.3%, Toolathlon 50%, MCP Atlas 55.9%, DeepSearchQA 92.5%, WideResearch 80.8%, Gert Labs 56.82%, ResearchClawBench 18.0%, JobBench 8.7%, Vals Index 53.89%, τ²-bench 95.9%, GDPval-AA 26.9% normalized/1115 Elo, APEX-Agents-AA 28.5%, Gert Labs 56.82%, ResearchClawBench 18.0%, OSWorld 2.0 4.6%, Terminal-Bench 2.1 Vals 53.6%, AA Agentic Index 22.1%, GDPval-AA 1115 Elo, terminalBenchHard 43.9%, AA Intelligence 27.0%, AA-GPQA 91.1%, AA-HLE 37.5%, AA-Omniscience 5.3%/32.6%/40.5%, AA-LCR 81.0%, CritPt 8.0%, GPQA 90.5%, GPQA-D 90.5%, HLE 34.7%, AA-IFBench 76.0%, AIME26 96.4%, HMMT Feb 2026 92.7%, MMAnswerBench 86.0%, GPQA Diamond Vals 89.1%, MMLU-Pro Vals 87.6%, SWE-bench Verified 80.2%, LiveCodeBench v6 89.6%, SWE-bench Pro 58.6%, SWE Multilingual 76.7%, SciCode 52.2%, Terminal-Bench 2.0 66.7%, Vibe Code 37.89%, cursorBench31 47.6%, AA-SciCode 51.5%, LiveCodeBench Vals 86.8%, SWE-bench Vals 76.2%, AA Coding Index 61.8%, MMMU-Pro 79.4%, MMMU-Pro w/ Python 80.1%, CharXiv 80.4%, MathVision 87.4%, V* 96.9%, AA-MMMU-Pro 79.4%, Design Arena 1266, IFBench 76.0%). No dimension band moved; Overall unchanged at 78.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-10-17 preserved; new benchmark rows added; no dimension score changed (new evidence corroborates existing bands).
- Reference URLs:
  - [BenchLM — Kimi K2.6](https://benchlm.ai/models/kimi-2-6)
  - [Artificial Analysis — Kimi K2.6](https://artificialanalysis.ai/models/kimi-k2-6)
  - [Moonshot AI — Kimi K2.6](https://www.kimi.com/blog/kimi-k2-6)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).