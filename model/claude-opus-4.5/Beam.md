# Claude Opus 4.5 — findings by Beam

- Source: Anthropic/Claude Opus 4.5, `anthropic/claude-opus-4-5`
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-10-22)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.5
- **Short description:** Anthropic's Opus (Nov 24, 2025) with 200K context, strong coding and agentic; superseded by Opus 4.6/4.7/4.8/5/5.5.
- **Provider / access:** Anthropic API `claude-opus-4-5`; AWS Bedrock; OpenRouter.
- **Release / knowledge:** Released 2025-11-24; knowledge cutoff not stated.
- **IDs:** `anthropic/claude-opus-4-5`
- **Context window:** 200,000 tokens; max output 64,000.
- **Modalities:** text, image, PDF in; text out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-11-08):** $5.00 / 1M input, $25.00 / 1M output; paid.
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.0: **59.3%**
- OSWorld-Verified: **66.3%**
- OSWorld: **66.3%**
- Claw-Eval: **59.6%**
- QwenClawBench: **52.3%**
- τ³-bench results: **70.2%**
- VITA-Bench: **23.3%**
- DeepPlanning: **26.4%**
- Toolathlon: **43.5%**
- MCP Atlas: **42.3%**
- MCP-Tasks: **71.8%**
- WideResearch: **76.4%**
- CyberGym: **50.6%**
- τ²-bench results: **86.3%** (Artificial Analysis)
- Gert Labs: **64.23%** (Gert Labs)
- JobBench: **32.3%** (JobBench paper)
- AA Agentic Index: not individually reported
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

- GPQA: **87%** (Anthropic)
- SuperGPQA: **70.6%** (Qwen)
- MMLU-Pro: **89.5%** (Qwen)
- MMLU-Redux: **96.6%** (Qwen)
- C-Eval: **92.2%** (Qwen)
- HLE: **30.8%** (Qwen)
- Artificial Analysis Intelligence Index: **23.7%** (measured, updated 2026-11-07)
- AA-GPQA Diamond: **81.0%** (Artificial Analysis)
- AA-HLE: **13.2%** (Artificial Analysis)
- AA-Omniscience Index: **-4.1%**
- AA-Omniscience Accuracy: **40.9%**
- AA-Omniscience Hallucination Rate: **76.2%**
- AA-LCR: **70.7%** (Artificial Analysis)
- CritPt: **0.3%** (Artificial Analysis)
- LongBench v2: **64.4%** (Qwen)
- AI-Needle: **74%** (Qwen)
- AA-IFBench: **43.0%** (Artificial Analysis)
- AA Global-MMLU-Lite: not individually reported
- AA AIME 2025: not individually reported
- FrontierMath v2 Tiers 1-3: **34.386%**; Tier 4: **4.878%** (Epoch AI)
- AA MMLU-Pro: not individually reported
- AA MATH-500: not individually reported

Coding:

- SWE-bench Verified: **80.9%**
- LiveCodeBench v6: **84.8%**
- SWE-bench Pro: **57.1%**
- SWE Multilingual: **77.5%**
- NL2Repo: **43.2%**
- Terminal-Bench 2.0: **59.3%**
- AA-SciCode: not individually reported
- AA Coding Index: not individually reported
- PostTrainBench v1.1: not individually reported
- Bug Hunt Bench: not individually reported
- FrontierCode 2.0: not individually reported
- ExtractBench (LlamaIndex): not individually reported
- ParseBench: not individually reported

Long context:

- 200K window; MRCR: not reported.
- AA-LCR: **70.7%** (Artificial Analysis)

Multimodal:

