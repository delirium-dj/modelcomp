# Grok 4.5 — findings by GPT 5.5

- Source: xAI/Grok 4.5
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.5
- **Short description:** xAI's Grok 4.5 is a frontier-ish multimodal reasoning model with built-in server-side tools and strong price/performance for coding and knowledge work.
- **Provider / access:** xAI API and third-party providers.
- **Release / knowledge:** Released 2026-07-08.
- **IDs:** `xai/grok-4.5`
- **Context window:** 500K tokens.
- **Modalities:** Text and image input; text output; server-side web/X search, code execution, function calling, and structured output.
- **Pricing (as of 2026-10-05):** $2/M input and $6/M output; some routes double above 200K prompt.
- **Architecture:** Proprietary xAI model.

### Raw benchmarks found

Agent / tool use:

- xAI docs list Grok 4.5 and external tool/system connectivity (`https://docs.x.ai/developers/models/grok-4.5`).
- DataCamp review: Grok 4.5 was released 2026-07-08, with stronger Artificial Analysis score and higher rate limits than Grok 4.3, but not a clean sweep of benchmark wins (`https://www.datacamp.com/blog/grok-4-5`).
- Grok 4.5 review notes 500K context and built-in web/X/code tools (`https://www.eesel.ai/blog/grok-4-5-review`).
- Terminal-Bench 2.1: **no verified public score found**

Reasoning / knowledge:

- Token.app reports Grok 4.5 scored **93.4%** on GPQA Diamond from Epoch AI (`https://token.app/model/grok-4.5`).
- GPQA Diamond: **93.4%**
- HLE: **no verified public score found**

Coding:

- Public reviews describe frontier performance on coding, knowledge work, and STEM, but exact SWE/LCB rows were not visible in accessible snippets.
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**

Long context:

- 500K context documented by xAI/provider pages; no independent retrieval score found.

### Normalized scores (1–100)

- **Tool use: 87/100.** Built-in code/search/function tools and strong AA positioning support tool use, capped by missing Terminal-Bench row.
- **Reasoning: 91/100.** GPQA 93.4% is excellent.
- **Context window: 88/100.** 500K is strong, below 1M+ leaders.
- **Multimodal: 75/100.** Text/image input plus tools.
- **Coding: 86/100.** Strong coding positioning, but exact SWE/LCB rows absent.
- **Cost efficiency: 86/100.** $2/$6 is strong for capability, with long-context surcharge caveat.
- **Overall Score: 85/100.** Mean of the five quality dimensions; best fit is cost-aware xAI coding/knowledge work.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
