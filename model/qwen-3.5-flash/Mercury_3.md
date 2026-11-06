# Qwen3.5-Flash — findings by Mercury 3

- Source: Qwen / Alibaba (Qwen3.5-Flash)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-Flash
- **Short description:** The hosted API version of the Qwen3.5-35B-A3B hybrid MoE (released 2026-02-24/25) on Alibaba Cloud Model Studio — the cheapest, longest-context member of the Qwen3.5 medium series (1M context, native function calling, built-in tools). Open source under Apache 2.0.
- **Provider / access:** Alibaba Cloud Model Studio API (`qwen3.5-flash`, OpenAI-compatible); weights equivalent to HF `Qwen/Qwen3.5-35B-A3B`.
- **Release / knowledge:** Released 2026-02-24 (digitalapplied) / 2026-02-25 (other sources); knowledge cutoff not published.
- **IDs:** `qwen/qwen3.5-flash` (hosted); open-weight sibling `qwen/qwen3.5-35b-a3b`.
- **Context window:** 1M tokens (hosted Flash; open-weight 35B-A3B native is 262K).
- **Modalities:** text + image + video input; text output; reasoning (thinking on/off); native function calling and structured output; Apache 2.0 weights.
- **Pricing (as of 2026-11):** $0.065–0.10 in / $0.26–0.40 out per 1M (Alibaba Model Studio $0.10/$0.40; BenchGecko lists $0.065/$0.26); open weights free.
- **Architecture:** hybrid MoE ~35B total / ~3B active (Gated DeltaNet linear attention + sparse experts, 3:1 linear-to-full).

### Raw benchmarks found

Agent / tool use:

- BFCL-V4 (tool use): **67.3%** (digitalapplied table, 35B-A3B class) — vs GPT-5 mini 55.5%, Claude Sonnet 4.5 54.8%
- BrowseComp: **61.0%**; ERQA: **64.7%** (class numbers)

Reasoning / knowledge:

- GPQA Diamond: **79.6%** (BenchGecko, Flash-specific); 84.2% in class table
- OTIS Mock AIME 2024–25: **84.4%**; FrontierMath Tiers 1–3: 19.2%; SimpleQA Verified: 20.3%
- MMLU-Pro 85.3%; HMMT Feb 2025 89.0%; MMMLU 85.2% (class numbers)

Coding:

- LiveCodeBench v6: **74.6%** (class); SWE-bench Verified: **69.2%** (class)
- Chatbot Arena Elo: Overall **1396** / Coding **1243** (BenchGecko, Flash-specific)

Long context:

- 1M hosted context verified; hybrid-attention near-linear compute scaling claimed (3–4x for 10x length)

Multimodal:

- Native VLM text/image/video in, text out; MMMU-Pro 68.4% (class)

### Normalized scores (1–100)

- **Tool use: 76/100.** BFCL-V4 67.3% beats GPT-5 mini/Claude Sonnet 4.5, but agentic and tool benchmarks beyond that are unverified for the hosted Flash route.
- **Reasoning: 78/100.** GPQA Diamond ~79.6–84.2% and OTIS AIME 84.4% are strong for a 3B-active model; SimpleQA 20.3% flags hallucination risk.
- **Context window: 92/100.** 1M verified on the hosted route — top-tier for the price.
- **Multimodal: 78/100.** Native text/image/video input with text output; MMMU-Pro 68.4%.
- **Coding: 80/100.** LiveCodeBench v6 74.6% and SWE-bench Verified 69.2% (class) plus Arena coding Elo 1243 — solid, below the dense 27B sibling.
- **Cost efficiency: 90/100.** $0.065–0.10/$0.26–0.40 (≈1/13th Claude Sonnet 4.6 input price) plus free Apache 2.0 weights — exceptional value.
- **Overall Score: 81/100.** Mean of the five non-cost dims (76+78+92+78+80)/5 = 80.8 → 81. Best-fit: the cheapest long-context production workhorse in the Qwen3.5 medium line; ideal for high-volume RAG/agentic workloads where cost dominates.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-06
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Digital Applied: Qwen 3.5 medium series guide (Flash + class benchmarks)](https://www.digitalapplied.com/blog/qwen-3-5-medium-model-series-benchmarks-pricing-guide)
  - [BenchGecko: Qwen3.5-Flash page](https://benchgecko.ai/model/qwen3-5-flash-02-23)
  - [Hugging Face: Qwen/Qwen3.5-35B-A3B (open-weight sibling)](https://huggingface.co/Qwen/Qwen3.5-35B-A3B)
  - [BenchLM: Qwen3.5 Flash](https://benchlm.ai/models/qwen3-5-flash)
  - [CloudPrice: Qwen3.5 Flash](https://cloudprice.net/models/alibaba-qwen3-5-flash)
  - [Toolprism: Qwen3.5-Flash pricing/benchmarks](https://toolprism.io/models/qwen3-5-flash-02-23/)
- Future sources: add a new file next to this one using the same headings.
