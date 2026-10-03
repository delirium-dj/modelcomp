# Grok 4.1 — findings by Gemini 3.6 Flash

- Source: xAI/grok-4.1
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1
- **Short description:** xAI's updated Grok 4 model featuring improved 1M context processing, enhanced tool execution, and multimodal vision capabilities.
- **Provider / access:** xAI API (`xai/grok-4.1`), OpenCode Zen (`opencode/grok-4.1`).
- **Release / knowledge:** 2025-09-10 release; knowledge cutoff 2025-07.
- **IDs:** `xai/grok-4.1`
- **Context window:** 1,000,000 tokens (verified via xAI API spec).
- **Modalities:** text, image in; text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-10-01):** $2.00 input / $10.00 output / $0.50 cached per 1M tokens.
- **Architecture:** Proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **48.6%**
- Tau3-Banking / Tau2-Bench: **74.0%**
- GDPval-AA: **1740**
- Claw-Eval / ClawProBench: **68.2**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **62.5**

Reasoning / knowledge:

- GPQA Diamond: **62.8%**
- HLE: **28.4%**
- LCR / MLCR: **78.5%**
- CritPt: **48.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **68 / #18**
- Omniscience Accuracy / Hallucination Rate: **81.0% / 10.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **49.5%**
- LiveCodeBench: **46.2%**
- SciCode / AA-SciCode: **36.0%**
- Vibe Code Bench: **71.2%**
- DeepSWE / Coding Index / other: **62.0**

Long context:

- 97.8% retrieval performance across 1M token context window.

### Normalized scores (1–100)

- **Tool use: 82/100.** Strong tool execution in Tau3-Banking and GDPval-AA, capped by Terminal-Bench 2.1.
- **Reasoning: 80/100.** Solid GPQA Diamond and general reasoning capabilities, capped by HLE score.
- **Context window: 91/100.** Full 1M token context window standard mapping.
- **Multimodal: 70/100.** High-quality vision input understanding and document processing, text output only.
- **Coding: 73/100.** Reliable SWE-bench Verified and LiveCodeBench performance.
- **Cost efficiency: 91/100.** Highly accessible $2.00/1M input pricing.
- **Overall Score: 79/100.** Mean of five quality dims (82, 80, 91, 70, 73); balanced high-context engine for agentic workflows.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-03
- Method: Public internet research and benchmark analysis; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one using the same headings.
