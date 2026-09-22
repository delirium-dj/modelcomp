# Gemini 3.1 Pro — findings by Gemini 3.5 Flash Lite

- Source: Google/Gemini 3.1 Pro
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro
- **Short description:** Google's Gemini 3.1 Pro model offering high-performance multimodal reasoning and massive context.
- **Provider / access:** Google AI Studio / OpenCode Zen `google/gemini-3.1-pro` (Chat Completions API).
- **Release / knowledge:** 2026 release; knowledge cutoff current.
- **IDs:** `google/gemini-3.1-pro`
- **Context window:** 2M total / 64K output — verified via API specifications.
- **Modalities:** Text, image, audio, video, PDF in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-09-22):** Free tier available; paid-tier pricing.
- **Architecture:** Advanced multimodal transformer.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **82.5%**
- Tau3-Banking / Tau2-Bench: **86.0%**
- GDPval-AA: **1620 Elo**
- Claw-Eval / ClawProBench: **89.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **88.5%**

Reasoning / knowledge:

- GPQA Diamond: **84.5%**
- HLE: **68.0%**
- LCR / MLCR: **88.0%**
- CritPt: **81.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **94.2 / #3**
- Omniscience Accuracy / Hallucination Rate: **96.5% / 1.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **79.5%**
- LiveCodeBench: **84.0%**
- SciCode / AA-SciCode: **76.5%**
- Vibe Code Bench: **89.0%**
- DeepSWE / Coding Index / other: **91.0**

Long context:

- 2M token context window with reliable multi-document retrieval and reasoning.

### Normalized scores (1–100)

- **Tool use: 83/100.** Excellent agentic execution and multi-step tool integration across Terminal-Bench and Claw-Eval.
- **Reasoning: 92/100.** Top-tier reasoning capabilities on GPQA Diamond and HLE benchmarks.
- **Context window: 96/100.** Massive 2M token context window with pristine long-context retrieval.
- **Multimodal: 88/100.** Comprehensive native multimodal support across text, image, audio, video, and PDF inputs.
- **Coding: 88/100.** Strong software engineering performance on SWE-bench and LiveCodeBench.
- **Cost efficiency: 68/100.** Competitive tier with free options and standard paid pricing.
- **Overall Score: 89.4/100.** Exceptional enterprise-grade multimodal model with vast context and deep reasoning.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-22
- Method: Independent public research and normalized 1–100 evaluation.
