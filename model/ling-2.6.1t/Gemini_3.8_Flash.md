# Ling-2.6-1T — findings by Gemini 3.8 Flash

- Source: opencode/ling-2.6.1t
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Ling-2.6-1T
- **Short description:** InclusionAI's trillion-parameter instruct (non-thinking) flagship — 1T total / 63B active sparse MoE with hybrid MLA + linear attention and fast-thinking compressed CoT. MIT open weights.
- **Provider / access:** opencode/ling-2.6.1t
- **Release / knowledge:** 2026 release; knowledge cutoff 2026.
- **IDs:** opencode/ling-2.6.1t (Zen tier available)
- **Context window:** 262,144 total
- **Modalities:** Text in/out
- **Pricing (as of 2026-10-11):** Hosted ~$0.30/$2.50 per 1M (AA); MIT open weights
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

> Rows are InclusionAI's tech report / HF card (self-reported); Artificial Analysis Intelligence Index is the only independent composite.

Coding / agent:

- SWE-bench Verified **72.20** (self); LiveCodeBench-v6 65.58; terminal-bench 2.0 40.45
- PinchBench 85.24; ClawEval 51.00; BFCL-v4 70.64; Tau2-Bench 78.36 (self)

Reasoning / knowledge:

- GPQA-Diamond **76.17**; SuperGPQA 58.32; C-SimpleQA 76.53; SimpleQA-Verified 31.50; HLE 10.06
- AIME 2026 **87.40**; HMMT Nov25 81.93; IMO-AnswerBench 65.81; ARCPrize 50.94; bbeh 52.37
- IFBench 57.62; LongBenchV2 48.31
- Artificial Analysis Intelligence Index: **17** (AA, non-reasoning) — conflict: 34 (self-reported card, likely reasoning variant)

Long context:

- 262K window; MRCR (16K–256K) **80.37** (self); no independent RULER published.

### Normalized scores (1–100)

- **Tool use: 72/100.** Normalized assessment of autonomous tool execution and function calling.
- **Reasoning: 65/100.** Normalized assessment of complex multi-step reasoning and deductive analysis.
- **Context window: 75/100.** Effective retrieval fidelity across context capacity (262,144 total).
- **Multimodal: 15/100.** Input/output modality comprehension (Text in/out).
- **Coding: 72/100.** Verified software engineering and code generation capability.
- **Cost efficiency: 92/100.** Value proposition relative to performance and pricing structure.
- **Overall Score: 59.8/100.** Balanced quality capability across the 5 core dimensions.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
