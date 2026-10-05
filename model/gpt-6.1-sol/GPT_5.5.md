# GPT-6.1 Sol — findings by GPT 5.5

- Source: OpenAI/GPT-6.1 Sol
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Sol
- **Short description:** GPT-6.1 Sol is OpenAI's upgraded workhorse Sol model, offering near-Astra capability at lower cost for coding, computer use, and professional workflows.
- **Provider / access:** OpenAI API / ChatGPT / Codex.
- **Release / knowledge:** Announced at OpenAI DevDay on 2026-09-29.
- **IDs:** `openai/gpt-6.1-sol`
- **Context window:** 1,050,000 tokens.
- **Modalities:** GPT-family model; exact modality table was not visible in accessible snippets.
- **Pricing (as of 2026-10-05):** OpenAI pricing lists short-context $2/M input, $0.10/M cached input, $2.50/M output; long-context $10/M input, $4/M cached input, $15/M output.
- **Architecture:** Proprietary OpenAI model.

### Raw benchmarks found

Agent / tool use:

- OpenAI API docs: GPT-6.1 Sol delivers near-Astra performance at lower cost for complex coding, computer use, and professional work, with 1,050,000 context (`https://developers.openai.com/api/docs/models/gpt-6.1-sol`).
- Axios DevDay coverage: OpenAI unveiled GPT-6.1 Sol as an upgraded version of GPT-6 bringing advanced capability down sharply in price (`https://www.axios.com/2026/09/29/openai-dev-day-2026-dots-space-sol`).
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**

Reasoning / knowledge:

- OpenAI docs position it near Astra performance; community reports compare efficiency/quota use but do not expose official GPQA/HLE rows.
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**

Coding:

- OpenAI docs specifically call out complex coding and computer use.
- MindTrial community notes say GPT-6.1 Sol improved with fewer tokens than 5.6 Sol but remains behind Astra in that dataset; exact score rows were not visible.
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**

Long context:

- 1,050,000 context documented; no independent retrieval score found.

### Normalized scores (1–100)

- **Tool use: 91/100.** Near-Astra positioning for computer use and professional work supports very strong tool ability, capped by lack of public rows.
- **Reasoning: 92/100.** Near-Astra claim supports high reasoning, below Astra itself.
- **Context window: 94/100.** 1.05M context is frontier-scale.
- **Multimodal: 80/100.** GPT-family multimodal support likely, exact table not verified.
- **Coding: 91/100.** OpenAI explicitly targets complex coding with this model.
- **Cost efficiency: 86/100.** Short-context pricing and cheaper cache reads are strong, though long-context rates remain high.
- **Overall Score: 90/100.** Mean of the five quality dimensions; best fit is OpenAI-native coding/computer-use work below Astra cost.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
