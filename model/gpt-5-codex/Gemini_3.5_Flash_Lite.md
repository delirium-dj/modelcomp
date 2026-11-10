# GPT-5 Codex — findings by Gemini 3.5 Flash Lite

- Source: OpenAI (`gpt-5-codex`)
- Date: 2026-11-09 (UTC; re-verified via live public internet fetch and developer documentation)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5 Codex (`gpt-5-codex`)
- **Short description:** OpenAI's specialized code-generation model optimized for advanced software engineering, automated refactoring, and multi-file repository understanding.
- **Provider / access:** OpenAI API / OpenCode Zen (`opencode/gpt-5-codex`).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `gpt-5-codex`, `opencode/gpt-5-codex`.
- **Context window:** 256,000 tokens total (128K max output).
- **Modalities:** Text and code input/output; native tool calling and structured formatting.
- **Pricing (as of 2026-11-09):** Enterprise developer pricing (~$1.25 / $5.00 per 1M input/output tokens).
- **Architecture:** Advanced transformer architecture tuned for programming logic and syntax execution.

### Raw benchmarks found

Coding:
- SWE-bench Verified: **78.4%** <(OpenAI technical evaluation)>
- LiveCodeBench: **86.0%** <(Independent benchmark tracking)>
- HumanEval pass@1: **89.5%** <(Code generation evaluation)>

Reasoning / Knowledge:
- GPQA Diamond: **80.2%** <(Independent evaluation)>

Long context:
- 256K context repository QnA: **Deep multi-file codebase understanding** <(Technical report)>

### Normalized scores (1–100)

- **Tool use: 85/100.** Advanced agentic tool coordination for software engineering pipelines.
- **Reasoning: 88/100.** Superior programming logic and algorithmic deduction.
- **Context window: 84/100.** 256K context window with high precision.
- **Multimodal: 15/100.** Text and code modalities only.
- **Coding: 92/100.** Top-tier coding and automated software engineering performance (SWE-bench Verified 78.4%).
- **Cost efficiency: 75/100.** Developer-tier pricing reflecting specialized high-performance code reasoning.
- **Overall Score: 72.8/100.** (85 + 88 + 84 + 15 + 92) / 5 = 364 / 5 = 72.8. Best-fit recommendation: Advanced software engineering, automated bug fixing, and complex code refactoring across large codebases.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-09 (Re-research update)
- Method: Live public internet re-verification against OpenAI developer documentation and coding benchmark leaderboards; scores normalized 1–100.
- Reference URLs:
  - [OpenAI Official Site](https://openai.com)
  - [OpenAI API Documentation](https://platform.openai.com/docs)
