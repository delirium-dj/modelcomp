# Qwen 3.5 9B — findings by Iceman

- Source: Qwen/Qwen3.5-9B
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-9B
- **Short description:** Qwen3.5-9B is a dense 9B-parameter open-weight multimodal (image/video + text) causal language model (Apache 2.0) with 262K native context, strong reasoning/coding/agent and vision capabilities for its size.
- **Provider / access:** Open weights on Hugging Face (`Qwen/Qwen3.5-9B`, Apache 2.0 license) and hosted providers. Local metadata lists `qwen/qwen3.5-9b`, pricing ~$0.10/$0.15 per 1M, and `noFreeId`.
- **Release / knowledge:** Hugging Face model card reviewed 2026-11-10. Knowledge cutoff not explicitly stated in reviewed source (card notes June 2026-era context in some benchmark reporting; use card as source).
- **IDs:** `Qwen3.5-9B`, `Qwen/Qwen3.5-9B`.
- **Context window:** 262,144 tokens natively, extensible up to 1,010,000 (HF card).
- **Modalities:** Text, image, and video input; text output.
- **Pricing (as of 2026-11-10):** Open weights free to self-host (Apache 2.0). Hosted ~$0.10/$0.15 per 1M in/out (local metadata); provider pricing varies.
- **Architecture:** Dense multimodal transformer with vision encoder, 9B parameters, 32 layers, hybrid Gated DeltaNet + Gated Attention layout, 262K native context (HF card).

### Raw benchmarks found

> Verified figures below are from the Hugging Face model card for `Qwen/Qwen3.5-9B` (benchmark tables) unless noted.

Agent / tool use:

- BFCL-V4: **66.1**
- TAU2-Bench: **79.1** (airline domain per card footnote setup)
- VITA-Bench: **29.8**
- DeepPlanning: **18.0**
- ScreenSpot Pro (visual agent): **65.2**
- OSWorld-Verified (visual agent): **41.8**
- AndroidWorld (visual agent): **57.8**

Reasoning / knowledge:

- MMLU-Pro: **82.5**
- MMLU-Redux: **91.1**
- SuperGPQA: **58.2**
- GPQA Diamond: **81.7**
- HMMT Feb 25: **83.2**
- HMMT Nov 25: **82.9**
- AA-LCR: **63.0**
- LongBench v2: **55.2**

Coding:

- LiveCodeBench v6: **65.6**
- OJBench: **29.2**

Long context:

- AA-LCR: **63.0**
- LongBench v2: **55.2**
- 262K native context (extensible to ~1.01M).

Multimodal / vision-language:

- MMMU: **78.4**
- MMMU-Pro: **70.1**
- MathVista (mini): **85.7**
- MathVision: **78.9**
- MMBenchEN-DEV-v1.1: **90.1**
- MMStar: **79.7**
- RealWorldQA: **80.3**
- HallusionBench: **69.3**
- OmniDocBench1.5: **87.7**
- CharXiv (RQ): **73.0**
- MMLongBench-Doc: **57.7**
- OCRBench: **89.2**
- VideoMME (w sub.): **84.5**
- VideoMMMU: **78.9**
- TIR-Bench: **45.6/31.9** (with/without CI)

### Normalized scores (1–100)

> Derived from verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded).

- **Tool use: 80/100.** Good tool-use/agent results for a 9B model (BFCL-V4 66.1, TAU2-Bench 79.1, visual agent benchmarks ScreenSpot Pro 65.2, OSWorld-Verified 41.8, AndroidWorld 57.8), though planning/complex agent tasks remain limited.
- **Reasoning: 82/100.** Strong reasoning for size (MMLU-Pro 82.5, GPQA Diamond 81.7, HMMT 82.9–83.2, SuperGPQA 58.2, AA-LCR 63.0).
- **Context window: 88/100.** 262K native context (extensible to ~1.01M) with solid long-context benchmarks (AA-LCR 63.0, LongBench v2 55.2).
- **Multimodal: 88/100.** Excellent multimodal capability for a 9B model across image/video/document/OCR tasks (MMMU-Pro 70.1, MathVista 85.7, MMBench 90.1, OmniDocBench1.5 87.7, OCRBench 89.2, VideoMME 84.5).
- **Coding: 78/100.** Solid coding/reasoning-coding for size (LiveCodeBench v6 65.6) but limited by scale on harder coding benchmarks (OJBench 29.2) and no published SWE-bench/Terminal-Bench figures.
- **Cost efficiency: 96/100.** Apache 2.0 open weights and low hosted pricing (~$0.10/$0.15 per 1M) with strong capability-per-dollar for local/edge and high-volume use.
- **Overall Score: 83/100.** Mean of the five non-cost dims (80, 82, 88, 88, 78) = 83.2 → 83. Best fit as a compact, cost-efficient multimodal reasoning/agent model for edge, local, and high-volume workloads.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to Hugging Face model card; scores are normalized 1–100 interpretations from verified benchmark figures, not official vendor scores.
- Reference URLs:
  - [Qwen3.5-9B model card (Hugging Face)](https://huggingface.co/Qwen/Qwen3.5-9B)
  - Local repository metadata consulted: `model/qwen-3.5-9b/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
