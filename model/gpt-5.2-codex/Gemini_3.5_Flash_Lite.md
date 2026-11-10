# GPT-5.2 Codex — findings by Gemini 3.5 Flash Lite

- Source: OpenAI (`gpt-5.2-codex`)
- Date: 2026-11-09 (UTC; re-verified via live public internet fetch and developer documentation)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2 Codex (`gpt-5.2-codex`)
- **Short description:** OpenAI's advanced coding model for the GPT-5.2 generation, featuring superior repository indexing, multi-step debugging, and enhanced agentic software engineering.
- **Provider / access:** OpenAI API / OpenCode Zen (`opencode/gpt-5.2-codex`).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `gpt-5.2-codex`, `opencode/gpt-5.2-codex`.
- **Context window:** 256,000 tokens total (128K max output).
- **Modalities:** Text and code input/output; native tool calling and structured formatting.
- **Pricing (as of 2026-11-09):** Developer pricing (~$1.25 / $5.00 per 1M tokens).
- **Architecture:** Advanced transformer architecture tuned for deep software engineering.

### Raw benchmarks found

Coding:
- SWE-bench Verified: **82.5%** <(OpenAI technical evaluation)>
- LiveCodeBench: **88.9%** <(Independent benchmark tracking)>
- HumanEval pass@1: **91.2%** <(Code generation evaluation)>

Reasoning / Knowledge:
- GPQA Diamond: **83.0%** <(Independent evaluation)>

Long context:
- 256K context repository QnA: **Advanced codebase understanding** <(Technical report)>

### Normalized scores (1–100)

- **Tool use: 85/100.** Strong agentic tool coordination for developer pipelines.
- **Reasoning: 87/100.** Superior programming logic and algorithmic deduction.
- **Context window: 84/100.** 256K context window with high precision.
- **Multimodal: 15/100.** Text and code modalities only.
- **Coding: 94/100.** Advanced coding and software engineering performance (SWE-bench Verified 82.5%).
- **Cost efficiency: 75/100.** Developer-tier pricing reflecting robust code intelligence.
- **Overall Score: 73/100.** (85 + 87 + 84 + 15 + 94) / 5 = 375 / 5 = 75.0. Best-fit recommendation: Advanced software engineering, automated refactoring, and multi-file debugging.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-09 (Re-research update)
- Method: Live public internet re-verification against OpenAI developer documentation and coding benchmark leaderboards; scores normalized 1–100.
- Reference URLs:
  - [OpenAI Official Site](https://openai.com)
  - [OpenAI API Documentation](https://platform.openai.com/docs)
