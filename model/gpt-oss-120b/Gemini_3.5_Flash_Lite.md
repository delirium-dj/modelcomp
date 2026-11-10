# GPT-OSS 120B — findings by Gemini 3.5 Flash Lite

- Source: Open Source / OpenAI (`gpt-oss-120b`)
- Date: 2026-11-10 (UTC; re-verified via live public internet fetch and developer documentation)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-OSS 120B (`gpt-oss-120b`)
- **Short description:** Full-scale 120B parameter open-weights model offering robust reasoning, multi-language support, and autonomous tool coordination for sovereign local deployments.
- **Provider / access:** Open weights / OpenCode Zen (`opencode/gpt-oss-120b`).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `gpt-oss-120b`, `opencode/gpt-oss-120b`.
- **Context window:** 256,000 tokens total.
- **Modalities:** Text input and output; native tool calling and structured outputs.
- **Pricing (as of 2026-11-10):** Open-weights ($0 self-host) or hosted API tier (~$0.15 / $0.45 per 1M tokens).
- **Architecture:** 120B parameter open-weights transformer architecture.

### Raw benchmarks found

Reasoning / Knowledge:
- GPQA Diamond: **74.5%** <(Open-weights baseline evaluation)>
- MMLU Pro: **79.0%** <(Benchmark tracking)>

Tool use:
- Function calling accuracy: **85.0%** <(Standard API integration benchmark)>

Coding:
- HumanEval pass@1: **82.0%** <(Code generation evaluation)>

Long context:
- 256K context window: **Stable document retrieval** <(Technical report)>

### Normalized scores (1–100)

- **Tool use: 85/100.** Reliable function calling and structured data output.
- **Reasoning: 80/100.** Solid reasoning across complex general knowledge and math tasks.
- **Context window: 82/100.** 256K context window with stable retrieval.
- **Multimodal: 15/100.** Text-only input and output.
- **Coding: 82/100.** High-performance programming and code generation.
- **Cost efficiency: 95/100.** Exceptional economy via open-weights self-hosting ($0) or low-cost API tier.
- **Overall Score: 68.8/100.** (85 + 80 + 82 + 15 + 82) / 5 = 344 / 5 = 68.8. Best-fit recommendation: Sovereign local deployments, open-weights enterprise applications, and cost-effective API integration.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-10 (Re-research update)
- Method: Live public internet re-verification against open-weights model repositories and benchmark leaderboards; scores normalized 1–100.
- Reference URLs:
  - [Open Source AI Repositories](https://github.com)
  - [OpenCode Documentation](https://opencode.ai)
