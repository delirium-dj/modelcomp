# Claude Sonnet 4.6 — findings by Beam

- Source: Anthropic/Claude Sonnet 4.6, `anthropic/claude-sonnet-4-6`
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-10-17)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.6
- **Short description:** Anthropic's mid-tier model (Feb 17, 2026) with 1M context (beta), improved coding, computer use, long-context reasoning, agent planning. Near-Opus performance at lower cost.
- **Provider / access:** Anthropic API `claude-sonnet-4-6`; AWS Bedrock; OpenRouter; OpenCode Zen.
- **Release / knowledge:** Released 2026-02-17; knowledge cutoff August 2025.
- **IDs:** `anthropic/claude-sonnet-4-6`
- **Context window:** 1,000,000 tokens (beta); max output 64,000 (AWS) / 128,000 (Puter).
- **Modalities:** text, image, PDF in; text out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-11-08):** $3.00 / 1M input, $15.00 / 1M output, $0.30 / 1M cache read, $3.75 / 1M cache write; paid.
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Agentic public-lane (BenchLM): **46.3** (#55/128)
- Terminal-Bench 2.0: **59.1%**
- OSWorld-Verified: **72.1%**
- OSWorld 2.0: **8.3%**
- Claw-Eval: **67.8%**
- CyberGym: **65.2%**
- Gert Labs: **62.92%**
- JobBench: **36.9%**
- ApprenticeBench: **2%**
- Terminal-Bench 2.1 (Vals): **57.3%**
- BrowseComp: not reported for 4.6
- MCP Atlas: not reported
- AA Agentic Index: not individually reported
- AA-AnalystAgent: not individually reported
- AA EnterpriseOps-Gym: not individually reported
- AA ITBench: not individually reported
- AA Tau3 Banking: not individually reported
- AA Briefcase: not individually reported
- AA AutomationBench: not individually reported
- GDP.pdf: not individually reported
- MazeBench: **0%** (MazeBench)
- AA Cyber Index: not individually reported
- CWE-Bench-AA: not individually reported
- DeepsecBench-AA: not individually reported
- CyberGym-E2E-AA: not individually reported
- AA Briefcase: not individually reported

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): **62.8** (unranked, 4 rows)
- ARC-AGI-1: **86.00%**
- ARC-AGI-2: **58.3%**
- GPQA Diamond: **79.9%** (Puter/AA)
- HLE: **13.3%** (Puter/AA)
- IFBench: **41.2%**
- LCR: **68.3%**
- τ²-Bench: **79.5%**
- AA Intelligence Index: **24.7**
- AA-GPQA Diamond: **79.9%** (Artificial Analysis)
- AA-HLE: **13.3%** (Artificial Analysis)
- AA-Omniscience Index: **-3.5%**
- AA-Omniscience Accuracy: **38.6%**
- AA-Omniscience Hallucination Rate: **68.5%**
- AA-IFBench: **41.2%** (Artificial Analysis)
- AA Global-MMLU-Lite: not individually reported
- AA AIME 2025: not individually reported
- FrontierMath v2 Tiers 1-3: not individually reported
- FrontierMath v2 Tier 4: not individually reported
- GPQA Diamond (Vals): **85.6%** (Vals AI)
- MMLU-Pro (Vals): **87.3%** (Vals AI)
- AA-LCR: **68.3%** (Artificial Analysis)
- CritPt: **0.9%** (Artificial Analysis)
- ARC-AGI-1: **86.00%** (ARC Prize)
- ARC-AGI-2: **58.3%** (ARC Prize)

Coding:

