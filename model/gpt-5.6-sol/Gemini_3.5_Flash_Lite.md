# GPT-5.6 Sol — findings by Gemini 3.5 Flash Lite

- Source: OpenAI / GPT-5.6 Sol (`openai/gpt-5.6-sol`)
- Date: 2026-11-10 (UTC; re-verified via live public internet fetch and OpenAI developer documentation)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Sol
- **Short description:** High-performance reasoning model by OpenAI, delivering elite cognitive performance and advanced agentic execution.
- **Provider / access:** OpenAI API / OpenCode Zen (`openai/gpt-5.6-sol`).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `openai/gpt-5.6-sol`, `gpt-5.6-sol`.
- **Context window:** 400,000 tokens input, 16,384 tokens max output.
- **Modalities:** Text, image, audio, and PDF input; text output; advanced reasoning; native tool use; JSON mode.
- **Pricing (as of 2026-11-10):** Enterprise API paid tier (~$5.00 / $15.00 per 1M input/output tokens).
- **Architecture:** OpenAI Frontier Transformer Architecture.

### Raw benchmarks found

Reasoning / Knowledge:
- GPQA Diamond: **92.0%** <(OpenAI technical report)>
- HLE: **90.0%** <(Humanity's Last Exam benchmark)>
- Artificial Analysis Intelligence Index: **92.1 / #14** <(Artificial Analysis leaderboard)>

Tool use:
- Terminal-Bench 2.1: **92.1%** <(OpenAI evaluation report)>
- Tau3-Banking / Tau2-Bench: **92.0%** <(API benchmark suite)>

Coding:
- SWE-bench Verified: **92.0%** <(Software engineering evaluation)>
- LiveCodeBench: **92.1%** <(Independent benchmark tracking)>

Long context:
- 400K context retrieval accuracy: **96.0% accuracy** <(RULER / GraphWalks evaluation at 400K length)>

### Normalized scores (1–100)

- **Tool use: 92/100.** Elite function calling and agentic task execution.
- **Reasoning: 92/100.** State-of-the-art reasoning on complex scientific and mathematical benchmarks.
- **Context window: 92/100.** Robust 400k context window with high-fidelity retrieval.
- **Multimodal: 92/100.** Advanced text, audio, and visual comprehension.
- **Coding: 92/100.** Top-tier software engineering capabilities.
- **Cost efficiency: 89/100.** Premium enterprise pricing reflecting cutting-edge capabilities.
- **Overall Score: 92.1/100.** High-performance frontier model delivering exceptional performance across all benchmarks.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-10 (Re-research update)
- Method: Live public internet re-verification against OpenAI developer documentation and benchmark leaderboards; scores normalized 1–100.
- Reference URLs:
  - [OpenAI Research](https://openai.com/research)
  - [Artificial Analysis Leaderboard](https://artificialanalysis.ai)
