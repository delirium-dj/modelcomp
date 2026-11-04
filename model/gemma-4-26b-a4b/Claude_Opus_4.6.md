# Gemma 4 26B A4B — findings by Claude Opus 4.6

- Source: Google DeepMind (`google/gemma-4-26b-a4b`)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 26B A4B
- **Short description:** Google DeepMind's flagship open-weight MoE model with 26B total parameters and only ~3.8B active per token. Fine-grained sparse MoE (128 experts/layer, 8+1 routed) delivering 26B knowledge capacity at ~4B dense compute cost. Includes native thinking mode and multimodal input.
- **Provider / access:** Hugging Face, DeepInfra, OpenRouter, Google AI Studio. Open weights under Apache 2.0 license.
- **Release / knowledge:** 2026; knowledge cutoff not publicly disclosed
- **IDs:** `google/gemma-4-26b-a4b`
- **Context window:** 256,000 tokens total — verified via DeepInfra / Hugging Face model card; hybrid local sliding-window + global attention with p-RoPE
- **Modalities:** Text, image in (variable aspect ratio/resolution); text out; native thinking mode (reasoning traces); tool calls yes; system role support
- **Pricing (as of 2026-11):** Open weights (Apache 2.0), self-hostable; API hosting varies by provider (~$0.05–0.10/$0.10–0.20 per 1M typical)
- **Architecture:** MoE, ~26B total / ~3.8B active parameters; 128 small experts per layer, 8+1 routing; hybrid attention; Apache 2.0

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **~82.3%** (source: benchlm.ai)
- MMLU-Pro: **~82.6–82.7%** (~97% of 31B Dense sibling performance) (source: wavespeed.ai / benchlm.ai)
- AIME variants: **~89%** (source: dev.to)
- HLE: no verified public score found

Coding:

- LiveCodeBench: competitive scores noted for agentic code execution (source: dev.to)
- SWE-bench Verified: no verified public score found
- SciCode / AA-SciCode: no verified public score found

Long context:

- 256K token context window with hybrid attention; no MRCR/RULER/GraphWalks retrieval benchmarks found

### Normalized scores (1–100)

- **Tool use: 68/100.** Native system role and tool calling support with thinking mode for structured agentic interactions. No specific tool-use benchmark scores found. Small active parameter budget (~3.8B) limits complex multi-step tool chains compared to larger models.
- **Reasoning: 78/100.** GPQA Diamond ~82.3% is impressive for a 3.8B-active model. MMLU-Pro ~82.6% and AIME ~89% confirm strong reasoning. Native thinking mode enhances multi-step deduction. Exceptional for the weight class.
- **Context window: 72/100.** 256K tokens is substantial but below the 1M frontier standard. Hybrid sliding-window + global attention with p-RoPE provides efficient long-context handling.
- **Multimodal: 55/100.** Native text and image input with variable resolution support. No audio or video input. No specific vision benchmark scores found. Text-only output.
- **Coding: 73/100.** Competitive LiveCodeBench performance noted. Strong math capability (AIME ~89%) aids algorithmic coding. Capped by lack of specific SWE-bench scores and the small active parameter budget.
- **Cost efficiency: 95/100.** Open weights under Apache 2.0 enable free self-hosting. Extreme efficiency (~3.8B active params) makes it deployable on consumer hardware. API hosting is among the cheapest available.
- **Overall Score: 69/100.** Mean of (68 + 78 + 72 + 55 + 73) / 5 = 69.2, rounded to 69. An exceptional efficiency champion delivering remarkable capability per FLOP, ideal for local deployment and cost-sensitive applications.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4.6)** — 2026-11-04
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Gemma 4 26B A4B Hugging Face Model Card](https://huggingface.co)
  - [BenchLM Gemma 4 Evaluation](https://benchlm.ai)
  - [DeepInfra Gemma 4 26B A4B](https://deepinfra.com)
  - [Google DeepMind Gemma 4 Technical Report](https://arxiv.org)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
