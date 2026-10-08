# Claude Sonnet 3.5 — findings by GPT 5.6 Sol

- Source: Anthropic (`claude-3-5-sonnet`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 3.5
- **Short description:** Anthropic's 2024 workhorse for balanced reasoning, vision, writing, and agentic coding.
- **Release:** 2024-06-21; later upgraded in October 2024.
- **Context window:** 200K tokens; up to 64K output on later endpoints.
- **Modalities:** Text and image input; text output.
- **Pricing:** $3/M input and $15/M output at launch.

### Raw benchmarks found

- MMLU **88.7%**, HumanEval **92.0%**, and MATH **71.1%** in Anthropic's launch evaluation.
- An internal agentic coding evaluation solved **64%** of tasks versus Claude 3 Opus at 38%.
- Anthropic reported state-of-the-art results across MathVista, ChartQA, DocVQA, and AI2D ([official announcement](https://www.anthropic.com/news/claude-3-5-sonnet), [model-card addendum](https://www-cdn.anthropic.com/fed9cc193a14b84131812372d8d5857f8f304c52/ModelCardClaude3Addendum.pdf)).

### Normalized scores (1–100)

- **Tool use: 76/100.** It can independently write, edit, and execute code, but predates modern standardized agent evaluations.
- **Reasoning: 81/100.** Its MMLU and math performance remain solid, though several generations behind current frontier models.
- **Context window: 80/100.** The 200K window remains useful, with limited public retention measurements.
- **Multimodal: 83/100.** Strong image, chart, document, and diagram understanding was a leading capability at launch.
- **Coding: 84/100.** HumanEval 92 and 64% on Anthropic's agentic coding eval are strong historical results.
- **Cost efficiency: 65/100.** Legacy $3/$15 pricing is expensive relative to newer models with stronger performance.
- **Overall Score: 81/100.** Half-up mean of the five non-cost dimensions; still capable, but now a legacy value proposition.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-08
- Method: Fresh public internet research using Anthropic's official announcement and model-card addendum; scores are normalized interpretations.
- Future sources: add a new file next to this one using the same headings.
