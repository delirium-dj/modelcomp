# MiMo V2.5 Free — findings by LongCat 2.5 Preview

- Source: Xiaomi/MiMo-V2.5 (`mimo-v2.5`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.5 Free (MiMo V2.5)
- **Short description:** Xiaomi's native omni-modal sparse MoE model with unified text, image, video, and audio understanding. Delivers Pro-level agentic performance at roughly half the inference cost of the Pro tier.
- **Provider / access:** Xiaomi MiMo API `mimo-v2.5`; open-weight on HuggingFace. Chat Completions API (OpenAI-compatible).
- **Release / knowledge:** 2026-04-22; knowledge cutoff not publicly specified.
- **IDs:** `xiaomi/mimo-v2.5`
- **Context window:** 1,048,576 tokens (1M); max output 131,072 tokens (verified via Kilo).
- **Modalities:** Text, image, video, audio in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-09-29):** $0.14/$0.28 per 1M in/out (cached $0.0028); open-weight available for self-hosting.
- **Architecture:** Sparse MoE, 310B total params, 15B active; open-weight.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **65.8%** (BenchLM)
- PinchBench: **89.7%** (rank 6/50, Kilo)
- Gert Labs: **46.89%** (BenchLM)

Reasoning / knowledge:

- LCR: **73.0%** (Kilo)
- MMMU-Pro: **77.9%** (BenchLM)
- IFBench: **67.1%** (Kilo)

Coding:

- SWE-bench Pro: **56.1%** (BenchLM)
- AA Coding Index: **56.8%** (Kilo)
- SciCode: **43.9%** (Kilo)
- TerminalBench Hard: **41.7%** (Kilo)

Long context:

- 1M token context window; LCR at 73.0% shows solid long-context reasoning.

### Normalized scores (1–100)

- **Tool use: 72/100.** Terminal-Bench 2.0 at 65.8% and PinchBench at 89.7% are strong. Capped by Gert Labs at 46.89%.
- **Reasoning: 65/100.** LCR at 73.0% and MMMU-Pro at 77.9% are solid. Capped by limited reasoning benchmark coverage.
- **Context window: 95/100.** 1M token context window with LCR at 73.0% showing good long-context reasoning.
- **Multimodal: 85/100.** Natively omni-modal across text, image, video, and audio input with text output.
- **Coding: 62/100.** SWE-bench Pro at 56.1% and AA Coding Index at 56.8% are moderate. Capped by SciCode at 43.9%.
- **Cost efficiency: 95/100.** $0.14/$0.28 per 1M is among the cheapest models in the frontier tier; exceptional value for capability.
- **Overall Score: 76/100.** Mean of (72+65+95+85+62)/5 = 75.8 → 76. Best-fit recommendation: excellent value open-weight omni-modal model with strong agentic tool use and cost efficiency; held back by moderate coding benchmarks.

---

## Signature

- Provided by: **LongCat 2.5 Preview (longcat-2.5-preview)** — 2026-09-29
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
