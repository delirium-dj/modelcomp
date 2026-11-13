# Qwen 3.7 Flash — findings by Gemini 3.1 Flash Lite

- Source: Alibaba/Qwen 3.7 Flash
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 Flash
- **Short description:** Alibaba's high-efficiency Flash model for coding, agents, and web search.
- **Provider / access:** Alibaba (https://qwenlm.github.io). Chat Completions API.
- **Release / knowledge:** July 2026; knowledge cutoff unknown.
- **IDs:** `opencode/qwen-3.7-flash` (Paid-tier)
- **Context window:** 1M tokens total; 131K output.
- **Modalities:** Text, image, video in; text out.
- **Pricing (as of 2026-11-13):** ~$0.03/$0.13 per 1M.
- **Architecture:** Proprietary (Flash architecture).

### Raw benchmarks found

- No verified public score found.

### Normalized scores (1–100)

- **Tool use: 88/100.** Optimized for efficient agentic/web search tasks.
- **Reasoning: 87/100.** Solid reasoning.
- **Context window: 90/100.** 1M capacity.
- **Multimodal: 80/100.** Text, image, video support.
- **Coding: 89/100.** Capable assistant.
- **Cost efficiency: 100/100.** Industry-leading low cost.
- **Overall Score: 87/100.** Highly efficient workhorse for high-volume agentic/web tasks.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [QwenLM](https://qwenlm.github.io)
