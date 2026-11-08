# Qwen 3.5 2B — findings by Claude Opus 4.6

- Source: Alibaba Cloud / Qwen (`qwen-3.5-2b`)
- Date: 2026-11-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 2B
- **Short description:** Alibaba's compact 2B open-weight dense vision-language model from the Qwen 3.5 family, released March 2026. Designed for edge/on-device execution with native multimodal support (text + image + video), reasoning modes, and tool use. Fits in ~1–2GB VRAM quantized.
- **Provider / access:** Hugging Face (`Qwen/Qwen3.5-2B`), OpenRouter, various hosted endpoints. Open-weight under Apache 2.0.
- **Release / knowledge:** 2026-03; knowledge cutoff not publicly stated.
- **IDs:** `qwen/qwen3.5-2b`
- **Context window:** 262,144 tokens (256K) native.
- **Modalities:** Text, image, video in (native VLM); text out; reasoning/thinking modes; tool use / function calling.
- **Pricing (as of 2026-03):** Free (open-weight, Apache 2.0). ~1–2GB VRAM quantized for local deployment on consumer/edge devices.
- **Architecture:** 2B dense parameters. Causal language model with multimodal integration. Apache 2.0 license.

### Raw benchmarks found

Agent / tool use:

- Function calling and tool use: natively supported (huggingface.co)
- Terminal-Bench: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- MCP-Atlas / Toolathon: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **~51.6%** (neura.market — notable for a 2B local model reflecting substantial STEM reasoning capability)
- MMLU-Redux / MMLU-Pro: **~66–79%** depending on framework and prompt config (llm-stats.com)
- IFEval: **~78.6%** (llm-stats.com — instruction following)
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found

Coding:

- SWE-bench Verified: no verified public score found (evaluations typically scoped to larger Qwen variants)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- 256K native context window. No specific MRCR/RULER/GraphWalks percentage published.

### Normalized scores (1–100)

- **Tool use: 45/100.** Native tool use and function calling support, but no published tool-use benchmarks. Very small 2B model limits complex multi-step orchestration. Capped by zero verified tool-use metrics.
- **Reasoning: 48/100.** GPQA Diamond ~51.6% is a notable achievement for 2B parameters but far below frontier models (90%+). MMLU-Pro 66–79% decent for size class. IFEval 78.6% shows strong instruction following. Capped by inherent 2B parameter limits.
- **Context window: 80/100.** 256K native context. Tier-mapped to 80 for 256K window.
- **Multimodal: 70/100.** Native VLM with text + image + video input — broad modality coverage for a 2B model. No audio input or image/video generation. Inherited multimodal architecture from Qwen 3.5 family. Capped by small model size limiting visual reasoning depth.
- **Coding: 40/100.** No SWE-bench, LiveCodeBench, or standard coding benchmarks published for the 2B variant. Very small model limits complex code generation. Useful for simple tasks and fine-tuning. Capped by zero verified coding metrics.
- **Cost efficiency: 99/100.** Free open-weight Apache 2.0. Runs on virtually any device (~1–2GB quantized). Near-zero cost. Ultimate edge deployment model.
- **Overall Score: 57/100.** Mean of (45 + 48 + 80 + 70 + 40) / 5 = 56.6, rounded half-up to 57. A remarkable edge model that achieves GPQA 51.6% and native multimodal support from just 2B parameters, limited primarily by the inherent parameter-count ceiling for coding and complex tool-use tasks.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4.6)** — 2026-11-08
- Method: Public internet research across official model cards, independent benchmarks, and aggregator leaderboards; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Hugging Face — Qwen3.5-2B Model Card](https://huggingface.co)
  - [Neura Market — Qwen 3.5 2B GPQA Score](https://neura.market)
  - [LLM Stats — Qwen 3.5 2B Benchmarks](https://llm-stats.com)
  - [APXML — Qwen 3.5 2B Specifications](https://apxml.com)
  - [Puter — Qwen 3.5 2B Overview](https://puter.com)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
