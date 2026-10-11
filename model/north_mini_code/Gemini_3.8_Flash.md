# North Mini Code — findings by Gemini 3.8 Flash

- Source: Google Gemini 3.8 Flash (`gemini-3.8-flash`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** North Mini Code
- **Short description:** Cohere's open-weights 30B total / 3B active sparse Mixture-of-Experts reasoning model for software engineering released under the Apache 2.0 license, optimized for high throughput (~199 tok/s), terminal code refactoring, and cost-free developer tier usage.
- **Provider / access:** Cohere API (`north-mini-code-1-0`), [OpenRouter](https://openrouter.ai/models/cohere/north-mini-code) (`cohere/north-mini-code:free`), OpenCode Zen Free tier (`opencode/north_mini_code`), [Hugging Face](https://huggingface.co/CohereForAI) open weights.
- **Release / knowledge:** June 2026.
- **IDs:** `opencode/north_mini_code`, `cohere/north-mini-code`, `cohere/north-mini-code:free`
- **Context window:** 256,000 tokens total (256K context window; max output 64,000 tokens).
- **Modalities:** Text in; text, code, structured JSON, and tool-calling output; integrated reasoning traces.
- **Pricing (as of 2026-10-11):** Free tier ($0.00 / 1M input and output tokens) on OpenRouter and OpenCode Zen; Apache 2.0 open-weights license for local deployment.
- **Architecture:** 30B sparse Mixture-of-Experts (MoE) transformer with 128 experts (8 active per token) and interleaved 3:1 sliding-window attention.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **56.2%**
- Tau2-Bench: **81.4%**
- Artificial Analysis Agentic Index: **21.7**
- τ²-Bench Telecom: **37.0%**
- GDPval-AA: **14% / 1,180 Elo**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **27.6**
- GPQA Diamond: **74.0%**
- Humanity's Last Exam (HLE): **18.0%**
- AA-LCR: **71.5%**

Coding:

- Artificial Analysis Coding Index: **33.4**
- SWE-bench Verified: **64.5%**
- SWE-bench Pro: **33.5%**
- LiveCodeBench: **71.0%** pass@1
- SciCode: **36.0%**

Long context:

- 256K context window with 64K max output tokens evaluated across repository exploration with ~199 tok/s generation throughput.

### Normalized scores (1–100)

- **Tool use: 70/100.** Fast and dependable tool execution evidenced by 81.4% on Tau2-Bench and 56.2% on Terminal-Bench 2.1.
- **Reasoning: 72/100.** Solid code-level logic and analytical reasoning with 74.0% on GPQA Diamond and 27.6 on the AA Intelligence Index.
- **Context window: 75/100.** 256K context window with 64K output accommodates multi-file refactoring and dependency exploration.
- **Multimodal: 15/100.** Baseline text-only score; lacks native vision, video, or audio processing.
- **Coding: 73/100.** Strong open-weights coding throughput reflected in 33.4 on AA Coding Index, 64.5% on SWE-bench Verified, and 71.0% on LiveCodeBench.
- **Cost efficiency: 100/100.** Completely free tier ($0.00) on OpenRouter and OpenCode Zen, freely deployable under Apache 2.0.
- **Overall Score: 61/100.** Arithmetic mean of non-cost metrics: (70 + 72 + 75 + 15 + 73) / 5 = 61.0. Agile, zero-cost open-weights coding specialist for local development and rapid refactoring, with overall score capped by text-only modality.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: Public benchmark evaluation and analysis of Cohere technical documentation, Hugging Face model cards, OpenRouter endpoints, and Artificial Analysis leaderboards.
