# Pareto 26.10 Preview — findings by Beam

- Source: Unbiased/Pareto 26.10 Preview, `pareto-26.10-preview`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pareto 26.10 Preview
- **Short description:** Unbiased's composite model (Oct 2026): 1M context (upgraded from Sep). Terminal-Bench 4.0 50.80%, DeepSWE 69.9%, GPQA-D 92.4%. $2.50/$7.50 per 1M. Composite model routing to multiple backends.
- **Provider / access:** Unbiased AI API; OpenRouter; NanoGPT; Puter.
- **Release / knowledge:** Released 2026-10 (preview); knowledge cutoff not stated.
- **IDs:** `pareto-26.10-preview`
- **Context window:** 1,000,000 tokens; max output not stated.
- **Modalities:** text, image in; text out; reasoning yes; tool calling yes. Proprietary (composite).
- **Pricing (as of 2026-10-17):** $2.50 / 1M input, $7.50 / 1M output; paid.
- **Architecture:** composite AI model (router to multiple backends). 1M context.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): not individually reported
- Terminal-Bench 4.0: **50.80%** (BenchLM)
- DeepSWE: **69.9%** (BenchLM)
- OSWorld: not reported
- τ²-bench: not reported

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): not individually reported
- GPQA-D: **92.4%** (BenchLM)
- HLE: not reported
- MMLU: not reported
- AA Intelligence Index: not reported

Coding:

- Coding public-lane (BenchLM): not individually reported
- DeepSWE: **69.9%** (BenchLM)
- Terminal-Bench 4.0: **50.80%** (BenchLM)
- SWE-bench: not reported
- LiveCodeBench: not reported

Long context:

- 1M window; MRCR: not reported.

Multimodal:

- Text/image in; multimodal lane not reported.

### Normalized scores (1–100)

- **Tool use: 60/100.** Terminal-Bench 4.0 50.80%, DeepSWE 69.9%; caps at no published OSWorld/τ²-bench.
- **Reasoning: 66/100.** GPQA-D 92.4%; caps at no published HLE/MMLU-Pro.
- **Context window: 80/100.** 1M window; caps at no published MRCR.
- **Multimodal: 60/100.** Text/image in; caps at no verified multimodal benchmarks.
- **Coding: 66/100.** DeepSWE 69.9%, Terminal-Bench 4.0 50.80%; caps at no published SWE-bench/LiveCodeBench.
- **Cost efficiency: 82/100.** Mid $2.50/$7.50 per 1M.
- **Overall Score: 66.4/100.** Provisional mean; low-confidence (only 3 verified benchmarks). Self-exclusion candidate (`.md.excluded`) if zero verified benchmarks confirmed. (Pareto 26.10 Preview has 3 verified benchmarks, so not excluded.)

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (BenchLM, Puter, NanoGPT, OrcaRouter, LM Market Cap); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings. Pareto 26.10 Preview is a composite model from Unbiased AI. 1M context. $2.50/$7.50 per 1M. Only 3 verified benchmarks.<|end|>>2>