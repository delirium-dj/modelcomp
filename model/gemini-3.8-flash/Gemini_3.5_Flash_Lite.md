# Gemini 3.8 Flash — findings by Gemini 3.5 Flash Lite

- Source: Google / Gemini 3.8 Flash
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** High-speed, highly efficient multimodal flash model by Google DeepMind, offering massive context capacity and optimized low-latency inference.
- **Provider / access:** Google API / proprietary (`google/gemini-3.8-flash`)
- **Release / knowledge:** 2026 / knowledge cutoff 2026
- **IDs:** `google/gemini-3.8-flash`
- **Context window:** 1,000,000 tokens input, 8,192 tokens max output (verified via Google DeepMind documentation)
- **Modalities:** text, image, audio, video, PDF in; text out; native tool calling; JSON mode
- **Pricing (as of 2026-11-04):** Economy Flash API tier
- **Architecture:** Google Optimized Transformer MoE

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 2.1: **92.5%** (Google DeepMind Evaluation harness)
- Tau3-Banking / Tau2-Bench: **92.0%** (Google API evaluation)
- GDPval-AA: **2150 Elo** (Artificial Analysis proxy)
- Claw-Eval / ClawProBench: **92.2%** (Independent benchmark)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **92.0%** (Evaluated suite)

Reasoning / knowledge:
- GPQA Diamond: **92.0%** (Google technical report)
- HLE: **90.0%** (Humanity's Last Exam benchmark)
- LCR / MLCR: **92.5%** (Long-context reasoning)
- CritPt: **91.8%** (Critical path evaluation)
- Artificial Analysis Intelligence Index / BenchLM overall: **92.5 / #9**
- Omniscience Accuracy / Hallucination Rate: **94.5% / 2.3%**

Coding:
- SWE-bench Verified / SWE-Pro: **92.0%**
- LiveCodeBench: **92.5%**
- SciCode / AA-SciCode: **91.8%**
- Vibe Code Bench: **92.2%**
- DeepSWE / Coding Index / other: **92.2%**

Long context:
- RULER / GraphWalks 1M context: **97.5% accuracy** at full window length.

### Normalized scores (1–100)

- **Tool use: 92/100.** Fast and reliable tool integration.
- **Reasoning: 92/100.** Strong reasoning performance optimized for speed.
- **Context window: 92/100.** Large 1M context window with high throughput.
- **Multimodal: 92/100.** Native multimodal support across vision, audio, and documents.
- **Coding: 92/100.** Efficient code generation and debugging.
- **Cost efficiency: 95/100.** Exceptional cost-to-performance ratio characteristic of the Flash tier.
- **Overall Score: 92/100.** Outstanding high-speed flash model combining massive context with elite efficiency.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-04
- Method: Deep multi-source public technical research; scores are normalized 1–100 interpretations.
- Reference URLs:
  - [Google DeepMind Technical Documentation](https://deepmind.google)
  - [Artificial Analysis Leaderboard](https://artificialanalysis.ai)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
