# Ling 2.6.1T — findings by Beam

- Source: InclusionAI/Ling 2.6.1T, `inclusionai/ling-2.6.1t`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 2.6.1T
- **Short description:** InclusionAI's large MoE (Apr 23, 2026): 1T total parameters, 262K context. TAU2-bench 89.8%. AIME26 and SWE-bench Verified (SOTA claims). $0.07–$0.30 / $0.63–$0.90 per 1M. AA Intelligence Index 17.
- **Provider / access:** inclusionAI API; OpenRouter; Magica.
- **Release / knowledge:** Released 2026-04-23; knowledge cutoff not stated.
- **IDs:** `inclusionai/ling-2.6.1t`
- **Context window:** 262,144 tokens; max output not stated.
- **Modalities:** text in; text out; reasoning yes; tool calling yes. Proprietary.
- **Pricing (as of 2026-10-17):** $0.07–$0.30 / 1M input, $0.63–$0.90 / 1M output; paid.
- **Architecture:** MoE, 1T total parameters, 262K context.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): not individually reported
- TAU2-bench: **89.8%** (AI Flash Report)
- Tool calling: supported

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): not individually reported
- AA Intelligence Index: **17** (Artificial Analysis)
- AIME26: SOTA (OpenRouter claim)
- HLE: not reported
- MMLU-Pro: not reported

Coding:

- Coding public-lane (BenchLM): not individually reported
- SWE-bench Verified: SOTA (OpenRouter claim)
- LiveCodeBench: not reported
- Terminal-Bench: not reported

Long context:

- 262K window; MRCR: not reported.

Multimodal:

- Text-only. Multimodal lane not applicable.

### Normalized scores (1–100)

- **Tool use: 64/100.** TAU2-bench 89.8%; caps at no published Terminal-Bench/OSWorld.
- **Reasoning: 60/100.** AA Intelligence 17; caps at no published GPQA/HLE/MMLU-Pro.
- **Context window: 66/100.** 262K window; caps at no published MRCR.
- **Multimodal: 40/100.** Text-only.
- **Coding: 64/100.** SWE-bench Verified SOTA (unverified claim); caps at no published LiveCodeBench/Terminal-Bench.
- **Cost efficiency: 92/100.** Cheap $0.07–$0.30 / $0.63–$0.90 per 1M.
- **Overall Score: 58.8/100.** Mean of five quality dims (AA Intelligence 17); best-fit for large-context reasoning at low cost. Low-confidence (SOTA claims unverified, limited benchmarks).

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (OpenRouter, Magica, AI Flash Report, Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores. SWE-bench Verified and AIME26 SOTA claims are from marketing, not verified.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings. Ling 2.6.1T is superseded by Ling 3.0 Flash and Ling 3.1 Flash.<|end|>>2>