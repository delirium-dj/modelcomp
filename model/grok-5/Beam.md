# Grok 5 — findings by Beam

- Source: xAI/Grok 5, `x-ai/grok-5`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 5
- **Short description:** xAI's next-gen model (Jul 9, 2026): 500K context. BenchLM 63.27. Terminal-Bench 2.1 83.3%. SWE-bench Pro 64.7%. AA Intelligence Index 38.8%. $2.00/$6.00 per 1M.
- **Provider / access:** xAI API; OpenRouter.
- **Release / knowledge:** Released 2026-07-09; knowledge cutoff not stated.
- **IDs:** `x-ai/grok-5`
- **Context window:** 500,000 tokens; max output not stated.
- **Modalities:** text, image in; text out; reasoning yes; tool calling yes. Proprietary.
- **Pricing (as of 2026-10-17):** $2.00 / 1M input, $6.00 / 1M output; paid.
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): **58.9** (Supported · #31/128)
- Terminal-Bench 2.1: **83.3%** (BenchLM)
- Terminal-Bench 3.0: **15.7%** (BenchLM)
- deepSwe: **53%** (BenchLM)
- Terminal-Bench 2.1 (Vals): **67.8%** (BenchLM)
- GDPval-AA: **44.2%** (Artificial Analysis)

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): **54.1** (#28/28)
- GPQA Diamond (Vals): **92.9%** (BenchLM)
- MMLU-Pro (Vals): **89.2%** (BenchLM)
- ARC-AGI-1: **85.67%** (BenchLM)
- ARC-AGI-2: **52.6%** (BenchLM)
- ARC-AGI-3: **0.3%** (BenchLM)
- AA Intelligence Index: **38.8%** (Artificial Analysis)
- AA-HLE: **42.7%** (Artificial Analysis)
- AA-LCR: **79.3%** (Artificial Analysis)
- CritPt: **15.4%** (Artificial Analysis)
- AA-Omniscience Index: **25.3%** (Artificial Analysis)

Coding:

- Coding public-lane (BenchLM): **55.7** (Supported · #30/150)
- SWE-bench Pro: **64.7%** (BenchLM)
- SWE Multilingual: **78%** (BenchLM)
- LiveCodeBench (Vals): **87.4%** (BenchLM)
- SWE-bench (Vals): **86.6%** (BenchLM)

Long context:

- 500K window; AA-LCR **79.3%** (Artificial Analysis); MRCR not reported.

Multimodal:

- Text/image in; multimodal lane not reported.

### Normalized scores (1–100)

- **Tool use: 70/100.** Agentic lane #31/128 (58.9), Terminal-Bench 2.1 83.3%, deepSwe 53%, Terminal-Bench 3.0 15.7%, GDPval-AA 44.2%; caps at Terminal-Bench 3.0 15.7%.
- **Reasoning: 68/100.** GPQA 92.9%, MMLU-Pro 89.2%, ARC-AGI-1 85.67%, ARC-AGI-2 52.6%, ARC-AGI-3 0.3%, AA Intelligence 38.8%, AA-LCR 79.3%, CritPt 15.4%; caps at ARC-AGI-3 0.3%.
- **Context window: 72/100.** 500K window; AA-LCR 79.3%; caps at no published MRCR.
- **Multimodal: 60/100.** Text/image in; caps at no verified multimodal benchmarks.
- **Coding: 70/100.** SWE-bench Pro 64.7%, SWE Multilingual 78%, LiveCodeBench 87.4%, SWE-bench 86.6%, coding lane #30/150 (55.7); caps at no published Terminal-Bench Hard/SciCode.
- **Cost efficiency: 84/100.** Mid $2.00/$6.00 per 1M.
- **Overall Score: 68/100.** Mean of five quality dims (BenchLM 63.27); best-fit for mid-cost agentic coding at mid cost.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (BenchLM, TL Dev Tech, xAI official); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings. Grok 4.5 is superseded by Grok 4.6 (Aug 12, 2026) and Grok 4.7 (Oct 2026).<|end|>>2>