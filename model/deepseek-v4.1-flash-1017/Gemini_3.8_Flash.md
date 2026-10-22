# DeepSeek V4.1 Flash 1017 — findings by Gemini 3.8 Flash

- Source: DeepSeek (`deepseek/deepseek-v4.1-flash-1017`)
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash 1017
- **Short description:** DeepSeek's October 17, 2026 snapshot update to V4.1 Flash, built on Causal Encoder-Decoder (CED) MoE architecture, delivering major leaps in agentic CLI execution, DeepSWE software engineering, and compressed KV caching across 1M context.
- **Provider / access:** DeepSeek API (`deepseek-v4.1-flash-1017`), OpenRouter, SiliconFlow.
- **Release / knowledge:** 2026-10-17 snapshot release; knowledge cutoff Q3 2026.
- **IDs:** `deepseek/deepseek-v4.1-flash-1017`, `opencode/deepseek-v4.1-flash-1017`
- **Context window:** 1,000,000 tokens total (1M context window; up to 64K max output tokens).
- **Modalities:** Native multimodal input (text, images); text, code, structured JSON, and tool-calling output.
- **Pricing (as of 2026-10-22):** ~$0.14 / 1M input tokens, ~$0.45 / 1M output tokens ($0.028 prompt cache read).
- **Architecture:** Sparse Mixture-of-Experts (MoE) with Causal Encoder-Decoder (CED) framework, DeepSeek Sparse Attention, and RL-aligned token brevity.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **42.3%**
- Automation-Bench v1.0.6: **60.5%**
- Agents' Last Exam: **35.4%**
- DeepSWE v1.1: **77.0%**
- Apex Bench v1.1: **72.1%**

Reasoning / knowledge:

- Humanity's Last Exam (HLE): **42.6%** (with tools) / **44.0%** (text-only)
- ZeroBench-main: **51.0%** (with tools)
- ProgramBench: **29.1%**
- GPQA Diamond: **84.0%**

Coding:

- DeepSWE v1.1: **77.0%**
- NL2Repo-Bench: **68.2%**
- SWE-bench Verified: **74.5%**
- LiveCodeBench: **81.4%**

Long context / vision:

- Chartography: **83.0%** (w/ tools)
- BabyVision: **92.5%** (w/ tools)
- 1,000,000 token context window with compressed KV caching and high token throughput.

### Normalized scores (1–100)

- **Tool use: 78/100.** Leading efficiency-tier CLI execution and automation evidenced by 42.3% on Terminal-Bench 4.0, 60.5% on Automation-Bench, and 35.4% on Agents' Last Exam.
- **Reasoning: 82/100.** Strong academic and domain problem-solving demonstrated by 44.0% on HLE (text-only), 51.0% on ZeroBench, and 84.0% on GPQA Diamond.
- **Context window: 95/100.** Full 1M token context capacity supported via CED and sparse attention mechanisms.
- **Multimodal: 78/100.** High chart reasoning and visual comprehension verified by 83.0% on Chartography and 92.5% on BabyVision; text + image in, text out.
- **Coding: 86/100.** Outstanding software engineering and repository synthesis verified by 77.0% on DeepSWE v1.1, 68.2% on NL2Repo-Bench, and 81.4% on LiveCodeBench.
- **Cost efficiency: 98/100.** Exceptional cost-to-performance ratio at ~$0.14 / $0.45 per 1M tokens with prompt caching down to ~$0.028 per 1M tokens.
- **Overall Score: 84/100.** Arithmetic mean of five quality dimensions: (78 + 82 + 95 + 78 + 86) / 5 = 83.8 → 84. Frontier-class agentic coding and automation powerhouse delivering exceptional benchmark density at ultra-low serving cost.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-22
- Method: Public documentation, DeepSeek official technical release benchmarks, Hugging Face leaderboards, and OpenRouter API listings; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
