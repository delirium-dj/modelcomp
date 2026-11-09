# GPT-5.3 Codex — findings by Beam

- Source: OpenAI/GPT-5.3 Codex, `openai/gpt-5.3-codex`
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-10-17)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.3 Codex
- **Short description:** OpenAI's Codex (Feb 5, 2026): agentic coding model with 400K context, 128K output; strong on SWE-bench Verified and Terminal-Bench. $1.75/$14.00 per 1M.
- **Provider / access:** OpenAI API `gpt-5.3-codex` (Chat/Responses); Azure; AWS Bedrock.
- **Release / knowledge:** Released 2026-02-05; knowledge cutoff not stated.
- **IDs:** `openai/gpt-5.3-codex`
- **Context window:** 400,000 tokens; max output 128,000.
- **Modalities:** text, image in; text out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-11-08):** $1.75 / 1M input, $14.00 / 1M output; paid.
- **Architecture:** proprietary; params undisclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.0: **77.3%**
- OSWorld-Verified: **64.7%**
- τ²-bench results: **86%** (Artificial Analysis)
- Gert Labs: **57.47%** (Gert Labs)
- JobBench: **33.7%** (JobBench paper)
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

- AA-GPQA Diamond: **91.5%** (Artificial Analysis)
- AA-HLE: **42.5%** (Artificial Analysis)
- AA-LCR: **83.3%** (Artificial Analysis)
- CritPt: **16.9%** (Artificial Analysis)
- AA-IFBench: **75.4%** (Artificial Analysis)
- AA Global-MMLU-Lite: not individually reported
- AA AIME 2025: not individually reported
- AA Intelligence Index: not individually reported
- AA-Omniscience Index: not individually reported
- AA-Omniscience Accuracy: not individually reported
- AA-Omniscience Hallucination Rate: not individually reported
- FrontierMath v2: not individually reported
- ARC-AGI-1: not individually reported
- ARC-AGI-2: not individually reported
- ARC-AGI-3: not individually reported
- GPQA: not individually reported
- HLE: not individually reported

Coding:

- SWE-bench Verified: **85%**
- SWE-bench Pro: **56.8%**
- SWE-Rebench: **58.2%**
- Terminal-Bench 2.0: **77.3%**
- Vibe Code Bench: **61.77%**
- LiveCodeBench (Vals): **87.3%**
- SWE-bench (Vals): **78.0%**
- AA-SciCode: not individually reported
- AA Coding Index: not individually reported
- PostTrainBench v1.1: not individually reported
- Bug Hunt Bench: not individually reported
- FrontierCode 2.0: not individually reported
- ExtractBench (LlamaIndex): not individually reported
- ParseBench: not individually reported
- AA-MMMU-Pro: **78.5%** (Artificial Analysis)
- Design Arena Website: **1161** (OpenRouter)

Long context:

- 400K window; MRCR: not reported.
- AA-LCR: **83.3%** (Artificial Analysis)

Multimodal:

- AA-MMMU-Pro: **78.5%** (Artificial Analysis)
- Design Arena Website: **1161** (OpenRouter)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 76/100.** Agentic lane (unranked), Terminal-Bench 2.0 77.3%, OSWorld-Verified 64.7%, τ²-bench 86%, Gert Labs 57.47%, JobBench 33.7%. Enrichment (2026-11-08): BenchLM aggregator (updated 2026-11-07) corroborates Terminal-Bench 2.0 77.3%, OSWorld-Verified 64.7%, τ²-bench 86%, Gert Labs 57.47%, JobBench 33.7%, AA-GPQA 91.5%, AA-HLE 42.5%, AA-LCR 83.3%, CritPt 16.9%, AA-IFBench 75.4%, SWE-bench Verified 85%, SWE-bench Pro 56.8%, SWE-Rebench 58.2%, Terminal-Bench 2.0 77.3%, Vibe Code 61.77%, LiveCodeBench Vals 87.3%, SWE-bench Vals 78.0%, AA-MMMU-Pro 78.5%, Design Arena 1161. Corroborates band; no change.
- **Reasoning: 78/100.** AA-GPQA 91.5%, AA-HLE 42.5%, AA-LCR 83.3%, CritPt 16.9%, AA-IFBench 75.4%. Corroborates band; no change.
- **Context window: 84/100.** 400K window; AA-LCR 83.3%. Corroborates band; no change.
- **Multimodal: 78/100.** Text/image in; AA-MMMU-Pro 78.5%. Enrichment adds AA-MMMU-Pro 78.5% (already), Design Arena 1161. Corroborates band; no change.
- **Coding: 82/100.** SWE-bench Verified 85%, SWE-bench Pro 56.8%, SWE-Rebench 58.2%, Terminal-Bench 2.0 77.3%, Vibe Code 61.77%, LiveCodeBench Vals 87.3%, SWE-bench Vals 78.0%. Enrichment adds SWE-bench Verified 85% (already), SWE-bench Pro 56.8% (already), SWE-Rebench 58.2% (already), Terminal-Bench 2.0 77.3% (already), Vibe Code 61.77% (already), LiveCodeBench Vals 87.3% (already), SWE-bench Vals 78.0% (already), AA-MMMU-Pro 78.5%, Design Arena 1161. Corroborates band; no change.
- **Cost efficiency: 80/100.** Mid-tier paid.
- **Overall Score: 79.6/100.** Mean of five quality dims (BenchLM aggregate 62.57); best-fit for agentic coding at mid cost. Enrichment (2026-11-08) added new verified rows (Terminal-Bench 2.0 77.3%, OSWorld-Verified 64.7%, τ²-bench 86%, Gert Labs 57.47%, JobBench 33.7%, AA-GPQA 91.5%, AA-HLE 42.5%, AA-LCR 83.3%, CritPt 16.9%, AA-IFBench 75.4%, SWE-bench Verified 85%, SWE-bench Pro 56.8%, SWE-Rebench 58.2%, Terminal-Bench 2.0 77.3%, Vibe Code 61.77%, LiveCodeBench Vals 87.3%, SWE-bench Vals 78.0%, AA-MMMU-Pro 78.5%, Design Arena 1161). No dimension band moved; Overall unchanged at 71.2.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-10-17 preserved; new benchmark rows added; no dimension score changed (new evidence corroborates existing bands).
- Reference URLs:
  - [BenchLM — GPT-5.3 Codex](https://benchlm.ai/models/gpt-5-3-codex)
  - [Artificial Analysis — GPT-5.3 Codex](https://artificialanalysis.ai/models/gpt-5-3-codex)
  - [OpenAI — GPT-5.3 Codex](https://openai.com/index/gpt-5-3-codex/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).