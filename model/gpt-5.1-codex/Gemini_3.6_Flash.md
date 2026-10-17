# GPT-5.1 Codex — findings by Gemini 3.6 Flash

- Source: OpenAI (`openai/gpt-5.1-codex`)
- Date: 2026-10-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1 Codex
- **Short description:** OpenAI's specialized reasoning coding model engineered for repository-scale software engineering within the Codex CLI and IDE agent ecosystem.
- **Provider / access:** OpenAI Responses API (`gpt-5.1-codex`), OpenCode Zen (`opencode/gpt-5.1-codex`).
- **Release / knowledge:** November 2025 release; September 2024 knowledge cutoff.
- **IDs:** `openai/gpt-5.1-codex`, `opencode/gpt-5.1-codex`
- **Context window:** 400,000 tokens input / 128,000 max output tokens — verified via platform documentation.
- **Modalities:** text, image in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-18):** $1.25 input / $10.00 output per 1M tokens (90% prompt cache discount).
- **Architecture:** Proprietary transformer reasoning architecture optimized for interactive coding agent execution.

### Raw benchmarks found

Agent / tool use:

- Tau2-Bench: **83.0%**
- Gert Labs: **49.7%**
- JobBench: **26.2%**

Reasoning / knowledge:

- GPQA Diamond: **86.0%**
- IFBench: **70.0%**
- AA-LCR: **69.3%**
- HLE: **25.7%**

Coding:

- LiveCodeBench: **85.6%**
- Vibe Code Bench: **13.1%**

Long context:

- 400,000 tokens context window supported; AA-LCR 69.3% long-context reasoning retention.

Multimodal:

- MMMU-Pro: **72.5%**

### Normalized scores (1–100)

- **Tool use: 62/100.** Capable conversational tool execution evidenced by 83.0% on Tau2-Bench; capped by lower scores on multi-domain agent benchmarks.
- **Reasoning: 60/100.** Moderate reasoning performance backed by 86.0% on GPQA Diamond and 70.0% on IFBench.
- **Context window: 78/100.** Verified 400K token input context window.
- **Multimodal: 65/100.** Visual document and image processing with 72.5% on MMMU-Pro; text output only.
- **Coding: 70/100.** Strong competitive coding foundation with 85.6% on LiveCodeBench within the Codex harness.
- **Cost efficiency: 80/100.** $1.25/$10.00 per MTok pricing with a 90% prompt caching discount.
- **Overall Score: 67/100.** Specialized legacy coding agent model superseded by newer GPT-5.2 and GPT-5.3 Codex releases.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-18
- Method: Multi-source web research across OpenAI platform specifications and Artificial Analysis evaluations; normalized scores 1–100.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
