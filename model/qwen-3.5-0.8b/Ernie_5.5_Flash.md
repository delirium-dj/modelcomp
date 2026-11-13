# Qwen3.5-0.8B — findings by Ernie 5.5 Flash

- Source: Alibaba Qwen (`Qwen/Qwen3.5-0.8B`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-0.8B (Qwen3.5 Small series)
- **Short description:** Sub-1B natively multimodal (image-text-to-text) model from Alibaba's Qwen team, the smallest member of the Qwen3.5 small series; positioned for extreme on-device / edge deployment and research.
- **Provider / access:** open weights on Hugging Face (`Qwen/Qwen3.5-0.8B`, Apache 2.0), Ollama, vLLM/SGLang/Transformers.
- **Release / knowledge:** March 2026 (Qwen3.5 Small series); knowledge cutoff not published.
- **IDs:** `Qwen/Qwen3.5-0.8B` (HF); Ollama `qwen3.5:0.8b`
- **Context window:** 262,144 natively (model card); no extended-length claim.
- **Modalities:** text + image + video input; text output. Thinking and non-thinking modes, tool calling.
- **Pricing (as of 2026-11-12):** free / self-hosted (Apache 2.0 weights).
- **Architecture:** ~0.8B dense params, Gated DeltaNet + gated-attention hybrid, vision encoder, 248,320 padded vocab.

### Raw benchmarks found

Agent / tool use:

- BFCL-V4: **25.3** (Qwen card, thinking) · TAU2-Bench: **11.6%**
- Terminal-Bench / GDPval-AA / Claw-Eval / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA: **11.9%** · MMLU-Pro: **42.3** · MMLU-Redux: **59.5** · SuperGPQA: **21.3** · C-Eval: **50.5**
- HLE: **no verified public score found**
- HMMT Feb 25 / Nov 25: **not reported** (`--` in the vendor card)
- AA-LCR: **4.7** · LongBench v2: **26.1**
- IFEval: **44.0** · IFBench: **21.0** · MultiChallenge: **18.9**

Coding:

- LiveCodeBench / SWE-bench Verified / SciCode: **no verified public score found for the 0.8B**

Multimodal:

- MMMU **49.0 / 47.4** (thinking/non-thinking) · MMMU-Pro **31.2 / 31.4** · AI2D **69.9 / 68.7** · OCRBench **74.5 / 79.1** · RealWorldQA **63.4** · VideoMME w/ subs **63.8** · VideoMMMU **44.3** · ScreenSpot Pro **46.5** · CountBench **77.0**

Long context:

- AA-LCR 4.7 and LongBench v2 26.1 at 262K — the window is nominal; retrieval is near-random.

### Normalized scores (1–100)

- **Tool use: 32/100.** BFCL-V4 25.3 and TAU2-Bench 11.6% show tool calling that mostly fails on multi-step tasks; no terminal or GDPval coverage.
- **Reasoning: 35/100.** GPQA 11.9% and AA-LCR 4.7 are near the floor, with MMLU-Pro 42.3 the only mid-band signal; HMMT is unreported for this size.
- **Context window: 62/100.** 262,144 nominal tokens sits in the 100K–200K-band floor region of the tier map given the measured retrieval collapse (AA-LCR 4.7); scored at the bottom of the 100K–200K band.
- **Multimodal: 55/100.** Image + video input with OCRBench 79.1 and AI2D 69.9 usable, but MMMU 49.0 and MMMU-Pro 31.2 are weak; text-only output.
- **Coding: 35/100.** No coding benchmark is published for the 0.8B; the floor score reflects a model too small for standalone code work.
- **Cost efficiency: 100/100.** Apache-2.0 weights, free to self-host; not counted toward Overall.
- **Overall Score: 44/100.** Mean of tool use 32, reasoning 35, context 62, multimodal 55, coding 35. Best fit: always-on on-device classification, OCR and keyword/embedding-style tasks; not usable as a general assistant.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-12 UTC
- Method: public internet research (official Qwen3.5-2B model card, which reports the full Qwen3.5 small-series table including the 0.8B column); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Qwen/Qwen3.5-2B — Hugging Face card (0.8B comparison column)](https://huggingface.co/Qwen/Qwen3.5-2B)
  - [Qwen blog — Qwen3.5](https://qwen.ai/blog?id=qwen3.5)
  - [Ollama — qwen3.5 library](https://ollama.com/library/qwen3.5:4b)