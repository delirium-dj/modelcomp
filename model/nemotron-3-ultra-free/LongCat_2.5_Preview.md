# Nemotron 3 Ultra Free — findings by LongCat 2.5 Preview

- Source: NVIDIA/Nemotron 3 Ultra (`nemotron-3-ultra-550b-a55b`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3 Ultra Free
- **Short description:** NVIDIA's most capable open-weight model, a 550B-parameter MoE with 55B active params built on a hybrid Transformer-Mamba architecture. Available for free on OpenRouter with 1M context and tool calling support.
- **Provider / access:** OpenRouter `nvidia/nemotron-3-ultra-550b-a55b:free`; NVIDIA NIM. Chat Completions API (OpenAI-compatible).
- **Release / knowledge:** 2026-06-04; knowledge cutoff not publicly specified.
- **IDs:** `nvidia/nemotron-3-ultra-550b-a55b`
- **Context window:** 1,000,000 tokens (1M); max output 66K tokens (verified via FreeLLM).
- **Modalities:** Text in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-09-29):** $0/$0 per 1M (free on OpenRouter, 200 req/day limit).
- **Architecture:** MoE, 550B total params, 55B active; hybrid Transformer-Mamba; open-weight.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: **56.4%** (FreeLLM)
- τ²-Bench: **83.3%** (DesignForOnline)
- TerminalBench Hard: **36.4%** (DesignForOnline)

Reasoning / knowledge:

- GPQA: **87%** (FreeLLM)
- GPQA Diamond: **86.7%** (DesignForOnline)
- HLE: **26.6%** (DesignForOnline)
- IFBench: **81.4%** (DesignForOnline)

Coding:

- SWE-Bench Verified: **70.7%** (FreeLLM), **71.9%** (BenchLM)
- SWE-Bench Multilingual: **67.7%** (FreeLLM)
- LiveCodeBench v6: **89.0%** (BenchLM comparison)
- LiveCodeBench (Vals): **86.0%** (BenchLM comparison)
- SWE-bench (Vals): **69.0%** (BenchLM comparison)
- SciCode: **39.9%** (DesignForOnline)

Long context:

- 1M token context window; LCR at 67% shows decent long-context reasoning.

### Normalized scores (1–100)

- **Tool use: 68/100.** Terminal-Bench at 56.4% and τ²-Bench at 83.3% are moderate. Capped by TerminalBench Hard at 36.4%.
- **Reasoning: 72/100.** GPQA at 87% and GPQA Diamond at 86.7% are strong. Capped by HLE at 26.6%.
- **Context window: 95/100.** 1M token context window; LCR at 67% shows decent long-context reasoning.
- **Multimodal: 15/100.** Text-only input and output; no multimodal support.
- **Coding: 72/100.** SWE-Bench Verified at 70.7% and LiveCodeBench v6 at 89.0% are solid. Capped by SciCode at 39.9%.
- **Cost efficiency: 100/100.** $0/$0 per 1M on OpenRouter is unmatched; exceptional value.
- **Overall Score: 64/100.** Mean of (68+72+95+15+72)/5 = 64.4 → 64. Best-fit recommendation: excellent value open-weight model with strong reasoning, coding, and free pricing; held back by text-only modality and moderate agentic tool use.

---

## Signature

- Provided by: **LongCat 2.5 Preview (longcat-2.5-preview)** — 2026-09-29
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
