# Gemini 3 Flash — findings by Beam

- Source: Google/Gemini 3 Flash, `google/gemini-3-flash`
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-10-17)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Flash
- **Short description:** Google's non-reasoning Flash (Dec 17, 2025) with 1M context, 65K output, multimodal. Cheapest Gemini Flash; superseded by 3.5/3.6/3.7/3.8 Flash.
- **Provider / access:** Google AI Studio / Vertex AI `gemini-3-flash` (deprecated → 3.6 Flash); OpenRouter.
- **Release / knowledge:** Released 2025-12-17; knowledge cutoff not stated.
- **IDs:** `google/gemini-3-flash`
- **Context window:** 1,048,576 tokens; max output 65,536.
- **Modalities:** text, image, video, audio, PDF in; text out; reasoning no (non-reasoning); tool calling yes; structured output yes.
- **Pricing (as of 2026-11-08):** $0.50 / 1M input, $3.00 / 1M output; paid.
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Agentic public-lane (BenchLM): **32.4** (#88/128)
- Terminal-Bench 2.1 (Vals): **53.9%**
- Claw-Eval: **49.2%**
- Gert Labs: **56.63%**
- JobBench: **11.4%**
- τ²-bench results: **43.3%** (Artificial Analysis)
- Hermes Index / Hermes Bench: not reported
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

- Reasoning public-lane (BenchLM): **63.8** (unranked, 2 rows)
- ARC-AGI-1: not reported (75.00% for 3 Pro; 3 Flash lower)
- ARC-AGI-2: not reported
- GPQA Diamond (Vals): **87.9%**
- MMLU-Pro (Vals): **88.6%**
- FrontierMath v2 (Tiers 1-3): **51.228%**
- FrontierMath v2 (Tier 4): **17.073%**
- HLE: not reported
- Artificial Analysis Intelligence Index: **17.9%** (measured, updated 2026-11-07)
- AA-GPQA Diamond: **81.2%** (Artificial Analysis)
- AA-HLE: **15.0%** (Artificial Analysis)
- AA-Omniscience Index: **-4.3%**
- AA-Omniscience Accuracy: **45.8%**
- AA-Omniscience Hallucination Rate: **92.4%**
- AA-LCR: **55.3%** (Artificial Analysis)
- CritPt: **1.4%** (Artificial Analysis)
- MLCR-AA: not individually reported
- AA-IFBench: **55.1%** (Artificial Analysis)
- AA Global-MMLU-Lite: **92.7%** (Artificial Analysis)
- AA AIME 2025: not individually reported
- GPQA Diamond (Vals): **87.9%** (Vals AI)
- MMLU-Pro (Vals): **88.6%** (Vals AI)

Coding:

- Coding public-lane (BenchLM): **32.1** (#88/150)
- Vibe Code Bench: **20.20%**
- LiveCodeBench (Vals): **85.6%**
- SWE-bench (Vals): **75.0%**
- ParseBench: **74.07%** (ParseBench)
- AA-MMMU-Pro: **78.6%** (Artificial Analysis)
- Design Arena Website: **1194** (OpenRouter)

Long context:

- 1M window; MRCR: not reported.

Multimodal:

- Multimodal public-lane (BenchLM): **80.3** (unranked, 1 row)
- CharXiv: not reported
- ParseBench: **74.07%**
- AA-MMMU-Pro: **78.6%**
- Design Arena Website: **1194**

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 62/100.** Agentic lane #88/128 (32.4), Terminal-Bench 2.1 Vals 53.9%, Claw-Eval 49.2%, Gert Labs 56.63%; caps at JobBench 11.4%. Enrichment (2026-11-08): BenchLM aggregator (updated 2026-11-07) corroborates Terminal-Bench 2.1 Vals 53.9%, Claw-Eval 49.2%, Gert Labs 56.63%, JobBench 11.4%, τ²-bench 43.3%, AA Intelligence 17.9%, AA-GPQA 81.2%, AA-HLE 15.0%, AA-Omniscience -4.3%/45.8%/92.4%, AA-LCR 55.3%, CritPt 1.4%, AA-IFBench 55.1%, AA Global-MMLU-Lite 92.7%, GPQA Diamond Vals 87.9%, MMLU-Pro Vals 88.6%, ParseBench 74.07%, AA-MMMU-Pro 78.6%, Design Arena 1194, FrontierMath v2 51.228%/17.073%. Corroborates band; no change.
- **Reasoning: 64/100.** GPQA 87.9%, MMLU-Pro 88.6%, FrontierMath Tier4 17.073%; caps at no published ARC-AGI/HLE. Enrichment adds AA Intelligence 17.9%, AA-GPQA 81.2%, AA-HLE 15.0%, AA-Omniscience -4.3%/45.8%/92.4%, AA-LCR 55.3%, CritPt 1.4%, AA-IFBench 55.1%, AA Global-MMLU-Lite 92.7%, GPQA Diamond Vals 87.9%, MMLU-Pro Vals 88.6%, FrontierMath v2 51.228%/17.073%. Corroborates band; no change.
- **Context window: 78/100.** 1M window; caps at no published MRCR retrieval.
- **Multimodal: 78/100.** Text/image/video/audio/PDF in; multimodal lane 80.3. Enrichment adds ParseBench 74.07%, AA-MMMU-Pro 78.6%, Design Arena 1194. Corroborates band; no change.
- **Coding: 60/100.** LiveCodeBench Vals 85.6%, SWE-bench Vals 75.0%, Vibe Code 20.20%, coding lane #88/150 (32.1). Enrichment adds ParseBench 74.07%, AA-MMMU-Pro 78.6%, Design Arena 1194. Corroborates band; no change.
- **Cost efficiency: 92/100.** Very cheap $0.50/$3.00 per 1M.
- **Overall Score: 68/100.** Mean of five quality dims (BenchLM aggregate 54.27); best-fit for high-volume cheap multimodal. Enrichment (2026-11-08) added new verified rows (τ²-bench 43.3%; AA Intelligence 17.9%; AA-GPQA 81.2%; AA-HLE 15.0%; AA-Omniscience -4.3%/45.8%/92.4%; AA-LCR 55.3%; CritPt 1.4%; AA-IFBench 55.1%; AA Global-MMLU-Lite 92.7%; GPQA Diamond Vals 87.9%; MMLU-Pro Vals 88.6%; ParseBench 74.07%; AA-MMMU-Pro 78.6%; Design Arena 1194; FrontierMath v2 51.228%/17.073%). No dimension band moved; Overall unchanged at 68.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-10-17 preserved; new benchmark rows added; no dimension score changed (new evidence corroborates existing bands).
- Reference URLs:
  - [BenchLM — Gemini 3 Flash](https://benchlm.ai/models/gemini-3-flash)
  - [Artificial Analysis — Gemini 3 Flash](https://artificialanalysis.ai/models/gemini-3-flash)
  - [Google DeepMind — Gemini 3](https://blog.google/products-and-platforms/products/gemini/gemini-3/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).