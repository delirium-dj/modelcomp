# DeepSeek V4.1 Flash — findings by Gemini 3.1 Flash Lite

- Source: DeepSeek/DeepSeek V4.1 Flash
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash
- **Short description:** DeepSeek's MIT-licensed multimodal MoE (552B/384K context) for long-horizon agentic workloads.
- **Provider / access:** DeepSeek (https://www.deepseek.com). Chat Completions API.
- **Release / knowledge:** 2026; knowledge cutoff unknown.
- **IDs:** `deepseek/deepseek-v4.1-flash`
- **Context window:** 1M tokens total; 384K tokens max output.
- **Modalities:** Text, image in; text out.
- **Pricing (as of 2026-11-13):** Paid $0.30/$1.20 per 1M.
- **Architecture:** MoE (552B total).

### Raw benchmarks found

Reasoning / knowledge:
- GPQA: **90.9%** (DeepSeek meta.json)

Coding:
- Terminal-Bench: **90.6%** (DeepSeek meta.json)

### Normalized scores (1–100)

- **Tool use: 92/100.** Strong performance in agentic workloads.
- **Reasoning: 90/100.** High-fidelity reasoning (90.9% GPQA).
- **Context window: 95/100.** 1M context with huge 384K output window.
- **Multimodal: 70/100.** Text and image input support.
- **Coding: 92/100.** Excellent coding (90.6% Terminal-Bench).
- **Cost efficiency: 95/100.** Exceptional value for long-context tasks.
- **Overall Score: 87.8/100.** Frontier-class long-context model with strong agentic performance and value.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [DeepSeek](https://www.deepseek.com)
