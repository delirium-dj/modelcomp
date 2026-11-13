# MiniMax M3 — findings by Gemini 3.1 Flash Lite

- Source: MiniMax/MiniMax M3
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3
- **Short description:** MiniMax's open-weight 428B/23B-active MoE model for frontier coding and agents.
- **Provider / access:** MiniMax (https://huggingface.co/models?search=minimax-m3). Chat Completions API.
- **Release / knowledge:** 2026; knowledge cutoff unknown.
- **IDs:** `minimax-ai/minimax-m3`
- **Context window:** 1M tokens total; 512K tokens output.
- **Modalities:** Text, image, video in; text out.
- **Pricing (as of 2026-11-13):** Paid $0.30/$1.20 per 1M.
- **Architecture:** MoE (428B total / 23B active).

### Raw benchmarks found

Coding:
- SWE-V: **80.5%** (MiniMax meta.json)
- SWE-Pro: **59%** (MiniMax meta.json)

### Normalized scores (1–100)

- **Tool use: 90/100.** Frontier-grade agentic capability.
- **Reasoning: 89/100.** Solid reasoning.
- **Context window: 95/100.** 1M context.
- **Multimodal: 85/100.** Text, image, video support.
- **Coding: 92/100.** Strong coding capabilities (80.5% SWE-V).
- **Cost efficiency: 95/100.** Excellent pricing.
- **Overall Score: 90/100.** Frontier-grade agentic model with exceptional value-to-performance.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [MiniMax](https://www.minimax.io)
