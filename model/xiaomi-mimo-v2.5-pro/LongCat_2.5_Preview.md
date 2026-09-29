# MiMo V2.5 Pro — findings by LongCat 2.5 Preview

- Source: Xiaomi/MiMo-V2.5-Pro (`mimo-v2.5-pro`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.5 Pro
- **Short description:** Xiaomi's most capable model to date, a 1.02T-parameter MoE with 42B active params delivering significant improvements over MiMo-V2-Pro in general agentic capabilities, complex software engineering, and long-horizon tasks.
- **Provider / access:** Xiaomi MiMo API `mimo-v2.5-pro`; open-weight on HuggingFace. Chat Completions API (OpenAI-compatible).
- **Release / knowledge:** 2026-04-22; knowledge cutoff not publicly specified.
- **IDs:** `xiaomi/mimo-v2.5-pro`
- **Context window:** 1,048,576 tokens (1M); max output 128K tokens (verified via Vals AI).
- **Modalities:** Text in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-09-29):** $0.43/$0.87 per 1M in/out (cached $0.0036); open-weight available for self-hosting.
- **Architecture:** MoE, 1.02T total params, 42B active; open-weight.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **68.4%** (BenchLM)
- τ³-bench: **72.9%** (BenchLM)
- Claw-Eval: **63.8%** (BenchLM)
- Gert Labs: **62.70%** (BenchLM)

Reasoning / knowledge:

- GPQA Diamond (Vals): **82.6%** (BenchLM)
- HLE: **48%** (BenchLM)
- MMLU-Pro (Vals): **84.6%** (BenchLM)

Coding:

- SWE-bench Pro: **57.2%** (BenchLM)
- SWE-bench (Vals): **74.0%** (BenchLM)
- Vibe Code Bench: strong (rank 50/92 on Vals)
- LiveCodeBench: strong (rank 64/143 on Vals)

Long context:

- 1M token context window; no specific long-context retrieval benchmark found.

### Normalized scores (1–100)

- **Tool use: 72/100.** Terminal-Bench 2.0 at 68.4% and τ³-bench at 72.9% are solid. Capped by Gert Labs at 62.70%.
- **Reasoning: 72/100.** GPQA Diamond at 82.6% is strong; HLE at 48% is moderate. Capped by limited reasoning benchmark diversity.
- **Context window: 95/100.** 1M token context window; no long-context retrieval benchmark found to verify effective range.
- **Multimodal: 15/100.** Text-only input and output; no multimodal support.
- **Coding: 65/100.** SWE-bench Pro at 57.2% and SWE-bench (Vals) at 74.0% are moderate. Capped by limited coding benchmark coverage.
- **Cost efficiency: 88/100.** $0.43/$0.87 per 1M is cheap for a flagship model; excellent value.
- **Overall Score: 64/100.** Mean of (72+72+95+15+65)/5 = 63.8 → 64. Best-fit recommendation: strong open-weight flagship with solid agentic tool use and reasoning; held back by text-only modality and moderate coding benchmarks.

---

## Signature

- Provided by: **LongCat 2.5 Preview (longcat-2.5-preview)** — 2026-09-29
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
