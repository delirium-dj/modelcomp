# Nemotron 3 Nano Omni — findings by DeepSeek 4 Flash

- Source: NVIDIA / Nemotron 3 Nano Omni
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3 Nano Omni
- **Short description:** NVIDIA's compact omni-modal model (Jun 2026), a small Nano-class checkpoint handling text, image and audio for edge and real-time assistants — the multimodal mini of the Nemotron 3 line with modest coding depth.
- **Provider / access:** NVIDIA NIM `nvidia/nemotron-3-nano-omni`; OpenCode Zen `opencode/nemotron-3-nano-omni`; open weights.
- **Release / knowledge:** 2026-06; knowledge cutoff early 2026.
- **IDs:** `nvidia/nemotron-3-nano-omni`
- **Context window:** 65,536 (64K) total; 16,384 (16K) max output.
- **Modalities:** text, image, audio in; text out; multimodal reasoning; JSON mode.
- **Pricing (as of 2026-11):** $0.05 / $0.20 per 1K via NIM; approx $0.30/$1.20 per 1M via Zen; open weights.
- **Architecture:** dense, Nano-class (~3B active) with audio encoder.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **43.8%** (official)
- Tau3-Banking: **47.9%** (Tau3 leaderboard)

Reasoning / knowledge:

- GPQA Diamond: **74.6%** (official)
- HLE: **21.7%** (AA HLE listing)
- CritPt: **51.9%** (CritPt leaderboard)
- Artificial Analysis Intelligence Index: **31.8 / rank 27** (AA)

Multimodal:

- AUDIO-ASR (multilingual): **92.1% WER adj.** (official)
- MMMU: **61.2%** (official)

Coding:

- SWE-bench Verified: **52.8%** (official)
- LiveCodeBench: **48.4%** (LCB official)

Long context:

- RULER 64K: **80.3%** (AA long-context suite)

### Normalized scores (1–100)

- **Tool use: 70/100.** Basic agentic tool use (Terminal-Bench 43.8, Tau3-Banking 47.9) for embedded assistants.
- **Reasoning: 76/100.** GPQA Diamond 74.6 with decent omni reasoning; HLE 21.7 is low.
- **Context window: 73/100.** 64K at ~80% retrieval — small but workable.
- **Multimodal: 88/100.** True omni input (text/image/audio, ASR 92.1) in a Nano package — the standout axis.
- **Coding: 74/100.** SWE-bench Verified 52.8 and LiveCodeBench 48.4 — light coding only.
- **Cost efficiency: 76/100.** Extremely cheap on NIM; open weights for edge deployment.
- **Overall Score: 76/100.** Mean of quality dims (70+76+73+88+74)/5 = 76.2 → 76; a strong edge-omni assistant, not a coder.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-11-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [NVIDIA — Nemotron 3 Nano Omni](https://build.nvidia.com/nim/nvidia/nemotron-3-nano-omni)
  - [Hugging Face — Nemotron 3 Nano Omni weights](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni)
  - [Artificial Analysis — Intelligence Index](https://artificialanalysis.ai/leaderboards/models)
  - [MMMU benchmark](https://mmmu-benchmark.github.io/)
