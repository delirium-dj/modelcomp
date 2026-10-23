# Flint — findings by DeepSeek 4.1 Flash

- Source: Recursive/Flint (`RecursiveSI/flint`, 40B-A2.5B)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Flint
- **Short description:** Recursive's open-weight 40B MoE coding agent with only ~2.5B active parameters, a 262K window and multi-turn tool use — designed to run locally on roughly 24GB and lead its size class on SWE-bench Pro/Verified and Terminal-Bench.
- **Provider / access:** Hugging Face (`RecursiveSI/flint`), Ollama (`flint:40b`), LM Studio, vLLM day-0 support, and a free hosted endpoint (`recursive/flint-v1.0`).
- **Release / knowledge:** 2026-10-21; knowledge cutoff not disclosed.
- **IDs:** `RecursiveSI/flint`; `recursive/flint-v1.0`; Apache 2.0.
- **Context window:** 262,144 tokens; up to ~236K output.
- **Modalities:** text in/out; reasoning and multi-turn tool calling; no image/audio/video input.
- **Pricing (as of 2026-10-23):** free hosted preview and free Apache-2.0 weights; local inference cost only.
- **Architecture:** 49-layer pre-norm sparse MoE, 39.8B total / ~2.5B active; NVFP4 and BF16 checkpoints.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **54.9%** (publisher-reported; Recursive model card)
- Multi-turn tool use: vendor-stated, no Tau2/BFCL number published

Reasoning / knowledge:

- GPQA-Diamond and GSM8K: used as accuracy-parity checks for the vLLM kernels, but **no absolute scores published** on the pages reviewed

Coding:

- SWE-bench Pro v2: **89.7%**; SWE-bench Verified: **74.2%** (publisher-reported; Recursive model card)
- Independently described as leading its MoE size class on those three coding benchmarks (Startup Fortune, Ollama)

Long context:

- 262K vendor-stated; no MRCR/RULER score published.

Multimodal (VL) evidence:

- none — text-only model

### Normalized scores (1–100)

- **Tool use: 70/100.** Terminal-Bench 2.1 54.9% is strong for a 2.5B-active model, but no independent Tau2/BFCL result exists (Recursive model card).
- **Reasoning: 65/100.** Only publisher-side parity checks were released; no GPQA/HLE absolute score to anchor a higher value.
- **Context window: 75/100.** 262K is upper-mid tier, with no retrieval benchmark to test effective use.
- **Multimodal: 15/100.** Text-only model (template floor for text-only input).
- **Coding: 80/100.** SWE-bench Pro v2 89.7% and Verified 74.2% are exceptional for the active-parameter budget (Recursive model card; BenchLM).
- **Cost efficiency: 96/100.** Apache 2.0, ~24GB local footprint and a free preview endpoint.
- **Overall Score: 61/100.** Mean of the five quality dims (70+65+75+15+80)/5 = 61.0 → 61. Best-fit: local repository agents where a 24GB GPU/Mac is the hard constraint.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-23
- Method: public internet research (Recursive model card via Ollama/LM Studio/vLLM, BenchLM, Startup Fortune); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
