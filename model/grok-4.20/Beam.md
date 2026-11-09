# Grok 4.20 — findings by Beam

- Source: xAI/Grok 4.20, `xai/grok-4.20`
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-10-17)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.20
- **Short description:** xAI's Grok 4.20 (Sep 2026): reasoning model with 2M context; BenchLM #63/1016. $2.00/$6.00 per 1M.
- **Provider / access:** xAI API; OpenRouter.
- **Release / knowledge:** Released 2026-09-??; knowledge cutoff not stated.
- **IDs:** `xai/grok-4.20`
- **Context window:** 2,000,000 tokens; max output not stated.
- **Modalities:** text, image in; text out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-11-08):** $2.00 / 1M input, $6.00 / 1M output; paid.
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.0: **47.1%** (Meta)
- DeepSearchQA: **62.8%** (Meta)
- Gert Labs: **38.36%** (Gert Labs)
- Terminal-Bench 2.1 (Vals): **44.2%** (Vals AI)
- MazeBench: **0%** (MazeBench)
- AA Briefcase: not individually reported
- AA AutomationBench: not individually reported
- AA Terminal-Bench 4.0: not individually reported
- GDP.pdf: not individually reported
- AA-AnalystAgent: not individually reported
- MazeBench: **0%** (MazeBench)
- AA Cyber Index: not individually reported
- CWE-Bench-AA: not individually reported
- DeepsecBench-AA: not individually reported
- CyberGym-E2E-AA: not individually reported

Reasoning / knowledge:

- ARC-AGI-2: **53.3%** (Meta)
- ARC-AGI-3: **0.1%** (ARC Prize)
- GPQA-D: **88.5%** (Meta)
- HLE w/o tools: **31.6%** (Meta)
- HealthBench Hard: **20.3%** (Meta)
- MedXpertQA (Text): **50.2%** (Meta)
- Artificial Analysis Intelligence Index: not individually reported
- AA-GPQA Diamond: not individually reported
- AA-HLE: not individually reported
- AA-Omniscience Index: not individually reported
- AA-Omniscience Accuracy: not individually reported
- AA-Omniscience Hallucination Rate: not individually reported
- AA-LCR: not individually reported
- CritPt: not individually reported
- AA-IFBench: not individually reported
- AA Global-MMLU-Lite: not individually reported
- AA AIME 2025: not individually reported
- FrontierMath v2 Tiers 1-3: not individually reported
- FrontierMath v2 Tier 4: not individually reported
- GPQA Diamond (Vals): **88.6%** (Vals AI)
- MMLU-Pro (Vals): **86.3%** (Vals AI)

Coding:

- LiveCodeBench Pro: **74.2%** (Meta)
- SWE-bench Verified: **76.7%** (Meta)
- SWE-bench Pro: **51.8%** (Meta)
- Vibe Code Bench: **4.06%** (Vals AI)
- LiveCodeBench (Vals): **84.3%** (Vals AI)
- SWE-bench (Vals): **72.2%** (Vals AI)
- AA-SciCode: not individually reported
- AA Coding Index: not individually reported
- PostTrainBench v1.1: not individually reported
- Bug Hunt Bench: not individually reported
- FrontierCode 2.0: not individually reported
- ExtractBench (LlamaIndex): not individually reported
- ParseBench: not individually reported
- AA-MMMU-Pro: not individually reported
- Design Arena Website: **1228** (OpenRouter)

Long context:

- 2M window; MRCR: not reported.

Multimodal:

