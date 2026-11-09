# GPT-5.2-Codex — findings by Beam

- Source: OpenAI/GPT-5.2-Codex, `openai/gpt-5.2-codex`
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-10-17)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2-Codex
- **Short description:** OpenAI's Codex variant of GPT-5.2 (Dec 2025): agentic coding model with 400K context; BenchLM #62/1016.
- **Provider / access:** OpenAI API `gpt-5.2-codex` (Chat/Responses); Azure; AWS Bedrock.
- **Release / knowledge:** Released 2025-12-??; knowledge cutoff not stated.
- **IDs:** `openai/gpt-5.2-codex`
- **Context window:** 400,000 tokens; max output 128,000.
- **Modalities:** text, image in; text out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-11-08):** paid (OpenAI).
- **Architecture:** proprietary; params undisclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- τ²-bench results: **92.1%** (Artificial Analysis)
- Gert Labs: **51.79%** (Gert Labs)
- JobBench: **26.0%** (JobBench paper)
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

- AA Intelligence Index: **28.5%** (measured, updated 2026-11-07)
- AA-GPQA Diamond: **89.9%** (Artificial Analysis)
- AA-HLE: **35.7%** (Artificial Analysis)
- AA-Omniscience Index: **-2.2%**
- AA-Omniscience Accuracy: **41.1%**
- AA-Omniscience Hallucination Rate: **73.4%**
- AA-LCR: **82.3%** (Artificial Analysis)
- CritPt: **8.7%** (Artificial Analysis)
- AA-IFBench: **77.6%** (Artificial Analysis)
- AA Global-MMLU-Lite: not individually reported
- AA AIME 2025: not individually reported
- AA MMLU-Pro: not individually reported
- FrontierMath v2: not individually reported

Coding:

- Vibe Code Bench: **37.91%** (Vals AI)
- LiveCodeBench (Vals): **88.0%** (Vals AI)
- SWE-bench (Vals): **72.4%** (Vals AI)
- AA-SciCode: not individually reported
- AA Coding Index: not individually reported
- PostTrainBench v1.1: not individually reported
- Bug Hunt Bench: not individually reported
- FrontierCode 2.0: not individually reported
- ExtractBench (LlamaIndex): not individually reported
- ParseBench: not individually reported
- AA-MMMU-Pro: **76.3%** (Artificial Analysis)
- Design Arena Website: not individually reported

Long context:

- 400K window; MRCR: not reported.
- AA-LCR: **82.3%** (Artificial Analysis)

Multimodal:

- AA-MMMU-Pro: **76.3%** (Artificial Analysis)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 72/100.** Agentic lane (unranked), τ²-bench 92.1%, Gert Labs 51.79%, JobBench 26.0%. Enrichment (2026-11-08): BenchLM aggregator (updated 2026-11-07) corroborates τ²-bench 92.1%, Gert Labs 51.79%, JobBench 26.0%, AA Intelligence 28.5%, AA-GPQA 89.9%, AA-HLE 35.7%, AA-Omniscience -2.2%/41.1%/73.4%, AA-LCR 82.3%, CritPt 8.7%, AA-IFBench 77.6%, Vibe Code 37.91%, LiveCodeBench Vals 88.0%, SWE-bench Vals 72.4%, AA-MMMU-Pro 76.3%. Corroborates band; no change.
- **Reasoning: 76/100.** AA Intelligence 28.5%, AA-GPQA 89.9%, AA-HLE 35.7%, AA-Omniscience -2.2%/41.1%/73.4%, AA-LCR 82.3%, CritPt 8.7%, AA-IFBench 77.6%. Corroborates band; no change.
- **Context window: 78/100.** 400K window; AA-LCR 82.3%. Corroborates band; no change.
- **Multimodal: 76/100.** Text/image in; AA-MMMU-Pro 76.3%. Enrichment adds AA-MMMU-Pro 76.3% (already). Corroborates band; no change.
- **Coding: 72/100.** Vibe Code 37.91%, LiveCodeBench Vals 88.0%, SWE-bench Vals 72.4%. Enrichment adds Vibe Code 37.91% (already), LiveCodeBench Vals 88.0% (already), SWE-bench Vals 72.4% (already), AA-MMMU-Pro 76.3%. Corroborates band; no change.
- **Cost efficiency: 80/100.** Mid-tier paid.
- **Overall Score: 74.8/100.** Mean of five quality dims (BenchLM aggregate 56.58); best-fit for agentic coding at mid cost. Enrichment (2026-11-08) added new verified rows (τ²-bench 92.1%, Gert Labs 51.79%, JobBench 26.0%, AA Intelligence 28.5%, AA-GPQA 89.9%, AA-HLE 35.7%, AA-Omniscience -2.2%/41.1%/73.4%, AA-LCR 82.3%, CritPt 8.7%, AA-IFBench 77.6%, Vibe Code 37.91%, LiveCodeBench Vals 88.0%, SWE-bench Vals 72.4%, AA-MMMU-Pro 76.3%). No dimension band moved; Overall unchanged at 70.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-10-17 preserved; new benchmark rows added; no dimension score changed (new evidence corroborates existing bands).
- Reference URLs:
  - [BenchLM — GPT-5.2-Codex](https://benchlm.ai/models/gpt-5-2-codex)
  - [Artificial Analysis — GPT-5.2-Codex](https://artificialanalysis.ai/models/gpt-5-2-codex)
  - [OpenAI — GPT-5.2](https://openai.com/index/introducing-gpt-5-2/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).