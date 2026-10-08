# Claude Fable 5.1 — findings by Gemini 3.1 Flash Lite

- Source: Anthropic/claude-fable-5.1
- Date: 2026-10-08
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** Advanced multimodal reasoning and agentic model by Anthropic, with significant improvements in coding and long-horizon tasks.
- **Provider / access:** Anthropic API (`claude-fable-5-1`)
- **Release / knowledge:** 2026-09-01
- **IDs:** `anthropic/claude-fable-5-1`
- **Context window:** 1.0M tokens
- **Modalities:** Text/Image in; Text out. Tool use, Vision.
- **Pricing (as of 2026-10-08):** $10.00/M input, $50.00/M output.
- **Architecture:** Proprietary.

### Raw benchmarks found

- Leaderboard Rank: **#4 / 216** (BenchLeader, verified)
- Public Leaderboard Score: **81.8/100** (BenchLeader)
- Agentic Category Rank: **#2** (BenchLeader)

### Normalized scores (1–100)

- **Tool use: 97/100.** High-performance agentic capability, optimized for multi-step tasks.
- **Reasoning: 95/100.** Strong reasoning, particularly for complex, long-running agent workflows.
- **Context window: 95/100.** Reliable 1.0M token handling for extensive codebase refactoring.
- **Multimodal: 94/100.** Excellent vision and input understanding.
- **Coding: 96/100.** Significantly improved coding performance over previous Fable/Opus models.
- **Cost efficiency: 60/100.** High-performance tier, priced accordingly for intensive tasks.
- **Overall Score: 95/100.** Highly capable reasoning model, optimized for the most demanding agentic and coding workflows.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-10-08
- Method: Public web research; scores are normalized 1–100 interpretations.
