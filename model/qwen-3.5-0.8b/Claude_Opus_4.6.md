# Qwen 3.5 0.8B — findings by Claude Opus 4.6

- Source: Alibaba Cloud (`qwen-3.5-0.8b`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 0.8B
- **Short description:** Alibaba's ultra-compact 0.8B dense multimodal model from the Qwen 3.5 "Small" family, designed for edge computing, mobile devices, and IoT hardware. One of the smallest models to natively handle text, image, and video input. Released February/March 2026.
- **Provider / access:** Open weights via Hugging Face (Apache 2.0), free hosted routes on various providers (`opencode/qwen-3.5-0.8b`). Self-hostable on smartphones, Raspberry Pi, NVIDIA Jetson, Qualcomm Snapdragon NPU.
- **Release / knowledge:** 2026-02/03 release; knowledge cutoff not publicly specified.
- **IDs:** `opencode/qwen-3.5-0.8b`
- **Context window:** 262,144 tokens (262K) native / 81,920 tokens max output — per meta.json. Remarkably large for a sub-1B model.
- **Modalities:** Text + image + video in; text out. Switchable thinking/non-thinking inference modes. 201 languages/dialects. Documented caveat: thinking-mode loops possible at this size.
- **Pricing (as of 2026-11-10):** Free Apache 2.0 open weights. Free hosted routes ($0.00/$0.00).
- **Architecture:** Hybrid architecture combining Gated Delta Networks (Linear Attention/DeltaNet) and standard Gated Attention with SwiGLU FFN layers. ~752M–800M dense parameters. FP16 model ~1.5 GB, quantized (Q4) ~0.5–0.9 GB. Fits in ~1–2 GB RAM.

### Raw benchmarks found

Agent / tool use:

- Instruction-following capability confirmed but limited by sub-1B parameter count
- Terminal-Bench: no verified public score found
- Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- MMLU-Pro (thinking mode): **~66.5%** (apxml.com — competitive for sub-1B tier)
- GPQA Diamond: no verified public score found for the 0.8B specifically
- HLE: no verified public score found
- CritPt: no verified public score found

Coding:

- Basic coding capability confirmed but no specific benchmark scores found for 0.8B
- SWE-bench Verified: no verified public score found
- LiveCodeBench: no verified public score found

Long context:

- 262K native context window confirmed. No specific MRCR/RULER/GraphWalks retrieval benchmarks found for the 0.8B variant.

### Normalized scores (1–100)

- **Tool use: 20/100.** Sub-1B model with basic instruction following. Thinking-mode loops are a documented issue at this parameter scale, limiting reliable tool orchestration. No tool-use benchmark scores. Edge/mobile deployment constraints further limit complex agentic workflows.
- **Reasoning: 30/100.** MMLU-Pro ~66.5% in thinking mode is impressive for a sub-1B model but modest in absolute terms. The hybrid architecture (DeltaNet + Gated Attention) provides efficiency gains, but parameter limitations constrain deep reasoning. Capped by model size and absent GPQA/HLE scores.
- **Context window: 62/100.** 262K native context is exceptionally large for a sub-1B model — far surpassing typical edge models. Max output 82K is also generous. However, actual long-context retrieval quality at sub-1B scale is unverified and likely limited. The raw number is impressive but practical usability is uncertain.
- **Multimodal: 50/100.** Text + image + video input is notable — one of the smallest models to handle video natively. Text-only output. No audio input/output. 201 language support adds breadth. Scored well above text-only but below models with output-side multimodality.
- **Coding: 22/100.** Basic coding capability exists but no benchmark scores found. Sub-1B models generally struggle with complex code generation. Suitable for simple autocomplete and code snippets on edge devices, not for software engineering tasks.
- **Cost efficiency: 100/100.** Completely free — Apache 2.0 open weights with free hosted routes. Can run on smartphones and Raspberry Pi. Zero cost.
- **Overall Score: 37/100.** Mean of (20 + 30 + 62 + 50 + 22) / 5 = 36.8 → 37. A remarkable edge/mobile model that packs multimodal capabilities (including video) into sub-1B parameters with a 262K context window. Best-in-class for on-device deployment, but naturally limited in absolute performance by its tiny parameter count.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4.6)** — 2026-11-10
- Method: Public internet research (apxml.com, Qualcomm AI Hub, canirun.ai, Hugging Face, note.com, jetson-ai-lab.com, arm.com); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [apxml.com — Qwen 3.5 0.8B specifications](https://apxml.com)
  - [Qualcomm — Qwen edge deployment](https://qualcomm.com)
  - [canirun.ai — Qwen 3.5 0.8B hardware requirements](https://canirun.ai)
  - [Hugging Face — Qwen 3.5 model family](https://huggingface.co)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
