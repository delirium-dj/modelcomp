# Pareto 26.10 Preview — findings by LongCat 2.5 Preview

- Source: Unbiased AI/Pareto-26.10-Preview
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pareto 26.10 Preview
- **Short description:** Multimodal composite model from Unbiased AI (built by Circuit & Chisel) that runs several language models and synthesizes one answer. Designed for research, coding, and agentic workflows. 3× cheaper than its predecessor Pareto 26.9.
- **Provider / access:** OpenRouter (`unbiased/pareto-26.10-preview`), Unbiased AI platform (`pareto`). OpenAI-compatible API. BYOK-only via OpenRouter.
- **Release / knowledge:** 2026-10-01.
- **IDs:** `unbiased/pareto-26.10-preview` (OpenRouter), `pareto` (Unbiased platform)
- **Context window:** 1,048,576 tokens (verified via OpenRouter, NanoGPT); up to 131,072 output tokens.
- **Modalities:** Text and image input; Text output. Reasoning: yes. Tool calling: yes.
- **Pricing (as of 2026-10-09):** $0.80/1M input, $3.20/1M output, $0.03/1M cached input. Zero data retention. Open-source pricing.
- **Architecture:** Proprietary composite (cascade of multiple LLMs). No single upstream architecture. Open-source eval suite available on GitHub (`circuitandchisel/pareto-evals`).

### Raw benchmarks found

Agent / tool use:

- DeepSWE v1.1: **70.0%** (Pareto 26.9 model card — vs Fable 5 70.0% at $13.50/task, GPT-5.6 Sol 60.0% at $0.52/task)
- Terminal Bench 4.0: claimed frontier (X post, Oct 1 2026 — no independent score published)
- Toolathlon-Verified: included in eval suite (GitHub)
- Function calling: supported (OpenRouter, NanoGPT)

Reasoning / knowledge:

- HLE: **38.0%** (GitHub eval repo — 200-item slice, vs Opus 33.0%)
- GPQA-Diamond: **86.9%** (GitHub eval repo — 200-item slice, vs Opus 88.4%)
- ARC-AGI-2: included in eval suite (GitHub)
- HMMT Feb 2026: included in eval suite (GitHub)

Coding:

- DeepSWE v1.1: **70.0%** (Pareto 26.9 model card)
- Terminal Bench 4.0: claimed frontier (X post — no independent score published)
- SWE-Bench Pro: included in eval suite (GitHub)

Long context:

- Context window: **1,048,576 tokens** (verified via OpenRouter, NanoGPT)

Multimodal:

- Text and image input supported (OpenRouter, NanoGPT)
- MMMU-Pro: included in eval suite (GitHub)

### Normalized scores (1–100)

- **Tool use: 82/100.** Claims frontier on Terminal Bench 4.0 and Toolathlon. DeepSWE 70% (from 26.9 predecessor). Composite architecture with tool calling. Limited independent verification of 26.10-specific scores.
- **Reasoning: 80/100.** Claims frontier on HLE and GPQA-Diamond. GitHub eval shows HLE 38%, GPQA 86.9% (200-item slices, not full benchmark). Strong but self-reported.
- **Context window: 92/100.** 1M token context verified via OpenRouter and NanoGPT.
- **Multimodal: 72/100.** Text and image input only. No video or audio input. MMMU-Pro in eval suite but no score published.
- **Coding: 82/100.** Claims frontier on DeepSWE v1.1. DeepSWE 70% (from 26.9). Strong coding agent performance.
- **Cost efficiency: 88/100.** $0.80/$3.20 per 1M tokens — very affordable for a composite model claiming frontier performance. 3× cheaper than predecessor.
- **Overall Score: 82/100.** Mean of Tool (82), Reasoning (80), Context (92), Multimodal (72), Coding (82) = 408/5 = 81.6 → 82. Promising composite model with frontier claims at a fraction of the cost, but limited independent verification of 26.10-specific results.

---

## Signature

- Provided by: **LongCat 2.5 Preview (meituan/longcat-2.5-preview)** — 2026-10-09
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
