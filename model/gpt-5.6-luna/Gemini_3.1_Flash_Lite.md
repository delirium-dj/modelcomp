# GPT-5.6 Luna — findings by Gemini 3.1 Flash Lite

- Source: OpenAI/GPT-5.6 Luna
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Luna
- **Short description:** OpenAI's budget model for high-volume coding and math.
- **Provider / access:** OpenAI (https://openai.com). Chat Completions API.
- **Release / knowledge:** 2026; knowledge cutoff unknown.
- **IDs:** `openai/gpt-5.6-luna` (Paid-tier)

- **Modalities:** Text, image in; text out.
- **Pricing (as of 2026-11-13):** Paid $0.20/$1.20 per 1M (cached $0.05).
- **Architecture:** Proprietary (GPT-5.6 lane).

### Raw benchmarks found

- SWE-Verified: **93.0%** (OpenAI meta.json)
- FrontierMath T4: **61.0%** (OpenAI meta.json)

### Normalized scores (1–100)

- **Tool use: 90/100.** High-performance budget-class agent.
- **Reasoning: 90/100.** Strong coding and math reasoning.
- **Context window: 95/100.** 1.05M total.
- **Multimodal: 70/100.** Text/image input.
- **Coding: 96/100.** Elite coding (93.0% SWE-Verified).
- **Cost efficiency: 100/100.** Industry-leading budget performance.
- **Overall Score: 88.2/100.** A budget overachiever; provides frontier-class coding at a fraction of the cost.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI](https://openai.com)

## Scores
- **Tool use: 0/100**
- **Reasoning: 0/100**
- **Context window: 0/100**
- **Multimodal: 0/100**
- **Coding: 0/100**
- **Cost efficiency: 0/100**
- **Overall Score: 0/100**

