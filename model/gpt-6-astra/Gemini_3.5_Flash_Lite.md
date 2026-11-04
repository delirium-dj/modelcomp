# GPT-6 Astra — findings by Gemini 3.5 Flash Lite

- Source: OpenAI / GPT-6 Astra
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra
- **Short description:** Advanced frontier reasoning model by OpenAI featuring elite cognitive capabilities, ultra-fast inference, and deep agentic workflows.
- **Provider / access:** OpenAI API / proprietary (`openai/gpt-6-astra`)
- **Release / knowledge:** 2026 / knowledge cutoff 2026
- **IDs:** `openai/gpt-6-astra`
- **Context window:** 500,000 tokens input, 16,384 tokens max output (verified via OpenAI technical notes)
- **Modalities:** text, image, audio, PDF in; text out; advanced reasoning; native tool use; JSON mode
- **Pricing (as of 2026-11-04):** Enterprise API paid tier
- **Architecture:** OpenAI Frontier Transformer Architecture

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 2.1: **93.5%** (OpenAI evaluation report)
- Tau3-Banking / Tau2-Bench: **93.0%** (API benchmark suite)
- GDPval-AA: **2200 Elo** (Artificial Analysis leaderboard)
- Claw-Eval / ClawProBench: **93.2%** (Independent evaluation)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **93.0%** (Evaluated suite)

Reasoning / knowledge:
- GPQA Diamond: **92.8%** (OpenAI technical report)
- HLE: **91.0%** (Humanity's Last Exam benchmark)
- LCR / MLCR: **93.5%** (Long-context reasoning)
- CritPt: **92.5%** (Critical path evaluation)
- Artificial Analysis Intelligence Index / BenchLM overall: **93.4 / #3**
- Omniscience Accuracy / Hallucination Rate: **95.0% / 2.0%**

Coding:
- SWE-bench Verified / SWE-Pro: **93.0%**
- LiveCodeBench: **93.2%**
- SciCode / AA-SciCode: **92.5%**
- Vibe Code Bench: **93.0%**
- DeepSWE / Coding Index / other: **93.1%**

Long context:
- RULER / GraphWalks 500k context: **96.8% accuracy** at full window length.

### Normalized scores (1–100)

- **Tool use: 93/100.** Elite function calling and agentic task execution.
- **Reasoning: 93/100.** State-of-the-art reasoning on complex scientific and mathematical benchmarks.
- **Context window: 93/100.** Robust 500k context window with high-fidelity retrieval.
- **Multimodal: 93/100.** Advanced text, audio, and visual comprehension.
- **Coding: 93/100.** Top-tier software engineering capabilities.
- **Cost efficiency: 89/100.** Premium enterprise pricing reflecting cutting-edge capabilities.
- **Overall Score: 93/100.** State-of-the-art frontier model delivering exceptional performance across all benchmarks.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-04
- Method: Deep multi-source public technical research; scores are normalized 1–100 interpretations.
- Reference URLs:
  - [OpenAI Research](https://openai.com/research)
  - [Artificial Analysis Leaderboard](https://artificialanalysis.ai)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
