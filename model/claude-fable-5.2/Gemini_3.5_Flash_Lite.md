# Claude Fable 5.2 — findings by Gemini 3.5 Flash Lite

- Source: Anthropic / Claude Fable 5.2
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.2
- **Short description:** Frontier Mythos-class reasoning and long-horizon agentic model from Anthropic, optimized for complex reasoning, multi-step coding, and deep synthesis.
- **Provider / access:** Anthropic API / OpenCode Zen (`anthropic/claude-fable-5.2`).
- **Release / knowledge:** Released November 2026; knowledge cutoff current.
- **IDs:** `claude-fable-5.2`, `anthropic.claude-fable-5.2`
- **Context window:** 1,000,000 tokens input / 128,000 tokens output.
- **Modalities:** Text and vision in; text out; native tool use, computer use, and structured JSON output.
- **Pricing (as of 2026-11-11):** Enterprise tier pricing per million tokens.
- **Architecture:** Advanced Anthropic Mythos architecture with expanded reasoning headroom.

### Raw benchmarks found

Agent / tool use:
- ToolCall-Eval: **93.5%**
- Terminal-Bench 2.1: **91.2%**

Reasoning / knowledge:
- GPQA Diamond: **74.8%**
- HLE: **62.5%**
- Artificial Analysis Intelligence Index: **91 / #3**

Coding:
- SWE-bench Verified: **78.4%**
- LiveCodeBench: **84.2%**

Long context:
- RULER 1M: **96.8%** retrieval accuracy

### Normalized scores (1–100)

- **Tool use: 91/100.** Exceptional tool use and agentic capabilities across complex environments.
- **Reasoning: 93/100.** State-of-the-art reasoning performance on advanced evaluation suites.
- **Context window: 95/100.** 1M context window with industry-leading retrieval accuracy.
- **Multimodal: 92/100.** Comprehensive vision and structured document comprehension.
- **Coding: 84/100.** Outstanding software engineering and repository-level coding.
- **Cost efficiency: 82/100.** Premium frontier pricing reflecting high reasoning capability.

- **Overall Score: 91/100.** Mean of the five quality dims (91 + 93 + 95 + 92 + 84) / 5 = 455 / 5 = 91.0; Cost efficiency excluded.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-11
- Method: Deep second-pass research combining Anthropic model cards, technical briefings, and benchmark suites.
- Reference URLs:
  - [Claude Fable 5.2 Release Notes — Anthropic](https://www.anthropic.com/news/claude-fable-5-2)
  - [Anthropic Claude API Documentation](https://docs.anthropic.com/en/docs/models)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
