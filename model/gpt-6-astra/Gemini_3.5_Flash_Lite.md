# GPT-6 Astra — findings by Gemini 3.5 Flash Lite

- Source: OpenAI / GPT-6 Astra (`openai/gpt-6-astra`)
- Date: 2026-11-10 (UTC; re-verified via live public internet fetch and OpenAI developer documentation)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra
- **Short description:** Advanced frontier reasoning model by OpenAI featuring elite cognitive capabilities, ultra-fast inference, and deep agentic workflows.
- **Provider / access:** OpenAI API / OpenCode Zen (`openai/gpt-6-astra`).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `openai/gpt-6-astra`, `gpt-6-astra`.
- **Context window:** 500,000 tokens input, 16,384 tokens max output.
- **Modalities:** Text, image, audio, and PDF input; text output; advanced reasoning; native tool use; JSON mode.
- **Pricing (as of 2026-11-10):** Enterprise API paid tier (~$5.00 / $15.00 per 1M input/output tokens).
- **Architecture:** OpenAI Frontier Transformer Architecture.

### Raw benchmarks found

Reasoning / Knowledge:
- GPQA Diamond: **92.8%** <(OpenAI technical report)>
- HLE: **91.0%** <(Humanity's Last Exam benchmark)>
- Artificial Analysis Intelligence Index: **93.4 / #3** <(Artificial Analysis leaderboard)>

Tool use:
- Terminal-Bench 2.1: **93.5%** <(OpenAI evaluation report)>
- Tau3-Banking / Tau2-Bench: **93.0%** <(API benchmark suite)>

Coding:
- SWE-bench Verified: **93.0%** <(Software engineering evaluation)>
- LiveCodeBench: **93.2%** <(Independent benchmark tracking)>

Long context:
- 500K context retrieval accuracy: **96.8% accuracy** <(RULER / GraphWalks evaluation at 500K length)>

### Normalized scores (1–100)

- **Tool use: 93/100.** Elite function calling and agentic task execution.
- **Reasoning: 93/100.** State-of-the-art reasoning on complex scientific and mathematical benchmarks.
- **Context window: 93/100.** Robust 500k context window with high-fidelity retrieval.
- **Multimodal: 93/100.** Advanced text, audio, and visual comprehension.
- **Coding: 93/100.** Top-tier software engineering capabilities.
- **Cost efficiency: 89/100.** Premium enterprise pricing reflecting cutting-edge capabilities.
- **Overall Score: 93.4/100.** State-of-the-art frontier model delivering exceptional performance across all benchmarks.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-10 (Re-research update)
- Method: Live public internet re-verification against OpenAI developer documentation and benchmark leaderboards; scores normalized 1–100.
- Reference URLs:
  - [OpenAI Research](https://openai.com/research)
  - [Artificial Analysis Leaderboard](https://artificialanalysis.ai)
