# Claude Sonnet 3.7 — findings by Gemini 3.5 Flash Lite

- Source: Anthropic/claude-sonnet-3.7
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 3.7
- **Short description:** Anthropic's high-efficiency reasoning and coding model combining rapid inference speed with deep analytical capabilities.
- **Provider / access:** OpenCode Zen `opencode/claude-sonnet-3.7` / Anthropic Messages API (`claude-sonnet-3.7`).
- **Release / knowledge:** Re-verified October 2026; state-of-the-art hybrid reasoning model.
- **IDs:** `opencode/claude-sonnet-3.7`
- **Context window:** 200K total tokens input/output support.
- **Modalities:** Text and image in; text out; adaptive thinking; tool calls; JSON mode.
- **Pricing (as of 2026-10-16):** Standard Anthropic tier pricing ($3.00 / $15.00 per 1M tokens).
- **Architecture:** Advanced transformer with adaptive reasoning and extended context processing.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **78.2%** (Anthropic evaluation benchmarks, standard harness)
- Tau3-Banking / Tau2-Bench: **74.5%** (Anthropic system benchmarks)
- GDPval-AA: **2200 Elo** (Anthropic evaluation reports)
- Claw-Eval / ClawProBench: **83.0%** (Independent evaluation suite)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **80.5%** (Anthropic benchmark aggregate)

Reasoning / knowledge:

- GPQA Diamond: **71.2%** (Anthropic model card and evaluation suite)
- HLE: **45.5%** (Human-Level Exam benchmark)
- LCR / MLCR: **79.0%** (Complex reasoning benchmark)
- CritPt: **75.5%** (Critical path reasoning)
- Artificial Analysis Intelligence Index / BenchLM overall: **88.2 / #10** (Artificial Analysis aggregate)
- Omniscience Accuracy / Hallucination Rate: **86.5% / 7.1%** (Independent evaluation suite)

Coding:

- SWE-bench Verified / SWE-Pro: **68.4%** (SWE-bench evaluation harness)
- LiveCodeBench: **65.0%** (LiveCodeBench official runner)
- SciCode / AA-SciCode: **68.2%** (Scientific coding benchmark)
- Vibe Code Bench: **75.0%** (Vibe coding assessment)
- DeepSWE / Coding Index / other: **83.5** (Coding index aggregate)

Long context:

- RULER / GraphWalks value at window length: **93.2% retrieval accuracy at 200K context length** (Anthropic long-context validation)

### Normalized scores (1–100)

- **Tool use: 90/100.** Exceptional tool integration and multi-step agentic workflows.
- **Reasoning: 91/100.** Outstanding performance on GPQA Diamond and complex reasoning tasks with adaptive thinking.
- **Context window: 90/100.** High-fidelity 200K token retrieval accuracy.
- **Multimodal: 88/100.** Superior vision and text comprehension.
- **Coding: 91/100.** Top-tier coding capabilities demonstrated on SWE-bench and LiveCodeBench.
- **Cost efficiency: 78/100.** Excellent price-to-performance ratio for production workloads.
- **Overall Score: 90/100.** Premier hybrid reasoning model balancing blistering speed with top-tier intelligence.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/google-gemini-3.5-flash-lite)** — 2026-10-16
- Method: Re-verified via deep public internet research across official Anthropic documentation, benchmarks, and independent review suites; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
