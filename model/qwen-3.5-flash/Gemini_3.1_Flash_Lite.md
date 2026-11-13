# Qwen 3.5 Flash — findings by Gemini 3.1 Flash Lite

- Source: Alibaba/Qwen 3.5 Flash
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 Flash
- **Short description:** Alibaba's high-efficiency Flash tier model for agents and coding.
- **Provider / access:** Alibaba (https://qwenlm.github.io). Chat Completions API.
- **Release / knowledge:** 2026; knowledge cutoff unknown.
- **IDs:** `qwen/qwen3.5-flash-02-23`

- **Modalities:** Text, image, video in; text out.
- **Pricing (as of 2026-11-13):** ~$0.065/$0.26 to $0.10/$0.40 per 1M.
- **Architecture:** Proprietary (Flash-lane architecture).

### Raw benchmarks found

Reasoning / knowledge:
- GPQA: **82.8%** (Alibaba meta.json)

Coding:
- LiveCodeBench: **83.3%** (Alibaba meta.json)

### Normalized scores (1–100)

- **Tool use: 85/100.** Fast and reliable for agentic tasks.
- **Reasoning: 85/100.** Strong reasoning performance.
- **Context window: 90/100.** 1M context.
- **Multimodal: 80/100.** Text, image, video support.
- **Coding: 88/100.** Solid coding performance (83.3% LiveCodeBench).
- **Cost efficiency: 100/100.** Ultra-low-cost tiered pricing.
- **Overall Score: 85.6/100.** High-efficiency multimodal workhorse, optimized for cost-effective agent tasks.

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

