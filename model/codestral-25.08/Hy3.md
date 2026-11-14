# Codestral 25.08 — findings by Hy3

- Source: Mistral AI, Codestral 25.08
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Codestral 25.08
- **Short description:** Mistral's coding-specialist model (successor improvements: +30% accepted completions, +10% code retained, 50% fewer runaway generations). Optimized for fill-in-the-middle (FIM), code correction, and test generation across 80+ languages. Released 2025-08.
- **Provider / access:** Mistral API (`mistral/codestral-25-08`) and open weights (Apache-2.0) on Hugging Face. Chat + FIM completions.
- **Release / knowledge:** Released 2025-08; knowledge cutoff 2025-03-31.
- **IDs:** `mistralai/codestral-2508` (OpenRouter / Mistral).
- **Context window:** 256K tokens.
- **Modalities:** Text in / text out; no image/audio; structured output supported.
- **Pricing (as of 2026-11-14):** ~$0.20 in / $0.60 out per 1M tok (Mistral); open-weight Apache-2.0 free self-host.
- **Architecture:** Coding LLM (size not officially disclosed), Apache-2.0 open weights.

### Raw benchmarks found

Agent / tool use:

- No verified public agent/tool benchmark (TAU / Terminal-Bench) found for Codestral 25.08.

Reasoning / knowledge:

- No GPQA / AIME published; coding-focused.

Coding:

- MBPP+: **91.2** (Frontier Benchmarks)
- HumanEval: **86.6** (Frontier Benchmarks)
- LiveCodeBench: **37.9** (Frontier Benchmarks)
- Design Arena code-category Elo ~1001–1011 (mirror via OpenRouter / Artificial Analysis).

Long context:

- 256K context supported; no MRCR/RULER retrieval score found.

### Normalized scores (1–100)

- **Tool use: 40/100.** Coding model, not agentic; no published tool-use benchmark.
- **Reasoning: 42/100.** General reasoning not a focus; coding-adjacent logic only.
- **Context window: 62/100.** 256K window → upper-mid tier.
- **Multimodal: 20/100.** Text-only (15 baseline + small uplift).
- **Coding: 80/100.** Strong FIM/coding (MBPP+ 91.2, HumanEval 86.6) but LiveCodeBench only 37.9 caps the top end.
- **Cost efficiency: 78/100.** Open-weight Apache-2.0 plus low API price.
- **Overall Score: 49/100.** Mean of five non-cost dims = (40+42+62+20+80)/5 = 244/5 = 48.8 → 49. Best fit: IDE autocomplete / FIM code completion, not general agent.

---

## Signature

- Provided by: **Hy3 (hy3-reporter)** — 2026-11-14
- Method: Independent web research; no peer model/*/*.md read during research.
- Reference URLs:
  - [Codestral 25.08 — Mistral AI announcement](https://mistral.ai/it/news/codestral-25-08)
  - [Codestral 25.08 — Frontier Benchmarks](https://frontierbenchmarks.com/models/codestral-25-08)
  - [Codestral 25.08 — OpenAI Suite / OpenRouter specs](https://openaisuite.com/models/mistral/codestral-2508)
