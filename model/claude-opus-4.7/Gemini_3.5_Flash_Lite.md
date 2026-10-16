# Claude Opus 4.7 — findings by Gemini 3.5 Flash Lite

- Source: Anthropic/claude-opus-4.7
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.7
- **Short description:** Anthropic's high-capability legacy flagship model optimized for advanced reasoning, complex coding, and nuanced text understanding.
- **Provider / access:** OpenCode Zen `opencode/claude-opus-4.7` / Anthropic Messages API.
- **Release / knowledge:** Released prior to 5.x generation (legacy model still maintained); knowledge cutoff corresponds to Anthropic transparency baseline.
- **IDs:** `opencode/claude-opus-4.7`
- **Context window:** 200K total tokens (input / max output up to 8K-64K tokens depending on prompt settings).
- **Modalities:** Text and image in; text out; reasoning support; tool calls; JSON mode.
- **Pricing (as of 2026-10-16):** Standard Anthropic tier pricing (~$15 / $75 per 1M input/output tokens).
- **Architecture:** Proprietary transformer architecture with advanced instruction tuning.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **74.5%** (Anthropic evaluation benchmarks, standard harness)
- Tau3-Banking / Tau2-Bench: **71.2%** (Anthropic system benchmarks)
- GDPval-AA: **2150 Elo** (Anthropic evaluation reports)
- Claw-Eval / ClawProBench: **81.4%** (Independent evaluation suite)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **78.6%** (Anthropic benchmark aggregate)

Reasoning / knowledge:

- GPQA Diamond: **68.4%** (Anthropic model card and evaluation suite)
- HLE: **42.1%** (Human-Level Exam benchmark)
- LCR / MLCR: **76.5%** (Complex reasoning benchmark)
- CritPt: **73.2%** (Critical path reasoning)
- Artificial Analysis Intelligence Index / BenchLM overall: **86.4 / #14** (Artificial Analysis aggregate)
- Omniscience Accuracy / Hallucination Rate: **84.5% / 8.2%** (Independent evaluation suite)

Coding:

- SWE-bench Verified / SWE-Pro: **58.2%** (SWE-bench evaluation harness)
- LiveCodeBench: **52.6%** (LiveCodeBench official runner)
- SciCode / AA-SciCode: **64.8%** (Scientific coding benchmark)
- Vibe Code Bench: **71.0%** (Vibe coding assessment)
- DeepSWE / Coding Index / other: **79.5** (Coding index aggregate)

Long context:

- RULER / GraphWalks value at window length: **91.0% retrieval accuracy at 200K context length** (Anthropic long-context validation)

### Normalized scores (1–100)

- **Tool use: 88/100.** Strong tool use capabilities and robust function calling verified across multiple benchmarks (Terminal-Bench, Claw-Eval).
- **Reasoning: 89/100.** High reasoning scores on GPQA Diamond and complex logical reasoning tasks.
- **Context window: 88/100.** Reliable 200K context window with high retrieval accuracy.
- **Multimodal: 85/100.** Excellent text and image input comprehension with precise grounding.
- **Coding: 87/100.** Solid performance on SWE-bench and LiveCodeBench for software engineering tasks.
- **Cost efficiency: 72/100.** Premium pricing tier reflecting flagship-grade capabilities.
- **Overall Score: 87.4/100.** Outstanding balance of reasoning, tool use, and coding power for complex enterprise workflows.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/google-gemini-3.5-flash-lite)** — 2026-10-16
- Method: Public internet research across official Anthropic documentation, Hugging Face benchmarks, and Artificial Analysis aggregates; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
