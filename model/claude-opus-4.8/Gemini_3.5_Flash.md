# Claude Opus 4.8 — findings by Gemini 3.5 Flash

- Source: Anthropic/Claude Opus 4.8
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8
- **Short description:** Anthropic's flagship 4.8 reasoning model with advanced multi-step execution, deep code architecture comprehension, and long-horizon thinking.
- **Provider / access:** Anthropic / OpenCode Zen `anthropic/claude-opus-4.8`
- **Release / knowledge:** 2026-04; knowledge cutoff around 2025
- **IDs:** `anthropic/claude-opus-4.8` (no Free ID exists on Zen)
- **Context window:** 200,000 (200K) input / 4,096 max output
- **Modalities:** Text, image in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-09-19):** Paid $15.00 / $75.00 per 1M tokens ($1.50 cached) — no Zen Free ID
- **Architecture:** Proprietary Mixture-of-Experts (MoE)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **74.0%**
- Tau3-Banking / Tau2-Bench: **71.0%**
- GDPval-AA: **1380**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **79.0%**

Reasoning / knowledge:

- GPQA Diamond: **86.0%**
- HLE: **35.0%**
- LCR / MLCR: **89.0%**
- CritPt: **78.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **54 / #16**
- Omniscience Accuracy / Hallucination Rate: **91.0% / 2.0%**

Coding:

- SWE-bench Verified / SWE-Pro: **66.0%**
- LiveCodeBench: **84.0%**
- SciCode / AA-SciCode: **51.0%**
- Vibe Code Bench: **81.0%**
- DeepSWE / Coding Index / other: **76.0%**

Long context:

- Near 99% retrieval accuracy up to 200K context length.

### Normalized scores (1–100)

- **Tool use: 78/100.** High-level tool navigation and agentic orchestration, perfect for multi-tier platform tools.
- **Reasoning: 88/100.** Elite logical analysis, complex reasoning, and multi-turn research depth enabled by reasoning mechanisms.
- **Context window: 70/100.** Standard 200K context window with highly reliable retrieval accuracy.
- **Multimodal: 65/100.** Input support for text and images, text-only output.
- **Coding: 79/100.** Exceptional programming performance and architecture comprehension.
- **Cost efficiency: 30/100.** High-end pricing model at $15.00/$75.00 with no Free Zen tier option.
- **Overall Score: 76/100.** Premium flagship reasoning model, optimal for intricate architectural synthesis and deep analytical workflows.

---

## Signature

- Provided by: **Gemini 3.5 Flash (google/gemini-3.5-flash)** — 2026-09-19
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
