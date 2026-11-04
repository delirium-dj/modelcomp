# Muse Spark Open — findings by Beam

- Source: Meta (`opencode/muse-spark-open`)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark Open
- **Short description:** Meta's open-weight, natively multimodal MoE (816B total / 42B active) derived from the closed Muse Spark line, released 2026-10-15 with extra safety post-training for standalone (unguarded) use. Strong on tool calling and agentic workflows; mid-tier on raw intelligence vs. GLM 5.3 / Kimi K3 / Qwen 3.8. Distinct weights from Muse Spark 1.3 (not a tier).
- **Provider / access:** Meta Model API `meta/muse-spark-open` (OpenAI-compatible Chat Completions/Responses); hosted via Together AI, Fireworks, Baseten, Groq (preview, 131K ctx), Modal, Nebius, OpenRouter (6 providers); self-host BF16 (~1.65 TB, 8 GPUs) or NVFP4 (~537 GB, 4-GPU Blackwell) via SGLang/vLLM/TensorRT-LLM/MLX/llama.cpp.
- **Release / knowledge:** Released 2026-10-15; knowledge cutoff 2026-01-04 (HF chat-template default).
- **IDs:** `opencode/muse-spark-open` (Zen); `meta/muse-spark-open` (OpenRouter); HF `meta-models/Muse-Spark-Open-816B-A42B`.
- **Context window:** 1,048,576 tokens total (input/output); max output reported up to 131,072 on some hosts.
- **Modalities:** text, image, audio, video in; text out; reasoning yes (reasoning_effort low/medium/high/xhigh, default xhigh); tool calling yes; structured output yes; 100+ languages.
- **Pricing (as of 2026-11-04):** hosted $1.25 / 1M input, $0.15 / 1M cached input, $4.25 / 1M output (Together/OpenRouter median); self-host $0 license cost (Muse Model License, commercial threshold at $20M aggregate revenue) + compute.
- **Architecture:** sparse MoE transformer, 816B total / 42B active, 256 experts (8 active per token), 1.8B-param perception encoder (50 layers, 1536 hidden, 16 heads, 14x14 patch, 4096 output), gated attention (QK-norm), GQA (128 Q / 16 KV heads, head dim 64), 1M context; BF16 and NVFP4 checkpoints.

### Raw benchmarks found

Agent / tool use:

- MCP-Atlas: **89.2** (leads Meta's comparison table)
- JobBench: **61.8**
- Terminal-Bench 2.1 (Terminus 2 agent): **76.4%**
- Terminal-Bench 4.0 (AA): **8.1%**
- Toolathlon Verified: **72.8%**
- OSWorld Verified: **80.4%**
- DeepSWE 1.1: **60.0**
- SWE-Atlas-QnA: **58.0**
- GDPval-AA v2: **1401 Elo** (AA: 45.1%)
- AA-Omniscience: **25** (accuracy index)
- CritPt: **14.9%**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **25** (OpenRouter 24.9)
- GPQA Diamond: **89.0%**
- HLE (w/ tools): **61.0%** (AA); HLE (no tools): **26.1%**
- HLE-Diamond (no tools): **26.1%**
- AA-LCR: **78.3%**
- SciCode: **58.5%** (AA 58.4%)
- AA-Omniscience Accuracy: **42.0%**; Non-Hallucination Rate: **72.0%**

Coding:

- DeepSWE 1.1: **60.0**
- SWE-Atlas-QnA: **58.0**
- Terminal-Bench 2.1: **76.4%**
- SciCode: **58.5%**
- Vals Code Migration v1.1: **26.9%**
- Vals EMB v1.1: **62.0%**
- Terminal-Bench 4.0: **8.1%**

Long context:

- 1M-token window; no published MRCR/RULER retrieval number for the open weights found (provisional).

Multimodal:

- ZeroBench (w/ tools): **50.0**
- BabyVision (w/ tools): **80.2**
- SimpleVQA (w/ tools): **73.6**
- WorldVQA (w/ tools): **49.4**
- IntPhys2: **68.3**
- VideoMMEv2: **61.5**
- Design Arena: Models Arena 3D Elo **1270**, Code Categories **1303**, Game Dev **1276**, UI Component **1327**, Website **1303**
### Normalized scores (1–100)

- **Tool use: 86/100.** Leads Meta's table on MCP-Atlas (89.2) and JobBench (61.8); Terminal-Bench 2.1 76.4%, Toolathlon 72.8%, OSWorld 80.4%, DeepSWE 60, SWE-Atlas-QnA 58, GDPval-AA 1401 Elo; caps at AA Intelligence 25 (mid-tier) and Terminal-Bench 4.0 8.1%.
- **Reasoning: 76/100.** GPQA Diamond 89.0%, HLE w/ tools 61.0% / no tools 26.1%, AA-LCR 78.3%, SciCode 58.5%, CritPt 14.9%, AA-Omniscience 25/42%; trails GLM 5.3 (45) and Kimi K3 (44) on AA Intelligence (25).
- **Context window: 85/100.** 1M-token window with no published long-context retrieval benchmark (provisional; caps pending MRCR/RULER).
- **Multimodal: 88/100.** Text/image/audio/video input via 1.8B perception encoder; ZeroBench 50.0, BabyVision 80.2, SimpleVQA 73.6, WorldVQA 49.4, IntPhys2 68.3, VideoMMEv2 61.5; text output only.
- **Coding: 74/100.** DeepSWE 60, SWE-Atlas-QnA 58, Terminal-Bench 2.1 76.4%, SciCode 58.5%, Vals Code Migration 26.9%; trails GLM 5.3/Kimi K3 on coding per independent reviews.
- **Cost efficiency: 80/100.** Hosted $1.25/$4.25 per 1M (cached $0.15); open weights $0 license but heavy self-host hardware (700GB–2TB VRAM).
- **Overall Score: 82/100.** Half-up mean of the five quality dims (86+76+85+88+74)/5 = 81.8 → 82; best-fit for self-hostable, tool-heavy agents needing 1M context, not top open coding model.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-11-04
- Method: public internet research (Meta model card/docs/blog, Hugging Face, Artificial Analysis, OpenRouter, llm-stats, ActivePieces, eesel AI, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Meta: Muse Spark Open model page](https://dev.meta.ai/models/muse-spark-open)
  - [Meta: Muse Spark Open docs](https://dev.meta.ai/docs/muse-spark-open)
  - [Meta Research: Introducing Muse Spark Open](https://research.meta.ai/blog/muse-spark-open)
  - [Hugging Face: Muse-Spark-Open-816B-A42B](https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B)
  - [Artificial Analysis: Muse Spark Open](https://artificialanalysis.ai/models/muse-spark-open)
  - [OpenRouter: Meta Muse Spark Open](https://openrouter.ai/models/meta/muse-spark-open)
  - [llm-stats: Muse Spark Open](https://llm-stats.com/models/muse-spark-open)
  - [ActivePieces: Muse Spark Open benchmarks and cost](https://www.activepieces.com/blog/muse-spark-open-benchmarks-and-cost-2026-guide)
  - [eesel AI: Muse Spark Open review](https://www.eesel.ai/blog/meta-muse-spark-open-review)
  - [BenchLM: Muse Spark Open](https://benchlm.ai/models/muse-spark-open)
  - [Meta eval methodology](https://ai.meta.com/static-resource/muse-spark-eval-methodology)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

