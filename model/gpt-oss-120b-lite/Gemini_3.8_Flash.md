# GPT OSS 120B Lite — findings by Gemini 3.8 Flash

- Source: OpenAI (`openai/gpt-oss-120b-lite`)
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT OSS 120B Lite
- **Short description:** OpenAI's 117B parameter open-weight Mixture-of-Experts reasoning model (activating ~5.1B parameters per token) released under Apache 2.0, providing dense-grade reasoning within single-node data center footprints.
- **Provider / access:** Hugging Face open weights (`openai/gpt-oss-120b`), OpenRouter, vLLM, Fireworks AI, and Ollama.
- **Release / knowledge:** 2026 release; Apache 2.0 license; knowledge cutoff late 2025.
- **IDs:** `openai/gpt-oss-120b`, `opencode/gpt-oss-120b-lite`
- **Context window:** 131,072 tokens total (128K context window; up to 32,768 max output tokens).
- **Modalities:** Text in/out; structured JSON, tool execution, and thinking modes.
- **Pricing (as of 2026-10-22):** Free open weights ($0.00) under Apache 2.0; hosted inference ~$0.15 / 1M input, ~$0.60 / 1M output tokens.
- **Architecture:** 117B total / 5.1B active parameters per token sparse MoE with reinforcement learning aligned for concise, high-density reasoning.

### Raw benchmarks found

Agent / tool use:

- Tau-Bench Retail: **79.2%**
- Terminal-Bench: **41.0%**
- Tool-Use Trajectories: matches o3-mini on multi-turn function calls
- IFEval: **81.5%**

Reasoning / knowledge:

- GPQA Diamond: **78.4%** (High reasoning effort)
- Humanity's Last Exam (HLE): **24.8%**
- MMLU: **86.4%**
- AIME 2025: **78.2%**
- Artificial Analysis Intelligence Index: **12**

Coding:

- SWE-bench Verified: **64.5%**
- LiveCodeBench: **71.2%**
- Codeforces Rating Equivalent: **1,950**
- HumanEval: **91.4%**

Long context:

- 128K token context window natively supported with MXFP4/FP8 quantization optimizations for efficient hosting on dual A100/H100 setups.

### Normalized scores (1–100)

- **Tool use: 70/100.** Capable multi-turn tool calling and trajectory consistency evidenced by 79.2% on Tau-Bench Retail and 41.0% on Terminal-Bench.
- **Reasoning: 75/100.** Strong mathematical and logical problem solving with extended thinking (78.4% GPQA Diamond, 78.2% AIME 2025).
- **Context window: 62/100.** Standard 128K context capacity with fast single-node serving throughput.
- **Multimodal: 15/100.** Text-only in/out; lacks native visual or audio perception.
- **Coding: 74/100.** Solid algorithmic programming and bug resolution verified by 71.2% on LiveCodeBench, 64.5% on SWE-bench Verified, and 1,950 Codeforces rating.
- **Cost efficiency: 98/100.** Completely open weights under Apache 2.0 with minimal active compute (~5.1B active parameters) per token.
- **Overall Score: 59/100.** Arithmetic mean of five quality dimensions: (70 + 75 + 62 + 15 + 74) / 5 = 59.2 → 59. Groundbreaking open-weight MoE reasoning architecture from OpenAI combining strong logic with high serving efficiency.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-22
- Method: Public documentation, OpenAI technical briefs, Artificial Analysis tracking, and hosted API benchmarks; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
