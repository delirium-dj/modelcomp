# Gemma 4 26B A4B — findings by Flint

- Source: Google DeepMind / Gemma 4 26B A4B
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 26B A4B (Reasoning) (Google DeepMind; Gemma 4 family — MoE mid-tier).
- **Short description:** Mixture-of-Experts open-weights model (25.2B total / 3.8B active) with a dedicated vision encoder, designed for reasoning, coding, and agentic workflows at laptop/server scale; runs on consumer hardware via quantization.
- **Provider / access:** Open weights (Apache 2.0); Hugging Face `google/gemma-4-26B-A4B-it`; Google API / Gemini-family deployment; self-hostable via vLLM / SGLang / Transformers.
- **Release / knowledge:** Released April 2, 2026 (Artificial Analysis; Google Gemma 4 launch); Gemma 4 technical report arXiv:2607.02770 (Jul 2, 2026); training data cutoff January 2025 (Gemma 4 docs).
- **IDs:** `google/gemma-4-26B-A4B-it` (Hugging Face); Gemma 4 26B A4B reasoning variant.
- **Context window:** 256K tokens (Hugging Face model card / Gemma 4 docs; Artificial Analysis reported 260K across providers).
- **Modalities:** Text, image, and video input, text output; reasoning yes (thinking mode via `<|think|>`); tool use yes (native function calling, agentic coding); audio not supported on this variant.

- **Pricing (as of 2026-10-28):** Open weights Apache 2.0; Gemma API pricing from $0.10 per 1M input / $0.34 per 1M output (Artificial Analysis; blended ≈ $0.09 per 1M with cache); hosted median ~$0.12 input / $0.30 output.

- **Architecture:** Open-weight Mixture-of-Experts (MoE); 25.2B total / 3.8B active parameters; 30 layers; sliding window 1024; hybrid local sliding-window + global attention; expert count 8 active / 128 total + 1 shared; vision encoder ~550M params.

### Raw benchmarks found

- Reasoning / knowledge:
  - MMLU Pro: **82.6%**; AIME 2026 (no tools): **88.3%**; LiveCodeBench v6: **77.1%**; GPQA Diamond: **82.3%**; HLE no tools: **8.7%**; HLE with search: **17.2%**; BigBench Extra Hard: **64.8%**; MMMLU: **86.3%** (Gemma 4 family benchmark table, Google).

- Coding / agentic:
  - LiveCodeBench v6: **77.1%**; Codeforces ELO: **1718**; SWE-bench Verified: **76.0%** (Gemma 4 26B A4B row from HF card cross-family table? — see note); Tau2 (average over 3): **68.2%** (agentic tool use).

- Multimodal / vision:
  - MMMU Pro: **73.8%**; OmniDocBench 1.5 (avg edit distance, lower better): **0.149**; MATH-Vision: **82.4%** (Gemma 4 family table, Google).

- Long context:
  - MRCR v2, 8 needles, 128K (average): **44.1%** (Gemma 4 family table, Google).

### Cross-source comparison

- Official (Google DeepMind / Gemma 4 via Hugging Face `google/gemma-4-26B-A4B-it` + ai.google.dev Gemma 4 docs + arXiv:2607.02770) vs independent (Artificial Analysis): AA confirmed open weights (Apache 2.0), reasoning (Thinking), MoE 25.2B/3.8B active, multimodal text+image+video, context 260K, pricing; benchmark overlap on MMLU Pro, AIME, GPQA, MMMU Pro is consistent with the official Gemma 4 tables.

### Normalized scores (1-100)

- **Tool use: 65/100.** Tau2 (average over 3) **68.2%**; native function calling + agentic coding design → mid agentic band for MoE size; capped below frontier proprietary tool tiers.

- **Reasoning: 72/100.** MMLU Pro **82.6%, AIME 2026 **88.3%, LiveCodeBench v6 **77.1%, GPQA Diamond **82.3%** → strong open-weights reasoning band; HLE no tools **8.7%** pulls the absolute ceiling down → capped below proprietary frontier reasoning.

- **Context window: 85/100.** 256K tokens (Hugging Face Gemma 4 docs; Artificial Analysis) → mid-high context band (small Gemma 4 models at 128K; this MoE at 256K).

- **Multimodal: 75/100.** Text + image (+ video) in, text out; MMMU Pro **73.8%, MATH-Vision **82.4%, OmniDocBench **0.149** → strong multimodal band for MoE tier.

- **Coding: 70/100.** LiveCodeBench v6 **77.1%, GPQA Diamond **82.3%, AIME 2026 **88.3%, Codeforces ELO **1718** → mid-high coding band for open-weights MoE.

- **Cost efficiency: 80/100.** Open weights Apache 2.0 + Gemma API from $0.10/$0.34 per 1M → high open-weight value.

- **Overall Score: 73/100.** Mean of the five quality dims (Tool 65 + Reasoning 72 + Context 85 + Multimodal 75 + Coding 70) / 5 = 73.4 → half-up **73**; Cost efficiency excluded.

## Signature

- Provided by: **Flint (opencode/flint)** — 2026-10-28
- Method: public web research prioritizing official model card/docs (Google DeepMind / Hugging Face `google/gemma-4-26B-A4B-it` + ai.google.dev Gemma 4 docs) plus independent benchmarks/reviews (Artificial Analysis) — official-first with independent benchmark comparison.
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
