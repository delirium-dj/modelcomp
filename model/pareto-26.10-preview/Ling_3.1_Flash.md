# Pareto 26.10 Preview — findings by Ling 3.1 Flash

- Source: Unbiased / Pareto 26.10 Preview
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pareto 26.10 Preview
- **Short description:** Unbiased's (lab Circuit and Chisel) blended composite model, released 2026-10-01 in preview: one endpoint, several models working in parallel, results combined into one answer. Aimed at research, coding and agentic workflows with frontier-level performance at "open-source pricing" plus a zero-data-retention tier on all OpenRouter/Cloudflare traffic. Preview — may change without notice; `pareto-26.9` remains the stable sibling.
- **Provider / access:** OpenRouter `unbiased/pareto-26.10-preview` (single provider, OpenAI-compatible; `tools`/`tool_choice` supported, no `response_format`); gateways: Respan, UAI (30% markup), TVP.
- **Release / knowledge:** 2026-10-01; knowledge cutoff not published.
- **IDs:** `unbiased/pareto-26.10-preview`; no official weights (composite — Hugging Face search found none, checked 2026-10-03).
- **Context window:** 1,048,576 tokens; max output 131,072 tokens (OpenRouter).
- **Modalities:** text + image in; text out; tool calling; no enforced JSON mode.
- **Pricing (as of 2026-10-08):** $0.80 / 1M input, $3.20 / 1M output, cache read $0.03 / 1M (68%/57%/88% cuts vs Pareto 26.9's $2.50/$7.50/$0.25).
- **Architecture:** proprietary composite (multi-model parallel blend); single-weights specs not published.

### Raw benchmarks found

All four task rows are Unbiased's own preliminary 2026-10-01 runs — the vendor states they "may change before final publication" and that denominators/cost methods need confirmation. No independent evaluator results recorded (Examenos, 2026-10-03).

Agent / tool use:

- Terminal-Bench 4.0: **50.8%** ($0.48 mean/task; vs GPT-6.1 Sol 56.1%, Claude Sonnet 5.5 70.6%)
- DeepSWE v1.1: **69.9%** ($0.24/task; vs Fable 5 70.0% at $13.50/task — ~1/56th the cost)
- Recruitly 18-task job micro-eval: **100% pass** on all 18 (JSON schema, tool-call, RAG-grounding tasks; judge scores 42–100; $0.0003–$0.0029/task)

Reasoning / knowledge:

- GPQA Diamond: **92.4%** ($0.004/task; vs GPT-6.1 Sol 95.4%, Sonnet 5.5 95.6%)
- Humanity's Last Exam (text-only): **49.9%** ($0.008/task; vs GPT-6.1 Sol 52.9%, Sonnet 5.5 55.0%; tools not stated disabled, so not a clean no-tools HLE)

Coding:

- DeepSWE v1.1: **69.9%** (see agent rows; matches Pareto 26.9's 70.0% on a 30-task slice)
- Terminal-Bench 4.0: **50.8%** (see agent rows)

Multimodal:

- Image input supported (OpenRouter/TVP capability rows); no vision benchmark score found.

Long context:

- 1M-token window served; no long-context retrieval score (MRCR/RULER/AA-LCR) found.

### Normalized scores (1–100)

- **Tool use: 72/100.** Terminal-Bench 4.0 50.8% and DeepSWE 69.9% show capable agentic behavior at tiny per-task cost, but both trail the leaders (Sol 56.1%, Sonnet 5.5 70.6% on TB4); numbers are preliminary and self-run.
- **Reasoning: 80/100.** GPQA Diamond 92.4% is elite and HLE text-only 49.9% is strong, though both sit a few points below GPT-6.1 Sol / Sonnet 5.5 and are vendor-run.
- **Context window: 85/100.** Full 1M-token window with 131K max output — 4× the predecessor's 262K — at standard pricing.
- **Multimodal: 65/100.** Image input is supported but no vision benchmark row exists to verify it; text-only output.
- **Coding: 78/100.** DeepSWE 69.9% nearly matches Fable 5 (70.0%) at ~1/56th the per-task cost; Terminal-Bench 4.0 50.8% is the cap.
- **Cost efficiency: 90/100.** $0.80/$3.20 per 1M with $0.004–$0.48 per benchmark task and zero data retention — the model's central claim (best score at each price point) is credible on these four rows.
- **Overall Score: 76/100.** Mean of the five quality dims (72+80+85+65+78)/5 = 76.0; best fit for cost-sensitive agentic coding and research pipelines that accept a moving preview and a composite backend.

---

## Signature

- Provided by: **Ling 3.1 Flash (inclusionai/ling-3.1-flash)** — 2026-10-08
- Method: public internet research (Unbiased launch post, OpenRouter, Examenos, BenchLM, YFarmX, Recruitly, TVP, Respan); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
