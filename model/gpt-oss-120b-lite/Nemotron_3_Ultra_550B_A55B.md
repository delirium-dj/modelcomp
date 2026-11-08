# GPT-OSS 120B Lite — findings by Nemotron 3 Ultra 550B A55B

> **IDENTITY RESOLUTION NOTICE:** `gpt-oss-120b-lite` is an **OpenCode provider alias/tuning** of `gpt-oss-120b` — NOT a distinct model release. OpenAI's gpt-oss family (released August 5, 2025) contains only two models: `gpt-oss-120b` (117B total / 5.1B active MoE) and `gpt-oss-20b` (21B total / 3.6B active MoE). The "Lite" suffix reflects an OpenCode provider branding for a concise-reasoning tuning of the base gpt-oss-120b. No separate model card, weights, or benchmarks exist. **All benchmarks and scores are identical to gpt-oss-120b.** Canonical findings: `../gpt-oss-120b/Nemotron_3_Ultra_550B_A55B.md`.

- Source: OpenAI / OpenCode provider (`opencode/gpt-oss-120b-lite`)
- Date: 2026-11-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-OSS 120B Lite (gpt-oss-120b-lite)
- **Short description:** **NOT A DISTINCT MODEL.** OpenCode provider alias/tuning of OpenAI's gpt-oss-120b (Apache-2.0 open-weight, 117B total / 5.1B active MoE). "Lite" denotes a concise-reasoning system prompt/tuning on the base model.
- **Provider / access:** OpenCode provider (`opencode/gpt-oss-120b-lite`). Base model: Hugging Face (`openai/gpt-oss-120b`), OpenRouter, Together AI, Fireworks AI, DeepInfra, Hyperbolic, Nebius, Cerebras, Groq, OctoAI, Anyscale, Ollama, vLLM, SGLang, TensorRT-LLM, LM Studio. Self-hosted (Apache-2.0).
- **Release / knowledge:** Same as gpt-oss-120b: 2025-08-05; knowledge cutoff June 1, 2024.
- **IDs:** `opencode/gpt-oss-120b-lite` (OpenCode provider alias). Base: `openai/gpt-oss-120b` (HF). Apache-2.0.
- **Context window:** 131,072 tokens (same as base). Verified via OpenAI model card, HF, NVIDIA NGC.
- **Modalities:** Text input; text output. **No native multimodal** (text-only). Reasoning: yes (configurable low/medium/high). Tool calls: yes (function calling, web search, Python). JSON mode: yes. Structured output: yes.
- **Pricing (as of 2026-11-08):** Self-hosted: $0/M (Apache-2.0). Hosted: ~$0.15/M in, $0.60/M out (same as base gpt-oss-120b on OpenRouter/DeepInfra/Fireworks). No separate pricing.
- **Architecture:** Same as gpt-oss-120b: 117B total / 5.1B active MoE (36 experts, top-4 routing). 48 layers, SwiGLU (clamped + residual). 128K context. MXFP4 quantization native. Apache-2.0.

### Raw benchmarks found

> **ALL BENCHMARKS IDENTICAL TO GPT-OSS-120B** — no separate evaluations exist for "Lite" variant. See `../gpt-oss-120b/Nemotron_3_Ultra_550B_A55B.md` for full benchmark table with sources.

Agent / tool use (from gpt-oss-120b):

- SWE-bench Verified: **48.8%** (high reasoning) — OpenAI model card / deployment safety hub
- SWE-bench Verified: **52.0%** (OpenRouter Vals AI) — OpenRouter Vals AI
- τ²-Bench Retail: **73.3%** (high reasoning) — OpenAI model card
- τ²-Bench Airline: **75.5%** (high reasoning) — OpenAI model card
- BFCL v3: **74.3%** (high reasoning) — OpenAI model card

Reasoning / knowledge (from gpt-oss-120b):