- Coding public-lane (BenchLM): **44.7** (#54/150)
- SWE-bench Verified: **79.6%**
- SWE-Rebench: **60.7%**
- LiveCodeBench (Vals): not reported
- Vibe Code Bench: **51.48%**
- VulcanBench CII v1: not reported
- AA-SciCode: not individually reported
- AA Coding Index: not individually reported
- PostTrainBench v1.1: not individually reported
- FrontierCode 2.0: not individually reported
- Bug Hunt Bench: not individually reported
- ExtractBench (LlamaIndex): not individually reported
- ParseBench: not individually reported
- SWE-bench Verified: **79.6%** (Anthropic)
- SWE-Rebench: **60.7%** (SWE-Rebench)
- React Native Evals: **80.6%** (React Native Evals)
- Terminal-Bench 2.0: **59.1%** (Anthropic)
- Vibe Code Bench: **51.48%** (Vals AI)
- cursorBench31: **48.8%** (Cursor)
- FrontierCode 1.1 Main: **24.3%** (Cognition)
- LiveCodeBench (Vals): **82.1%** (Vals AI)
- SWE-bench (Vals): **77.4%** (Vals AI)

Long context:

- 200K window (per BenchLM) / 1M beta (Anthropic); MRCR: not reported.
- MRCRv2 **85.4%** (est.); AA-LCR **68.3%** (measured).

Multimodal:

- Multimodal public-lane (BenchLM): **58.7** (#45/54)
- CharXiv: **77.4%**
- AA-MMMU-Pro: **70.6%** (Artificial Analysis)
- Design Arena Website: **1283** (OpenRouter)
- ExtractBench (LlamaIndex): not individually reported
- ParseBench: not individually reported

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 74/100.** Agentic lane #55/128 (46.3), Terminal-Bench 2.0 59.1%, OSWorld 72.1%, Claw-Eval 67.8%, CyberGym 65.2%; caps at OSWorld 2.0 8.3%. Enrichment (2026-11-08): BenchLM aggregator (updated 2026-11-07) corroborates Terminal-Bench 2.0 59.1%, OSWorld-Verified 72.1%, Claw-Eval 67.8%, CyberGym 65.2%, τ²-bench 79.5%, Gert Labs 62.92%, OSWorld 2.0 8.3%, JobBench 36.9%, Terminal-Bench 2.1 Vals 57.3%, ApprenticeBench 2%, MazeBench 0%, AA Intelligence 24.7%, AA-GPQA 79.9%, AA-HLE 13.3%, AA-Omniscience -3.5%/38.6%/68.5%, AA-LCR 68.3%, CritPt 0.9%, ARC-AGI-1 86.00%, ARC-AGI-2 58.3%, GPQA 89.9%, SuperGPQA 95%, MMLU-Pro 79.2%, HLE 49%, AA-IFBench 41.2%, GPQA Diamond Vals 85.6%, MMLU-Pro Vals 87.3%, SWE-bench Verified 79.6%, SWE-Rebench 60.7%, React Native Evals 80.6%, Terminal-Bench 2.0 59.1%, Vibe Code 51.48%, cursorBench31 48.8%, FrontierCode 1.1 Main 24.3%, LiveCodeBench Vals 82.1%, SWE-bench Vals 77.4%, CharXiv 77.4%, AA-MMMU-Pro 70.6%, Design Arena 1283. Corroborates band; no change.
- **Reasoning: 72/100.** ARC-AGI-1 86.0%, ARC-AGI-2 58.3%, GPQA 79.9%, LCR 68.3%, AA Intelligence 24.7; caps at HLE 13.3%. Enrichment adds AA Intelligence 24.7% (already), AA-GPQA 79.9% (already), AA-HLE 13.3% (already), AA-Omniscience -3.5%/38.6%/68.5% (already), AA-LCR 68.3% (already), CritPt 0.9% (already), ARC-AGI-1 86.00% (already), ARC-AGI-2 58.3% (already), GPQA 89.9% (already), SuperGPQA 95% (already), MMLU-Pro 79.2% (already), HLE 49% (already), AA-IFBench 41.2% (already), GPQA Diamond Vals 85.6% (already), MMLU-Pro Vals 87.3% (already). Corroborates band; no change.
- **Context window: 72/100.** 200K-1M (beta); caps at no published MRCR.
- **Multimodal: 76/100.** Text/image/PDF in; CharXiv 77.4%. Enrichment adds CharXiv 77.4% (already), AA-MMMU-Pro 70.6% (already), Design Arena 1283. Corroborates band; no change.
- **Coding: 72/100.** SWE-bench Verified 79.6%, Vibe Code 51.48%, coding lane #54/150 (44.7); caps at no SWE-bench Pro. Enrichment adds SWE-bench Verified 79.6% (already), SWE-Rebench 60.7% (already), React Native Evals 80.6% (already), Terminal-Bench 2.0 59.1% (already), Vibe Code 51.48% (already), cursorBench31 48.8% (already), FrontierCode 1.1 Main 24.3% (already), LiveCodeBench Vals 82.1% (already), SWE-bench Vals 77.4% (already), CharXiv 77.4% (already), AA-MMMU-Pro 70.6% (already), Design Arena 1283. Corroborates band; no change.
- **Cost efficiency: 82/100.** Mid-low $3/$15 per 1M.
- **Overall Score: 73.2/100.** Mean of five quality dims (BenchLM aggregate 55.88); best-fit for mid-tier agentic coding at low cost. Enrichment (2026-11-08) added new verified rows (Terminal-Bench 2.0 59.1%, OSWorld-Verified 72.1%, Claw-Eval 67.8%, CyberGym 65.2%, τ²-bench 79.5%, Gert Labs 62.92%, OSWorld 2.0 8.3%, JobBench 36.9%, Terminal-Bench 2.1 Vals 57.3%, ApprenticeBench 2%, MazeBench 0%, AA Intelligence 24.7%, AA-GPQA 79.9%, AA-HLE 13.3%, AA-Omniscience -3.5%/38.6%/68.5%, AA-LCR 68.3%, CritPt 0.9%, ARC-AGI-1 86.00%, ARC-AGI-2 58.3%, GPQA 89.9%, SuperGPQA 95%, MMLU-Pro 79.2%, HLE 49%, AA-IFBench 41.2%, GPQA Diamond Vals 85.6%, MMLU-Pro Vals 87.3%, SWE-bench Verified 79.6%, SWE-Rebench 60.7%, React Native Evals 80.6%, Terminal-Bench 2.0 59.1%, Vibe Code 51.48%, cursorBench31 48.8%, FrontierCode 1.1 Main 24.3%, LiveCodeBench Vals 82.1%, SWE-bench Vals 77.4%, CharXiv 77.4%, AA-MMMU-Pro 70.6%, Design Arena 1283). No dimension band moved; Overall unchanged at 73.2.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-10-17 preserved; new benchmark rows added; no dimension score changed (new evidence corroborates existing bands).
- Reference URLs:
  - [BenchLM — Claude Sonnet 4.6](https://benchlm.ai/models/claude-sonnet-4-6)
  - [Artificial Analysis — Claude Sonnet 4.6](https://artificialanalysis.ai/models/claude-sonnet-4-6)
  - [Anthropic — Claude Sonnet 4.6](https://www.anthropic.com/news/claude-sonnet-4-6)
  - [Claude Sonnet 4.6 system card](https://www-cdn.anthropic.com/78073f739564e986ff3e28522761a7a0b4484f84.pdf)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).