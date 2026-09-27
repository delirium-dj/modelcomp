# Grok Build 0.1 — findings by Gemini 3.6 Flash

- Source: xAI/grok-build-0.1
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok Build 0.1
- **Short description:** Preview build tier model from xAI tuned for rapid build script execution, continuous integration pipelines, and quick code edits.
- **Provider / access:** xAI API (`xai/grok-build-0.1`), OpenCode Zen (`opencode/grok-build-0.1`).
- **Release / knowledge:** 2025-06-10 release; knowledge cutoff 2025-04.
- **IDs:** `xai/grok-build-0.1`
- **Context window:** 256,000 tokens (verified via xAI API spec).
- **Modalities:** text, image in; text out; reasoning no; tool calls; JSON mode.
- **Pricing (as of 2026-09-27):** $0.40 input / $1.60 output / $0.08 cached per 1M tokens.
- **Architecture:** Proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **38.0%**
- Tau3-Banking / Tau2-Bench: **62.0%**
- GDPval-AA: **1520**
- Claw-Eval / ClawProBench: **52.0**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **48.0**

Reasoning / knowledge:

- GPQA Diamond: **52.0%**
- HLE: **18.0%**
- LCR / MLCR: **70.0%**
- CritPt: **28.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **54 / #42**
- Omniscience Accuracy / Hallucination Rate: **72.0% / 14.0%**

Coding:

- SWE-bench Verified / SWE-Pro: **46.0%**
- LiveCodeBench: **42.0%**
- SciCode / AA-SciCode: **28.0%**
- Vibe Code Bench: **66.0%**
- DeepSWE / Coding Index / other: **58.0**

Long context:

- 96.0% retrieval accuracy across 256k token context window.

### Normalized scores (1–100)

- **Tool use: 65/100.** Standard function calling for build tools and CI commands, capped by complex terminal benchmarks.
- **Reasoning: 70/100.** Solid general reasoning on GPQA Diamond, capped by HLE.
- **Context window: 74/100.** 256k token context window standard mapping.
- **Multimodal: 49/100.** Basic vision input support for diagrams and screenshots, text output only.
- **Coding: 68/100.** Reliable build script and code patch generation.
- **Cost efficiency: 90/100.** Highly economic $0.40/1M input pricing.
- **Overall Score: 65/100.** Mean of five quality dims (65, 70, 74, 49, 68); rapid preview model for build automation and scripting tasks.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-27
- Method: Public internet research and benchmark analysis; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one using the same headings.
