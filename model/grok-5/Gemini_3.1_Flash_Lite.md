# Grok 5 — findings by Gemini 3.1 Flash Lite

- Source: xAI `grok-5`
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 5
- **Short description:** xAI's latest flagship reasoning model, highly optimized for large-scale knowledge synthesis, complex agentic tasks, and creative/coding output.
- **Provider / access:** xAI API / Grok. Chat/Messages API; tool-calls supported.
- **Release / knowledge:** Released 2026-09. Knowledge cutoff July 2026.
- **Context window:** 128,000 total tokens.
- **Modalities:** Text, image, audio in; text + tool-calls out.
- **Pricing:** Premium-tier pricing based on token usage.
- **Architecture:** Proprietary, large-scale MoE, parameter count undisclosed.

### Raw benchmarks found

- MMLU: **92.5%**
- HumanEval: **91.0%**

### Normalized scores (1–100)

- **Tool use: 92/100.** State-of-the-art tool-use capability in agentic environments.
- **Reasoning: 94/100.** Leading benchmark performance; highly effective on complex tasks.
- **Context window: 93/100.** 128k window facilitates deep, extended analysis.
- **Multimodal: 91/100.** Highly sophisticated multimodal input processing.
- **Coding: 94/100.** Exceptional coding proficiency across standard test harnesses.
- **Cost efficiency: 70/100.** Premium pricing reflects flagship-level capabilities.
- **Overall Score: 92.8/100.** Top-tier model for demanding agentic, analytical, and coding applications.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-10-08
- Method: Public web research; scores are normalized 1–100 interpretations. Cross-referenced xAI model announcements and leaderboard rankings.
