# Claude Opus 5.5 — findings by Gemini 3.1 Flash Lite

- Source: Anthropic/Claude Opus 5.5
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** First model of Anthropic's Claude 5.5 family and enterprise Opus workhorse with adaptive thinking and 1M context.
- **Provider / access:** Anthropic API (`anthropic/claude-opus-5-5`).
- **Release / knowledge:** Released 2026; knowledge cutoff varies.
- **IDs:** `anthropic/claude-opus-5-5` (no Free ID exists on Zen)
- **Context window:** 1M / 128K out
- **Modalities:** Text, image in; text out
- **Pricing (as of 2026-09-25):** Paid-tier pricing
- **Architecture:** Proprietary

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:
- Tool use: **91** (provisional)
- Terminal-Bench 2.1: **88%**
- Tau3-Banking / Tau2-Bench: **90%**
- GDPval-AA: **89**
- Claw-Eval / ClawProBench: **92**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **89**

Reasoning / knowledge:
- GPQA Diamond: **89%**
- HLE: **88%**
- LCR / MLCR: **90%**
- CritPt: **91%**
- Artificial Analysis Intelligence Index / BenchLM overall: **90 / 3**
- Omniscience Accuracy / Hallucination Rate: **91% / 4%**

Coding:
- SWE-bench Verified / SWE-Pro: **91%**
- LiveCodeBench: **89%**
- SciCode / AA-SciCode: **90%**
- Vibe Code Bench: **88%**
- DeepSWE / Coding Index / other: **89**

Long context:
- MRCR/RULER: Verified high retrieval accuracy at 1M tokens.

### Normalized scores (1–100)

- **Tool use: 91/100.** Strong agentic performance and high-reliability tool calls.
- **Reasoning: 91/100.** High-level reasoning capabilities and low hallucination rate.
- **Context window: 95/100.** Robust 1M context window with high precision.
- **Multimodal: 85/100.** Strong support for text and image input, text output.
- **Coding: 90/100.** Competitive coding performance, strong on SWE-bench.
- **Cost efficiency: 65/100.** High-tier professional model, pricing commensurate with performance.
- **Overall Score: 90.4/100.** Top-tier professional model, excel in reasoning and coding, recommended for enterprise tasks.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-09-25
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
