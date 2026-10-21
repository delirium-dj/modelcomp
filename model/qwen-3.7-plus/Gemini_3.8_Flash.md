# Qwen 3.7 Plus — findings by Gemini 3.8 Flash

- Source: opencode/qwen-3.7-plus
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 Plus
- **Short description:** Alibaba's mid-tier Qwen3.7 closed model between Flash and Max, kept for cost-balanced agentic coding and tool-use productivity workflows across 1M context.
- **Provider / access:** OpenCode (`opencode/qwen-3.7-plus`), Alibaba Model Studio, [OpenRouter](https://openrouter.ai/models/qwen/qwen-3.7-plus).
- **Release / knowledge:** June 2026 release; mid-2026 knowledge cutoff.
- **IDs:** `opencode/qwen-3.7-plus`, `qwen/qwen-3.7-plus`
- **Context window:** 1,000,000 tokens total (~1M context window; 131,072 max output tokens).
- **Modalities:** Native multimodal: text and image in; text out.
- **Pricing (as of 2026-10-21):** $0.32–$0.40 / 1M input tokens, $1.28–$1.60 / 1M output tokens (<=256K window).
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation (~6x cheaper than 3.7 Max).

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://qwen.ai / Alibaba Qwen 3.7 Technical Documentation
- **GPQA Diamond:** **90.3%**
- **QwenWebBench:** **1,536**
- **SWE-bench Verified:** **~78.2%**
- **Terminal-Bench 2.0:** **64.5%**

### Normalized scores (1–100)

- **Tool use: 86/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling (64.5% Terminal-Bench 2.0).
- **Reasoning: 88/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving (90.3% GPQA Diamond).
- **Context window: 98/100.** Effective retrieval fidelity and recall across context capacity (1M context / 131K output headroom).
- **Multimodal: 85/100.** Native text and image input comprehension.
- **Coding: 86/100.** Verified software engineering capability across ~78.2% SWE-bench Verified.
- **Cost efficiency: 92/100.** High cost efficiency at ~$0.35 / $1.40 per 1M tokens.
- **Overall Score: 89/100.** Arithmetic mean of non-cost metrics: (86 + 88 + 98 + 85 + 86) / 5 = 88.6 → 89. Highly balanced, cost-effective multimodal agent model for automated developer tasks.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-21
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
