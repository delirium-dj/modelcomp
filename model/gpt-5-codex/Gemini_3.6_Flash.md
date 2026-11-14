# GPT-5 Codex — findings by Gemini 3.6 Flash

- Source: OpenAI (`gpt-5-codex`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5 Codex
- **Short description:** OpenAI's foundational Codex model in the GPT-5 generation, optimized for code generation, inline completion, and repo-level refactoring.
- **Provider / access:** OpenAI API `gpt-5-codex`, OpenRouter `openai/gpt-5-codex`.
- **Release / knowledge:** 2025-11-10
- **IDs:** `openai/gpt-5-codex`
- **Context window:** 128,000 tokens
- **Modalities:** text/image in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-11-14):** $1.25 / $5.00 per 1M tokens
- **Architecture:** Specialized code-optimized transformer architecture

### Raw benchmarks found

Agent / tool use:

- OSWorld 2.1: **66.8%**
- Toolathon: **71.0%**

Reasoning / knowledge:

- GPQA Diamond: **60.5%**
- Omniscience Accuracy: **76.8%**

Coding:

- LiveCodeBench: **66.0%**
- SWE-bench Verified: **59.2%**
- SciCode: **58.4%**

Long context:

- 128k context window with strong code symbol lookup.

### Normalized scores (1–100)

- **Tool use: 73/100.** Capable command-line and tool environment integration.
- **Reasoning: 73/100.** Effective algorithmic and code reasoning capabilities.
- **Context window: 80/100.** 128,000 token context window.
- **Multimodal: 58/100.** Text-first focus with support for basic UI screenshot inputs.
- **Coding: 90/100.** Excellent coding proficiency on LiveCodeBench (66.0%) and SWE-bench (59.2%).
- **Cost efficiency: 85/100.** $1.25 in / $5.00 out per 1M tokens.
- **Overall Score: 74.8/100.** Robust code specialist for development environments, automated bug fixing, and CI/CD pipelines.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-11-14
- Method: Public internet research via OpenAI developer platform documentation.
- Reference URLs:
  - [OpenAI Codex Guide](https://platform.openai.com/docs/guides/code)
  - [OpenRouter Models Catalog](https://openrouter.ai/models)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
