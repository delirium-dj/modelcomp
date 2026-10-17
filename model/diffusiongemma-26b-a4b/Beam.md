# DiffusionGemma 26B A4B — findings by Beam

- Source: Google/DiffusionGemma 26B A4B, `google/diffusiongemma-26b-a4b`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DiffusionGemma 26B A4B
- **Short description:** Google's diffusion-based text model (Jun 10, 2026): 25.2B total / 3.8B active MoE, 256K context. Text/image/video in. MMLU Pro 77.6%, GPQA Diamond 73.2%. 1,100+ tok/s on H100. Open weights (Apache 2.0). Trades some accuracy for speed vs Gemma 4 26B A4B.
- **Provider / access:** HuggingFace `google/diffusiongemma-26b-a4b-it`; NVIDIA NIM; OpenRouter.
- **Release / knowledge:** Released 2026-06-10; knowledge cutoff Jan 2025.
- **IDs:** `google/diffusiongemma-26b-a4b`
- **Context window:** 262,144 tokens; max output not stated.
- **Modalities:** text, image, video in; text out; reasoning yes (configurable thinking); tool calling yes. Open weights (Apache 2.0).
- **Pricing (as of 2026-10-17):** Free (open weights); self-host.
- **Architecture:** MoE, 25.2B total / 3.8B active, encoder-decoder (discrete diffusion), 256-token blocks, Apache 2.0. Based on Gemma 4 26B A4B.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): not individually reported
- Tau2 (average over 3): **56.2%** (NVIDIA model card)
- Terminal-Bench: not reported

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): not individually reported
- MMLU Pro: **77.6%** (NVIDIA model card)
- GPQA Diamond: **73.2%** (NVIDIA model card)
- HLE (no tools): **11.0%** (NVIDIA model card)
- HLE (with search): **11.9%** (NVIDIA model card)
- BigBench Extra Hard: **47.6%** (NVIDIA model card)
- MMMLU: **81.5%** (NVIDIA model card)
- AIME 2026 (no tools): **69.1%** (NVIDIA model card)
- MATH-Vision: **70.5%** (NVIDIA model card)
- MRCR v2 8 needle 128k: **32.0%** (NVIDIA model card)

Coding:

- Coding public-lane (BenchLM): not individually reported
- LiveCodeBench v6: **69.1%** (NVIDIA model card)
- Codeforces ELO: **1429** (NVIDIA model card)
- HumanEval: **94.09%** (NVFP4, HuggingFace)

Long context:

- 256K window; MRCR v2 8 needle 128k **32.0%** (NVIDIA model card).

Multimodal:

- Multimodal public-lane (BenchLM): not individually reported
- MMMU Pro: **54.3%** (NVIDIA model card)
- OmniDocBench 1.5: **0.319** (NVIDIA model card, lower is better)
- MATH-Vision: **70.5%** (NVIDIA model card)
- MedXPertQA MM: **49.0%** (NVIDIA model card)

### Normalized scores (1–100)

- **Tool use: 60/100.** Tau2 56.2%; caps at no published Terminal-Bench/OSWorld.
- **Reasoning: 66/100.** MMLU Pro 77.6%, GPQA 73.2%, HLE 11.0%/11.9%, AIME 69.1%, MATH-Vision 70.5%, BigBench 47.6%; caps at HLE 11.9%.
- **Context window: 60/100.** 256K window; MRCR v2 32.0%; caps at no published AA-LCR.
- **Multimodal: 66/100.** Text/image/video in; MMMU Pro 54.3%, MATH-Vision 70.5%, MedXPertQA 49.0%; caps at MMMU Pro 54.3%.
- **Coding: 64/100.** LiveCodeBench 69.1%, Codeforces 1429, HumanEval 94.09%; caps at no published SWE-bench.
- **Cost efficiency: 100/100.** Free (open weights).
- **Overall Score: 63.2/100.** Mean of five quality dims (BenchLM not computed); best-fit for high-speed local text generation at zero cost. Trades accuracy for speed vs Gemma 4 26B A4B.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (NVIDIA NIM, HuggingFace, arXiv technical report, Unsloth); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings. DiffusionGemma trades some accuracy for substantially greater decoding speed vs Gemma 4 26B A4B.<|end|>>2>