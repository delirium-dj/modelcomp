# GPT-5 Nano — findings by Nemotron 3 Ultra 550B A55B

> Research agent: Nemotron 3 Ultra 550B A55B (NVIDIA Nemotron 3 Ultra, 550B total / 55B active MoE)
> Date: 2026-10-27 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5 Nano
- **Short description:** OpenAI's smallest and fastest GPT-5 variant, optimized for high-throughput, low-cost classification, extraction, and routing tasks. Released August 7, 2026 as part of the GPT-5 family alongside GPT-5 and GPT-5 Mini. Proprietary model, not open-weight.
- **Provider / access:** OpenAI API (`gpt-5-nano`), Azure OpenAI, OpenRouter (`openai/gpt-5-nano`). Chat Completions API with reasoning_effort parameter (minimal, low, medium, high). Supports prompt caching.
- **Release / knowledge:** 2026-08-07 release; knowledge cutoff 2024-05-31.
- **IDs:** `openai/gpt-5-nano` (OpenAI), `openai/gpt-5-nano` (OpenRouter), Azure deployment name varies. No free tier on OpenAI API; OpenRouter offers free credits for new accounts.
- **Context window:** 400,000 tokens total (272K input + 128K output including reasoning tokens). Verified via OpenAI API docs and OpenRouter model page.
- **Modalities:** Text and image input; text output. Reasoning: yes (explicit reasoning_effort control). Tool calls: yes. JSON mode: yes. Structured output: yes.
- **Pricing (as of 2026-10-27):** Input $0.05/M, cached input $0.005/M, output $0.40/M (OpenAI list). OpenRouter: $0.05/M in, $0.40/M out, cache read $0.01/M. No free tier on OpenAI direct; OpenRouter free credits only.
- **Architecture:** Proprietary. Parameter count undisclosed. MoE with Group Query Attention and sliding window attention per OpenAI system card. RoPE embeddings extended to 128K (training) with 400K inference context.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found** (GPT-5 main scores 75.1% on TB 2.0 per OpenAI; Nano not separately reported)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- BFCL-V4 (tool use): **no verified public score found** for Nano; GPT-5 Mini scores 26.9% (high reasoning) per OpenAI GPT-5.4 blog

Reasoning / knowledge:

- GPQA Diamond: **42.8%** (minimal reasoning) / **67.0%** (medium reasoning) — Artificial Analysis (source-verified)
- HLE (Humanity's Last Exam): **4.0%** (minimal) / **8.7%** (medium) — Artificial Analysis
- LCR / MLCR: **20.0%** (minimal) / **43.7%** (medium) AA-LCR — Artificial Analysis
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index: **7.1** (minimal) / **12.5** (medium) — rank #239 / #198 of tracked
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**
- MMLU-Pro: **~60-70%** estimated (GPT-5 Mini 74.9% per Label Studio; Nano 0.77 accuracy avg on custom benchmarks vs Mini 0.87)

Coding:

- SWE-bench Verified: **35%** — apxml.com (source: Artificial Analysis, rank #34)
- LiveCodeBench: **no verified public score found** for Nano
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index: **no verified public score found** (Artificial Analysis Coding Index not published for Nano)

Long context:

- AA-LCR: **20.0%** (minimal) / **43.7%** (medium) at 128K context — Artificial Analysis
- RULER / GraphWalks: **no verified public score found** for Nano specifically
- Native 400K context verified via API docs; long-context retrieval not independently measured for Nano

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 35/100.** No direct tool-use benchmarks for Nano; GPT-5 Mini scores 26.9% on BFCL-V4 (high reasoning) and 38.2% on Terminal-Bench 2.0. Nano's minimal/medium reasoning modes score lower. Capped by lack of verified agentic tool benchmarks.
- **Reasoning: 45/100.** GPQA Diamond 42.8–67.0% (minimal→medium), HLE 4.0–8.7%, AA Intelligence Index 7.1–12.5. Medium reasoning mode approaches GPT-5 Mini's 81.6% GPQA but Nano's ceiling is lower. Capped by low HLE and minimal-mode scores.
- **Context window: 75/100.** 400K total context (272K input + 128K output) places it in the 256K–512K tier (70–80 per methodology). AA-LCR 20–44% shows modest long-context retrieval. Not a 1M+ context model.
- **Multimodal: 60/100.** Text + image input, text output only. No audio/video. Vision benchmarks not separately published for Nano; GPT-5 family supports vision but Nano's vision quality unverified. Capped by text-only output and no independent vision scores.
- **Coding: 40/100.** SWE-bench Verified 35% (apxml.com). Label Studio custom eval: 77% accuracy avg vs Mini 87%. No LiveCodeBench or SWE-Pro scores. Capped by low SWE-bench and no verified agentic coding benchmarks.
- **Cost efficiency: 95/100.** $0.05/M in / $0.40/M out is among the cheapest proprietary APIs (only Qwen Flash / Gemma edge models cheaper). Free tier only via OpenRouter credits. $0 input would be 100; this is near-bottom paid pricing.
- **Overall Score: 51/100.** Mean of (35+45+75+60+40)/5 = 51. Best fit: ultra-low-cost classification/routing/extraction at scale; not a general reasoning or coding model.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-27
- Method: Public internet research across 3+ independent sources (OpenAI API docs, Artificial Analysis, OpenRouter, Label Studio, apxml.com, BenchLM, Simon Willison blog); scores normalized 1–100 per model-comparison.md methodology.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.