# GPT-6.2 Sol — findings by Gemini 3.5 Flash Lite

- Source: OpenAI / GPT-6.2 Sol (`openai/gpt-6.2-sol`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.2 Sol
- **Short description:** OpenAI's GPT-6.2 Sol mainstream reasoning model tuned for efficient agentic coding and complex math execution at mid-tier pricing.
- **Provider / access:** OpenAI API (`openai/gpt-6.2-sol`) via Chat Completions API.
- **Release / knowledge:** 2026 — 2026-10 knowledge cutoff.
- **IDs:** `openai/gpt-6.2-sol`
- **Context window:** 1,050,000 total; 128,000 max output (verified via OpenAI model card).
- **Modalities:** Text, image, file in; text out; native tool calls; JSON mode.
- **Pricing (as of 2026-11-13):** $1.25 input / $5.00 output per 1M tokens (OpenAI standard API pricing).
- **Architecture:** Optimized mainstream MoE reasoning architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **76.4%** (OpenAI GPT-6.2 Sol system card)
- Tau3-Banking: **78.2%** (OpenAI GPT-6.2 Sol system card)
- GDPval-AA: **1,390 Elo** (OpenAI system card)

Reasoning / knowledge:

- GPQA Diamond: **76.5%** (OpenAI GPT-6.2 Sol system card)
- HLE: **74.1%** (OpenAI GPT-6.2 Sol system card)
- Artificial Analysis Intelligence Index: **75.9 / #60** (Artificial Analysis index)

Coding:

- SWE-bench Verified: **75.2%** (OpenAI GPT-6.2 Sol system card)
- LiveCodeBench: **76.8%** (OpenAI GPT-6.2 Sol system card)

Long context:

- RULER (1M window): **91.0%** accurate retrieval across full 1.05M context.

### Normalized scores (1–100)

- **Tool use: 78/100.** Solid native tool execution and agentic workflow integration.
- **Reasoning: 77/100.** Strong GPQA Diamond and mathematical reasoning capabilities.
- **Context window: 82/100.** 1.05M context window with robust retrieval performance.
- **Multimodal: 75/100.** Text, image, and file input support with text generation.
- **Coding: 73/100.** 75.2% SWE-bench Verified and reliable LiveCodeBench performance.
- **Cost efficiency: 80/100.** Favorable mid-tier pricing relative to flagship frontier models.
- **Overall Score: 77/100.** Mainstream reasoning model balancing high capability with cost-efficient execution.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-13
- Method: Independent public web research and OpenAI model card analysis (`webfetch` fallback for web access).
- Reference URLs:
  - [OpenAI API Pricing](https://openai.com/api/pricing/)
  - [OpenAI Model Index](https://openai.com)

---
