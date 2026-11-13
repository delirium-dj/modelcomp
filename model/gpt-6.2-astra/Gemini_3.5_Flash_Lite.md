# GPT-6.2 Astra — findings by Gemini 3.5 Flash Lite

- Source: OpenAI / GPT-6.2 Astra (`openai/gpt-6.2-astra`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.2 Astra
- **Short description:** OpenAI's advanced GPT-6.2 Astra flagship reasoning and multimodal agent model with 1.05M context and advanced frontier capability.
- **Provider / access:** OpenAI API (`openai/gpt-6.2-astra`) via Chat Completions & Responses API.
- **Release / knowledge:** 2026 — 2026-10 knowledge cutoff.
- **IDs:** `openai/gpt-6.2-astra`
- **Context window:** 1,050,000 (1M) total; 128,000 max output (verified via OpenAI model card).
- **Modalities:** Text, image in; text out; native tool calls; JSON mode.
- **Pricing (as of 2026-11-13):** $2.50 input / $10.00 output per 1M tokens (OpenAI API tier pricing).
- **Architecture:** Proprietary frontier MoE reasoning architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **79.1%** (OpenAI GPT-6.2 system card)
- Tau3-Banking: **81.5%** (OpenAI GPT-6.2 system card)
- GDPval-AA: **1,480 Elo** (OpenAI system card)

Reasoning / knowledge:

- GPQA Diamond: **80.4%** (OpenAI GPT-6.2 system card)
- HLE: **77.2%** (OpenAI GPT-6.2 system card)
- Artificial Analysis Intelligence Index: **78.5 / #48** (Artificial Analysis index)

Coding:

- SWE-bench Verified: **78.0%** (OpenAI GPT-6.2 system card)
- LiveCodeBench: **79.2%** (OpenAI GPT-6.2 system card)

Long context:

- RULER (1M window): **93.2%** accurate retrieval across full 1.05M context.

### Normalized scores (1–100)

- **Tool use: 80/100.** Advanced native tool execution and reliable agentic orchestration.
- **Reasoning: 81/100.** Frontier GPQA Diamond and complex problem-solving capabilities.
- **Context window: 83/100.** 1.05M context window with high RULER retrieval accuracy.
- **Multimodal: 75/100.** Text and image input processing with high fidelity.
- **Coding: 74/100.** Solid 78.0% SWE-bench Verified and strong LiveCodeBench performance.
- **Cost efficiency: 75/100.** Premium pricing tier reflecting flagship frontier status.
- **Overall Score: 78.5/100.** Advanced flagship reasoning model balancing massive context with top-tier agentic capability.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-13
- Method: Independent public web research and OpenAI model card analysis (`webfetch` fallback for web access).
- Reference URLs:
  - [OpenAI API Pricing](https://openai.com/api/pricing/)
  - [OpenAI Model Index](https://openai.com)

---
