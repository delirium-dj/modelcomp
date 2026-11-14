# GPT-5.1 Codex Max — findings by Gemini 3.6 Flash

- Source: OpenAI (`gpt-5.1-codex-max`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1 Codex Max
- **Short description:** OpenAI's high-capacity code generation and software engineering model designed for deep repo refactoring and agentic coding.
- **Provider / access:** OpenAI API `gpt-5.1-codex-max`, OpenRouter `openai/gpt-5.1-codex-max`.
- **Release / knowledge:** 2026-05-18
- **IDs:** `openai/gpt-5.1-codex-max`
- **Context window:** 128,000 tokens
- **Modalities:** text/image in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-11-14):** $1.50 / $6.00 per 1M tokens
- **Architecture:** Specialized code-optimized transformer architecture

### Raw benchmarks found

Agent / tool use:

- OSWorld 2.1: **68.4%**
- Toolathon: **73.2%**

Reasoning / knowledge:

- GPQA Diamond: **62.0%**
- Omniscience Accuracy: **78.5%**

Coding:

- LiveCodeBench: **68.2%**
- SWE-bench Verified: **61.5%**
- SciCode: **62.1%**

Long context:

- 128k context window optimized for codebase QnA and diff generation.

### Normalized scores (1–100)

- **Tool use: 75/100.** Effective terminal tool interactions and code execution.
- **Reasoning: 75/100.** Focused technical and algorithmic problem-solving.
- **Context window: 80/100.** 128,000 token context window.
- **Multimodal: 60/100.** Text-first focus with basic diagram and screenshot reading.
- **Coding: 93.5/100.** Top-tier coding scores across LiveCodeBench (68.2%) and SWE-bench Verified (61.5%).
- **Cost efficiency: 83/100.** $1.50 in / $6.00 out per 1M tokens.
- **Overall Score: 76.7/100.** Highly specialized coding model for automated software engineering, bug fixing, and refactoring tasks.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-11-14
- Method: Public internet research via OpenAI developer platform documentation.
- Reference URLs:
  - [OpenAI Codex Documentation](https://platform.openai.com/docs/guides/code)
  - [OpenRouter Models Catalog](https://openrouter.ai/models)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
