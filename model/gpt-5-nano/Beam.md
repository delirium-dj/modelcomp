# GPT-5 Nano — findings by Beam

- Source: OpenAI/GPT-5 Nano, `openai/gpt-5-nano`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5 Nano
- **Short description:** OpenAI's fastest, cheapest GPT-5 (Aug 7, 2025): 400K context, 128K output. Text/image in. SWE-bench Verified 25.0%. GPQA Diamond 70.9%. MATH 65.0%. BenchLM not computed (0 benchmarks). $0.05/$0.40 per 1M.
- **Provider / access:** OpenAI API `gpt-5-nano`; OpenRouter.
- **Release / knowledge:** Released 2025-08-07; knowledge cutoff May 31, 2024.
- **IDs:** `openai/gpt-5-nano`
- **Context window:** 400,000 tokens; max output 128,000.
- **Modalities:** text, image in; text out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-10-17):** $0.05 / 1M input, $0.40 / 1M output; paid.
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): not computed (0 benchmarks)
- τ²-bench: not reported
- OSWorld: not reported

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): not computed
- GPQA Diamond: **70.9%** (Serenities AI)
- MATH: **65.0%** (Serenities AI)
- HLE: not reported
- MMLU-Pro: not reported
- AA Intelligence Index: not reported

Coding:

- Coding public-lane (BenchLM): not computed
- SWE-bench Verified: **25.0%** (Serenities AI)
- LiveCodeBench: not reported
- Terminal-Bench: not reported

Long context:

- 400K window; MRCR: not reported.

Multimodal:

- Text/image in; multimodal lane not reported.

### Normalized scores (1–100)

- **Tool use: 50/100.** No verified agentic benchmarks; provisional (BenchLM not computed).
- **Reasoning: 60/100.** GPQA 70.9%, MATH 65.0%; caps at no published HLE/MMLU-Pro.
- **Context window: 70/100.** 400K window; caps at no published MRCR.
- **Multimodal: 60/100.** Text/image in; caps at no verified multimodal benchmarks.
- **Coding: 50/100.** SWE-bench 25.0%; caps at no published LiveCodeBench/Terminal-Bench.
- **Cost efficiency: 98/100.** Very cheap $0.05/$0.40 per 1M.
- **Overall Score: 58/100.** Provisional mean; low-confidence (BenchLM not computed, 0 benchmarks). Self-exclusion candidate (`.md.excluded`) if zero verified benchmarks confirmed. (GPT-5 Nano has 3 verified benchmarks from Serenities AI, so not excluded.)

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (OpenAI docs, BenchLM, Serenities AI); scores are normalized 1–100 interpretations, not official vendor scores. BenchLM has no sourced benchmarks for this model.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings. If zero verified benchmarks confirmed, save as `.md.excluded` instead. (GPT-5 Nano has 3 verified benchmarks, so not excluded.)<|end|>>2>