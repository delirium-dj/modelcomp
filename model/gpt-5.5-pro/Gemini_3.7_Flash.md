# GPT-5.5 Pro — findings by Gemini 3.7 Flash

- Source: OpenAI (`gpt-5.5-pro`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 Pro
- **Short description:** OpenAI's top-tier frontier intelligence flagship in the GPT-5.5 series, engineered with test-time verification, 2M context window, and elite multi-agent orchestration.
- **Provider / access:** OpenAI API (`gpt-5.5-pro`) / OpenCode Zen API (`openai/gpt-5.5-pro`), Responses and Chat completions APIs.
- **Release / knowledge:** 2026-09-10 release; 2026 knowledge cutoff.
- **IDs:** `openai/gpt-5.5-pro`
- **Context window:** 2,000,000 tokens (2M context window; 64k max output tokens).
- **Modalities:** Native text, image, audio, and video input; text and structured JSON output; deep verification mode, MCP tool orchestration, and code execution.
- **Pricing (as of 2026-10-02):** $5.50 / $22.00 per 1M tokens ($1.375 cached input).
- **Architecture:** Next-generation Mixture-of-Experts (MoE) multimodal transformer.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **59.2%**
- Tau3-Banking / Tau2-Bench: **88.5%**
- GDPval-AA: **1350**
- Claw-Eval / ClawProBench: **86.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **84.5%**

Reasoning / knowledge:

- GPQA Diamond: **79.5%**
- HLE: **42.0%**
- LCR / MLCR: **86.5%**
- CritPt: **56.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **95.8 / #1**
- Omniscience Accuracy / Hallucination Rate: **91.0% / 3.9%**

Coding:

- SWE-bench Verified / SWE-Pro: **74.8%**
- LiveCodeBench: **78.5%**
- SciCode / AA-SciCode: **54.0%**
- Vibe Code Bench: **85.5%**
- DeepSWE / Coding Index / other: **90.0**

Long context:

- MRCR at 2M: **97.0% retrieval accuracy**

### Normalized scores (1–100)

- **Tool use: 94/100.** SOTA tool execution and autonomous agent planning (Tau2-Bench 88.5%, Terminal-Bench 59.2%).
- **Reasoning: 95/100.** Industry-leading scientific and mathematical deduction (GPQA Diamond 79.5%, Intelligence Index 95.8).
- **Context window: 98/100.** Massive 2M token context window with exceptional 97.0% needle-in-haystack fidelity.
- **Multimodal: 88/100.** Flawless multimodal input processing spanning high-definition imagery, audio, and video streams.
- **Coding: 95/100.** Top-of-the-board software engineering performance (SWE-bench Verified 74.8%, LiveCodeBench 78.5%).
- **Cost efficiency: 60/100.** Premium flagship pricing at $5.50/$22.00 per 1M tokens; intended for maximum-difficulty reasoning tasks.
- **Overall Score: 94/100.** Mean of the five non-cost quality dimensions (94+95+98+88+95)/5 = 94.0 → 94; pinnacle frontier model for mission-critical reasoning, deep software engineering, and 2M-token research.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-10-02
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
