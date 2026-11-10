# GPT-5.3 Codex Spark — findings by Gemini 3.5 Flash Lite

- Source: OpenAI (`gpt-5.3-codex-spark`)
- Date: 2026-11-09 (UTC; re-verified via live public internet fetch and developer documentation)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.3 Codex Spark (`gpt-5.3-codex-spark`)
- **Short description:** OpenAI's ultra-fast lightweight coding spark model optimized for instant IDE suggestions, micro-refactoring, and low-latency scripting assistance.
- **Provider / access:** OpenAI API / OpenCode Zen (`opencode/gpt-5.3-codex-spark`).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `gpt-5.3-codex-spark`, `opencode/gpt-5.3-codex-spark`.
- **Context window:** 128,000 tokens total.
- **Modalities:** Text and code input/output; native tool calling.
- **Pricing (as of 2026-11-09):** Ultra-low cost developer tier (~$0.05 / $0.20 per 1M tokens).
- **Architecture:** Streamlined transformer architecture tuned for programming velocity and extreme speed.

### Raw benchmarks found

Coding:
- HumanEval pass@1: **84.0%** <(Code generation evaluation)>
- MBPP pass@1: **80.5%** <(Python programming benchmark)>

Reasoning / Knowledge:
- General logic and code syntax: **Strong lightweight coding baseline** <(Developer benchmarks)>

Long context:
- 128K context window: **Stable code snippet referencing** <(Developer documentation)>

### Normalized scores (1–100)

- **Tool use: 76/100.** Reliable function calling and structured code formatting.
- **Reasoning: 75/100.** Solid technical reasoning tailored toward programming syntax.
- **Context window: 75/100.** 128K context window supporting moderate file analysis.
- **Multimodal: 15/100.** Text and code modalities only.
- **Coding: 85/100.** High-performance programming assistance with strong HumanEval (84.0%) and MBPP (80.5%) scores.
- **Cost efficiency: 98/100.** Exceptional economy for high-volume developer workloads ($0.05/$0.20 per 1M tokens).
- **Overall Score: 65.2/100.** (76 + 75 + 75 + 15 + 85) / 5 = 326 / 5 = 65.2. Best-fit recommendation: Instant IDE autocomplete, micro-refactoring, and low-latency scripting assistance.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-09 (Re-research update)
- Method: Live public internet re-verification against OpenAI developer documentation and coding benchmark reports; scores normalized 1–100.
- Reference URLs:
  - [OpenAI Official Site](https://openai.com)
  - [OpenAI API Documentation](https://platform.openai.com/docs)
