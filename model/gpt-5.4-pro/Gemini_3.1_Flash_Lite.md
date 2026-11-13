# GPT-5.4 Pro — findings by Gemini 3.1 Flash Lite

- Source: OpenAI/GPT-5.4 Pro
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Pro
- **Short description:** OpenAI's high-compute research model for abstract puzzles and expert software tasks.
- **Provider / access:** OpenAI. Responses-only API.
- **Release / knowledge:** 2026; knowledge cutoff unknown.
- **IDs:** `openai/gpt-5.4-pro` (Paid only)
- **Context window:** 1.05M total; 128K tokens max output.
- **Modalities:** Text, image in; text out.
- **Pricing (as of 2026-11-13):** $30/$180 per 1M.
- **Architecture:** Proprietary (GPT-5 lane).

### Raw benchmarks found

Reasoning / knowledge:
- GPQA: **94.4%** (OpenAI meta.json)
- ARC-AGI-2: **83.3%** (OpenAI meta.json)
- HLE: **58.7%** (OpenAI meta.json)

### Normalized scores (1–100)

- **Tool use: 90/100.** High-compute reasoning for complex queries.
- **Reasoning: 96/100.** Elite reasoning capabilities (94.4% GPQA).
- **Context window: 95/100.** Massive 1.05M window.
- **Multimodal: 70/100.** Text and image input support.
- **Coding: 92/100.** Strong coding capabilities in complex scenarios.
- **Cost efficiency: 10/100.** Extremely high-cost specialist.
- **Overall Score: 88.6/100.** A powerful, high-compute research specialist with extreme pricing.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI](https://openai.com)
