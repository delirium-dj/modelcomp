# GPT-5.1 — findings by Beam

- Source: OpenAI/GPT-5.1, `openai/gpt-5.1`
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-10-17)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1
- **Short description:** OpenAI's adaptive reasoning model (Nov 2025): 200K context, reasoning effort levels, strong on agentic coding and multimodal.
- **Provider / access:** OpenAI API `gpt-5.1`; Azure; AWS Bedrock.
- **Release / knowledge:** Released 2025-11-??; knowledge cutoff not stated.
- **IDs:** `openai/gpt-5.1`
- **Context window:** 200,000 tokens; max output 128,000.
- **Modalities:** text, image in; text out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-11-08):** paid (OpenAI).
- **Architecture:** proprietary; params undisclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- τ²-bench results: **81.9%** (Artificial Analysis)
- Gert Labs: **41.24%** (Gert Labs)
- GDPval-AA: **16.3%** normalized / 930 Elo (Artificial Analysis)
- terminalBenchHard: **45.5%** (Artificial Analysis)
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

- AA Intelligence Index: **24.7%** (measured, updated 2026-11-07)
- AA-GPQA Diamond: **87.3%** (Artificial Analysis)
- AA-HLE: **28.5%** (Artificial Analysis)
- AA-Omniscience Index: **5.4%**
- AA-Omniscience Accuracy: **37.7%**
- AA-Omniscience Hallucination Rate: **51.9%**
- AA-LCR: **80.0%** (Artificial Analysis)
- CritPt: **4.9%** (Artificial Analysis)
- AA-IFBench: **72.9%** (Artificial Analysis)
- AA Global-MMLU-Lite: **90.6%** (Artificial Analysis)
- AA AIME 2025: **94.0%** (Artificial Analysis)
- AA MMLU-Pro: **87.0%** (Artificial Analysis)
- ARC-AGI-1: **72.83%** (ARC Prize)

Coding:

- Vibe Code Bench: **24.61%** (Vals AI)
- AA Coding Index: **49.4%** (Artificial Analysis)
- AA LiveCodeBench: **86.8%** (Artificial Analysis)
- AA-MMMU-Pro: **75.5%** (Artificial Analysis)
- Design Arena Website: **1185** (OpenRouter)

Long context:

- 200K window; MRCR: not reported.
- AA-LCR: **80.0%** (Artificial Analysis)

Multimodal:

- AA-MMMU-Pro: **75.5%** (Artificial Analysis)
- Design Arena Website: **1185** (OpenRouter)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 70/100.** Agentic lane (unranked), τ²-bench 81.9%, Gert Labs 41.24%, GDPval-AA 16.3% normalized/930 Elo, terminalBenchHard 45.5%. Enrichment (2026-11-08): BenchLM aggregator (updated 2026-11-07) corroborates τ²-bench 81.9%, Gert Labs 41.24%, GDPval-AA 16.3% normalized/930 Elo, terminalBenchHard 45.5%, AA Intelligence 24.7%, AA-GPQA 87.3%, AA-HLE 28.5%, AA-Omniscience 5.4%/37.7%/51.9%, AA-LCR 80.0%, CritPt 4.9%, ARC-AGI-1 72.83%, AA-IFBench 72.9%, AA Global-MMLU-Lite 90.6%, AA AIME 2025 94.0%, AA MMLU-Pro 87.0%, Vibe Code 24.61%, AA Coding Index 49.4%, AA LiveCodeBench 86.8%, AA-MMMU-Pro 75.5%, Design Arena 1185. Corroborates band; no change.
- **Reasoning: 72/100.** AA Intelligence 24.7%, AA-GPQA 87.3%, AA-HLE 28.5%, AA-Omniscience 5.4%/37.7%/51.9%, AA-LCR 80.0%, CritPt 4.9%, ARC-AGI-1 72.83%, AA-IFBench 72.9%, AA Global-MMLU-Lite 90.6%, AA AIME 2025 94.0%, AA MMLU-Pro 87.0%. Corroborates band; no change.
- **Context window: 72/100.** 200K window; AA-LCR 80.0%. Corroborates band; no change.
- **Multimodal: 72/100.** Text/image in; AA-MMMU-Pro 75.5%. Enrichment adds AA-MMMU-Pro 75.5% (already), Design Arena 1185. Corroborates band; no change.
- **Coding: 64/100.** Vibe Code 24.61%, AA Coding Index 49.4%, AA LiveCodeBench 86.8%. Enrichment adds Vibe Code 24.61% (already), AA Coding Index 49.4% (already), AA LiveCodeBench 86.8% (already), AA-MMMU-Pro 75.5%, Design Arena 1185. Corroborates band; no change.
- **Cost efficiency: 80/100.** Mid-tier paid.
- **Overall Score: 70/100.** Mean of five quality dims (BenchLM aggregate 57.09); best-fit for agentic coding + reasoning at mid cost. Enrichment (2026-11-08) added new verified rows (τ²-bench 81.9%, Gert Labs 41.24%, GDPval-AA 16.3% normalized/930 Elo, terminalBenchHard 45.5%, AA Intelligence 24.7%, AA-GPQA 87.3%, AA-HLE 28.5%, AA-Omniscience 5.4%/37.7%/51.9%, AA-LCR 80.0%, CritPt 4.9%, ARC-AGI-1 72.83%, AA-IFBench 72.9%, AA Global-MMLU-Lite 90.6%, AA AIME 2025 94.0%, AA MMLU-Pro 87.0%, Vibe Code 24.61%, AA Coding Index 49.4%, AA LiveCodeBench 86.8%, AA-MMMU-Pro 75.5%, Design Arena 1185). No dimension band moved; Overall unchanged at 74.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-10-17 preserved; new benchmark rows added; no dimension score changed (new evidence corroborates existing bands).
- Reference URLs:
  - [BenchLM — GPT-5.1](https://benchlm.ai/models/gpt-5-1)
  - [Artificial Analysis — GPT-5.1](https://artificialanalysis.ai/models/gpt-5-1)
  - [OpenAI — GPT-5.1](https://openai.com/index/gpt-5-1/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).