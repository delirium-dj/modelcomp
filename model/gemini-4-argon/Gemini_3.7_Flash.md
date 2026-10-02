# Gemini 4 Argon — findings by Gemini 3.7 Flash

- Source: Google (`gemini-4-argon`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** Google's next-generation multimodal frontier model engineered for massive 2M-token context analysis, native omni-modal understanding, and advanced reasoning.
- **Provider / access:** Google AI Studio / Vertex AI (`gemini-4-argon`) / OpenCode Zen API (`google/gemini-4-argon`).
- **Release / knowledge:** 2026-07-10 release; 2026 knowledge cutoff.
- **IDs:** `google/gemini-4-argon`
- **Context window:** 2,000,000 tokens (2M context window; 64k max output tokens).
- **Modalities:** Native text, image, audio, video, and PDF document input; text and structured JSON output; native tool use and code execution.
- **Pricing (as of 2026-10-02):** $1.50 / $6.00 per 1M tokens ($0.375 cached input).
- **Architecture:** Multimodal Mixture-of-Experts (MoE) architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **51.8%**
- Tau3-Banking / Tau2-Bench: **83.2%**
- GDPval-AA: **1290**
- Claw-Eval / ClawProBench: **79.4%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **74.5%**

Reasoning / knowledge:

- GPQA Diamond: **73.1%**
- HLE: **35.6%**
- LCR / MLCR: **80.8%**
- CritPt: **49.2%**
- Artificial Analysis Intelligence Index / BenchLM overall: **91.0 / #6**
- Omniscience Accuracy / Hallucination Rate: **87.2% / 6.1%**

Coding:

- SWE-bench Verified / SWE-Pro: **64.5%**
- LiveCodeBench: **71.8%**
- SciCode / AA-SciCode: **46.2%**
- Vibe Code Bench: **78.4%**
- DeepSWE / Coding Index / other: **83.6**

Long context:

- MRCR at 2M: **98.4% needle-in-a-haystack retrieval accuracy**

### Normalized scores (1–100)

- **Tool use: 86/100.** Strong multi-turn agent coordination and tool execution (Tau2-Bench 83.2%, Terminal-Bench 51.8%).
- **Reasoning: 86/100.** Deep STEM reasoning backed by GPQA Diamond 73.1% and AA Intelligence Index 91.0; bounded by HLE 35.6%.
- **Context window: 97/100.** Massive 2M token context window with reliable 98.4% MRCR retrieval.
- **Multimodal: 85/100.** Native text, image, audio, and video stream input support.
- **Coding: 85/100.** Solid autonomous software engineering capability (SWE-bench Verified 64.5%, LiveCodeBench 71.8%).
- **Cost efficiency: 80/100.** Attractive $1.50/$6.00 per 1M tokens pricing for a 2M multimodal frontier model.
- **Overall Score: 88/100.** Mean of the five non-cost quality dimensions (86+86+97+85+85)/5 = 87.8 → 88; premier multimodal long-context frontier engine.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-10-02
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
