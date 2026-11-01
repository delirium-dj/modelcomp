# Nemotron 3 Ultra (Free access tier) — findings by GPT 6 Sol

- Source: NVIDIA (`NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3 Ultra (Free access tier).
- **Short description:** NVIDIA's 550B/55B-active open-weight text reasoning model for long-context agents. **Free** names a trial/serving tier of the same model, not independently trained weights; BF16 and NVFP4 are distinct precision artifacts whose measured scores must be labeled separately ([NVIDIA model card](https://build.nvidia.com/nvidia/nemotron-3-ultra-550b-a55b/modelcard)).
- **Provider / access:** OpenRouter `nvidia/nemotron-3-ultra-550b-a55b:free` via `https://openrouter.ai/api/v1/chat/completions`; NVIDIA trial `nvidia/nemotron-3-ultra-550b-a55b` via `https://integrate.api.nvidia.com/v1/chat/completions`; Zen `opencode/nemotron-3-ultra-free` is an OpenCode-only promotional lane. OpenRouter's separately billed `nvidia/nemotron-3-ultra-550b-a55b` serves the same underlying model (provider precision may vary) ([free route](https://openrouter.ai/nvidia/nemotron-3-ultra-550b-a55b:free), [NVIDIA API example](https://build.nvidia.com/nvidia/nemotron-3-ultra-550b-a55b)).
- **Release / knowledge:** **2026-06-04** release; pretraining data through September 2025, post-training through May 2026, not a single undifferentiated cutoff ([NVIDIA card](https://build.nvidia.com/nvidia/nemotron-3-ultra-550b-a55b/modelcard)).
- **IDs:** BF16 weights `nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16`, NVIDIA NVFP4 quantized weights, OpenRouter `nvidia/nemotron-3-ultra-550b-a55b:free` (tier), NVIDIA NIM `nvidia/nemotron-3-ultra-550b-a55b` (trial route). No separate Free checkpoint.
- **Context window:** Weights support **up to 1M**; [OpenRouter's free route](https://openrouter.ai/nvidia/nemotron-3-ultra-550b-a55b:free) lists **1,000,000 combined tokens / 65,536 max output**. NVIDIA NIM [defaults to 262,144](https://docs.nvidia.com/nim/large-language-models/2.0.5/day-0/get-started-nemotron-3-ultra.html); host-specific limits must not be inferred from weights alone.
- **Modalities:** Text in/text out, function calls and toggleable reasoning; no native image/audio/video. OpenRouter free route accepts tools but states `response_format` is not supported ([route](https://openrouter.ai/nvidia/nemotron-3-ultra-550b-a55b:free)).
- **Pricing (as of 2026-11-01):** [OpenRouter's live catalog](https://openrouter.ai/api/v1/models) currently lists **$0/$0** input/output for the `:free` tier, with rate and daily caps (OpenRouter's [free-model policy](https://openrouter.ai/collections/free-models) lists 20 RPM / 50 requests per day for a basic account). The **paid** route in the same catalog lists **$0.60/$2.40/$0.12** input/output/cached input per million; don't transfer paid rates to the free ID. NVIDIA trial terms apply to its direct free endpoint; self-hosting needs 4×GB200/B200 or 8×H100-class GPUs and incurs hardware cost ([model card](https://build.nvidia.com/nvidia/nemotron-3-ultra-550b-a55b/modelcard)).
- **Architecture:** LatentMoE + Mamba-2/attention with MTP; **550B total / 55B active** headline and open weights under **OpenMDW-1.1, not Apache-2.0** ([exact BF16 card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16), [NVIDIA NIM card](https://build.nvidia.com/nvidia/nemotron-3-ultra-550b-a55b/modelcard)).

### Raw benchmarks found

- **Agent/tool use:** NVIDIA BF16 [Terminal-Bench 2.1 **56.4%**, τ³ average **70.9%** (airline 81.5, retail 86.4, telecom 92.9, banking 22.6)](https://build.nvidia.com/nvidia/nemotron-3-ultra-550b-a55b/modelcard); NVFP4 TB2.1 **53.9%**, τ³ average **70.3%** under its own setting. Independent [Vals TB2.1 **50.94% ±2.92**](https://www.vals.ai/models/nvidia_nemotron-3-ultra-550b-a55b) and [AA launch index **47.7 NVFP4 / 48.2 BF16**](https://artificialanalysis.ai/articles/nvidia-nemotron-3-ultra-released) demonstrate respectable but variable agent performance. The newer AA Index **v5 12** is a different suite; not a direct regression from 47.7 ([current model profile](https://artificialanalysis.ai/models/nvidia-nemotron-3-ultra-550b-a55b)).
- **Reasoning:** NVIDIA BF16 [GPQA Diamond **87.0%** without tools, HLE **26.7%** without tools](https://build.nvidia.com/nvidia/nemotron-3-ultra-550b-a55b/modelcard); NVIDIA NVFP4 GPQA **87.9%**, HLE **26.1%**. Independent [Vals GPQA **86.11% ±1.74**](https://www.vals.ai/models/nvidia_nemotron-3-ultra-550b-a55b), consistent within methodological uncertainty.
- **Coding:** NVIDIA BF16 [SWE-bench Verified **71.9%**, SWE Multilingual **67.7%**, SciCode **44.6%**](https://build.nvidia.com/nvidia/nemotron-3-ultra-550b-a55b/modelcard); NVFP4 SWE Verified **69.7%**. Independent [Vals SWE-bench **69.0% ±2.07**, LiveCodeBench **85.98% ±0.99**, Code Migration **4.91% ±1.59**](https://www.vals.ai/models/nvidia_nemotron-3-ultra-550b-a55b), showing large task/harness dependence; Vals page does not pin weight precision.
- **Long context:** NVIDIA post-trained BF16 [RULER 1M **94.7%**, AA-LCR **65.4%**](https://build.nvidia.com/nvidia/nemotron-3-ultra-550b-a55b/modelcard); NVFP4 **94.0%** and **65.5%** respectively. The technical paper's **RULER 1M 76.83%** is for the **pretraining base model**, not an inconsistency with the post-trained instruction-model figure ([technical report](https://research.nvidia.com/labs/nemotron/files/NVIDIA-Nemotron-3-Ultra-Technical-Report.pdf)).
- **Multimodal:** No verified image/audio/video evaluation for the exact text-only model. Tool support does not constitute native multimodal input.

### Normalized scores (1–100)

- **Tool use: 69/100.** Independent TB2.1 ~51 versus NVIDIA 56, τ³ banking ~23 limits broad agent claims.
- **Reasoning: 75/100.** Independently replicated GPQA ~86 and modest HLE no-tools ~27.
- **Context window: 90/100.** Vendor RULER 1M ~94 on released weights, with a smaller default NIM context and no independent near-limit confirmation.
- **Multimodal: 15/100.** Text only.
- **Coding: 70/100.** SWE ~69–72 and LCB ~86, but low independent Code Migration.
- **Cost efficiency: 88/100.** Genuinely zero-priced rate-limited route; paid production route and very large local serving are materially dearer.
- **Overall Score: 64/100.** Half-up mean (69 + 75 + 90 + 15 + 70) / 5 = 63.8; long-context text agents when the free lane is available.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-11-01 UTC
- Method: Three fresh official, independent and tier-access searches; vendor BF16/NVFP4 and base/instruct runs separated, free access not treated as new weights. Scores are normalized judgments.
- Reference URLs:
  - [NVIDIA NIM card, architecture, benchmark precision table and terms](https://build.nvidia.com/nvidia/nemotron-3-ultra-550b-a55b/modelcard)
  - [NVIDIA exact BF16 weights and OpenMDW license](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16)
  - [NVIDIA NIM context default and APIs](https://docs.nvidia.com/nim/large-language-models/2.0.5/day-0/get-started-nemotron-3-ultra.html)
  - [Vals independently measured exact-model suite](https://www.vals.ai/models/nvidia_nemotron-3-ultra-550b-a55b)
  - [Artificial Analysis independent BF16/NVFP4 launch comparison](https://artificialanalysis.ai/articles/nvidia-nemotron-3-ultra-released)
  - [OpenRouter free route ID, limits and pricing](https://openrouter.ai/nvidia/nemotron-3-ultra-550b-a55b:free)
- Future sources: add a new file next to this one using the same headings.
