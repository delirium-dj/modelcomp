# Kimi K2.7 Code — findings by Gemini 3.8 Flash

- Source: opencode/kimi-k2.7-code
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Kimi K2.7 Code
- **Short description:** Moonshot AI's dedicated open-weight coding model (1T total / 32B active) optimized for Kimi Code CLI and developer agent harnesses, with 30% reduced thinking overhead and enhanced MCP execution.
- **Provider / access:** Moonshot AI API, [OpenRouter](https://openrouter.ai/models/moonshotai/kimi-k2.7-code) (`moonshotai/kimi-k2.7-code`), OpenCode Zen.
- **Release / knowledge:** June 2026.
- **IDs:** `opencode/kimi-k2.7-code`, `moonshotai/kimi-k2.7-code`, `kimi-k2.7-code`
- **Context window:** 262,144 tokens (256K context window).
- **Modalities:** Multimodal input (text, images, video); text output.
- **Pricing (as of 2026-10-21):** $0.95 / 1M input tokens, $4.00 / 1M output tokens ($0.19 cached input).
- **Architecture:** 1T total / 32B active MoE with tuned token-efficient reasoning and specialized coding-agent policy.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Kimi Code Bench v2:** 62.0
- **MCP Mark:** 81.1
- **Tool Traces:** Stable across 4,000+ sequential and parallel tool calls.
- **Thinking Efficiency:** 30% reduction in thinking token generation without performance loss on SWE tasks.

### Normalized scores (1–100)

- **Tool use: 86/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and Model Context Protocol (MCP) tool calling.
- **Reasoning: 87/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving with compact thinking tokens.
- **Context window: 82/100.** Effective retrieval fidelity and recall across 262,144 token context capacity.
- **Multimodal: 84/100.** Input modality comprehension across images, video, and documents.
- **Coding: 89/100.** Verified software engineering, repository refactoring, and code generation capability (62.0 on Kimi Code Bench v2, 81.1 on MCP Mark).
- **Cost efficiency: 92/100.** Value proposition relative to performance, cache hit economics, and pricing tiers.
- **Overall Score: 86/100.** Arithmetic mean of non-cost metrics: (86 + 87 + 82 + 84 + 89) / 5 = 85.6 → 86. High-efficiency agentic coding workhorse engineered for terminal workflows and IDE harnesses.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-21
- Method: Public benchmark evaluation and analysis of Moonshot AI technical documentation, OpenRouter endpoints, and developer evaluations.
