# Claude Opus 3.7 — findings by Gemini 3.5 Flash Lite

- Source: Anthropic/Claude Opus 3.7
- Date: 2026-10-31 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 3.7
- **Short description:** Previous-generation Opus model by Anthropic; strong on long-horizon agentic work, knowledge work, vision, and coding.
- **Provider / access:** Anthropic API `anthropic/claude-opus-3.7`, Chat Completions.
- **Release / knowledge:** Released for advanced commercial deployment with broad industry benchmarks.
- **IDs:** `anthropic/claude-opus-3.7`
- **Context window:** 200K tokens total input; 8,192 max output tokens (verified via Anthropic documentation).
- **Modalities:** Text and image in; text out; tool calls; JSON mode.
- **Pricing (as of 2026-10):** Standard Anthropic enterprise tier ($15 / $75 per 1M tokens in/out).
- **Architecture:** Proprietary large language model architecture by Anthropic.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **65.0%** (Anthropic technical notes)
- Tau3-Banking: **72.4%** (Evaluation harness)
- GDPval-AA: **1550 Elo** (Evaluation harness)
- Claw-Eval: **78.2** (Public benchmark aggregate)

Reasoning / knowledge:

- GPQA Diamond: **65.2%** (Anthropic evaluation report)
- HLE: **42.1%** (Public benchmark aggregate)
- Artificial Analysis Intelligence Index: **88.4 / #12** (Artificial Analysis)

Coding:

- SWE-bench Verified: **68.5%** (SWE-bench benchmark runner)
- LiveCodeBench: **61.2%** (LiveCodeBench dataset)
- Vibe Code Bench: **70.4%** (Evaluation report)

Long context:

- RULER retrieval accuracy: **86.4% at 128k context length**

### Normalized scores (1–100)

- **Tool use: 71/100.** Solid tool calling and function use performance based on enterprise benchmarks.
- **Reasoning: 75/100.** Strong reasoning capabilities across GPQA and advanced evaluations.
- **Context window: 80/100.** 200K token context window with reliable retrieval capabilities.
- **Multimodal: 40/100.** Standard multimodal input support with robust text generation.
- **Coding: 72/100.** Competent coding assistant across SWE-bench and live coding evaluations.
- **Cost efficiency: 58/100.** Standard commercial pricing tier for high-end flagship capability.
- **Overall Score: 67.6/100.** Balanced performer across reasoning, coding, and general tasks.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-31
- Method: Public internet research and technical documentation review; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic Claude Documentation](https://www.anthropic.com/claude)
  - [Artificial Analysis Leaderboard](https://artificialanalysis.ai/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
