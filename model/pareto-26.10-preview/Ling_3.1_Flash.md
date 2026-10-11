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

All four task rows are Unbiased's own preliminary 2026-10-01 runs — the vendor states they "may change before final publication" and that denominators/cost methods need confirmation (the 26.9 and Fable 5 DeepSWE results use a 30-task slice, not the full DeepSWE v1.1 set). Independent evaluator coverage: Favur Evals meta-score **57.1/100** (rubric v19; pooled composite 69.4 across a single primary run — "n < 3, treat as unsettled"); no other independent results recorded (Examenos, 2026-10-03).

Agent / tool use:

- Terminal-Bench 4.0: **50.8%** ($0.48 mean/task; vs GPT-6.1 Sol 56.1%, Claude Sonnet 5.5 70.6%)
- DeepSWE v1.1: **69.9%** ($0.24/task; vs Fable 5 70.0% at $13.50/task — ~1/56th the cost)
- Recruitly 18-task job micro-eval: **100% pass** on all 18 (JSON schema, tool-call, RAG-grounding tasks; judge scores 42–100; $0.0003–$0.0029/task; 1.2–33.6s per task)
- Pareto 26.9 comparison (same four benchmarks, 2026-09-20 runs): GPQA Diamond 91.6% at $0.016, HLE 49% at $0.048, DeepSWE 70.0% at $0.29 (30-task slice), TB 4.0 50.8% at $1.69 — 26.10 Preview matches 26.9 on raw scores at 17–83% lower cost per task

Reasoning / knowledge:

- GPQA Diamond: **92.4%** ($0.004/task; vs GPT-6.1 Sol 95.4%, Sonnet 5.5 95.6%)
- Humanity's Last Exam (text-only): **49.9%** ($0.008/task; vs GPT-6.1 Sol 52.9% at $0.078/task, Sonnet 5.5 55.0%; tools not stated disabled, so not a clean no-tools HLE — Examenos flags the tool setting as unspecified)

Coding:

- DeepSWE v1.1: **69.9%** (see agent rows; matches Pareto 26.9's 70.0% on a 30-task slice)
- Terminal-Bench 4.0: **50.8%** (see agent rows)

Multimodal:

- Image input supported (OpenRouter/TVP capability rows); no vision benchmark score found.

Long context:

- 1M-token window served (4× Pareto 26.9's 262K); no long-context retrieval score (MRCR/RULER/AA-LCR) found.

### Normalized scores (1–100)

- **Tool use: 72/100.** Terminal-Bench 4.0 50.8% and DeepSWE 69.9% show capable agentic behavior at tiny per-task cost, but both trail the leaders (GPT-6.1 Sol 56.1%, Sonnet 5.5 70.6% on TB4; GPT-6 Astra 58 and Fable 5.1 56 also read higher on TB4 per Puter); numbers are preliminary and self-run, and Favur's independent meta-score (57.1/100, single run) is provisional.
- **Reasoning: 80/100.** GPQA Diamond 92.4% is elite and HLE text-only 49.9% is strong, though both sit a few points below GPT-6.1 Sol / Sonnet 5.5 and are vendor-run.
- **Context window: 85/100.** Full 1M-token window with 131K max output — 4× the predecessor's 262K — at standard pricing.
- **Multimodal: 65/100.** Image input is supported but no vision benchmark row exists to verify it; text-only output.
- **Coding: 78/100.** DeepSWE 69.9% nearly matches Fable 5 (70.0%) at ~1/56th the per-task cost; Terminal-Bench 4.0 50.8% is the cap.
- **Cost efficiency: 90/100.** $0.80/$3.20 per 1M (68%/57% below Pareto 26.9's $2.50/$7.50; cache reads 88% lower at $0.03) with $0.004–$0.48 per benchmark task, zero data retention on all OpenRouter/Cloudflare traffic, and $10/month subscriptions for 25M tokens/week — the model's central claim (best score at each price point) is credible on these four rows.
- **Overall Score: 76/100.** Mean of the five quality dims (72+80+85+65+78)/5 = 76.0; best fit for cost-sensitive agentic coding and research pipelines that accept a moving preview and a composite backend.

---

## Update 2026-10-11 (deep second pass, 3 independent searches)

**No score changes** — Tool 72 / Reasoning 80 / Context 85 / Multimodal 65 / Coding 78 / Cost 90, Overall stays 76. The model is three weeks old and still vendor-run: every benchmark row is Unbiased's own preliminary 2026-10-01 run, and the only independent evaluator coverage is a single-run meta-score:

- **Pareto 26.9 comparison (Unbiased's 2026-09-20 runs):** GPQA Diamond 91.6% at $0.016/task, HLE 49% at $0.048, DeepSWE 70.0% at $0.29 (30-task slice), TB 4.0 50.8% at $1.69 — 26.10 Preview matches 26.9 on all four raw scores at 17–83% lower cost per task; the "frontier" claim is cost-per-task, not raw score (GPT-6.1 Sol and Sonnet 5.5 lead every raw row).
- **Independent coverage:** Favur Evals meta-score **57.1/100** (rubric v19, last seen 2026-10-04; pooled composite 69.4 across one primary run — "no interval, a single run proves nothing about spread; provisional: n < 3, treat as unsettled"). Examenos records no independent evaluator results. The Recruitly 18-task micro-eval (100% pass, judge scores 42–100, $0.0003–$0.0029/task, 1.2–33.6s) remains the only executed third-party-style check.
- **Distribution/ops:** BYOK-only via OpenRouter (single provider; AnyRouter and Pi list it as BYOK); zero-data-retention tier on all OpenRouter and Cloudflare traffic; $10/month subscriptions for 25M tokens/week; compat flags — supportsReasoningEffort, supportsStrictMode, sendSessionAffinityHeaders, supportsLongCacheRetention and supportsStore are all yes; no developer-role support; `max_completion_tokens` field; the older `unbiased/pareto` (262K, $2.50/$7.50) is a disabled Cloudflare tombstone.
- **Parallel.ai Search Capability Leaderboard (independent-ish, October 2026):** Search Intelligence Score **68.6** (#7 in Search Intelligence; without search 34.8; lift from search +33.8); cost per 1K tasks **$116** (#3 in Search Efficiency, Bronze medal; vs Pareto 26.9's $184, GPT-5.6 Sol's $269, Gemini 3.7 Flash's $130, Opus 5's $1,012); time per task 436s (vs 26.9's 211s — slower but far cheaper).
- **Caveats confirmed:** HLE's tool setting is unspecified (not a clean no-tools read); the 26.9 and Fable 5 DeepSWE results use a 30-task slice; denominators and cost methodology require confirmation; the preview "will continue to improve over the coming week" per the launch post.
- Still open: any independent reproduction of the four headline benchmarks, MCP Atlas/Toolathlon/τ³, MRCR/RULER/AA-LCR, and the final (non-preview) 26.10 release.
- Score impact: none — the new rows (26.9 comparison, Favur meta-score, Recruitly detail) corroborate the existing bands; Overall stays (72+80+85+65+78)/5 = 76.0.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-08 (updated 2026-10-11)
- Method: public internet research (Unbiased launch post + model card, OpenRouter, Examenos, YFarmX, Recruitly, Favur Evals, aimlapi, Puter, AnyRouter, Pi, dev48); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
