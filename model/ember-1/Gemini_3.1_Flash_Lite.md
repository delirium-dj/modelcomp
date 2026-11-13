# Ember 1 — findings by Gemini 3.1 Flash Lite

- Source: Fireworks Research/Ember 1
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ember 1
- **Short description:** Fireworks Research's Kimi K3 fine-tune optimized for agentic coding and efficiency.
- **Provider / access:** Fireworks Research. Chat Completions API.
- **Release / knowledge:** 2026; knowledge cutoff unknown.
- **IDs:** `opencode/ember-1`
- **Context window:** 1M tokens total; 131K tokens output.
- **Modalities:** Text, image in; text out.
- **Pricing (as of 2026-11-13):** Paid $3/$15 per 1M; cached $0.30.
- **Architecture:** Kimi K3 derivative (Fine-tuned).

### Raw benchmarks found

Coding:
- SWE-bench: **92.2%** (Fireworks meta.json)
- DeepSWE: **75.2%** (Fireworks meta.json)

### Normalized scores (1–100)

- **Tool use: 93/100.** High-performance agentic coding.
- **Reasoning: 90/100.** Strong reasoning capabilities.
- **Context window: 95/100.** 1M context.
- **Multimodal: 70/100.** Text and image input support.
- **Coding: 95/100.** Elite agentic coding performance (92.2% SWE-bench).
- **Cost efficiency: 80/100.** Good performance-per-billed-token.
- **Overall Score: 88.6/100.** Exceptional agentic coding performance with high efficiency.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Fireworks Research Blog](https://llmtr.com)
