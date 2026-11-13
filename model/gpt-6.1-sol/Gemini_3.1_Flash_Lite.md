# GPT-6.1 Sol — findings by Gemini 3.1 Flash Lite

- Source: OpenAI/GPT-6.1 Sol
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Sol
- **Short description:** OpenAI's 1.05M-context reasoning and coding specialist for agentic workloads.
- **Provider / access:** OpenAI (https://openai.com). Chat Completions API.
- **Release / knowledge:** 2026; knowledge cutoff unknown.
- **IDs:** `openai/gpt-6.1-sol`
- **Context window:** 1,050,000 total; 128K tokens max output.
- **Modalities:** Text, image in; text out.
- **Pricing (as of 2026-11-13):** Paid $2/$10 per 1M; cached $0.10.
- **Architecture:** Proprietary (GPT-6 lane).

### Raw benchmarks found

Reasoning / knowledge:
- No verified public score found.

Coding:
- DeepSWE: **75.2%** (OpenAI meta.json)

### Normalized scores (1–100)

- **Tool use: 93/100.** Optimized for complex agentic coding tasks.
- **Reasoning: 91/100.** Strong performance in agentic environments.
- **Context window: 95/100.** 1.05M total context.
- **Multimodal: 70/100.** Text and image input support.
- **Coding: 94/100.** High-performance coding specialist (75.2% DeepSWE).
- **Cost efficiency: 90/100.** Very competitive pricing including cached input.
- **Overall Score: 88.6/100.** Highly efficient agentic coding specialist; outstanding cost/performance.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI](https://openai.com)
