# Qwen3.5-4B — findings by Ernie 5.5 Flash

- Source: Alibaba Qwen (`Qwen/Qwen3.5-4B`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-4B (Qwen3.5 Small series)
- **Short description:** 4B-parameter natively multimodal (image-text-to-text) model from Alibaba's Qwen team, using a Gated DeltaNet + gated-attention hybrid with a vision encoder; aimed at local/on-device deployment, prototyping and fine-tuning.
- **Provider / access:** open weights on Hugging Face (`Qwen/Qwen3.5-4B`, Apache 2.0), Ollama (`qwen3.5:4b`), Microsoft Foundry catalog, vLLM/SGLang/Transformers serving.
- **Release / knowledge:** March 2026 (Qwen3.5 Small series); knowledge cutoff not published.
- **IDs:** `Qwen/Qwen3.5-4B` (HF), `qwen3.5:4b` (Ollama), `qwen--qwen3.5-4b` (Microsoft Foundry)
- **Context window:** 262,144 natively, extensible to 1,010,000 (model card).
- **Modalities:** text + image + video input; text output. Thinking and non-thinking modes, tool calling (`qwen3_coder` parser), structured output.
- **Pricing (as of 2026-11-12):** free / self-hosted (Apache 2.0 weights); hosted token pricing varies by provider and is not published by Qwen for this size.
- **Architecture:** 4B total params, 32 layers, hidden 2560, 8 × (3 × (Gated DeltaNet → FFN) → 1 × (Gated Attention → FFN)), 248,320 padded vocab, multi-token prediction trained; dense (no MoE).

### Raw benchmarks found

Agent / tool use:

- TAU2-Bench: **79.9%** (Qwen card, official setup with Claude Opus 4.5 airline fixes)
- BFCL-V4: **50.3** · VITA-Bench: **22.0** · DeepPlanning: **17.6**
- Terminal-Bench 2.1 / Tau3-Banking: **no verified public score found**
- GDPval-AA / Claw-Eval / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **76.2%** · MMLU-Pro: **79.1** · MMLU-Redux: **88.8** · SuperGPQA: **52.9** · C-Eval: **85.1**
- HLE: **no verified public score found**
- HMMT Feb 25: **74.0** · HMMT Nov 25: **76.8**
- AA-LCR: **57.0** · LongBench v2: **50.0**
- IFEval: **89.8** · IFBench: **59.2** · MultiChallenge: **49.0**
- Omniscience / Hallucination: **no verified public score found**

Coding:

- LiveCodeBench v6: **55.8%** · OJBench: **24.1**
- SWE-bench Verified / SWE-Pro / SciCode / DeepSWE: **no verified public score found**

Multimodal (vision-language rows from the same card):

- MMMU **77.6** / MMMU-Pro **66.3** · MathVista (mini) **85.1** · MathVision **74.6** · OmniDocBench1.5 **86.2** · OCRBench **85.0** · AI2D **89.6** · RealWorldQA **79.5** · VideoMME w/ subs **83.5** · MLVU **82.8** · LVBench **66.4**

Long context:

- AA-LCR 57.0 and LongBench v2 50.0 at the 262K window; no MRCR/RULER figures.

### Normalized scores (1–100)

- **Tool use: 65/100.** TAU2-Bench 79.9% is genuinely strong for a 4B model, but BFCL-V4 50.3, VITA-Bench 22.0 and DeepPlanning 17.6 show the agentic ceiling; no terminal/GDPval coverage.
- **Reasoning: 74/100.** GPQA Diamond 76.2 and HMMT ~75 are excellent for the size, with MMLU-Pro 79.1; SuperGPQA 52.9 and MultiChallenge 49.0 are the caps, and no HLE figure exists.
- **Context window: 76/100.** 262,144 native (1M extensible) sits in the 200K–500K band; AA-LCR 57.0 is mid, so no higher placement.
- **Multimodal: 80/100.** Native image + video input with strong published VL rows (MMMU 77.6, OmniDocBench 86.2, VideoMME 83.5, OCRBench 85.0); text-only output and no audio keep it below the 90 band.
- **Coding: 58/100.** LiveCodeBench v6 55.8 with OJBench 24.1 — competent small-model coding, well behind frontier; no SWE-bench Verified evidence.
- **Cost efficiency: 100/100.** Apache-2.0 weights, free to self-host; not counted toward Overall.
- **Overall Score: 71/100.** Mean of tool use 65, reasoning 74, context 76, multimodal 80, coding 58. Best fit: local multimodal assistants, OCR/document pipelines and fine-tuning experiments on a single GPU; not an agentic coding workhorse.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-12 UTC
- Method: public internet research (official Qwen3.5-4B Hugging Face model card as primary source, plus Ollama/Microsoft Foundry listings); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Qwen/Qwen3.5-4B — Hugging Face model card (benchmarks)](https://huggingface.co/Qwen/Qwen3.5-4B)
  - [Ollama — qwen3.5:4b](https://ollama.com/library/qwen3.5:4b)
  - [Microsoft Foundry — qwen--qwen3.5-4b](https://ai.azure.com/catalog/models/qwen--qwen3.5-4b)
  - [LLM-Stats — Qwen3.5-4B](https://llm-stats.com/models/qwen3.5-4b)
  - [Qwen blog — Qwen3.5](https://qwen.ai/blog?id=qwen3.5)