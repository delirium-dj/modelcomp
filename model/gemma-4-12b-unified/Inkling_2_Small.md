# Gemma 4 12B Unified — findings by Inkling 2 Small

- Source: Google (`gemma-4-12b-unified`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 12B Unified
- **Short description:** Google DeepMind's encoder-free unified multimodal model in the Gemma 4 family — 11.95B params, native text/image/audio (and video) input projected straight into the decoder embedding space (no separate encoders), targeting consumer devices and local execution. Apache 2.0.
- **Provider / access:** Open weights on Hugging Face (`google/gemma-4-12B-it`, gemma4_unified); Google AI Edge / local runtimes; Google AI Studio; arXiv:2607.02770.
- **Release / knowledge:** Released 2026-05-23 (base); instruction-tuned same window; Gemma 4 family technical report arXiv:2607.02770 (Jul 2026). Training data cutoff Jan 2025.
- **IDs:** `google/gemma-4-12B-it` (HF)
- **Context window:** 256,000 tokens (medium-class 256K per family docs); max output not fixed (enable_thinking configurable).
- **Modalities:** text, image, audio in (variable image resolution; audio ≤30s, video ≤60s @1fps); text out; reasoning yes (thinking mode via `<|think|>`); tool calls yes (native function calling); 140+ languages.
- **Pricing (as of 2026-11-10):** Apache 2.0 open weights — free to self-host; no first-party hosted price published.
- **Architecture:** dense decoder-only transformer, 11.95B params, 48 layers, sliding window 1024 + global layers, p-RoPE; encoder-free unified (linear projections).

### Raw benchmarks found

Agent / tool use:

- Tau2 (average over 3): **69.0%** (Gemma 4 model card, Google DeepMind)
- (τ²-family reference for the 26B-A4B sibling: 43.6–68.2% by harness)

Reasoning / knowledge:

- GPQA Diamond: **78.8%** (HF eval results + card; 78.8 on gpqa dataset)
- AIME 2026 (no tools): **77.5%** (card)
- MMLU Pro: **77.2%** (card + HF eval results)
- MMMLU: **83.4%** (card)
- BigBench Extra Hard: **53.0%** (card)
- HLE no tools: **5.2%** (card)

Coding:

- LiveCodeBench v6: **72.0%** (card)
- Codeforces ELO: **1659** (card)

Long context:

- MRCR v2 8-needle 128k (average): **43.4%** (card)

Multimodal:

- MMMU Pro: **69.1%** (card + HF eval results)
- MATH-Vision: **79.7%** (card)
- OmniDocBench 1.5 (edit distance, lower better): **0.164** (card)
- MedXPertQA MM: **48.7%** (card)
- Audio: CoVoST **38.5%***, FLEURS **0.069*** (*excluding Chinese; card)

### Normalized scores (1–100)

- **Tool use: 62/100.** Tau2 69.0% verified by vendor; native function calling; lighter than frontier agentic models, but honest for a 12B.
- **Reasoning: 70/100.** GPQA 78.8%, AIME 2026 77.5%, MMLU Pro 77.2%, MMMLU 83.4%; capped by HLE 5.2% and BigBench-XH 53.0%.
- **Context window: 72/100.** 256K tokens; MRCR v2 128k 43.4% — workable long-context retrieval at the 128K needle point, unproven beyond.
- **Multimodal: 77/100.** Text/image/audio/video in, encoder-free unified; MMMU Pro 69.1%, MATH-Vision 79.7%, direct ASR/AST (CoVoST 38.5%); strongest multimodal-per-param among small open models.
- **Coding: 68/100.** LCB v6 72.0%, Codeforces 1659 — solid small-model coding; far below frontier.
- **Cost efficiency: 90/100.** Apache 2.0 open weights, 12B dense — near-free self-hosting.
- **Overall Score: 70/100.** (62 + 70 + 72 + 77 + 68) / 5 = 69.8 → 70. Best fit: open local multimodal (vision+audio+text) assistants on consumer hardware/edge; not for hardest frontier reasoning.

## Signature

- Provided by: **Inkling 2 Small (thinkingmachines/inkling-2-small)** — 2026-11-10 UTC
- Method: public internet research (Google Gemma 4 12B model card, arXiv:2607.02770, HF eval-results); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [google/gemma-4-12B-it — Hugging Face model card](https://huggingface.co/google/gemma-4-12B-it)
  - [Gemma 4 Technical Report (arXiv:2607.02770)](https://arxiv.org/abs/2607.02770)
  - [Introducing Gemma 4 12B — Google](https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemma-4-12B/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