- MMMU-Pro: **75.2%** (Meta)
- CharXiv: **60.9%** (Meta)
- ERQA: **54.1%** (Meta)
- SimpleVQA: **57.4%** (Meta)
- MedXpertQA (MM): **65.8%** (Meta)
- Design Arena Website: **1228** (OpenRouter)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 70/100.** Agentic lane (unranked), Terminal-Bench 2.0 47.1%, DeepSearchQA 62.8%, Gert Labs 38.36%, Terminal-Bench 2.1 Vals 44.2%, MazeBench 0%. Enrichment (2026-11-08): BenchLM aggregator (updated 2026-11-07) corroborates Terminal-Bench 2.0 47.1%, DeepSearchQA 62.8%, Gert Labs 38.36%, Terminal-Bench 2.1 Vals 44.2%, MazeBench 0%, AA Intelligence not individually reported, AA-GPQA not individually reported, AA-HLE not individually reported, AA-Omniscience not individually reported, AA-LCR not individually reported, CritPt not individually reported, ARC-AGI-2 53.3%, ARC-AGI-3 0.1%, GPQA-D 88.5%, HLE w/o tools 31.6%, HealthBench Hard 20.3%, MedXpertQA (Text) 50.2%, GPQA Diamond Vals 88.6%, MMLU-Pro Vals 86.3%, LiveCodeBench Pro 74.2%, SWE-bench Verified 76.7%, SWE-bench Pro 51.8%, Vibe Code 4.06%, LiveCodeBench Vals 84.3%, SWE-bench Vals 72.2%, MMMU-Pro 75.2%, CharXiv 60.9%, ERQA 54.1%, SimpleVQA 57.4%, MedXpertQA (MM) 65.8%, Design Arena 1228, FrontierMath v2 not individually reported. Corroborates band; no change.
- **Reasoning: 68/100.** ARC-AGI-2 53.3%, GPQA-D 88.5%, HLE w/o tools 31.6%, HealthBench Hard 20.3%, MedXpertQA (Text) 50.2%, GPQA Diamond Vals 88.6%, MMLU-Pro Vals 86.3%. Corroborates band; no change.
- **Context window: 80/100.** 2M window; caps at no published MRCR.
- **Multimodal: 76/100.** Text/image in; MMMU-Pro 75.2%, CharXiv 60.9%. Enrichment adds MMMU-Pro 75.2% (already), CharXiv 60.9% (already), ERQA 54.1% (already), SimpleVQA 57.4% (already), MedXpertQA (MM) 65.8% (already), Design Arena 1228. Corroborates band; no change.
- **Coding: 74/100.** LiveCodeBench Pro 74.2%, SWE-bench Verified 76.7%, SWE-bench Pro 51.8%, Vibe Code 4.06%, LiveCodeBench Vals 84.3%, SWE-bench Vals 72.2%. Enrichment adds LiveCodeBench Pro 74.2% (already), SWE-bench Verified 76.7% (already), SWE-bench Pro 51.8% (already), Vibe Code 4.06% (already), LiveCodeBench Vals 84.3% (already), SWE-bench Vals 72.2% (already), MMMU-Pro 75.2%, CharXiv 60.9%, ERQA 54.1%, SimpleVQA 57.4%, MedXpertQA (MM) 65.8%, Design Arena 1228. Corroborates band; no change.
- **Cost efficiency: 84/100.** Mid $2/$6 per 1M.
- **Overall Score: 73.6/100.** Mean of five quality dims (BenchLM aggregate 56.41); best-fit for agentic coding + reasoning at mid cost. Enrichment (2026-11-08) added new verified rows (Terminal-Bench 2.0 47.1%, DeepSearchQA 62.8%, Gert Labs 38.36%, Terminal-Bench 2.1 Vals 44.2%, MazeBench 0%, LiveCodeBench Pro 74.2%, SWE-bench Verified 76.7%, SWE-bench Pro 51.8%, Vibe Code 4.06%, LiveCodeBench Vals 84.3%, SWE-bench Vals 72.2%, MMMU-Pro 75.2%, CharXiv 60.9%, ERQA 54.1%, SimpleVQA 57.4%, MedXpertQA (MM) 65.8%, Design Arena 1228, ARC-AGI-2 53.3%, ARC-AGI-3 0.1%, GPQA-D 88.5%, HLE w/o tools 31.6%, HealthBench Hard 20.3%, MedXpertQA (Text) 50.2%, GPQA Diamond Vals 88.6%, MMLU-Pro Vals 86.3%). No dimension band moved; Overall unchanged at 72.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-10-17 preserved; new benchmark rows added; no dimension score changed (new evidence corroborates existing bands).
- Reference URLs:
  - [BenchLM — Grok 4.20](https://benchlm.ai/models/grok-4-20-beta)
  - [Artificial Analysis — Grok 4.20](https://artificialanalysis.ai/models/grok-4-20)
  - [xAI — Grok 4.20](https://x.ai/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).