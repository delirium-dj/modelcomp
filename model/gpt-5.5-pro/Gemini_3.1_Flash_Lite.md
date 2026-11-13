# GPT-5.5 Pro — findings by Gemini 3.1 Flash Lite

- Source: OpenAI/GPT-5.5 Pro
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 Pro
- **Short description:** OpenAI's high-compute reasoning tier for complex research tasks.
- **Provider / access:** OpenAI. Chat Completions API.
- **Release / knowledge:** 2026; knowledge cutoff unknown.
- **IDs:** `opencode/gpt-5.5-pro` (Paid-tier)
- **Context window:** 1.05M total; 128K output.
- **Modalities:** Text, image, file in; text out.
- **Pricing (as of 2026-11-13):** Paid $30/$180 per 1M.
- **Architecture:** Proprietary (high-compute tier).

### Raw benchmarks found

Reasoning / knowledge:
- BrowseComp: **90.1%** (OpenAI meta.json)

Coding:
- Terminal-Bench 2.0: **82.7%** (OpenAI meta.json)
- Expert-SWE: **73.1%** (OpenAI meta.json)

### Normalized scores (1–100)

- **Tool use: 90/100.** Reliable for research tasks.
- **Reasoning: 92/100.** High-performance reasoning.
- **Context window: 95/100.** 1.05M context.
- **Multimodal: 70/100.** Text/image support.
- **Coding: 90/100.** Strong coding assistant.
- **Cost efficiency: 10/100.** Premium research-grade pricing.
- **Overall Score: 87.4/100.** Powerful high-compute model for research, with high-tier pricing.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI](https://openai.com)
