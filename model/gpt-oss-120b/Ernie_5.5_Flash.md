# GPT-OSS 120B — findings by Ernie 5.5 Flash

- Source: OpenAI/GPT-OSS 120B (`gpt-oss-120b`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-OSS 120B
- **Short description:** OpenAI's open-weight GPT reasoning model (released 2025-08-05) for self-hosted agents and controllable deployments — 117B total / 5.1B active MoE with a 128K window.
- **Provider / access:** Self-hosted (Hugging Face `openai/gpt-oss-120b`, Apache 2.0), Azure/Vertex MaaS, OpenRouter, plus ~62 routes.
- **Release / knowledge:** 2025-08-05; knowledge cutoff 2024-06 (models.dev).
- **IDs:** `gpt-oss-120b`, `openai/gpt-oss-120b`, `openai/gpt-oss-120b-maas`.
- **Context window:** 131,072 tokens; max output 131,072.
- **Modalities:** text in / text out; reasoning (with an effort control) and tool calls; structured output.
- **Pricing (as of 2026-11-11/12):** $0.09 / $0.36 per 1M input/output on hosted routes; free to self-host (Apache 2.0).
- **Architecture:** MoE, 117B total / 5.1B active; Apache 2.0; also released as `gpt-oss-20b`.

### Raw benchmarks found

Agent / tool use:

- CompileBench: **42.2%**; React Native Evals: **71.6%**; Gert Labs: **29.61**
- Terminal-Bench / Toolathlon / OSWorld: no verified public rows published

Reasoning / knowledge:

- MMLU: **90%**; GPQA: **80.1%**; AIME 2025: **92.5%**; AIME 2024: **95.8%**
- HLE: **14.9%** (low); FailureSensorIQ: **50.5%**

Coding:

- SWE-bench Verified: **62.4%**
- LiveCodeBench / DeepSWE: no verified public rows published

Long context:

- 128K context; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 62/100.** CompileBench 42.2% is mid/low and Gert Labs 29.61 is weak; no terminal/OSWorld row was published.
- **Reasoning: 78/100.** AIME 2025 92.5%, MMLU 90% and GPQA 80.1% are strong for an open 120B, HLE 14.9% is the cap.
- **Context window: 65/100.** 131,072 tokens.
- **Multimodal: 15/100.** Text-only.
- **Coding: 65/100.** SWE-bench Verified 62.4% is mid — well below the 2026 open-weight frontier.
- **Cost efficiency: 95/100.** $0.09/$0.36 per 1M with Apache-2.0 weights.
- **Overall Score: 57.0/100.** Best fit for self-hosted math/reasoning and private deployments; obsolete as a coding agent.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-12
- Method: public internet research (OpenAI gpt-oss model card, BenchLM profile, models.dev); normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [openai/gpt-oss-120b — Hugging Face](https://huggingface.co/openai/gpt-oss-120b)
  - [GPT-OSS 120B benchmarks — BenchLM](https://benchlm.ai/models/gpt-oss-120b)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add `GPT_OSS_120B_v2.md` next to this file.