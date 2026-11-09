# Gemma 4 31B — findings by Beam

- Source: Google/Gemma 4 31B, `google/gemma-4-31b`
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-10-17)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 31B
- **Short description:** Google's dense flagship (Mar 31, 2026): 31B params, 256K context. Text/image/video in. BenchLM 29.24 (#179/1016). MMLU Pro 85.2%, GPQA Diamond 84.3%, LiveCodeBench v6 80.0%, MMMU Pro 76.9%, MRCRv2 66.4%, AA-LCR 69.7%. Open weights (Apache 2.0). Free.
- **Provider / access:** HuggingFace `google/gemma-4-31b`; Google AI Studio; Ollama; DeepInfra.
- **Release / knowledge:** Released 2026-03-31; knowledge cutoff not stated.
- **IDs:** `google/gemma-4-31b`
- **Context window:** 256,000 tokens; max output 131,072.
- **Modalities:** text, image, video in; text out; reasoning yes; tool calling yes. Open weights (Apache 2.0).
- **Pricing (as of 2026-11-08):** Free (open weights); self-host. ($0.14/$0.40 per 1M on DeepInfra.)
- **Architecture:** Dense, 31B params, 60 layers, 256K context, Apache 2.0.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Agentic public-lane (BenchLM): **19.7** (Estimated · #109/128)
- b3 Agent Security: **83.0%** (Mistral)
- Cyber Misuse Refusal: **84.0%** (Mistral)
- τ²-bench results: **59.9%** (Artificial Analysis)
- GDPval-AA: **5.9%** normalized / 755 Elo (Artificial Analysis)
- Gert Labs: **35.26%** (Gert Labs)
- AA Agentic Index: **6.7%** (Artificial Analysis)
- GDPval-AA: **755 Elo** (Artificial Analysis)
- AA ITBench: **37.3%** (Artificial Analysis)

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): **66.6** (Unranked · 3 rankable rows)
- MMLU Pro: **85.2%** (Google model card)
- GPQA Diamond: **84.3%** (Google model card)
- HLE: **26.5%** (Google model card)
- HLE w/o tools: **19.5%** (Google model card)
- MRCRv2: **66.4%** (Google model card)
- AA-LCR: **69.7%** (Artificial Analysis)
- CritPt: **1.4%** (Artificial Analysis)
- AA Intelligence Index: **4.4%** (measured, updated 2026-11-07)
- AA-GPQA Diamond: **85.7%** (Artificial Analysis)
- AA-HLE: **23.6%** (Artificial Analysis)
- AA-Omniscience Index: **-48.5%**
- AA-Omniscience Accuracy: **19.9%**
- AA-Omniscience Hallucination Rate: **85.5%**
- AA-IFBench: **75.6%** (Artificial Analysis)
- GPQA: **84.3%** (Reported upstream source)
- MMLU-Pro: **85.2%** (Gemma 4 31B model card)
- HLE: **26.5%** (Gemma 4 31B model card)
- HLE w/o tools: **19.5%** (Gemma 4 31B model card)
- AA MMLU-Pro: not individually reported
- AA Global-MMLU-Lite: not individually reported
- AA AIME 2025: not individually reported
- FrontierMath v2: not individually reported

Coding:

