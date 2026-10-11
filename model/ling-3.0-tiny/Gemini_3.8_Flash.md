# Ling 3.0 Tiny — findings by Gemini 3.8 Flash

- Source: opencode/ling-3.0-tiny
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Ling 3.0 Tiny
- **Short description:** InclusionAI's open-weight reasoning MoE (7.9B total / 1.3B active) for efficient deployment — very small model with 262K context, free to use.
- **Provider / access:** opencode/ling-3.0-tiny
- **Release / knowledge:** 2026 release; knowledge cutoff 2026.
- **IDs:** opencode/ling-3.0-tiny (Zen tier available)
- **Context window:** 262,144 total (per AA)
- **Modalities:** Text in/out; reasoning
- **Pricing (as of 2026-10-11):** Free ($0/$0 per 1M); MIT open weights
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

> Artificial Analysis rows are independent; "model card" rows are self-reported.

- AA Intelligence Index: **11.1** (AA v4.3.2) — conflict: 25 (self-reported card, v4.1.1)
- AA-GPQA Diamond **73.4**; AA-HLE 9.3; AA-LCR 60.3; AA-SciCode 24.2; CritPt 0.0 (AA)
- GDPval-AA normalized 3.2; AA-Omniscience Index −19.3 / Accuracy 8.5 / Hallucination 30.5 (AA)
- AA Agentic Index 16 (self-reported card)
- Output speed: >160 t/s (self-reported, AA testing) vs 55.9 t/s (AA provider median); ~100–105 t/s on DGX Spark, ~86–90 t/s on M4 Pro (card)

Long context:

- 262K window; AA-LCR 60.3; **no MRCR/RULER published**.

### Normalized scores (1–100)

- **Tool use: 50/100.** Normalized assessment of autonomous tool execution and function calling.
- **Reasoning: 58/100.** Normalized assessment of complex multi-step reasoning and deductive analysis.
- **Context window: 70/100.** Effective retrieval fidelity across context capacity (262,144 total (per AA)).
- **Multimodal: 15/100.** Input/output modality comprehension (Text in/out; reasoning).
- **Coding: 50/100.** Verified software engineering and code generation capability.
- **Cost efficiency: 100/100.** Value proposition relative to performance and pricing structure.
- **Overall Score: 48.6/100.** Balanced quality capability across the 5 core dimensions.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
