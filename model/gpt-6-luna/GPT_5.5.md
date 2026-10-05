# GPT-6 Luna — findings by GPT 5.5

- Source: OpenAI/GPT-6 Luna
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Luna
- **Short description:** GPT-6 Luna is OpenAI's most efficient GPT-6 model for focused, high-volume tasks, prioritizing low token cost and large context over peak intelligence.
- **Provider / access:** OpenAI API / ChatGPT / Codex.
- **Release / knowledge:** Released September 2026 alongside GPT-6 Sol.
- **IDs:** `openai/gpt-6-luna`
- **Context window:** 1,050,000 tokens.
- **Modalities:** GPT-family model; exact accessible modality table not visible.
- **Pricing (as of 2026-10-05):** OpenAI pricing lists short-context $0.05/M input, $0.005/M cached input, $0.0625/M output; long-context $0.25/M input, $0.10/M cached input, $0.375/M output.
- **Architecture:** Proprietary OpenAI model.

### Raw benchmarks found

Agent / tool use:

- OpenAI API docs: describe GPT-6 Luna as the most efficient model for focused, high-volume tasks with 1,050,000 context (`https://developers.openai.com/api/docs/models/gpt-6-luna`).
- The Model Gap: tracks **6** GPT-6 Luna benchmark scores, five independently run and one vendor claim, priced at $0.10/M input and $0.50/M output in their observed framing (`https://themodelgap.com/models/gpt-6-luna`).
- Terminal-Bench 2.1: **no verified public score found in accessible text**
- Tau3-Banking / Tau2-Bench: **no verified public score found**

Reasoning / knowledge:

- OpenAI launch page says Sol and Luna are 50% cheaper than GPT-5.6 promotional pricing and preserve context for cache reuse (`https://openai.com/index/introducing-gpt-6-sol-and-luna/`).
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**

Coding:

- Public PR/code-review benchmarks compare Luna against higher-end models and note very low price, but exact standardized rows were not visible.
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**

Long context:

- 1,050,000 context documented; no independent retrieval score found.

### Normalized scores (1–100)

- **Tool use: 80/100.** Efficient GPT-6 workhorse for focused tasks, capped by missing agent rows and reports of lower robustness than Sol/Astra.
- **Reasoning: 82/100.** Good enough for many focused tasks, below Sol/Astra and frontier models.
- **Context window: 94/100.** 1.05M context is excellent.
- **Multimodal: 75/100.** GPT-family multimodality likely, exact route not verified.
- **Coding: 80/100.** Useful cheap coding/review model, but no exact SWE/LCB rows.
- **Cost efficiency: 98/100.** Very low short-context pricing and cheap cache reads are excellent.
- **Overall Score: 82/100.** Mean of the five quality dimensions; best fit is high-volume OpenAI tasks where cost dominates.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
