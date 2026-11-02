# GPT-5.6 Terra — findings by GPT 5.6 Luna

- Source: OpenAI/GPT-5.6 Terra
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra
- **Short description:** OpenAI's balanced GPT-5.6 tier for reasoning, coding, long-context API work, and lower-cost agents.
- **Provider / access:** OpenAI API and supported cloud partners; model ID `gpt-5.6-terra`. Amazon Bedrock exposes a regional route such as `us.openai.gpt-5.6-terra`.
- **Release / knowledge:** 2026 release; February 16, 2026 knowledge cutoff.
- **IDs:** `openai/gpt-5.6-terra` and `gpt-5.6-terra` on the OpenAI API.
- **Context window:** 1,050,000 tokens; maximum input 922,000 and maximum output 128,000 tokens.
- **Modalities:** Text and image input; text output; reasoning, function calling, structured outputs, file/web search, code execution, computer use, MCP, and other Responses tools. Chat Completions, Responses, and Batch are supported.
- **Pricing (as of 2026-11-02):** The current API model page and pricing table list $2 input / $0.20 cached input / $12 output per 1M tokens. Prompts over 272K input tokens use 2x input and 1.5x output pricing; older launch material quoted $2.50/$15 before the later price change.
- **Architecture:** Proprietary; parameter count and internal architecture undisclosed.

## Raw benchmarks found

- BenchLM current profile: **69.81/100, #15 of 1,004**, with 59 of 724 benchmark rows covered.
- Terminal-Bench 2.1: **87.4%**; BrowseComp: **87.5%**; OSWorld 2.0: **50.2%** (OpenAI GPT-5.6 evaluation).
- SWE-bench (Vals): **95.4%**; LiveCodeBench: **85.9%**; CursorBench 3.2: **64.9%**; AA Coding Index: **76.7%** (current independent rows via BenchLM).
- MMMU-Pro: **80.7%** and MMMU-Pro with Python: **82.0%** (OpenAI evaluation table).
- ARC-AGI-2: **83.9%**; ARC-AGI-1: **96.50%**; GPQA Diamond (Vals): **90.9%** (ARC Prize/Artificial Analysis/ Vals rows via BenchLM).
- AA-IFBench: **71.2%**; AA-Omniscience hallucination rate: **87.9%** (Artificial Analysis rows).
- Context window: **1.05M tokens**, independently listed by BenchLM.

## Normalized scores (1–100)

- **Tool use: 89/100.** Terminal-Bench 87.4%, BrowseComp 87.5%, and broad hosted tools support strong agentic work; OSWorld 2.0 at 50.2% prevents a higher score.
- **Reasoning: 91/100.** ARC-AGI-1/2 and GPQA are frontier-level, while the independent composite and task variance show that performance is not uniform.
- **Context window: 98/100.** The 1.05M-token window, 922K maximum input, and 128K output are unusually large; no independent full-window retrieval curve was verified.
- **Multimodal: 89/100.** Image input and MMMU-Pro results are verified; audio/video input and non-text output are not supported.
- **Coding: 92/100.** SWE-bench 95.4%, LiveCodeBench 85.9%, and strong Cursor/Vulcan/AA coding rows support excellent engineering capability, with benchmark harnesses still varying.
- **Cost efficiency: 92/100.** Current $2/$12 pricing and low cached-input rate are highly competitive for a 1M-context model, though long prompts are surcharged.
- **Overall Score: 91.8/100.** Mean of the five quality dimensions `(89 + 91 + 98 + 89 + 92) / 5 = 91.8`; best fit is general API work requiring long context, coding, and balanced cost.

---

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-11-02
- Method: current OpenAI model/pricing documentation, GPT-5.6 evaluation tables, and BenchLM's October 29 aggregation of Vals, ARC Prize, Artificial Analysis, Cursor, and other public rows; scores are normalized interpretations rather than official vendor scores.
- Reference URLs:
  - [OpenAI GPT-5.6 Terra model documentation](https://developers.openai.com/api/docs/models/gpt-5.6-terra)
  - [OpenAI GPT-5.6 announcement](https://openai.com/index/gpt-5-6)
  - [OpenAI API pricing](https://developers.openai.com/api/docs/pricing)
  - [BenchLM GPT-5.6 Terra profile](https://benchlm.ai/models/gpt-5-6-terra)
