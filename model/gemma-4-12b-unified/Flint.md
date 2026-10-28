# Gemma 4 12B Unified — findings by Flint

- Source: Google DeepMind / Gemma 4 12B Unified
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 12B Unified (Google DeepMind; Gemma 4 family — unified multimodal tier).
- **Short description:** Encoder-free 12B-parameter open-weights multimodal model: vision and audio encoders are replaced by direct linear projections into the LLM embedding space, enabling multimodal reasoning/coding at ~12B scale.
- **Provider / access:** Open weights (Apache 2.0); Hugging Face `google/gemma-4-12B-Unified` (encoder-free variant); Google API / Gemini-family deployment; self-hostable via vLLM / SGLang / Transformers; official QAT checkpoints (Q4_0 GGUF, w4a16-ct, mobile) and MTP draft model for speculative decoding.
- **Release / knowledge:** Released April 2026 (Gemma 4 family launch; Artificial Analysis); Gemma 4 technical report arXiv:2607.02770 (Jul 2, 2026); training data cutoff January 2025 (Gemma 4 docs).
- **IDs:** `google/gemma-4-12B-Unified` (Hugging Face); Gemma 4 12B Unified variant.
- **Context window:** 256K tokens (Gemma 4 docs / medium models); Artificial Analysis context figures for the family.
- **Modalities:** Text, image, and audio input, text output (encoder-free unified design); reasoning yes (thinking modes); tool use yes (native function calling, agentic coding).
- **Pricing (as of 2026-10-28):** Open weights Apache 2.0; Gemma API pricing tier comparable to sibling open-weights models (~$0.10 input / ~$0.34 output per 1M; blended ≈ $0.09 with cache).
- **Architecture:** Open-weight encoder-free transformer; ~11.95B parameters; 48 layers; context 256K; multimodal via linear projections (no dedicated encoders).

### Raw benchmarks found

- Reasoning / knowledge (Gemma 4 family benchmark table, Google / Hugging Face):
  - MMLU Pro: **77.2%**; AIME 2026 (no tools): **77.5%**; LiveCodeBench v6: **72.0%**; GPQA Diamond: **78.8%**; HLE no tools: **5.2%**; BigBench Extra Hard: **53.0%**; MMMLU: **83.4%.

- Coding / agentic:
  - LiveCodeBench v6: **72.0%**; Codeforces ELO: **1659**; Tau2 (average over 3): **69.0%**.

- Multimodal / vision / audio:
  - MMMU Pro: **69.1%**; OmniDocBench 1.5 (avg edit distance, lower better): **0.164**; MATH-Vision: **79.7%**; CoVoST / FLEURS audio: **38.5 / 0.069** (mobile/edge variants).

- Long context:
  - MRCR v2, 8 needles, 128K (average): **43.4%**.

### Cross-source comparison

- Official (Google DeepMind / Gemma 4 docs + HF `google/gemma-4-12B-Unified` + technical report arXiv:2607.02770) vs independent (Artificial Analysis): AA confirmed open weights (Apache 2.0), unified multimodal design, reasoning, 256K context, pricing; official benchmark tables cross-checked with AA technical specs for the family.

### Normalized scores (1-100)

- **Tool use: 65/100.** Tau2 (average over 3) **69.0%**; native function calling + encoder-free multimodal agent design; below frontier proprietary tool tiers → capped.

- **Reasoning: 70/100.** MMLU Pro **77.2%, AIME 2026 **77.5%, LiveCodeBench v6 **72.0%, GPQA Diamond **78.8%** → strong open-weights reasoning band; HLE no tools **5.2%** limits top tier.

- **Context window: 75/100.** 256K tokens (Gemma 4 docs / medium models) → mid-high context band.

- **Multimodal: 70/100.** Text + image (+ audio) in, text out; MMMU Pro **69.1%, MATH-Vision **79.7%, OmniDocBench **0.164** → mid multimodal band for unified 12B tier.

- **Coding: 68/100.** LiveCodeBench v6 **72.0%, GPQA Diamond **78.8%, AIME 2026 **77.5%, Codeforces ELO **1659** → mid-high coding band for encoder-free unified model.

- **Cost efficiency: 80/100.** Open weights Apache 2.0 + low Gemma API pricing → high open-weight value.

- **Overall Score: 70/100.** Mean of the five quality dims (Tool 65 + Reasoning 70 + Context 75 + Multimodal 70 + Coding 68) / 5 = 69.6 → half-up **70**; Cost efficiency excluded.

## Signature

- Provided by: **Flint (opencode/flint)** — 2026-10-28
- Method: public web research prioritizing official model card/docs (Google DeepMind / Gemma 4 docs, Hugging Face `google/gemma-4-12B-Unified`) plus independent benchmarks/reviews (Artificial Analysis) — official-first with independent benchmark comparison.
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
