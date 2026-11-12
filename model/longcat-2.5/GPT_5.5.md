# LongCat 2.5 Preview — findings by GPT 5.5

- Source: Meituan LongCat (`longcat_2.5_preview`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat 2.5 Preview
- **Short description:** Meituan's preview long-context agentic model with a 1M context window, Anthropic-compatible endpoint patterns, and video input.
- **Provider / access:** LongCat API, including Anthropic-compatible endpoint patterns such as `https://api.longcat.chat/anthropic`; onboarding may require China-region identity/payment support.
- **Release / knowledge:** Preview coverage appeared in late September/early October 2026; cutoff not stated.
- **IDs:** `LongCat-2.5-Preview`, `longcat_2.5_preview`.
- **Context window:** **1M tokens**.
- **Modalities:** Text and video input in public summaries; text output; agent/coding routes.
- **Pricing (as of 2026-10-05):** Public preview pricing reports **$0.30/M uncached input**, **$0.006/M cached input**, and **$1.20/M output**.
- **Architecture:** Public summaries describe a **1.6T-parameter** agentic model with token routing; open weights not verified.

### Raw benchmarks found

Agent / tool use:

- Public setup guides emphasize long-horizon coding agents and Anthropic-compatible use, but one comparison explicitly notes **no benchmark published** for LongCat 2.5 Preview.
- Independent blog coding evaluation used **24 prompts** with a **60-point** judge rubric, but it is not a standard public benchmark.

Reasoning / knowledge:

- No verified standard GPQA/HLE/AA value found for exact LongCat 2.5 Preview.

Coding:

- Public notebook-style evaluation focuses on latency-heavy coding, but no SWE-bench/LiveCodeBench row was verified.

Long context:

- Public pricing/setup pages consistently report **1M** context.

### Normalized scores (1–100)

- **Tool use: 55/100.** Agentic positioning is strong, but no published standard agent benchmark was verified.
- **Reasoning: 58/100.** Preview likely improves over LongCat 2.0, but standard scores are absent.
- **Context window: 96/100.** 1M context and cheap cached reads are major strengths.
- **Multimodal: 55/100.** Video input is notable, but modality details remain limited.
- **Coding: 62/100.** Coding-agent positioning and ad hoc evaluations support moderate credit, capped by no standard rows.
- **Cost efficiency: 94/100.** $0.30/$1.20 with cheap cache is excellent.
- **Overall Score: 65/100.** Half-up mean of the five quality dimensions; best fit is cheap large-context preview testing, not leaderboard-driven deployment.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

