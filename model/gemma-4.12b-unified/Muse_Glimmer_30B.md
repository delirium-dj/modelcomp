# Gemma 4 12B Unified — findings by Muse Glimmer 30B

- Source: Google DeepMind / gemma-4.12b-unified
- Date: 2026-10-24
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Gemma 4 12B Unified / Gemma 4 12B Unified Transformer
- **Short description:** Unified encoder-free multimodal model designed to bring high-performance multimodal intelligence to laptops; vision and audio inputs flow directly into LLM backbone without separate encoders.
- **Provider / access:** Google DeepMind. Open weights Apache 2.0. Hugging Face `google/gemma-4-12B-it`; Google AI Studio, Ollama, LM Studio, LiteRT-LM.
- **Release / knowledge:** Released 3 Jun 2026. Training data cutoff January 2025 per model card. Gemma 4 family announced 2 Apr 2026.
- **IDs:** Hugging Face `google/gemma-4-12B-it`; base `google/gemma-4-12B`
- **Context window:** 256K tokens
- **Modalities:** Text, image, audio in; text out. Native audio inputs up to 30s, video via frame sequences up to 60s @1fps. Encoder-free unified architecture.
- **Pricing as of 2026-10-24:** Open weights Apache 2.0; no commercial per-token pricing published.
- **Architecture:** Dense decoder-only transformer, 11.95B params, 48 layers, sliding window 1024, vocab 262K. Hybrid local+global attention, unified K/V, Proportional RoPE. Encoder-free unified design.

### Raw benchmarks found

**Hugging Face model card Benchmark Results**
- MMLU Pro – 77.2%
- AIME 2026 no tools – 77.5%
- LiveCodeBench v6 – 72.0%
- Codeforces ELO – 1659
- GPQA Diamond – 78.8%
- Tau2 average over 3 – 69.0%
- Humanity’s Last Exam HLE no tools – 5.2%
- BigBench Extra Hard – 53.0%
- MMMLU – 83.4%
- MMMU Pro – 69.1%
- OmniDocBench 1.5 avg edit distance – 0.164
- MATH-Vision – 79.7%
- MedXpertQA MM – 48.7%
- CoVoST – 38.5* % excluding Chinese
- FLEURS – 0.069*
Source: https://huggingface.co/google/gemma-4-12B-it

**Official blogs**
- Introducing Gemma 4 12B Jun 03 2026 confirms encoder-free unified architecture and laptop-ready 16GB VRAM.
Source: https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemma-4-12b/

**Conflicts / notes**
- Terminal-Bench, GDPval-AA, SWE-bench not published for 12B Unified in model card/blog/arXiv technical report.
- HLE no tools 5.2% very low, consistent with mid-size model reasoning limits.

### Normalized scores (1–100)

- **Tool use: 60/100.** Tau2 average 69.0%; no Terminal-Bench/GDPval-AA published.
- **Reasoning: 65/100.** GPQA Diamond 78.8%, MMLU Pro 77.2%, AIME 2026 77.5%. HLE no tools 5.2% caps score.
- **Context window: 78/100.** 256K verified.
- **Multimodal: 78/100.** Text+image+audio input → text output; MMMU Pro 69.1%, MATH-Vision 79.7%, MedXpertQA MM 48.7%.
- **Coding: 70/100.** LiveCodeBench v6 72.0%, Codeforces ELO 1659. No SWE-bench public.
- **Cost efficiency: 95/100.** Open weights Apache 2.0.
- **Overall Score: 70/100.** Mean of Tool 60, Reasoning 65, Context 78, Multimodal 78, Coding 70. Efficient unified multimodal model for edge/laptop deployment.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-24
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