- Coding public-lane (BenchLM): **31.7** (Supported · #89/150)
- LiveCodeBench v6: **80.0%** (Google model card)
- SWE-Rebench: **41.6%** (BenchLM)
- React Native Evals: **75.2%** (BenchLM)
- Codeforces ELO: **2150** (Google model card)
- AA Coding Index: not reported
- AA-SciCode: not reported
- Terminal-Bench Hard: **27.08%** (NVIDIA NVFP4)
- AA-SciCode: **45.5%** (Artificial Analysis)
- AA Coding Index: **43.4%** (Artificial Analysis)

Long context:

- 256K window; MRCRv2 **66.4%** (Google model card); AA-LCR **69.7%** (Artificial Analysis).

Multimodal:

- Multimodal public-lane (BenchLM): **74.3** (#26/54)
- MMMU Pro: **76.9%** (Google model card)
- MATH-Vision: **85.6%** (Google model card)
- MedXPertQA MM: **61.3%** (Google model card)
- OmniDocBench 1.5: **0.131** (Google model card, lower is better)
- ParseBench: **62.40%** (ParseBench)
- MMMU-Pro: **76.9%** (Gemma 4 31B model card)
- AA-MMMU-Pro: **73.4%** (Artificial Analysis)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 54/100.** Agentic lane #109/128 (19.7), Gert Labs 35.26%; caps at no published Terminal-Bench/OSWorld. Enrichment (2026-11-08): BenchLM aggregator (updated 2026-11-07) corroborates b3 Agent Security 83.0%, Cyber Misuse Refusal 84.0%, τ²-bench 59.9%, GDPval-AA 5.9% normalized/755 Elo, Gert Labs 35.26%, AA Agentic Index 6.7%, GDPval-AA 755 Elo, AA ITBench 37.3%, AA Intelligence 4.4%, AA-GPQA 85.7%, AA-HLE 23.6%, AA-Omniscience -48.5%/19.9%/85.5%, AA-LCR 69.7%, CritPt 1.4%, GPQA 84.3%, MMLU-Pro 85.2%, HLE 26.5%, HLE w/o tools 19.5%, AA-IFBench 75.6%, LiveCodeBench v6 80.0%, SWE-Rebench 41.6%, React Native Evals 75.2%, Codeforces 2150, Terminal-Bench Hard 27.08%, AA-SciCode 45.5%, AA Coding Index 43.4%, ParseBench 62.40%, MMMU Pro 76.9%, AA-MMMU-Pro 73.4%. Corroborates band; no change.
- **Reasoning: 68/100.** MMLU Pro 85.2%, GPQA 84.3%, HLE 26.5%/19.5%, MRCRv2 66.4%, AA-LCR 69.7%, CritPt 1.4%; caps at CritPt 1.4%. Enrichment adds AA Intelligence 4.4% (already), AA-GPQA 85.7% (already), AA-HLE 23.6% (already), AA-Omniscience -48.5%/19.9%/85.5% (already), AA-LCR 69.7% (already), CritPt 1.4% (already), AA-IFBench 75.6% (already). Corroborates band; no change.
- **Context window: 66/100.** 256K window; MRCRv2 66.4%, AA-LCR 69.7%.
- **Multimodal: 76/100.** Text/image/video in; MMMU Pro 76.9%, MATH-Vision 85.6%, MedXPertQA 61.3%; caps at no published CharXiv. Enrichment adds ParseBench 62.40%, MMMU Pro 76.9% (already), AA-MMMU-Pro 73.4%. Corroborates band; no change.
- **Coding: 66/100.** LiveCodeBench 80.0%, SWE-Rebench 41.6%, React Native 75.2%, Codeforces 2150, Terminal-Bench Hard 27.08%; caps at SWE-Rebench 41.6%. Enrichment adds LiveCodeBench 80.0% (already), SWE-Rebench 41.6% (already), React Native 75.2% (already), Codeforces 2150 (already), Terminal-Bench Hard 27.08% (already), AA-SciCode 45.5% (already), AA Coding Index 43.4% (already), ParseBench 62.40%, AA-MMMU-Pro 73.4%. Corroborates band; no change.
- **Cost efficiency: 100/100.** Free (open weights).
- **Overall Score: 66/100.** Mean of five quality dims (BenchLM 39.88); best-fit for local multimodal reasoning at zero cost. Enrichment (2026-11-08) added new verified rows (b3 Agent Security 83.0%, Cyber Misuse Refusal 84.0%, τ²-bench 59.9%, GDPval-AA 5.9% normalized/755 Elo, Gert Labs 35.26%, AA Agentic Index 6.7%, GDPval-AA 755 Elo, AA ITBench 37.3%, AA Intelligence 4.4%, AA-GPQA 85.7%, AA-HLE 23.6%, AA-Omniscience -48.5%/19.9%/85.5%, AA-LCR 69.7%, CritPt 1.4%, GPQA 84.3%, MMLU-Pro 85.2%, HLE 26.5%, HLE w/o tools 19.5%, AA-IFBench 75.6%, LiveCodeBench v6 80.0%, SWE-Rebench 41.6%, React Native Evals 75.2%, Codeforces 2150, Terminal-Bench Hard 27.08%, AA-SciCode 45.5%, AA Coding Index 43.4%, ParseBench 62.40%, MMMU Pro 76.9%, AA-MMMU-Pro 73.4%). No dimension band moved; Overall unchanged at 66.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-10-17 preserved; new benchmark rows added; no dimension score changed (new evidence corroborates existing bands).
- Reference URLs:
  - [BenchLM — Gemma 4 31B](https://benchlm.ai/models/gemma-4-31b)
  - [Artificial Analysis — Gemma 4 31B](https://artificialanalysis.ai/models/gemma-4-31b)
  - [Google — Gemma 4](https://ai.google.dev/gemma)
  - [Gemma 4 31B — HuggingFace](https://huggingface.co/google/gemma-4-31B-it)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).