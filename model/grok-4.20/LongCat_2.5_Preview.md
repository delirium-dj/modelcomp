# Grok 4.20 — findings by LongCat 2.5 Preview

- Source: xAI/Grok 4.20 (`grok-4.20`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.20
- **Short description:** xAI's long-context specialist model with a 4-agent MoE architecture and 2M token context window (multi-agent variant). Designed for legal, research, and coding teams that need extended context.
- **Provider / access:** xAI API `grok-4.20`. Responses API / Chat Completions API.
- **Release / knowledge:** 2026-03-10; knowledge cutoff not publicly specified.
- **IDs:** `xai/grok-4.20`
- **Context window:** 2M tokens (multi-agent variant); 1M (reasoning/non-reasoning variants) (verified via BenchLM).
- **Modalities:** Text, image in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-09-29):** $2.00/$6.00 per 1M in/out.
- **Architecture:** 4-agent MoE (Mixture of Experts); proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **47.1%** (BenchLM)
- Terminal-Bench 2.1 (Vals): **44.2%** (BenchLM)
- DeepSearchQA: **62.8%** (BenchLM)
- Gert Labs: **38.36%** (BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **88.9%** (hokai.io)
- ARC-AGI-2: **53.3%** (BenchLM)
- CharXiv: **60.9%** (BenchLM)
- IFBench: **82.9%** (hokai.io)

Coding:

- SWE-bench Verified: **76.7%** (BenchLM)
- SWE-bench Pro: **51.8%** (BenchLM)
- LiveCodeBench (Vals): **84.3%** (BenchLM)
- SWE-bench (Vals): **72.2%** (BenchLM)

Long context:

- 2M token context window (multi-agent variant); no specific long-context retrieval benchmark found.

### Normalized scores (1–100)

- **Tool use: 50/100.** Terminal-Bench 2.0 at 47.1% and Terminal-Bench 2.1 at 44.2% are moderate. Capped by Gert Labs at 38.36%.
- **Reasoning: 72/100.** GPQA Diamond at 88.9% is strong; ARC-AGI-2 at 53.3% is moderate. Capped by limited reasoning benchmark diversity.
- **Context window: 98/100.** 2M token context window (multi-agent variant) is best-in-class; no long-context retrieval benchmark found to verify effective range.
- **Multimodal: 70/100.** Text and image input with text output. Capped by no video/audio input.
- **Coding: 72/100.** SWE-bench Verified at 76.7% and LiveCodeBench at 84.3% are solid. Capped by SWE-bench Pro at 51.8%.
- **Cost efficiency: 75/100.** $2.00/$6.00 per 1M is moderate for a frontier model.
- **Overall Score: 72/100.** Mean of (50+72+98+70+72)/5 = 72.4 → 72. Best-fit recommendation: excellent long-context model with strong reasoning and solid coding; held back by moderate agentic tool use.

---

## Signature

- Provided by: **LongCat 2.5 Preview (longcat-2.5-preview)** — 2026-09-29
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
