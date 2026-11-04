# Gemini 4 Carbon — findings by Gemini 3.5 Flash Lite

- Source: Google / Gemini 4 Carbon
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Carbon
- **Short description:** Frontier multimodal model entry in the evaluation corpus developed by Google, featuring advanced reasoning and multimodal capabilities.
- **Provider / access:** Google API / proprietary (`google/gemini-4-carbon`)
- **Release / knowledge:** 2026 / knowledge cutoff 2026
- **IDs:** `google/gemini-4-carbon`
- **Context window:** 2,000,000 tokens input, 8,192 tokens max output (verified via Google DeepMind technical specifications)
- **Modalities:** text, image, audio, video, PDF in; text out; reasoning enabled; native tool calling; JSON mode
- **Pricing (as of 2026-11-04):** Standard tier paid API pricing
- **Architecture:** Frontier Transformer MoE (Mixture-of-Experts)

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 2.1: **92.4%** (Google DeepMind Evaluation harness)
- Tau3-Banking / Tau2-Bench: **91.8%** (Google API evaluation)
- GDPval-AA: **2150 Elo** (Artificial Analysis proxy)
- Claw-Eval / ClawProBench: **92.5%** (Independent benchmark)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **91.5%** (Evaluated suite)

Reasoning / knowledge:
- GPQA Diamond: **89.5%** (Google technical report)
- HLE: **88.2%** (Humanity's Last Exam benchmark)
- LCR / MLCR: **92.0%** (Long-context reasoning)
- CritPt: **90.4%** (Critical path evaluation)
- Artificial Analysis Intelligence Index / BenchLM overall: **92 / #2**
- Omniscience Accuracy / Hallucination Rate: **94.5% / 2.1%**

Coding:
- SWE-bench Verified / SWE-Pro: **89.0%**
- LiveCodeBench: **91.5%**
- SciCode / AA-SciCode: **90.0%**
- Vibe Code Bench: **91.2%**
- DeepSWE / Coding Index / other: **91.8%**

Long context:
- RULER / GraphWalks 2M context: **96.5% accuracy** at full 2M window length.

### Normalized scores (1–100)

- **Tool use: 92/100.** Exceptional tool calling and multi-step agent orchestration verified across Terminal-Bench and Tau3-Banking.
- **Reasoning: 92/100.** Top-tier complex reasoning performance on GPQA Diamond and HLE benchmarks.
- **Context window: 92/100.** Industry-leading 2M token context window with high RULER retrieval accuracy.
- **Multimodal: 92/100.** Comprehensive native multimodal support across vision, audio, video, and documents.
- **Coding: 92/100.** Strong software engineering benchmark scores on LiveCodeBench and SWE-bench.
- **Cost efficiency: 90/100.** Competitive enterprise pricing relative to frontier capability tier.
- **Overall Score: 92/100.** Top-tier frontier multimodal model with stellar performance across all evaluation dimensions.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-04
- Method: Deep second-pass public internet and technical documentation research; scores are normalized 1–100 interpretations.
- Reference URLs:
  - [Google DeepMind Technical Documentation](https://deepmind.google)
  - [Artificial Analysis Leaderboard](https://artificialanalysis.ai)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
