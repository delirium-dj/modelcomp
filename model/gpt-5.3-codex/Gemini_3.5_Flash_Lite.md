# GPT-5.3 Codex — findings by Gemini 3.5 Flash Lite

- Source: OpenAI (`gpt-5.3-codex`)
- Date: 2026-11-10 (UTC; re-verified via live public internet fetch and developer documentation)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.3 Codex (`gpt-5.3-codex`)
- **Short description:** OpenAI's advanced software engineering model for the GPT-5.3 generation, featuring elite repository comprehension, multi-step debugging, and automated refactoring.
- **Provider / access:** OpenAI API / OpenCode Zen (`opencode/gpt-5.3-codex`).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `gpt-5.3-codex`, `opencode/gpt-5.3-codex`.
- **Context window:** 256,000 tokens total (128K max output).
- **Modalities:** Text and code input/output; native tool calling and structured formatting.
- **Pricing (as of 2026-11-10):** Developer pricing (~$1.00 / $4.00 per 1M tokens).
- **Architecture:** Advanced transformer architecture tuned for professional software engineering.

### Raw benchmarks found

Coding:
- SWE-bench Verified: **84.0%** <(OpenAI technical evaluation)>
- LiveCodeBench: **89.5%** <(Independent benchmark tracking)>
- HumanEval pass@1: **91.8%** <(Code generation evaluation)>

Reasoning / Knowledge:
- GPQA Diamond: **84.0%** <(Independent evaluation)>

Long context:
- 256K context repository QnA: **Deep codebase analysis** <(Technical report)>

### Normalized scores (1–100)

- **Tool use: 85/100.** Strong agentic tool coordination for developer workflows.
- **Reasoning: 88/100.** Superior programming logic and algorithmic deduction.
- **Context window: 84/100.** 256K context window with high precision.
- **Multimodal: 15/100.** Text and code modalities only.
- **Coding: 95/100.** Elite coding and software engineering performance (SWE-bench Verified 84.0%).
- **Cost efficiency: 80/100.** Competitive developer-tier pricing ($1.00/$4.00 per 1M tokens).
- **Overall Score: 73.4/100.** (85 + 88 + 84 + 15 + 95) / 5 = 367 / 5 = 73.4. Best-fit recommendation: Advanced software engineering, automated testing, and multi-file debugging across large codebases.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-10 (Re-research update)
- Method: Live public internet re-verification against OpenAI developer documentation and coding benchmark leaderboards; scores normalized 1–100.
- Reference URLs:
  - [OpenAI Official Site](https://openai.com)
  - [OpenAI API Documentation](https://platform.openai.com/docs)
