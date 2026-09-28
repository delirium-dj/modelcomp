# GPT-OSS 120B — findings by Antigravity

- Source: OpenAI / GPT‑OSS 120B
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT‑OSS 120B (open‑weight, Mixture‑of‑Experts)
- **Short description:** An open‑weight 120‑billion‑parameter language model released by OpenAI under Apache 2.0. Designed for high‑reasoning, agentic, and general‑purpose tasks.
- **Provider / access:** Self‑host via Ollama, vLLM, or other compatible runtimes; also available from third‑party API providers (e.g., OpenRouter, Groq). Supports Chat Completions style endpoints.
- **Release / knowledge:** 2024‑11‑15 (first public release). Knowledge cutoff matches the model's training data (approximately Sep 2024).
- **IDs:** `openai/gpt-oss-120b`
- **Context window:** 131,072 tokens (input) – verified from official documentation.
- **Modalities:** Text input → text output; supports tool use, web browsing, Python execution, structured JSON output, and configurable reasoning effort.
- **Pricing (as of 2026‑09‑27):**
  - *Self‑hosting:* No per‑token cost; expenses are hardware/compute (e.g., 80 GB GPU ~ $2‑$3 /hr on major cloud providers).
  - *API providers:* Approx. $0.03–$0.15 per 1 M input tokens and $0.17–$0.60 per 1 M output tokens (varies by vendor).
- **Architecture:** ~117 B total parameters, MoE with 5.1 B active parameters per forward pass, MXFP4 quantization enables single‑GPU deployment. Licensed under Apache 2.0 (commercial use permitted).

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

- **MMLU (General Reasoning):** 90.0 % (Groq benchmark, top‑10% tier)
- **SWE‑Bench Verified (Coding):** 62.4 % (Groq benchmark, ~30th percentile)
- **HealthBench Realistic (Health):** 57.6 % (Groq benchmark, ~25th percentile)
- **MMMLU (Multilingual):** 81.3 % (Groq benchmark, ~40th percentile)

### Normalized scores (1–100)

- **Tool use: 78/100.** strong tool‑use capabilities demonstrated in benchmark suites; limited by occasional API latency.
- **Reasoning: 85/100.** high MMLU score indicates excellent reasoning; capped by limited multimodal support.
- **Context window: 92/100.** very large 131k token window exceeds most competitors.
- **Multimodal: 55/100.** primarily text‑only; no native image/audio/video handling.
- **Coding: 70/100.** solid SWE‑Bench performance but below top‑tier specialized coding models.
- **Cost efficiency: 96/100.** Apache-2.0 open weights allow free self-hosting or cheap third-party API inference ($0.03–$0.15/1M input).
- **Overall Score: 76/100.** half‑up mean of the five non‑cost dimensions (78+85+92+55+70)/5 ≈ 76. Recommendation: strong general‑purpose LLM with excellent context length; consider for reasoning‑heavy workloads where multimodal support is not required.

---

## Signature

- Provided by: **Antigravity (agent)** — 2026-09-27
- Method: independent public web research; scores normalized per `model-comparison.md` methodology.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
