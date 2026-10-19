# Hy4 — findings by Claude Opus 4.6

- Source: Tencent / Hy4 (Hunyuan 4 Preview) (`tencent/hy4`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy4 (Hunyuan 4 Preview)
- **Short description:** Tencent's flagship open-weight 770B/49B MoE model with 1M+ context window. Released August 28, 2026 with Gated DeepSeek Sparse Attention (DSA) and IndexCache for efficient million-token processing. Designed for self-hosted agentic coding.
- **Provider / access:** Self-hosted via Hugging Face `tencent/hy4`. Apache 2.0 open weights. No Zen Free ID.
- **Release / knowledge:** 2026-08-28 release; knowledge cutoff approximately mid-2026.
- **IDs:** `tencent/hy4` (no Free ID on Zen)
- **Context window:** 1M tokens (960K input / 64K output). Verified via Tencent documentation and Hugging Face.
- **Modalities:** Text input/output. No native image, audio, or video. Tool calls supported.
- **Pricing (as of 2026-10-19):** Apache 2.0 open weights — self-host free. No commercial API hosting listed.
- **Architecture:** 770B total parameters, 49B active. MoE with 78-layer backbone (77 MoE layers), 256 routed experts + 1 shared expert, top-8 routing. 10B MTP layer (0.7B active) for speculative decoding. Gated DeepSeek Sparse Attention with IndexCache. Apache 2.0.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85.4%** (Tencent report — neck-and-neck with Claude Opus 5, outperforming DeepSeek V4 Pro)
- Tau3-Banking: no verified public score found
- Internal blind evaluation (203 tasks, 163 experts): **2.99/4.00** average (edging GLM-5.3 at 2.92 and Kimi K3 at 2.94)

Reasoning / knowledge:

- GPQA Diamond: **92.3%** (MindStudio / Tencent report)
- MMLU-Pro: no verified public score found specific to Hy4

Coding:

- SWE-bench Pro/Multilingual: **~65.7%** (provider-reported and early third-party metrics)
- DeepSWE v1.1: **64.3%** (Tencent report — massive jump from Hy3's 28.0)
- Terminal-Bench 2.1 (coding overlap): **85.4%** (as above)

Long context:

- 1M native context with Gated DSA + IndexCache. No RULER/MRCR scores published at full 1M.

### Normalized scores (1–100)

- **Tool use: 70/100.** Terminal-Bench 85.4% is near-frontier, competitive with Claude Opus 5. Internal expert evaluation at 2.99/4.00 confirms strong agentic performance. Capped by lack of BFCL/Tau-bench and trailing the absolute top scaffolded systems.
- **Reasoning: 72/100.** GPQA Diamond 92.3% is excellent — near-frontier among open-weight models. No MMLU-Pro or HLE scores published. Capped by limited reasoning benchmark breadth.
- **Context window: 92/100.** 1M context per tier mapping (1M = 90-95). Gated DSA + IndexCache architecture specifically designed for efficient long-context processing. Scored at 92 for the 1M window with specialized attention mechanism.
- **Multimodal: 15/100.** Text-only model. No image, audio, or video. Fixed at 15.
- **Coding: 68/100.** DeepSWE 64.3% is a major leap from Hy3. SWE-bench Pro ~65.7% is competitive. Terminal-Bench 85.4% shows strong coding-adjacent performance. Capped by trailing top frontier models on SWE-bench Verified and lack of LiveCodeBench data.
- **Cost efficiency: 100/100.** Apache 2.0 open weights — fully free to self-host. Maximum efficiency score.
- **Overall Score: 63/100.** Mean of (70 + 72 + 92 + 15 + 68) / 5 = 63.4 → 63. The strongest open-weight model from Tencent, with exceptional context window and near-frontier reasoning/agentic capabilities. Capped by text-only modality. Best for teams needing long-context self-hosted agentic coding.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-19
- Method: Public internet research cross-referencing Tencent documentation, MindStudio analysis, WinZheng benchmarks, ContextStudios evaluation, and Hugging Face model card; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
