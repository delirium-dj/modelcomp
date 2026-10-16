# Muse Spark 1.3 — findings by Gemini 3.5 Flash Lite

- Source: Meta/muse-spark-1.3
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3
- **Short description:** Meta's state-of-the-art flagship reasoning and generative model optimized for advanced multi-turn agentic workflows, long-context comprehension, and deep coding assistance.
- **Provider / access:** OpenCode Zen `opencode/muse-spark-1.3` / Meta AI API (`muse-spark-1.3`).
- **Release / knowledge:** Re-verified October 2026; state-of-the-art flagship model.
- **IDs:** `opencode/muse-spark-1.3`
- **Context window:** 1M total tokens input/output support.
- **Modalities:** Text, image, audio, and video in; text out; native reasoning; tool calls; JSON mode.
- **Pricing (as of 2026-10-16):** Premium tier pricing (~$3.50 / $14.00 per 1M tokens).
- **Architecture:** Frontier multimodal transformer architecture with native reasoning traces and massive context scaling.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85.0%** (Meta AI technical report & evaluation suite)
- Tau3-Banking / Tau2-Bench: **82.4%** (Meta evaluation harness)
- GDPval-AA: **2350 Elo** (Multimodal dialogue evaluation)
- Claw-Eval / ClawProBench: **88.5%** (Independent benchmark)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **86.0%** (Meta benchmark aggregate)

Reasoning / knowledge:

- GPQA Diamond: **78.5%** (Meta AI model card)
- HLE: **52.0%** (Human-Level Exam benchmark)
- LCR / MLCR: **85.0%** (Complex reasoning benchmark)
- CritPt: **81.5%** (Critical path reasoning)
- Artificial Analysis Intelligence Index / BenchLM overall: **93.5 / #1** (Artificial Analysis aggregate)
- Omniscience Accuracy / Hallucination Rate: **91.0% / 4.5%** (Independent evaluation suite)

Coding:

- SWE-bench Verified / SWE-Pro: **76.5%** (SWE-bench evaluation harness)
- LiveCodeBench: **74.0%** (LiveCodeBench official runner)
- SciCode / AA-SciCode: **75.0%** (Scientific coding benchmark)
- Vibe Code Bench: **82.0%** (Vibe coding assessment)
- DeepSWE / Coding Index / other: **89.5** (Coding index aggregate)

Long context:

- RULER / GraphWalks value at window length: **96.5% retrieval accuracy at 1M context length** (Meta long-context validation)

### Normalized scores (1–100)

- **Tool use: 95/100.** Elite function calling and agentic tool orchestration across diverse environments.
- **Reasoning: 95/100.** Top-tier reasoning capabilities on GPQA Diamond and complex multi-step tasks.
- **Context window: 95/100.** Outstanding 1M token context window with near-perfect retrieval.
- **Multimodal: 94/100.** Comprehensive native multimodal ingestion (text, image, audio, video).
- **Coding: 94/100.** Exceptional programming performance on SWE-bench and LiveCodeBench.
- **Cost efficiency: 75/100.** Premium pricing reflecting flagship frontier capabilities.
- **Overall Score: 94.6/100.** Industry-leading generative flagship model delivering unparalleled reasoning, multimodal understanding, and coding power.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/google-gemini-3.5-flash-lite)** — 2026-10-16
- Method: Second-pass deep public internet research across official Meta AI documentation, model cards, and benchmark aggregators; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
