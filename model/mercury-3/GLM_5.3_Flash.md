# Mercury 3 — findings by GLM 5.3 Flash

- Source: Inception Labs (`mercury-3`)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury 3
- **Short description:** Inception Labs' flagship diffusion LLM (dLLM) — the most capable text-diffusion model released to date. Generates and refines tokens in parallel through iterative denoising, trading classic autoregressive streaming for very high throughput. Built for latency-sensitive agentic work: search agents, voice pipelines, coding subagents, customer support.
- **Provider / access:** Inception API Platform (`mercury-3`, OpenAI-compatible `v1/chat/completions`); also on OpenRouter (`inception/mercury-3`), Baseten, and Vercel; built-in provider in OpenCode. Chat Completions style.
- **Release / knowledge:** released 2026-10-19; knowledge cutoff not disclosed. Successor already in training per CEO Stefano Ermon.
- **IDs:** `inception/mercury-3` (OpenRouter); `mercury-3` (direct API). Free tier: 100M tokens for new API keys (no card).
- **Context window:** 1,000,000 total; up to 131,072 max output (verified via OpenRouter listing and Inception docs).
- **Modalities:** text in / text out only (no image input, no image generation — confirmed by Inception FAQ and multiple reviews; only the separate Mercury Decide model accepts images). Reasoning: yes (`reasoning_effort`: instant/low/medium/high). Tool calls: yes (incl. parallel calls). Structured outputs: yes. No embeddings endpoint, no fine-tuning, no seed parameter, temperature capped at 0.5–1.0.
- **Pricing (as of 2026-11-04):** list $0.20 in / $0.70 out per 1M; launch promo 50% off = $0.10 in / $0.35 out (no announced end date); cached input $0.01–0.02 (90% off). OpenRouter telemetry shows 86.5% cache-hit rate.
- **Architecture:** proprietary text-diffusion (block diffusion with KV-style prefix caching per third-party analysis); >40x the parameters of Mercury 1 (absolute count undisclosed, no technical report published). Vendor-reported throughput 1,068 tokens/s on NVIDIA GPUs; OpenRouter live traffic median ~221–325 tokens/s (P90 ~79 t/s, P99 end-to-end ~69.5 s) — the 4–8x speed claim holds vs GPT-6 Luna (~130 t/s) but only matches Haiku 5.5 (~240 t/s) on served traffic.

### Raw benchmarks found

All launch-table numbers are vendor-reported (Inception ran all three columns at medium effort; no independent harness replication by Artificial Analysis/Vals found as of 2026-11-04):

Agent / tool use:

- Tau3-Banking: **30.2%** (vendor, medium; vs GPT-6 Luna 23.0 / Haiku 5.5 13.1; field leader GLM-5.3 at 50.3%)
- Mind2Web (50 live tasks, TinyFish production harness, vendor-quoted): **50%** completion
- BrowseComp+: **55.18** / DeepSearchQA: **71.33** (vendor)
- MultiChallenge: **60.4%** (vendor)
- OpenRouter reliability: 0.58% tool-call error rate, 2.51% structured-output error rate (live telemetry)

Reasoning / knowledge:

- GPQA Diamond: **89.23%** (vendor; vs GPT-6 Luna 86.36 / Haiku 5.5 84.51)
- IFBench: **76.84** (vendor; +15 over GPT-6 Luna)
- AA-Omniscience-Public: **46.44** (vendor; GPT-6 Luna 46.94 — narrow loss)
- AIIQ Composite IQ: **98** (third-party, 22nd percentile — independent sanity check)
- Slop Index: **21.6** (third-party aggregator)

Coding:

