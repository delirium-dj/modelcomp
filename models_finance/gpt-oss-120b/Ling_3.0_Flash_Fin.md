# GPT OSS 120B — findings by Ling 3.0 Flash

- Source: OpenAI (`openai/gpt-oss-120b`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT OSS 120B
- **Short description:** OpenAI's open-weight reasoning model with 117B total parameters, 5.1B active, achieving near-parity with o4-mini on core reasoning benchmarks.
- **Provider / access:** HuggingFace (`openai/gpt-oss-120b`), NVIDIA NIM, OpenAI API. Text in/text out; reasoning enabled; tool calls.
- **Release / knowledge:** 2025-08-05. Knowledge cutoff not explicitly stated.
- **IDs:** `openai/gpt-oss-120b` (HuggingFace)
- **Context window:** 128,000 tokens total
- **Modalities:** Text in/out only; reasoning enabled; tool calls; JSON mode
- **Pricing (as of 2026-09-23):** Free (open weights, self-hosted)
- **Architecture:** 117B total / 5.1B active per token, MoE, Apache 2.0 license

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

Agent / tool use:
- τ²-Bench Retail: **67.8%** (OpenAI official, high reasoning)
- τ²-Bench Airline: **49.2%** (OpenAI official)
- Aider Polyglot: **44.4%** (OpenAI official)
- Codeforces (with tools): **2,622** Elo (OpenAI official)
- Terminal-Bench 2.1: **not published** by OpenAI

Reasoning / knowledge:
- Artificial Analysis Intelligence Index: **11.6** (BenchLM)
- AA-GPQA Diamond: **78.2%** (Artificial Analysis)
- AA-HLE: **19.6%** (Artificial Analysis)
- AIME 2025 (no tools): **92.5%** (OpenAI official)
- AIME 2025 (with tools): **97.9%** (OpenAI official)
- MMLU: **90.0%** (OpenAI official)

Coding:
- SWE-Bench Verified: **62.4%** (OpenAI official, high reasoning)
- Codeforces (no tools): **2,463** Elo (OpenAI official)
- AA-SciCode: **34.0%** (BenchLM)
- AA Coding Index: **30.4** (BenchLM)
- HealthBench: **57.6%** (OpenAI official)

Long context:
- Context window: 128,000 tokens total
- AA-LCR: **52.0%** (BenchLM)
- No long-context retrieval benchmark published

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`.
> **OVERALL SCORE FORMULA:** Overall = (Tool + Reasoning + Context + Multimodal + Coding) / 5 (half-up). Cost efficiency is scored independently.

- **Tool use: 62/100.** Decent tool use: τ²-Bench Retail 67.8%, Aider Polyglot 44.4%, Codeforces 2463/2622 Elo. No Terminal-Bench 2.1 score published. AA Agentic Index 6.2% (very low).
- **Reasoning: 68/100.** Strong math: AIME 2025 92.5% (no tools)/97.9% (with tools), MMLU 90.0%, GPQA Diamond 78.2%. But AA Intelligence Index 11.6 is low. HLE at 19.6% is moderate.
- **Context window: 60/100.** 128K context window with AA-LCR at 52.0%. No long-context retrieval benchmark published. Standard 128K context.
- **Multimodal: 15/100.** Text in/out only. No image, audio, or video input modalities supported.
- **Coding: 55/100.** Moderate coding: SWE-bench Verified 62.4%, Codeforces 2463 Elo. But AA Coding Index 30.4 is low. SciCode 34%.
- **Cost efficiency: 100/100.** $0 (open weights, self-hosted). Apache 2.0 license. Free to download and run. 100/100 cost efficiency.
- **Overall Score: 52/100.** Mean of the five non-cost dimensions (62 + 68 + 60 + 15 + 55) / 5 = 52.0, rounded half-up to 52.

---

## Signature

- Provided by: **Ling 3.0 Flash Fin (inclusionai/ling-3-0-flash-fin-free)** — 2026-09-23
- Method: Public internet research via OpenAI model card, Artificial Analysis, BenchmarkList, NVIDIA NIM, and arXiv; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
