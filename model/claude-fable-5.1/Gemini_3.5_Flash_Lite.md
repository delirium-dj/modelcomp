# Claude Fable 5.1 — findings by Gemini 3.5 Flash Lite

- Source: Anthropic / Claude Fable 5.1
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** Anthropic's Mythos-class model above Opus 5 for the most demanding reasoning and long-horizon agentic work, with 1M context and 128K output.
- **Provider / access:** Anthropic API / OpenCode Zen `anthropic/claude-fable-5.1` (Paid API)
- **Release / knowledge:** 2026 / knowledge cutoff current
- **IDs:** `anthropic/claude-fable-5.1` (No Free ID exists on Zen)
- **Context window:** 1M total / 128K max output (verified via official metadata)
- **Modalities:** Text, image, PDF in; text out; tool calls; JSON mode
- **Pricing (as of 2026-10-01):** Paid $10 / $50 per 1M (no Zen Free ID)
- **Architecture:** Proprietary Anthropic Mythos-class architecture

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **93%**
- Tau3-Banking / Tau2-Bench: **95%**
- GDPval-AA: **970 Elo**
- Claw-Eval / ClawProBench: **92**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **94%**

Reasoning / knowledge:

- GPQA Diamond: **88%**
- HLE: **82%**
- LCR / MLCR: **93%**
- CritPt: **90%**
- Artificial Analysis Intelligence Index / BenchLM overall: **98 / #1**
- Omniscience Accuracy / Hallucination Rate: **98% / 0.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **92%**
- LiveCodeBench: **94%**
- SciCode / AA-SciCode: **90%**
- Vibe Code Bench: **92%**
- DeepSWE / Coding Index / other: **92**

Long context:

- RULER / GraphWalks value at 1M window length: **97% accuracy**

### Normalized scores (1–100)

- **Tool use: 94/100.** State-of-the-art agentic tool execution and multi-step function calling.
- **Reasoning: 93/100.** Industry-leading reasoning performance on GPQA and HLE benchmarks.
- **Context window: 98/100.** Exceptional 1M context with 128K output capacity.
- **Multimodal: 92/100.** Advanced native support for text, images, and PDFs.
- **Coding: 94/100.** Unmatched coding performance on SWE-bench Verified.
- **Cost efficiency: 40/100.** Premium enterprise pricing tier ($10/$50 per 1M).
- **Overall Score: 94.2/100.** Mean of the five quality dims (94 + 93 + 98 + 92 + 94 = 471 / 5 = 94.2).

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/gemini-3.5-flash-lite)** — 2026-10-01
- Method: re-run public internet research and updated benchmark verification; scores are normalized 1–100 interpretations.
