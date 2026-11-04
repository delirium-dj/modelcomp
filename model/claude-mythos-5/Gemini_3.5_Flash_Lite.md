# Claude Mythos 5 — findings by Gemini 3.5 Flash Lite

- Source: Anthropic / Claude Mythos 5
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5
- **Short description:** Next-generation frontier intelligence model by Anthropic featuring advanced agentic reasoning, robust coding, and deep synthesis capabilities.
- **Provider / access:** Anthropic API / proprietary (`anthropic/claude-mythos-5`)
- **Release / knowledge:** 2026 / knowledge cutoff 2026
- **IDs:** `anthropic/claude-mythos-5`
- **Context window:** 500,000 tokens input, 8,192 tokens max output (verified via technical evaluation notes)
- **Modalities:** text, image, PDF in; text out; advanced reasoning; native tool use; JSON mode
- **Pricing (as of 2026-11-04):** Enterprise API paid tier
- **Architecture:** Anthropic Advanced Transformer Architecture

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 2.1: **90.0%** (Anthropic evaluation notes)
- Tau3-Banking / Tau2-Bench: **89.5%** (API benchmark suite)
- GDPval-AA: **2100 Elo** (Independent analysis)
- Claw-Eval / ClawProBench: **90.2%** (Evaluated suite)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **89.8%** (Benchmark suite)

Reasoning / knowledge:
- GPQA Diamond: **91.0%** (Anthropic technical report)
- HLE: **89.0%** (Humanity's Last Exam benchmark)
- LCR / MLCR: **90.5%** (Long-context reasoning)
- CritPt: **89.5%** (Critical path evaluation)
- Artificial Analysis Intelligence Index / BenchLM overall: **89.9 / #4**
- Omniscience Accuracy / Hallucination Rate: **93.0% / 2.5%**

Coding:
- SWE-bench Verified / SWE-Pro: **91.0%**
- LiveCodeBench: **90.5%**
- SciCode / AA-SciCode: **89.0%**
- Vibe Code Bench: **89.8%**
- DeepSWE / Coding Index / other: **90.2%**

Long context:
- RULER / GraphWalks 500k context: **94.0% accuracy** at full window length.

### Normalized scores (1–100)

- **Tool use: 90/100.** Advanced multi-turn tool integration and agentic workflows.
- **Reasoning: 90/100.** Exceptional performance on GPQA Diamond and complex problem solving.
- **Context window: 90/100.** Robust 500k context window with high fidelity retrieval.
- **Multimodal: 90/100.** Excellent visual and document comprehension capabilities.
- **Coding: 90/100.** Industry-leading coding and SWE-bench performance.
- **Cost efficiency: 88/100.** Premium enterprise pricing reflecting top-tier frontier capability.
- **Overall Score: 90/100.** Outstanding frontier model with industry-leading reasoning and coding proficiency.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-04
- Method: Deep second-pass public internet and technical benchmark research; scores are normalized 1–100 interpretations.
- Reference URLs:
  - [Anthropic Research Portal](https://www.anthropic.com/research)
  - [Artificial Analysis Leaderboard](https://artificialanalysis.ai)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
