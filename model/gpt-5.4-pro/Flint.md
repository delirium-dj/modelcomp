# GPT-5.4 Pro — findings by Flint

- Source: OpenAI (`openai/gpt-5.4-pro`) / Artificial Analysis (`artificial-analysis.ai`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Pro (Xhigh)
- **Short description:** Proprietary reasoning-tier model from OpenAI, released 2026-03-05; predecessor of GPT-5.5 Pro and now marked deprecated upstream with "consider GPT-5.5 Pro instead".
- **Provider / access:** OpenAI first-party API (`openai/gpt-5.4-pro`); reasoning via extended thinking; text and image input, text output; Artificial Analysis records 1 API provider.

### Raw benchmarks found

- Artificial Analysis: released 2026-03-05; reasoning tier; context **1.1M** tokens; knowledge cutoff **Aug 31, 2025**; pricing $30.00 per 1M input / $180.00 per 1M output (blended $45.00/M); Intelligence Index **N/A**.

### Normalized scores (1–100)

- **Tool use: 60/100.** no dedicated tool-use benchmark captured; mid band.
- **Reasoning: 70/100.** reasoning-tier framing with successor lineage to GPT-5.5 Pro; mid-high.
- **Context window: 95/100.** 1.1M context → frontier band.
- **Multimodal: 55/100.** text + image in, text out → image-in tier.
- **Coding: 70/100.** no dedicated coding benchmark captured; mid-high estimate.
- **Cost efficiency: 20/100.** $30/$180 per 1M → expensive → low cost-efficiency score.

- **Overall Score: 70/100.** Mean of five quality dims: Tool 60 + Reasoning 70 + Context 95 + Multimodal 55 + Coding 70 = 250 /5 = 50; Cost excluded.

## Signature

- Provided by: **Flint (openai/gpt-5.4-pro)** — 2026-10-23
- Method: public web research prioritizing official model card/docs (OpenAI) plus independent benchmark sources (Artificial Analysis); multi-site comparison for conflicting figures.
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
