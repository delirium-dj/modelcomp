# Laguna XS 2.1 — findings by Ling 3.0 Flash

- Source: Poolside (`poolside/laguna-xs-2.1`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna XS 2.1
- **Short description:** Poolside's open-weight MoE coding model with 33B total parameters, 3B active, designed for agentic coding and long-horizon work on local machines.
- **Provider / access:** HuggingFace (`poolside/Laguna-XS-2.1`), NVIDIA Build, OpenRouter. Text in/text out; reasoning enabled; tool calls.
- **Release / knowledge:** 2026-07-02. Knowledge cutoff not explicitly stated.
- **IDs:** `poolside/Laguna-XS-2.1` (HuggingFace)
- **Context window:** 256,000 tokens total
- **Modalities:** Text in/out only; reasoning enabled; tool calls
- **Pricing (as of 2026-09-23):** Free (open weights, self-hosted)
- **Architecture:** 33B total / 3B active per token, MoE, 256K context, Apache 2.0 license

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

Agent / tool use:
- Terminal-Bench 2.0: **37.5%** (Poolside official)
- SWE-bench Verified: **70.9%** (Poolside official)
- SWE-bench Multilingual: **63.1%** (Poolside official)
- SWE-Bench Pro: **47.6%** (Poolside official)

Reasoning / knowledge:
- No verified public reasoning benchmark scores
- SWE-bench Verified: **70.9%** (Poolside official)
- No GPQA Diamond, HLE, or MMLU scores published

Coding:
- SWE-bench Verified: **70.9%** (Poolside official)
- SWE-bench Multilingual: **63.1%** (Poolside official, up 5.4% from XS.2)
- SWE-Bench Pro: **47.6%** (Poolside official)
- Terminal-Bench 2.0: **37.5%** (Poolside official)
- LiveCodeBench: **not published**

Long context:
- Context window: 256,000 tokens total
- No specific long-context retrieval benchmark published
- 256K context is standard for coding models

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`.
> **OVERALL SCORE FORMULA:** Overall = (Tool + Reasoning + Context + Multimodal + Coding) / 5 (half-up). Cost efficiency is scored independently.

- **Tool use: 55/100.** Moderate agentic performance: Terminal-Bench 2.0 (37.5%), SWE-bench Verified (70.9%), SWE-bench Multilingual (63.1%), SWE-Bench Pro (47.6%). Coding-focused, not general-purpose agentic.
- **Reasoning: 50/100.** No verified public reasoning benchmarks published. SWE-bench scores are the primary available data. Reasoning capability is inferred from coding performance.
- **Context window: 65/100.** 256K context window. No specific long-context retrieval benchmark published. Standard coding model context.
- **Multimodal: 15/100.** Text in/out only. No image, audio, or video input modalities supported.
- **Coding: 75/100.** Excellent coding: SWE-bench Verified 70.9%, SWE-bench Multilingual 63.1%, SWE-Bench Pro 47.6%, Terminal-Bench 2.0 37.5%. Purpose-built for agentic coding.
- **Cost efficiency: 100/100.** $0 (open weights, self-hosted). Apache 2.0 license. Free to download and run. 100/100 cost efficiency.
- **Overall Score: 52/100.** Mean of the five non-cost dimensions (55 + 50 + 65 + 15 + 75) / 5 = 52.0, rounded half-up to 52.

---

## Signature

- Provided by: **Ling 3.0 Flash Fin (inclusionai/ling-3-0-flash-fin-free)** — 2026-09-23
- Method: Public internet research via Poolside official blog, HuggingFace, NVIDIA Build, BenchmarkAtlas, and AI Success Lab; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
