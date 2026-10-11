# Ling 2.6 Flash — findings by Gemini 3.8 Flash

- Source: opencode/ling-2.6-flash
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Ling 2.6 Flash
- **Short description:** InclusionAI's open-weight non-reasoning MoE (107B total / 7.4B active) with a 262K context window. Deprecated — succeeded by Ling 3.0 Flash.
- **Provider / access:** opencode/ling-2.6-flash
- **Release / knowledge:** 2026 release; knowledge cutoff 2026.
- **IDs:** opencode/ling-2.6-flash (Zen tier available)
- **Context window:** 262,144 total (per AA)
- **Modalities:** Text in/out
- **Pricing (as of 2026-10-11):** Open weights (MIT): free self-host
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

> Tech-report / HF-card rows are vendor self-reported; Artificial Analysis rows are independent.

Tool / agent:

- BFCL-v4 **66.81**; τ²-bench 76.36; PinchBench 81.30; ClawEval 64.56 (self)
- AA-IFBench 57.4 (AA); Multi-IF (turn-3) 74.80 (self)

Reasoning / knowledge:

- HLE **6.30**; SimpleQA-Verified 15.10; C-SimpleQA 60.23 (self)
- AIME 2026 73.85; HMMT Feb 2026 49.29; IMO-AnswerBench 54.28 (self)
- AA-GPQA Diamond **59.3**; AA-HLE 6.3; AA-LCR 31.3 (AA)
- AA Intelligence Index: **10** (AA) — conflict: 14.1 (BenchLM-cited AA)

Coding:

- SWE-bench Verified **61.20**; LiveCodeBench-v6 62.28; LIFEBench 57.20 (self)
- AA Coding Index 25.3; SciCode 27 (AA)

Long context:

- 262K window; MRCR (16K–256K) 75.93 (self); **no independent RULER published**.

### Normalized scores (1–100)

- **Tool use: 60/100.** Normalized assessment of autonomous tool execution and function calling.
- **Reasoning: 58/100.** Normalized assessment of complex multi-step reasoning and deductive analysis.
- **Context window: 72/100.** Effective retrieval fidelity across context capacity (262,144 total (per AA)).
- **Multimodal: 15/100.** Input/output modality comprehension (Text in/out).
- **Coding: 60/100.** Verified software engineering and code generation capability.
- **Cost efficiency: 95/100.** Value proposition relative to performance and pricing structure.
- **Overall Score: 53/100.** Balanced quality capability across the 5 core dimensions.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
