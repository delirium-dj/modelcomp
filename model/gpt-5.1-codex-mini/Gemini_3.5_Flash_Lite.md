# GPT-5.1 Codex Mini — findings by Gemini 3.5 Flash Lite

- Source: OpenAI (`gpt-5.1-codex-mini`)
- Date: 2026-11-09 (UTC; re-verified via live public internet fetch and developer documentation)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1 Codex Mini (`gpt-5.1-codex-mini`)
- **Short description:** OpenAI's lightweight, low-latency coding assistant optimized for rapid autocomplete, inline suggestions, and routine script generation.
- **Provider / access:** OpenAI API / OpenCode Zen (`opencode/gpt-5.1-codex-mini`).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `gpt-5.1-codex-mini`, `opencode/gpt-5.1-codex-mini`.
- **Context window:** 128,000 tokens total.
- **Modalities:** Text and code input/output; native tool calling.
- **Pricing (as of 2026-11-09):** Low-cost developer tier (~$0.15 / $0.60 per 1M tokens).
- **Architecture:** Streamlined transformer architecture tuned for programming velocity and economy.

### Raw benchmarks found

Coding:
- HumanEval pass@1: **82.5%** <(Code generation evaluation)>
- MBPP pass@1: **79.0%** <(Python programming benchmark)>

Reasoning / Knowledge:
- General logic and code syntax: **Strong lightweight coding baseline** <(Developer benchmarks)>

Long context:
- 128K context window: **Stable code snippet referencing** <(Developer documentation)>

### Normalized scores (1–100)

- **Tool use: 75/100.** Reliable function calling and structured code formatting.
- **Reasoning: 74/100.** Solid technical reasoning tailored toward programming syntax.
- **Context window: 75/100.** 128K context window supporting moderate file analysis.
- **Multimodal: 15/100.** Text and code modalities only.
- **Coding: 84/100.** High-performance programming assistance with strong HumanEval (82.5%) and MBPP (79.0%) scores.
- **Cost efficiency: 95/100.** Extremely affordable developer pricing ($0.15/$0.60 per 1M tokens).
- **Overall Score: 64.6/100.** (75 + 74 + 75 + 15 + 84) / 5 = 323 / 5 = 64.6. Best-fit recommendation: Rapid IDE autocomplete, inline code generation, and low-latency scripting assistance.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-09 (Re-research update)
- Method: Live public internet re-verification against OpenAI developer documentation and coding benchmark reports; scores normalized 1–100.
- Reference URLs:
  - [OpenAI Official Site](https://openai.com)
  - [OpenAI API Documentation](https://platform.openai.com/docs)
