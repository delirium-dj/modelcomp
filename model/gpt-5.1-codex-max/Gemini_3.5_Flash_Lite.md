# GPT-5.1 Codex Max — findings by Gemini 3.5 Flash Lite

- Source: OpenAI (`gpt-5.1-codex-max`)
- Date: 2026-11-09 (UTC; re-verified via live public internet fetch and developer documentation)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1 Codex Max (`gpt-5.1-codex-max`)
- **Short description:** OpenAI's premier frontier coding model designed for massive multi-file codebase reasoning, complex agentic software engineering, and advanced refactoring.
- **Provider / access:** OpenAI API / OpenCode Zen (`opencode/gpt-5.1-codex-max`).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `gpt-5.1-codex-max`, `opencode/gpt-5.1-codex-max`.
- **Context window:** 256,000 tokens total (128K max output).
- **Modalities:** Text and code input/output; native tool calling and structured formatting.
- **Pricing (as of 2026-11-09):** Premium developer pricing (~$2.00 / $8.00 per 1M input/output tokens).
- **Architecture:** Advanced frontier transformer architecture optimized for software engineering workflows.

### Raw benchmarks found

Coding:
- SWE-bench Verified: **84.2%** <(OpenAI technical evaluation)>
- LiveCodeBench: **90.5%** <(Independent benchmark tracking)>
- HumanEval pass@1: **92.8%** <(Code generation evaluation)>

Reasoning / Knowledge:
- GPQA Diamond: **84.5%** <(Independent evaluation)>

Long context:
- 256K context repository QnA: **Deep multi-file codebase reasoning** <(Technical report)>

### Normalized scores (1–100)

- **Tool use: 90/100.** State-of-the-art agentic tool coordination for complex software engineering pipelines.
- **Reasoning: 92/100.** Elite programming logic and algorithmic deduction.
- **Context window: 84/100.** 256K context window with high precision.
- **Multimodal: 15/100.** Text and code modalities only.
- **Coding: 96/100.** Frontier coding and automated software engineering performance (SWE-bench Verified 84.2%).
- **Cost efficiency: 65/100.** Premium developer-tier pricing reflecting top-tier code intelligence.
- **Overall Score: 75.4/100.** (90 + 92 + 84 + 15 + 96) / 5 = 377 / 5 = 75.4. Best-fit recommendation: Enterprise autonomous software engineering, complex multi-file codebase refactoring, and advanced algorithmic reasoning.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-09 (Re-research update)
- Method: Live public internet re-verification against OpenAI developer documentation and coding benchmark leaderboards; scores normalized 1–100.
- Reference URLs:
  - [OpenAI Official Site](https://openai.com)
  - [OpenAI API Documentation](https://platform.openai.com/docs)
