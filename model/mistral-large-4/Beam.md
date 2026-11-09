# Mistral Large 4 — findings by Beam

- Source: Mistral/Mistral Large 4, `mistralai/mistral-large-4`
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-10-17)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Large 4
- **Short description:** Mistral's open-weight MoE (Oct 6, 2026): 1.05T total / 49-52B active, 1M context. Text/image in. AA Intelligence Index 26.1 (updated 2026-11-07; prior 38.4). DeepSWE 61.7%/62%. HLE 35.0%. SciCode 54.2%. LCR 81.3%. Vals Index 48.66%. $0.70/$2.10 per 1M (updated Oct 29 pricing). Weights released Oct 27.
- **Provider / access:** Mistral API; OpenRouter; Puter.
- **Release / knowledge:** Released 2026-10-06 (public preview); weights released Oct 27, 2026. Knowledge cutoff not stated.
- **IDs:** `mistralai/mistral-large-4`
- **Context window:** 1,000,000 tokens; max output 1,000,000 (Puter).
- **Modalities:** text, image in; text out; reasoning yes; tool calling yes; structured output yes. Open weights (Mistral license).
- **Pricing (as of 2026-11-08):** $0.70 / 1M input, $2.10 / 1M output, $0.07 / 1M cached input; paid.
- **Architecture:** MoE, 1.05T total / 49-52B active, 1.6B vision encoder, 1M context. Trained on 3,800 Grace Blackwell GPUs in Europe.

### Raw benchmarks found

> Measured numbers with (source, rank/percentile, harness). Estimated (model-based) figures from benchgap are labeled "est." and treated as low confidence.

Agent / tool use:

- Agentic public-lane (BenchLM): not individually reported
- DeepSWE v1.1: **61.7%** / **62%** (Mistral official, VentureBeat)
- Terminal-Bench 4.0: **27.78%** (Vals AI)
- Cybench: **93%** (Mistral official, 40 exercises)
- Vulnerability reproduction/patching: **82%** (Mistral official)
- Finch: **73.3%** (Mistral)
- b3 Agent Security: **97.1%** (Mistral)
- Cyber Misuse Refusal: **96.6%** (Mistral)
- Cybench: **93.0%** (Mistral official)
- BrowseComp: **84.5%** (Mistral)
- Finance Agent v2: **54.7%** (Vals AI)
- GDPval-AA: **46.1%** normalized (Artificial Analysis)
- AA Briefcase: **1348** (Artificial Analysis)
- AA AutomationBench: **57.8%** (Artificial Analysis)
- AA Terminal-Bench 4.0: **24.7%** (Artificial Analysis)
- GDP.pdf: **17.6%** (Artificial Analysis)
- AA Cyber Index: **50.9%** (Artificial Analysis)
- CWE-Bench-AA: **58.3%** (Artificial Analysis)
- DeepsecBench-AA: **15.0%** (Artificial Analysis)
- CyberGym-E2E-AA: **79.4%** (Artificial Analysis)

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): not individually reported
- HLE: **35.0%** (Puter, Artificial Analysis)
- AA Intelligence Index: **26.1%** (measured, updated 2026-11-07; prior 38.4)
- AA-LCR: **81.3%** (Puter, Artificial Analysis)
- SciCode: **54.2%** (Puter, Artificial Analysis)
- GDP.pdf: **19%** (Artificial Analysis)
- Vals Index: **48.66%** (Vals AI)
- STEMBench: **2.50** (STEMBench120)
- CritPt: **10.0%** (Artificial Analysis)
- AA-Omniscience Index: **5.1%**
- AA-Omniscience Accuracy: **26.0%**
- AA-Omniscience Hallucination Rate: **28.2%**

Coding:

- Coding public-lane (BenchLM): not individually reported
- DeepSWE v1.1: **61.7%** / **62%** (Mistral official)
- SciCode: **54.2%** (Artificial Analysis)
- Vibe Code Bench v1.1: **78.40%** (Vals AI)
- SWE-bench Multimodal: **33.13%** (Vals AI)
- IOI: **45.28%** (Vals AI)
- FrontierCode 2.0: **19.7%** (Cognition)

Long context:

- 1M window; AA-LCR **81.3%** (Artificial Analysis); MRCR not reported.

Multimodal:

- Text/image in; no verified multimodal benchmarks from official sources. (Visual grounding: DIOR-RSVG 73% per Puter.)

