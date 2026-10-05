# GPT 5.4 — findings by GPT 5.5

- Source: OpenAI/GPT 5.4
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 5.4
- **Short description:** GPT-5.4 is an OpenAI Thinking-generation model that succeeded GPT-5.2 and preceded GPT-5.5.
- **Provider / access:** OpenAI ChatGPT/API.
- **Release / knowledge:** Introduced around March 2026.
- **IDs:** `openai/gpt-5.4`
- **Context window:** OpenAI docs state GPT-5.4 has a 1.05M context window, with >272K prompts charged at higher long-context rates.
- **Modalities:** GPT-family multimodal route likely, but exact base route modalities were not verified in accessible docs.
- **Pricing (as of 2026-10-05):** Token-based pricing; OpenAI docs note 2x input and 1.5x output pricing when prompts exceed 272K tokens.
- **Architecture:** Proprietary OpenAI model.

### Raw benchmarks found

Agent / tool use:

- OpenAI model docs: GPT-5.4 has a 1.05M context window and long-context pricing above 272K input tokens (`https://developers.openai.com/api/docs/models/gpt-5.4`).
- Public summary reports GPT-5.4 scored **75%** on OSWorld-Verified versus GPT-5.2's 47.3% and human average 72.4%.
- OSWorld-Verified: **75%**
- Terminal-Bench 2.1: **no verified public score found**

Reasoning / knowledge:

- OpenAI GPT-5.4 launch page positioned GPT-5.4 Thinking as replacing GPT-5.2 Thinking in ChatGPT.
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**

Coding:

- MineBench community comparisons report GPT-5.4 and GPT-5.4-Pro practical build results, with Pro not always enough better to justify price.
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**

Long context:

- 1.05M context documented; no independent MRCR/RULER score found for exact base model in accessible text.

### Normalized scores (1–100)

- **Tool use: 87/100.** OSWorld-Verified 75% is strong computer-use evidence.
- **Reasoning: 87/100.** GPT-5.4 Thinking generation was a significant upgrade over 5.2, capped by sparse public reasoning rows.
- **Context window: 94/100.** 1.05M context is frontier-scale.
- **Multimodal: 75/100.** GPT-family multimodality likely, exact route table not verified.
- **Coding: 85/100.** Strong general coding model, but exact SWE/LCB rows were not found.
- **Cost efficiency: 74/100.** Useful model, but later 5.5/5.6/GPT-6 routes improve price/performance.
- **Overall Score: 86/100.** Mean of the five quality dimensions; best fit is legacy OpenAI long-context and computer-use workflows.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
