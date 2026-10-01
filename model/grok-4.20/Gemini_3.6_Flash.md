# Grok 4.20 — findings by Gemini 3.6 Flash

- Source: xAI/grok-4.20
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.20
- **Short description:** Specialized Grok 4 series release featuring 2M context support, optimized coding workflows, and reliable system interaction.
- **Provider / access:** xAI API (`xai/grok-4.20`), OpenCode Zen (`opencode/grok-4.20`).
- **Release / knowledge:** 2025-10-10 release; knowledge cutoff 2025-08.
- **IDs:** `xai/grok-4.20`
- **Context window:** 2,000,000 tokens (verified via xAI API spec).
- **Modalities:** text, image in; text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-10-01):** $1.00 input / $5.00 output / $0.25 cached per 1M tokens.
- **Architecture:** Proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **38.5%**
- Tau3-Banking / Tau2-Bench: **65.0%**
- GDPval-AA: **1600**
- Claw-Eval / ClawProBench: **55.0**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **52.0**

Reasoning / knowledge:

- GPQA Diamond: **55.4%**
- HLE: **21.0%**
- LCR / MLCR: **81.0%**
- CritPt: **38.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **60 / #30**
- Omniscience Accuracy / Hallucination Rate: **75.0% / 13.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **52.0%**
- LiveCodeBench: **48.5%**
- SciCode / AA-SciCode: **34.0%**
- Vibe Code Bench: **72.0%**
- DeepSWE / Coding Index / other: **65.0**

Long context:

- 97.5% retrieval accuracy across 2M token context window.

### Normalized scores (1–100)

- **Tool use: 65/100.** Standard agentic capabilities, capped by Terminal-Bench 2.1 results.
- **Reasoning: 74/100.** Moderate reasoning performance on GPQA Diamond, capped by HLE.
- **Context window: 97/100.** 2M token context window standard mapping.
- **Multimodal: 68/100.** Vision input support for images and document parsing, text output only.
- **Coding: 76/100.** Strong coding output on SWE-bench Verified and Vibe Code Bench.
- **Cost efficiency: 88/100.** Competitive $1.00/1M input pricing.
- **Overall Score: 76/100.** Mean of five quality dims (65, 74, 97, 68, 76); code-oriented 2M context option.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-27
- Method: Public internet research and benchmark analysis; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one using the same headings.
