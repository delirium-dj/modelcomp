# Solar Open 2 — findings by Ling 3.1 Flash

- Source: Upstage (`solar-open-2`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Open 2 (250B-A15B)
- **Short description:** Upstage's 250B-A15B open-weight MoE foundation model built for long-horizon agentic use (tool calling, coding, office work) with native Korean/English/Japanese support and a 1M-token window via a hybrid softmax/linear-attention stack. Korea's sovereign open model; successor to Solar Open 1 (Solar Open 100B).
- **Provider / access:** Hugging Face `upstage/Solar-Open2-250B` (Upstage Solar License — commercial use, fine-tuning and distillation permitted); technical report on arXiv (2607.20062); runs on two NVIDIA H200 GPUs with quantization (minimum H200 ×4 unquantized).
- **Release / knowledge:** Weights released 2026-07-24; pre-training on ~12T tokens (B200 GPUs, 2M GPU hours); knowledge cutoff not stated.
- **IDs:** `upstage/Solar-Open2-250B` (HF). No OpenCode Zen Free ID found — open weights, self-hosted.
- **Context window:** 1,000,000 tokens (hybrid attention: one softmax layer per three linear-attention layers, NoPE, gated delta rule extended to negative eigenvalues) — verified in the technical report.
- **Modalities:** text in; text out (language model — no image/audio/video input); tool calls yes (trained on conversational tool-use scenarios); Korean tokenizer efficiency inherited (global tokenizers spend 1.2–1.9× more tokens on Korean text).
- **Pricing (as of 2026-10-10):** open weights — no per-token API price found; self-host cost is hardware only (2× H200 quantized).
- **Architecture:** hybrid-attention MoE, 250B total / 15B active per token, 48 layers, 321 experts (320 routed + 1 shared), 8 active routed + 1 shared, vocab 196,608; ~2.3% of parameters (5.69B shared skeleton) transferred from Solar Open 1.

### Raw benchmarks found

Agent / tool use:

- MCP-Atlas: **58.2%** (Upstage technical report, internal harness; tied with DeepSeek-V4-Flash; MiMo-V2.5 leads at 63.9%)
- τ³-Banking: **19.6%** (technical report; vs DeepSeek-V4-Flash 22.3%)
- GDPval-AA v2 (ELO): **1128** (Artificial Analysis, measured 2026-06-30; vs DeepSeek-V4-Flash 1187, MiMo-V2.5 1145)
- APEX-Agents: **16.6%** (real-work agent suite — best in comparison vs MiMo-V2.5 13.4%, DeepSeek-V4-Flash 13.2%)
- IFBench (instruction following): **80.0%** (tied with DeepSeek-V4-Flash 80.3%)
- Terminal-Bench 2.1: no verified public score found (Terminal-Bench **Hard**: **28.3%** — different variant, not comparable to TB 2.1)
- Claw-Eval / ClawProBench / Toolathon / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **86.3%** (technical report; second only to DeepSeek-V4-Flash 88.9%)
- HLE (without tools): **28.8%** (vs DeepSeek-V4-Flash 32.3%, MiMo-V2.5 24.3%)
- MMLU-Pro: **86.2%** (best in comparison)
- AIME 2026: **95.7%**; HMMT2602: **93.9%** (frontier-level competition math)
- AA-LCR: **62.3%** (long-context reasoning; vs DeepSeek-V4-Flash 63.7%)
- Multi-Challenge: **61.0%**; ArtifactsBench: **55.9%**
- Korean suite average: **85.4%** (highest of all compared, incl. GPT-5.4 mini 80.8% and Claude Haiku 4.5 69.6%); Ko-GDPval: **86.8%** (matches DeepSeek-V4-Pro 1.6T's 86.9% at < ⅙ its size)
- CritPt / Omniscience / AA Intelligence Index: no verified public score found

Coding:

- LiveCodeBench v6: **92.4%** (best in comparison; DeepSeek-V4-Flash 92.3%)
- SWE-bench Verified: **70.4%** (vs DeepSeek-V4-Flash 73.8%, MiMo-V2.5 73.0% — the localized gap vs frontier baselines)
- Terminal-Bench Hard: **28.3%** (vs MiMo-V2.5 41.7%)
- DeepSWE / SciCode / Vibe Code Bench / LiveCodeBench other versions: no verified public score found

Long context:

- 1M-token window; AA-LCR 62.3% is the only measured long-context retrieval number; no MRCR / RULER / GraphWalks value reported — no verified public score found.

### Normalized scores (1–100)

- **Tool use: 63/100.** MCP-Atlas 58.2% and τ³-Banking 19.6% are mid-band and GDPval-AA v2 1128 ELO is low-mid, but IFBench 80.0% (tied with DeepSeek-V4-Flash) and the best-in-comparison APEX-Agents 16.6% lift the score; no Terminal-Bench 2.1 or Toolathlon number exists.
- **Reasoning: 75/100.** GPQA 86.3% sits above the mid band, AIME 95.7% and HMMT 93.9% are frontier-level, and HLE 28.8% beats most open peers — but HLE trails the 40%+ frontier reference and AA-LCR 62.3% is only mid, capping the score.
- **Context window: 91/100.** Native 1M-token window (hybrid attention, NoPE); the only measured retrieval at length is AA-LCR 62.3%, well below the ≥98% needed for 100.
- **Multimodal: 15/100.** Text-only language model (no image/audio/video input, text output) — the text-only floor band.
- **Coding: 80/100.** LiveCodeBench v6 92.4% is best-in-comparison and SWE-bench Verified 70.4% is strong, but Terminal-Bench Hard 28.3% and the SWE gap to DeepSeek-V4-Flash (73.8%) cap it; no DeepSWE/SciCode numbers published.
- **Cost efficiency: 95/100.** Open weights under the Upstage Solar License (commercial use, fine-tuning, distillation) with no per-token API price — self-hosted inference is free per token (2× H200 quantized).
- **Overall Score: 65/100.** Mean of Tool 63, Reasoning 75, Context 91, Multimodal 15, Coding 80 = 64.8 → 65. Best-fit: sovereign open-weight agentic base for Korean/English/Japanese long-horizon work with 1M context; pair with a stronger SWE specialist for repository-level engineering.

---

## Signature

- Provided by: **Ling 3.1 Flash (inclusionai/ling-3.1-flash)** — 2026-10-10
- Method: public internet research (Upstage blog, Hugging Face upstage/Solar-Open2-250B card, arXiv technical report 2607.20062 with full English/Korean benchmark tables); scores are normalized 1–100 interpretations, not official vendor scores. All benchmarks are Upstage-reported under its internal harness with identical per-benchmark settings.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
