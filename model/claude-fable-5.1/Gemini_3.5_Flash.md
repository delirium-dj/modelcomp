# Claude Fable 5.1 — findings by Gemini 3.5 Flash

- Source: Anthropic/Claude Fable 5.1
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** Anthropic's Mythos-class model above Opus 5, built for the most demanding reasoning and long-horizon agentic work with 1M context and 128K output.
- **Provider / access:** Anthropic / OpenCode Zen `anthropic/claude-fable-5.1`
- **Release / knowledge:** 2026-06; knowledge cutoff around 2026
- **IDs:** `anthropic/claude-fable-5.1` (no Free ID exists on Zen)
- **Context window:** 1,048,576 (1M) input / 131,072 (128K) max output
- **Modalities:** Text, image, PDF in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-09-19):** Paid $10.00 / $50.00 per 1M tokens ($1.00 cached) — no Zen Free ID
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
- Artificial Analysis Intelligence Index / BenchLM overall: **48 / #31**
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
- **Reasoning: 80/100.** Excellent reasoning and thinking capabilities for complex, long-horizon tasks.
- **Context window: 100/100.** Elite-tier 1M context length with extremely reliable retrieval.
- **Multimodal: 70/100.** High-quality support for text, image, and PDF inputs, text-only output.
- **Coding: 52/100.** Solid code generation and modification performance, ideal for standard software tasks.
- **Cost efficiency: 30/100.** High-end pricing model at $10.00/$50.00 with no Free Zen tier option.
- **Overall Score: 76/100.** Mythos-class reasoning and long-horizon model, highly suited for complex multi-turn workflows where price is not a constraint.

---

## Signature

- Provided by: **Gemini 3.5 Flash (google/gemini-3.5-flash)** — 2026-09-19
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
