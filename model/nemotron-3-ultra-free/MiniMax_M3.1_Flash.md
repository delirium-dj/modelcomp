# Nemotron 3 Ultra Free — findings by MiniMax M3.1 Flash

- Source: NVIDIA (Nemotron 3 Ultra 550B A55B), `nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16`
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3 Ultra 550B A55B (Free tier on OpenCode Zen)
- **Short description:** NVIDIA's June 2026 open-weight (OpenMDW 1.1) LatentMoE flagship — 550B total / 55B active with Mamba-2 hybrid attention, 1M context with 94.7% RULER retrieval at 1M, SWE-bench Verified 70.7% and LiveCodeBench 89.0% — served **free** on OpenCode Zen while the NVIDIA trial lasts.
- **Provider / access:** Hugging Face `nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16` (plus `-NVFP4` and `-Base-BF16`), NVIDIA Build `nvidia/nemotron-3-ultra-550b-a55b` ($0.50/$2.50), OpenRouter paid ($0.60/$2.40) and `:free` route (1M ctx, $0), **OpenCode Zen `nemotron-3-ultra-free`** (`opencode/nemotron-3-ultra-free`, $0/$0, endpoint `https://opencode.ai/inference/openai/v1/chat/completions`).
- **Release / knowledge:** **2026-06-04** (HF card, NGC, models.dev, AA). Knowledge cutoff not published.
- **IDs:** `nvidia/nemotron-3-ultra-550b-a55b` (canonical), `opencode/nemotron-3-ultra-free` (Zen free tier), `nvidia/nvidia-nemotron-3-ultra-550b-a55b` (models.dev), `nvidia-nemotron-3-ultra-550b-a55b` (AA slug).
- **Context window:** **up to 1M tokens** (HF card); serving defaults to **262,144** via `--max-model-len 262144`, and 1M requires raising the flag (`VLLM_ALLOW_LONG_MAX_MODEL_LEN=1`); the Zen route serves 1,000,000 with 128,000 max output.
- **Modalities:** text in / text out (AA lists it as text-only); reasoning with interleaved `reasoning_content`.
- **Pricing (as of 2026-10-20):** **free ($0 in/out) on OpenCode Zen** and on the OpenRouter `:free` route; NVIDIA Build $0.50/$2.50, OpenRouter paid $0.60/$2.40. **Zen free-tier caveat:** NVIDIA's trial endpoint is an explicit exception to OpenCode's zero-retention policy — "Trial use only — do not submit personal or confidential data. Your use is logged for security purposes and to improve NVIDIA products and services."
- **Architecture:** LatentMoE — interleaved Mamba-2 + MoE + attention hybrid with Multi-Token Prediction; 550B total / 55B active; base model pretrained on ~20T tokens.

### Raw benchmarks found

> NVIDIA's own HF model card against Vals AI and Artificial Analysis runs; several rows differ by harness and are flagged.

Agent / tool use:

- Terminal-Bench 2.1: **56.4%** (NVIDIA card) vs **50.9%** (Vals AI) · Terminal-Bench Hard: **36.4%** (AA) · Terminal-Bench 4.0: **0.51%** (AA)
- Tau2-bench: **83.3%** (AA) · Tau3-Banking: **14.2%** (AA) · GDPval-AA: **1010.6** (AA) vs **46.7** (NVIDIA card "GDPVal") — conflict flagged
- IFBench: **81.7%** (NVIDIA card) / **81.4%** (AA) · FrontierCode: **10.5%** (AA) · AutomationBench: **3.0%** (AA) · Agentic Index: **8.3** (AA)

Reasoning / knowledge:

- GPQA Diamond: **87.0%** (NVIDIA card) / **86.7%** (AA) / **86.1%** (Vals AI)
- HLE: **26.7%** no tools / **37.4%** with tools (NVIDIA card) vs **28.4%** (AA) · MMLU-Pro: **86.8%** (card) / **85.8%** (AA, Vals)
- Artificial Analysis Intelligence Index: **23** (#40/121) · AA-LCR: **79.3%** · CritPt: **3.1%** (AA) · Omniscience Accuracy / Hallucination Rate: **22.6% / 29.7%** (AA — one of the lowest hallucination rates in the dataset)
- Output speed: **155.8 tok/s** (#15/78), TTFT 1.18s (AA)

Coding:

- SWE-bench Verified: **70.7%** (NVIDIA card) vs **71.9%** (BenchLM, same card) vs **69.0%** (Vals AI) · LiveCodeBench v6: **89.0%** (card) / **86.0%** (Vals AI) · SWE-bench Multilingual: **67.7%** (card) · SciCode: **40.3%** (AA)
- SWE-bench Pro / DeepSWE: no verified public score found for this model

Long context:

- RULER at 1M: **94.7%** (NVIDIA card) · LongBench v2 (≤1M): **61.9%** (card)

### Normalized scores (1–100)

- **Tool use: 62/100.** τ²-bench 83.3% and IFBench 81.7% are solid, but Terminal-Bench 2.1 50.9–56.4%, GDPval-AA ~1011, FrontierCode 10.5% and AutomationBench 3.0% keep it mid rather than frontier.
- **Reasoning: 76/100.** GPQA 86.1–87.0%, MMLU-Pro 85.8–86.8%, IFBench 81.4% and AA-LCR 79.3% are strong, capped by HLE 26.7–28.4%, CritPt 3.1% and an AA Intelligence Index of 23 — plus a 29.7% hallucination rate that is unusually good.
- **Context window: 96/100.** A 1,000,000-token window with **94.7% RULER measured at 1M** is one of the very few genuinely long-context-verified models — it loses only the last points against the 100 band.
- **Multimodal: 15/100.** Text-in/text-out only; NVIDIA's Nemotron vision/omni models are separate checkpoints.
- **Coding: 74/100.** SWE-bench Verified 70.7% (69–72% across sources), LiveCodeBench v6 86–89% and SWE-bench Multilingual 67.7% are high-end mid-band numbers, capped by SciCode 40.3% and the missing SWE-bench Pro / DeepSWE rows.
- **Cost efficiency: 100/100.** The evaluated tier is $0 on OpenCode Zen and the OpenRouter free route; the paid NVIDIA/OR routes run $0.50–$0.60 in and $2.40–$2.50 out (≈75). **Caveat:** the Zen free tier is logged for NVIDIA product improvement — no confidential data.
- **Overall Score: 65/100.** Mean of the five quality dims = (62 + 76 + 96 + 15 + 74) / 5 = 64.6 → **65**. Best fit: free long-context research and coding over big documents — the 1M-window retrieval evidence is the strongest in this dataset.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-20
- Method: public internet research (NVIDIA Hugging Face model card, Build endpoint, Artificial Analysis, BenchLM + Vals AI, models.dev, OpenRouter API, OpenCode Zen docs and free-model privacy notes); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Nemotron_3_Ultra_Paid.md`, using the same headings.
