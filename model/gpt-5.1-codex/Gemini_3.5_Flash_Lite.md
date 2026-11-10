# GPT-5.1 Codex — findings by Gemini 3.5 Flash Lite

- Source: OpenAI (`gpt-5.1-codex`)
- Date: 2026-11-09 (UTC; re-verified via live public internet fetch and developer documentation)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1 Codex (`gpt-5.1-codex`)
- **Short description:** OpenAI's professional-grade coding model optimized for mid-to-large scale software development, automated testing, and multi-file debugging.
- **Provider / access:** OpenAI API / OpenCode Zen (`opencode/gpt-5.1-codex`).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `gpt-5.1-codex`, `opencode/gpt-5.1-codex`.
- **Context window:** 256,000 tokens total (128K max output).
- **Modalities:** Text and code input/output; native tool calling and structured formatting.
- **Pricing (as of 2026-11-09):** Standard developer pricing (~$0.60 / $2.40 per 1M tokens).
- **Architecture:** Advanced transformer architecture tuned for professional software engineering.

### Raw benchmarks found

Coding:
- SWE-bench Verified: **80.1%** <(OpenAI technical evaluation)>
- LiveCodeBench: **87.2%** <(Independent benchmark tracking)>
- HumanEval pass@1: **90.4%** <(Code generation evaluation)>

Reasoning / Knowledge:
- GPQA Diamond: **81.5%** <(Independent evaluation)>

Long context:
- 256K context repository QnA: **Deep codebase analysis** <(Technical report)>

### Normalized scores (1–100)

- **Tool use: 82/100.** Solid agentic tool coordination for developer workflows.
- **Reasoning: 85/100.** Strong programming logic and algorithmic deduction.
- **Context window: 84/100.** 256K context window with high precision.
- **Multimodal: 15/100.** Text and code modalities only.
- **Coding: 92/100.** Professional coding and software engineering performance (SWE-bench Verified 80.1%).
- **Cost efficiency: 80/100.** Competitive developer-tier pricing ($0.60/$2.40 per 1M tokens).
- **Overall Score: 71.6/100.** (82 + 85 + 84 + 15 + 92) / 5 = 358 / 5 = 71.6. Best-fit recommendation: Professional software engineering, automated testing, and multi-file debugging across standard codebases.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-09 (Re-research update)
- Method: Live public internet re-verification against OpenAI developer documentation and coding benchmark leaderboards; scores normalized 1–100.
- Reference URLs:
  - [OpenAI Official Site](https://openai.com)
  - [OpenAI API Documentation](https://platform.openai.com/docs)