- MMMU: **80.7%**
- MMMU-Pro: **70.6%**
- RealWorldQA: **77.0%**
- OmniDocBench 1.5: **87.7%**
- Video-MME (with subtitle): **77.6%**
- Video-MME (w/o subtitle): **81.4%**
- MathVision: **74.3%**
- We-Math: **70.0%**
- DynaMath: **79.7%**
- SimpleVQA: **65.7%**
- CharXiv: **68.5%**
- CountBench: **90.6%**
- AI2D_TEST: **87.7%**
- ERQA: **46.8%**
- VideoMMMU: **84.4%**
- MLVU (M-Avg): **81.7%**
- ScreenSpot Pro: **45.7%**
- V*: **67.0%**
- AA-MMMU-Pro: **71.2%** (Artificial Analysis)
- Design Arena Website: **1245** (OpenRouter)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 78/100.** Agentic lane (unranked), Terminal-Bench 2.0 59.3%, OSWorld-Verified 66.3%, OSWorld 66.3%, Claw-Eval 59.6%, QwenClawBench 52.3%, τ³-bench 70.2%, VITA-Bench 23.3%, DeepPlanning 26.4%, Toolathlon 43.5%, MCP Atlas 42.3%, MCP-Tasks 71.8%, WideResearch 76.4%, CyberGym 50.6%, τ²-bench 86.3%, Gert Labs 64.23%, JobBench 32.3%. Enrichment (2026-11-08): BenchLM aggregator (updated 2026-11-07) corroborates Terminal-Bench 2.0 59.3%, OSWorld-Verified 66.3%, OSWorld 66.3%, Claw-Eval 59.6%, QwenClawBench 52.3%, τ³-bench 70.2%, VITA-Bench 23.3%, DeepPlanning 26.4%, Toolathlon 43.5%, MCP Atlas 42.3%, MCP-Tasks 71.8%, WideResearch 76.4%, CyberGym 50.6%, τ²-bench 86.3%, Gert Labs 64.23%, JobBench 32.3%, AA Intelligence 23.7%, AA-GPQA 81.0%, AA-HLE 13.2%, AA-Omniscience -4.1%/40.9%/76.2%, AA-LCR 70.7%, CritPt 0.3%, AA-IFBench 43.0%, LongBench v2 64.4%, AI-Needle 74%, GPQA 87%, SuperGPQA 70.6%, MMLU-Pro 89.5%, MMLU-Redux 96.6%, C-Eval 92.2%, HLE 30.8%, IFEval 90.9%, IFBench 58%, AA-IFBench 43.0%, MMLU-ProX 85.7%, NOVA-63 56.7%, INCLUDE 86.2%, PolyMath 79.0%, MAXIFE 79.2%, AIME26 95.1%, HMMT Feb 2025 92.9%, HMMT Nov 2025 93.3%, HMMT Feb 2026 85.3%, MMAnswerBench 84.0%, FrontierMath v2 34.386%/4.878%, MMMU 80.7%, MMMU-Pro 70.6%, RealWorldQA 77.0%, OmniDocBench 1.5 87.7%, Video-MME rows, MathVision 74.3%, We-Math 70.0%, DynaMath 79.7%, SimpleVQA 65.7%, CharXiv 68.5%, CountBench 90.6%, AI2D_TEST 87.7%, ERQA 46.8%, VideoMMMU 84.4%, MLVU 81.7%, ScreenSpot Pro 45.7%, V* 67.0%, AA-MMMU-Pro 71.2%, Design Arena 1245. Corroborates band; no change.
- **Reasoning: 76/100.** GPQA 87%, SuperGPQA 70.6%, MMLU-Pro 89.5%, MMLU-Redux 96.6%, C-Eval 92.2%, HLE 30.8%, AA Intelligence 23.7%, AA-GPQA 81.0%, AA-HLE 13.2%, AA-Omniscience -4.1%/40.9%/76.2%, AA-LCR 70.7%, CritPt 0.3%, LongBench v2 64.4%, AI-Needle 74%, IFEval 90.9%, IFBench 58%, AA-IFBench 43.0%, MMLU-ProX 85.7%, NOVA-63 56.7%, INCLUDE 86.2%, PolyMath 79.0%, MAXIFE 79.2%, AIME26 95.1%, HMMT rows, MMAnswerBench 84.0%, FrontierMath v2 34.386%/4.878%. Corroborates band; no change.
- **Context window: 76/100.** 200K window; AA-LCR 70.7%. Corroborates band; no change.
- **Multimodal: 80/100.** Text/image/PDF in; MMMU 80.7%, MMMU-Pro 70.6%. Enrichment adds MMMU 80.7% (already), MMMU-Pro 70.6% (already), RealWorldQA 77.0% (already), OmniDocBench 1.5 87.7% (already), Video-MME rows (already), MathVision 74.3% (already), We-Math 70.0% (already), DynaMath 79.7% (already), SimpleVQA 65.7% (already), CharXiv 68.5% (already), CountBench 90.6% (already), AI2D_TEST 87.7% (already), ERQA 46.8% (already), VideoMMMU 84.4% (already), MLVU 81.7% (already), ScreenSpot Pro 45.7% (already), V* 67.0% (already), AA-MMMU-Pro 71.2% (already), Design Arena 1245. Corroborates band; no change.
- **Coding: 74/100.** SWE-bench Verified 80.9%, SWE-bench Pro 57.1%, SWE Multilingual 77.5%, NL2Repo 43.2%, Terminal-Bench 2.0 59.3%. Enrichment adds SWE-bench Verified 80.9% (already), LiveCodeBench v6 84.8% (already), SWE-bench Pro 57.1% (already), SWE Multilingual 77.5% (already), NL2Repo 43.2% (already), Terminal-Bench 2.0 59.3% (already), AA-MMMU-Pro 71.2%, Design Arena 1245. Corroborates band; no change.
- **Cost efficiency: 70/100.** Premium $5/$25 per 1M.
- **Overall Score: 76.8/100.** Mean of five quality dims (BenchLM aggregate 53.81); best-fit for agentic coding + reasoning at premium cost (superseded by Opus 4.6/4.7/4.8/5/5.5). Enrichment (2026-11-08) added new verified rows (Terminal-Bench 2.0 59.3%, OSWorld-Verified 66.3%, OSWorld 66.3%, Claw-Eval 59.6%, QwenClawBench 52.3%, τ³-bench 70.2%, VITA-Bench 23.3%, DeepPlanning 26.4%, Toolathlon 43.5%, MCP Atlas 42.3%, MCP-Tasks 71.8%, WideResearch 76.4%, CyberGym 50.6%, τ²-bench 86.3%, Gert Labs 64.23%, JobBench 32.3%, AA Intelligence 23.7%, AA-GPQA 81.0%, AA-HLE 13.2%, AA-Omniscience -4.1%/40.9%/76.2%, AA-LCR 70.7%, CritPt 0.3%, LongBench v2 64.4%, AI-Needle 74%, GPQA 87%, SuperGPQA 70.6%, MMLU-Pro 89.5%, MMLU-Redux 96.6%, C-Eval 92.2%, HLE 30.8%, IFEval 90.9%, IFBench 58%, AA-IFBench 43.0%, MMLU-ProX 85.7%, NOVA-63 56.7%, INCLUDE 86.2%, PolyMath 79.0%, MAXIFE 79.2%, AIME26 95.1%, HMMT Feb 2025 92.9%, HMMT Nov 2025 93.3%, HMMT Feb 2026 85.3%, MMAnswerBench 84.0%, FrontierMath v2 34.386%/4.878%, MMMU 80.7%, MMMU-Pro 70.6%, RealWorldQA 77.0%, OmniDocBench 1.5 87.7%, Video-MME rows, MathVision 74.3%, We-Math 70.0%, DynaMath 79.7%, SimpleVQA 65.7%, CharXiv 68.5%, CountBench 90.6%, AI2D_TEST 87.7%, ERQA 46.8%, VideoMMMU 84.4%, MLVU 81.7%, ScreenSpot Pro 45.7%, V* 67.0%, AA-MMMU-Pro 71.2%, Design Arena 1245, SWE-bench Verified 80.9%, LiveCodeBench v6 84.8%, SWE-bench Pro 57.1%, SWE Multilingual 77.5%, NL2Repo 43.2%, Terminal-Bench 2.0 59.3%). No dimension band moved; Overall unchanged at 53.8.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-10-22 preserved; new benchmark rows added; no dimension score changed (new evidence corroborates existing bands).
- Reference URLs:
  - [BenchLM — Claude Opus 4.5](https://benchlm.ai/models/claude-opus-4-5)
  - [Artificial Analysis — Claude Opus 4.5](https://artificialanalysis.ai/models/claude-opus-4-5)
  - [Anthropic — Claude Opus 4.5](https://www.anthropic.com/news/claude-opus-4-5)
  - [Claude Opus 4.5 system card](https://www-cdn.anthropic.com/bf10f64990cfda0ba858290be7b8cc6317685f47.pdf)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).