- SWE-Bench Atlas: **51.08%** (vendor; vs GPT-6 Luna 33.33 / Haiku 5.5 32.26 — widest lead)
- DeepSWE v1: **46.31%** (vendor; Haiku 5.5 wins at 51.62)
- Independent (Henry Towbin, own harness): django/SWE-bench-Verified-derived **25/29 runs** resolved (vs Haiku 5.5 20/30), SciCode **10.3/15** per round; in mini-swe-agent **22/30** (lead over Mercury 2.5 not statistically clear); caveat — the model found benchmark answers via web search during agent runs
- Design Arena Frontend: **1231 Elo** / DataViz: **1203 Elo** (third-party)

Long context:

- MRCR v2 (8-needle): **75.5%** (vendor; Haiku 5.5 78.4 — Mercury 3 loses the long-context test; one secondary source flips the comparison — treated as typo, detailed tables agree on 75.50)
- AA-LCR v1.1: **77.67** (vendor; GPT-6 Luna 78.30 — narrow loss, 82nd percentile per BenchmarkList)

### Normalized scores (1–100)

- **Tool use: 72/100.** Tau3-Banking 30.2% sits just above the 10–25% mid band, Mind2Web 50% on live tasks and strong search-agent numbers (BrowseComp+ 55.2, DeepSearchQA 71.3) support above-mid; capped by live-telemetry tool-call/structured-output error rates and zero independent agentic replication.
- **Reasoning: 84/100.** GPQA Diamond 89.23 is at the frontier-speed-model level (just under the 90% frontier ref); IFBench 76.8 and AIIQ 98 (22nd pct) show it is no deep-reasoning flagship — HLE-class hard reasoning untested.
- **Context window: 93/100.** 1M total (≥1M band = 95–100) with 131,072 output; nudged down for losing MRCR v2 to Haiku 5.5 (75.5 vs 78.4) and narrow AA-LCR loss — good, not elite, 1M retrieval.
- **Multimodal: 15/100.** Strictly text-in/text-out (methodology: text-only = 10–20).
- **Coding: 70/100.** SWE-Bench Atlas 51.08 beats same-class rivals decisively and independent django runs (25/29) are strong, but DeepSWE 46.31 trails Haiku 5.5 and sits far below the 74%+ frontier ref; SciCode ~10.3/15 caps it.
- **Cost efficiency: 96/100.** $0.10/$0.35 launch (~$0.22 blended) with $0.01 cache reads matches the ultra-cheap band; caveat — list price $0.20/$0.70 is *above* Luna/Haiku's $0.50 output once the unannounced-end promo lapses.
- **Overall Score: 67/100.** (72 + 84 + 93 + 15 + 70) / 5 = 66.8 → 67. Best fit: high-volume latency-sensitive orchestration — sub-agents, search, support, extraction — where text-only is acceptable; not for vision or deep-reasoning work.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-04
- Method: public internet research (4 web searches: vendor launch post + press, benchmark-table breakdowns, OpenRouter live telemetry, independent hands-on reviews); scores are normalized 1–100 interpretations, not official vendor scores. All launch-table benchmark rows are vendor-reported (medium effort) pending independent replication — flagged throughout.
- Reference URLs:
  - [Inception Labs — Diffusion at Scale: Introducing Mercury 3 (official launch)](https://www.inceptionlabs.ai/blog/introducing-mercury-3)
  - [MarkTechPost — Mercury 3 benchmark table (GPQA 89.23, SWE-Atlas 51.08, losses detailed)](https://www.marktechpost.com/2026/10/19/inception-mercury-3-diffusion-llm/)
  - [OpenRouter — inception/mercury-3 listing (1M ctx, 131,072 out, pricing, telemetry)](https://openrouter.ai/inception/mercury-3)
  - [eesel AI — independent Mercury 3 review (speed tail, error rates, text-only)](https://www.eesel.ai/blog/inception-mercury-3-review)
  - [Henry Towbin — independent hands-on eval (django/SciCode, contamination caveat)](https://www.henrytowbin.com/posts/2026-testing-mercury-3/)
  - [BenchmarkList — Mercury 3 evals (Tau3-Banking, AIIQ, percentiles)](https://benchmarklist.com/models/inception-mercury-3/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
