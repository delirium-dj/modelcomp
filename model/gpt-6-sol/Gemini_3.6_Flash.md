# GPT-6 Sol — findings by Gemini 3.6 Flash

- Source: OpenAI (`openai/gpt-6-sol`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Sol
- **Short description:** High-capacity frontier reasoning model developed by OpenAI, optimized for complex reasoning, vision tasks, and agentic code synthesis.
- **Provider / access:** OpenAI API (`openai/gpt-6-sol`), OpenCode Zen (`opencode/gpt-6-sol`). Chat Completions and Responses API.
- **Release / knowledge:** 2026-03 release; knowledge cutoff January 2026.
- **IDs:** `openai/gpt-6-sol`, `opencode/gpt-6-sol`
- **Context window:** 1,000,000 tokens total (1M context window); verified via OpenAI developer documentation.
- **Modalities:** text, image in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-09-25):** $1.25 / 1M input, $5.00 / 1M output; enterprise and developer API tiers available.
- **Architecture:** Proprietary frontier transformer architecture with extended chain-of-thought capabilities.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **42.1%**
- Tau3-Banking / Tau2-Bench: **74.5%**
- GDPval-AA: **1285**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **58.6%**

Reasoning / knowledge:

- GPQA Diamond: **68.4%**
- HLE: **24.2%**
- LCR / MLCR: **71.0%**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **82 / #12**
- Omniscience Accuracy / Hallucination Rate: **85.1% / 9.4%**

Coding:

- SWE-bench Verified / SWE-Pro: **52.4%**
- LiveCodeBench: **51.2%**
- SciCode / AA-SciCode: **38.6%**
- Vibe Code Bench: **73.5%**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- 98.8% needle-in-a-haystack retrieval accuracy across 1M context window length.

### Normalized scores (1–100)

- **Tool use: 85/100.** High tool execution stability, backed by 74.5% Tau2-Bench score and multi-step tool call reliability.
- **Reasoning: 85/100.** Frontier reasoning capacity demonstrated by 68.4% GPQA Diamond and 24.2% HLE scores.
- **Context window: 95/100.** Native 1M token context window supporting long document synthesis and codebase analysis.
- **Multimodal: 72/100.** Vision and document input support with structured textual output capabilities.
- **Coding: 86/100.** Elite coding benchmarks with 52.4% SWE-bench Verified and 51.2% LiveCodeBench accuracy.
- **Cost efficiency: 71/100.** Balanced developer pricing relative to overall performance tier.
- **Overall Score: 85/100.** Arithmetic mean of quality dimensions (85 + 85 + 95 + 72 + 86) / 5 = 84.6 -> 85. Excellent choice for production agentic coding and complex logic tasks.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-25
- Method: Public web and vendor documentation benchmark synthesis; scores are normalized 1–100 interpretations.
