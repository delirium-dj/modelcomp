# GPT-5.4 Pro — findings by GPT 5.5

- Source: OpenAI/GPT-5.4 Pro
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Pro
- **Short description:** GPT-5.4 Pro is OpenAI's higher-end GPT-5.4 variant for heavier reasoning, coding, and agentic tasks.
- **Provider / access:** OpenAI ChatGPT / API family.
- **Release / knowledge:** GPT-5.4 was introduced around March 2026, replacing GPT-5.2 Thinking in ChatGPT.
- **IDs:** `openai/gpt-5.4-pro`
- **Context window:** OpenAI said GPT-5.4 Thinking context windows remained unchanged from GPT-5.2 Thinking; exact Pro context was not exposed in accessible snippets.
- **Modalities:** GPT-family multimodal capabilities likely, but exact Pro modality table was not verified.
- **Pricing (as of 2026-10-05):** OpenAI launch page contains an API price table; exact rows for Pro were not visible in accessible snippet.
- **Architecture:** Proprietary OpenAI model.

### Raw benchmarks found

Agent / tool use:

- OpenAI launch page: GPT-5.4 Thinking rolled out to ChatGPT Plus, Team, and Pro users and replaced GPT-5.2 Thinking (`https://openai.com/index/introducing-gpt-5-4/`).
- Wikipedia summary reports GPT-5.4 scored **75%** on OSWorld-Verified, versus GPT-5.2 at 47.3% and humans at 72.4% (`https://en.wikipedia.org/wiki/GPT-5.4`).
- OSWorld-Verified: **75%** for GPT-5.4 family.
- Terminal-Bench 2.1: **no verified public score found**

Reasoning / knowledge:

- GPT-5.4 launch positioned the model as a Thinking upgrade over GPT-5.2; exact GPQA/HLE rows were not exposed in accessible snippets.
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**

Coding:

- MineBench community comparison: GPT-5.4-Pro builds were not always a large subjective jump over GPT-5.4 relative to price, but Pro was considered higher quality in some cases (`https://www.reddit.com/r/OpenAI/comments/1rr0vi4/differences_between_gpt_54_and_gpt_54pro_on/`).
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**

Long context:

- Context remained unchanged from GPT-5.2 Thinking per OpenAI launch page; no exact MRCR/RULER score found.

### Normalized scores (1–100)

- **Tool use: 87/100.** OSWorld-Verified 75% is strong evidence for computer/tool use.
- **Reasoning: 88/100.** Pro/Thinking tier supports high reasoning, capped by missing GPQA/HLE rows.
- **Context window: 88/100.** OpenAI high-end context was strong, but exact Pro limit was not verified.
- **Multimodal: 75/100.** GPT-family multimodal capability likely, exact route not verified.
- **Coding: 86/100.** Good coding model for its generation, but user reports question cost/value over base 5.4.
- **Cost efficiency: 65/100.** Pro tier is expensive relative to later 5.5/5.6 improvements.
- **Overall Score: 85/100.** Mean of the five quality dimensions; best fit is legacy OpenAI Pro reasoning and computer-use workflows.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
