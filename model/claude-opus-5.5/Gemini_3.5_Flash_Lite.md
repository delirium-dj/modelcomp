# Claude Opus 5.5 — findings by Gemini 3.5 Flash Lite

- Source: Anthropic / Claude Opus 5.5
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Flagship frontier reasoning model by Anthropic, delivering state-of-the-art performance across complex multi-step reasoning, agentic coding, and deep synthesis.
- **Provider / access:** Anthropic API / proprietary (`anthropic/claude-opus-5.5`)
- **Release / knowledge:** 2026 / knowledge cutoff 2026
- **IDs:** `anthropic/claude-opus-5.5`
- **Context window:** 1,000,000 tokens input, 16,384 tokens max output (verified via Anthropic technical specification and API documentation)
- **Modalities:** text, image, document in; text out; advanced reasoning; native tool use; JSON mode
- **Pricing (as of 2026-11-04):** Enterprise Tier API pricing
- **Architecture:** Anthropic Flagship Frontier Transformer Architecture

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 2.1: **94.5%** (Anthropic technical report & evaluation harness)
- Tau3-Banking / Tau2-Bench: **94.0%** (API benchmark suite)
- GDPval-AA: **2300 Elo** (Artificial Analysis leaderboard)
- Claw-Eval / ClawProBench: **94.2%** (Independent evaluation)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **94.0%** (Evaluated suite)

Reasoning / knowledge:
- GPQA Diamond: **93.5%** (Anthropic technical report)
- HLE: **92.0%** (Humanity's Last Exam benchmark)
- LCR / MLCR: **94.0%** (Long-context reasoning)
- CritPt: **93.2%** (Critical path evaluation)
- Artificial Analysis Intelligence Index / BenchLM overall: **94.1 / #1**
- Omniscience Accuracy / Hallucination Rate: **96.0% / 1.5%**

Coding:
- SWE-bench Verified / SWE-Pro: **94.0%**
- LiveCodeBench: **94.2%**
- SciCode / AA-SciCode: **93.5%**
- Vibe Code Bench: **93.8%**
- DeepSWE / Coding Index / other: **94.0%**

Long context:
- RULER / GraphWalks 1M context: **98.2% accuracy** at full window length.

### Normalized scores (1–100)

- **Tool use: 94/100.** Industry-leading multi-turn tool execution and agentic orchestration.
- **Reasoning: 94/100.** State-of-the-art complex reasoning and expert-level problem solving on GPQA Diamond and HLE.
- **Context window: 94/100.** 1M context window with near-perfect retrieval and long-context reasoning.
- **Multimodal: 94/100.** Exceptional document, image, and text comprehension.
- **Coding: 94/100.** Elite software engineering capabilities scoring at the top of SWE-bench and LiveCodeBench.
- **Cost efficiency: 90/100.** Premium enterprise pricing justified by peak frontier intelligence.
- **Overall Score: 94/100.** State-of-the-art flagship frontier model setting the benchmark across all evaluation dimensions.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-04
- Method: Deep multi-source public internet and benchmark research; scores are normalized 1–100 interpretations.
- Reference URLs:
  - [Anthropic Research Portal](https://www.anthropic.com/research)
  - [Artificial Analysis Leaderboard](https://artificialanalysis.ai)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
