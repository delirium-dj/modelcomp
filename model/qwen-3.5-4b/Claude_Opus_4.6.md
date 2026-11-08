# Qwen 3.5 4B — findings by Claude Opus 4.6

- Source: Alibaba Cloud / Qwen (`qwen-3.5-4b`)
- Date: 2026-11-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 4B
- **Short description:** Alibaba's compact open-weight dense vision-language model with 4 billion parameters, using a hybrid Gated Delta Network + Gated Attention architecture. Designed for on-device and edge deployment with remarkably strong performance for its size class, supporting 201 languages and native multimodal processing.
- **Provider / access:** Hugging Face (`Qwen/Qwen3.5-4B`), OpenRouter, various hosted endpoints. Open-weight under Apache 2.0 license.
- **Release / knowledge:** 2026; knowledge cutoff not publicly stated.
- **IDs:** `qwen/qwen3.5-4b`
- **Context window:** 262,144 tokens (256K) native; extensible up to 1M tokens depending on deployment configuration.
- **Modalities:** Text, image, video in (native VLM with integrated Vision Encoder); text out; function calling / tool use; structured outputs; Multi-Token Prediction (MTP) heads.
- **Pricing (as of 2026):** Free (open-weight, Apache 2.0). Hosted API pricing varies by provider. Runs on consumer hardware (~8GB VRAM unquantized, ~3GB quantized Q4_K_M).
- **Architecture:** 4B dense parameters (all active). Hybrid Gated DeltaNet + Gated Attention (3:1 ratio), 32 layers, 2,560 hidden dim, 16 query heads with GQA (4 KV heads, 256 head dim). Vocabulary 248,320. Apache 2.0 license.

### Raw benchmarks found

Agent / tool use:

- Function calling and structured outputs: natively supported out-of-the-box (codersera.com, models.dev)
- Multi-turn agent execution: supported with tool-use primitives
- Terminal-Bench: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **76.2%** (apxml.com — remarkably strong for a 4B dense model; ~77.1% depending on harness)
- MMLU-Pro: **79.1%** (apxml.com — punches well above its weight class)
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis: tracked as competitive within small-model category

Coding:

- SWE-bench Verified: no verified public score found (evaluations scoped to larger Qwen variants)
- LiveCodeBench: no verified public score found (evaluations scoped to larger variants)
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- Coding Index: captured under Artificial Analysis composite indices; not individually published for 4B

Long context:

- 256K native context; extensible to 1M. Hybrid DeltaNet architecture drastically reduces memory overhead for long-context processing. No specific MRCR/RULER/GraphWalks percentage published.

### Normalized scores (1–100)

- **Tool use: 55/100.** Native function calling and structured outputs, but no published tool-use benchmarks (Terminal-Bench, MCP-Atlas, Tau). Small model size limits complex multi-step agent capabilities. Capped by zero verified tool-use benchmark data.
- **Reasoning: 68/100.** GPQA Diamond at 76.2% is remarkably strong for a 4B dense model — matches or exceeds many legacy 8B–30B models. MMLU-Pro at 79.1% further validates reasoning strength. Capped by inherent parameter-count limitations vs. frontier models scoring 90%+.
- **Context window: 80/100.** 256K native context (extensible to 1M). Hybrid DeltaNet architecture provides efficient long-context scaling. Tier-mapped to 80 for 256K native window.
- **Multimodal: 75/100.** Native VLM with text + image + video input. 201-language multilingual support. Specialized variants for 3D coding and spatial perception. No audio input or image generation. Capped below larger multimodal models on vision benchmark coverage.
- **Coding: 50/100.** No SWE-bench, LiveCodeBench, or standard coding benchmarks published for the 4B variant. Specialized 3D coding variant exists (Qwen3.5-4B-GLB-3D-Coder). General coding capability limited by small parameter count. Capped by zero verified coding benchmarks.
- **Cost efficiency: 98/100.** Open-weight under Apache 2.0 — free to download and deploy. Runs on consumer hardware (~3GB quantized). Virtually zero inference cost for local deployment. Peak value for capability level.
- **Overall Score: 66/100.** Mean of (55 + 68 + 80 + 75 + 50) / 5 = 65.6, rounded half-up to 66. An exceptional value proposition for edge and on-device deployment, delivering surprisingly strong reasoning (GPQA 76.2%) from just 4B parameters with native multimodal support, limited primarily by coding and tool-use benchmark gaps inherent to the small model class.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4.6)** — 2026-11-07
- Method: Public internet research across official model cards, Hugging Face documentation, and independent benchmarks; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Hugging Face — Qwen3.5-4B Model Card](https://huggingface.co)
  - [APXML — Qwen 3.5 4B Benchmarks](https://apxml.com)
  - [BenchLM — Qwen 3.5 4B](https://benchlm.ai)
  - [LLM Stats — Qwen 3.5 4B](https://llm-stats.com)
  - [Requesty — Qwen 3.5 4B Evaluation](https://requesty.ai)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
