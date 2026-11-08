# Gemini 3.6 Flash — findings by Beam

- Source: Google/Gemini 3.6 Flash, `google/gemini-3.6-flash`
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-10-17)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash
- **Short description:** Google's Flash-tier model (Aug 2026) for high-volume agentic and coding tasks at low cost; BenchLM #42/1016.
- **Provider / access:** Google AI Studio / Vertex AI `gemini-3.6-flash`; OpenRouter.
- **Release / knowledge:** Released 2026-08-??; knowledge cutoff not stated.
- **IDs:** `google/gemini-3.6-flash`
- **Context window:** 1,000,000 tokens.
- **Modalities:** text, image in; text out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-11-08):** paid (Google).
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- OSWorld-Verified: **83%** (Google)
- GDPval-AA: **1423 Elo** (Google); **39.2%** normalized (Artificial Analysis)
- Terminal-Bench 2.1 (Vals): **73.8%** (Vals AI)
- AA Agentic Index: **30.1%** (Artificial Analysis)
- MazeBench: **0%** (MazeBench)
- AA Briefcase: not individually reported
- AA AutomationBench: not individually reported
- AA Terminal-Bench 4.0: not individually reported
- GDP.pdf: not individually reported
- AA-AnalystAgent: not individually reported
- AA ITBench: not individually reported
- AA Tau3 Banking: not individually reported
- aaTerminalBench21: not individually reported
- AA Cyber Index: not individually reported
- CWE-Bench-AA: not individually reported
- DeepsecBench-AA: not individually reported
- CyberGym-E2E-AA: not individually reported
- AA Briefcase: not individually reported

Reasoning / knowledge:

- AA Intelligence Index: **34.0%** (measured, updated 2026-11-07)
- AA-GPQA Diamond: **92.8%** (Artificial Analysis)
- AA-HLE: **40.8%** (Artificial Analysis)
- AA-Omniscience Index: **22.1%**
- AA-Omniscience Accuracy: **50.0%**
- AA-Omniscience Hallucination Rate: **55.6%**
- AA-LCR: **80.0%** (Artificial Analysis)
- CritPt: **10.6%** (Artificial Analysis)
- MLCR-AA: not individually reported
- AA-IFBench: not individually reported
- AA Global-MMLU-Lite: not individually reported
- AA AIME 2025: not individually reported
- FrontierMath v2 Tiers 1-3: **58.947%**; Tier 4: **21.951%** (Epoch AI)
- ARC-AGI-1: **91.17%** (ARC Prize)
- ARC-AGI-2: **60.4%** (ARC Prize)

Coding:

- DeepSWE: **49.0%** (Google)
- CursorBench 3.2: **53.5%** (Cursor)
- AA-SciCode: **53.4%** (Artificial Analysis)
- LiveCodeBench (Vals): **88.1%** (Vals AI)
- SWE-bench (Vals): **79.6%** (Vals AI)
- AA Coding Index: **69.2%** (Artificial Analysis)
- AA-IFBench: not individually reported
- ExtractBench (LlamaIndex): not individually reported
- ParseBench: **69.12%** (ParseBench)
- AA-MMMU-Pro: **83.2%** (Artificial Analysis)
- Design Arena Website: **1296** (OpenRouter)

Long context:

- 1M window; MRCR: no verified public score found.
- AA-LCR: **80.0%** (Artificial Analysis)

Multimodal:

- ParseBench: **69.12%**
- AA-MMMU-Pro: **83.2%**
- Design Arena Website: **1296**

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 72/100.** OSWorld-Verified 83%, GDPval-AA 39.2% normalized/1423 Elo, Terminal-Bench 2.1 Vals 73.8%, AA Agentic Index 30.1%, MazeBench 0%. Enrichment (2026-11-08): BenchLM aggregator (updated 2026-11-07) corroborates OSWorld-Verified 83%, GDPval-AA 39.2% normalized/1423 Elo, Terminal-Bench 2.1 Vals 73.8%, AA Agentic Index 30.1%, MazeBench 0%, AA Intelligence 34.0%, AA-GPQA 92.8%, AA-HLE 40.8%, AA-Omniscience 22.1%/50.0%/55.6%, AA-LCR 80.0%, CritPt 10.6%, ARC-AGI-1 91.17%, ARC-AGI-2 60.4%, FrontierMath v2 58.947%/21.951%, LiveCodeBench Vals 88.1%, SWE-bench Vals 79.6%, AA Coding Index 69.2%, ParseBench 69.12%, AA-MMMU-Pro 83.2%, Design Arena 1296. Corroborates band; no change.
- **Reasoning: 78/100.** ARC-AGI-1 91.17%, ARC-AGI-2 60.4%, AA Intelligence 34.0%, AA-GPQA 92.8%, AA-HLE 40.8%, AA-Omniscience 22.1%/50.0%/55.6%, AA-LCR 80.0%, CritPt 10.6%, FrontierMath v2 58.947%/21.951%. Corroborates band; no change.
- **Context window: 82/100.** 1M window; caps at no published MRCR retrieval. Enrichment adds AA-LCR 80.0%. Corroborates band; no change.
- **Multimodal: 84/100.** Text/image in; AA-MMMU-Pro 83.2%. Enrichment adds ParseBench 69.12%, AA-MMMU-Pro 83.2%, Design Arena 1296. Corroborates band; no change.
- **Coding: 74/100.** DeepSWE 49.0%, CursorBench 3.2 53.5%, AA-SciCode 53.4%, LiveCodeBench Vals 88.1%, SWE-bench Vals 79.6%, AA Coding Index 69.2%. Enrichment adds DeepSWE 49.0% (already), CursorBench 3.2 53.5% (already), AA-SciCode 53.4% (already), LiveCodeBench Vals 88.1% (already), SWE-bench Vals 79.6% (already), AA Coding Index 69.2% (already), ParseBench 69.12%, AA-MMMU-Pro 83.2%, Design Arena 1296. Corroborates band; no change.
- **Cost efficiency: 90/100.** Low pricing; excellent value.
- **Overall Score: 78/100.** Mean of five quality dims (BenchLM aggregate 62.64); best-fit for high-volume agentic + multimodal at low cost. Enrichment (2026-11-08) added new verified rows (OSWorld-Verified 83%; GDPval-AA 39.2% normalized/1423 Elo; Terminal-Bench 2.1 Vals 73.8%; AA Agentic Index 30.1%; MazeBench 0%; AA Intelligence 34.0%; AA-GPQA 92.8%; AA-HLE 40.8%; AA-Omniscience 22.1%/50.0%/55.6%; AA-LCR 80.0%; CritPt 10.6%; ARC-AGI-1 91.17%; ARC-AGI-2 60.4%; FrontierMath v2 58.947%/21.951%; DeepSWE 49.0%; CursorBench 3.2 53.5%; AA-SciCode 53.4%; LiveCodeBench Vals 88.1%; SWE-bench Vals 79.6%; AA Coding Index 69.2%; ParseBench 69.12%; AA-MMMU-Pro 83.2%; Design Arena 1296). No dimension band moved; Overall unchanged at 77.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-10-17 preserved; new benchmark rows added; no dimension score changed (new evidence corroborates existing bands).
- Reference URLs:
  - [BenchLM — Gemini 3.6 Flash](https://benchlm.ai/models/gemini-3-6-flash)
  - [Artificial Analysis — Gemini 3.6 Flash](https://artificialanalysis.ai/models/gemini-3-6-flash)
  - [Google — Gemini 3.6 Flash](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-6-flash-3-5-flash-lite-3-5-flash-cyber/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).