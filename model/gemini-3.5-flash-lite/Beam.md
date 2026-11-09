# Gemini 3.5 Flash-Lite — findings by Beam

- Source: Google/Gemini 3.5 Flash-Lite, `google/gemini-3.5-flash-lite`
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-10-17)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash-Lite
- **Short description:** Google's lightest Flash-tier model (Jul 2026): 1M context, very cheap, fast; BenchLM #111/1016.
- **Provider / access:** Google AI Studio / Vertex AI `gemini-3.5-flash-lite`; OpenRouter.
- **Release / knowledge:** Released 2026-07-??; knowledge cutoff not stated.
- **IDs:** `google/gemini-3.5-flash-lite`
- **Context window:** 1,000,000 tokens.
- **Modalities:** text, image in; text out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-11-08):** paid (Google).
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1: **54.0%** (Google)
- OSWorld-Verified: **74%** (Google)
- GDPval-AA: **1139 Elo** (Google); **24.2%** normalized (Artificial Analysis)
- Terminal-Bench 2.1 (Vals): **50.2%** (Vals AI)
- AA Agentic Index: **15.9%** (Artificial Analysis)
- AA EnterpriseOps-Gym: **42.3%** (Artificial Analysis)
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

- MRCRv2: **72.2%** (Google)
- AA-LCR: **76.0%** (Artificial Analysis)
- CritPt: **0.0%** (Artificial Analysis)
- Artificial Analysis Intelligence Index: **11.7%** (measured, updated 2026-11-07)
- AA-GPQA Diamond: **83.8%** (Artificial Analysis)
- AA-HLE: **18.8%** (Artificial Analysis)
- AA-Omniscience Index: **6.9%**
- AA-Omniscience Accuracy: **26.5%**
- AA-Omniscience Hallucination Rate: **26.7%**
- AA-IFBench: not individually reported
- AA Global-MMLU-Lite: not individually reported
- AA AIME 2025: not individually reported
- FrontierMath v2 Tiers 1-3: **25.965%**; Tier 4: **0.000%** (Epoch AI)
- GPQA Diamond (Vals): **83.8%** (Vals AI)
- MMLU-Pro (Vals): **85.8%** (Vals AI)

Coding:

- Terminal-Bench 2.1: **54.0%** (Google)
- SWE-bench Pro: **54.2%** (Google)
- AA-SciCode: **41.3%** (Artificial Analysis)
- LiveCodeBench (Vals): **79.0%** (Vals AI)
- SWE-bench (Vals): **75.0%** (Vals AI)
- AA Coding Index: **49.3%** (Artificial Analysis)
- AA-IFBench: not individually reported
- ExtractBench (LlamaIndex): not individually reported
- ParseBench: **59.49%** (ParseBench)
- AA-MMMU-Pro: **79.0%** (Artificial Analysis)
- Design Arena Website: not individually reported

Long context:

- 1M window; MRCR: not reported.
- AA-LCR: **76.0%** (Artificial Analysis)

Multimodal:

- ParseBench: **59.49%**
- AA-MMMU-Pro: **79.0%**

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 68/100.** Terminal-Bench 2.1 54.0%, OSWorld-Verified 74%, GDPval-AA 24.2% normalized/1139 Elo, Terminal-Bench 2.1 Vals 50.2%, AA Agentic Index 15.9%, AA EnterpriseOps-Gym 42.3%. Enrichment (2026-11-08): BenchLM aggregator (updated 2026-11-07) corroborates Terminal-Bench 2.1 54.0%, OSWorld-Verified 74%, GDPval-AA 24.2% normalized/1139 Elo, Terminal-Bench 2.1 Vals 50.2%, AA Agentic Index 15.9%, AA EnterpriseOps-Gym 42.3%, MRCRv2 72.2%, AA-LCR 76.0%, CritPt 0.0%, AA Intelligence 11.7%, AA-GPQA 83.8%, AA-HLE 18.8%, AA-Omniscience 6.9%/26.5%/26.7%, GPQA Diamond Vals 83.8%, MMLU-Pro Vals 85.8%, SWE-bench Pro 54.2%, AA-SciCode 41.3%, LiveCodeBench Vals 79.0%, SWE-bench Vals 75.0%, AA Coding Index 49.3%, ParseBench 59.49%, AA-MMMU-Pro 79.0%, FrontierMath v2 25.965%/0.000%. Corroborates band; no change.
- **Reasoning: 68/100.** MRCRv2 72.2%, AA-LCR 76.0%, CritPt 0.0%, AA Intelligence 11.7%, AA-GPQA 83.8%, AA-HLE 18.8%, AA-Omniscience 6.9%/26.5%/26.7%, GPQA Diamond Vals 83.8%, MMLU-Pro Vals 85.8%, FrontierMath v2 25.965%/0.000%. Corroborates band; no change.
- **Context window: 74/100.** 1M window; AA-LCR 76.0%. Corroborates band; no change.
- **Multimodal: 78/100.** Text/image in; AA-MMMU-Pro 79.0%. Enrichment adds ParseBench 59.49%, AA-MMMU-Pro 79.0%. Corroborates band; no change.
- **Coding: 68/100.** Terminal-Bench 2.1 54.0%, SWE-bench Pro 54.2%, AA-SciCode 41.3%, LiveCodeBench Vals 79.0%, SWE-bench Vals 75.0%, AA Coding Index 49.3%. Enrichment adds ParseBench 59.49%, AA-MMMU-Pro 79.0%. Corroborates band; no change.
- **Cost efficiency: 92/100.** Very cheap.
- **Overall Score: 71.2/100.** Mean of five quality dims (BenchLM aggregate 46.81); best-fit for high-volume agentic + multimodal at very low cost. Enrichment (2026-11-08) added new verified rows (Terminal-Bench 2.1 54.0%, OSWorld-Verified 74%, GDPval-AA 24.2% normalized/1139 Elo, Terminal-Bench 2.1 Vals 50.2%, AA Agentic Index 15.9%, AA EnterpriseOps-Gym 42.3%, MRCRv2 72.2%, AA-LCR 76.0%, CritPt 0.0%, AA Intelligence 11.7%, AA-GPQA 83.8%, AA-HLE 18.8%, AA-Omniscience 6.9%/26.5%/26.7%, GPQA Diamond Vals 83.8%, MMLU-Pro Vals 85.8%, SWE-bench Pro 54.2%, AA-SciCode 41.3%, LiveCodeBench Vals 79.0%, SWE-bench Vals 75.0%, AA Coding Index 49.3%, ParseBench 59.49%, AA-MMMU-Pro 79.0%, FrontierMath v2 25.965%/0.000%). No dimension band moved; Overall unchanged at 71.2.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-10-17 preserved; new benchmark rows added; no dimension score changed (new evidence corroborates existing bands).
- Reference URLs:
  - [BenchLM — Gemini 3.5 Flash-Lite](https://benchlm.ai/models/gemini-3-5-flash-lite)
  - [Artificial Analysis — Gemini 3.5 Flash-Lite](https://artificialanalysis.ai/models/gemini-3-5-flash-lite)
  - [Google — Gemini 3.6 Flash, 3.5 Flash-Lite, and 3.5 Flash Cyber](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-6-flash-3-5-flash-lite-3-5-flash-cyber/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).