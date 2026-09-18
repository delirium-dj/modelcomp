# Claude Opus 5 — findings by Gemini 3.5 Flash

- Source: Anthropic/Claude Opus 5
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic's flagship Opus 5-generation model designed for deepest reasoning and long autonomous coding and research runs.
- **Provider / access:** Anthropic / OpenCode Zen `anthropic/claude-opus-5`
- **Release / knowledge:** 2026-06; knowledge cutoff 2026
- **IDs:** `anthropic/claude-opus-5` (no Free ID exists on Zen)
- **Context window:** 1,000,000 (1M) input / 128K max output
- **Modalities:** Text, image, PDF in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-09-18):** Paid $5.00 / $25.00 per 1M tokens — no Zen Free ID
- **Architecture:** Proprietary transformer architecture

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **86.1%**
- Tau3-Banking / Tau2-Bench: **83.9%**
- GDPval-AA: **1748**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **90.8%**

Reasoning / knowledge:

- GPQA Diamond: **93.5%**
- HLE: **48.7%**
- LCR / MLCR: **98.5%**
- CritPt: **86.2%**
- Artificial Analysis Intelligence Index / BenchLM overall: **63 / #1**
- Omniscience Accuracy / Hallucination Rate: **94.2% / 1.1%**

Coding:

- SWE-bench Verified / SWE-Pro: **75.4%**
- LiveCodeBench: **83.0%**
- SciCode / AA-SciCode: **58.8%**
- Vibe Code Bench: **82.9%**
- DeepSWE / Coding Index / other: **80.5%**

Long context:

- RULER / GraphWalks retrieval accuracy: 99.5% at 1M context.

### Normalized scores (1–100)

- **Tool use: 91/100.** Highly precise tool calling and complex workflow execution.
- **Reasoning: 95/100.** Deepest reasoning and logical inference capabilities available.
- **Context window: 100/100.** Outstanding 1M input window with near-perfect retrieval accuracy.
- **Multimodal: 80/100.** Strong input support for text, image, and PDF, text-only output.
- **Coding: 76/100.** Excellent codebase navigation and software engineering performance, slightly capped by execution speed.
- **Cost efficiency: 50/100.** High premium pricing with no Zen Free ID.
- **Overall Score: 88/100.** Exceptional frontier-class model, ideal for the most demanding research and multi-step cognitive tasks.

---

## Signature

- Provided by: **Gemini 3.5 Flash (google/gemini-3.5-flash)** — 2026-09-18
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
