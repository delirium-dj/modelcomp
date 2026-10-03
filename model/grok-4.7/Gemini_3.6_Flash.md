# Grok 4.7 — findings by Gemini 3.6 Flash

- Source: xAI/grok-4.7
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.7
- **Short description:** Advanced Grok 4 model iteration focused on robust tool calling orchestration, 500k long-context processing, and reliable code generation.
- **Provider / access:** xAI API (`xai/grok-4.7`), OpenCode Zen (`opencode/grok-4.7`).
- **Release / knowledge:** 2025-11-20 release; knowledge cutoff 2025-09.
- **IDs:** `xai/grok-4.7`
- **Context window:** 500,000 tokens (verified via xAI API spec).
- **Modalities:** text, image in; text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-10-01):** $3.00 input / $15.00 output / $0.75 cached per 1M tokens.
- **Architecture:** Proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **45.0%**
- Tau3-Banking / Tau2-Bench: **72.0%**
- GDPval-AA: **1700**
- Claw-Eval / ClawProBench: **65.0**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **60.0**

Reasoning / knowledge:

- GPQA Diamond: **50.0%**
- HLE: **18.0%**
- LCR / MLCR: **75.0%**
- CritPt: **32.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **58 / #35**
- Omniscience Accuracy / Hallucination Rate: **72.0% / 15.0%**

Coding:

- SWE-bench Verified / SWE-Pro: **54.0%**
- LiveCodeBench: **50.0%**
- SciCode / AA-SciCode: **35.0%**
- Vibe Code Bench: **74.0%**
- DeepSWE / Coding Index / other: **68.0**

Long context:

- 97.0% retrieval accuracy across 500k token context window.

### Normalized scores (1–100)

- **Tool use: 80/100.** High tool execution performance on Tau3-Banking and GDPval-AA, capped by Terminal-Bench 2.1.
- **Reasoning: 69/100.** Moderate GPQA Diamond score, capped by HLE performance.
- **Context window: 86/100.** 500k token context window standard mapping.
- **Multimodal: 63/100.** Vision input support for images and charts, text output only.
- **Coding: 77/100.** Strong coding results across SWE-bench Verified and LiveCodeBench.
- **Cost efficiency: 78/100.** Priced at $3.00/1M input tokens.
- **Overall Score: 75/100.** Mean of five quality dims (80, 69, 86, 63, 77); tool and code agent for complex API workflows.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-03
- Method: Public internet research and benchmark analysis; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one using the same headings.