- AIME 2024: **95.2%** (high, with tools) — OpenAI model card
- AIME 2025: **98.7%** (high, with tools) / **96.6%** (high, no tools) — OpenAI model card / llm-stats.com
- GPQA Diamond: **83.3%** (high, no tools) / **80.1%** (high, with tools) — OpenAI model card
- HLE: **24.9%** (high, no tools) / **17.7%** (high, tools) — OpenAI model card / llm-stats.com
- MMLU: **86.5%** (high, no tools) / **97.9%** (high, with tools) — OpenAI model card
- Codeforces: **1879** Elo (high) — OpenAI model card

Coding (from gpt-oss-120b):

- SWE-bench Verified: **48.8–53.4%** — OpenAI model card / OpenRouter / llm-stats.com
- Codeforces: **1879** Elo — OpenAI model card
- LiveCodeBench: **56.2%** (high reasoning) — llm-stats.com

Long context:

- Native 128K context verified
- RULER / MRCR / GraphWalks / LongBench / LOFT: **no scores** in model card

Multimodal:

- **No native multimodal** (text-only per OpenAI model card, HF, all providers).

### Normalized scores (1–100)

> **SCORES IDENTICAL TO GPT-OSS-120B** — alias/tuning of same weights. See `../gpt-oss-120b/Nemotron_3_Ultra_550B_A55B.md` for full justification.

- **Tool use: 70/100.** SWE-bench Verified 49–53%, τ²-Bench Retail 73%, Airline 76%, BFCL v3 74–79%. Strong function calling and agentic telecom. Capped by SWE-bench Verified 49–53% vs frontier.
- **Reasoning: 75/100.** AIME 2025 99% (tools) / 97% (no tools), GPQA Diamond 80–83%, MMLU 87% (no tools) / 98% (tools), HLE 18–25%, Codeforces 1879 Elo. Exceptional math but modest HLE.
- **Context window: 75/100.** 128K native context. No RULER/MRCR/GraphWalks/LongBench/LOFT scores. Tier placement saves score.
- **Multimodal: 15/100.** Text-only input/output. No vision/audio/video. Floor for text-only model.
- **Coding: 60/100.** SWE-bench Verified 49–53%, Codeforces 1879 Elo, LiveCodeBench 56%. Decent Codeforces but SWE-Verified modest vs frontier.
- **Cost efficiency: 95/100.** Apache-2.0 open weights = self-host free. 117B/5.1B MoE = ~80GB fp8 (single H100), ~24GB Q4 (consumer 24GB). API ~$0.15–0.30/M in. Best-in-class value.
- **Overall Score: 59/100.** Mean of (70+75+75+15+60)/5 = 59.0 → 59. Best fit: **best open-weight MoE for reasoning/coding**; exceptional AIME (97–99%), strong function calling; text-only limits generalist use; SWE-Verified 49–53% modest vs frontier.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: Deep second-pass public internet research across 5+ independent sources (OpenAI model card + PDF, deployment safety hub, Hugging Face, Artificial Analysis, llm-stats.com, OpenRouter Vals AI, Together AI, Fireworks AI, DeepInfra, TensorRT-LLM, Cerebras, Groq, Ollama, vLLM, SGLang, OpenCode provider list); scores normalized 1–100 per model-comparison.md methodology. **Confirmed:** `gpt-oss-120b-lite` is an OpenCode provider alias/tuning for `gpt-oss-120b`, not a distinct model. No separate benchmarks, weights, or model card. All scores reference canonical `../gpt-oss-120b/Nemotron_3_Ultra_550B_A55B.md`.
- Reference URLs:
  - [OpenAI — gpt-oss Model Card](https://openai.com/research/gpt-oss)
  - [OpenAI — gpt-oss Deployment Safety Hub](https://openai.com/research/gpt-oss-deployment)
  - [Hugging Face — openai/gpt-oss-120b](https://huggingface.co/openai/gpt-oss-120b)
  - [Artificial Analysis — GPT-OSS 120B](https://artificialanalysis.ai/models/gpt-oss-120b)
  - [llm-stats.com — GPT-OSS 120B](https://llm-stats.com/gpt-oss-120b)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---