# Grok 4.5 — findings by Beam

- Source: xAI/Grok 4.5, `x-ai/grok-4.5`
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-10-17)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.5
- **Short description:** xAI's model (Jul 8, 2026): 500K context. BenchLM 63.27 (#41 of 954). AA Intelligence Index 38.8%. Terminal-Bench 2.1 83.3% (strongest agentic tool-use). SWE-bench Pro 64.7%. GDPval-AA 44.2%. $2.00/$6.00 per 1M.
- **Provider / access:** xAI API; OpenRouter.
- **Release / knowledge:** Released 2026-07-08; knowledge cutoff not stated.
- **IDs:** `x-ai/grok-4.5`
- **Context window:** 500,000 tokens; max output 500,000.
- **Modalities:** text, image in; text out; reasoning yes; tool calling yes. Proprietary.
- **Pricing (as of 2026-11-08):** $2.00 / 1M input, $6.00 / 1M output; paid.
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Agentic public-lane (BenchLM): **58.9** (Supported · #31/128)
- Terminal-Bench 3.0: **15.7%** (Terminal-Bench 3.0 leaderboard)
- Terminal-Bench 2.1: **83.3%** (xAI launch post)
- deepSwe: **53%** (xAI launch post)
- GDPval-AA: **44.2%** (Artificial Analysis)
- Terminal-Bench 2.1 (Vals): **67.8%** (Vals AI)
- Snorkel GDPval+: **29%** mean pass rate (Snorkel AI)
- AA Agentic Index: **42.1%** (Artificial Analysis)
- GDPval-AA: **1430 Elo** (Artificial Analysis)
- AA EnterpriseOps-Gym: **40.8%** (Artificial Analysis)
- AA Tau3 Banking: **42.1%** (Artificial Analysis)
- aaTerminalBench21: **81.6%** (Artificial Analysis)
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

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): **54.1** (#28/28)
- GPQA Diamond (Vals): **92.9%** (Vals AI)
- MMLU-Pro (Vals): **89.2%** (Vals AI)
- ARC-AGI-1: **85.67%** (ARC Prize)
- ARC-AGI-2: **52.6%** (ARC Prize)
- ARC-AGI-3: **0.3%** (ARC Prize)
- AA Intelligence Index: **38.8%** (measured, updated 2026-11-07)
- AA-GPQA Diamond: **93.1%** (Artificial Analysis)
- AA-HLE: **42.7%** (Artificial Analysis)
- AA-LCR: **79.3%** (Artificial Analysis)
- CritPt: **15.4%** (Artificial Analysis)
- AA-Omniscience Index: **25.3%**
- AA-Omniscience Accuracy: **51.6%**
- AA-Omniscience Hallucination Rate: **54.1%**
- AA-IFBench: not individually reported
- AA Global-MMLU-Lite: not individually reported
- AA AIME 2025: not individually reported
- FrontierMath v2 (Tiers 1-3): **57.193%**; Tier 4: **24.390%** (Epoch AI)

Coding:

- Coding public-lane (BenchLM): **55.7** (Supported · #30/150)
- SWE-bench Pro: **64.7%** (BenchLM)
- SWE Multilingual: **78%** (BenchLM)
- LiveCodeBench (Vals): **87.4%** (BenchLM)
- SWE-bench (Vals): **86.6%** (BenchLM)
- Terminal-Bench 2.1: **83.3%** (xAI launch post)
- deepSwe: **53%** (xAI launch post)
- CursorBench 3.2: **66.7%** (Cursor)
- VulcanBench v3: **89.9%** (VulcanBench)
- AA-SciCode: **55.0%** (Artificial Analysis)
- LiveCodeBench (Vals): **87.4%** (Vals AI)
- SWE-bench (Vals): **86.6%** (Vals AI)
- AA Coding Index: **72.5%** (Artificial Analysis)
- PostTrainBench v1.1: **23.4%** (PostTrainBench)
- AA-MMMU-Pro: **80.4%** (Artificial Analysis)
- Design Arena Website: **1278** (OpenRouter)

Long context:

- 500K window; AA-LCR **79.3%** (Artificial Analysis); MRCR not reported.

Multimodal:

- Text/image in; multimodal lane not reported.
- AA-MMMU-Pro: **80.4%** (Artificial Analysis)
- Design Arena Website: **1278** (OpenRouter)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 70/100.** Agentic lane #31/128 (58.9), Terminal-Bench 2.1 83.3%, deepSwe 53%, Terminal-Bench 3.0 15.7%, GDPval-AA 44.2%, Snorkel GDPval+ 29%; caps at Terminal-Bench 3.0 15.7%. Enrichment (2026-11-08): BenchLM aggregator (updated 2026-11-07) corroborates Terminal-Bench 3.0 15.7%, Terminal-Bench 2.1 83.3%, deepSwe 53%, GDPval-AA 44.2% normalized, Terminal-Bench 2.1 Vals 67.8%, AA Agentic Index 42.1%, GDPval-AA 1430 Elo, AA EnterpriseOps-Gym 40.8%, AA Tau3 Banking 42.1%, aaTerminalBench21 81.6%, AA Intelligence 38.8%, AA-GPQA 93.1%, AA-HLE 42.7%, AA-Omniscience 25.3%/51.6%/54.1%, AA-LCR 79.3%, CritPt 15.4%, ARC-AGI-1 85.67%, ARC-AGI-2 52.6%, ARC-AGI-3 0.3%, GPQA Diamond Vals 92.9%, MMLU-Pro Vals 89.2%, AA-SciCode 55.0%, AA Coding Index 72.5%, PostTrainBench v1.1 23.4%, AA-MMMU-Pro 80.4%, Design Arena 1278, FrontierMath v2 57.193%/24.390%. Corroborates band; no change.
- **Reasoning: 68/100.** GPQA 93.1%, MMLU-Pro 89.2%, ARC-AGI-1 85.67%, ARC-AGI-2 52.6%, ARC-AGI-3 0.3%, AA Intelligence 38.8%, AA-LCR 79.3%, CritPt 15.4%; caps at ARC-AGI-3 0.3%. Enrichment adds AA Intelligence 38.8% (already), AA-GPQA 93.1% (already), AA-HLE 42.7% (already), AA-Omniscience 25.3%/51.6%/54.1% (already), AA-LCR 79.3% (already), CritPt 15.4% (already), ARC-AGI-1 85.67% (already), ARC-AGI-2 52.6% (already), ARC-AGI-3 0.3% (already), GPQA Diamond Vals 92.9% (already), MMLU-Pro Vals 89.2% (already), FrontierMath v2 57.193%/24.390% (already). Corroborates band; no change.
- **Context window: 72/100.** 500K window; AA-LCR 79.3%; caps at no published MRCR.
- **Multimodal: 60/100.** Text/image in; caps at no verified multimodal benchmarks. Enrichment adds AA-MMMU-Pro 80.4%, Design Arena 1278. Corroborates band; no change.
- **Coding: 70/100.** SWE-bench Pro 64.7%, SWE Multilingual 78%, LiveCodeBench 87.4%, SWE-bench 86.6%, coding lane #30/150 (55.7); caps at no published Terminal-Bench Hard/SciCode. Enrichment adds SWE-bench Pro 64.7% (already), SWE Multilingual 78% (already), LiveCodeBench Vals 87.4% (already), SWE-bench Vals 86.6% (already), Terminal-Bench 2.1 83.3% (already), deepSwe 53% (already), CursorBench 3.2 66.7% (already), VulcanBench v3 89.9% (already), AA-SciCode 55.0% (already), AA Coding Index 72.5% (already), PostTrainBench v1.1 23.4% (already), AA-MMMU-Pro 80.4%, Design Arena 1278. Corroborates band; no change.
- **Cost efficiency: 84/100.** Mid $2.00/$6.00 per 1M.
- **Overall Score: 68/100.** Mean of five quality dims (BenchLM 63.27); best-fit for mid-cost agentic coding at mid cost. (Superseded by Grok 4.6.) Enrichment (2026-11-08) added new verified rows (Terminal-Bench 3.0 15.7%; Terminal-Bench 2.1 83.3%; deepSwe 53%; GDPval-AA 44.2% normalized; Terminal-Bench 2.1 Vals 67.8%; AA Agentic Index 42.1%; GDPval-AA 1430 Elo; AA EnterpriseOps-Gym 40.8%; AA Tau3 Banking 42.1%; aaTerminalBench21 81.6%; AA Intelligence 38.8%; AA-GPQA 93.1%; AA-HLE 42.7%; AA-Omniscience 25.3%/51.6%/54.1%; AA-LCR 79.3%; CritPt 15.4%; ARC-AGI-1 85.67%; ARC-AGI-2 52.6%; ARC-AGI-3 0.3%; GPQA Diamond Vals 92.9%; MMLU-Pro Vals 89.2%; AA-SciCode 55.0%; AA Coding Index 72.5%; PostTrainBench v1.1 23.4%; AA-MMMU-Pro 80.4%; Design Arena 1278; FrontierMath v2 57.193%/24.390%). No dimension band moved; Overall unchanged at 68.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-10-17 preserved; new benchmark rows added; no dimension score changed (new evidence corroborates existing bands).
- Reference URLs:
  - [BenchLM — Grok 4.5](https://benchlm.ai/models/grok-4-5)
  - [Artificial Analysis — Grok 4.5](https://artificialanalysis.ai/models/grok-4-5)
  - [xAI — Grok 4.5](https://x.ai/news/grok-4-5)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).