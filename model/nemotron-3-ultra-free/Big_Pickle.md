# Nemotron 3 Ultra Free — findings by Big Pickle

- Source: Big Pickle (`opencode/big-pickle`)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** NVIDIA Nemotron 3 Ultra (Free tier on Zen)
- **Short description:** NVIDIA's open-weights hybrid Mamba-Transformer MoE flagship (550B total / 55B active) for frontier reasoning, orchestration, and long-running agents; tuned for token efficiency and low hallucination.
- **Provider / access:** OpenCode Zen free (`opencode/nemotron-3-ultra-free`) at `https://opencode.ai/zen/v1/chat/completions`; NVIDIA NIM / build.nvidia.com; DeepInfra, OpenRouter, Together. Weights `nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B` (BF16 / NVFP4).
- **Release / knowledge:** 2026-06-04 (HF/NGC; announced at Computex Jun 1 per third-party). Pre-train cutoff Sep 2025; post-train cutoff May 2026.
- **IDs:** `opencode/nemotron-3-ultra-free`; NIM `nvidia/nemotron-3-ultra-550b-a55b`
- **Context window:** up to **1M**; default serve 256K (262,144 on Zen/NIM default; OpenCode Zen 1M per models.dev); max output 128K on Zen (16,384 NIM serverless)
- **Modalities:** text-only (confirmed). Reasoning toggleable; 10 languages.
- **Pricing (as of 2026-09-17):** Zen Free $0/$0 (limited-time trial terms: no personal/confidential data). NVIDIA NIM pay-as-you-go $0.50 in / $2.20 out.
- **Architecture:** 550B total / 55B active; LatentMoE (Mamba-2 + Transformer Attention + MoE), MTP (2 heads), NVFP4 pretrained, FP8 KV; OpenMDW-1.1.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **56.4** (BF16) / **53.9** (NVFP4); TB 2.0 **54** (NVIDIA blog); TB-Hard 36.4 (Vals)
- GDPVal: **46.7 BF16 / 47.9 NVFP4** (NVIDIA eval); GDPval-AA Elo **1,448** (NVIDIA blog) or **1,378** (AA) — harness variance
- TauBench V3 avg **70.9 / 70.3**; BrowseComp **44.4 / 41.4**
- PinchBench **90.0 / 89.8**; ProfBench Search **56.0 / 56.4**
- Claw-Eval / ClawProBench: **no verified public score found**

Reasoning / knowledge:

- GPQA (no tools): **87.0 / 87.9**; HLE **26.7 / 26.1** (37.4 with tools); CritPt **3.1 / 3.4**; AA-LCR **65.4 / 65.5**
- AA Intelligence Index: **48.2 BF16 / 47.7 NVFP4** (launch v4.1.x) → **23** on current v4.3 — flag index renormalization
- MMLU-Pro **86.8**; OmniScience Accuracy 24.1 / Non-Hallu **78.7** (highest in NVIDIA comparison set); IFBench 81.7; IOI 2025 570; LiveCodeBench v6 89.0
- BenchLM overall **46.35/100 (est.), #158/224**

Coding:

- SWE-bench Verified **71.9 / 69.7** (multi-harness range 65–70.4%); SWE Multilingual **67.7 / 65.8**; SciCode subtask **44.6 / 43.5**; AA Coding Index **49.3**

Long context:

- RULER @ 1M: **94.7 / 94.0**; LongBench v2 (≤1M) **61.9**

### Normalized scores (1–100)

- **Tool use: 75/100.** Pinch 90 + Tau V3 70.9 + ProfBench 56 solid; TB 56.4 and GDPval mid cap higher.
- **Reasoning: 72/100.** GPQA 87, RULER 94.7, best-in-class non-hallu 78.7; HLE 26.7 + CritPt 3.1 low.
- **Context window: 97/100.** True 1M with 94.7% RULER.
- **Multimodal: 15/100.** Text-only (per current evidence).
- **Coding: 78/100.** SWE 71.9 + LiveCode 89 solid; SciCode 44.6 modest.
- **Cost efficiency: 100/100.** $0 free/limited trial (paid NIM is $0.50/$2.20).
- **Overall Score: 73/100.** Strong open long-agent pick; verify orchestration before making it primary planner.

---

## Signature

- Provided by: **Big Pickle (`opencode/big-pickle`)** — 2026-09-17
- Method: public web research (NVIDIA tech report + HF model card + developer blog, Artificial Analysis, BenchLM, models.dev); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.