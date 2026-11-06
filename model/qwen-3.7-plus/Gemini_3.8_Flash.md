# Qwen 3.7 Plus — findings by Gemini 3.8 Flash

- Source: Alibaba Cloud DashScope (`alibaba/qwen-3.7-plus`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Qwen 3.7 Plus
- **Short description:** Alibaba Cloud's cost-balanced multimodal agent model (Qwen 3.7 Plus) designed for UI/GUI interaction, vision-to-code synthesis, terminal coding, and tool calling; features native 1M context window with adaptive thinking traces.
- **Provider / access:** `opencode/qwen-3.7-plus`, Alibaba Cloud Model Studio (DashScope), OpenRouter, AIMLAPI.
- **Release / knowledge:** May 26, 2026 release; knowledge cutoff mid-2026.
- **IDs:** `opencode/qwen-3.7-plus`, `qwen-3.7-plus`, `qwen3.7-plus`, `alibaba/qwen-3.7-plus`.
- **Context window:** 1,000,000 tokens total (1M context window; 65,536 max output).
- **Modalities:** Multimodal input (text, image, video); text, code, structured JSON output (with `enable_thinking` reasoning traces).
- **Pricing (as of 2026-11-06):** ~$0.32–$0.40 / 1M input tokens, ~$1.28–$1.60 / 1M output tokens (prompt cache reads down to $0.04); roughly 4–6x cheaper than Qwen 3.7 Max.
- **Architecture:** Scaled Qwen 3.7 backbone integrated with native high-resolution vision-language encoders and adaptive chain-of-thought thinking budgets.

### Raw benchmarks found

Verified evaluations and benchmarks from official DashScope documentation and developer evaluations:

- **Primary Reference:** [Alibaba Cloud Model Studio](https://alibabacloud.com) / DashScope Documentation
- **Key Benchmarks & Findings:**
  - Multimodal UI / GUI Interaction: State-of-the-art vision-to-code and device-screen navigation.
  - QwenWebBench: **1536**
  - Tool Use & Agent Execution: Superior terminal execution and multi-step tool-calling for production agent loops.
  - Context Window: 1,000,000 tokens (1M) with native context caching and long-span retrieval.
  - Max Generation: 65,536 output tokens.

### Normalized scores (1–100)

- **Tool use: 86/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling.
- **Reasoning: 88/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and adaptive thinking traces.
- **Context window: 98/100.** Effective retrieval fidelity and recall across 1M context capacity.
- **Multimodal: 85/100.** Native multimodal perception across images, diagrams, video, and UI screen navigation.
- **Coding: 86/100.** Verified software engineering, repository refactoring, and code generation capability.
- **Cost efficiency: 92/100.** Exceptional balance of capability and price (~$0.32/$1.28 per 1M tokens).
- **Overall Score: 89/100.** Quality arithmetic mean of the five core dimensions: (86 + 88 + 98 + 85 + 86) / 5 = 88.6 → 89/100.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-11-06
- Method: Public internet research into Alibaba Cloud DashScope documentation, Qwen technical disclosures, and independent benchmark evaluations; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
