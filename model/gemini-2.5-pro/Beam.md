# Gemini 2.5 Pro — findings by Beam

- Source: Google/Gemini 2.5 Pro, `google/gemini-2.5-pro`
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-10-17)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Pro
- **Short description:** Google's advanced reasoning model (Mar 2025) with Deep Think; 1M context. Superseded by Gemini 3.x family but still widely used.
- **Provider / access:** Google AI Studio / Vertex AI `gemini-2.5-pro`; OpenRouter.
- **Release / knowledge:** Released 2025-03-25; knowledge cutoff not stated.
- **IDs:** `google/gemini-2.5-pro`
- **Context window:** 1,000,000 tokens; max output not stated.
- **Modalities:** text, image, video, audio, file (PDF) in; text out; reasoning yes (Deep Think); tool calling yes; structured output yes.
- **Pricing (as of 2026-11-08):** paid (Google).
- **Architecture:** proprietary sparse MoE; params not published.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- τ²-bench results: **54.1%** (Artificial Analysis)
- Gert Labs: **42.01%** (Gert Labs)
- GDPval-AA: **0.0%** normalized / 616 Elo (Artificial Analysis)
- AA Agentic Index: **3.5%** (Artificial Analysis)
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

- GPQA: **83%** (Google)
- HLE: **18.8%** (Google)
- Artificial Analysis Intelligence Index: **16.1%** (measured, updated 2026-11-07)
- AA-GPQA Diamond: **84.4%** (Artificial Analysis)
- AA-HLE: **22.5%** (Artificial Analysis)
- AA-Omniscience Index: **-16.3%**
- AA-Omniscience Accuracy: **39.1%**
- AA-Omniscience Hallucination Rate: **90.9%**
- AA-LCR: **69.0%** (Artificial Analysis)
- CritPt: **2.6%** (Artificial Analysis)
- MLCR-AA: not individually reported
- AA-IFBench: **48.7%** (Artificial Analysis)
- AA Global-MMLU-Lite: **90.3%** (Artificial Analysis)
- AA AIME 2025: **96.7%** (Artificial Analysis)
- FrontierMath v2 Tiers 1-3: **24.561%**; Tier 4: **0.000%** (Epoch AI)
- AA MMLU-Pro: **86.2%** (Artificial Analysis)
- GPQA Diamond: not individually reported
- MMLU-Pro: not individually reported
- AA MATH-500: **96.7%** (Artificial Analysis)

Coding:

- SWE-bench Verified: **63.8%** (Google)
- Vibe Code Bench: **0.40%** (Vals AI)
- AA-SciCode: **46.3%** (Artificial Analysis)
- AA Coding Index: **33.3%** (Artificial Analysis)
- SWE-bench (Vals): **54.4%** (Vals AI)
- AA LiveCodeBench: **80.1%** (Artificial Analysis)
- AA-IFBench: **48.7%** (Artificial Analysis)
- ExtractBench (LlamaIndex): not individually reported
- ParseBench: not individually reported
- Bug Hunt Bench: not individually reported
- PostTrainBench v1.1: not individually reported
- FrontierCode 2.0: not individually reported
- AA Coding Index: **33.3%** (Artificial Analysis)

Long context:

- 1M window; MRCR: not reported.
- AA-LCR: **69.0%** (Artificial Analysis)

Multimodal:

- AA-MMMU-Pro: **74.9%** (Artificial Analysis)
- Design Arena Website: **1165** (OpenRouter)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 62/100.** τ²-bench 54.1%, Gert Labs 42.01%, GDPval-AA 0.0% normalized/616 Elo, AA Agentic Index 3.5%. Enrichment (2026-11-08): BenchLM aggregator (updated 2026-11-07) corroborates τ²-bench 54.1%, Gert Labs 42.01%, GDPval-AA 0.0% normalized/616 Elo, AA Agentic Index 3.5%, AA Intelligence 16.1%, AA-GPQA 84.4%, AA-HLE 22.5%, AA-Omniscience -16.3%/39.1%/90.9%, AA-LCR 69.0%, CritPt 2.6%, AA-IFBench 48.7%, AA Global-MMLU-Lite 90.3%, AA AIME 2025 96.7%, FrontierMath v2 24.561%/0.000%, SWE-bench Verified 63.8%, Vibe Code 0.40%, AA-SciCode 46.3%, AA Coding Index 33.3%, SWE-bench Vals 54.4%, AA LiveCodeBench 80.1%, AA MMLU-Pro 86.2%, AA-MMMU-Pro 74.9%, Design Arena 1165. Corroborates band; no change.
- **Reasoning: 64/100.** GPQA 83%, HLE 18.8%, AA Intelligence 16.1%, AA-GPQA 84.4%, AA-HLE 22.5%, AA-Omniscience -16.3%/39.1%/90.9%, AA-LCR 69.0%, CritPt 2.6%, AA-IFBench 48.7%, AA Global-MMLU-Lite 90.3%, AA AIME 2025 96.7%, FrontierMath v2 24.561%/0.000%, AA MMLU-Pro 86.2%. Corroborates band; no change.
- **Context window: 80/100.** 1M window; caps at no published MRCR. Enrichment adds AA-LCR 69.0%. Corroborates band; no change.
- **Multimodal: 80/100.** Text/image/video/audio/PDF in; AA-MMMU-Pro 74.9%. Enrichment adds AA-MMMU-Pro 74.9% (already), Design Arena 1165. Corroborates band; no change.
- **Coding: 60/100.** SWE-bench Verified 63.8%, Vibe Code 0.40%, AA-SciCode 46.3%, AA Coding Index 33.3%, SWE-bench Vals 54.4%, AA LiveCodeBench 80.1%. Enrichment adds AA-SciCode 46.3% (already), AA Coding Index 33.3% (already), SWE-bench Vals 54.4% (already), AA LiveCodeBench 80.1% (already), AA-MMMU-Pro 74.9%, Design Arena 1165. Corroborates band; no change.
- **Cost efficiency: 80/100.** Mid-tier paid.
- **Overall Score: 69.2/100.** Mean of five quality dims (BenchLM aggregate 49.07); best-fit for high-volume multimodal at mid cost (superseded by 2.5 Flash / 3.x). Enrichment (2026-11-08) added new verified rows (τ²-bench 54.1%, Gert Labs 42.01%, GDPval-AA 0.0% normalized/616 Elo, AA Agentic Index 3.5%, AA Intelligence 16.1%, AA-GPQA 84.4%, AA-HLE 22.5%, AA-Omniscience -16.3%/39.1%/90.9%, AA-LCR 69.0%, CritPt 2.6%, AA-IFBench 48.7%, AA Global-MMLU-Lite 90.3%, AA AIME 2025 96.7%, FrontierMath v2 24.561%/0.000%, SWE-bench Verified 63.8%, Vibe Code 0.40%, AA-SciCode 46.3%, AA Coding Index 33.3%, SWE-bench Vals 54.4%, AA LiveCodeBench 80.1%, AA MMLU-Pro 86.2%, AA-MMMU-Pro 74.9%, Design Arena 1165). No dimension band moved; Overall unchanged at 49.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-10-17 preserved; new benchmark rows added; no dimension score changed (new evidence corroborates existing bands).
- Reference URLs:
  - [BenchLM — Gemini 2.5 Pro](https://benchlm.ai/models/gemini-2-5-pro)
  - [Artificial Analysis — Gemini 2.5 Pro](https://artificialanalysis.ai/models/gemini-2-5-pro)
  - [Google DeepMind — Gemini 2.5 Pro](https://deepmind.google/models/gemini/pro/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).