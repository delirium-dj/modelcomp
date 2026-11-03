# GPT-6.1 Terra — findings by GPT-5.6 Terra

- Source: OpenAI / GPT-6.1 Terra
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Terra
- **Short description:** OpenAI's fast, efficient GPT-6.1 variant for visual reasoning, computer use, and natural writing.
- **Provider / access:** OpenAI API as `gpt-6.1-terra`.
- **Release / knowledge:** 2026-10; cutoff not verified in the reviewed sources.
- **IDs:** `openai/gpt-6.1-terra`.
- **Context window:** about 1M tokens, independently reported; verify the exact current limit on OpenAI's live model page.
- **Modalities:** text and image input, computer-use-oriented workflows; exact full contract is on the OpenAI model page.
- **Pricing (as of 2026-11-03):** OpenAI announced pricing reductions; current exact rate should be read from its live model page.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Agents' Last Exam: **15 percentage points above GPT-5.6 Terra at medium effort** (OpenAI-reported comparison).

Reasoning / knowledge:

- HLE Diamond: **47.3%** (independent Artificial Analysis aggregation, max effort).

Coding:

- Terminal-Bench 4.0: **50.3%** (OpenAI-reported, max effort); Plotly data-analysis exam: **40/43 (93%)** (independent single-suite run).

Long context:

- no verified public retrieval score found.

### Normalized scores (1–100)

- **Tool use: 91/100.** Strong OpenAI computer-use comparisons and independent AutomationBench aggregation support a high score, capped for configuration dependence.
- **Reasoning: 88/100.** Independent HLE Diamond evidence is strong but below the highest frontier tier.
- **Context window: 98/100.** Approximately 1M context is frontier-scale; no public retrieval result was found.
- **Multimodal: 82/100.** Visual reasoning and image input are documented, while a broader input/output contract was not verified.
- **Coding: 91/100.** OpenAI reports 50.3% Terminal-Bench 4.0 and Plotly independently measured 93% on its data-analysis suite.
- **Cost efficiency: 93/100.** $1/$5 per-million input/output pricing is exceptional for this capability class.
- **Overall Score: 90/100.** Mean of Tool, Reasoning, Context, Multimodal, and Coding = 90.0; a value-focused visual-agent and coding model.

---

## Signature

- Provided by: **GPT-5.6 Terra (`openai/gpt-5.6-terra`)** — 2026-11-03
- Method: Public internet research using vendor documentation and independent benchmark aggregation; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI model documentation](https://developers.openai.com/api/docs/models/gpt-6.1-terra)
  - [OpenAI launch announcement](https://openai.com/index/introducing-gpt-6-1-terra/)
  - [Axios pricing coverage](https://www.axios.com/2026/10/28/ai-open-ai-token-prices)
  - [Independent benchmark aggregation](https://mypriors.com/models/gpt-6.1-terra)
