# Nemotron 3 Ultra Free — findings by Muse Spark 1.3

- Source: Muse Spark 1.3 Free (`opencode/muse-spark-1.3-contributor-free`)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3 Ultra Free
- **Short description:** NVIDIA flagship open-weights hybrid Mamba-Transformer MoE for frontier reasoning, orchestration, and long-running agents. Fast (5× throughput claim) with low hallucination.
- **Provider / access:** OpenCode Zen (`opencode/nemotron-3-ultra-free`), `https://opencode.ai/zen/v1/chat/completions` (NVIDIA free endpoints, trial terms). Native: build.nvidia.com NIM, Hugging Face `nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B` (BF16/NVFP4), OpenRouter `:free`.
- **Release:** 2026-06-04/06 (NVIDIA). License OpenMDW-1.1, open weights + recipes.
- **Context window:** **1M** (262,144 default serve len, set `--context-length 1048576` for full). Max out 65,536 (OpenRouter). RULER 1M 94.7%.
- **Modalities:** text in/out (no image input per AA comparison); reasoning yes. Verify multimodality before non-text use.
- **Pricing:** Free on Zen/NVIDIA trial (trial: do not submit personal/confidential data, logged for security/improvement, nocredit). Native efficiency claim: 30% lower cost-to-task via fewer tokens/turn.
- **Architecture:** 550B total, 55B active, hybrid Mamba-2 + MoE + select attention, MTP + DFlash/DSpark, FP8 KV.

### Raw benchmarks found (BF16 unless noted; NVFP4 within ~1–2pp)

- Terminal-Bench 2.1: **56.4%** (53.9 NVFP4); Terminal-Bench 2.0: **54%** (NVIDIA blog table)
- GDPVal: **46.7% Gym / 47.9% NVFP4**; GDPVal-AA Elo **1,448** (NVIDIA blog) / **1,378** (AA article, ~DeepSeek V4 Flash level) — harness variance
- TauBench V3 avg **70.9%** (Airline 81.5%, Retail 86.4%/88.4%); BrowseComp 44.4%/41.4%
- Claw-Eval: **no verified public Claw-Eval score found** for Ultra as of 2026-09-17.
- PinchBench **90.0%** (89.8 NVFP4, within 1.3 of best); ProfBench Search **56.0%** (ties K2.6 1T); EnterpriseOps-Gym 33%
- Reasoning: GPQA **87.0%**; HLE **26.7%**; SciCode subtask 44.6%; CritPt 3.1%; Omni Acc 24.1% / Non-Hallu **78.7%** (highest in comparison); IFBench 81.7%; LCR **65.4%**; RULER 94.7%; LongBench v2 61.9%; IOI 2025 570; LiveCode v6 89.0%; Index **38 (AA Reasoning) / 48 (AA v4.0 article)**
- Coding: SWE Verified **71.9%** (69.7 NVFP4, 65–70.4% across Pi/OpenHands/Hermes/OpenCode); Multilingual **67.7%**; MMLU-Pro 86.8%
- BenchLM `nemotron-3-ultra`: **46.35/100 (est.), #158/224**, 19 rows

### Normalized scores (1–100)

- **Tool use: 78/100.** Tau V3 70.9%, Pinch 90%, ProfBench 56%, GDPVal mid. TB 56.4% below 80%+ frontier.
- **Reasoning: 75/100.** GPQA 87%, RULER 94.7%, best-in-class non-hallu 78.7%; HLE 26.7%/CritPt 3.1% cap higher.
- **Context window: 97/100.** True 1M with 94.7% RULER (just under 98% bar for 100).
- **Multimodal: 20/100.** Text-only per current evidence; family is “multimodal” but Ultra endpoint not verified for image/audio.
- **Coding: 80/100.** SWE 71.9%, LiveCode 89%, harness-consistent.
- **Cost efficiency: 100/100.** $0 free/trial.
- **Overall Score: 75/100.** Best open orchestration/fast long-agent pick with strong honesty (low hallu).

---

## Signature

- Provided by: **Muse Spark 1.3 Free (`opencode/muse-spark-1.3-contributor-free`)** — 2026-09-17
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
