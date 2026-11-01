# Nemotron 3 Nano Omni — findings by GPT 6 Sol

- Source: NVIDIA (`Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3 Nano Omni.
- **Short description:** NVIDIA's compact, open-weight multimodal reasoning model for document, video, speech and GUI understanding. BF16, FP8 and NVFP4 are precision variants of its **same** 31B/~3B-active checkpoint, not independent models ([NVIDIA exact-weight card](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16)).
- **Provider / access:** Weights `nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16` and NVIDIA FP8/NVFP4 variants; self-host via the vendor's vLLM/SGLang instructions, including an OpenAI-compatible Chat Completions example. The [OpenRouter model catalog](https://openrouter.ai/api/v1/models) lists **`nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free`** with $0/$0 token rates at review time, 256K context and 65,536 maximum completion; this is a rate-limited **serving tier**, not another checkpoint or a permanent zero-price guarantee. Its documentation page canonicalizes the displayed name to the base route, so use the catalog's actual `:free` ID when claiming the free tier ([route page](https://openrouter.ai/nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free)).
- **Release / knowledge:** April 28, 2026 release cited by the [Unsloth deployment guide](https://unsloth.ai/docs/models/nemotron-3-nano-omni); NVIDIA's HF repository existed by April 20 ([model API](https://huggingface.co/api/models/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16)), so repository creation is **not** the release date. No verified fixed knowledge-cutoff date.
- **IDs:** BF16 `nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16`; corresponding NVIDIA `-FP8` and `-NVFP4` repositories are compressed serving artifacts; OpenRouter `nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free` is an access tier.
- **Context window:** NVIDIA advertises **up to 256,000 input/context tokens**; OpenRouter's free route lists 256,000 context and 65,536 maximum output, which is a **host-specific cap**, not an additional 65K beyond the context budget ([NVIDIA card](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16), [OpenRouter catalog](https://openrouter.ai/api/v1/models)).
- **Modalities:** **Text, images, audio and video in; text out.** NVIDIA documents up to two-minute video inputs, up to one-hour audio inputs, OCR and speech transcription; not native audio/video output. `enable_thinking` toggles reasoning on the same weights ([model card](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16)).
- **Pricing (as of 2026-11-01):** Self-hostable weights under the **NVIDIA Open Model Agreement**, not Apache-2.0. OpenRouter currently lists a $0/$0 free route, subject to availability and usage limits; BF16 needs approximately **62 GB weights / H100 80GB minimum**, FP8 ~33 GB / L40S 48GB, NVFP4 ~21 GB / RTX 5090 32GB minimum, plus operating cost and workload-dependent KV capacity ([NVIDIA card](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16), [live API catalog](https://openrouter.ai/api/v1/models)). No paid per-token rate for this exact provider route was verified.
- **Architecture:** 31B-total/~3B-active Mamba2–Transformer hybrid MoE, with multimodal encoders and projector; vision/audio encoders stay BF16 even in NVIDIA's quantized variants ([card](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16)).

### Raw benchmarks found

- **Tool / GUI use (NVIDIA BF16 table):** [OSWorld **47.4%** and CVBench2D **83.95**](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16). OSWorld measures computer-use task success, not generic function-call reliability; no independent exact-BF16 agent-harness replication verified.
- **Reasoning and documents (NVIDIA BF16 table):** [MathVista Mini **82.8**, CharXiv reasoning **63.6**, MMlongBench-Doc **57.5**, OCRBenchV2 EN **67.04**](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16). These are vision/document tasks; no separately verified exact-BF16 GPQA or SWE-bench result was located.
- **Audio/video (NVIDIA BF16 table):** [Video-MME **72.2**, WorldSense **55.4**, Daily Omni **74.52**, voice instruction following **89.39**](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16). None of these is a speech-generation score.
- **Precision/mode control:** NVIDIA publishes a **separate non-reasoning** BF16/FP8/NVFP4 table: MathVista Mini **71.90/71.05/71.30**, OCRBenchV2 EN **65.80/65.63/65.77**, and nine-task mean **65.80/65.40/65.43** respectively. Do **not** combine its BF16 71.90 with the preceding BF16 82.8 as if the two measurements shared a reasoning setting. FP8 and NVFP4 comparisons are not independent model releases ([same NVIDIA card](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16)).
- **Independent quantized long-context evidence:** The independently maintained [needle-1M-bench leaderboard](https://huggingface.co/datasets/drawais/needle-1M-bench-mvp) gives **90.0% at 50K** for `nemotron-3-nano-omni-30b-a3b-w4a16` (10 needle items; other columns 80%/100% by task). This is **W4A16**, **not NVIDIA BF16**, and says nothing about retention at the advertised 256K limit or the test suite's 1M tier.
- **Coding:** No verified exact-checkpoint independent repository-fix or code-generation score. OCR, GUI and tool-capability evidence is not a substitute for SWE-bench Verified.

### Normalized scores (1–100)

- **Tool use: 66/100.** Vendor OSWorld 47.4 and GUI grounding 83.95, without a general independent agent run.
- **Reasoning: 63/100.** Strong vendor visual math but no exact-release general text-reasoning replication.
- **Context window: 69/100.** 256K advertised; independently tested W4A16 retrieval only at 50K, with no BF16 near-limit figure.
- **Multimodal: 78/100.** Image, video and audio input with concrete vendor benchmarks; text-only output and limited independent exact-BF16 evaluation.
- **Coding: 57/100.** No defendable exact-model coding benchmark; agent/document skills provide only indirect evidence.
- **Cost efficiency: 87/100.** A catalog-confirmed free serving tier and open weights, moderated by significant local VRAM and unknown free-tier persistence.
- **Overall Score: 67/100.** Half-up mean (66 + 63 + 69 + 78 + 57) / 5 = 66.6; multimodal comprehension specialist, not a proven code agent.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-11-01 UTC
- Method: Three fresh model, model-text and dataset searches; BF16 results separated from NVIDIA's non-reasoning precision comparison and an independently tested W4A16 retrieval route. Free-tier terms checked against the live catalog. Scores are normalized judgments.
- Reference URLs:
  - [NVIDIA exact BF16 model card, usage, license and two benchmark tables](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16)
  - [OpenRouter live model catalog, exact `:free` ID and zero-price snapshot](https://openrouter.ai/api/v1/models)
  - [OpenRouter documented route](https://openrouter.ai/nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free)
  - [drawais independent needle retrieval leaderboard, W4A16 row](https://huggingface.co/datasets/drawais/needle-1M-bench-mvp)
  - [Unsloth release/deployment guide](https://unsloth.ai/docs/models/nemotron-3-nano-omni)
- Future sources: add a new file next to this one using the same headings.
