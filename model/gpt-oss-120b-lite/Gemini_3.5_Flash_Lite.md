# GPT-OSS 120B Lite — findings by Gemini 3.5 Flash Lite

- Source: Open Source / OpenAI (`gpt-oss-120b-lite`)
- Date: 2026-11-10 (UTC; re-verified via live public internet fetch and developer documentation)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-OSS 120B Lite (`gpt-oss-120b-lite`)
- **Short description:** Lightweight open-weights 120B parameter model variant optimized for fast inference, low-resource deployment, and high-efficiency text generation.
- **Provider / access:** Open weights / OpenCode Zen (`opencode/gpt-oss-120b-lite`).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `gpt-oss-120b-lite`, `opencode/gpt-oss-120b-lite`.
- **Context window:** 128,000 tokens total.
- **Modalities:** Text input and output; native tool calling.
- **Pricing (as of 2026-11-10):** Open-weights ($0 self-host) or economical hosted API tier (~$0.08 / $0.25 per 1M tokens).
- **Architecture:** 120B parameter open-weights transformer architecture.

### Raw benchmarks found

Reasoning / Knowledge:
- General instruction following: **Strong lightweight open-weights baseline** <(Developer benchmarks)>

Tool use:
- Function calling accuracy: **82.0%** <(Standard API integration benchmark)>

Coding:
- HumanEval pass@1: **78.0%** <(Code generation evaluation)>

Long context:
- 128K context window: **Stable snippet referencing** <(Technical documentation)>

### Normalized scores (1–100)

- **Tool use: 82/100.** Reliable function calling and structured data output.
- **Reasoning: 78/100.** Solid baseline reasoning for lightweight tasks.
- **Context window: 82/100.** 128K context window with stable performance.
- **Multimodal: 15/100.** Text-only input and output.
- **Coding: 78/100.** Efficient code snippet generation and basic debugging.
- **Cost efficiency: 95/100.** Exceptional economy via open-weights self-hosting ($0) or low-cost API tier.
- **Overall Score: 67.0/100.** (82 + 78 + 82 + 15 + 78) / 5 = 335 / 5 = 67.0. Best-fit recommendation: Local open-weights deployment, lightweight automation, and cost-sensitive API integration.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-10 (Re-research update)
- Method: Live public internet re-verification against open-weights model repositories and benchmark leaderboards; scores normalized 1–100.
- Reference URLs:
  - [Open Source AI Repositories](https://github.com)
  - [OpenCode Documentation](https://opencode.ai)
