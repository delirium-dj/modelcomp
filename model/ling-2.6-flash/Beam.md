# Ling 2.6 Flash — findings by Beam

- Source: InclusionAI/Ling 2.6 Flash, `inclusionai/ling-2.6-flash`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 2.6 Flash
- **Short description:** InclusionAI's MoE model (Apr 2026): 104B total / 7.4B active, 262K context. BenchLM 32.43 (#172 of 954). AA Intelligence Index 14.1. GPQA 59.3%, HLE 6.3%. τ²-bench 86%. Open weights (MIT). $0.07/$0.22 per 1M (Ling 3.0 Flash pricing).
- **Provider / access:** inclusionAI API; OpenRouter; HuggingFace.
- **Release / knowledge:** Released 2026-04 (preview); knowledge cutoff not stated.
- **IDs:** `inclusionai/ling-2.6-flash`
- **Context window:** 262,144 tokens; max output not stated.
- **Modalities:** text in; text out; reasoning no; tool calling yes. Open weights (MIT).
- **Pricing (as of 2026-10-17):** $0.07 / 1M input, $0.22 / 1M output (Ling 3.0 Flash pricing); paid.
- **Architecture:** MoE, 104B total / 7.4B active, hybrid linear attention (1:7 MLA + Lightning Linear), 262K context, MIT.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): Coming soon (not computed)
- τ²-bench: **86%** (Artificial Analysis)
- GDPval-AA: **0.0%** / **550** (Artificial Analysis)

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): **47.4** (Unranked · 2 rankable rows)
- GPQA: **59%** / **59.3%** (Artificial Analysis)
- HLE: **6.3%** (Artificial Analysis)
- AA Intelligence Index: **14.1%** (Artificial Analysis)
- AA-LCR: **31.3%** (Artificial Analysis)
- CritPt: **0.0%** (Artificial Analysis)
- AA-Omniscience Index: **-66.1%** (Artificial Analysis)
- AA-Omniscience Accuracy: **15.6%** (Artificial Analysis)
- AA-Omniscience Hallucination Rate: **96.7%** (Artificial Analysis)
- IFBench: **57%** / **57.4%** (Artificial Analysis)

Coding:

- Coding public-lane (BenchLM): **16.3** (Estimated · #128/150)
- SciCode: **27%** (Artificial Analysis)
- AA Coding Index: **25.3%** (Artificial Analysis)

Long context:

- 262K window; AA-LCR **31.3%** (Artificial Analysis); MRCR not reported.

Multimodal:

- Text-only. Multimodal lane not applicable.

### Normalized scores (1–100)

- **Tool use: 54/100.** τ²-bench 86%, GDPval-AA 0.0%/550; caps at GDPval-AA 0.0%.
- **Reasoning: 54/100.** GPQA 59.3%, HLE 6.3%, AA Intelligence 14.1%, AA-LCR 31.3%, CritPt 0.0%, IFBench 57.4%; caps at CritPt 0.0%.
- **Context window: 60/100.** 262K window; AA-LCR 31.3%; caps at no published MRCR.
- **Multimodal: 40/100.** Text-only.
- **Coding: 48/100.** SciCode 27%, AA Coding 25.3%; caps at SciCode 27%.
- **Cost efficiency: 96/100.** Cheap $0.07/$0.22 per 1M.
- **Overall Score: 51.2/100.** Mean of five quality dims (BenchLM 32.43, AA Intelligence 14.1); best-fit for ultra-cheap reasoning at low cost. (Superseded by Ling 3.0 Flash, Ling 3.1 Flash.)

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (InclusionAI official, BenchLM, Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings. Ling 2.6 Flash is superseded by Ling 3.0 Flash (Jul 23, 2026) and Ling 3.1 Flash (Sep 29, 2026). MIT open weights.<|end|>>2>