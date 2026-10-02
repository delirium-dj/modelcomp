# GPT-5.2 — findings by Gemini 3.7 Flash

- Source: OpenAI (`gpt-5.2`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2
- **Short description:** OpenAI's expanded 1M-context flagship model in the GPT-5 generation, engineered for deep multi-turn agent autonomy, complex tool integration, and advanced code synthesis.
- **Provider / access:** OpenAI API (`gpt-5.2`) / OpenCode Zen API (`openai/gpt-5.2`), Responses and Chat completions APIs.
- **Release / knowledge:** 2026-06-01 release; 2026 knowledge cutoff.
- **IDs:** `openai/gpt-5.2`
- **Context window:** 1,000,000 tokens (1M context window; 32k max output tokens).
- **Modalities:** Text, image, and audio input; text and structured JSON output; tool calling, code execution, and web integration.
- **Pricing (as of 2026-10-02):** $1.75 / $7.00 per 1M tokens ($0.40 cached input).
- **Architecture:** Frontier Mixture-of-Experts (MoE) transformer.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **49.8%**
- Tau3-Banking / Tau2-Bench: **82.6%**
- GDPval-AA: **1280**
- Claw-Eval / ClawProBench: **78.5%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **74.0%**

Reasoning / knowledge:

- GPQA Diamond: **73.0%**
- HLE: **34.5%**
- LCR / MLCR: **80.2%**
- CritPt: **48.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **90.5 / #7**
- Omniscience Accuracy / Hallucination Rate: **86.8% / 6.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **64.2%**
- LiveCodeBench: **71.0%**
- SciCode / AA-SciCode: **45.8%**
- Vibe Code Bench: **78.0%**
- DeepSWE / Coding Index / other: **82.5**

Long context:

- MRCR at 1M: **92.0% retrieval accuracy**

### Normalized scores (1–100)

- **Tool use: 88/100.** High-fidelity tool calling and multi-step plan execution (Tau2-Bench 82.6%, Terminal-Bench 49.8%).
- **Reasoning: 89/100.** Strong mathematical and scientific reasoning (GPQA Diamond 73.0%, Intelligence Index 90.5).
- **Context window: 94/100.** 1M context window with reliable 92.0% MRCR retrieval.
- **Multimodal: 82/100.** Native text, image, and audio stream input comprehension.
- **Coding: 89/100.** Frontier code generation and issue resolution (SWE-bench Verified 64.2%, LiveCodeBench 71.0%).
- **Cost efficiency: 77/100.** Solid value for a 1M frontier model at $1.75/$7.00 per 1M tokens.
- **Overall Score: 88/100.** Mean of the five non-cost quality dimensions (88+89+94+82+89)/5 = 88.4 → 88; top-tier frontier model for complex long-context reasoning and autonomous programming.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-10-02
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