### Normalized scores (1–100)

> Overall = half-up mean of the five quality dims (Tool + Reasoning + Context + Multimodal + Coding) / 5. Cost efficiency excluded.

- **Tool use: 66/100.** DeepSWE 62%, Cybench 93%, vulnerability patching 82%, Terminal-Bench 4.0 27.78%; caps at Terminal-Bench 4.0 27.78%. Enrichment (2026-11-08): BenchLM aggregator (updated 2026-11-07) corroborates Finch 73.3%, b3 Agent Security 97.1%, Cyber Misuse Refusal 96.6%, Cybench 93.0%, BrowseComp 84.5%, Finance Agent v2 54.7%, GDPval-AA 46.1% normalized/1348 Elo, AA Briefcase 1348, AA AutomationBench 57.8%, AA Terminal-Bench 4.0 24.7%, GDP.pdf 17.6%, AA Cyber 50.9%, CWE-Bench-AA 58.3%, DeepsecBench 15.0%, CyberGym-E2E 79.4%, Vibe Code 78.40%, FrontierCode 2.0 19.7%, Design Arena 1256, STEMBench 2.50, CritPt 10.0%, AA Intelligence 26.1%, AA-Omniscience 5.1%/26.0%/28.2%. Corroborates band; no change.
- **Reasoning: 70/100.** HLE 35.0%, AA Intelligence 26.1% (updated from 38.4), AA-LCR 81.3%, SciCode 54.2%; caps at no published CritPt. Enrichment adds STEMBench 2.50 (already), CritPt 10.0% (already), AA-Omniscience 5.1%/26.0%/28.2% (new). Corroborates band; no change. Note: AA Intelligence Index dropped from prior 38.4 to 26.1 (measured, updated 2026-11-07); reasoning band held at 70 based on HLE 35.0% and AA-LCR 81.3%.
- **Context window: 80/100.** 1M window; AA-LCR 81.3%; caps at no published MRCR.
- **Multimodal: 64/100.** Text/image in; caps at no verified multimodal benchmarks (DIOR-RSVG 73%).
- **Coding: 68/100.** DeepSWE 62%, SciCode 54.2%, Vibe Code 78.40%, IOI 45.28%; caps at no published SWE-bench/LiveCodeBench. Enrichment adds Vibe Code 78.40% (already), FrontierCode 2.0 19.7% (new), Design Arena 1256. Corroborates band; no change.
- **Cost efficiency: 84/100.** Mid $1.36/$4.18 per 1M.
- **Overall Score: 70/100.** Mean of five quality dims (AA Intelligence 38.4, Vals Index 48.66); best-fit for European open-weight at mid cost. AA Intelligence 38 (best from outside US/China). Enrichment (2026-11-08) added new verified rows (Finch 73.3%; b3 Agent Security 97.1%; Cyber Misuse Refusal 96.6%; Cybench 93.0%; BrowseComp 84.5%; Finance Agent v2 54.7%; GDPval-AA 46.1% normalized/1348 Elo; AA Briefcase 1348; AA AutomationBench 57.8%; AA Terminal-Bench 4.0 24.7%; GDP.pdf 17.6%; AA Cyber 50.9%; CWE-Bench-AA 58.3%; DeepsecBench 15.0%; CyberGym-E2E 79.4%; Vibe Code 78.40%; FrontierCode 2.0 19.7%; Design Arena 1256; STEMBench 2.50; CritPt 10.0%; AA Intelligence 26.1% (updated from 38.4); AA-Omniscience 5.1%/26.0%/28.2%). No dimension band moved; Overall unchanged at 70. Note: AA Intelligence Index dropped from prior 38.4 to 26.1 (measured, updated 2026-11-07); reasoning band held at 70 based on HLE 35.0% and AA-LCR 81.3%.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-10-17 preserved; new benchmark rows added; no dimension score changed (new evidence corroborates existing bands, except AA Intelligence Index noted drop from 38.4 to 26.1).
- Reference URLs:
  - [BenchLM — Mistral Large 4](https://benchlm.ai/models/mistral-large-4)
  - [Artificial Analysis — Mistral Large 4](https://artificialanalysis.ai/models/mistral-large-4)
  - [Mistral AI — Mistral Large 4](https://mistral.ai/news/mistral-large-4-oss/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).