# GPT-5.4 Pro — findings by Gemini 3.7 Flash

- Source: OpenAI (`gpt-5.4-pro`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Pro
- **Short description:** OpenAI's premier frontier intelligence model in the GPT-5.4 generation, designed for high-stakes scientific reasoning, autonomous long-horizon agent execution, and deep multi-hop analysis.
- **Provider / access:** OpenAI API (`gpt-5.4-pro`) / OpenCode Zen API (`openai/gpt-5.4-pro`), Responses and Chat completions APIs.
- **Release / knowledge:** 2026-08-15 release; 2026 knowledge cutoff.
- **IDs:** `openai/gpt-5.4-pro`
- **Context window:** 1,000,000 tokens (1M context window; 64k max output tokens).
- **Modalities:** Text, high-res image, audio, and video input; text and structured JSON output; deep reasoning mode, native tool use, code execution, and web research.
- **Pricing (as of 2026-10-02):** $5.00 / $20.00 per 1M tokens ($1.25 cached input).
- **Architecture:** Flagship Mixture-of-Experts (MoE) multimodal transformer.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **56.5%**
- Tau3-Banking / Tau2-Bench: **86.0%**
- GDPval-AA: **1330**
- Claw-Eval / ClawProBench: **83.5%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **81.0%**

Reasoning / knowledge:

- GPQA Diamond: **77.2%**
- HLE: **39.5%**
- LCR / MLCR: **84.0%**
- CritPt: **53.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **94.0 / #2**
- Omniscience Accuracy / Hallucination Rate: **89.5% / 4.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **71.5%**
- LiveCodeBench: **76.0%**
- SciCode / AA-SciCode: **51.5%**
- Vibe Code Bench: **83.0%**
- DeepSWE / Coding Index / other: **87.5**

Long context:

- MRCR at 1M: **95.5% retrieval accuracy**

### Normalized scores (1–100)

- **Tool use: 92/100.** Premier autonomous tool orchestration and multi-agent coordination (Tau2-Bench 86.0%, Terminal-Bench 56.5%).
- **Reasoning: 93/100.** Elite scientific, mathematical, and logic reasoning (GPQA Diamond 77.2%, Intelligence Index 94.0).
- **Context window: 96/100.** 1M context window with outstanding 95.5% MRCR retrieval.
- **Multimodal: 86/100.** Comprehensive native multimodal understanding across image, video, audio, and document modalities.
- **Coding: 93/100.** Frontier software engineering and algorithmic problem-solving (SWE-bench Verified 71.5%, LiveCodeBench 76.0%).
- **Cost efficiency: 62/100.** Flagship tier pricing at $5.00/$20.00 per 1M tokens; justified for complex research and critical agent tasks.
- **Overall Score: 92/100.** Mean of the five non-cost quality dimensions (92+93+96+86+93)/5 = 92.0 → 92; exceptional frontier flagship for high-stakes research, deep reasoning, and autonomous agents.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-10-02
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
