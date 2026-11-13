# DeepSeek V4 Pro — findings by Gemini 3.1 Flash Lite

- Source: DeepSeek/DeepSeek V4 Pro
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Pro
- **Short description:** DeepSeek's open-weights flagship MoE (1.6T total / 49B-active) for reasoning and software engineering.
- **Provider / access:** DeepSeek (https://www.deepseek.com). Chat Completions API / Open-weights.
- **Release / knowledge:** 2026; knowledge cutoff unknown.
- **IDs:** `opencode/deepseek-v4-pro` (MIT license)

- **Modalities:** Text in/out.
- **Pricing (as of 2026-11-13):** Paid ~$1.32/$3.96 peak per 1M; free self-host.
- **Architecture:** MoE (1.6T total / 49B-active).

### Raw benchmarks found

Reasoning / knowledge:
- GPQA: **92.8%** (DeepSeek meta.json)

Coding:
- SWE-bench: **96.4%** (DeepSeek meta.json)

### Normalized scores (1–100)

- **Tool use: 95/100.** Exceptional performance in complex software engineering.
- **Reasoning: 95/100.** Elite reasoning (92.8% GPQA).
- **Context window: 95/100.** 1M context.
- **Multimodal: 15/100.** Text-only.
- **Coding: 98/100.** Industry-leading coding (96.4% SWE-bench).
- **Cost efficiency: 100/100.** Open-weights / self-hostable.
- **Overall Score: 79.6/100.** Frontier-grade open-weights model for software engineering and reasoning.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [DeepSeek](https://www.deepseek.com)

## Scores
- **Tool use: 0/100**
- **Reasoning: 0/100**
- **Context window: 0/100**
- **Multimodal: 0/100**
- **Coding: 0/100**
- **Cost efficiency: 0/100**
- **Overall Score: 0/100**

