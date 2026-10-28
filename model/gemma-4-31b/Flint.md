# Gemma 4 31B — findings by Flint

- Source: Google DeepMind / Gemma 4 31B
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 31B (Google DeepMind; Gemma 4 family — 31B dense).
- **Short description:** Google DeepMind's open-weights flagship dense model of the Gemma 4 family (30.7B total parameters, 60 layers), designed for reasoning, coding, multimodal understanding, and agentic workflows; open weights under Apache 2.0.
- **Provider / access:** Open weights (Hugging Face `google/gemma-4-31B`, Apache 2.0); Google API (Gemma 4 31B reasoning variant, $0.00 per 1M input/output tokens); self-hostable via Transformers, vLLM, SGLang, Docker.
- **Release / knowledge:** Released April 2, 2026 (Artificial Analysis); Gemma 4 technical report arXiv 2607.02770 (Jul 2, 2026); training data cutoff January 2025 (Hugging Face model card).
- **IDs:** `google/gemma-4-31B` (Hugging Face); Gemma 4 31B reasoning variant.

- **Context window:** 256K tokens (Hugging Face model card / Artificial Analysis technical specs; small Gemma 4 models at 128K).

- **Modalities:** Text + image (+ video via frame processing) input, text output; reasoning yes (built-in thinking mode via `<|think|>`); tool use yes (native function calling); no audio on the 31B dense variant.

- **Pricing (as of 2026-10-28):** Open weights Apache 2.0; Google API $0.00 input / $0.00 output per 1M tokens (very competitive; cross-model medians $0.12 input / $0.30 output); blended cache-hit ratio ~$0.00/M.

- **Architecture:** Open-weight dense transformer; 30.7B total / 60 layers, sliding window 1024 tokens, hybrid local sliding-window + global attention, vision encoder ~550M params.

### Raw benchmarks found

- Reasoning / knowledge:
  - GPQA Diamond: **84.3%**.
  - AIME 2026 (no tools): **89.2%**.
  - LiveCodeBench v6: **80.0%**.
  - MMLU Pro: **85.2%**; MMMLU: **88.4%**.
  - HLE no tools: **19.5%**; HLE with search: **26.5%**.
  - BigBench Extra Hard: **74.4%**.

- Coding:
  - LiveCodeBench v6: **80.0%**.
  - Codeforces ELO: **2150**.

- Agentic / tool use:
  - Tau2 (average over 3): **76.9%**.

- Multimodal:
  - MMMU Pro: **76.9%**; MATH-Vision: **85.6%**; OmniDocBench: **0.131** (lower is better).

- Long context:
  - MRCR v2, 8 needles, 128K (average): **66.4%**.

### Cross-source comparison

- Official (Google DeepMind / Hugging Face Gemma 4) vs independent (Artificial Analysis): AA independently confirmed reasoning variant, open weights, 256K context, Apache 2.0 license, text+image(+video) in / text out, reasoning yes, 30.7B params, $0 API pricing, 35.5 t/s, TTFT 1.09 s — all consistent with the official card; benchmark figures overlap with the HF-published tables.

### Normalized scores (1-100)

- **Tool use: 70/100.** Tau2 average over 3 **76.9%** (Hugging Face); native function calling → strong open-weights agentic tier; capped below frontier proprietary tool tiers.

- **Reasoning: 70/100.** GPQA **84.3%, AIME **89.2**, LiveCodeBench **80.0%, MMLU Pro **85.2%** → capable open-weights reasoning; HLE **19.5% / 26.5%** pulls the absolute ceiling down; capped below proprietary frontier reasoning.

- **Context window: 70/100.** 256K tokens (Hugging Face / Artificial Analysis) → mid-high open-weights context band; smaller Gemma 4 models at 128K.

- **Multimodal: 70/100.** Text + image (+ video) in, text out; MMMU Pro **76.9%, MATH-Vision **85.6%** → upper-mid multimodal band for open weights.

- **Coding: 75/100.** LiveCodeBench **80.0%, Codeforces ELO **2150, GPQA **84.3%** → mid-high coding band; strong open-weight performance.

- **Cost efficiency: 80/100.** Open weights Apache 2.0 + Google API $0.00 per 1M → high open-weight value.

- **Overall Score: 71/100.** Mean of the five quality dims (Tool 70 + Reasoning 70 + Context 70 + Multimodal 70 + Coding 75) / 5 = 69; Cost efficiency excluded.

## Signature

- Provided by: **Flint (opencode/flint)** — 2026-10-28
- Method: public web research prioritizing official model card/docs (Google DeepMind / Hugging Face Gemma 4) plus independent benchmarks/reviews (Artificial Analysis) — official-first with independent benchmark comparison.
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
