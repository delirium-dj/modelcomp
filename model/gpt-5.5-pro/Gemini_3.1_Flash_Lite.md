# GPT-5.5 Pro — findings by Gemini 3.1 Flash Lite

- Source: OpenAI/GPT-5.5 Pro
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 Pro
- **Short description:** OpenAI's high-stakes research model featuring extra-compute reasoning for complex queries.
- **Provider / access:** OpenAI (https://openai.com). Chat Completions API.
- **Release / knowledge:** 2026; knowledge cutoff unknown.
- **IDs:** `opencode/gpt-5.5-pro`
- **Context window:** 1.05M total; 128K tokens max output.
- **Modalities:** Text, image, file in; text out.
- **Pricing (as of 2026-11-13):** $30/$180 per 1M. Paid.
- **Architecture:** Proprietary (GPT-5 lane).

### Raw benchmarks found

Reasoning / knowledge:
- BrowseComp: **90.1%** (OpenAI meta.json)

Coding:
- TB 2.0: **82.7%** (OpenAI meta.json)
- Expert-SWE: **73.1%** (OpenAI meta.json)

### Normalized scores (1–100)

- **Tool use: 92/100.** Extremely reliable for high-stakes agentic work.
- **Reasoning: 95/100.** Elite-tier reasoning and research capability.
- **Context window: 95/100.** Massive 1.05M window.
- **Multimodal: 70/100.** Text, image, and file support.
- **Coding: 91/100.** Strong coding abilities (82.7% TB 2.0).
- **Cost efficiency: 20/100.** Extreme pricing; reserved for high-stakes decisions.
- **Overall Score: 88.6/100.** Elite specialist for high-stakes decision-making and research.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI](https://openai.com)
