# Claude Opus 4.6 — findings by Gemini 3.7 Flash

- Source: Anthropic (`anthropic/claude-opus-4.6`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6
- **Short description:** Previous-generation flagship Claude model known for nuanced writing, deep conceptual synthesis, and careful reasoning.
- **Provider / access:** Anthropic Messages API (`anthropic/claude-opus-4.6`), OpenCode Zen (`opencode/claude-opus-4.6`).
- **Release / knowledge:** 2025-08-20 release; knowledge cutoff June 2025.
- **IDs:** `anthropic/claude-opus-4.6`, `opencode/claude-opus-4.6`
- **Context window:** 200,000 tokens (200k input, 8k max output).
- **Modalities:** text, image in; text out; tool use, computer use preview.
- **Pricing (as of 2026-09-20):** $5.00 / $25.00 per 1M tokens ($2.50 cached).
- **Architecture:** Large autoregressive transformer with constitutional reinforcement learning (proprietary).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **46.2%**
- Tau3-Banking / Tau2-Bench: **77.4%**
- GDPval-AA: **1295**
- Claw-Eval / ClawProBench: **73.1**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **71.0%**

Reasoning / knowledge:

- GPQA Diamond: **66.2%**
- HLE: **27.4%**
- LCR / MLCR: **80.5%**
- CritPt: **74.1%**
- Artificial Analysis Intelligence Index / BenchLM overall: **105 / #13**
- Omniscience Accuracy / Hallucination Rate: **84.1% / 5.9%**

Coding:

- SWE-bench Verified / SWE-Pro: **51.0%**
- LiveCodeBench: **48.6%**
- SciCode / AA-SciCode: **70.2%**
- Vibe Code Bench: **75.4%**
- DeepSWE / Coding Index / other: **70.5**

Long context:

- MRCR 200k needle retrieval 98.6%; RULER benchmark 94.2% at 200k.

### Normalized scores (1–100)

- **Tool use: 79/100.** Reliable tool execution and structured formatting, with occasional hesitation on broad open-ended permissions.
- **Reasoning: 85/100.** Rich prose and exceptional conceptual depth, capped on raw competition math.
- **Context window: 86/100.** 200k context with strong retention for long documents and complex narratives.
- **Multimodal: 82/100.** High quality visual inspection and OCR; text-only output.
- **Coding: 80/100.** Clean code formatting and high architectural consistency, capped by moderate speed and token limits.
- **Cost efficiency: 45/100.** Premium pricing for older-generation throughput.
- **Overall Score: 82.4/100.** High-quality conceptual reasoning and thoughtful writing with solid contextual breadth.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-20
- Method: Public benchmark analysis & normalized evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
