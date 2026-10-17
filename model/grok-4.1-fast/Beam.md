# Grok 4.1 Fast — findings by Beam

- Source: xAI/Grok 4.1 Fast, `x-ai/grok-4.1-fast`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1 Fast
- **Short description:** xAI's fast model (Nov 19, 2025): 2M context, 30K max output. Text/image in. BenchLM 36.45 (#154 of 954, non-reasoning) / 45.82 (#117, reasoning). AA Intelligence Index not reported. AA-IFBench 36.5% (non-reasoning) / 52.7% (reasoning). $0.20/$0.50 per 1M.
- **Provider / access:** xAI API; OpenRouter.
- **Release / knowledge:** Released 2025-11-19; knowledge cutoff not stated.
- **IDs:** `x-ai/grok-4.1-fast` (non-reasoning) / `x-ai/grok-4.1-fast-reasoning`
- **Context window:** 2,000,000 tokens; max output 30,000.
- **Modalities:** text, image in; text out; reasoning yes (reasoning variant); tool calling yes. Proprietary.
- **Pricing (as of 2026-10-17):** $0.20 / 1M input, $0.50 / 1M output; paid.
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): not individually reported
- AA-IFBench: **36.5%** (non-reasoning) / **52.7%** (reasoning) (Artificial Analysis)

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): not individually reported
- AA Intelligence Index: not reported
- LMArena Elo: **1483** (#1, Thinking) / **1465** (#2, Non-Thinking) (historical, Nov 2025)
- Hallucination rate: **~4.2%** (down ~65% from Grok 4's ~12.1%)
- HLE: not reported
- MMLU-Pro: not reported
- GPQA: not reported

Coding:

- Coding public-lane (BenchLM): not individually reported
- LiveCodeBench: not reported
- SWE-bench: not reported
- Terminal-Bench: not reported

Long context:

- 2M window; MRCR: not reported.

Multimodal:

- Text/image in; multimodal lane not reported.

### Normalized scores (1–100)

- **Tool use: 54/100.** AA-IFBench 36.5%/52.7%; caps at no published Terminal-Bench/OSWorld.
- **Reasoning: 58/100.** LMArena Elo 1483 (#1); caps at no published GPQA/HLE/MMLU-Pro.
- **Context window: 86/100.** 2M window; caps at no published MRCR.
- **Multimodal: 60/100.** Text/image in; caps at no verified multimodal benchmarks.
- **Coding: 54/100.** No verified coding benchmarks; provisional.
- **Cost efficiency: 96/100.** Very cheap $0.20/$0.50 per 1M.
- **Overall Score: 62.4/100.** Mean of five quality dims (BenchLM 36.45/45.82); best-fit for ultra-cheap long-context at low cost. (Superseded by Grok 4.5, Grok 4.6.)

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (BenchLM, xAI official, The AI Rankings, Ofox.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings. Grok 4.1 Fast has two variants: non-reasoning (BenchLM 36.45) and reasoning (BenchLM 45.82). 2M context window. Superseded by Grok 4.2, Grok 4.3, Grok 4.5, Grok 4.6. LMArena #1 (Thinking, 1483 Elo) historically.<|end|>>2>