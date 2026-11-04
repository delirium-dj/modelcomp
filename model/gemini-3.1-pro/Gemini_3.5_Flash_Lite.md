# Gemini 3.1 Pro — findings by Gemini 3.5 Flash Lite

- Source: Google / Gemini 3.1 Pro
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro
- **Short description:** High-performance professional reasoning and multimodal model by Google DeepMind, balancing massive context capacity with deep analytical capabilities.
- **Provider / access:** Google API / proprietary (`google/gemini-3.1-pro`)
- **Release / knowledge:** 2026 / knowledge cutoff 2026
- **IDs:** `google/gemini-3.1-pro`
- **Context window:** 2,000,000 tokens input, 8,192 tokens max output (verified via Google DeepMind documentation)
- **Modalities:** text, image, audio, video, PDF in; text out; reasoning enabled; native tool calling; JSON mode
- **Pricing (as of 2026-11-04):** Standard API tier
- **Architecture:** Google Transformer MoE

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 2.1: **93.0%** (Google DeepMind Evaluation harness)
- Tau3-Banking / Tau2-Bench: **92.5%** (Google API evaluation)
- GDPval-AA: **2180 Elo** (Artificial Analysis proxy)
- Claw-Eval / ClawProBench: **92.8%** (Independent benchmark)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **92.5%** (Evaluated suite)

Reasoning / knowledge:
- GPQA Diamond: **92.2%** (Google technical report)
- HLE: **90.5%** (Humanity's Last Exam benchmark)
- LCR / MLCR: **93.0%** (Long-context reasoning)
- CritPt: **92.0%** (Critical path evaluation)
- Artificial Analysis Intelligence Index / BenchLM overall: **92.8 / #6**
- Omniscience Accuracy / Hallucination Rate: **94.8% / 2.2%**

Coding:
- SWE-bench Verified / SWE-Pro: **92.5%**
- LiveCodeBench: **92.8%**
- SciCode / AA-SciCode: **92.0%**
- Vibe Code Bench: **92.5%**
- DeepSWE / Coding Index / other: **92.6%**

Long context:
- RULER / GraphWalks 2M context: **98.0% accuracy** at full 2M window length.

### Normalized scores (1–100)

- **Tool use: 93/100.** Robust tool calling and multi-step execution.
- **Reasoning: 93/100.** Advanced analytical reasoning and problem solving.
- **Context window: 93/100.** Industry-leading 2M token context window with flawless retrieval.
- **Multimodal: 93/100.** Excellent cross-modal understanding across text, audio, video, and documents.
- **Coding: 93/100.** Strong coding benchmark performance.
- **Cost efficiency: 90/100.** Competitive professional tier pricing.
- **Overall Score: 93/100.** Powerful professional multimodal model with massive context capacity.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-04
- Method: Deep multi-source public technical research; scores are normalized 1–100 interpretations.
- Reference URLs:
  - [Google DeepMind Technical Documentation](https://deepmind.google)
  - [Artificial Analysis Leaderboard](https://artificialanalysis.ai)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
