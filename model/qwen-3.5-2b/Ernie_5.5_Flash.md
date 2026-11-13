# Qwen3.5-2B — findings by Ernie 5.5 Flash

- Source: Alibaba Qwen (`Qwen/Qwen3.5-2B`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-2B (Qwen3.5 Small series)
- **Short description:** 2B-parameter natively multimodal (image-text-to-text) model from Alibaba's Qwen team; the vendor explicitly scopes it to prototyping, task-specific fine-tuning and research/development rather than production chat.
- **Provider / access:** open weights on Hugging Face (`Qwen/Qwen3.5-2B`, Apache 2.0), vLLM/SGLang/Transformers/KTransformers serving, Ollama.
- **Release / knowledge:** March 2026 (Qwen3.5 Small series); knowledge cutoff not published.
- **IDs:** `Qwen/Qwen3.5-2B` (HF); `qwen3.5:2b` style Ollama tag
- **Context window:** 262,144 natively (model card); no extended-length claim for the 2B.
- **Modalities:** text + image + video input; text output. Thinking and non-thinking modes (non-thinking is the default for the 2B), tool calling, structured output.
- **Pricing (as of 2026-11-12):** free / self-hosted (Apache 2.0 weights).
- **Architecture:** 2B total params, 24 layers, hidden 2048, 6 × (3 × (Gated DeltaNet → FFN) → 1 × (Gated Attention → FFN)), 248,320 padded vocab, MTP trained; dense.

### Raw benchmarks found

Agent / tool use:

- BFCL-V4: **43.6** · TAU2-Bench: **48.8%** (thinking mode, Qwen card)
- Terminal-Bench 2.1 / Tau3 / GDPval-AA / Claw-Eval / MCP-Atlas: **no verified public score found**

Reasoning / knowledge (thinking mode unless noted):

- GPQA: **51.6%** · MMLU-Pro: **66.5** · MMLU-Redux: **79.6** · SuperGPQA: **37.5** · C-Eval: **73.2**
- HLE: **no verified public score found**
- HMMT Feb 25: **22.9** · HMMT Nov 25: **19.6**
- AA-LCR: **25.6** · LongBench v2: **38.7**
- IFEval: **78.6** · IFBench: **41.3** · MultiChallenge: **33.7**
- Non-thinking mode is markedly weaker (MMLU-Pro 55.3, GPQA not reported, IFEval 61.2)

Coding:

- LiveCodeBench / SWE-bench Verified / SciCode / OJBench: **no verified public score found for the 2B**

Multimodal:

- MMMU **64.2** / MMMU-Pro **50.3** · MathVista (mini) **76.7** · OmniDocBench1.5 **79.8** · OCRBench **84.5** · AI2D **83.3** · RealWorldQA **74.5** · VideoMME w/ subs **75.6** · MLVU **76.2** · LVBench **57.1** · ScreenSpot Pro **54.5** · ERQA **43.8**

Long context:

- AA-LCR 25.6 and LongBench v2 38.7 at 262K — weak retrieval relative to the window; no MRCR/RULER figures.

### Normalized scores (1–100)

- **Tool use: 50/100.** BFCL-V4 43.6 and TAU2-Bench 48.8% describe a model that can hold a tool schema but drops multi-step tasks; no terminal or GDPval evidence at all.
- **Reasoning: 55/100.** GPQA 51.6 and MMLU-Pro 66.5 in thinking mode are respectable for 2B, but HMMT ~20, AA-LCR 25.6 and MultiChallenge 33.7 cap it; non-thinking mode is much weaker.
- **Context window: 74/100.** 262,144 native puts it in the 200K–500K band; the very low AA-LCR (25.6) means the window is nominal rather than usable at depth.
- **Multimodal: 70/100.** Image + video input with usable VL scores (OCRBench 84.5, AI2D 83.3, VideoMME 75.6) but weak reasoning-heavy vision (MMMU-Pro 50.3, MathVista 76.7) and text-only output.
- **Coding: 45/100.** No coding benchmark is published for the 2B at all; the score is a conservative floor for a model the vendor itself scopes to prototyping.
- **Cost efficiency: 100/100.** Apache-2.0 weights, free to self-host; not counted toward Overall.
- **Overall Score: 59/100.** Mean of tool use 50, reasoning 55, context 74, multimodal 70, coding 45. Best fit: on-device classification, OCR and fine-tuning testbeds; not a general assistant or agent.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-12 UTC
- Method: public internet research (official Qwen3.5-2B Hugging Face model card as primary source); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Qwen/Qwen3.5-2B — Hugging Face model card (benchmarks)](https://huggingface.co/Qwen/Qwen3.5-2B)
  - [Qwen blog — Qwen3.5](https://qwen.ai/blog?id=qwen3.5)
  - [LLM-Stats — Qwen3.5 family](https://llm-stats.com/models/qwen3.5-4b)
  - [Ollama — qwen3.5 library](https://ollama.com/library/qwen3.5:4b)