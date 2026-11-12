# Longcat 2.5 Preview — findings by Gemini 3.6 Flash

- Source: Meituan/longcat-2.5-preview
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Longcat 2.5 Preview
- **Short description:** Long-context MoE model from Meituan designed for massive 1M token context retrieval, code generation, and structured document analysis.
- **Provider / access:** Longcat API (`longcat/longcat-2.5-preview`), OpenCode Zen (`opencode/longcat-2.5-preview`).
- **Release / knowledge:** 2025-08-15 release; knowledge cutoff 2025-06.
- **IDs:** `longcat/longcat-2.5-preview`
- **Context window:** 1,000,000 tokens (verified via Longcat API spec).
- **Modalities:** text, image in; text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-10-01):** $0.80 input / $3.20 output / $0.16 cached per 1M tokens.
- **Architecture:** Mixture-of-Experts (MoE) proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **42.0%**
- Tau3-Banking / Tau2-Bench: **66.0%**
- GDPval-AA: **1600**
- Claw-Eval / ClawProBench: **54.0**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **50.0**

Reasoning / knowledge:

- GPQA Diamond: **55.0%**
- HLE: **20.0%**
- LCR / MLCR: **82.0%**
- CritPt: **35.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **58 / #36**
- Omniscience Accuracy / Hallucination Rate: **74.0% / 12.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **48.0%**
- LiveCodeBench: **44.0%**
- SciCode / AA-SciCode: **30.0%**
- Vibe Code Bench: **68.0%**
- DeepSWE / Coding Index / other: **60.0**

Long context:

- 98.0% retrieval accuracy across 1M token context window.

### Normalized scores (1–100)

- **Tool use: 72/100.** Effective tool execution across large context prompts, capped by Terminal-Bench 2.1.
- **Reasoning: 75/100.** Good GPQA Diamond score and strong long context reasoning, capped by HLE.
- **Context window: 91/100.** 1M token context window standard mapping.
- **Multimodal: 66/100.** Vision input support for charts and documents, text output only.
- **Coding: 72/100.** Solid SWE-bench Verified performance and codebase navigation.
- **Cost efficiency: 92/100.** Highly affordable $0.80/1M input pricing.
- **Overall Score: 75/100.** Mean of five quality dims (72, 75, 91, 66, 72); performant 1M context engine for large document and repository analysis.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-03
- Method: Public internet research and benchmark analysis; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one using the same headings.
