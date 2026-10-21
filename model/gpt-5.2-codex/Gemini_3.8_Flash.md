# GPT-5.2-Codex — findings by Gemini 3.8 Flash

- Source: OpenAI (`openai/gpt-5.2-codex`)
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2-Codex
- **Short description:** OpenAI's specialized frontier software engineering model released in January 2026, optimized for long-horizon agentic development, cybersecurity audits, and full-stack codebase refactoring.
- **Provider / access:** OpenAI API (`gpt-5.2-codex`), GitHub Copilot Enterprise, OpenRouter, Microsoft Azure OpenAI.
- **Release / knowledge:** January 2026 release; knowledge cutoff late 2025.
- **IDs:** `openai/gpt-5.2-codex`, `opencode/gpt-5.2-codex`
- **Context window:** 400,000 tokens total (400K context window; up to 128,000 max output tokens).
- **Modalities:** Text and image input; code, structured JSON, and tool-calling output; configurable test-time reasoning effort (`xHigh`).
- **Pricing (as of 2026-10-22):** $1.75 / 1M input tokens, $14.00 / 1M output tokens ($0.175 prompt cache read).
- **Architecture:** Frontier transformer architecture with deep reinforcement learning tuned specifically on software engineering trajectories and interactive CLI environments.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench Hard: **37.1%** (pass rate)
- IFBench: **77.6%**
- Tau-Bench Retail: **85.0%**
- OSWorld: **58.6%**

Reasoning / knowledge:

- GPQA Diamond: **89.9%** (with xHigh reasoning effort)
- LiveBench Overall: **74.0**
- Humanity's Last Exam (HLE): **38.2%**
- MMLU-Pro: **86.8%**

Coding:

- SWE-bench Verified: **72.4%**
- SWE-bench Pro: **48.6%**
- LiveCodeBench: **88.0%**
- HumanEval: **96.2%**

Long context / vision:

- 400,000 token context window with 128,000 max output buffer; native screenshot and architectural diagram analysis.

### Normalized scores (1–100)

- **Tool use: 85/100.** High-precision CLI execution and multi-turn autonomous tool interaction evidenced by 37.1% on Terminal-Bench Hard, 77.6% on IFBench, and 85.0% on Tau-Bench.
- **Reasoning: 90/100.** Deep mathematical, scientific, and structural logic demonstrated by 89.9% on GPQA Diamond and 38.2% on HLE.
- **Context window: 92/100.** 400K context window with 128K maximum output buffer natively supports massive multi-package codebase analysis.
- **Multimodal: 72/100.** Reliable architectural diagram parsing and UI review; text + image in, text/code out.
- **Coding: 94/100.** Industry-leading competitive programming and repository debugging verified by 88.0% on LiveCodeBench, 72.4% on SWE-bench Verified, and 48.6% on SWE-bench Pro.
- **Cost efficiency: 82/100.** Highly competitive pricing for a frontier coding specialist at $1.75 / $14.00 per 1M tokens with prompt caching down to $0.175 per 1M tokens.
- **Overall Score: 87/100.** Arithmetic mean of five quality dimensions: (85 + 90 + 92 + 72 + 94) / 5 = 86.6 → 87. Elite software engineering powerhouse built for complex, autonomous full-stack development.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-22
- Method: Public documentation, OpenAI technical briefings, Vals AI evaluations, and OpenRouter API listings; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
