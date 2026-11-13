# Gemma 4 E4B — findings by Ernie 5.5 Flash

- Source: Google (`gemma-4-e4b`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 E4B
- **Short description:** Google's mid-compact Gemma 4 model (E4B class, ~4B effective) for single-GPU and edge-server use; reasoning-capable, open weights, multimodal input. Also serves as the base checkpoint for NVIDIA's Nemotron 3.5 Bolt E4B post-training.
- **Provider / access:** open weights (Hugging Face `google/gemma-4-e4b`), Ollama, vLLM/llama.cpp.
- **Release / knowledge:** 2026 (Gemma 4 family); knowledge cutoff not published.
- **IDs:** `google/gemma-4-e4b`, `gemma-4-e4b`
- **Context window:** 131,072 tokens (BenchLM snapshot: 128K).
- **Modalities:** text + image input (MMMU-Pro, ExtractBench, ParseBench rows reported); text output. Reasoning mode supported.
- **Pricing (as of 2026-11-12):** $0.00 (open weights; BenchLM lists $0.00/$0.00).
- **Architecture:** Gemma 4 E4B "effective parameters" design; open weights under the Gemma terms.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench / Tau3 / GDPval-AA / Claw-Eval / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA: **58.6%** · MMLU-Pro: **69.4** · MRCRv2: **25.4%**
- HLE: **no verified public score found**

Coding:

- LiveCodeBench v6: **52.0%**
- SWE-bench Verified / SciCode: **no verified public score found**

Multimodal:

- MMMU-Pro: **52.6%** · ExtractBench (LlamaIndex): **69.64%** · ParseBench: **41.13%**

Long context:

- MRCRv2 25.4% at the 128K window — still weak for the window size; no RULER figure.

### Normalized scores (1–100)

- **Tool use: 35/100.** No agentic benchmark row exists for E4B; the score is a floor for an unmeasured small model.
- **Reasoning: 55/100.** GPQA 58.6 and MMLU-Pro 69.4 are solid for the class, but MRCRv2 25.4% shows weak long-context reasoning; no HLE figure.
- **Context window: 62/100.** 131,072 tokens, 100K–200K band; MRCRv2 25.4% keeps it low in that band.
- **Multimodal: 65/100.** Image input with ExtractBench 69.64 and MMMU-Pro 52.6 — usable document/chart understanding for the size; ParseBench 41.13 is the weak spot, and there is no video/audio input.
- **Coding: 55/100.** LiveCodeBench v6 52.0% is mid-band; no SWE-bench Verified evidence.
- **Cost efficiency: 100/100.** Open weights, $0.00 listed; not counted toward Overall.
- **Overall Score: 54/100.** Mean of tool use 35, reasoning 55, context 62, multimodal 65, coding 55. Best fit: local document/chart assistants, OCR pipelines and as a fine-tuning base (it is literally the base of NVIDIA's Nemotron 3.5 Bolt E4B).

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-12 UTC
- Method: public internet research (BenchLM E2B vs E4B comparison, NVIDIA Nemotron 3.5 Bolt E4B model card referencing Gemma-4-E4B-it as its base); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [BenchLM — Gemma 4 E2B vs Gemma 4 E4B (7 sourced rows)](https://benchlm.ai/compare/gemma-4-e2b-vs-gemma-4-e4b)
  - [BenchLM — Gemma 4 E4B profile](https://benchlm.ai/models/gemma-4-e4b)
  - [NVIDIA — Nemotron 3.5 Bolt E4B model card (post-trained from Gemma-4-E4B-it)](https://build.nvidia.com/nvidia/nemotron-3.5-bolt-e4b/modelcard)
  - [Ollama — nemotron-3.5-bolt:e4b (family lineage)](https://ollama.com/library/nemotron-3.5-bolt:e4b)