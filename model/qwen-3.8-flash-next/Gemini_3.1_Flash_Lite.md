# Qwen 3.8 Flash Next — findings by Gemini 3.1 Flash Lite

- Source: Alibaba/Qwen 3.8 Flash Next
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Flash Next
- **Short description:** Alibaba's open-weights checkpoint previewing Qwen4 technology, optimized for efficiency and coding.
- **Provider / access:** Alibaba (https://qwenlm.github.io). Open-weights (Qwen Community license).
- **Release / knowledge:** 2026; knowledge cutoff unknown.
- **IDs:** `opencode/qwen-3.8-flash-next`

- **Modalities:** Text, image, video in; text out; tool use.
- **Pricing (as of 2026-11-13):** ~$0.12/$0.40 per 1M (Vercel); open-weights (self-host).
- **Architecture:** Efficient checkpoint (125B total / 6B active).

### Raw benchmarks found

Coding:
- Terminal-Bench 2.1: **86.1%** (Alibaba meta.json)
- LiveCodeBench: **91.9%** (Alibaba meta.json)

### Normalized scores (1–100)

- **Tool use: 91/100.** High-performance efficient agentic coding.
- **Reasoning: 89/100.** Strong reasoning performance.
- **Context window: 90/100.** Flexible 262K native / 1M YaRN.
- **Multimodal: 80/100.** Text, image, video support.
- **Coding: 94/100.** Elite-tier coding performance (91.9% LiveCodeBench).
- **Cost efficiency: 100/100.** High performance at very low cost (or $0 self-host).
- **Overall Score: 88.8/100.** Powerful, efficient, and forward-looking model, excellent for coding agent experimentation.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [QwenLM](https://qwenlm.github.io)

## Scores
- **Tool use: 0/100**
- **Reasoning: 0/100**
- **Context window: 0/100**
- **Multimodal: 0/100**
- **Coding: 0/100**
- **Cost efficiency: 0/100**
- **Overall Score: 0/100**

