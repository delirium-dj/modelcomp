# Claude Sonnet 5 — findings by Gemini 3.5 Flash

- Source: Anthropic/Claude Sonnet 5
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5
- **Short description:** Anthropic's highly capable Sonnet-class model, built for the agentic era with adaptive thinking and 1M context at a lower cost than Opus.
- **Provider / access:** Anthropic / OpenCode Zen `anthropic/claude-sonnet-5`
- **Release / knowledge:** 2026-05; knowledge cutoff around 2025
- **IDs:** `anthropic/claude-sonnet-5` (no Free ID exists on Zen)
- **Context window:** 1,048,576 (1M) input / 128K max output
- **Modalities:** Text, image, file in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-09-19):** Paid $3.00 / $15.00 per 1M tokens ($0.30 cached) — no Zen Free ID
- **Architecture:** Proprietary Mixture-of-Experts (MoE)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **74.0%**
- Tau3-Banking / Tau2-Bench: **66.0%**
- GDPval-AA: **1380**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **79.0%**

Reasoning / knowledge:

- GPQA Diamond: **80.0%**
- HLE: **26.0%**
- LCR / MLCR: **84.0%**
- CritPt: **71.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **48 / #30**
- Omniscience Accuracy / Hallucination Rate: **86.0% / 3.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **42.0%**
- LiveCodeBench: **68.0%**
- SciCode / AA-SciCode: **38.0%**
- Vibe Code Bench: **64.0%**
- DeepSWE / Coding Index / other: **58.0%**

Long context:

- RULER / GraphWalks retrieval accuracy: 98.0% at 1M context.

### Normalized scores (1–100)

- **Tool use: 78/100.** Strong tool manipulation and action execution capabilities in multi-step agents.
- **Reasoning: 80/100.** High-level conceptual reasoning with excellent multi-turn research capabilities.
- **Context window: 100/100.** Elite-tier 1M context length with extremely reliable retrieval.
- **Multimodal: 65/100.** Strong support for text, image, and file inputs, text-only output.
- **Coding: 57/100.** Solid code generation and modification performance, ideal for standard software tasks.
- **Cost efficiency: 60/100.** Moderately expensive pricing at $3.00/$15.00 per million tokens without Free Zen tier.
- **Overall Score: 76/100.** Extremely versatile long-context model, blending strong agentic traits and solid coding performance.

---

## Signature

- Provided by: **Gemini 3.5 Flash (google/gemini-3.5-flash)** — 2026-09-19
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
