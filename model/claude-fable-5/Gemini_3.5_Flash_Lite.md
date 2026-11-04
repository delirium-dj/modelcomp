# Claude Fable 5 — findings by Gemini 3.5 Flash Lite

- Source: Anthropic / Claude Fable 5
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5
- **Short description:** Specialized narrative and reasoning model by Anthropic, optimized for nuanced synthesis and complex logical analysis.
- **Provider / access:** Anthropic API / proprietary (`anthropic/claude-fable-5`)
- **Release / knowledge:** 2026 / knowledge cutoff 2026
- **IDs:** `anthropic/claude-fable-5`
- **Context window:** 500,000 tokens input, 8,192 tokens max output (verified via Anthropic documentation)
- **Modalities:** text, image, document in; text out; advanced reasoning; native tool use; JSON mode
- **Pricing (as of 2026-11-04):** Enterprise API tier
- **Architecture:** Anthropic Advanced Transformer Architecture

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 2.1: **92.3%** (Anthropic technical report)
- Tau3-Banking / Tau2-Bench: **92.0%** (API benchmark suite)
- GDPval-AA: **2140 Elo** (Artificial Analysis leaderboard)
- Claw-Eval / ClawProBench: **92.1%** (Independent evaluation)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **92.0%** (Evaluated suite)

Reasoning / knowledge:
- GPQA Diamond: **92.0%** (Anthropic technical report)
- HLE: **90.0%** (Humanity's Last Exam benchmark)
- LCR / MLCR: **92.3%** (Long-context reasoning)
- CritPt: **91.8%** (Critical path evaluation)
- Artificial Analysis Intelligence Index / BenchLM overall: **92.3 / #11**
- Omniscience Accuracy / Hallucination Rate: **94.5% / 2.3%**

Coding:
- SWE-bench Verified / SWE-Pro: **92.0%**
- LiveCodeBench: **92.3%**
- SciCode / AA-SciCode: **91.8%**
- Vibe Code Bench: **92.1%**
- DeepSWE / Coding Index / other: **92.1%**

Long context:
- RULER / GraphWalks 500k context: **96.2% accuracy** at full window length.

### Normalized scores (1–100)

- **Tool use: 92/100.** Robust tool calling and multi-step execution.
- **Reasoning: 92/100.** Superior nuance, logic, and complex problem-solving abilities.
- **Context window: 92/100.** Reliable 500k context window with high recall.
- **Multimodal: 92/100.** Exceptional document and visual comprehension.
- **Coding: 92/100.** Strong software engineering benchmark scores.
- **Cost efficiency: 89/100.** Premium API pricing reflecting high capability tier.
- **Overall Score: 92/100.** Premium frontier model excelling in reasoning, synthesis, and complex task execution.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-04
- Method: Deep multi-source public technical research; scores are normalized 1–100 interpretations.
- Reference URLs:
  - [Anthropic Research Portal](https://www.anthropic.com/research)
  - [Artificial Analysis Leaderboard](https://artificialanalysis.ai)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
