# Nemotron 3 Ultra Free — findings by Claude Opus 4.6

- Source: NVIDIA / Nemotron 3 Ultra (`nemotron-3-ultra-free`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3 Ultra (Free)
- **Short description:** NVIDIA's flagship reasoning model featuring a 550B total / 55B active parameter Mixture-of-Experts architecture with Hybrid Mamba-Attention layers. Free-tier variant of the full Nemotron 3 Ultra. Designed for complex reasoning, coding, and agentic workflows.
- **Provider / access:** NVIDIA via various API hosts; free tier available on select platforms. Chat Completions API.
- **Release / knowledge:** Mid-2026 release; knowledge cutoff approximately early 2026.
- **IDs:** `nvidia/nemotron-3-ultra-free` (free tier)
- **Context window:** 1M tokens (1,048,576 tokens). Verified via NVIDIA documentation. Uses LatentMoE and Multi-Token Prediction (MTP) for efficient long-context processing.
- **Modalities:** Text input; text output; reasoning mode (extended thinking); tool calls supported; JSON mode supported. No native image/audio/video input.
- **Pricing (as of 2026-10-19):** Free tier — $0 input / $0 output. Data-usage/privacy caveats may apply for free tier.
- **Architecture:** 550B total parameters, 55B active (MoE). Hybrid Mamba-Attention architecture combining selective state space layers (Mamba) with traditional attention. LatentMoE routing, Multi-Token Prediction (MTP). NVFP4 quantization enables 5.9× throughput improvement vs comparable dense models. Open-weights.

### Raw benchmarks found

Agent / tool use:

- BFCL v3 (tool/function calling): **78.2%** (NVIDIA benchmark report, provisional — early community evaluation)
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **68.4%** (NVIDIA technical report)
- MMLU-Pro: **78.9%** (NVIDIA technical report)
- HLE: no verified public score found
- ARC-Challenge: **96.2%** (NVIDIA report)
- Artificial Analysis Intelligence Index: no verified public score found — model too new

Coding:

- SWE-bench Verified: **52.1%** (NVIDIA/community evaluation, provisional)
- LiveCodeBench v6: **58.3%** (community benchmark, provisional)
- HumanEval+: **89.4%** (NVIDIA report)

Long context:

- RULER at 128K: **92.1%** (NVIDIA technical report)
- RULER at 512K: **85.6%** (NVIDIA report, provisional)
- MRCR at 1M: no verified retrieval score at full 1M window; NVIDIA claims functional 1M context but independent verification is limited.

### Normalized scores (1–100)

- **Tool use: 52/100.** BFCL v3 at 78.2% is solid mid-tier performance. Hybrid Mamba-Attention architecture may introduce latency trade-offs in multi-step agentic loops. Capped by limited agentic benchmark coverage and the free tier potentially having throughput constraints.
- **Reasoning: 62/100.** GPQA Diamond 68.4% and MMLU-Pro 78.9% place it in the competitive mid-upper tier. ARC-Challenge 96.2% shows strong factual reasoning. Capped by lack of HLE scores and trailing frontier models like GPT-6 and Gemini 2.5 Pro on harder benchmarks.
- **Context window: 92/100.** 1M tokens per tier mapping (1M = 90-95). RULER at 128K hitting 92.1% and 512K at 85.6% support strong retrieval capabilities. Scored at 92 for verified 1M window with strong mid-range retrieval.
- **Multimodal: 15/100.** Text-only model. No image, audio, or video input capabilities. Fixed at 15 per scoring methodology.
- **Coding: 55/100.** SWE-bench Verified 52.1% and LiveCodeBench 58.3% are respectable. HumanEval+ 89.4% shows strong basic code generation. Capped by trailing top coding models (GPT-5.3 Codex, Claude Opus 4.5) on complex real-world coding tasks.
- **Cost efficiency: 100/100.** Free tier — $0 cost. Maximum efficiency score.
- **Overall Score: 55/100.** Mean of (52 + 62 + 92 + 15 + 55) / 5 = 55.2 → 55. A powerful reasoning model with exceptional context window, but text-only modality significantly limits the overall score. Excellent value proposition at free tier for long-context reasoning tasks.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-19
- Method: Public internet research cross-referencing NVIDIA technical reports, Hugging Face documentation, and community benchmarks; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
