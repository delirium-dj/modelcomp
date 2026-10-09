# Solar Mini 4 — findings by Step 5 Preview

- Source: Upstage (`solar-mini4`, released 2026-09-22)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Mini 4 (Upstage's compact reasoning model)
- **Short description:** Upstage's small proprietary reasoner — a 35B-total / **3B-active** MoE with a 524K-token context window (AA lists 1M), built for agentic use cases where response speed and cost matter, with fluent Korean alongside English and Japanese and a February 2026 knowledge cutoff. Artificial Analysis scores it **24 on the Intelligence Index** (#36 of 182; class median 13) — well above average for its price tier — but flags the catch: it is **very verbose** (370M output tokens per index run vs a 100M median), so despite competitive per-token prices ($0.10/$0.40 official, $0.05/$0.20 via OpenRouter) it costs $0.36 per index task — roughly 5× GPT-6 Luna (max) at similar sticker prices. Output speed is below average (75.5 tok/s) with a decent 1.87 s TTFT; third-party coding composites are weak (40/100, #252).
- **Provider / access:** Upstage API (first-party), OpenRouter (cheapest route); proprietary, no weights.
- **Release:** 2026-09-22.
- **Context window:** 524,288 tokens (AA measurement: 1M); max output 131,072.
- **Modalities:** Text in → text out (no image input); reasoning model.
- **Pricing (as of 2026-10-09):** $0.10/M input, $0.40/M output (blended $0.07) on the official API; $0.05/$0.20 via OpenRouter.
- **Knowledge cutoff:** 2026-02-01.

### Raw benchmarks found

Artificial Analysis (independent):

- Intelligence Index: **24** (#36/182; median 13); 18 of 27 evals run
- Output speed: 75.5 tok/s (class median 109.6); TTFT 1.87 s (median 2.16 s)
- Cost per Intelligence-Index task: **$0.36** — ~5× GPT-6 Luna (max) at similar per-token prices
- Verbosity: 370M output tokens per index run (median 100M)

Third-party:

- LM Market Cap coding composite: **40/100** (#252)
- Benchable: 96th-percentile speed, 88th-percentile pricing (provider-level observations)

GPQA/HLE/AIME/SWE-bench/Terminal-Bench/MCP Atlas values for Solar Mini 4: **no verified public score found** (AA's per-eval breakdown is not publicly listed for this model).

### Normalized scores (1–100)

- **Tool use: 45/100.** Built for agentic use cases, but no Terminal-Bench, τ³, MCP Atlas or GDPval number is published for this model — a structural mid-low estimate.
- **Reasoning: 52/100.** AA Intelligence Index 24 is above its price-class median (13) but only mid-tier globally; no GPQA/HLE/AIME figure is public.
- **Context window: 78/100.** 524K (AA-measured 1M) is in the ≥500K band, but with no MRCR/RULER/AA-LCR retrieval curve published the top band can't be justified.
- **Multimodal: 12/100.** Text-only (no image input) — the methodology's text-only band (10–20).
- **Coding: 45/100.** A 40/100 coding composite (#252 on LM Market Cap) and no SWE-bench/LiveCodeBench figure — weak coding for a 2026 model.
- **Cost efficiency: 78/100.** Sticker prices are competitive ($0.05–0.10 / $0.20–0.40) but the verbosity penalty (370M tokens per index run; $0.36/task, 5× GPT-6 Luna) erodes the advantage — the methodology's ~$1/$4 ≈ 85 range docked for measured token burn.
- **Overall Score: 46/100.** Best-fit recommendation: a budget Korean/English/Japanese reasoner with a half-million-token window — adequate general capability at low sticker prices, undermined by verbose output and below-average speed; the wrong pick for coding.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (Artificial Analysis model page + launch article, llm-stats/OpenRouter pricing, LM Market Cap, Benchable); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Solar_Mini_5.md`, using the same headings.
