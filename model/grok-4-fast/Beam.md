# Grok 4 Fast — findings by Beam

- Source: xAI/Grok 4 Fast, `x-ai/grok-4-fast`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4 Fast
- **Short description:** xAI's fast model (Sep 19, 2025): 2M context, 2M output. Text/image in. BenchLM 36.45 (#154 of 954, non-reasoning) / 43.47 (#127, reasoning). AA Intelligence Index 17.9 (reasoning). GPQA Diamond 85.35% (Vals, reasoning). $0.20/$0.50 per 1M.
- **Provider / access:** xAI API; OpenRouter.
- **Release / knowledge:** Released 2025-09-19; knowledge cutoff not stated.
- **IDs:** `x-ai/grok-4-fast` (non-reasoning) / `x-ai/grok-4-fast-reasoning`
- **Context window:** 2,000,000 tokens; max output 2,000,000.
- **Modalities:** text, image in; text out; reasoning yes (reasoning variant); tool calling yes. Proprietary.
- **Pricing (as of 2026-10-17):** $0.20 / 1M input, $0.50 / 1M output; paid.
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): not individually reported (non-reasoning)
- τ²-bench: **65.8%** (Artificial Analysis, reasoning)
- OSWorld: not reported

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): not individually reported
- GPQA Diamond: **62.12%** (Vals, non-reasoning) / **85.35%** (Vals, reasoning)
- MMLU Pro: **70.34%** (Vals, non-reasoning) / **79.70%** (Vals, reasoning)
- MMMU Pro: **63.41%** (Vals, non-reasoning) / **72.78%** (Vals, reasoning)
- HLE: not reported
- AA Intelligence Index: not reported (non-reasoning) / **17.9%** (reasoning)
- AA-LCR: **73.7%** (reasoning, Artificial Analysis)
- CritPt: **2.9%** (reasoning, Artificial Analysis)
- AA-IFBench: **50.5%** (reasoning, Artificial Analysis)

Coding:

- Coding public-lane (BenchLM): not individually reported
- LiveCodeBench: **46.09%** (Vals, non-reasoning) / **78.97%** (Vals, reasoning)
- Vibe Code Bench v1.1: **0.00%** (Vals, non-reasoning)
- SWE-bench: **45.40%** (Vals, non-reasoning)
- Terminal-Bench 2.0: **29.21%** (Vals, non-reasoning)

Long context:

- 2M window; AA-LCR **73.7%** (reasoning); MRCR not reported.

Multimodal:

- Text/image in; AA-MMMU-Pro **61.8%** (reasoning, Artificial Analysis).

### Normalized scores (1–100)

- **Tool use: 58/100.** τ²-bench 65.8%; caps at no published Terminal-Bench/OSWorld for reasoning variant.
- **Reasoning: 64/100.** GPQA 85.35%, MMLU Pro 79.70%, AA Intelligence 17.9%, AA-LCR 73.7%, CritPt 2.9%; caps at CritPt 2.9%.
- **Context window: 84/100.** 2M window; AA-LCR 73.7%; caps at no published MRCR.
- **Multimodal: 64/100.** Text/image in; AA-MMMU-Pro 61.8%; caps at no verified multimodal benchmarks.
- **Coding: 62/100.** LiveCodeBench 78.97%, SWE-bench 45.40%, Vibe Code 0.00%; caps at Vibe Code 0.00%.
- **Cost efficiency: 96/100.** Very cheap $0.20/$0.50 per 1M.
- **Overall Score: 66.4/100.** Mean of five quality dims (BenchLM 36.45/43.47); best-fit for ultra-cheap long-context at low cost. (Superseded by Grok 4.1 Fast, Grok 4.5, Grok 4.6.)

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (xAI official, BenchLM, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings. Grok 4 Fast has two variants: non-reasoning (BenchLM 36.45) and reasoning (BenchLM 43.47). 2M context window. Superseded by Grok 4.1 Fast, Grok 4.5, Grok 4.6.<|end|>>2>