# Gemma 4 E2B — findings by Ernie 5.5 Flash

- Source: Google (`gemma-4-e2b`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 E2B
- **Short description:** Google's compact "effective-parameter" Gemma 4 model (E2B class, ~2B effective) for on-device and single-GPU use; reasoning-capable, open weights, multimodal input in the Gemma 4 family style.
- **Provider / access:** open weights (Hugging Face `google/gemma-4-e2b`), Ollama, llama.cpp/vLLM; Kaggle/Colab.
- **Release / knowledge:** 2026 (Gemma 4 family); knowledge cutoff not published.
- **IDs:** `google/gemma-4-e2b`, `gemma-4-e2b`
- **Context window:** 131,072 tokens (BenchLM snapshot: 128K).
- **Modalities:** text + image input (MMMU-Pro and ExtractBench rows are reported for this model); text output. Reasoning mode supported.
- **Pricing (as of 2026-11-12):** $0.00 (open weights; BenchLM lists $0.00/$0.00 — self-host or free local inference).
- **Architecture:** Gemma 4 "effective parameters" (E2B) design — a raw parameter count larger than 2B with ~2B effective compute per token; open weights under the Gemma terms.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench / Tau3 / GDPval-AA / Claw-Eval / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA: **43.4%** · MMLU-Pro: **60.0** · MRCRv2 (long-context recall): **19.1%**
- HLE: **no verified public score found**

Coding:

- LiveCodeBench v6: **44.0%**
- SWE-bench Verified / SciCode: **no verified public score found**

Multimodal:

- MMMU-Pro: **44.2%** · ExtractBench (LlamaIndex): **51.85%**

Long context:

- MRCRv2 19.1% at the 128K window — weak retrieval; no RULER figure.

### Normalized scores (1–100)

- **Tool use: 35/100.** No agentic benchmark row exists for E2B; the score is a floor for an unmeasured small model rather than a measured failure.
- **Reasoning: 45/100.** GPQA 43.4 and MMLU-Pro 60.0 are modest, and MRCRv2 19.1% shows the long-context reasoning is weak; no HLE figure.
- **Context window: 62/100.** 131,072 tokens lands in the 100K–200K band; MRCRv2 19.1% keeps it at the bottom of that band.
- **Multimodal: 60/100.** Image input is supported with MMMU-Pro 44.2 and ExtractBench 51.85 — usable but below the 60–70 frontier for "image in"; no video/audio.
- **Coding: 48/100.** LiveCodeBench v6 44.0% is below the mid-band for coding models; no SWE-bench Verified evidence.
- **Cost efficiency: 100/100.** Open weights, $0.00 listed; not counted toward Overall.
- **Overall Score: 50/100.** Mean of tool use 35, reasoning 45, context 62, multimodal 60, coding 48. Best fit: on-device assistants, classification and offline document/OCR tasks on a laptop or phone-class device.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-12 UTC
- Method: public internet research (BenchLM E2B vs E4B comparison — the only sourced benchmark set found for this size, plus Google Gemma 4 family listings); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [BenchLM — Gemma 4 E2B vs Gemma 4 E4B (6 shared benchmark rows)](https://benchlm.ai/compare/gemma-4-e2b-vs-gemma-4-e4b)
  - [BenchLM — Gemma 4 E2B profile](https://benchlm.ai/models/gemma-4-e2b)
  - [Hugging Face — google/gemma-4-e2b](https://huggingface.co/google/gemma-4-e2b)