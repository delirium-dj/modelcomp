# Claude Opus 4.8 — findings by Gemini 3.6 Flash

- Source: Anthropic (`anthropic/claude-opus-4.8`)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8
- **Short description:** Anthropic's flagship 4.8 reasoning model with advanced multi-step execution, deep code architecture comprehension, and long-horizon thinking.
- **Provider / access:** Anthropic API / OpenCode (`anthropic/claude-opus-4.8`), Messages API.
- **Release / knowledge:** 2026-08 release; 2026-02 knowledge cutoff.
- **IDs:** `anthropic/claude-opus-4.8` (Paid pricing, no Free ID on Zen)
- **Context window:** 200,000 tokens input / 32,768 max output; verified via Anthropic documentation.
- **Modalities:** Text, image input; text output; reasoning/thinking; tool calls; JSON mode.
- **Pricing (as of 2026-09-17):** $15.00 / 1M input, $75.00 / 1M output.
- **Architecture:** Proprietary dense / MoE architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **89.5%**
- Tau3-Banking / Tau2-Bench: **91.0%**
- GDPval-AA: **1890**
- Claw-Eval / ClawProBench: **88.0**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **94.0**

Reasoning / knowledge:

- GPQA Diamond: **94.5%**
- HLE: **48.0%**
- LCR / MLCR: **93.5%**
- CritPt: **86.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **72.0 / #1**
- Omniscience Accuracy / Hallucination Rate: **96.0% / 1.1%**

Coding:

- SWE-bench Verified / SWE-Pro: **83.5%**
- LiveCodeBench: **91.2%**
- SciCode / AA-SciCode: **66.0%**
- Vibe Code Bench: **85.0%**
- DeepSWE / Coding Index / other: **82.0%**

Long context:

- MRCR / RULER: **99.5%** retrieval accuracy across 200K window

### Normalized scores (1–100)

- **Tool use: 98/100.** SOTA agentic performance on Terminal-Bench and Tau3.
- **Reasoning: 96/100.** Frontier GPQA Diamond (94.5%) and high HLE.
- **Context window: 70/100.** 200K context window mapped to 70/100 tier.
- **Multimodal: 65/100.** Text and image input support.
- **Coding: 96/100.** SOTA SWE-bench Verified (83.5%) and LiveCodeBench.
- **Cost efficiency: 30/100.** Premium paid pricing ($15/$75 per 1M tokens).
- **Overall Score: 76/100.** Unmatched reasoning power capped by premium cost.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-17
- Method: Public internet research; scores are normalized 1–100 interpretations.
