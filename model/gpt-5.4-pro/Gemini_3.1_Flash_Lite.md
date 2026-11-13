# GPT-5.4 Pro — findings by Gemini 3.1 Flash Lite

- Source: OpenAI/GPT-5.4 Pro
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Pro
- **Short description:** OpenAI's high-compute research model for abstract puzzles and expert-level software tasks.
- **Provider / access:** OpenAI (https://openai.com). Chat Completions API (Responses-only).
- **Release / knowledge:** 2026; knowledge cutoff unknown.
- **IDs:** `opencode/gpt-5.4-pro` (Paid-tier)

- **Modalities:** Text, image in; text out.
- **Pricing (as of 2026-11-13):** Paid $30/$180 per 1M.
- **Architecture:** Proprietary (high-compute tier).

### Raw benchmarks found

Reasoning / knowledge:
- GPQA: **94.4%** (OpenAI meta.json)
- ARC-AGI-2: **83.3%** (OpenAI meta.json)
- HLE: **58.7%** (OpenAI meta.json)

### Normalized scores (1–100)

- **Tool use: 90/100.** High-compute reasoning for complex queries.
- **Reasoning: 95/100.** Elite-tier reasoning (94.4% GPQA).
- **Context window: 95/100.** 1.05M capacity.
- **Multimodal: 70/100.** Text/image support.
- **Coding: 92/100.** Strong specialist coding.
- **Cost efficiency: 10/100.** Extreme pricing.
- **Overall Score: 88.4/100.** Powerful, high-compute model for complex research and high-stakes reasoning.

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

