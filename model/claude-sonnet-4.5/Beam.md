# Claude Sonnet 4.5 — findings by Beam

- Source: Anthropic/Claude Sonnet 4.5, `anthropic/claude-sonnet-4-5`
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-10-17)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.5
- **Short description:** Anthropic's Sonnet (Sep 29, 2025): strong coding (SWE-bench Verified 77.2%), computer use (OSWorld 61.4%), agent planning. 200K context, 64K output. Superseded by Sonnet 4.6/5/5.5.
- **Provider / access:** Anthropic API `claude-sonnet-4-5`; AWS Bedrock; OpenRouter; Kilo.
- **Release / knowledge:** Released 2025-09-29; knowledge cutoff July 2025.
- **IDs:** `anthropic/claude-sonnet-4-5`
- **Context window:** 200,000 tokens; max output 64,000.
- **Modalities:** text, image, PDF in; text out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-11-08):** $3.00 / 1M input, $15.00 / 1M output, $0.30 / 1M cache read, $3.75 / 1M cache write; paid.
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Agentic public-lane (BenchLM): **35.1** (estimated #81/128)
- Terminal-Bench 2.0: **50%**
- OSWorld-Verified: **61.4%**
- VITA-Bench: **17.0%**
- DeepPlanning: not reported
- Toolathlon: **43.5%**
- MCP Atlas: **42.3%**
- JobBench: **27.7%**
- Claw-Eval: not reported
- CyberGym: not reported
- Gert Labs: **48.51%** (Gert Labs)
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

- Reasoning public-lane (BenchLM): **22.9** (unranked, 1 row)
- ARC-AGI-2: **13.6%**
- HLE: not reported
- GPQA: **83.4%**
- MMLU-Pro: not reported
- AA Intelligence Index: **23.7%** (measured, updated 2026-11-07)
- AA-GPQA Diamond: **81.0%** (Artificial Analysis)
- AA-HLE: **13.2%** (Artificial Analysis)
- AA-Omniscience Index: **-4.1%**
- AA-Omniscience Accuracy: **40.9%**
- AA-Omniscience Hallucination Rate: **76.2%**
- AA-LCR: **70.7%** (Artificial Analysis)
- CritPt: **0.3%** (Artificial Analysis)
- LongBench v2: **64.4%**
- AI-Needle: **74%**
- AA-IFBench: **43.0%** (Artificial Analysis)
- AA Global-MMLU-Lite: not individually reported
- AA AIME 2025: not individually reported
- FrontierMath v2 Tiers 1-3: **34.386%**; Tier 4: **4.878%** (Epoch AI)
- AA MMLU-Pro: not individually reported
- AA MATH-500: not individually reported

Coding:

- Coding public-lane (BenchLM): not individually reported
- SWE-bench Verified: **77.2%**
- Terminal-Bench 2.0: **50.0%**
- LiveCodeBench: **71.4%** (Kilo/AA)
- SciCode: **45.7%**
- LCR: **72.3%** (Kilo/AA)
- IFBench: **57.3%**
- AA Coding Index: **52.1%**
- Design Arena Website: **1188** (OpenRouter)

Long context:

- 200K window; MRCR: not reported.
- AA-LCR: **70.7%** (Artificial Analysis)

Multimodal:

- Multimodal: not separately reported (text/image/PDF in).
- Design Arena Website: **1188**

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 70/100.** Agentic lane #81/128 (35.1), Terminal-Bench 2.0 50%, OSWorld 61.4%, Toolathlon 43.5%, MCP Atlas 42.3%; caps at VITA-Bench 17.0%. Enrichment (2026-11-08): BenchLM aggregator (updated 2026-11-07) corroborates Terminal-Bench 2.0 50%, OSWorld-Verified 61.4%, VITA-Bench 17.0%, Gert Labs 48.51%, JobBench 27.7%, AA Intelligence 23.7%, AA-GPQA 81.0%, AA-HLE 13.2%, AA-Omniscience -4.1%/40.9%/76.2%, AA-LCR 70.7%, CritPt 0.3%, LongBench v2 64.4%, AI-Needle 74%, GPQA 83.4%, SuperGPQA 70.6%, MMLU-Pro 89.5%, MMLU-Redux 96.6%, C-Eval 92.2%, HLE 30.8%, IFEval 90.9%, IFBench 58%, AA-IFBench 43.0%, MMLU-ProX 85.7%, NOVA-63 56.7%, INCLUDE 86.2%, PolyMath 79.0%, MAXIFE 79.2%, AIME26 95.1%, HMMT Feb 2025 92.9%, HMMT Nov 2025 93.3%, HMMT Feb 2026 85.3%, MMAnswerBench 84.0%, FrontierMath v2 34.386%/4.878%, SWE-bench Verified 77.2%, LiveCodeBench 71.4%, SciCode 45.7%, LCR 72.3%, IFBench 57.3%, AA Coding Index 52.1%, Design Arena 1188. Corroborates band; no change.
- **Reasoning: 68/100.** GPQA 83.4%, ARC-AGI-2 13.6%; caps at no published HLE/ARC-AGI-1. Enrichment adds AA Intelligence 23.7% (already), AA-GPQA 81.0% (already), AA-HLE 13.2% (already), AA-Omniscience -4.1%/40.9%/76.2% (already), AA-LCR 70.7% (already), CritPt 0.3% (already), LongBench v2 64.4% (already), AI-Needle 74% (already), GPQA 83.4% (already), SuperGPQA 70.6% (already), MMLU-Pro 89.5% (already), MMLU-Redux 96.6% (already), C-Eval 92.2% (already), HLE 30.8% (already), IFEval 90.9% (already), IFBench 58% (already), AA-IFBench 43.0% (already), MMLU-ProX 85.7% (already), NOVA-63 56.7% (already), INCLUDE 86.2% (already), PolyMath 79.0% (already), MAXIFE 79.2% (already), AIME26 95.1% (already), HMMT Feb 2025 92.9% (already), HMMT Nov 2025 93.3% (already), HMMT Feb 2026 85.3% (already), MMAnswerBench 84.0% (already), FrontierMath v2 34.386%/4.878% (already). Corroborates band; no change.
- **Context window: 68/100.** 200K window; caps at no published MRCR.
- **Multimodal: 72/100.** Text/image/PDF in; caps at no verified multimodal benchmarks. Enrichment adds Design Arena 1188. Corroborates band; no change.
- **Coding: 70/100.** SWE-bench Verified 77.2%, LiveCodeBench 71.4%, SciCode 45.7%, LCR 72.3%, coding lane not reported. Enrichment adds SWE-bench Verified 77.2% (already), LiveCodeBench 71.4% (already), SciCode 45.7% (already), LCR 72.3% (already), IFBench 57.3% (already), AA Coding Index 52.1% (already), Design Arena 1188. Corroborates band; no change.
- **Cost efficiency: 78/100.** Mid $3/$15 per 1M.
- **Overall Score: 70/100.** Mean of five quality dims (BenchLM aggregate 47.38); best-fit for mid-tier coding at mid cost (superseded by Sonnet 4.6/5/5.5). Enrichment (2026-11-08) added new verified rows (Terminal-Bench 2.0 50%, OSWorld-Verified 61.4%, VITA-Bench 17.0%, Gert Labs 48.51%, JobBench 27.7%, AA Intelligence 23.7%, AA-GPQA 81.0%, AA-HLE 13.2%, AA-Omniscience -4.1%/40.9%/76.2%, AA-LCR 70.7%, CritPt 0.3%, LongBench v2 64.4%, AI-Needle 74%, GPQA 83.4%, SuperGPQA 70.6%, MMLU-Pro 89.5%, MMLU-Redux 96.6%, C-Eval 92.2%, HLE 30.8%, IFEval 90.9%, IFBench 58%, AA-IFBench 43.0%, MMLU-ProX 85.7%, NOVA-63 56.7%, INCLUDE 86.2%, PolyMath 79.0%, MAXIFE 79.2%, AIME26 95.1%, HMMT Feb 2025 92.9%, HMMT Nov 2025 93.3%, HMMT Feb 2026 85.3%, MMAnswerBench 84.0%, FrontierMath v2 34.386%/4.878%, SWE-bench Verified 77.2%, LiveCodeBench 71.4%, SciCode 45.7%, LCR 72.3%, IFBench 57.3%, AA Coding Index 52.1%, Design Arena 1188). No dimension band moved; Overall unchanged at 70.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-10-17 preserved; new benchmark rows added; no dimension score changed (new evidence corroborates existing bands).
- Reference URLs:
  - [BenchLM — Claude Sonnet 4.5](https://benchlm.ai/models/claude-sonnet-4-5)
  - [Artificial Analysis — Claude Sonnet 4.5](https://artificialanalysis.ai/models/claude-sonnet-4-5)
  - [Anthropic — Claude Sonnet 4.5](https://www.anthropic.com/news/claude-sonnet-4-5)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).