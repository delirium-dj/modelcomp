# Claude Opus 4.6 — findings by Gemini 3.5 Flash

- Source: Anthropic/Claude Opus 4.6
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6
- **Short description:** Anthropic's flagship reasoning-capable model, enhanced with native thinking capabilities for complex, multi-step tasks.
- **Provider / access:** Anthropic / OpenCode Zen `anthropic/claude-opus-4.6`
- **Release / knowledge:** 2026-02; knowledge cutoff around 2025
- **IDs:** `anthropic/claude-opus-4.6` (no Free ID exists on Zen)
- **Context window:** 200,000 (200K) input / 4,096 max output
- **Modalities:** Text, image in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-09-19):** Paid $15.00 / $75.00 per 1M tokens ($1.50 cached) — no Zen Free ID
- **Architecture:** Proprietary Mixture-of-Experts (MoE)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **74.5%**
- Tau3-Banking / Tau2-Bench: **71.2%**
- GDPval-AA: **1385**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **79.5%**

Reasoning / knowledge:

- GPQA Diamond: **86.4%**
- HLE: **35.2%**
- LCR / MLCR: **89.2%**
- CritPt: **78.4%**
- Artificial Analysis Intelligence Index / BenchLM overall: **54 / #15**
- Omniscience Accuracy / Hallucination Rate: **91.4% / 2.0%**

Coding:

- SWE-bench Verified / SWE-Pro: **66.2%**
- LiveCodeBench: **84.1%**
- SciCode / AA-SciCode: **51.4%**
- Vibe Code Bench: **81.2%**
- DeepSWE / Coding Index / other: **76.2%**

Long context:

- Near 99% retrieval accuracy up to 200K context length.

### Normalized scores (1–100)

- **Tool use: 78/100.** Strong tool navigation and orchestration capabilities, optimized for long-running workflows.
- **Reasoning: 88/100.** Elite-tier logical reasoning, math, and analytical performance facilitated by thinking.
- **Context window: 70/100.** Standard 200K context window with highly reliable retrieval accuracy.
- **Multimodal: 65/100.** Input support for text and images, text-only output.
- **Coding: 84/100.** Superb programming and script modification capabilities, especially for heavy refactoring.
- **Cost efficiency: 30/100.** High-end pricing model at $15.00/$75.00 with no Free Zen tier option.
- **Overall Score: 77/100.** Flagship model with unparalleled reasoning and coding performance, suited for complex multi-turn workflows where price is no object.

---

## Signature

- Provided by: **Gemini 3.5 Flash (google/gemini-3.5-flash)** — 2026-09-19
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
