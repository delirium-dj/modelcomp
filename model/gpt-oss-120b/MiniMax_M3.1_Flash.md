# GPT-OSS 120B — findings by MiniMax M3.1 Flash

- Source: OpenAI (GPT-OSS 120B), `openai/gpt-oss-120b`
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-OSS 120B
- **Short description:** OpenAI's August 2025 Apache-2.0 open-weight MoE — 117B total / 5.1B active, 131,072 context, the mandatory Harmony format, and a model card that publishes SWE-bench Verified 62.4%, AIME 2025 92.5% and GPQA 80.1% at high reasoning — self-hostable on a single 80 GB GPU at $0.15/$0.60 hosted.
- **Provider / access:** Hugging Face `openai/gpt-oss-120b` (Apache 2.0, MXFP4 MoE quantization, 60.8 GiB checkpoint), plus 17 hosted providers (Groq, Together, Cerebras, Fireworks, Baseten, Databricks, Vercel, Cloudflare, OpenRouter, NVIDIA, AMD, Azure…) and local stacks (vLLM, Ollama, llama.cpp, LM Studio). **Not on OpenAI's own API** and **not on OpenCode Zen**.
- **Release / knowledge:** **2025-08-05** (OpenAI launch post; AA and BenchLM agree); model card arXiv 2508.10925. Knowledge cutoff **June 2024** per the model card (AA lists May 31, 2024).
- **IDs:** `openai/gpt-oss-120b` (HF), `openai/gpt-oss-120b` (OpenRouter).
- **Context window:** **131,072** tokens (dense layers extended with YaRN); max output 131,072 on Together, 40,960 on Cerebras.
- **Modalities:** **text only** — no image input (AA: "does not support image input"); Harmony format with `analysis` (CoT) / `commentary` (tool calls) / `final` channels; reasoning effort low/medium/high; tools: browsing, stateful Python, developer functions, structured outputs.
- **Pricing (as of 2026-10-20):** **$0.15/M in, $0.60/M out, $0.075/M cached** (AA median, OpenRouter, Groq, Together); Cerebras $0.35/$0.75. Self-host $0 (Apache 2.0).
- **Architecture:** MoE, 116.83B total / 5.13B active, 36 layers, 128 experts (top-4), GQA group size 8, alternating dense + banded-window attention, MXFP4 quantization.

### Raw benchmarks found

> The model card (arXiv 2508.10925, Table 3) publishes low/medium/high reasoning columns; Artificial Analysis and BenchLM add independent rows.

Coding:

- SWE-bench Verified: **62.4%** (high) / 52.6% (medium) / 47.9% (low) — model card
- Aider Polyglot: **44.4%** (high) / 34.2% / 24.0% · Codeforces Elo: **2463** no tools / **2622** with tools (high)
- LiveCodeBench: **87.83%** (AA) · SciCode: **34.03%** (AA) · SWE-bench Pro / DeepSWE: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **80.1%** (high) / 73.1% (medium) — model card; **78.18%** (AA) · AIME 2025: **92.5%** (high) / **93.44%** (AA) · AIME 2024: **95.8%** (high) — the widely quoted "AIME 92.5%" is the **2025** row, not 2024
- HLE: **14.9%** no tools / **19.0%** with tools (high) / **19.6%** (AA) · MMLU: **90.0%** (high) · MMMLU (14 languages): **81.3%** (high) · CritPt: **1.14%** (AA) · AA-LCR: **52.0%** (AA)
- Artificial Analysis Intelligence Index: **12 (estimated)**, #11/67 · output speed **247.6 tok/s** (#5/28), TTFT 0.83s · Omniscience Accuracy / Hallucination Rate: **21.8% / 90.8%** (AA)
- HealthBench: **57.6%** (high) · SimpleQA accuracy 0.168, hallucination rate 0.782 (model card safety tables)

Agent / tool use:

- Tau-bench: Retail **67.8%**, Airline **49.2%** (high) · Tau2-bench: **65.79%** (AA) · Terminal-Bench 2.1: **26.2%** (AA) · Terminal-Bench Hard: **23.5%** (AA) · APEX-Agents: **3.1%** (AA) · AutomationBench partial: **0.2%** (AA)
- GDPval-AA: **608.65** (AA) · MCP-Atlas / OSWorld / Toolathlon: no verified public score found

Long context:

- No MRCR / RULER measurement published for gpt-oss-120b.

### Normalized scores (1–100)

- **Tool use: 42/100.** τ-bench Retail 67.8% and τ² 65.8% are mid, but Terminal-Bench 2.1 26.2%, APEX-Agents 3.1%, AutomationBench 0.2% and GDPval-AA 609 are low.
- **Reasoning: 60/100.** GPQA 78.2–80.1%, AIME 92.5–95.8%, MMLU 90.0% and MMMLU 81.3% are strong, capped by HLE 14.9–19.6%, LCR 52.0%, CritPt 1.14% and a 90.8% hallucination rate.
- **Context window: 64/100.** 131,072 tokens is the 100K–200K band, with no published retrieval measurement.
- **Multimodal: 15/100.** Text-only by design — OpenAI points multimodal users to its API models.
- **Coding: 72/100.** SWE-bench Verified 62.4%, Aider polyglot 44.4%, Codeforces 2463 and LiveCodeBench 87.8% are good mid-band coding numbers for an open model, with no SWE-bench Pro or DeepSWE row.
- **Cost efficiency: 96/100.** $0.15/M in and $0.60/M out across 17 providers, and Apache 2.0 weights that fit on one 80 GB GPU.
- **Overall Score: 51/100.** Mean of the five quality dims = (42 + 60 + 64 + 15 + 72) / 5 = 50.6 → **51**. Best fit: private, self-hosted reasoning and coding where the Harmony format and a single 80 GB GPU are acceptable — strong on maths and contest code, weak as an agent.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-21
- Method: public internet research (OpenAI launch post, model card arXiv 2508.10925 and Harmony repository, Hugging Face repo, Artificial Analysis, BenchLM, models.dev, OpenRouter API); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_OSS_20B.md`, using the same headings.
