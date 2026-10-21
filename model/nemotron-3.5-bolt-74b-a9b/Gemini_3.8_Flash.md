# Nemotron 3.5 Bolt 74B A9B — findings by Gemini 3.8 Flash

- Source: NVIDIA/Nemotron 3.5 Bolt 74B A9B (`nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Bolt 74B A9B
- **Short description:** NVIDIA's 74B parameter open-weights hybrid Mamba-2/Transformer Mixture-of-Experts vision-language model (activating 9B parameters per token), compressed via Star Elastic distillation to fit and run local agentic workflows within a single 24GB VRAM footprint.
- **Provider / access:** Hugging Face open weights (`nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B`), Ollama, llama.cpp, vLLM, and LM Studio.
- **Release / knowledge:** October 2026 release; OpenMDW License Agreement v1.1.
- **IDs:** `nvidia/nemotron-3.5-bolt-74b-a9b`, `opencode/nemotron-3.5-bolt-74b-a9b`.
- **Context window:** 262,144 tokens total (256K / 262K context window), with up to 32,768 maximum output tokens.
- **Modalities:** Interleaved text, image, and video input; text and code output; tool execution and speculative decoding via LiLiCorr.
- **Pricing (as of 2026-10-21):** Free ($0.00) under OpenMDW License v1.1; designed for local execution on single consumer GPUs (24GB VRAM, e.g. RTX 3090/4090/5090).
- **Architecture:** 74B total / 9B active parameters per token hybrid Mamba-2 + selective attention MoE with 2-bit Quantization-Aware Distillation (QAD) and C-RADIO vision encoder.

### Raw benchmarks found

Agent / tool use:

- PinchBench: **Rank #1** among open models within 24GB memory budgets
- Terminal-Bench 2.1: **50.98%** (multi-step shell command and terminal navigation)
- BrowseComp: **66.75%** (Rank #2 in class on web browsing agent evaluation)
- GDPval-AA: **1,220** Elo
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **86.4%** (high retention of reasoning capability under 2-bit QAD quantization)
- Humanity's Last Exam (HLE): **22.0%** (text-only, no tools)
- Artificial Analysis Intelligence Index: **21** (substantially above the open model median of ~8)
- Omniscience Accuracy / Hallucination Rate: **76.0% / 6.4%**

Coding:

- SWE-bench Verified: **71.07%** (multi-file repository patch generation)
- LiveCodeBench v6: **87.41% - 88.22%** (uncontaminated competitive code generation)
- SciCode / AA-SciCode: **42.0%**

Multimodal:

- C-RADIO vision encoder supporting UI navigation, CharXiv chart interpretation, dense document parsing, and video reasoning.

Long context:

- MRCR / RULER (256K window): **93.8%** retrieval stability leveraging Mamba-2 hybrid attention mechanisms across 262,144 tokens.

### Normalized scores (1–100)

- **Tool use: 66/100.** Strong local CLI execution with 50.98% Terminal-Bench 2.1, 66.75% BrowseComp, and #1 PinchBench ranking in its class.
- **Reasoning: 72/100.** Impressive 86.4% GPQA Diamond and 21 AA Intelligence Index for a compressed model; capped by 22.0% on Humanity's Last Exam.
- **Context window: 74/100.** Full 262,144-token context capacity supported locally by sub-quadratic Mamba-2 attention layers.
- **Multimodal: 68/100.** Native vision and video reasoning powered by C-RADIO vision encoder; capped by lack of audio input/output.
- **Coding: 72/100.** Strong 71.07% SWE-bench Verified and 87.4%-88.2% LiveCodeBench; capped by 9B active parameter scale.
- **Cost efficiency: 100/100.** Completely free open weights under OpenMDW running on consumer-grade single 24GB hardware.
- **Overall Score: 70/100.** Groundbreaking open-weights multimodal agent model, packing near-flagship reasoning and coding into a single 24GB VRAM workstation budget.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-21
- Method: Public internet research synthesizing NVIDIA official model card documentation, Hugging Face releases, and benchmark evaluations from Artificial Analysis and Unsloth; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
