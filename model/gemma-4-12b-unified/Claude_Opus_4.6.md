# Gemma 4 12B Unified — findings by Claude Opus 4.6

- Source: Google DeepMind (`google/gemma-4-12b-unified`)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 12B Unified
- **Short description:** Google DeepMind's encoder-free unified multimodal open-weight model. Dense 12B decoder-only transformer that ingests raw text, images, audio, and video through lightweight projection modules instead of bulky separate encoders. Runs on consumer GPUs with 16GB VRAM.
- **Provider / access:** Hugging Face, Ollama, Google AI Studio, DeepInfra. Open weights under Apache 2.0 license.
- **Release / knowledge:** 2026; knowledge cutoff not publicly disclosed
- **IDs:** `google/gemma-4-12b-unified`
- **Context window:** 256,000 tokens total — verified via datanorth.ai / Hugging Face
- **Modalities:** Text, image (variable aspect ratio/resolution), audio (16 kHz mono WAV), video in; text out; native thinking mode (reasoning traces); tool calls yes
- **Pricing (as of 2026-11):** Open weights (Apache 2.0), self-hostable on consumer hardware; API hosting varies by provider
- **Architecture:** Dense decoder-only transformer, 12B parameters; encoder-free unified multimodal design; hybrid attention; Apache 2.0

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **78.8%** (source: datanorth.ai)
- MMLU Pro: **77.2%** (source: datanorth.ai)
- AIME 2026: **77.5%** (source: datanorth.ai)
- HLE: no verified public score found

Coding:

- LiveCodeBench: no verified standalone score found
- SWE-bench Verified: no verified public score found
- SciCode / AA-SciCode: no verified public score found

Multimodal benchmarks:

- MMMU Pro: **69.1%** (source: datanorth.ai)
- DocVQA: **94.9%** (source: datanorth.ai)
- InfoVQA: **88.4%** (source: datanorth.ai)
- MATH-Vision: **79.7%** (source: datanorth.ai)

Long context:

- 256K token context window with hybrid attention; no MRCR/RULER/GraphWalks retrieval benchmarks found

### Normalized scores (1–100)

- **Tool use: 62/100.** Native tool calling and system role support with thinking mode for structured agent interactions. No specific tool-use benchmarks found. 12B dense model limits complex multi-step agentic workflows compared to larger models.
- **Reasoning: 75/100.** GPQA Diamond 78.8% and MMLU Pro 77.2% are strong for a 12B model. AIME 77.5% shows excellent mathematical reasoning. Native thinking mode enhances multi-step deduction. Competitive with much larger models.
- **Context window: 72/100.** 256K tokens is substantial but below the 1M frontier standard. Hybrid attention design provides efficient long-context processing.
- **Multimodal: 78/100.** Exceptional multimodal coverage — text, image, audio, AND video input (rare for an open-weight 12B model). MMMU Pro 69.1%, DocVQA 94.9%, InfoVQA 88.4%, MATH-Vision 79.7% are impressive. Encoder-free unified design is architecturally novel.
- **Coding: 68/100.** Strong math capability (AIME 77.5%) aids algorithmic coding. No specific SWE-bench or LiveCodeBench scores found. 12B parameter budget limits complex repository-level tasks.
- **Cost efficiency: 95/100.** Open weights (Apache 2.0) enabling free self-hosting on consumer GPUs (16GB VRAM). Among the most efficient multimodal models deployable locally.
- **Overall Score: 71/100.** Mean of (62 + 75 + 72 + 78 + 68) / 5 = 71.0. A remarkable local-deployment multimodal model with an innovative encoder-free architecture, delivering outstanding multimodal capability at a fraction of typical model sizes.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4.6)** — 2026-11-04
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Gemma 4 12B Unified Hugging Face Model Card](https://huggingface.co)
  - [DataNorth Gemma 4 Benchmark Analysis](https://datanorth.ai)
  - [Google DeepMind Gemma 4 Technical Report](https://arxiv.org)
  - [Ollama Gemma 4 12B](https://ollama.com)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
